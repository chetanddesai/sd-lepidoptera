const FAMILIES = [
  {
    id: "papilionidae",
    name: "Papilionidae",
    common: "Swallowtails",
    description: "Large, showy butterflies often with tail-like extensions on the hindwings. Strong fliers found in gardens, hillsides, and canyons.",
    subfamilies: [
      {
        name: "Papilioninae",
        common: "True Swallowtails",
        species: [
          {
            commonName: "Pipevine Swallowtail",
            scientificName: "Battus philenor",
            description: "Iridescent blue-black upperside with a single row of pale spots along the hindwing margin. Underside of hindwing has bright orange submarginal spots on an iridescent blue field. Body is dark with orange spots on the sides. Mimicked by several other species.",
            wingspan: "7–13 cm",
            flight: "Feb–Oct",
            habitat: "Oak woodlands, chaparral, gardens where pipevines grow",
            rare: false, protected: false
          },
          {
            commonName: "Desert Black Swallowtail",
            scientificName: "Papilio polyxenes coloro",
            description: "Black upperside with a yellow submarginal band of spots on both wings. Hindwing has a blue median band (more extensive in females) and an orange eyespot near the tail. Underside shows more extensive yellow and orange markings. A desert subspecies smaller than the eastern form.",
            wingspan: "6.7–8.9 cm",
            flight: "Mar–Oct",
            habitat: "Desert washes, arid scrub, occasionally gardens",
            rare: false, protected: false
          },
          {
            commonName: "Anise Swallowtail",
            scientificName: "Papilio zelicaon",
            description: "Wings predominantly yellow with broad black borders containing yellow spots. Hindwing has a blue median band and an orange-centered eyespot near the tail. Pupil of the eyespot is black. Underside is similar but paler. Caterpillars feed on plants in the carrot family.",
            wingspan: "5.2–8 cm",
            flight: "Feb–Oct",
            habitat: "Open areas, hilltops, gardens, fields",
            rare: false, protected: false
          },
          {
            commonName: "Pergamus (Indra) Swallowtail",
            scientificName: "Papilio indra pergamus",
            description: "Black wings with short, stubby tails and a cream-yellow band across both wings. The band is narrower than in other swallowtails. Hindwing has a blue median patch and an orange eyespot. Short tails distinguish it from similar species. A mountain and desert canyon specialist.",
            wingspan: "6–8 cm",
            flight: "Mar–Jun",
            habitat: "Rocky canyons, desert hillsides, mountain slopes",
            rare: false, protected: false
          },
          {
            commonName: "Giant Swallowtail",
            scientificName: "Papilio cresphontes",
            description: "The largest butterfly in North America. Dark brown-black upperside with a diagonal band of yellow spots forming an \"X\" pattern when wings are spread. Underside is predominantly creamy yellow with blue and orange patches near the tail. Flight is powerful and soaring.",
            wingspan: "10–16 cm",
            flight: "May–Oct",
            habitat: "Citrus groves, gardens, woodland edges",
            rare: false, protected: false
          },
          {
            commonName: "Western Tiger Swallowtail",
            scientificName: "Papilio rutulus",
            description: "Bright yellow wings with bold black tiger stripes. Hindwing has a row of blue crescents along the margin and an orange eyespot near the single tail. Black marginal borders contain yellow lunules. One of the most recognizable and common swallowtails in San Diego's riparian areas.",
            wingspan: "7–10 cm",
            flight: "Feb–Oct",
            habitat: "Riparian corridors, parks, gardens near cottonwoods and sycamores",
            rare: false, protected: false
          },
          {
            commonName: "Pale Swallowtail",
            scientificName: "Papilio eurymedon",
            description: "Creamy white to pale yellow wings with bold black tiger stripes, similar in pattern to the Western Tiger Swallowtail but distinctly paler. Hindwing has orange and blue marginal spots. The pale coloration is unmistakable in flight compared to its yellow relatives.",
            wingspan: "7–9.5 cm",
            flight: "Apr–Jul",
            habitat: "Chaparral, mountain canyons, oak woodlands",
            rare: false, protected: false
          },
          {
            commonName: "Two-tailed Swallowtail",
            scientificName: "Papilio multicaudata",
            description: "Similar to Western Tiger Swallowtail but larger, with two tails on each hindwing instead of one. Yellow with black tiger stripes; the inner black stripe on the forewing is narrower. Blue and orange marginal markings on hindwing. Rare visitor to San Diego County.",
            wingspan: "9.3–13 cm",
            flight: "May–Sep",
            habitat: "Canyons, streamsides, urban areas with ash trees",
            rare: true, protected: false
          }
        ]
      }
    ]
  },
  {
    id: "pieridae",
    name: "Pieridae",
    common: "Whites and Sulphurs",
    description: "Medium-sized butterflies, mostly white or yellow. Many are strong migrants. Common in open areas, gardens, and agricultural fields.",
    subfamilies: [
      {
        name: "Pierinae",
        common: "Whites",
        species: [
          {
            commonName: "Becker's White",
            scientificName: "Pontia beckerii",
            description: "White upperside heavily marked with greenish-gray along veins, especially on the forewing. Underside of hindwing has extensive olive-green marbling along veins. Forewing has a distinct dark bar at the cell end. Larger and more heavily marked than other Pontia species.",
            wingspan: "3.8–5.4 cm",
            flight: "Mar–Oct",
            habitat: "Desert scrub, alkaline flats, arid disturbed areas",
            rare: false, protected: false
          },
          {
            commonName: "Spring White",
            scientificName: "Pontia sisymbrii",
            description: "White with charcoal-gray markings along veins on the upperside. Underside of hindwing has olive-brown to olive-green scaling along veins, creating a marbled pattern. Spring broods are more heavily marked than summer forms. Forewing cell has a narrow dark bar.",
            wingspan: "3.2–4.8 cm",
            flight: "Feb–May",
            habitat: "Rocky slopes, canyons, mustard-rich hillsides",
            rare: false, protected: false
          },
          {
            commonName: "Checkered White",
            scientificName: "Pontia protodice",
            description: "White wings with dark gray checkered markings concentrated on forewing tips and along margins. Males are less heavily marked than females. Underside of hindwing has olive-tan veining. Spring individuals are more heavily patterned. Distinguished from Cabbage White by checkered pattern.",
            wingspan: "3.2–5.7 cm",
            flight: "All year",
            habitat: "Open disturbed areas, fields, roadsides, vacant lots",
            rare: false, protected: false
          },
          {
            commonName: "Cabbage White",
            scientificName: "Pieris rapae",
            description: "White upperside with black forewing tips. Males have one central black spot on the forewing; females have two. Underside of hindwing is pale yellowish. An introduced European species, now one of the most abundant butterflies in San Diego. Small and fluttering flight.",
            wingspan: "3.2–4.7 cm",
            flight: "All year",
            habitat: "Gardens, agricultural fields, any disturbed area with mustards",
            rare: false, protected: false
          }
        ]
      },
      {
        name: "Anthocharinae",
        common: "Marbles & Orangetips",
        species: [
          {
            commonName: "Desert Pearly Marble",
            scientificName: "Euchloe hyantis lotta",
            description: "Small white butterfly with greenish marbling on the hindwing underside creating a pearly appearance. Forewing upperside has a small dark apical patch. Underside forewing has a green cell-end bar. Spring flier found in desert and transitional habitats.",
            wingspan: "3–4.2 cm",
            flight: "Feb–Apr",
            habitat: "Desert edges, rocky hillsides, sage scrub",
            rare: false, protected: false
          },
          {
            commonName: "Desert Orangetip",
            scientificName: "Anthocharis cethura",
            description: "White wings with bright orange tips on the forewing (reduced in females). Underside of hindwing has greenish-yellow marbling. Males have vivid orange patches; females may lack orange or show yellow tips instead. A spring species tied to desert blooms.",
            wingspan: "3.2–4.5 cm",
            flight: "Jan–Apr",
            habitat: "Desert washes, arid hillsides, chaparral edges",
            rare: false, protected: false
          },
          {
            commonName: "Pacific Sara Orangetip",
            scientificName: "Anthocharis sara sara",
            description: "Bright orange forewing tips on white wings (males). Females have reduced or yellow tips. Underside of hindwing has irregular greenish-brown marbling. Distinguished from Desert Orangetip by more extensive orange patches and coastal/mountain habitat preference.",
            wingspan: "3–4.2 cm",
            flight: "Feb–May",
            habitat: "Coastal sage scrub, chaparral, foothill canyons",
            rare: false, protected: false
          },
          {
            commonName: "Stella Orangetip",
            scientificName: "Anthocharis stella",
            description: "Similar to Sara Orangetip but found at higher elevations. White with bright orange forewing tips in males. Hindwing underside has moss-green to yellowish marbling. Generally flies later in spring than lowland orangetips. Some authorities treat this as a Sara subspecies.",
            wingspan: "3–4.5 cm",
            flight: "Apr–Jun",
            habitat: "Mountain meadows, conifer forest clearings",
            rare: false, protected: false
          },
          {
            commonName: "Grinnell's Marble",
            scientificName: "Anthocharis lanceolata australis",
            description: "Small white butterfly with a yellowish-green marbled pattern on the hindwing underside. Forewing has a small black cell-end bar. Lacks orange tips. Distinguished from Pearly Marble by less bold marbling and slightly different wing shape. Rare in San Diego County.",
            wingspan: "2.8–3.8 cm",
            flight: "Mar–May",
            habitat: "Mountain meadows, clearings in pine-oak woodlands",
            rare: true, protected: false
          }
        ]
      },
      {
        name: "Coliadinae",
        common: "Sulphurs",
        species: [
          {
            commonName: "Orange Sulphur",
            scientificName: "Colias eurytheme",
            description: "Bright orange upperside (males) with broad black borders. Females are orange or white-form with less defined borders. Underside is yellow-orange with a silver cell spot ringed in pink. Very common; hybridizes with Clouded Sulphur where ranges overlap, though Clouded Sulphur is absent from San Diego.",
            wingspan: "3.5–6 cm",
            flight: "All year",
            habitat: "Fields, roadsides, gardens, agricultural areas, open spaces",
            rare: false, protected: false
          },
          {
            commonName: "Harford's Sulphur",
            scientificName: "Colias harfordii",
            description: "Lemon-yellow upperside with narrow black borders (broader in females). Distinguished from Orange Sulphur by pure yellow color without orange flush. Underside is greenish-yellow with a faint silver cell spot. A California endemic found in mountain habitats.",
            wingspan: "3.5–5 cm",
            flight: "Jun–Sep",
            habitat: "Mountain meadows, conifer forest clearings above 4,000 ft",
            rare: false, protected: false
          },
          {
            commonName: "California Dogface",
            scientificName: "Zerene eurydice",
            description: "Male is unmistakable: forewing has a purple-pink iridescent \"dog face\" silhouette on yellow-orange background. Female is plain yellow with a small black cell spot. The California state butterfly. Rapid, darting flight. Underside is plain yellow in both sexes.",
            wingspan: "4.8–6.3 cm",
            flight: "Apr–Oct",
            habitat: "Chaparral, foothill woodlands, mountain canyons",
            rare: false, protected: false
          },
          {
            commonName: "Southern Dogface",
            scientificName: "Zerene cesonia",
            description: "Similar to California Dogface but the male's forewing \"dog face\" pattern is yellow-on-black without purple iridescence. Both sexes show a pointed forewing shape. Underside can be pinkish in fall forms. Hindwing underside has two small silver spots. Rare stray in San Diego.",
            wingspan: "4.4–6.7 cm",
            flight: "All year (irregular)",
            habitat: "Open fields, dry scrub, disturbed areas",
            rare: true, protected: false
          },
          {
            commonName: "Cloudless Sulphur",
            scientificName: "Phoebis sennae marcellina",
            description: "Large, bright lemon-yellow butterfly (males). Females vary from yellow to white with a dark cell spot. Upperside lacks dark borders. Underside has faint pinkish-brown markings. Powerful, direct flight. A seasonal immigrant to San Diego from tropical regions.",
            wingspan: "5.4–8 cm",
            flight: "Jul–Nov",
            habitat: "Gardens, parks, open areas with cassia plants",
            rare: false, protected: false
          },
          {
            commonName: "Mexican Yellow",
            scientificName: "Eurema mexicanum",
            description: "Creamy white to pale yellow with a distinctive pointed forewing (\"dog-ear\" shape). Upperside forewing has a black apical patch. Underside is plain pale yellow. Similar in shape to dogface butterflies but much paler. A rare tropical stray to San Diego.",
            wingspan: "3.8–5.7 cm",
            flight: "Aug–Nov (irregular)",
            habitat: "Desert washes, gardens, open dry areas",
            rare: true, protected: false
          },
          {
            commonName: "Sleepy Orange",
            scientificName: "Eurema nicippe",
            description: "Bright orange upperside with irregular black borders. Underside varies seasonally: yellow in summer, brick-red to brown in winter. Forewing cell spot is faint or absent. Quick, low flight. Distinguished from Orange Sulphur by less uniform borders and slightly smaller size.",
            wingspan: "3.5–5 cm",
            flight: "All year",
            habitat: "Open woodlands, fields, roadsides, desert edges",
            rare: false, protected: false
          },
          {
            commonName: "Dainty Sulphur",
            scientificName: "Nathalis iole",
            description: "The smallest North American sulphur. Narrow yellow wings with black forewing tips and a black bar along the forewing costa. Underside of hindwing is greenish with dusky markings. Elongated forewing shape is distinctive. Low, weak flight close to the ground.",
            wingspan: "1.9–3.2 cm",
            flight: "All year",
            habitat: "Disturbed areas, roadsides, dry fields, weedy lots",
            rare: false, protected: false
          }
        ]
      }
    ]
  },
  {
    id: "lycaenidae",
    name: "Lycaenidae",
    common: "Gossamer-wings",
    description: "Small, delicate butterflies with intricate wing patterns. Includes coppers, hairstreaks, and blues. Many have symbiotic relationships with ants.",
    subfamilies: [
      {
        name: "Lycaeninae",
        common: "Coppers",
        species: [
          {
            commonName: "Tailed Copper",
            scientificName: "Lycaena arota",
            description: "Brown upperside with a coppery sheen; females have more orange on forewing. Distinctive small tail on the hindwing, unique among western coppers. Underside is pale gray with dark spots and an orange hindwing submarginal band. The tail is a key field mark.",
            wingspan: "2.5–3.2 cm",
            flight: "Jun–Aug",
            habitat: "Chaparral, brushy areas with wild currant or gooseberry",
            rare: false, protected: false
          },
          {
            commonName: "Great Copper",
            scientificName: "Lycaena xanthoides",
            description: "The largest North American copper. Male upperside is gray-brown with small dark spots; female has more orange, especially on forewing. Underside is pale gray-white with many small black spots and an orange submarginal band on the hindwing. Slow, sailing flight.",
            wingspan: "3.2–4.4 cm",
            flight: "May–Jul",
            habitat: "Moist meadows, grasslands, seasonal wetland edges near dock plants",
            rare: false, protected: false
          },
          {
            commonName: "Gorgon Copper",
            scientificName: "Lycaena gorgon",
            description: "Male upperside is dull brown with a faint purplish sheen and small dark spots. Female is brighter with orange patches on the forewing. Underside is pale gray with many small dark spots and a faint orange submarginal band on hindwing. Lacks tails.",
            wingspan: "2.5–3.5 cm",
            flight: "Apr–Jul",
            habitat: "Chaparral, oak woodland edges, brushy hillsides",
            rare: false, protected: false
          },
          {
            commonName: "Purplish Copper",
            scientificName: "Lycaena helloides",
            description: "Male upperside has a purplish-brown sheen with an orange submarginal band on the hindwing. Female is more orange with dark spotting. Underside is pinkish-tan with dark spots and a distinct orange zigzag band on the hindwing margin. Common near wet areas.",
            wingspan: "2.5–3.5 cm",
            flight: "Apr–Oct",
            habitat: "Wet meadows, streamsides, disturbed moist areas",
            rare: false, protected: false
          },
          {
            commonName: "Hermes Copper",
            scientificName: "Lycaena hermes",
            description: "Rich brown upperside with yellow patches on both wings, most extensive on the hindwing. Underside is bright yellow with small brown spots. A tail on each hindwing. ENDEMIC to a small region of San Diego County and northern Baja California. Critically endangered due to habitat loss and wildfires.",
            wingspan: "2.5–3.2 cm",
            flight: "May–Jul",
            habitat: "Coastal sage scrub and chaparral with spiny redberry (Rhamnus crocea)",
            rare: false, protected: true
          }
        ]
      },
      {
        name: "Theclinae",
        common: "Hairstreaks",
        species: [
          {
            commonName: "Golden Hairstreak",
            scientificName: "Habrodais grunus",
            description: "Upperside is golden-brown (rarely seen at rest). Underside is rich golden-yellow with a faint darker postmedian line. No tails. Unique golden color on underside is unmistakable. Stays high in oak canopy, rarely descends to ground level.",
            wingspan: "2.5–3.2 cm",
            flight: "Jun–Aug",
            habitat: "Canyon live oak woodlands, mature oak groves",
            rare: false, protected: false
          },
          {
            commonName: "Great Purple Hairstreak",
            scientificName: "Atlides halesus corcorani",
            description: "Large hairstreak with brilliant iridescent blue-purple upperside (visible in flight). Underside is black with red-orange spots at the base and near the two tails. Abdomen is bright red-orange underneath. Unmistakable coloring among hairstreaks.",
            wingspan: "2.5–3.8 cm",
            flight: "Feb–Oct",
            habitat: "Oak and sycamore woodlands where mistletoe grows",
            rare: false, protected: false
          },
          {
            commonName: "Sarita Hairstreak",
            scientificName: "Chlorostrymon simaethis sarita",
            description: "Tiny hairstreak with green underside and a white postmedian line edged with reddish-brown. Upperside is purplish (males) or brown (females). One short tail on each hindwing. Very small size and green underside are key field marks. Rare stray.",
            wingspan: "1.8–2.5 cm",
            flight: "All year (irregular)",
            habitat: "Tropical scrub, gardens with balloon vine",
            rare: true, protected: false
          },
          {
            commonName: "California Hairstreak",
            scientificName: "Satyrium californica",
            description: "Brown upperside with an orange cap over a small blue tail spot on the hindwing. Underside is tan-brown with a row of dark postmedian spots bordered outwardly by white. Orange lunule near the tail. One tail on each hindwing.",
            wingspan: "2.5–3.2 cm",
            flight: "May–Jul",
            habitat: "Chaparral, oak woodlands, mountain canyons",
            rare: false, protected: false
          },
          {
            commonName: "Sylvan Hairstreak",
            scientificName: "Satyrium sylvinus sylvinus",
            description: "Plain brown upperside. Underside is pale gray-brown with a faint postmedian row of small dark spots. Orange lunule near the short tail is often faint or absent. One of the plainer hairstreaks; found near willows, its larval host plant.",
            wingspan: "2.5–3 cm",
            flight: "May–Jul",
            habitat: "Riparian areas, willow thickets, streamside habitats",
            rare: false, protected: false
          },
          {
            commonName: "Gold-hunter's Hairstreak",
            scientificName: "Satyrium auretorum spadix",
            description: "Brown upperside, sometimes with faint orange patches. Underside is warm brown with a row of dark postmedian spots edged outwardly with white. Orange submarginal patch near the tail is more prominent than in Sylvan Hairstreak. Closely tied to oaks.",
            wingspan: "2.2–3 cm",
            flight: "May–Jul",
            habitat: "Oak woodlands, chaparral with scrub oaks",
            rare: false, protected: false
          },
          {
            commonName: "Mountain Mahogany Hairstreak",
            scientificName: "Satyrium tetra",
            description: "Dark brown upperside without orange markings. Underside is gray-brown with a faint postmedian line of dark dashes and small orange cap at the tail spot. Very similar to other Satyrium but associated exclusively with mountain mahogany. Short single tail.",
            wingspan: "2.2–2.8 cm",
            flight: "Jun–Jul",
            habitat: "Mountain slopes with mountain mahogany (Cercocarpus)",
            rare: false, protected: false
          },
          {
            commonName: "Hedgerow Hairstreak",
            scientificName: "Satyrium saepium",
            description: "Brown upperside. Underside is rich warm brown with a postmedian row of dark spots edged in white, often forming a connected line. Prominent orange and blue patch near the tail. One of the more commonly encountered Satyrium hairstreaks in chaparral.",
            wingspan: "2.2–3 cm",
            flight: "May–Jul",
            habitat: "Chaparral, ceanothus scrub, brushy hillsides",
            rare: false, protected: false
          },
          {
            commonName: "Immaculate Bramble Hairstreak",
            scientificName: "Callophrys dumetorum affinis",
            description: "Bright green underside that is mostly unmarked (hence \"immaculate\") or with very faint white postmedian dots. Upperside is brown (rarely seen). Green underside provides excellent camouflage on foliage. Distinguished from other green hairstreaks by lack of distinct white line.",
            wingspan: "2–2.8 cm",
            flight: "Mar–May",
            habitat: "Coastal sage scrub, chaparral with buckwheat or lotus",
            rare: false, protected: false
          },
          {
            commonName: "Brown Elfin",
            scientificName: "Callophrys augustinus",
            description: "Small, tailless hairstreak. Both surfaces are brown; underside is slightly redder-brown with a darker basal half separated from the lighter outer half by an irregular postmedian line. No green coloring. Flight is early spring. Rests with wings closed.",
            wingspan: "2–2.8 cm",
            flight: "Feb–May",
            habitat: "Chaparral, scrubby hillsides, coastal scrub",
            rare: false, protected: false
          },
          {
            commonName: "Western Pine Elfin",
            scientificName: "Callophrys eryphon",
            description: "Small, tailless. Underside has a complex banded pattern of dark brown, gray, and reddish-brown with a jagged postmedian line creating a zigzag effect. Outer portion of hindwing has gray frosting. Upperside is plain brown. Tied to pine forests. Rare in San Diego County.",
            wingspan: "2.2–2.8 cm",
            flight: "Apr–Jun",
            habitat: "Pine forests, conifer woodlands at higher elevations",
            rare: true, protected: false
          },
          {
            commonName: "Thicket Hairstreak",
            scientificName: "Callophrys spinetorum",
            description: "Blue-gray upperside (males), brown (females). Underside is rich reddish-brown with a white postmedian line offset inward on the hindwing. Blue tail spot and orange cap present. Distinguished from Juniper Hairstreak by reddish ground color and offset white line.",
            wingspan: "2.2–3 cm",
            flight: "May–Jul",
            habitat: "Conifer forests with dwarf mistletoe, its larval host",
            rare: false, protected: false
          },
          {
            commonName: "Juniper Hairstreak",
            scientificName: "Callophrys gryneus",
            description: "Green underside with a white postmedian line (straighter than in Thicket Hairstreak). Upperside is brown. Hindwing has orange-brown submarginal spots and a blue tail spot. Two short tails. Found wherever native junipers or cypresses grow.",
            wingspan: "2.2–2.8 cm",
            flight: "Mar–Jun",
            habitat: "Juniper and cypress woodland, chaparral",
            rare: false, protected: false
          },
          {
            commonName: "Nelson's Juniper Hairstreak",
            scientificName: "Callophrys gryneus nelsoni",
            description: "Subspecies of Juniper Hairstreak with brighter green underside and a more prominent white postmedian line. Similar in all other respects. Found in association with incense cedar at higher elevations. Slightly brighter green than the nominate form.",
            wingspan: "2.2–2.8 cm",
            flight: "Apr–Jun",
            habitat: "Higher-elevation conifer forests with incense cedar",
            rare: false, protected: false
          },
          {
            commonName: "Loki Juniper Hairstreak",
            scientificName: "Callophrys gryneus loki",
            description: "Subspecies of Juniper Hairstreak found in desert mountain ranges. Brown underside (not green) with white postmedian line and reddish-brown tones. Desert adaptation with browner coloring than coastal populations. Flies in spring after desert rains.",
            wingspan: "2.2–2.8 cm",
            flight: "Mar–May",
            habitat: "Desert mountain ranges with junipers",
            rare: false, protected: false
          },
          {
            commonName: "Thorne's Hairstreak",
            scientificName: "Callophrys gryneus thornei",
            description: "A rare and localized subspecies endemic to San Diego County, found only on Otay Mountain and nearby ridges. Green underside similar to other Juniper Hairstreaks. Exclusively associated with Tecate cypress (Hesperocyparis forbesii). Highly vulnerable to wildfire.",
            wingspan: "2.2–2.8 cm",
            flight: "Mar–May",
            habitat: "Tecate cypress groves on Otay Mountain area",
            rare: true, protected: true
          },
          {
            commonName: "Gray Hairstreak",
            scientificName: "Strymon melinus pudica",
            description: "The most widespread North American hairstreak. Gray underside with a black-and-white postmedian line bordered outwardly by orange on the hindwing. Large orange and blue-black patches near the tails. Upperside is uniform gray. Extremely varied host plant range.",
            wingspan: "2.2–3.5 cm",
            flight: "All year",
            habitat: "Almost any open habitat: gardens, fields, roadsides, chaparral",
            rare: false, protected: false
          },
          {
            commonName: "Mallow Scrub Hairstreak",
            scientificName: "Strymon istapa",
            description: "Gray-brown underside with dark postmedian spots and a white-edged line. Similar to Gray Hairstreak but with two large black spots near the hindwing base (absent in Gray Hairstreak). Smaller than Gray Hairstreak. Feeds on mallows.",
            wingspan: "1.8–2.5 cm",
            flight: "All year",
            habitat: "Tropical and subtropical scrub, disturbed areas with mallows",
            rare: false, protected: false
          },
          {
            commonName: "Leda Ministreak",
            scientificName: "Ministrymon leda",
            description: "Tiny hairstreak with a gray underside washed with slate-blue at the base. Postmedian line of dark spots edged with white. Prominent orange and black eyespots near the tails. Upperside is blue (males) or gray (females). Very small — easily overlooked.",
            wingspan: "1.5–2 cm",
            flight: "Apr–Nov",
            habitat: "Mesquite bosques, desert edges, areas with prosopis",
            rare: false, protected: false
          }
        ]
      },
      {
        name: "Polyommatinae",
        common: "Blues",
        species: [
          {
            commonName: "Western Pygmy-Blue",
            scientificName: "Brephidium exila",
            description: "One of the smallest butterflies in the world. Brown upperside with blue at the wing bases. Underside is brown with white at base of hindwing and a row of dark submarginal eyespots ringed with metallic scales. Tiny size is the best field mark. Weak, low flight.",
            wingspan: "1.2–2 cm",
            flight: "All year",
            habitat: "Salt marshes, alkaline areas, weedy disturbed sites with saltbush",
            rare: false, protected: false
          },
          {
            commonName: "Marine Blue",
            scientificName: "Leptotes marina",
            description: "Lavender-blue upperside (males) with fine dark striations. Females are browner with blue at the base. Underside is whitish with wavy brown bands creating a zebra-stripe pattern — very distinctive. Hindwing has two submarginal eyespots. Common in gardens.",
            wingspan: "2–2.8 cm",
            flight: "All year",
            habitat: "Gardens, disturbed areas, anywhere with legumes like leadwort",
            rare: false, protected: false
          },
          {
            commonName: "Edward's Blue",
            scientificName: "Hemiargus ceraunus gyas",
            description: "Small blue with pale violet-blue upperside (males). Underside is pale gray with rows of dark spots and one or two orange-capped metallic spots near the hindwing tail area. Distinguished from Reakirt's Blue by spot pattern on underside — spots are rounder, not elongated.",
            wingspan: "1.8–2.5 cm",
            flight: "All year",
            habitat: "Coastal scrub, dry washes, disturbed areas with legumes",
            rare: false, protected: false
          },
          {
            commonName: "Reakirt's Blue",
            scientificName: "Hemiargus isola alce",
            description: "Males are blue above; females are brown with blue at the base. Underside forewing has a distinctive row of dark, outwardly-white-ringed round spots that are larger and more prominent than in similar blues. Hindwing has metallic spots near the margin.",
            wingspan: "1.8–2.5 cm",
            flight: "All year",
            habitat: "Open areas, disturbed fields, weedy lots with mesquite and legumes",
            rare: false, protected: false
          },
          {
            commonName: "Western Tailed-Blue",
            scientificName: "Everes amyntula",
            description: "Small blue with a thin tail on each hindwing — the only tailed blue in the region. Male upperside is bright blue; female is mostly brown with some blue at base. Underside is pale gray with small dark spots and one or two orange submarginal spots on the hindwing.",
            wingspan: "2–2.5 cm",
            flight: "Mar–Jul",
            habitat: "Mountain meadows, streamsides, open areas with legumes",
            rare: false, protected: false
          },
          {
            commonName: "Echo Blue",
            scientificName: "Celastrina ladon echo",
            description: "Pale silvery-blue upperside with narrow dark margins. Underside is chalky pale gray with small scattered dark spots — very plain compared to other blues. Flight is early spring, often the first blue of the year. Flutters around flowering shrubs.",
            wingspan: "2–3 cm",
            flight: "Jan–May",
            habitat: "Woodland edges, riparian areas, chaparral with ceanothus and redbuds",
            rare: false, protected: false
          },
          {
            commonName: "Sonoran Blue",
            scientificName: "Philotes sonorensis",
            description: "Brilliant blue upperside (males) with a red-orange submarginal band on the hindwing — unique among blues. Females are browner with less blue and orange. Underside is gray with dark spots and an orange hindwing submarginal band. A winter/early spring flier.",
            wingspan: "1.8–2.2 cm",
            flight: "Jan–Apr",
            habitat: "Rocky outcrops with dudleya (liveforever) succulents, its sole host",
            rare: false, protected: false
          },
          {
            commonName: "Bernardino Blue",
            scientificName: "Euphilotes bernardino",
            description: "Small blue with bright blue upperside (males) and prominent orange submarginal band on hindwing. Underside is gray-white with bold black spots and an orange hindwing band. Closely tied to buckwheat flowers, which it depends on for nectar and larval food.",
            wingspan: "1.8–2.5 cm",
            flight: "Apr–Sep",
            habitat: "Coastal sage scrub, chaparral with California buckwheat",
            rare: false, protected: false
          },
          {
            commonName: "Dammer's Blue",
            scientificName: "Euphilotes enoptes dammersi",
            description: "Subspecies of Dotted Blue. Small, with blue upperside (males) and variable orange hindwing band. Underside is whitish with bold black spots. Distinguished from Bernardino Blue by timing and exact buckwheat species association. A localized subspecies.",
            wingspan: "1.8–2.5 cm",
            flight: "May–Jul",
            habitat: "Inland chaparral and scrub with specific buckwheat species",
            rare: false, protected: false
          },
          {
            commonName: "Small Blue",
            scientificName: "Philotiella speciosa",
            description: "Very small, dull dark gray-brown butterfly with minimal blue — one of the least colorful blues. Underside is gray with small dark spots. Males show only a slight blue dusting at the wing base. Found in arid habitats with its host, buckwheat.",
            wingspan: "1.5–2 cm",
            flight: "Apr–Jun",
            habitat: "Arid scrub, desert margins with prickly phlox",
            rare: false, protected: false
          },
          {
            commonName: "Arrowhead Blue",
            scientificName: "Glaucopsyche piasus",
            description: "Bright blue upperside (males) with wide dark borders. Underside is gray with a prominent row of large dark spots ringed in white, many of which are distinctly triangular or arrow-shaped — the source of its common name. No orange markings.",
            wingspan: "2.2–3 cm",
            flight: "Mar–Jun",
            habitat: "Chaparral, oak woodland clearings, sage scrub with lupines",
            rare: false, protected: false
          },
          {
            commonName: "Southern Blue",
            scientificName: "Glaucopsyche lygdamus australis",
            description: "Bright silvery-blue upperside (males) with narrow dark borders. Underside is pale gray with a single row of round dark spots ringed with white. Lacks the arrowhead-shaped spots of Arrowhead Blue. A spring species tied to lupines and other legumes.",
            wingspan: "2–2.8 cm",
            flight: "Mar–May",
            habitat: "Mountain meadows, open woodlands with lupines",
            rare: false, protected: false
          },
          {
            commonName: "Melissa Blue",
            scientificName: "Lycaeides melissa paradoxa",
            description: "Male upperside is bright blue with a narrow black border and white fringe. Female is brown with orange submarginal lunules. Underside is gray with black spots and a vivid orange submarginal band on the hindwing. The orange band is broader than in Acmon Blue.",
            wingspan: "2–2.8 cm",
            flight: "Apr–Sep",
            habitat: "Mountain meadows, open areas with lupines and astragalus",
            rare: false, protected: false
          },
          {
            commonName: "Hilda Greenish Blue",
            scientificName: "Plebejus saepiolus hilda",
            description: "Male upperside is iridescent greenish-blue (unique hue among local blues). Female is brown with some blue at base. Underside is pale gray with small dark spots and faint greenish basal flush. No orange markings. Rare in San Diego County mountains.",
            wingspan: "2–2.8 cm",
            flight: "Jun–Aug",
            habitat: "Mountain meadows, moist clearings with clover",
            rare: true, protected: false
          },
          {
            commonName: "Evius Blue",
            scientificName: "Icaricia icaroides evius",
            description: "Large blue. Male is lavender-blue above with a broad dark margin. Female is brown with blue basally. Underside is pale gray with large black spots and variable orange submarginal spots on the hindwing. Larger spots and larger size distinguish it from Acmon Blue.",
            wingspan: "2.2–3.2 cm",
            flight: "Mar–Jul",
            habitat: "Coastal sage scrub, open areas with native lupines",
            rare: false, protected: false
          },
          {
            commonName: "Acmon Blue",
            scientificName: "Icaricia acmon acmon",
            description: "Male is blue above with a narrow dark border. Female is brown with blue at the base and orange submarginal lunules on the hindwing. Underside is gray with dark spots and a bold orange band on the hindwing bordered inwardly with iridescent blue-green spots.",
            wingspan: "1.8–2.5 cm",
            flight: "Feb–Oct",
            habitat: "Very widespread: open areas, gardens, fields, chaparral, coastal scrub",
            rare: false, protected: false
          },
          {
            commonName: "Lupine Blue",
            scientificName: "Icaricia lupini monticola",
            description: "Similar to Acmon Blue but typically found at higher elevations. Male is bright blue above. Underside has orange band on hindwing similar to Acmon but spots may be slightly larger. Best distinguished by range and habitat preference — mountain populations feeding on lupines.",
            wingspan: "2–2.8 cm",
            flight: "May–Aug",
            habitat: "Mountain meadows, pine forest clearings with lupines and buckwheat",
            rare: false, protected: false
          }
        ]
      }
    ]
  },
  {
    id: "riodinidae",
    name: "Riodinidae",
    common: "Metalmarks",
    description: "Small butterflies with metallic-looking spots on the wings. Perch with wings spread flat, unlike most small butterflies. Found in arid habitats.",
    subfamilies: [
      {
        name: "Riodininae",
        common: "Metalmarks",
        species: [
          {
            commonName: "Fatal Metalmark",
            scientificName: "Calephelis nemesis californica",
            description: "Very small, dark brown butterfly with fine metallic silver-gray lines crossing both wings. Wings are held flat when perched. Underside is paler brown with more prominent metallic markings. Found near seep-willow (Baccharis) along desert washes.",
            wingspan: "1.8–2.5 cm",
            flight: "Mar–Nov",
            habitat: "Desert washes, riparian edges, canyons with Baccharis",
            rare: false, protected: false
          },
          {
            commonName: "Wright's Metalmark",
            scientificName: "Calephelis wrighti",
            description: "Slightly brighter and more orange-brown than Fatal Metalmark with similar metallic silver crosslines. Smaller on average. Best distinguished from Fatal Metalmark by habitat — Wright's is found in drier, more inland desert canyon settings. Both perch with wings spread.",
            wingspan: "1.5–2.2 cm",
            flight: "Mar–Oct",
            habitat: "Desert canyons, rocky washes, arid scrub",
            rare: false, protected: false
          },
          {
            commonName: "Mormon Metalmark",
            scientificName: "Apodemia mormo",
            description: "Dark brown-black wings with extensive white spotting and orange patches, especially on the forewing. Metallic silver-blue spots scattered across wings. Highly variable subspecies complex. Perches on buckwheat with wings spread. Quick, darting flight.",
            wingspan: "2–3 cm",
            flight: "Mar–Oct",
            habitat: "Arid scrub, chaparral, buckwheat-rich hillsides",
            rare: false, protected: false
          },
          {
            commonName: "Behr's Metalmark",
            scientificName: "Apodemia mormo virgulti",
            description: "Subspecies of Mormon Metalmark. Dark with bold white spots and patches of orange. More heavily marked with white than some other subspecies. Associated with buckwheat in coastal sage scrub. Pattern and brightness varies by locality.",
            wingspan: "2–2.8 cm",
            flight: "Aug–Oct",
            habitat: "Coastal sage scrub with California buckwheat",
            rare: false, protected: false
          },
          {
            commonName: "Desert Metalmark",
            scientificName: "Apodemia mormo deserti",
            description: "A desert-adapted subspecies, typically paler overall with more extensive orange areas and somewhat reduced white spotting compared to coastal forms. Found in the Anza-Borrego desert region of eastern San Diego County. Spring flier after desert rains.",
            wingspan: "2–2.5 cm",
            flight: "Mar–May",
            habitat: "Desert scrub, bajadas, sandy washes with buckwheat",
            rare: false, protected: false
          },
          {
            commonName: "Peninsular Metalmark",
            scientificName: "Apodemia mormo peninsularis",
            description: "A protected subspecies endemic to the region spanning southernmost San Diego County into northern Baja California. Similar to other Mormon Metalmark subspecies but geographically isolated. Dark with white spots and orange patches. Dependent on native buckwheat habitat.",
            wingspan: "2–2.8 cm",
            flight: "Aug–Oct",
            habitat: "Coastal sage scrub in southernmost San Diego County",
            rare: false, protected: true
          },
          {
            commonName: "Sonoran Metalmark",
            scientificName: "Apodemia mormo mejicanus",
            description: "Another subspecies of the highly variable Mormon Metalmark complex. Generally similar to Behr's Metalmark with dark base color, white spots, and orange patches. Distinguished primarily by range in the eastern desert portions of the county.",
            wingspan: "2–2.5 cm",
            flight: "Sep–Nov",
            habitat: "Desert scrub, arid canyons, rocky hillsides",
            rare: false, protected: false
          },
          {
            commonName: "Palmer's Metalmark",
            scientificName: "Apodemia palmeri",
            description: "Bright orange upperside with dark brown borders and scattered dark spots — much brighter orange overall than Mormon Metalmarks. Underside is paler with similar pattern. Associated with mesquite. A rare desert species in San Diego County.",
            wingspan: "2–2.8 cm",
            flight: "Apr–Oct",
            habitat: "Desert areas with honey mesquite, desert washes",
            rare: true, protected: false
          }
        ]
      }
    ]
  },
  {
    id: "libytheidae",
    name: "Libytheidae",
    common: "Snouts",
    description: "Distinctive butterflies with elongated labial palps that resemble a snout. Only one species in North America.",
    subfamilies: [
      {
        name: "Libytheinae",
        common: "Snouts",
        species: [
          {
            commonName: "American Snout",
            scientificName: "Libytheana carinenta",
            description: "Uniquely shaped butterfly with extremely long palps (\"snout\") projecting forward from the head. Forewing has a squared-off tip with orange patches. Hindwing is plain brown. Underside of hindwing resembles a dead leaf. When at rest on a branch, it mimics a dead leaf with a stem.",
            wingspan: "3.5–5 cm",
            flight: "All year",
            habitat: "Desert washes, hackberry woodlands, riparian areas",
            rare: false, protected: false
          }
        ]
      }
    ]
  },
  {
    id: "nymphalidae",
    name: "Nymphalidae",
    common: "Brushfoots",
    description: "The largest butterfly family, diverse in appearance. Named for reduced, brush-like forelegs. Includes fritillaries, checkerspots, admirals, and monarchs.",
    subfamilies: [
      {
        name: "Heliconiinae",
        common: "Heliconians",
        species: [
          {
            commonName: "Gulf Fritillary",
            scientificName: "Agraulis vanillae incarnata",
            description: "Bright orange upperside with a few black-ringed white spots. Underside is spectacular — brown with large, elongated silver spots that flash brilliantly in flight. Long, narrow wings compared to other fritillaries. Common garden butterfly that feeds on passion vine.",
            wingspan: "6.3–9.5 cm",
            flight: "All year",
            habitat: "Gardens, parks, open areas wherever passion vine grows",
            rare: false, protected: false
          },
          {
            commonName: "Zebra Heliconian",
            scientificName: "Heliconius charitonius tuckeri",
            description: "Unmistakable: long, narrow black wings with bold yellow stripes. Slow, floating flight with shallow wingbeats. Roosts communally at night. Feeds on pollen as well as nectar, which is unusual for butterflies. Tropical species occasionally reaching San Diego.",
            wingspan: "7.2–10 cm",
            flight: "All year (irregular)",
            habitat: "Tropical gardens, parks, hammocks",
            rare: false, protected: false
          }
        ]
      },
      {
        name: "Argynninae",
        common: "Greater Fritillaries",
        species: [
          {
            commonName: "Variegated Fritillary",
            scientificName: "Euptoieta claudia",
            description: "Tawny orange with dark lines and zigzag patterns. Lacks the silver spots on the hindwing underside typical of Speyeria fritillaries. Instead, underside has a mottled tan-brown pattern with pale postmedian band. Broad-winged with a slightly irregular margin. Rare in San Diego.",
            wingspan: "4.4–5.7 cm",
            flight: "Apr–Nov",
            habitat: "Open fields, meadows, roadsides",
            rare: true, protected: false
          },
          {
            commonName: "Semiramis Fritillary",
            scientificName: "Speyeria coronis semiramis",
            description: "Large fritillary with tawny-orange upperside marked with black dots, dashes, and chevrons. Underside of hindwing has large silver spots on a greenish-brown background. Distinguished from Comstock's by larger silver spots and more open, flowing flight.",
            wingspan: "5–7 cm",
            flight: "May–Aug",
            habitat: "Chaparral, foothill woodlands, mountain slopes with wild violets",
            rare: false, protected: false
          },
          {
            commonName: "Comstock's Fritillary",
            scientificName: "Speyeria callippe comstocki",
            description: "Medium-large fritillary with tawny-orange upperside and typical Speyeria black markings. Underside of hindwing is greenish with smaller silver spots than Semiramis Fritillary. A hilltopping species — males patrol ridgetops. Subspecies endemic to southern California.",
            wingspan: "4.5–6.3 cm",
            flight: "May–Jul",
            habitat: "Grasslands, hillsides, open chaparral near native violets",
            rare: false, protected: false
          }
        ]
      },
      {
        name: "Melitaeinae",
        common: "Crescents & Checkerspots",
        species: [
          {
            commonName: "Wright's Checkerspot",
            scientificName: "Thessalia leanira wrighti",
            description: "Black, red-orange, and cream checkered pattern on upperside. Hindwing underside has cream band bordered by red-orange and black creating a bold banded look. Subspecies with brighter coloring than some northern forms. Found in arid, rocky habitats.",
            wingspan: "3–4 cm",
            flight: "Mar–May",
            habitat: "Desert scrub, rocky hillsides, arid canyons",
            rare: false, protected: false
          },
          {
            commonName: "California Patch",
            scientificName: "Chlosyne californica",
            description: "Orange and black checkered upperside with white spots in the black marginal border. Underside of hindwing has orange and cream bands. Similar to Bordered Patch but with more orange and less black. Found in desert areas with sunflower-family host plants.",
            wingspan: "3.5–4.8 cm",
            flight: "Mar–Nov",
            habitat: "Desert scrub, arid canyons, washes with Viguiera",
            rare: false, protected: false
          },
          {
            commonName: "Bordered Patch",
            scientificName: "Chlosyne lacinia crocale",
            description: "Highly variable. Generally black with rows of orange or yellow spots and a cream-white median band on the hindwing. Some forms are almost entirely black. Underside hindwing has a distinctive pattern of orange, yellow, and cream bands. Rare stray to San Diego.",
            wingspan: "3.5–5 cm",
            flight: "All year (irregular)",
            habitat: "Desert areas, disturbed sites with sunflowers",
            rare: true, protected: false
          },
          {
            commonName: "Gabb's Checkerspot",
            scientificName: "Chlosyne gabbii",
            description: "Orange-red and black checkered upperside with cream-yellow spots forming bands. Hindwing underside has alternating bands of red-orange and cream-yellow. Similar to other Chlosyne but with brighter red-orange tones. A southern California specialty.",
            wingspan: "3–4 cm",
            flight: "Mar–May",
            habitat: "Coastal sage scrub, chaparral clearings",
            rare: false, protected: false
          },
          {
            commonName: "Imperial Checkerspot",
            scientificName: "Dymasia dymas imperialis",
            description: "Small checkerspot with orange and black checkered upperside. Underside of hindwing has a pale cream-white band with brown and orange markings. Smaller and more delicate than other checkerspots. Associated with desert habitats.",
            wingspan: "2.5–3.2 cm",
            flight: "Mar–Oct",
            habitat: "Desert washes, arid scrub, rocky hillsides",
            rare: false, protected: false
          },
          {
            commonName: "Texan Crescent",
            scientificName: "Anthanassa texana",
            description: "Black with rows of white spots on the forewing and a red-orange basal patch. Hindwing is mostly black with a cream median band. Underside is mottled brown and cream. Small and dark compared to Phyciodes crescents. Rare stray.",
            wingspan: "2.5–3.8 cm",
            flight: "All year (irregular)",
            habitat: "Streamsides, shady areas with Acanthaceae host plants",
            rare: true, protected: false
          },
          {
            commonName: "Phaon Crescent",
            scientificName: "Phyciodes phaon",
            description: "Orange and black upperside with a cream-colored median band on the forewing (unique among crescents). Underside of hindwing has a pale tan crescent-shaped patch. Smaller than Mylitta Crescent. Found in moist areas with fog fruit (Phyla).",
            wingspan: "2.5–3.5 cm",
            flight: "All year",
            habitat: "Moist open areas, irrigated fields, wet roadsides",
            rare: false, protected: false
          },
          {
            commonName: "Field Crescent",
            scientificName: "Phyciodes pulchellus",
            description: "Orange and black upperside similar to other crescents. Underside of hindwing has a distinctive dark brown patch with a cream crescent. Generally darker overall than Mylitta Crescent. Found in higher-elevation meadows. Rare in San Diego County.",
            wingspan: "2.5–3.8 cm",
            flight: "May–Aug",
            habitat: "Mountain meadows, moist clearings, higher-elevation grasslands",
            rare: true, protected: false
          },
          {
            commonName: "Mylitta Crescent",
            scientificName: "Phyciodes mylitta",
            description: "Orange and black checkered upperside — the most common crescent in San Diego. Underside of hindwing is tan-yellow with brown markings and a pale crescent. Males are brighter orange than females. Small butterfly with weak, low flight among thistles.",
            wingspan: "2.2–3.5 cm",
            flight: "All year",
            habitat: "Anywhere thistles grow: fields, roadsides, gardens, disturbed areas",
            rare: false, protected: false
          },
          {
            commonName: "Variable Checkerspot",
            scientificName: "Euphydryas chalcedona",
            description: "Highly variable species. Typically black with rows of red-orange and cream-yellow spots. Some populations are mostly red-orange, others nearly all black. Underside has bands of red, cream, and black. A spring species often seen hilltopping.",
            wingspan: "3.2–5.7 cm",
            flight: "Mar–Jun",
            habitat: "Chaparral, sage scrub, foothill woodlands",
            rare: false, protected: false
          },
          {
            commonName: "Chalcedon Checkerspot",
            scientificName: "Euphydryas chalcedona chalcedona",
            description: "Nominate subspecies of Variable Checkerspot. Black ground color with evenly spaced rows of red-orange and cream-yellow spots creating a striking checkered pattern. Hindwing underside has red, cream, and black bands. Common in foothill habitats.",
            wingspan: "3.5–5.7 cm",
            flight: "Mar–Jun",
            habitat: "Chaparral, foothill woodlands, sage scrub slopes",
            rare: false, protected: false
          },
          {
            commonName: "Henne's Checkerspot",
            scientificName: "Euphydryas chalcedona hennei",
            description: "A desert subspecies of Variable Checkerspot, typically with more red-orange and less black than the nominate form. Cream-yellow spots may be more extensive. Found in the desert-transition zone of eastern San Diego County. Spring flier.",
            wingspan: "3.2–5 cm",
            flight: "Mar–May",
            habitat: "Desert-chaparral transition, arid sage scrub",
            rare: false, protected: false
          },
          {
            commonName: "Quino Checkerspot",
            scientificName: "Euphydryas editha quino",
            description: "Federally endangered. Checkered pattern of red-orange, cream, and black similar to Variable Checkerspot but typically brighter with more contrasting colors. Cream spots on upperside are whiter. Distinguished by specific host plant (dwarf plantain) and isolated colony structure. Once common, now critically rare.",
            wingspan: "3–4.5 cm",
            flight: "Feb–Apr",
            habitat: "Open coastal sage scrub and grasslands with dwarf plantain (Plantago erecta)",
            rare: true, protected: true
          }
        ]
      },
      {
        name: "Nymphalinae",
        common: "True Brushfoots",
        species: [
          {
            commonName: "Satyr Comma",
            scientificName: "Polygonia satyrus",
            description: "Rich tawny-orange upperside with irregular dark spots and deeply scalloped wing margins. Underside is mottled brown resembling bark or dead leaves, with a silver \"comma\" mark on the hindwing. The comma mark is thicker than in Zephyr Hoary Comma.",
            wingspan: "4.4–5.7 cm",
            flight: "Mar–Oct",
            habitat: "Riparian corridors, shady canyons, streamsides with nettles",
            rare: false, protected: false
          },
          {
            commonName: "Zephyr Hoary Comma",
            scientificName: "Polygonia zephyrus",
            description: "Similar to Satyr Comma but paler orange above with more gray-brown on the outer portions of the wing. Underside is heavily frosted with gray (\"hoary\") giving a lighter, ashier appearance. Silver comma mark is thinner and more curved.",
            wingspan: "4.4–5.7 cm",
            flight: "Jun–Oct",
            habitat: "Mountain forests, high-elevation chaparral, mixed woodlands",
            rare: false, protected: false
          },
          {
            commonName: "California Tortoiseshell",
            scientificName: "Nymphalis californica",
            description: "Rich orange upperside with large black patches on the forewing and a black border on both wings. Underside is dark brown, cryptic when wings are closed. Deeply scalloped margins. Can occur in massive migratory flights in irruption years.",
            wingspan: "4.4–7 cm",
            flight: "Jun–Oct (overwintered adults in spring)",
            habitat: "Mountain chaparral, ceanothus scrub; irruptive migrants found anywhere",
            rare: false, protected: false
          },
          {
            commonName: "Mourning Cloak",
            scientificName: "Nymphalis antiopa",
            description: "Large, dark maroon-brown butterfly with a broad cream-yellow border on both wings and a row of iridescent blue spots just inside the border. Underside is dark, bark-like. One of the longest-lived butterflies (10+ months). Overwinters as an adult; one of the first butterflies of spring.",
            wingspan: "7–10 cm",
            flight: "All year (overwintering)",
            habitat: "Riparian woodlands, parks, any area with willows, elms, or cottonwoods",
            rare: false, protected: false
          },
          {
            commonName: "Milbert's Tortoiseshell",
            scientificName: "Nymphalis milberti subpallida",
            description: "Dark brown-black wings with a broad orange-yellow submarginal band bordered inwardly by black. Band contains two orange patches and blends into a blue inner border. Underside is dark brown with subtle banding. Scalloped margins. Rare at lower elevations in San Diego.",
            wingspan: "4.2–5.5 cm",
            flight: "Jun–Oct",
            habitat: "Mountain meadows, streamsides with nettles",
            rare: true, protected: false
          },
          {
            commonName: "American Lady",
            scientificName: "Vanessa virginiensis",
            description: "Orange and black upperside with white spots on the forewing tip. Key field mark: underside of hindwing has TWO large eyespots (Painted Lady has four smaller ones). Forewing has a small white spot in the orange field. Cobweb pattern on hindwing underside.",
            wingspan: "4.2–5.7 cm",
            flight: "All year",
            habitat: "Open areas, meadows, gardens, hillsides",
            rare: false, protected: false
          },
          {
            commonName: "Painted Lady",
            scientificName: "Vanessa cardui",
            description: "Orange and black upperside with white spots on the forewing tip — the world's most widespread butterfly. Key field mark: underside of hindwing has FOUR small eyespots (vs. two large in American Lady). Can appear in enormous migratory waves. Very common.",
            wingspan: "4.5–7 cm",
            flight: "All year",
            habitat: "Virtually any open habitat; enormous population irruptions during wet years",
            rare: false, protected: false
          },
          {
            commonName: "West Coast Lady",
            scientificName: "Vanessa annabella",
            description: "Similar to Painted Lady but forewing tip has an isolated orange bar in the black area (Painted Lady has a continuous orange band). Upperside forewing has a squared-off look. Hindwing underside has faint eyespots. The default \"lady\" butterfly in San Diego County.",
            wingspan: "4–5.5 cm",
            flight: "All year",
            habitat: "Open areas, gardens, fields, chaparral, coastal scrub with mallows",
            rare: false, protected: false
          },
          {
            commonName: "Red Admiral",
            scientificName: "Vanessa atalanta rubria",
            description: "Velvety black upperside with a bold red-orange diagonal band across the forewing and a red-orange marginal band on the hindwing. Forewing tip has white spots. Underside is mottled dark brown with a red hindwing band. Territorial; returns to same perch.",
            wingspan: "4.5–6.4 cm",
            flight: "All year",
            habitat: "Shady areas, woodland edges, gardens, riparian corridors",
            rare: false, protected: false
          },
          {
            commonName: "Common Buckeye",
            scientificName: "Junonia coenia grisea",
            description: "Brown upperside with prominent eyespots — two on each forewing and one large one on each hindwing. Eyespots are multi-ringed with blue, black, and orange. Two orange bars on the leading edge of the forewing. Underside varies seasonally from tan (summer) to rose (fall).",
            wingspan: "4.2–6.7 cm",
            flight: "All year",
            habitat: "Open disturbed areas, fields, roadsides, bare ground habitats",
            rare: false, protected: false
          }
        ]
      },
      {
        name: "Limenitidinae",
        common: "Admirals & Relatives",
        species: [
          {
            commonName: "Lorquin's Admiral",
            scientificName: "Limenitis lorquini",
            description: "Black upperside with a bold white median band across both wings and orange forewing tips. Underside is similar but with reddish-brown replacing black. Flight is distinctive: a few flaps followed by a flat-winged glide. Common along streams and in parks.",
            wingspan: "5–7 cm",
            flight: "Mar–Oct",
            habitat: "Riparian areas, parks, orchards, any area with willows or cottonwoods",
            rare: false, protected: false
          },
          {
            commonName: "California Sister",
            scientificName: "Adelpha bredowii californica",
            description: "Dark blue-black upperside with a broad white median band and an orange patch near the forewing tip. Underside is orange-brown with white and blue-gray bands — more colorful than upperside. Glides with flat wings through oak woodland canopy. A California specialty.",
            wingspan: "6–8.5 cm",
            flight: "May–Oct",
            habitat: "Oak woodlands, mixed forests, shaded canyons with live oaks",
            rare: false, protected: false
          }
        ]
      },
      {
        name: "Satyrinae",
        common: "Satyrs",
        species: [
          {
            commonName: "Common California Ringlet",
            scientificName: "Coenonympha californica californica",
            description: "Plain pale straw-colored butterfly with no bold markings. Underside has a small eyespot near the forewing tip and sometimes faint eyespots on the hindwing. Pale coloring and bobbing flight low over grasses are distinctive. Often the most abundant species in grasslands.",
            wingspan: "3–4 cm",
            flight: "Mar–Aug",
            habitat: "Grasslands, meadows, open grassy hillsides",
            rare: false, protected: false
          },
          {
            commonName: "Sylvan Great Basin Wood-Nymph",
            scientificName: "Cercyonis sthenele silvestris",
            description: "Dark brown with two prominent eyespots on the forewing (one usually larger than the other). Hindwing underside is bark-like brown with subtle darker striations. Slow, bobbing flight in shady areas. Males have slightly darker coloring and smaller eyespots than females.",
            wingspan: "4–5.5 cm",
            flight: "Jun–Sep",
            habitat: "Oak woodlands, chaparral edges, grassy openings in brushy areas",
            rare: false, protected: false
          }
        ]
      },
      {
        name: "Danainae",
        common: "Milkweed Butterflies",
        species: [
          {
            commonName: "Monarch",
            scientificName: "Danaus plexippus",
            description: "The iconic orange-and-black butterfly. Bright orange wings with black veins and a black border containing white spots. Males have a small black scent patch on the hindwing. Underside is paler orange with same pattern. Famous for long-distance migration to coastal California and Mexico.",
            wingspan: "8.9–10.2 cm",
            flight: "All year (peaks in fall migration)",
            habitat: "Any open area with milkweed; overwinters in eucalyptus groves along the coast",
            rare: false, protected: false
          },
          {
            commonName: "Queen",
            scientificName: "Danaus gilippus thersippus",
            description: "Rich mahogany-brown (darker than Monarch) with black borders and scattered white spots. Lacks the Monarch's bold black veins. Male has a black scent patch on the hindwing. Underside is similar but with veins outlined in black. A tropical relative of the Monarch.",
            wingspan: "6.7–8.8 cm",
            flight: "All year",
            habitat: "Desert edges, open areas with milkweed, gardens",
            rare: false, protected: false
          }
        ]
      }
    ]
  },
  {
    id: "hesperiidae",
    name: "Hesperiidae",
    common: "Skippers",
    description: "Moth-like butterflies with stocky bodies, hooked antennae, and rapid, darting flight. Often overlooked but incredibly diverse. Three subfamilies found in San Diego.",
    subfamilies: [
      {
        name: "Pyrginae",
        common: "Spread-wing Skippers",
        species: [
          {
            commonName: "Silver-spotted Skipper",
            scientificName: "Epargyreus clarus californicus",
            description: "Large skipper with brown wings and a golden-orange patch on the forewing. Key field mark: a large silver-white patch on the hindwing underside, visible even in flight. Robust body. Strong, darting flight. The most recognizable skipper.",
            wingspan: "4.3–6.7 cm",
            flight: "Apr–Sep",
            habitat: "Gardens, woodland edges, chaparral clearings with legumes",
            rare: false, protected: false
          },
          {
            commonName: "Hammock Skipper",
            scientificName: "Polygonus leo arizonensis",
            description: "Large, dark brown skipper with a subtle blue-purple sheen on fresh individuals. Forewing has three small translucent white spots. Underside of hindwing has two dark bands. Tropical species that occasionally strays to San Diego from the southeast.",
            wingspan: "4–5.5 cm",
            flight: "All year (irregular)",
            habitat: "Tropical and subtropical scrub, gardens near leguminous trees",
            rare: false, protected: false
          },
          {
            commonName: "Long-tailed Skipper",
            scientificName: "Urbanus proteus",
            description: "Brown skipper with long tail-like extensions on the hindwing. Body and wing bases are iridescent blue-green. Forewing has translucent spots. A tropical species that occasionally reaches San Diego. The long tails and green body are distinctive.",
            wingspan: "4.4–6 cm",
            flight: "All year (irregular)",
            habitat: "Gardens, fields, disturbed areas with legumes",
            rare: false, protected: false
          },
          {
            commonName: "Plain Longtail",
            scientificName: "Urbanus simplicius",
            description: "Similar to Long-tailed Skipper but LACKS iridescent blue-green coloring. Plain brown with long hindwing tails and transparent forewing spots. Body is brown, not metallic. A rare tropical vagrant. Distinguished from Long-tailed by lack of blue-green sheen.",
            wingspan: "4–5 cm",
            flight: "All year (rare vagrant)",
            habitat: "Open tropical and subtropical areas",
            rare: false, protected: false
          },
          {
            commonName: "Northern Cloudywing",
            scientificName: "Thorybes pylades",
            description: "Dark brown skipper with small, aligned, translucent white spots on the forewing. Hindwing is unmarked dark brown. Face has white patch. Underside of hindwing has two darker brown bands. Stocky bodied. Perches with wings partially spread.",
            wingspan: "3–4.3 cm",
            flight: "Apr–Jul",
            habitat: "Chaparral, brushy hillsides, woodland clearings with legumes",
            rare: false, protected: false
          },
          {
            commonName: "Golden-headed Scallopwing",
            scientificName: "Staphylus ceos",
            description: "Very small, dark brown-black skipper with a scalloped (wavy) wing margin. Head has golden-orange scaling. Forewing may have tiny white dots. Underside is dark with faint lighter bands. Very small size and golden head are key marks. Rare in San Diego.",
            wingspan: "2–2.5 cm",
            flight: "Apr–Oct",
            habitat: "Desert canyons, washes with Amaranthus or Chenopodium",
            rare: true, protected: false
          },
          {
            commonName: "Texas Powdered-Skipper",
            scientificName: "Systasea pulverulenta",
            description: "Small brown skipper with a \"powdery\" dusting of gray scales giving a frosted appearance. Forewing has a row of small white or translucent spots. Underside has mottled gray-brown pattern. Rare desert stray. Distinguished from Arizona Powdered-Skipper by slightly darker tone.",
            wingspan: "2.5–3.5 cm",
            flight: "Apr–Oct",
            habitat: "Desert scrub, washes with mallows",
            rare: true, protected: false
          },
          {
            commonName: "Arizona Powdered Skipper",
            scientificName: "Systasea zampa",
            description: "Similar to Texas Powdered-Skipper. Warm brown wings with gray \"powdery\" scaling and small transparent forewing spots. Underside of hindwing has a complex mottled pattern. Slightly paler and more orange-brown than Texas Powdered-Skipper. A rare desert species.",
            wingspan: "2.5–3.5 cm",
            flight: "Mar–Oct",
            habitat: "Desert areas, rocky hillsides with globe mallows",
            rare: true, protected: false
          },
          {
            commonName: "Sleepy Duskywing",
            scientificName: "Erynnis brizo lacustra",
            description: "Dark brown with lighter and darker brown bands forming a subtle pattern. Forewing LACKS white or translucent spots (unlike most duskywings). Chain-like pattern of dark circles in the median area. Named for its habit of resting on the ground with wings spread.",
            wingspan: "3–4 cm",
            flight: "Mar–May",
            habitat: "Oak woodlands, chaparral with scrub oaks",
            rare: false, protected: false
          },
          {
            commonName: "Propertius Duskywing",
            scientificName: "Erynnis propertius",
            description: "Large duskywing with dark brown forewing marked with gray overscaling (especially females). Forewing has faint glassy spots. Hindwing is dark brown with faint pale spots along the margin. Gray, grizzled appearance helps distinguish it from other Erynnis. Tied to oaks.",
            wingspan: "3.2–4.4 cm",
            flight: "Mar–Jun",
            habitat: "Oak woodlands, chaparral with coast live oak",
            rare: false, protected: false
          },
          {
            commonName: "Mournful Duskywing",
            scientificName: "Erynnis tristis",
            description: "Dark brown to blackish with a distinctive broad white fringe on the hindwing (unique among duskywings). Forewing has small glassy spots. The bold white fringe is visible in flight and is the best field mark. Named for its dark, somber appearance.",
            wingspan: "3–4.4 cm",
            flight: "Mar–Oct",
            habitat: "Oak woodlands, parks, urban areas with oaks",
            rare: false, protected: false
          },
          {
            commonName: "Pacuvius Duskywing",
            scientificName: "Erynnis pacuvius",
            description: "Medium dark brown with a prominent gray-brown patch at the end of the forewing cell. White forewing fringe in some populations. Forewing has glassy spots near the tip. Found in mountain habitats associated with ceanothus, its primary larval host plant.",
            wingspan: "2.8–4 cm",
            flight: "Apr–Jul",
            habitat: "Mountain chaparral, ceanothus-rich slopes",
            rare: false, protected: false
          },
          {
            commonName: "Funereal Duskywing",
            scientificName: "Erynnis funeralis",
            description: "Dark brown-black with a narrow white hindwing fringe (less bold than Mournful Duskywing). Forewing is long and narrow with faint brown patterning. Overall darker and more uniform than Mournful. Common in open, warm habitats. Often the most common duskywing in lowland San Diego.",
            wingspan: "3–4 cm",
            flight: "All year",
            habitat: "Desert edges, gardens, open areas, disturbed sites with legumes",
            rare: false, protected: false
          },
          {
            commonName: "Afranius Duskywing",
            scientificName: "Erynnis afranius",
            description: "Pale brown duskywing with forewing covered in gray overscaling, giving a frosted look. Forewing has small glassy spots near the tip. Female is more contrasting than male. Difficult to distinguish from other duskywings — range and host plant (legumes) help confirm ID.",
            wingspan: "2.5–3.5 cm",
            flight: "Apr–Aug",
            habitat: "Grasslands, open scrub, prairie-like habitats with legumes",
            rare: false, protected: false
          },
          {
            commonName: "Laguna Mountains Skipper",
            scientificName: "Pyrgus ruralis lagunae",
            description: "A federally endangered subspecies. Small black and white checkered skipper similar to other Pyrgus species but restricted to montane meadows in the Laguna Mountains. White spots on dark background form a distinctive checkered pattern. Critically dependent on specific meadow habitats.",
            wingspan: "2.2–3 cm",
            flight: "May–Jul",
            habitat: "Mountain meadows in the Laguna Mountains with Horkelia and native grasses",
            rare: true, protected: true
          },
          {
            commonName: "Small Checkered-Skipper",
            scientificName: "Pyrgus scriptura",
            description: "Very small, dark with small white checks on the forewing. Hindwing is mostly dark above. Underside of hindwing is white with olive-brown veining. Smaller and darker than White Checkered-Skipper. Low, quick flight close to the ground. Found in arid, open habitats.",
            wingspan: "1.8–2.5 cm",
            flight: "All year",
            habitat: "Arid open areas, alkali flats, disturbed sites with mallows",
            rare: false, protected: false
          },
          {
            commonName: "White Checkered-Skipper",
            scientificName: "Pyrgus albescens",
            description: "Black and white checkered pattern on both wings — more white than Small Checkered-Skipper. Males have bluish-white body hair. Underside of hindwing is white with tan bands. Common in open areas. Quick, low flight. Distinguished from Common Checkered-Skipper by range.",
            wingspan: "2.2–3.2 cm",
            flight: "All year",
            habitat: "Open disturbed areas, gardens, fields, roadsides with mallows",
            rare: false, protected: false
          },
          {
            commonName: "Erichson's White-Skipper",
            scientificName: "Heliopetes domicella",
            description: "Bright white wings with narrow brown borders — the whitest of the spread-wing skippers. Forewing has small brown markings along the costa. Males are almost pure white above. Quick, darting flight. A rare tropical stray. Could be confused with a white (Pieridae) in flight.",
            wingspan: "3–3.8 cm",
            flight: "Apr–Oct (irregular)",
            habitat: "Desert washes, canyons with mallows",
            rare: true, protected: false
          },
          {
            commonName: "Northern White-Skipper",
            scientificName: "Heliopetes ericetorum",
            description: "Similar to Erichson's White-Skipper: mostly white with narrow brown borders. Male almost entirely white above; female has more brown. Underside of hindwing has olive-brown streaking. The most common white skipper in the county. Fast, erratic flight.",
            wingspan: "2.8–3.8 cm",
            flight: "Apr–Sep",
            habitat: "Arid slopes, canyons, desert edges with globe mallows",
            rare: false, protected: false
          },
          {
            commonName: "Common Sootywing",
            scientificName: "Pholisora catullus",
            description: "Very small, dark brown-black skipper with tiny white spots on the forewing forming a curved row. Head has white marks. Underside is slightly paler brown. Very dark, almost black appearance is distinctive. Weak, low flight. Rare in San Diego County.",
            wingspan: "2–2.8 cm",
            flight: "Apr–Sep",
            habitat: "Disturbed areas, gardens, weedy lots with lamb's quarters or pigweed",
            rare: true, protected: false
          },
          {
            commonName: "Mohave Sootywing",
            scientificName: "Hesperopsis libya",
            description: "Small, very dark brown skipper similar to Common Sootywing but with fewer and smaller white spots. Underside has faint whitish spots on the hindwing. Found in desert saltbush habitats. Distinguished from Common Sootywing by habitat and subtler markings.",
            wingspan: "2–2.5 cm",
            flight: "Mar–Oct",
            habitat: "Desert saltbush scrub, alkaline flats, desert washes",
            rare: false, protected: false
          }
        ]
      },
      {
        name: "Hesperiinae",
        common: "Grass Skippers",
        species: [
          {
            commonName: "Orange Skipperling",
            scientificName: "Copaeodes aurantiaca",
            description: "Tiny, bright orange skipper — one of the smallest skippers. Narrow wings are unmarked orange above. Underside is paler orange-yellow. No dark markings on the wings. Very small size and plain orange coloring are distinctive. Low, weak flight through grasses.",
            wingspan: "1.8–2.5 cm",
            flight: "Apr–Oct",
            habitat: "Dry grassy areas, desert edges, open scrub with Bermuda grass",
            rare: false, protected: false
          },
          {
            commonName: "Fiery Skipper",
            scientificName: "Hylephila phyleus muertovalle",
            description: "Male is bright orange-yellow above with a jagged dark brown border. Female is darker brown with scattered orange spots. Underside of hindwing is yellow-orange with scattered small dark spots. Short antennae for a skipper. Very common in lawns and gardens.",
            wingspan: "2.5–3.5 cm",
            flight: "All year",
            habitat: "Lawns, gardens, parks, any mowed or grassy area",
            rare: false, protected: false
          },
          {
            commonName: "Alkali Skipper",
            scientificName: "Pseudocopaeodes eunus",
            description: "Small, pale yellow-orange skipper with pointed forewings. Wings are mostly unmarked pale orange above. Underside is pale yellow with a faint streak. Found only near alkaline areas with saltgrass. Very localized in the county. Weak, low flight.",
            wingspan: "2.2–2.8 cm",
            flight: "May–Sep",
            habitat: "Alkaline meadows, edges of salt flats with saltgrass (Distichlis)",
            rare: false, protected: false
          },
          {
            commonName: "Juba Skipper",
            scientificName: "Hesperia juba",
            description: "Large orange-brown skipper. Male has a thick dark stigma on the forewing. Underside of hindwing is olive-green with a bold band of large, sharply-defined cream-white spots — the most distinctive field mark. One of the larger grass skippers. Strong flight.",
            wingspan: "3–3.8 cm",
            flight: "May–Oct",
            habitat: "Mountain meadows, sagebrush flats, open areas with bunchgrasses",
            rare: false, protected: false
          },
          {
            commonName: "Leussler's Skipper",
            scientificName: "Hesperia comma leussleri",
            description: "Subspecies of Common Branded Skipper. Orange-brown above with dark borders. Male has a dark stigma. Underside of hindwing is greenish-gray with a band of distinct white spots. Similar to Juba Skipper but spots on underside are smaller and hindwing ground color is grayer.",
            wingspan: "2.5–3.2 cm",
            flight: "Aug–Oct",
            habitat: "Mountain meadows, grassy clearings at higher elevations",
            rare: false, protected: false
          },
          {
            commonName: "Columbian Skipper",
            scientificName: "Hesperia columbia",
            description: "Orange and brown skipper similar to other Hesperia. Male is bright orange above with a dark border and stigma. Underside of hindwing is greenish-yellow with faint cream spots in a curved band. Less boldly marked below than Juba Skipper. Spring flier.",
            wingspan: "2.5–3.2 cm",
            flight: "Mar–Jun",
            habitat: "Open grasslands, grassy hillsides, meadows",
            rare: false, protected: false
          },
          {
            commonName: "Sandhill Skipper",
            scientificName: "Polites sabuleti sabuleti",
            description: "Small orange-brown skipper. Underside of hindwing is yellow-tan with a cobweb-like pattern of darker veins and pale median chevrons. Upperside is orange with dark borders (male) or brown with orange patches (female). Highly variable by season and locality.",
            wingspan: "2–2.8 cm",
            flight: "Apr–Oct",
            habitat: "Grasslands, salt marsh edges, sandy areas, coastal scrub openings",
            rare: false, protected: false
          },
          {
            commonName: "Sachem",
            scientificName: "Atalopedes campestris",
            description: "Male is bright orange-brown above with a large, rectangular black stigma. Female is dark brown with a few clear forewing spots. Underside of hindwing is pale tan (fall) or with faint darker chevrons. The male's large squarish stigma is distinctive among grass skippers.",
            wingspan: "2.5–3.5 cm",
            flight: "All year",
            habitat: "Lawns, roadsides, agricultural fields, any grassy disturbed area",
            rare: false, protected: false
          },
          {
            commonName: "Rural Skipper",
            scientificName: "Ochlodes agricola",
            description: "Small, golden-orange skipper. Underside of hindwing is uniform warm yellow-orange without bold spots or bands. Similar to Woodland Skipper but underside is plainer, lacking the distinct pale band. Found in chaparral and woodland openings. Spring flier.",
            wingspan: "2.2–3 cm",
            flight: "Apr–Jul",
            habitat: "Chaparral clearings, oak woodland edges, grassy hills",
            rare: false, protected: false
          },
          {
            commonName: "Woodland Skipper",
            scientificName: "Ochlodes sylvanoides",
            description: "Golden-orange above with jagged dark borders (male). Female is darker. Underside of hindwing is warm tawny-brown with a band of yellowish spots forming an irregular line. Very common fall skipper. Distinguished from Rural Skipper by the paler hindwing band below.",
            wingspan: "2.2–3 cm",
            flight: "Jul–Oct",
            habitat: "Open woodlands, suburban gardens, chaparral edges, grassy areas",
            rare: false, protected: false
          },
          {
            commonName: "Umber Skipper",
            scientificName: "Poanes melane",
            description: "Dark brown skipper with golden-orange forewing patches (male) or scattered pale spots (female). Underside of hindwing is purplish-brown with a curved band of golden spots. Darker overall than most grass skippers. Large for a grass skipper. Associated with grasses in shaded areas.",
            wingspan: "2.8–3.5 cm",
            flight: "All year",
            habitat: "Shaded canyons, gardens, lawns, riparian areas with ornamental grasses",
            rare: false, protected: false
          },
          {
            commonName: "Harbison Dun Skipper",
            scientificName: "Euphyes vestris harbisoni",
            description: "Plain dark brown skipper with virtually no markings — one of the most featureless skippers. Males have a faint stigma. Head has orange-yellow scaling at the base of the antenna. Underside is uniform dusky brown. San Diego County subspecies tied to San Diego sedge.",
            wingspan: "2.5–3.2 cm",
            flight: "Jun–Aug",
            habitat: "Riparian areas, wet meadows with San Diego sedge (Carex spissa)",
            rare: false, protected: false
          },
          {
            commonName: "Eufala Skipper",
            scientificName: "Lerodea eufala",
            description: "Small, drab gray-brown skipper with a few faint translucent white spots on the forewing. Underside of hindwing is grayish with faint pale veins. Very plain — one of the dullest skippers. Distinguished by gray-brown coloring and white forewing spots. Weak flight near grasses.",
            wingspan: "2.2–2.8 cm",
            flight: "All year",
            habitat: "Grassy areas, agricultural fields, irrigated lawns, marshes",
            rare: false, protected: false
          },
          {
            commonName: "Wandering Skipper",
            scientificName: "Panoquina errans",
            description: "Dark brown skipper with a few translucent forewing spots. Underside of hindwing has a faint pale postmedian streak. Restricted to coastal salt marshes where saltgrass (Distichlis) grows. Declining due to coastal habitat loss. Flight is strong and directional.",
            wingspan: "2.5–3.2 cm",
            flight: "Jun–Nov",
            habitat: "Coastal salt marshes with saltgrass (Distichlis spicata)",
            rare: true, protected: false
          }
        ]
      },
      {
        name: "Megathyminae",
        common: "Giant Skippers",
        species: [
          {
            commonName: "California Giant-Skipper",
            scientificName: "Agathymus stephensi",
            description: "Very large dark brown skipper with yellow-orange spots and bands on both wings. Body is thick and furry. Rapid, powerful, buzzing flight. Larvae bore into agave stems. Adults rarely visit flowers — short-lived and focused on reproduction. The largest skipper in the region.",
            wingspan: "4.5–6 cm",
            flight: "Sep–Nov",
            habitat: "Desert slopes and canyons with agave (Agave deserti)",
            rare: false, protected: false
          },
          {
            commonName: "Yucca Giant-Skipper",
            scientificName: "Megathymus yuccae",
            description: "Large, dark brown skipper with yellow marginal spots on the hindwing and a yellow forewing bar. Body is very robust and hairy. Wings are held roof-like at rest (unlike most skippers). Larvae bore into yucca roots. Powerful flight near yucca stands.",
            wingspan: "4–6 cm",
            flight: "Feb–May",
            habitat: "Chaparral and coastal scrub with Our Lord's Candle yucca",
            rare: false, protected: false
          },
          {
            commonName: "Martin's Giant Skipper",
            scientificName: "Megathymus yuccae martini",
            description: "A subspecies of Yucca Giant-Skipper found in specific mountain habitats. Similar in appearance to the nominate form — large, dark brown with yellow spots. Distinguished primarily by range and the specific yucca species it uses as a host. Spring flier.",
            wingspan: "4–5.5 cm",
            flight: "Mar–May",
            habitat: "Mountain slopes with Mojave yucca or banana yucca",
            rare: false, protected: false
          },
          {
            commonName: "Harbison Giant Skipper",
            scientificName: "Megathymus yuccae harbisoni",
            description: "A subspecies endemic to western San Diego County. Large and dark brown with yellow wing markings like other Yucca Giant-Skippers. Dependent on our Lord's Candle (Hesperoyucca whipplei) for larval development. Localized populations in coastal chaparral.",
            wingspan: "4–5.5 cm",
            flight: "Mar–May",
            habitat: "Coastal and inland chaparral with Hesperoyucca whipplei",
            rare: false, protected: false
          }
        ]
      }
    ]
  }
];

const TOTAL_SPECIES = FAMILIES.reduce((sum, fam) =>
  sum + fam.subfamilies.reduce((s, sub) => s + sub.species.length, 0), 0
);
