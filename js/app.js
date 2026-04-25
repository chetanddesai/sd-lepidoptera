(() => {
  "use strict";

  const IMAGE_CACHE_KEY = "sd-lep-img-cache-v2";
  const INAT_API = "https://api.inaturalist.org/v1/taxa";
  const CONCURRENT_FETCHES = 4;
  const CITY_STORAGE_KEY = "sd-lep-city";

  let imageCache = loadImageCache();
  let fetchQueue = [];
  let activeFetches = 0;
  let currentFilter = "all";
  let currentSearch = "";
  let currentCity = loadCityPref();

  function loadImageCache() {
    try {
      return JSON.parse(localStorage.getItem(IMAGE_CACHE_KEY)) || {};
    } catch {
      return {};
    }
  }

  function saveImageCache() {
    try {
      localStorage.setItem(IMAGE_CACHE_KEY, JSON.stringify(imageCache));
    } catch { /* storage full — ignore */ }
  }

  function loadCityPref() {
    try {
      const saved = localStorage.getItem(CITY_STORAGE_KEY);
      if (saved && LOCATIONS.some(l => l.id === saved)) return saved;
    } catch { /* ignore */ }
    return "poway";
  }

  function saveCityPref(cityId) {
    try { localStorage.setItem(CITY_STORAGE_KEY, cityId); } catch { /* ignore */ }
  }

  // Butterfly SVG placeholder
  const BUTTERFLY_SVG = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 20C32 20 20 8 10 14C0 20 4 34 14 34C24 34 32 28 32 28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M32 20C32 20 44 8 54 14C64 20 60 34 50 34C40 34 32 28 32 28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M32 28C32 28 22 30 16 40C10 50 18 56 24 50C30 44 32 36 32 36" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M32 28C32 28 42 30 48 40C54 50 46 56 40 50C34 44 32 36 32 36" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="32" y1="18" x2="32" y2="52" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M32 18C30 14 28 10 26 8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M32 18C34 14 36 10 38 8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
  </svg>`;

  const ICONS = {
    wingspan: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20M2 12l4-4M2 12l4 4M22 12l-4-4M22 12l-4 4"/></svg>`,
    calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    habitat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c-4-3-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-4 9-8 12z"/><circle cx="12" cy="10" r="3"/></svg>`,
    pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c-4-3-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-4 9-8 12z"/><circle cx="12" cy="10" r="3"/></svg>`
  };

  // ============ LOCATION HELPERS ============

  function getCityData() {
    return LOCATION_DATA[currentCity] || {};
  }

  function getCityInfo() {
    return LOCATIONS.find(l => l.id === currentCity) || LOCATIONS[0];
  }

  function getLikelihood(scientificName) {
    const cityData = getCityData();
    const count = cityData[scientificName];
    if (!count) return "not-recorded";
    if (count >= 5) return "common";
    return "occasional";
  }

  function getLikelihoodLabel(likelihood) {
    switch (likelihood) {
      case "common": return "Recorded here";
      case "occasional": return "Few records";
      case "not-recorded": return "Not recorded";
    }
  }

  function getObsCount(scientificName) {
    return getCityData()[scientificName] || 0;
  }

  // ============ RENDER ============

  function renderCitySelector() {
    const select = document.getElementById("city-select");
    select.innerHTML =
      `<option value="all-county">All San Diego County</option>` +
      LOCATIONS.map(l =>
        `<option value="${l.id}"${l.id === currentCity ? " selected" : ""}>${l.name}</option>`
      ).join("");
  }

  function renderFamilyLinks() {
    const container = document.getElementById("family-links");
    container.innerHTML = FAMILIES.map(f =>
      `<a href="#${f.id}" class="family-link" data-family="${f.id}">${f.common}</a>`
    ).join("");
  }

  function renderContent() {
    const main = document.getElementById("main-content");
    main.innerHTML = renderCityNote() + FAMILIES.map(renderFamily).join("");
  }

  function renderCityNote() {
    if (currentCity === "all-county") return "";
    const info = getCityInfo();
    const cityData = getCityData();
    const recorded = Object.keys(cityData).length;
    return `
      <div class="city-habitat-note" id="city-note">
        ${ICONS.pin}
        <span>
          Showing <span class="city-stats">${recorded} species</span> recorded in
          <strong>${info.name}</strong> — ${info.habitat}.
          Select "All San Diego County" to see the full checklist.
        </span>
      </div>`;
  }

  function renderFamily(family) {
    return `
      <section class="family-section" id="${family.id}">
        <div class="family-header">
          <h2>${family.name}</h2>
          <span class="family-common">${family.common}</span>
        </div>
        <p class="family-description">${family.description}</p>
        ${family.subfamilies.map(sub => renderSubfamily(sub, family)).join("")}
      </section>`;
  }

  function renderSubfamily(sub, family) {
    return `
      <div class="subfamily-section">
        <div class="subfamily-header">
          <h3>${sub.name}</h3>
          <span class="subfamily-common">${sub.common}</span>
          <span class="species-count-badge">${sub.species.length} species</span>
        </div>
        <div class="species-grid">
          ${sub.species.map(sp => renderSpeciesCard(sp, family)).join("")}
        </div>
      </div>`;
  }

  function renderSpeciesCard(sp, family) {
    const cardId = toId(sp.scientificName);
    const badges = [];
    if (sp.protected) badges.push(`<span class="badge badge-protected">Protected</span>`);
    if (sp.rare) badges.push(`<span class="badge badge-rare">Rare</span>`);

    const likelihood = currentCity !== "all-county" ? getLikelihood(sp.scientificName) : null;
    const obsCount = getObsCount(sp.scientificName);

    return `
      <article class="species-card" id="${cardId}"
        data-common="${sp.commonName.toLowerCase()}"
        data-scientific="${sp.scientificName.toLowerCase()}"
        data-species-name="${sp.scientificName}"
        data-family="${family.id}"
        data-rare="${sp.rare}" data-protected="${sp.protected}"
        data-likelihood="${likelihood || "all"}">
        <div class="card-image-wrap">
          <div class="image-placeholder loading" id="ph-${cardId}">
            ${BUTTERFLY_SVG}
            <span class="loading-label">Loading photo</span>
          </div>
          <img alt="${sp.commonName} (${sp.scientificName})" data-species="${sp.scientificName}">
          ${badges.length ? `<div class="card-badges">${badges.join("")}</div>` : ""}
          ${likelihood && obsCount > 0 ? `<span class="likelihood-badge ${likelihood}" title="${obsCount} observation${obsCount !== 1 ? "s" : ""} in ${getCityInfo().name}">${getLikelihoodLabel(likelihood)}</span>` : ""}
        </div>
        <div class="card-body">
          <h4>${sp.commonName}</h4>
          <p class="scientific-name">${sp.scientificName}</p>
          <p class="card-description">${sp.description}</p>
          <div class="card-meta">
            ${sp.wingspan ? `<span class="meta-tag">${ICONS.wingspan}${sp.wingspan}</span>` : ""}
            ${sp.flight ? `<span class="meta-tag">${ICONS.calendar}${sp.flight}</span>` : ""}
            ${sp.habitat ? `<span class="meta-tag">${ICONS.habitat}${sp.habitat}</span>` : ""}
            ${likelihood && obsCount > 0 ? `<span class="meta-tag">${ICONS.pin}${obsCount} obs in ${getCityInfo().name}</span>` : ""}
          </div>
        </div>
      </article>`;
  }

  function toId(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  // ============ IMAGE LOADING ============

  function setupImageObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target.querySelector("img[data-species]");
          if (img && !img.src) {
            queueImageFetch(img);
          }
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "300px" });

    document.querySelectorAll(".card-image-wrap").forEach(wrap => {
      observer.observe(wrap);
    });
  }

  function queueImageFetch(img) {
    const species = img.dataset.species;
    if (imageCache[species]) {
      applyImage(img, imageCache[species]);
      return;
    }
    fetchQueue.push(img);
    processQueue();
  }

  function processQueue() {
    while (activeFetches < CONCURRENT_FETCHES && fetchQueue.length > 0) {
      const img = fetchQueue.shift();
      activeFetches++;
      fetchSpeciesImage(img).finally(() => {
        activeFetches--;
        processQueue();
      });
    }
  }

  async function fetchSpeciesImage(img) {
    const species = img.dataset.species;
    const cardId = toId(species);

    const searchName = species.split(" ").slice(0, 2).join(" ");

    try {
      const resp = await fetch(
        `${INAT_API}?q=${encodeURIComponent(searchName)}&per_page=1&is_active=true`
      );
      if (!resp.ok) throw new Error("API error");
      const data = await resp.json();

      if (data.results && data.results.length > 0) {
        const taxon = data.results[0];
        if (taxon.default_photo) {
          const photoData = {
            url: taxon.default_photo.medium_url || taxon.default_photo.url,
            attribution: taxon.default_photo.attribution || "",
            inatUrl: `https://www.inaturalist.org/taxa/${taxon.id}`
          };
          imageCache[species] = photoData;
          saveImageCache();
          applyImage(img, photoData);
          return;
        }
      }
      showPlaceholder(cardId, false);
    } catch {
      showPlaceholder(cardId, false);
    }
  }

  function applyImage(img, photoData) {
    const cardId = toId(img.dataset.species);
    img.onload = () => {
      img.classList.add("loaded");
      const ph = document.getElementById(`ph-${cardId}`);
      if (ph) ph.style.display = "none";
    };
    img.onerror = () => showPlaceholder(cardId, false);
    img.src = photoData.url;

    const wrap = img.closest(".card-image-wrap");
    if (wrap && photoData.attribution) {
      let credit = wrap.querySelector(".image-credit");
      if (!credit) {
        credit = document.createElement("div");
        credit.className = "image-credit";
        wrap.appendChild(credit);
      }
      credit.innerHTML = `<a href="${photoData.inatUrl}" target="_blank" rel="noopener" title="${photoData.attribution}">iNaturalist</a>`;
    }
  }

  function showPlaceholder(cardId, loading) {
    const ph = document.getElementById(`ph-${cardId}`);
    if (!ph) return;
    ph.classList.toggle("loading", loading);
    const label = ph.querySelector(".loading-label");
    if (label) {
      label.textContent = loading ? "Loading photo" : "No photo available";
    }
  }

  // ============ SEARCH & FILTER ============

  function applyFilters() {
    const cards = document.querySelectorAll(".species-card");
    let visibleCount = 0;
    const citySelected = currentCity !== "all-county";

    cards.forEach(card => {
      const common = card.dataset.common;
      const scientific = card.dataset.scientific;
      const matchesSearch = !currentSearch
        || common.includes(currentSearch)
        || scientific.includes(currentSearch);

      const isRecorded = card.dataset.likelihood === "common" || card.dataset.likelihood === "occasional";

      let matchesFilter = true;
      if (currentFilter === "protected") matchesFilter = card.dataset.protected === "true";
      if (currentFilter === "rare") matchesFilter = card.dataset.rare === "true";
      if (currentFilter === "recorded") matchesFilter = isRecorded;

      // When a city is selected, hide species not recorded there
      const matchesCity = !citySelected || isRecorded;

      const visible = matchesSearch && matchesFilter && matchesCity;
      card.classList.toggle("hidden", !visible);
      if (visible) visibleCount++;
    });

    document.querySelectorAll(".subfamily-section").forEach(sub => {
      const hasVisible = sub.querySelector(".species-card:not(.hidden)");
      sub.style.display = hasVisible ? "" : "none";
    });

    document.querySelectorAll(".family-section").forEach(fam => {
      const hasVisible = fam.querySelector(".species-card:not(.hidden)");
      fam.style.display = hasVisible ? "" : "none";
    });

    let noResults = document.querySelector(".no-results");
    if (visibleCount === 0) {
      if (!noResults) {
        noResults = document.createElement("div");
        noResults.className = "no-results";
        noResults.innerHTML = `<h3>No butterflies found</h3><p>Try a different search term or filter.</p>`;
        document.getElementById("main-content").appendChild(noResults);
      }
      noResults.style.display = "";
    } else if (noResults) {
      noResults.style.display = "none";
    }
  }

  // ============ CITY CHANGE ============

  function onCityChange(cityId) {
    currentCity = cityId;
    saveCityPref(cityId);

    // Re-render content with new city data
    renderContent();
    setupImageObserver();
    applyFilters();

    // Update hero count
    if (currentCity !== "all-county") {
      const recorded = Object.keys(getCityData()).length;
      document.getElementById("species-count").textContent =
        `${TOTAL_SPECIES} species countywide · ${recorded} recorded in ${getCityInfo().name}`;
    } else {
      document.getElementById("species-count").textContent =
        `${TOTAL_SPECIES} species across ${FAMILIES.length} families`;
    }
  }

  // ============ NAVIGATION HIGHLIGHTING ============

  function setupScrollSpy() {
    const familyLinks = document.querySelectorAll(".family-link");
    const sections = document.querySelectorAll(".family-section");
    const navScroller = document.getElementById("family-nav");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          familyLinks.forEach(link => link.classList.remove("active"));
          const activeLink = document.querySelector(`.family-link[data-family="${entry.target.id}"]`);
          if (activeLink) {
            activeLink.classList.add("active");
            const navRect = navScroller.getBoundingClientRect();
            const linkRect = activeLink.getBoundingClientRect();
            const offset = linkRect.left - navRect.left - navRect.width / 2 + linkRect.width / 2;
            navScroller.scrollBy({ left: offset, behavior: "smooth" });
          }
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });

    sections.forEach(s => observer.observe(s));
  }

  // ============ EVENT LISTENERS ============

  function setupEvents() {
    const searchInput = document.getElementById("search");
    let debounceTimer;
    searchInput.addEventListener("input", () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        currentSearch = searchInput.value.toLowerCase().trim();
        applyFilters();
      }, 200);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
      }
      if (e.key === "Escape" && document.activeElement === searchInput) {
        searchInput.value = "";
        currentSearch = "";
        searchInput.blur();
        applyFilters();
      }
    });

    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        applyFilters();
      });
    });

    // City selector
    document.getElementById("city-select").addEventListener("change", (e) => {
      onCityChange(e.target.value);
    });

    const nav = document.getElementById("sticky-nav");
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 100);
    }, { passive: true });

    const btt = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
      btt.classList.toggle("visible", window.scrollY > 600);
    }, { passive: true });
    btt.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ============ INIT ============

  function init() {
    renderCitySelector();
    renderFamilyLinks();
    renderContent();
    setupImageObserver();
    setupScrollSpy();
    setupEvents();

    // Set initial hero text
    if (currentCity !== "all-county") {
      const recorded = Object.keys(getCityData()).length;
      document.getElementById("species-count").textContent =
        `${TOTAL_SPECIES} species countywide · ${recorded} recorded in ${getCityInfo().name}`;
    } else {
      document.getElementById("species-count").textContent =
        `${TOTAL_SPECIES} species across ${FAMILIES.length} families`;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
