// Fivey AP Environmental Science question bank: original questions aligned to the nine units
// of the College Board AP Environmental Science course framework. Hand-written items cover
// concepts, data tables, graphs, experimental design, and predictions; calculation items are
// generated with different values so each unit has many distinct practice questions.
// Hand-written format: [family, prompt, correct, wrong, wrong, wrong, explanation]

const written = [
  // Unit 1: The Living World: Ecosystems
  [
    ['concept', 'Two warbler species live in the same spruce trees. One feeds on insects near the tips of high branches, and the other feeds near the trunk on lower branches. Which concept does this best illustrate?', 'Resource partitioning', 'Mutualism', 'Intraspecific competition', 'Primary succession', 'Dividing a shared resource by space or time lets competing species coexist.'],
    ['concept', 'Several different bird species compete for the same tree cavities to build nests. What type of interaction is this?', 'Interspecific competition', 'Intraspecific competition', 'Commensalism', 'Predation', 'Competition between members of different species for the same limited resource is interspecific competition.'],
    ['concept', 'Small fish called remoras attach to sharks and eat scraps from the sharks’ meals without harming or helping the sharks. Which relationship is this?', 'Commensalism', 'Mutualism', 'Parasitism', 'Predation', 'One species benefits and the other is neither helped nor harmed.'],
    ['data', 'Climate data for a biome:\nMean annual temperature: −12 °C\nAnnual precipitation: 18 cm\nGrowing season: about 50 days\nSoil: permanently frozen below the surface\nWhich biome is described?', 'Tundra', 'Boreal forest (taiga)', 'Temperate grassland', 'Desert', 'Very cold temperatures, little precipitation, a short growing season, and permafrost describe the tundra.'],
    ['concept', 'Which biome is characterized by hot, dry summers, mild, wet winters, drought-adapted shrubs, and frequent wildfires?', 'Chaparral (Mediterranean shrubland)', 'Tropical rainforest', 'Tundra', 'Temperate rainforest', 'Chaparral plants are adapted to summer drought and regular fires.'],
    ['concept', 'Which process moves carbon from the atmosphere into living organisms most quickly?', 'Photosynthesis', 'Formation of sedimentary rock', 'Burial of organic matter as fossil fuels', 'Volcanic eruptions', 'Photosynthesis fixes atmospheric CO₂ into sugars on short time scales; rock and fossil fuel formation take millions of years.'],
    ['concept', 'What is the largest long-term reservoir of carbon on Earth?', 'Sedimentary rocks such as limestone', 'The atmosphere', 'Living plants', 'Soil bacteria', 'Most of Earth’s carbon is stored in carbonate rocks and buried organic matter.'],
    ['concept', 'Which process converts atmospheric nitrogen gas (N₂) into ammonia that plants can use?', 'Nitrogen fixation by bacteria', 'Denitrification', 'Ammonification', 'Assimilation', 'Nitrogen-fixing bacteria, often in legume root nodules, convert N₂ into NH₃.'],
    ['concept', 'Which process returns nitrogen to the atmosphere?', 'Denitrification by bacteria in low-oxygen soils', 'Nitrification', 'Nitrogen fixation', 'Assimilation by plants', 'Denitrifying bacteria convert nitrates into N₂ gas under anaerobic conditions.'],
    ['predict', 'Unlike the carbon and nitrogen cycles, the phosphorus cycle has no major gaseous phase. Which consequence follows?', 'Phosphorus cycles slowly and is often a limiting nutrient in ecosystems.', 'Phosphorus is never limiting for plant growth.', 'Phosphorus is mainly stored in the atmosphere.', 'Phosphorus is released mostly by volcanic gases.', 'Phosphorus moves mainly through rock weathering and sediments, which is slow, so it often limits growth.'],
    ['concept', 'Which statement best describes gross primary productivity (GPP)?', 'The total rate at which producers capture and store energy through photosynthesis', 'The energy left after producers use some for respiration', 'The energy passed to primary consumers', 'The energy released by decomposers', 'GPP is total photosynthetic production; NPP is GPP minus the energy producers use in respiration.'],
    ['concept', 'Why is only about 10 percent of the energy at one trophic level available to the next trophic level?', 'Most energy is used for metabolism and lost as heat, as described by the second law of thermodynamics.', 'Energy is destroyed when organisms eat each other.', 'Producers convert most energy into matter.', 'The first law of thermodynamics says energy decreases at each level.', 'Energy is conserved but most is lost as heat during cellular respiration, so little is stored as biomass.'],
    ['predict', 'Wolves are removed from a forest ecosystem where they hunted deer. Which sequence of effects is most likely?', 'Deer populations increase, and overbrowsing reduces young trees and shrubs.', 'Deer populations decrease, and young trees decline.', 'Deer populations stay the same because predators do not affect prey.', 'Plants increase because there are fewer deer.', 'Removing a top predator can cause a trophic cascade through the herbivores to the producers.'],
    ['concept', 'Which aquatic ecosystem forms where a river meets the ocean and has a mix of fresh water and salt water?', 'An estuary', 'An open ocean', 'An oligotrophic lake', 'A coral reef', 'Estuaries mix fresh and salt water and are among the most productive ecosystems.'],
    ['concept', 'Why is the open ocean far less productive per square meter than a coral reef or estuary?', 'Surface waters of the open ocean are low in nutrients.', 'The open ocean receives no sunlight.', 'Open ocean water is too cold for photosynthesis.', 'There are no producers in the open ocean.', 'Phytoplankton in the open ocean are limited by scarce nutrients such as nitrogen and iron.'],
    ['concept', 'What is the main role of decomposers in an ecosystem?', 'They break down dead organic matter and return nutrients to the soil.', 'They convert sunlight into chemical energy.', 'They are the top consumers in a food web.', 'They remove carbon permanently from the carbon cycle.', 'Decomposers recycle nutrients so producers can use them again.'],
    ['design', 'Researchers want to test whether beetles reduce the leaf area of a shrub. Which experimental design is best?', 'Randomly assign plots to beetle-exclusion cages or identical cages with openings that let beetles in, then measure leaf area in both over time.', 'Measure leaf area only in plots where beetles are common.', 'Spray insecticide on all plots and measure leaf area once.', 'Compare shrubs in a wet valley with shrubs on a dry hillside.', 'Random assignment and a control with the same cage structure isolate the effect of beetles.'],
    ['data', 'Net primary productivity (g/m²/yr):\nTropical rainforest: 2,200\nEstuary: 1,500\nTemperate grassland: 600\nDesert: 90\nOpen ocean: 125\nWhich conclusion is best supported?', 'Ecosystems with abundant water, warmth, and nutrients have the highest productivity.', 'Aquatic ecosystems are always more productive than land ecosystems.', 'Deserts are more productive than the open ocean.', 'Temperature alone determines productivity.', 'High NPP occurs where producers have enough water, light, warmth, and nutrients; dry or nutrient-poor systems are low.'],
    { family: 'graph', context: 'Ecologists counted a prey species (snowshoe hare) and its predator (lynx) in a forest over 12 years.', plot: { type: 'line', xLabel: 'Year', yLabel: 'Population (thousands)', x: [0, 2, 4, 6, 8, 10, 12], series: [{ name: 'Hare', values: [20, 60, 90, 40, 15, 55, 85] }, { name: 'Lynx', values: [3, 4, 8, 10, 5, 3, 7] }] }, prompt: 'Which explanation best accounts for the pattern in the two populations?', choices: ['Lynx numbers rise after hare numbers rise, and then fall after hares decline because food becomes scarce.', 'Hare numbers rise because lynx numbers increase.', 'The two populations change independently of each other.', 'Lynx eat plants, so they compete with hares.'], explanation: 'Predator peaks lag behind prey peaks because predators need abundant prey to reproduce, and they decline when prey become scarce.' },
    { family: 'graph', context: 'The energy stored at each trophic level of a grassland was measured.', plot: { type: 'bar', xLabel: 'Trophic level', yLabel: 'Energy (kcal/m²/yr)', x: ['Producers', 'Primary', 'Secondary', 'Tertiary'], series: [{ name: 'Energy', values: [20000, 2000, 200, 20] }] }, prompt: 'Which statement is best supported by the graph?', choices: ['About 10 percent of the energy at each level is passed to the next level.', 'About 50 percent of the energy at each level is passed to the next level.', 'Tertiary consumers store more energy than producers.', 'Energy increases at each higher trophic level.'], explanation: 'Each level holds one tenth of the level below it, consistent with the 10 percent rule.' }
  ],
  // Unit 2: The Living World: Biodiversity
  [
    ['data', 'Number of individuals of each tree species in two forests:\nForest A: oak 25, maple 25, birch 25, pine 25\nForest B: oak 85, maple 5, birch 5, pine 5\nWhich conclusion is best supported?', 'Both forests have the same species richness, but Forest A has higher species evenness.', 'Forest B has higher species richness.', 'Forest A has fewer species than Forest B.', 'Both forests have the same biodiversity.', 'Each forest has four species, but individuals are spread evenly only in Forest A, so its diversity is higher.'],
    ['concept', 'Why is a population with high genetic diversity more likely to survive a new disease?', 'Some individuals are more likely to have traits that resist the disease and survive to reproduce.', 'All individuals are identical, so they respond the same way.', 'Genetic diversity prevents diseases from entering a population.', 'Populations with high genetic diversity have fewer offspring.', 'Variation increases the chance that some individuals can tolerate a new stress.'],
    ['concept', 'Hunting reduced a seal population to about 20 individuals. It later recovered to thousands, but genetic variation is very low. What is this an example of?', 'A population bottleneck', 'Resource partitioning', 'Secondary succession', 'An edge effect', 'A drastic reduction in population size reduces genetic diversity even if numbers later recover.'],
    ['concept', 'Which is an example of a provisioning service of a mangrove forest?', 'Fish and timber harvested for food and building materials', 'Roots that slow storm surges', 'Wetland soils that filter pollutants', 'Tourism and recreation', 'Provisioning services are goods that people take directly from ecosystems.'],
    ['concept', 'A coastal wetland absorbs floodwater and reduces storm damage to nearby towns. Which category of ecosystem service is this?', 'Regulating service', 'Provisioning service', 'Cultural service', 'Supporting service', 'Regulating services control natural processes such as flooding, climate, and water purification.'],
    ['concept', 'According to the theory of island biogeography, which island would most likely have the highest species richness?', 'A large island close to the mainland', 'A small island close to the mainland', 'A large island far from the mainland', 'A small island far from the mainland', 'Large islands have more habitats and lower extinction rates, and near islands receive more colonizing species.'],
    ['predict', 'Why do small, isolated islands tend to have higher extinction rates than large islands?', 'They support smaller populations with fewer habitats, and few new individuals arrive to replace losses.', 'They receive more immigrants from the mainland.', 'They have more predators per square kilometer.', 'They have more resources per individual.', 'Small populations are more vulnerable to random events, and isolation limits recolonization.'],
    ['concept', 'A fish species survives between 4 °C and 26 °C but grows and reproduces best between 12 °C and 18 °C. What are the ranges outside 12–18 °C but within 4–26 °C called?', 'Zones of physiological stress', 'Zones of intolerance', 'The optimal range', 'The carrying capacity', 'Organisms can survive in their zones of stress but grow and reproduce poorly there.'],
    ['concept', 'Which is an example of a periodic natural disruption?', 'The daily rise and fall of the tides', 'A volcanic eruption', 'A meteor impact', 'An earthquake', 'Periodic disruptions occur at regular intervals; random ones have no regular pattern.'],
    ['concept', 'Which is an example of primary succession?', 'Lichens and mosses colonize bare rock left by a lava flow.', 'Grasses grow in an abandoned farm field.', 'A forest regrows after a wildfire burns the trees but leaves the soil.', 'Shrubs return after a clear-cut.', 'Primary succession begins where there is no soil.'],
    ['concept', 'A cornfield is abandoned. Over 80 years it becomes a hardwood forest. What is this process called?', 'Secondary succession', 'Primary succession', 'Eutrophication', 'Desertification', 'Secondary succession happens where soil remains after a disturbance.'],
    ['concept', 'What is the main role of pioneer species such as lichens in primary succession?', 'They break down rock and add organic matter, beginning soil formation.', 'They shade out all other plants permanently.', 'They are the dominant species of the climax community.', 'They remove nutrients from the soil.', 'Pioneer species weather rock and add organic matter, which makes it possible for later species to grow.'],
    ['predict', 'Sea otters eat sea urchins, which graze on kelp. If sea otters are removed from a kelp forest, what is the most likely result?', 'Urchin populations grow and the kelp forest declines.', 'Urchin populations decline and kelp increases.', 'Kelp increases because otters eat kelp.', 'Nothing changes because otters are not keystone species.', 'Sea otters are a keystone species; without them urchins overgraze kelp.'],
    ['concept', 'Mayfly and stonefly larvae are found only in streams with clean, well-oxygenated water. How are they used by scientists?', 'As indicator species of water quality', 'As keystone predators', 'As invasive species', 'As pioneer species', 'The presence or absence of sensitive species indicates environmental conditions.'],
    ['concept', 'Why are species with long generation times especially vulnerable to rapid environmental change?', 'They cannot adapt through natural selection as quickly as the environment changes.', 'They produce too many offspring.', 'They have no genetic variation at all.', 'They always live on islands.', 'Adaptation happens over generations, so long generation times slow a population’s response.'],
    ['design', 'Students compare plant species richness in two meadows. Which method gives the most valid comparison?', 'Count species in the same number of equal-sized, randomly placed quadrats in each meadow.', 'Count species along the edge of one meadow and in the center of the other.', 'Use larger quadrats in the meadow that seems more diverse.', 'Count only the most common species in each meadow.', 'Equal, random sampling in both sites avoids bias in the comparison.'],
    ['concept', 'A road is built through a large forest. Which effect on biodiversity is most likely?', 'Habitat fragmentation increases edge habitat and isolates populations.', 'The forest gains interior habitat.', 'Genetic diversity in each population increases.', 'Species richness increases for interior species.', 'Fragmentation divides habitat into smaller patches with more edge, which harms interior species.'],
    ['concept', 'Which is an example of a behavioral adaptation?', 'Caribou migrating to warmer areas in winter', 'A cactus storing water in thick stems', 'Arctic foxes growing white fur', 'Desert plants with deep roots', 'A behavioral adaptation is something an organism does in response to its environment.'],
    { family: 'graph', context: 'Ecologists counted the number of bird species on islands of different sizes in one archipelago.', plot: { type: 'line', xLabel: 'Island area (km²)', yLabel: 'Number of bird species', x: [1, 10, 50, 100, 500, 1000], series: [{ name: 'Bird species', values: [6, 14, 22, 27, 38, 44] }] }, prompt: 'Which conclusion is best supported by the data?', choices: ['Larger islands support more species, but each added area increases richness less.', 'Island area has no effect on species richness.', 'Species richness doubles each time island area doubles.', 'Smaller islands support more species.'], explanation: 'Richness rises with area because large islands have more habitats, but the curve levels off.' },
    { family: 'graph', context: 'Plant species richness was measured in an abandoned farm field over 80 years.', plot: { type: 'bar', xLabel: 'Years since abandoned', yLabel: 'Number of plant species', x: ['0', '5', '10', '20', '40', '80'], series: [{ name: 'Plant species', values: [3, 14, 22, 31, 38, 35] }] }, prompt: 'Which explanation best accounts for the trend?', choices: ['Secondary succession adds new species as soil and conditions change, then a few dominant trees reduce richness slightly.', 'Primary succession started on bare rock.', 'The field lost all its soil during the first five years.', 'Invasive species removed native species each year.'], explanation: 'Richness rises as grasses, shrubs, and trees colonize, and may dip slightly as a mature forest develops.' }
  ],
  // Unit 3: Populations
  [
    ['concept', 'Giant pandas eat almost nothing but bamboo. Why does this make them more vulnerable to extinction?', 'Specialists cannot easily switch to other resources when their habitat or food source declines.', 'Specialists reproduce too quickly.', 'Specialists can live in many different habitats.', 'Specialists have no predators.', 'A narrow niche makes specialists vulnerable to environmental change.'],
    ['concept', 'Which set of traits is typical of an r-selected species?', 'Many small offspring, little parental care, and a short life span', 'Few offspring, much parental care, and a long life span', 'Late maturity and large body size', 'Populations that stay close to carrying capacity', 'r-selected species invest in quantity of offspring rather than care for each one.'],
    ['concept', 'Which survivorship curve fits a species in which most individuals survive until old age?', 'Type I', 'Type II', 'Type III', 'An exponential curve', 'Type I curves show low mortality early in life and high mortality in old age, as in humans and elephants.'],
    ['concept', 'Oysters release millions of eggs, but very few young survive. Which survivorship curve fits oysters?', 'Type III', 'Type I', 'Type II', 'A logistic curve', 'Type III species have very high mortality early in life.'],
    ['concept', 'Which statement best defines carrying capacity?', 'The maximum population size an environment can support over time', 'The number of offspring an organism can produce', 'The rate at which a population grows', 'The total number of species in an ecosystem', 'Carrying capacity (K) is set by limited resources such as food, water, and space.'],
    ['predict', 'Deer are introduced to an island with no predators. The herd grows far beyond the island’s carrying capacity. What is the most likely outcome?', 'Overgrazing damages the vegetation, and the population crashes.', 'The population stays above carrying capacity forever.', 'The carrying capacity of the island increases.', 'The deer switch to eating other animals.', 'Overshooting carrying capacity degrades resources, causing a die-off.'],
    ['concept', 'Which factor is density-dependent?', 'A disease that spreads faster when individuals are crowded', 'A hurricane', 'A late spring frost', 'A volcanic eruption', 'Density-dependent factors have a stronger effect as population density increases.'],
    ['concept', 'An age-structure diagram has a very wide base that narrows quickly toward the top. What does this indicate?', 'The population is growing rapidly.', 'The population is shrinking.', 'The population is stable.', 'Most people are over age 65.', 'A wide base means many young people, who will soon reach reproductive age.'],
    ['concept', 'A country has low birth rates, low death rates, and a nearly column-shaped age-structure diagram. Which stage of the demographic transition is it most likely in?', 'Stage 4 (post-industrial)', 'Stage 1 (pre-industrial)', 'Stage 2 (transitional)', 'Stage 3 (industrial), early in that stage', 'Low birth and death rates and slow growth characterize the post-industrial stage.'],
    ['concept', 'What does total fertility rate (TFR) measure?', 'The average number of children a woman is expected to have during her lifetime', 'The number of births per 1,000 people per year', 'The number of infant deaths per 1,000 births', 'The number of years for a population to double', 'TFR is the expected lifetime number of children per woman.'],
    ['concept', 'Why is replacement-level fertility about 2.1 rather than exactly 2.0 in developed countries?', 'Some children die before they reach reproductive age.', 'More girls than boys are born.', 'Immigration adds 0.1 to every country’s fertility rate.', 'Some parents have twins.', 'The extra 0.1 makes up for children who do not survive to have children of their own.'],
    ['concept', 'A country’s TFR drops to replacement level, but its population keeps growing for several decades. What explains this?', 'Population momentum from the large number of young people entering their reproductive years', 'An increase in the death rate', 'Emigration of young people', 'A decrease in life expectancy', 'A young population continues to grow even after fertility falls, because so many people are entering reproductive age.'],
    ['concept', 'Which change is most strongly linked to lower fertility rates in developing countries?', 'Greater access to education and jobs for women', 'Lower average age at marriage', 'Higher infant mortality rates', 'Less access to family planning', 'Educated women tend to marry later and have fewer children.'],
    ['concept', 'Which statement best summarizes Malthusian theory?', 'Population tends to grow faster than the food supply, eventually leading to shortages.', 'Technology always allows food production to outpace population.', 'Population growth stops when countries become industrialized.', 'Birth rates always fall before death rates.', 'Malthus argued that population grows exponentially while food production grows more slowly.'],
    ['predict', 'Improved sanitation and medical care reach a country in Stage 1 of the demographic transition. What happens first?', 'The death rate falls while the birth rate stays high, so the population grows rapidly.', 'The birth rate falls while the death rate stays high.', 'Both rates rise.', 'The population immediately stops growing.', 'In Stage 2, falling death rates combined with high birth rates cause rapid growth.'],
    ['data', 'Crude birth and death rates (per 1,000 people per year):\nCountry W: CBR 38, CDR 8\nCountry X: CBR 12, CDR 10\nCountry Y: CBR 9, CDR 11\nCountry Z: CBR 22, CDR 6\nIgnoring migration, which country is growing fastest?', 'Country W', 'Country X', 'Country Y', 'Country Z', 'The growth rate is (CBR − CDR) ÷ 10, so W grows at 3.0% per year.'],
    ['concept', 'Which of the following best explains why K-selected species recover slowly from population declines?', 'They produce few offspring and take a long time to reach reproductive age.', 'They produce thousands of offspring each year.', 'They live only in disturbed habitats.', 'They are always generalists.', 'Low reproductive rates and late maturity slow population recovery.'],
    ['concept', 'Which example best illustrates a density-independent limit on population size?', 'A severe drought kills many plants regardless of how crowded they are.', 'Competition for nesting sites increases as a population grows.', 'Predators catch more prey when prey are abundant.', 'Parasites spread faster in dense populations.', 'Density-independent factors affect a population regardless of its size.'],
    { family: 'graph', context: 'The graph shows the number of survivors out of 1,000 newborns at different ages for three species, with age shown as a percentage of maximum life span.', plot: { type: 'line', xLabel: 'Age (% of maximum life span)', yLabel: 'Survivors per 1,000', x: [0, 20, 40, 60, 80, 100], series: [{ name: 'Species A', values: [1000, 980, 950, 900, 600, 0] }, { name: 'Species B', values: [1000, 700, 490, 340, 240, 0] }, { name: 'Species C', values: [1000, 50, 30, 20, 10, 0] }] }, prompt: 'Which species is most likely an r-selected species such as a frog?', choices: ['Species C', 'Species A', 'Species B', 'All three are equally likely.'], explanation: 'Species C shows a Type III curve, with very high mortality early in life, which is typical of r-selected species.' },
    { family: 'graph', context: 'A population of beetles was counted after being introduced to a new grain storehouse.', plot: { type: 'line', xLabel: 'Week', yLabel: 'Number of beetles', x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], series: [{ name: 'Beetles', values: [20, 40, 80, 150, 260, 370, 440, 480, 495, 500, 500] }] }, prompt: 'What is the approximate carrying capacity of the storehouse for this beetle?', choices: ['500 beetles', '250 beetles', '20 beetles', 'There is no carrying capacity because the curve is exponential.'], explanation: 'The logistic (S-shaped) curve levels off at about 500 beetles, which is the carrying capacity.' }
  ],
  // Unit 4: Earth Systems and Resources
  [
    ['concept', 'An oceanic plate subducts beneath a continental plate. Which features most likely form?', 'A deep ocean trench, volcanoes, and mountains', 'A mid-ocean ridge', 'A rift valley', 'A hot-spot island chain', 'At convergent oceanic-continental boundaries, subduction creates trenches and volcanic mountains.'],
    ['concept', 'Which features form at divergent plate boundaries?', 'Mid-ocean ridges and rift valleys', 'Deep ocean trenches', 'Island arcs', 'Transform faults only', 'Plates moving apart allow magma to rise and form new crust.'],
    ['concept', 'The Hawaiian Islands formed in a chain as the Pacific Plate moved over a fixed source of magma. What is this source called?', 'A hot spot', 'A subduction zone', 'A transform boundary', 'A rift valley', 'Hot spots are plumes of magma that create island chains as a plate moves over them.'],
    ['concept', 'Two plates slide past each other along the San Andreas Fault. What hazard is most associated with this type of boundary?', 'Earthquakes', 'Volcanic eruptions', 'Formation of new ocean floor', 'Formation of island arcs', 'Transform boundaries build stress that is released as earthquakes.'],
    ['concept', 'Which soil horizon is made mostly of decomposing leaves and other organic matter?', 'O horizon', 'B horizon', 'C horizon', 'R horizon (bedrock)', 'The O horizon is the top layer of organic material.'],
    ['concept', 'Compared with sandy soil, clay soil has which properties?', 'Smaller particles, higher water-holding capacity, and lower permeability', 'Larger particles and higher permeability', 'Larger particles and lower water-holding capacity', 'Smaller particles and higher permeability', 'Tiny clay particles pack tightly, holding water but letting it pass through slowly.'],
    ['data', 'Time for 100 mL of water to drain through equal volumes of three soils:\nSoil A: 30 seconds\nSoil B: 5 minutes\nSoil C: 1 minute\nWhich soil most likely has the highest clay content?', 'Soil B', 'Soil A', 'Soil C', 'All three have the same clay content.', 'Clay has the lowest permeability, so water drains slowest through it.'],
    ['concept', 'Which best represents the composition of Earth’s atmosphere by volume?', 'About 78% nitrogen, 21% oxygen, and 1% argon and other gases', 'About 78% oxygen and 21% nitrogen', 'About 50% nitrogen and 50% oxygen', 'About 78% nitrogen, 21% carbon dioxide, and 1% oxygen', 'Nitrogen and oxygen make up about 99% of dry air; CO₂ is about 0.04%.'],
    ['concept', 'Which lists Earth’s atmospheric layers in order from the surface upward?', 'Troposphere, stratosphere, mesosphere, thermosphere', 'Stratosphere, troposphere, mesosphere, thermosphere', 'Troposphere, mesosphere, stratosphere, thermosphere', 'Thermosphere, mesosphere, stratosphere, troposphere', 'Weather occurs in the troposphere; the ozone layer is in the stratosphere above it.'],
    ['concept', 'In which atmospheric layer does nearly all weather occur?', 'Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere', 'The troposphere holds most water vapor and air mass, so weather occurs there.'],
    ['concept', 'Why do global winds curve instead of blowing straight north or south?', 'Earth’s rotation deflects moving air, which is called the Coriolis effect.', 'The Moon’s gravity pulls the winds.', 'Mountains block all north–south winds.', 'Ocean currents push the air.', 'Because Earth rotates, moving air is deflected to the right in the Northern Hemisphere and to the left in the Southern Hemisphere.'],
    ['concept', 'Which describes a watershed?', 'All the land area that drains into a particular river, lake, or other body of water', 'A layer of rock that stores groundwater', 'A dam that stores water for irrigation', 'The boundary between fresh water and salt water', 'Activities anywhere in a watershed can affect the water body it drains into.'],
    ['concept', 'Why do areas near the equator receive more solar radiation per square meter than areas near the poles?', 'Sunlight strikes the equator more directly and is spread over a smaller area.', 'The equator is closer to the Sun.', 'The atmosphere is thicker at the equator.', 'The poles have longer days all year.', 'At high latitudes sunlight arrives at a low angle and spreads over a larger area.'],
    ['concept', 'What causes Earth’s seasons?', 'The tilt of Earth’s axis changes how directly sunlight strikes each hemisphere during the year.', 'Earth’s distance from the Sun changes greatly during the year.', 'The Sun’s energy output changes each season.', 'Ocean currents reverse every six months.', 'Axial tilt of about 23.5° causes changing sun angles and day lengths.'],
    ['concept', 'What causes a rain shadow on the leeward side of a mountain range?', 'Moist air rises and cools on the windward side, dropping its precipitation, so dry air descends on the other side.', 'Warm, moist air sinks on the leeward side and forms clouds.', 'Mountains block sunlight from the leeward side.', 'Ocean water evaporates more on the leeward side.', 'Air loses its moisture as it rises over the mountains and then warms and dries as it descends.'],
    ['concept', 'During an El Niño event, what happens off the coast of Peru?', 'Trade winds weaken, upwelling decreases, and warm surface water reduces fish productivity.', 'Trade winds strengthen and upwelling increases.', 'Cold, nutrient-rich water increases fish catches.', 'Sea surface temperatures drop sharply.', 'Weaker trade winds reduce upwelling of cold, nutrient-rich water, so fisheries decline.'],
    ['predict', 'During a La Niña event, trade winds across the Pacific become stronger than normal. What is the most likely effect off the west coast of South America?', 'More upwelling of cold, nutrient-rich water', 'Less upwelling and warmer water', 'Sea surface temperatures rise sharply', 'Fish populations decline because of a lack of nutrients', 'Stronger winds push surface water away from the coast, increasing upwelling.'],
    ['concept', 'Which is an example of physical weathering?', 'Water freezing and expanding in rock cracks', 'Acid rain dissolving limestone', 'Oxidation of iron in rocks', 'Lichens releasing acids onto rock', 'Physical weathering breaks rock apart without changing its chemical makeup.'],
    { family: 'graph', context: 'A soil sample was separated by particle size.', plot: { type: 'bar', xLabel: 'Particle type', yLabel: 'Percent of sample', x: ['Sand', 'Silt', 'Clay'], series: [{ name: 'Percent', values: [20, 20, 60] }] }, prompt: 'Which property would this soil most likely have?', choices: ['High water-holding capacity and low permeability', 'Low water-holding capacity and high permeability', 'Very large pore spaces that drain quickly', 'No ability to hold nutrients'], explanation: 'A soil that is 60% clay holds water and nutrients well but drains slowly.' },
    { family: 'graph', context: 'Average air temperature was measured at different altitudes above Earth’s surface.', plot: { type: 'line', xLabel: 'Altitude (km)', yLabel: 'Temperature (°C)', x: [0, 10, 20, 30, 40, 50], series: [{ name: 'Temperature', values: [15, -50, -56, -46, -22, -2] }] }, prompt: 'Why does the temperature increase between about 20 and 50 km?', choices: ['Ozone in the stratosphere absorbs ultraviolet radiation from the Sun.', 'Greenhouse gases are most concentrated at that altitude.', 'Heat rises from Earth’s surface through the troposphere.', 'Clouds release heat when water vapor condenses there.'], explanation: 'The stratosphere warms with altitude because ozone absorbs UV radiation.' }
  ],
  // Unit 5: Land and Water Use
  [
    ['concept', 'Many ranchers graze cattle on shared public land, and each adds more cattle to increase profit until the grass is destroyed. What concept does this illustrate?', 'The tragedy of the commons', 'Integrated pest management', 'Maximum sustainable yield', 'Ecological succession', 'Individuals acting in self-interest overuse a shared resource until it is degraded.'],
    ['concept', 'Which is a likely environmental effect of clear-cutting a forest on a hillside?', 'Increased soil erosion and warmer water temperatures in nearby streams', 'Decreased runoff into streams', 'Increased soil nutrient retention', 'Lower stream sediment levels', 'Removing all trees exposes soil to erosion and removes shade from streams.'],
    ['concept', 'Which is a negative consequence of the Green Revolution?', 'Increased use of fossil fuels, synthetic fertilizers, and pesticides', 'Lower crop yields in developing countries', 'Less use of irrigation', 'More genetic diversity in crops', 'High-yield monocultures depend on fossil fuels, fertilizers, pesticides, and irrigation.'],
    ['concept', 'Which irrigation method delivers water most efficiently to crop roots?', 'Drip irrigation', 'Flood irrigation', 'Furrow irrigation', 'Spray irrigation', 'Drip irrigation is about 95% efficient because water goes directly to the roots.'],
    ['concept', 'How does long-term irrigation in arid regions lead to soil salinization?', 'Irrigation water evaporates and leaves dissolved salts behind in the soil.', 'Salt water from the ocean seeps into the soil.', 'Fertilizers turn into salt.', 'Plants release salt from their roots.', 'In dry climates, water evaporates quickly and salts accumulate near the surface.'],
    ['concept', 'A pesticide is sprayed on the same field every year. After several years it no longer controls the pest. What is the best explanation?', 'Resistant individuals survived and reproduced, so the population evolved resistance.', 'The pests learned to avoid the pesticide.', 'The pesticide changed the pests’ DNA directly.', 'The pesticide broke down faster each year.', 'Natural selection favors the few resistant pests, and their offspring make up more of the population.'],
    ['concept', 'Which is a disadvantage of integrated pest management (IPM)?', 'It requires more knowledge, monitoring, and time than spraying pesticides alone.', 'It always increases pesticide use.', 'It harms pollinators more than conventional methods.', 'It cannot use biological controls.', 'IPM combines several methods and needs careful monitoring, which can be costly and complex.'],
    ['concept', 'Which is an environmental concern associated with concentrated animal feeding operations (CAFOs)?', 'Large amounts of manure can contaminate nearby surface water and groundwater.', 'Animals graze too much open rangeland.', 'They require more land per animal than free-range grazing.', 'They produce no greenhouse gases.', 'Concentrated manure can leak into water, adding nutrients and pathogens.'],
    ['concept', 'Which fishing method drags a large, weighted net along the seafloor and can destroy bottom habitats?', 'Bottom trawling', 'Purse seine fishing', 'Longline fishing', 'Pole-and-line fishing', 'Bottom trawls scrape the seafloor, damaging corals and other habitat.'],
    ['concept', 'What is bycatch?', 'Unwanted species caught accidentally while fishing for a target species', 'Fish raised in aquaculture pens', 'The maximum number of fish that can be caught sustainably', 'Fish caught for sport and released', 'Bycatch includes dolphins, turtles, and sharks caught in nets meant for other species.'],
    ['concept', 'What is maximum sustainable yield (MSY)?', 'The largest amount of a resource that can be harvested without reducing the population’s ability to replace itself', 'The total population of a species in an area', 'The amount of fish caught in one record year', 'The smallest harvest that keeps a fishing business profitable', 'Harvesting above MSY causes the population to decline over time.'],
    ['concept', 'Which is a common environmental effect of surface mining for coal?', 'Removal of overburden destroys habitat and can produce acid mine drainage.', 'It releases no sediment into streams.', 'It improves soil fertility.', 'It reduces erosion on mountain slopes.', 'Surface mining strips away soil and rock, and exposed sulfide minerals can acidify water.'],
    ['concept', 'How does urbanization contribute to the urban heat island effect?', 'Dark, impervious surfaces such as asphalt absorb and re-radiate heat, and there is less vegetation to cool the air.', 'Cities produce more cloud cover, which traps cold air.', 'Tall buildings block warm winds from entering the city.', 'Urban areas have more trees than rural areas.', 'Pavement and buildings store heat, while few plants are present to provide shade and evaporative cooling.'],
    ['concept', 'Which practice would best reduce stormwater runoff in a city?', 'Replacing pavement with permeable surfaces and building rain gardens', 'Adding more asphalt parking lots', 'Straightening urban streams with concrete channels', 'Removing trees along streets', 'Permeable surfaces and vegetation let water soak into the ground.'],
    ['concept', 'What does an ecological footprint measure?', 'The amount of land and water needed to supply the resources a person uses and absorb their wastes', 'The total population of a country', 'The amount of carbon stored in a forest', 'The area of a country covered by cities', 'Ecological footprints are usually measured in global hectares per person.'],
    ['concept', 'Why do farmers rotate corn with legumes such as soybeans?', 'Legumes host nitrogen-fixing bacteria that add nitrogen back to the soil.', 'Legumes remove all nutrients from the soil.', 'Legumes attract more corn pests.', 'Rotation increases the need for synthetic fertilizer.', 'Crop rotation restores soil nitrogen and interrupts pest cycles.'],
    ['concept', 'Which is a disadvantage of open-net aquaculture?', 'Disease and waste from crowded pens can spread to wild fish populations.', 'It always increases wild fish populations.', 'It uses no feed.', 'It produces less food than wild fisheries.', 'Dense pens concentrate waste, parasites, and disease that can affect surrounding waters.'],
    ['concept', 'Why do forest managers use prescribed burns?', 'To reduce the buildup of dry fuel and lower the risk of severe wildfires', 'To clear forests for agriculture', 'To increase the amount of dead wood on the forest floor', 'To raise atmospheric oxygen levels', 'Controlled, low-intensity fires remove underbrush that could feed a catastrophic fire.'],
    { family: 'graph', context: 'The percentage of water applied that reaches crop roots was measured for four irrigation methods.', plot: { type: 'bar', xLabel: 'Irrigation method', yLabel: 'Efficiency (%)', x: ['Flood', 'Furrow', 'Spray', 'Drip'], series: [{ name: 'Efficiency', values: [50, 65, 75, 95] }] }, prompt: 'A farm in a dry region needs to conserve water. Which conclusion is best supported?', choices: ['Switching from flood to drip irrigation would greatly reduce the water needed to grow the same crops.', 'Flood irrigation is the best choice because it uses the most water.', 'All four methods waste the same amount of water.', 'Spray irrigation is more efficient than drip irrigation.'], explanation: 'Drip irrigation delivers almost twice as much of the applied water to roots as flood irrigation.' },
    { family: 'graph', context: 'Stormwater runoff was measured after storms at a site that was converted from a parking lot to a community garden in month 0.', plot: { type: 'line', xLabel: 'Months after conversion', yLabel: 'Runoff (% of rainfall)', x: [-6, -3, 0, 3, 6, 9], series: [{ name: 'Runoff', values: [88, 90, 89, 45, 32, 30] }] }, prompt: 'Which explanation best accounts for the change in runoff?', choices: ['Soil and plants allow rainwater to soak into the ground instead of flowing off the surface.', 'The garden receives less rainfall than the parking lot did.', 'Plants release water that adds to runoff.', 'Runoff decreased because the soil became more compacted.'], explanation: 'Replacing impervious pavement with soil and plants increases infiltration and reduces runoff.' }
  ],
  // Unit 6: Energy Resources and Consumption
  [
    ['concept', 'Which describes a nonrenewable energy resource?', 'It forms far more slowly than it is used, so supplies can be depleted.', 'It is replaced naturally within a human lifetime.', 'It never runs out regardless of use.', 'It produces no pollution.', 'Fossil fuels and uranium are finite on human time scales.'],
    ['concept', 'Which pattern in global energy use is generally true?', 'People in developed countries use much more energy per person than people in developing countries.', 'Developing countries use more energy per person.', 'All countries use the same amount of energy per person.', 'Energy use per person is falling rapidly in every country.', 'Per capita energy use is closely linked to industrialization and wealth.'],
    ['concept', 'Which lists types of coal from lowest to highest energy content?', 'Lignite, bituminous, anthracite', 'Anthracite, bituminous, lignite', 'Bituminous, lignite, anthracite', 'Peat, anthracite, lignite', 'With more heat and pressure over time, coal becomes denser and holds more energy.'],
    ['concept', 'Why is natural gas considered cleaner-burning than coal?', 'It releases less CO₂, sulfur dioxide, and particulate matter per unit of energy.', 'It releases no greenhouse gases.', 'It is a renewable resource.', 'It produces only water vapor.', 'Natural gas is mostly methane, which burns more completely than coal.'],
    ['concept', 'How does a coal-fired power plant generate electricity?', 'Burning coal boils water; the steam turns a turbine connected to a generator.', 'Coal reacts with water to produce electric current directly.', 'Sunlight on coal produces electricity.', 'Coal is split in a reactor to release neutrons.', 'Fossil fuel and nuclear plants both use heat to make steam that spins a turbine.'],
    ['concept', 'What is the purpose of control rods in a nuclear reactor?', 'They absorb neutrons to slow or stop the fission chain reaction.', 'They produce steam to spin the turbine.', 'They store spent fuel.', 'They cool the reactor core with water.', 'Raising or lowering control rods changes the number of neutrons available to cause fission.'],
    ['concept', 'What is the greatest long-term environmental concern of nuclear power?', 'Spent fuel remains radioactive for thousands of years and must be stored safely.', 'It releases large amounts of carbon dioxide.', 'It causes acid rain.', 'It requires burning large amounts of coal.', 'High-level radioactive waste needs secure, long-term storage.'],
    ['concept', 'In many rural areas of developing countries, which biomass source is most commonly burned for cooking and heating?', 'Wood and charcoal', 'Ethanol from corn', 'Natural gas', 'Biodiesel from algae', 'Wood and charcoal are cheap and available but contribute to deforestation and indoor air pollution.'],
    ['concept', 'Which is a disadvantage of making ethanol from corn?', 'Growing corn uses cropland, fertilizer, and fossil fuels that reduce its net energy benefit.', 'Ethanol cannot be used in vehicles.', 'Ethanol releases more particulate matter than coal.', 'Corn ethanol is a nonrenewable resource.', 'The energy and land needed to grow corn offset much of ethanol’s benefit.'],
    ['concept', 'What is a major limitation of photovoltaic solar panels?', 'They produce electricity only when sunlight is available, so storage or backup power is needed.', 'They release carbon dioxide during operation.', 'They require constant fuel deliveries.', 'They work only near the poles.', 'Solar output varies with time of day, season, and cloud cover.'],
    ['concept', 'Which is an ecological impact of large hydroelectric dams?', 'They block fish migration and flood upstream habitats.', 'They increase sediment delivered downstream.', 'They produce large amounts of sulfur dioxide.', 'They raise river temperatures downstream by burning fuel.', 'Reservoirs flood land, and dams block fish passage and trap sediment.'],
    ['concept', 'How is geothermal energy usually used to generate electricity?', 'Heat from inside Earth produces steam that turns turbines.', 'Wind pushes on blades connected to a generator.', 'Sunlight heats a solar panel.', 'Fission of uranium heats water.', 'Geothermal plants use underground heat, most often in tectonically active regions.'],
    ['concept', 'What is the main byproduct of a hydrogen fuel cell in a car?', 'Water', 'Carbon dioxide', 'Sulfur dioxide', 'Methane', 'Fuel cells combine hydrogen and oxygen to produce electricity and water.'],
    ['concept', 'How is most hydrogen fuel produced today?', 'From natural gas through steam reforming, which releases CO₂', 'By splitting water with solar power', 'By mining hydrogen from rocks', 'From nuclear fission of hydrogen atoms', 'Most hydrogen is made from fossil fuels, which reduces its environmental benefit.'],
    ['concept', 'Which energy source poses the greatest direct risk to bird and bat populations?', 'Wind turbines', 'Geothermal plants', 'Natural gas plants', 'Hydrogen fuel cells', 'Birds and bats can collide with rotating turbine blades.'],
    ['concept', 'A country wants a renewable energy source that runs continuously with little need for storage. Which choice is best if the country lies along a plate boundary?', 'Geothermal power', 'Solar power', 'Wind power', 'Tidal power used only at high tide', 'Geothermal plants produce steady power day and night in tectonically active areas.'],
    ['concept', 'Which action would most reduce energy use for heating a home?', 'Adding insulation and sealing air leaks', 'Replacing light bulbs with LEDs', 'Using a clothes dryer more often', 'Leaving windows open in winter', 'Insulation and sealing keep heat inside, reducing furnace use.'],
    ['concept', 'What is cogeneration (combined heat and power)?', 'Using the waste heat from electricity generation to heat buildings or water', 'Burning two fuels at the same time', 'Using solar and wind power together', 'Generating electricity from geothermal and nuclear energy at once', 'Capturing waste heat raises the overall efficiency of a power plant.'],
    { family: 'graph', context: 'The graph shows the share of world primary energy supplied by different sources in one year. “Other” includes wind, solar, geothermal, and biomass.', plot: { type: 'bar', xLabel: 'Energy source', yLabel: 'Share of world energy (%)', x: ['Oil', 'Coal', 'Natural gas', 'Hydro', 'Nuclear', 'Other'], series: [{ name: 'Share', values: [31, 26, 23, 6, 4, 10] }] }, prompt: 'What percentage of world energy came from fossil fuels?', choices: ['80%', '57%', '90%', '31%'], explanation: 'Oil, coal, and natural gas together supply 31 + 26 + 23 = 80%.' },
    { family: 'graph', context: 'The electrical output of a home’s rooftop solar panels was recorded during one sunny day.', plot: { type: 'line', xLabel: 'Hour of day', yLabel: 'Power output (kW)', x: [6, 9, 12, 15, 18, 21], series: [{ name: 'Output', values: [0.2, 2.5, 4, 2.8, 0.5, 0] }] }, prompt: 'Which conclusion is best supported by the data?', choices: ['Output peaks around midday and drops to zero at night, so the home needs storage or grid power after dark.', 'The panels produce the same amount of power all day.', 'The panels produce the most power at sunrise.', 'The home needs no other energy source.'], explanation: 'Solar output follows sunlight, so it is intermittent.' }
  ],
  // Unit 7: Atmospheric Pollution
  [
    ['concept', 'Which is a secondary air pollutant?', 'Tropospheric ozone', 'Carbon monoxide from a car exhaust pipe', 'Sulfur dioxide from a smokestack', 'Soot from a wood fire', 'Secondary pollutants form when primary pollutants react in the atmosphere.'],
    ['concept', 'How does ground-level ozone form?', 'Sunlight breaks down nitrogen dioxide, and the free oxygen atoms combine with O₂; VOCs help ozone build up.', 'Ozone is emitted directly from car tailpipes.', 'Ozone sinks down from the stratosphere.', 'Lightning converts carbon dioxide into ozone.', 'NO₂ + sunlight → NO + O, then O + O₂ → O₃; VOCs keep NO from removing the ozone.'],
    ['concept', 'Under which conditions is photochemical smog most likely to be worst?', 'Hot, sunny afternoons in cities with heavy traffic', 'Cold, cloudy nights in rural areas', 'Rainy mornings near the coast', 'Windy days in the mountains', 'Smog forms from vehicle emissions reacting in strong sunlight and heat.'],
    ['concept', 'What happens during a thermal inversion?', 'A layer of warm air sits above cooler air near the surface, trapping pollutants close to the ground.', 'Warm air near the ground rises and carries pollutants away.', 'Cold air rises above warm air and creates strong winds.', 'Ozone in the stratosphere moves to the surface.', 'Normally, warm surface air rises; an inversion stops this mixing.'],
    ['concept', 'Which is a natural source of particulate matter?', 'Volcanic eruptions', 'Coal-fired power plants', 'Diesel truck exhaust', 'Construction sites', 'Volcanoes, wildfires, and dust storms add particles to the air naturally.'],
    ['concept', 'Radon gas can build up in basements. Where does it come from?', 'Radioactive decay of uranium in rocks and soil', 'Burning natural gas in furnaces', 'Furniture and carpets', 'Car exhaust from garages', 'Radon seeps from the ground and is a leading cause of lung cancer among nonsmokers.'],
    ['concept', 'Which indoor pollutant is released by pressed-wood furniture, carpets, and some glues?', 'Formaldehyde', 'Radon', 'Ozone', 'Lead from gasoline', 'Formaldehyde is a volatile organic compound found in many building materials.'],
    ['concept', 'How does a catalytic converter reduce vehicle pollution?', 'It converts CO, NOₓ, and hydrocarbons into CO₂, N₂, and water vapor.', 'It filters CO₂ out of exhaust.', 'It burns more fuel to make the engine cleaner.', 'It adds sulfur to gasoline.', 'Catalysts speed reactions that turn harmful exhaust gases into less harmful ones.'],
    ['concept', 'What does a wet scrubber in a smokestack do?', 'It sprays liquid that captures particulates and gases such as sulfur dioxide.', 'It burns exhaust a second time.', 'It uses electric charges to collect particles on plates.', 'It releases pollutants higher in the atmosphere.', 'Wet scrubbers pass exhaust through a liquid spray that traps pollutants.'],
    ['concept', 'What is the purpose of a vapor recovery nozzle at a gas station?', 'It captures gasoline vapors (VOCs) so they do not escape into the air.', 'It speeds up refueling.', 'It adds ethanol to gasoline.', 'It measures carbon monoxide in the air.', 'Capturing VOCs reduces ozone and smog formation.'],
    ['concept', 'Which pollutants are the main causes of acid deposition?', 'Sulfur dioxide and nitrogen oxides', 'Carbon monoxide and methane', 'Ozone and lead', 'Radon and formaldehyde', 'SO₂ and NOₓ react with water to form sulfuric and nitric acids.'],
    ['predict', 'Two lakes receive the same amount of acid rain. Lake A sits on limestone bedrock, and Lake B sits on granite. What is most likely?', 'Lake A’s pH stays higher because limestone neutralizes the acid.', 'Lake B’s pH stays higher because granite neutralizes acid.', 'Both lakes become equally acidic.', 'Lake A becomes more acidic because limestone releases acid.', 'Calcium carbonate in limestone buffers acids.'],
    ['concept', 'How can noise pollution harm wildlife?', 'It interferes with animals’ communication, mating calls, and ability to detect predators.', 'It raises the temperature of habitats.', 'It adds nutrients to ecosystems.', 'It increases oxygen levels in water.', 'Loud human noise can mask signals that animals rely on.'],
    ['concept', 'How does flue gas desulfurization reduce sulfur dioxide emissions?', 'Exhaust passes through limestone (calcium carbonate), which reacts with SO₂ to form calcium sulfate.', 'Sulfur is converted into ozone.', 'The SO₂ is released at a higher altitude.', 'Coal is burned at a lower temperature.', 'The calcium compound captures sulfur as a solid that can be removed.'],
    ['predict', 'A city stops requiring catalytic converters on all cars. Which change in air quality is most likely?', 'Higher levels of carbon monoxide, nitrogen oxides, and ground-level ozone', 'Lower levels of ground-level ozone', 'Lower levels of carbon monoxide', 'No change in air quality', 'Without converters, more CO, NOₓ, and VOCs are emitted, increasing smog.'],
    ['design', 'Students want to test whether houseplants reduce formaldehyde in indoor air. Which design is best?', 'Use identical sealed chambers with the same starting formaldehyde level, put plants in some chambers and none in others, and measure formaldehyde over time.', 'Measure formaldehyde in one room with plants only.', 'Place plants in a room and open the windows.', 'Compare a large room with plants to a small room without plants.', 'A controlled comparison with identical chambers isolates the effect of the plants.'],
    ['concept', 'What is a common health effect of long-term exposure to photochemical smog?', 'Respiratory irritation and worsened asthma', 'Skin cancer', 'Improved lung function', 'Thinning of eggshells', 'Ozone and other smog components irritate airways and damage lung tissue.'],
    ['concept', 'Which human activity has most reduced lead in the air in the United States?', 'Phasing out leaded gasoline', 'Building more coal power plants', 'Using more pesticides', 'Increasing car use', 'Removing lead from gasoline greatly reduced airborne lead.'],
    { family: 'graph', context: 'Hourly concentrations of nitrogen dioxide (NO₂) and ozone (O₃) were measured in a city on a sunny summer day.', plot: { type: 'line', xLabel: 'Hour of day', yLabel: 'Concentration (ppb)', x: [0, 4, 8, 12, 16, 20], series: [{ name: 'NO₂', values: [20, 15, 60, 40, 30, 35] }, { name: 'O₃', values: [10, 8, 20, 70, 60, 25] }] }, prompt: 'Why does ozone peak several hours after nitrogen dioxide?', choices: ['Morning traffic releases NO₂, and sunlight later in the day drives reactions that form ozone.', 'Ozone is released directly by evening traffic.', 'NO₂ is produced from ozone at night.', 'Ozone forms only when there is no sunlight.'], explanation: 'Ozone is a secondary pollutant that forms when sunlight breaks down NO₂, so it rises after the morning rush hour.' },
    { family: 'graph', context: 'Sulfur dioxide emissions from power plants in one country were tracked after new air quality regulations were introduced in 1990.', plot: { type: 'bar', xLabel: 'Year', yLabel: 'SO₂ emissions (million tons)', x: ['1980', '1990', '2000', '2010', '2020'], series: [{ name: 'SO₂', values: [25, 23, 15, 8, 2] }] }, prompt: 'Which outcome would most likely follow from this trend?', choices: ['Less acid deposition and a recovery of pH in sensitive lakes', 'More acid rain in forests downwind of power plants', 'An increase in ground-level ozone caused by SO₂', 'More damage to limestone buildings'], explanation: 'Lower SO₂ emissions mean less sulfuric acid in precipitation.' }
  ],
  // Unit 8: Aquatic and Terrestrial Pollution
  [
    ['concept', 'Which is an example of nonpoint source pollution?', 'Fertilizer runoff from many farms in a watershed', 'A pipe releasing waste from a factory into a river', 'A leaking underground storage tank at one gas station', 'Discharge from a sewage treatment plant outfall', 'Nonpoint pollution comes from many diffuse sources and is hard to trace.'],
    ['concept', 'Which sequence best describes eutrophication?', 'Excess nutrients → algal bloom → algae die → decomposers use up oxygen → fish die', 'Algae die → nutrients enter water → oxygen increases → fish increase', 'Oxygen increases → algae grow → nutrients decrease', 'Fish die → nutrients decrease → algae disappear', 'Decomposition of dead algae consumes dissolved oxygen, creating hypoxic water.'],
    ['concept', 'A power plant releases warm cooling water into a river. Why can this harm fish?', 'Warmer water holds less dissolved oxygen while raising fishes’ oxygen needs.', 'Warm water contains more nutrients for fish.', 'Warm water increases the dissolved oxygen in the river.', 'Fish cannot detect warm water.', 'Thermal pollution lowers oxygen solubility and increases metabolic rates.'],
    ['concept', 'What is an endocrine disruptor?', 'A chemical that interferes with the normal function of hormones in organisms', 'A pathogen that causes disease in fish', 'A heavy metal that damages the kidneys', 'A gas that depletes stratospheric ozone', 'Endocrine disruptors such as atrazine and BPA can mimic or block hormones.'],
    ['concept', 'What is the difference between bioaccumulation and biomagnification?', 'Bioaccumulation is buildup within one organism over its life; biomagnification is the increase in concentration at higher trophic levels.', 'They mean the same thing.', 'Bioaccumulation happens only in plants; biomagnification happens only in animals.', 'Biomagnification occurs within one organism; bioaccumulation occurs across a food chain.', 'Persistent, fat-soluble chemicals build up in individuals and become more concentrated up the food chain.'],
    ['concept', 'What was a major ecological effect of DDT use in the mid-1900s?', 'Thin eggshells in birds of prey such as bald eagles and peregrine falcons', 'An increase in fish populations', 'Acidification of lakes', 'Depletion of the ozone layer', 'DDT biomagnified in top predators and interfered with calcium use in eggshells.'],
    ['concept', 'Why do persistent organic pollutants (POPs) become concentrated in top predators?', 'They are fat-soluble and break down slowly, so they build up in tissues and pass up the food chain.', 'They are water-soluble and quickly excreted.', 'They break down rapidly in sunlight.', 'They are found only in producers.', 'Resistance to breakdown and storage in fat lead to biomagnification.'],
    ['concept', 'Which feature of a sanitary landfill reduces groundwater contamination?', 'A clay and plastic liner with a leachate collection system', 'Open burning of trash', 'Placing waste directly on sandy soil', 'Leaving waste uncovered', 'Liners and leachate collection keep liquid from waste out of groundwater.'],
    ['concept', 'Which is a disadvantage of incinerating solid waste?', 'It releases air pollutants and produces toxic ash that must be disposed of.', 'It increases the volume of waste.', 'It cannot generate electricity.', 'It produces more methane than landfills.', 'Incineration reduces volume but emits pollutants and leaves ash containing metals.'],
    ['concept', 'Why is e-waste a concern when it is dumped in landfills?', 'It contains toxic metals such as lead, cadmium, and mercury that can leach into soil and water.', 'It decomposes quickly and releases nutrients.', 'It contains no recyclable materials.', 'It is made only of paper and plastic.', 'Electronics contain heavy metals that are hazardous when released.'],
    ['concept', 'Which is a drawback of composting?', 'It can produce odors and attract rodents and insects if not managed properly.', 'It increases the amount of waste sent to landfills.', 'It removes nutrients from soil.', 'It produces toxic heavy metals.', 'Compost piles need management to avoid smells and pests.'],
    ['concept', 'What happens during secondary treatment of sewage?', 'Bacteria break down dissolved organic matter.', 'Large objects are screened out.', 'Sludge settles to the bottom of tanks.', 'Chlorine or UV light is used to kill pathogens.', 'Primary treatment removes solids physically; secondary treatment uses microbes to break down organic matter.'],
    ['concept', 'What does LD50 mean?', 'The dose of a substance that kills 50% of a test population', 'The dose at which 50% of a population shows no effect', 'The lowest dose that causes any effect', 'The concentration of a chemical in 50 liters of water', 'A lower LD50 indicates a more toxic substance.'],
    ['concept', 'Which U.S. law, known as Superfund, pays to clean up abandoned hazardous waste sites?', 'CERCLA', 'RCRA', 'Clean Air Act', 'Safe Drinking Water Act', 'CERCLA taxes chemical and petroleum industries to fund cleanup of contaminated sites.'],
    ['concept', 'Which U.S. law regulates hazardous waste from “cradle to grave”?', 'RCRA (Resource Conservation and Recovery Act)', 'CERCLA', 'Endangered Species Act', 'Clean Water Act', 'RCRA tracks hazardous waste from creation to disposal.'],
    ['concept', 'Why are wetlands valuable for water quality?', 'Wetland plants and soils filter sediments and pollutants and absorb excess nutrients.', 'Wetlands increase the speed of runoff into rivers.', 'Wetlands add pollutants to groundwater.', 'Wetlands remove all oxygen from water.', 'Wetlands act as natural filters and buffers against floods.'],
    ['concept', 'How is cholera usually spread?', 'Drinking water contaminated with human waste that contains the bacteria', 'Mosquito bites', 'Breathing smog', 'Touching contaminated soil', 'Cholera is a waterborne disease common where sanitation is poor.'],
    ['concept', 'Why are oil spills especially harmful to seabirds?', 'Oil coats feathers, destroying their insulation and waterproofing.', 'Oil adds nutrients that birds need.', 'Oil cools the water and increases oxygen.', 'Oil makes fish easier for birds to catch.', 'Oiled birds lose body heat and buoyancy and may swallow toxic oil while preening.'],
    { family: 'graph', context: 'Groups of rats were given different doses of a pesticide, and the percentage that died was recorded.', plot: { type: 'line', xLabel: 'Dose (mg/kg body mass)', yLabel: 'Mortality (%)', x: [0, 10, 20, 30, 40, 50], series: [{ name: 'Mortality', values: [0, 10, 30, 50, 75, 95] }] }, prompt: 'What is the LD50 of the pesticide?', choices: ['30 mg/kg', '50 mg/kg', '10 mg/kg', '25 mg/kg'], explanation: 'The LD50 is the dose at which 50% of the test population dies, which is 30 mg/kg.' },
    { family: 'graph', context: 'Dissolved oxygen (DO) was measured at sites downstream from a sewage discharge pipe at 0 km.', plot: { type: 'line', xLabel: 'Distance downstream (km)', yLabel: 'Dissolved oxygen (mg/L)', x: [0, 5, 10, 15, 20, 25], series: [{ name: 'DO', values: [9, 5, 3, 4.5, 7, 8.5] }] }, prompt: 'Why is dissolved oxygen lowest about 10 km downstream?', choices: ['Bacteria decomposing the organic waste use up oxygen there.', 'Fish produce the most oxygen at that site.', 'The water is coldest at 10 km.', 'Algae release carbon dioxide instead of oxygen.'], explanation: 'This oxygen sag curve shows decomposers consuming oxygen as they break down sewage; DO recovers farther downstream.' }
  ],
  // Unit 9: Global Change
  [
    ['concept', 'What is the main function of ozone in the stratosphere?', 'It absorbs most of the Sun’s harmful ultraviolet radiation.', 'It traps infrared radiation near the surface.', 'It produces oxygen for animals.', 'It causes photochemical smog.', 'Stratospheric ozone shields life from UV-B and UV-C radiation.'],
    ['concept', 'How do chlorofluorocarbons (CFCs) destroy stratospheric ozone?', 'UV light releases chlorine atoms, and each chlorine atom can break down thousands of ozone molecules.', 'CFCs absorb ozone directly from the air.', 'CFCs react with nitrogen to form acid rain.', 'CFCs block UV light from reaching ozone.', 'Chlorine acts as a catalyst, so it is not used up as it destroys ozone.'],
    ['concept', 'Which agreement phased out the production of CFCs?', 'The Montreal Protocol', 'The Kyoto Protocol', 'The Paris Agreement', 'CITES', 'The 1987 Montreal Protocol is widely seen as a successful environmental treaty.'],
    ['concept', 'What is the greenhouse effect?', 'Gases in the atmosphere absorb infrared radiation from Earth’s surface and re-emit it, warming the planet.', 'Ozone absorbs ultraviolet radiation in the stratosphere.', 'Sunlight is reflected away by clouds.', 'Plants release heat during photosynthesis.', 'Without the natural greenhouse effect, Earth would be far too cold for most life.'],
    ['concept', 'Which form of radiation is trapped by greenhouse gases?', 'Infrared radiation', 'Ultraviolet radiation', 'X-rays', 'Gamma rays', 'Earth’s surface emits infrared (heat) radiation, which greenhouse gases absorb.'],
    ['concept', 'Which human activity is a major source of nitrous oxide (N₂O)?', 'Applying nitrogen fertilizers to farm fields', 'Burning natural gas for heat', 'Using hydroelectric power', 'Planting trees', 'Soil microbes convert excess nitrogen fertilizer into N₂O, a powerful greenhouse gas.'],
    ['concept', 'Which sources release large amounts of methane?', 'Cattle digestion, rice paddies, and landfills', 'Solar panels and wind turbines', 'Forests and grasslands absorbing CO₂', 'Hydrogen fuel cells', 'Anaerobic decomposition and livestock digestion produce methane.'],
    ['concept', 'What are the two main causes of global sea level rise?', 'Thermal expansion of warming seawater and melting of land-based ice', 'Melting of floating sea ice and increased rainfall', 'Volcanic eruptions and earthquakes', 'Increased river flow from dams', 'Warm water expands, and water from glaciers and ice sheets adds to ocean volume.'],
    ['predict', 'Arctic sea ice is melting and exposing more dark ocean water. Which feedback is most likely?', 'Less sunlight is reflected, more heat is absorbed, and warming speeds up.', 'More sunlight is reflected, and the Arctic cools.', 'Ocean water reflects more light than ice, slowing warming.', 'Melting ice has no effect on how much sunlight is absorbed.', 'Loss of high-albedo ice is a positive feedback that amplifies Arctic warming.'],
    ['concept', 'Why is thawing permafrost a concern for climate change?', 'It releases methane and CO₂ from decomposing organic matter, causing more warming.', 'It absorbs large amounts of CO₂ from the air.', 'It increases the albedo of the Arctic.', 'It cools the atmosphere by releasing water vapor.', 'Thawing permafrost creates a positive feedback loop.'],
    ['concept', 'What happens during coral bleaching?', 'Stressed corals expel their symbiotic algae (zooxanthellae) and lose their color and main food source.', 'Corals grow faster and turn white.', 'Algae grow over the corals and kill them.', 'Corals absorb more calcium carbonate.', 'Corals depend on zooxanthellae for food from photosynthesis; prolonged bleaching can kill them.'],
    ['concept', 'How does ocean acidification occur?', 'The ocean absorbs CO₂, which forms carbonic acid and releases hydrogen ions.', 'Acid rain falls directly into the ocean and is the main cause.', 'Warmer water releases hydrogen ions.', 'Plankton produce acids during photosynthesis.', 'CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻, which lowers pH and reduces carbonate available for shells.'],
    ['concept', 'Which trait helps invasive species outcompete native species?', 'They are often generalists that reproduce quickly and lack natural predators in the new area.', 'They are specialists with very few offspring.', 'They need very specific habitats.', 'They are always native to the area.', 'Invasive species are often r-selected generalists.'],
    ['concept', 'Which is the most effective way to prevent zebra mussels from spreading to new lakes?', 'Cleaning, draining, and drying boats before moving them between lakes', 'Releasing more zebra mussels to compete with each other', 'Adding fertilizer to lakes', 'Building more boat ramps', 'Many aquatic invasive species spread by hitchhiking on boats and trailers.'],
    ['concept', 'What is the leading cause of biodiversity loss worldwide?', 'Habitat destruction and fragmentation', 'Pollution from noise', 'Natural extinction alone', 'Increases in stratospheric ozone', 'Habitat loss is the largest threat to species.'],
    ['concept', 'What is the main goal of a habitat corridor?', 'To connect fragmented habitats so organisms can move between them and populations can interbreed', 'To separate predators from prey', 'To build roads through wildlife areas', 'To prevent all animal migration', 'Corridors reduce isolation and maintain gene flow.'],
    ['concept', 'Which traits make a species more likely to become endangered?', 'A specialized diet, a small range, and a low reproductive rate', 'A generalist diet and a large range', 'High reproductive rates and short life spans', 'The ability to live in many habitats', 'Specialists with slow reproduction recover poorly from disturbances.'],
    ['concept', 'Which U.S. law protects listed species and their critical habitats?', 'The Endangered Species Act', 'The Clean Air Act', 'CERCLA', 'The Montreal Protocol', 'The Endangered Species Act prohibits harming listed species and protects their habitat.'],
    { family: 'graph', context: 'Atmospheric carbon dioxide was measured at a monitoring station from 1960 to 2020.', plot: { type: 'line', xLabel: 'Year', yLabel: 'CO₂ (ppm)', x: [1960, 1970, 1980, 1990, 2000, 2010, 2020], series: [{ name: 'CO₂', values: [317, 326, 339, 354, 369, 390, 413] }] }, prompt: 'Which statement is best supported by the data?', choices: ['CO₂ has risen every decade, and the rate of increase has grown over time.', 'CO₂ has risen at a constant rate.', 'CO₂ levels are now lower than in 1960.', 'CO₂ rose quickly at first and then leveled off.'], explanation: 'The increases per decade (9, 13, 15, 15, 21, 23 ppm) show an accelerating rise.' },
    { family: 'graph', context: 'Average surface ocean pH was measured at a long-term monitoring site.', plot: { type: 'line', xLabel: 'Year', yLabel: 'Surface ocean pH', x: [1990, 1995, 2000, 2005, 2010, 2015, 2020], series: [{ name: 'pH', values: [8.11, 8.1, 8.09, 8.08, 8.07, 8.06, 8.05] }] }, prompt: 'Which explanation best accounts for the trend?', choices: ['The ocean is absorbing more CO₂ from the atmosphere, which forms carbonic acid.', 'Coral reefs are releasing acid into the water.', 'Warmer water always has a higher pH.', 'More rivers are adding limestone to the ocean.'], explanation: 'Rising atmospheric CO₂ dissolves in seawater and lowers pH.' }
  ]
];

const format = value => (Number.isInteger(value) ? value.toLocaleString('en-US') : String(Number(value.toFixed(2)))).replace(/^-/, '−');
const times = value => format(value) + (value === 1 ? ' time' : ' times');
const round = (value, places = 1) => Number(value.toFixed(places));
const pct = (value, places = 1) => format(round(value, places)) + '%';
const unit = label => value => format(value) + ' ' + label;
const money = value => '$' + value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Builds one calculation question; returns null unless the four choices are distinct.
function calc(unitNumber, family, key, prompt, values, explanation) {
  const choices = values.map(value => typeof value === 'number' ? format(value) : value);
  if (new Set(choices).size !== 4 || choices.some(choice => /NaN|Infinity/.test(choice))) return null;
  return { id: 'env-' + unitNumber + '-' + family + '-' + key, family, prompt, choices, answer: 0, explanation };
}

// Percent change between two measurements, written for a named quantity.
function percentChange(u, family, subjects, pairs) {
  return pairs.map(([before, after], index) => {
    const [subject, label] = subjects[index % subjects.length];
    const change = (after - before) / before * 100;
    return calc(u, family, before + '-' + after, `${subject} changed from ${format(before)} ${label} to ${format(after)} ${label}. What is the percent change? Round to one decimal place.`,
      [pct(change), pct(-change), pct((after - before) / after * 100), pct(after / before * 100)],
      `Percent change = (${format(after)} − ${format(before)}) ÷ ${format(before)} × 100 ≈ ${pct(change)}.`);
  });
}

// Amount left after a number of half-lives.
function halfLife(u, family, thing, label, sets) {
  return sets.map(([amount, life, time, lifeUnit]) => {
    const lives = time / life;
    const left = amount * 0.5 ** lives;
    const show = unit(label);
    return calc(u, family, amount + '-' + life + '-' + time, `${thing} starts at ${format(amount)} ${label} and has a half-life of ${format(life)} ${lifeUnit}. How much remains after ${format(time)} ${lifeUnit}?`,
      [show(round(left, 2)), show(round(amount / lives, 2)), show(round(amount * 0.5 ** (lives - 1), 2)), show(round(amount - left, 2))],
      `${format(time)} ÷ ${format(life)} = ${format(lives)} half-lives, so ${format(amount)} × (½)^${format(lives)} = ${format(round(left, 2))} ${label}.`);
  });
}

const levelNames = ['primary consumers', 'secondary consumers', 'tertiary consumers'];

const generators = {
  1: u => [
    ...[[10000, 1], [20000, 2], [25000, 3], [40000, 1], [50000, 2], [80000, 3], [100000, 1], [120000, 2], [150000, 3], [200000, 1], [250000, 2], [300000, 3], [500000, 1], [600000, 2], [1000000, 3], [45000, 1], [70000, 2], [900000, 3]].map(([energy, level]) =>
      calc(u, 'calc-ten-percent', energy + '-' + level, `Producers in an ecosystem store ${format(energy)} kcal/m²/yr. Using the 10 percent rule, about how much energy is available to ${levelNames[level - 1]}?`,
        [unit('kcal/m²/yr')(energy / 10 ** level), unit('kcal/m²/yr')(energy / 10 ** (level + 1)), unit('kcal/m²/yr')(energy / 10 ** (level - 1)), unit('kcal/m²/yr')(Math.round(energy * 0.9 ** level))],
        `About 10% passes to each higher level, so ${format(energy)} × 0.1^${level} = ${format(energy / 10 ** level)} kcal/m²/yr.`)),
    ...[[5000, 450], [12000, 1500], [8000, 640], [20000, 2400], [3500, 280], [60000, 4200], [900, 117], [15000, 1650], [2500, 175], [40000, 5200], [7200, 576], [1800, 90], [30000, 2700], [11000, 1430], [6400, 320], [25000, 3000]].map(([lower, upper]) => {
      const efficiency = upper / lower * 100;
      return calc(u, 'calc-efficiency', lower + '-' + upper, `Producers in a pond store ${format(lower)} kcal/m²/yr, and the primary consumers that eat them store ${format(upper)} kcal/m²/yr. What is the ecological efficiency of this energy transfer? Round to one decimal place.`,
        [pct(efficiency), pct(100 - efficiency), pct(efficiency * 10), pct(upper / (lower + upper) * 100)],
        `Efficiency = ${format(upper)} ÷ ${format(lower)} × 100 ≈ ${pct(efficiency)}.`);
    }),
    ...[[2500, 1100], [3200, 1800], [1800, 950], [4000, 2600], [1200, 500], [6000, 3800], [850, 420], [2200, 1300], [5100, 2900], [1500, 675], [3600, 2100], [960, 410], [2700, 1550], [4400, 2350], [700, 320], [1950, 1050]].map(([gpp, r], index) => {
      const npp = gpp - r;
      const show = unit('kcal/m²/yr');
      if (index % 3 === 0) return calc(u, 'calc-npp', 'npp-' + gpp + '-' + r, `A grassland has a gross primary productivity of ${format(gpp)} kcal/m²/yr, and its producers use ${format(r)} kcal/m²/yr for respiration. What is its net primary productivity?`,
        [show(npp), show(gpp + r), show(r), show(gpp)], `NPP = GPP − R = ${format(gpp)} − ${format(r)} = ${format(npp)} kcal/m²/yr.`);
      if (index % 3 === 1) return calc(u, 'calc-npp', 'gpp-' + gpp + '-' + r, `A forest has a net primary productivity of ${format(npp)} kcal/m²/yr, and its producers use ${format(r)} kcal/m²/yr for respiration. What is its gross primary productivity?`,
        [show(gpp), show(npp), show(r), show(npp + 2 * r)], `GPP = NPP + R = ${format(npp)} + ${format(r)} = ${format(gpp)} kcal/m²/yr.`);
      return calc(u, 'calc-npp', 'r-' + gpp + '-' + r, `A wetland has a GPP of ${format(gpp)} kcal/m²/yr and an NPP of ${format(npp)} kcal/m²/yr. How much energy do its producers use for respiration?`,
        [show(r), show(gpp), show(npp), show(gpp + npp)], `R = GPP − NPP = ${format(gpp)} − ${format(npp)} = ${format(r)} kcal/m²/yr.`);
    }),
    ...[[200, 2], [350, 1], [500, 3], [800, 2], [1200, 1], [1500, 3], [2000, 2], [2500, 1], [3000, 3], [4500, 2], [6000, 1], [7500, 2], [250, 3], [900, 1], [1800, 2]].map(([need, level]) =>
      calc(u, 'calc-energy-needed', need + '-' + level, `A population of ${levelNames[level - 1]} needs ${format(need)} kcal of energy per day. Using the 10 percent rule, about how much energy must the producers at the base of its food chain store each day?`,
        [unit('kcal')(need * 10 ** level), unit('kcal')(need * 10 ** (level + 1)), unit('kcal')(need * 10 ** (level - 1)), unit('kcal')(need / 10 ** level)],
        `Each step down the food chain needs 10 times more energy, so ${format(need)} × 10^${level} = ${format(need * 10 ** level)} kcal.`)),
    ...[[12.4, 9.1], [8.6, 7.9], [15.2, 10.4], [6.8, 7.3], [22.5, 18.0], [9.4, 9.9], [18.7, 12.2], [5.5, 4.1], [30.0, 26.5], [11.1, 11.8], [14.6, 8.9], [7.2, 5.6], [25.4, 21.7], [10.0, 10.6]].map(([uptake, release]) => {
      const show = value => format(round(value, 1)) + ' t C/ha/yr';
      const net = uptake - release;
      return calc(u, 'calc-carbon-balance', uptake + '-' + release, `A forest absorbs ${uptake} metric tons of carbon per hectare per year through photosynthesis and releases ${release} t C/ha/yr through respiration and decomposition. What is its net carbon uptake?`,
        [show(net), show(uptake + release), show(release - uptake), show(uptake / release)],
        `Net uptake = ${uptake} − ${release} = ${format(round(net, 1))} t C/ha/yr. A positive value means a carbon sink; a negative value means a carbon source.`);
    }),
    ...percentChange(u, 'calc-percent-change', [['A sea otter population', 'otters'], ['The area of a kelp forest', 'hectares'], ['A wolf population', 'wolves'], ['An elk herd', 'elk']],
      [[120, 84], [45, 72], [300, 210], [80, 140], [2500, 1750], [64, 40], [150, 195], [900, 1170], [36, 63], [410, 287], [1200, 1560], [55, 22], [18, 45], [640, 512], [250, 95]]),
    ...[[42.5, 30.6], [38.0, 22.8], [55.2, 41.4], [27.5, 19.8], [64.0, 48.0], [18.4, 12.0], [33.6, 25.2], [71.0, 49.7], [24.0, 9.6], [48.5, 38.8], [60.0, 21.0], [15.5, 12.4]].map(([without, withBeetles]) => {
      const reduction = (without - withBeetles) / without * 100;
      return calc(u, 'calc-herbivory', without + '-' + withBeetles, `In an exclusion experiment, the mean leaf area of shrubs was ${without} cm² in plots without beetles and ${withBeetles} cm² in plots with beetles. By what percentage did beetles reduce mean leaf area? Round to one decimal place.`,
        [pct(reduction), pct(withBeetles / without * 100), pct((without - withBeetles) / withBeetles * 100), pct(without - withBeetles)],
        `Reduction = (${without} − ${withBeetles}) ÷ ${without} × 100 ≈ ${pct(reduction)}.`);
    })
  ],
  2: u => [
    ...[[40, 30, 20, 10], [70, 10, 10, 10], [25, 25, 25, 25], [50, 30, 20], [80, 10, 10], [60, 20, 20], [45, 35, 15, 5], [90, 5, 5], [30, 30, 20, 20], [50, 25, 15, 10], [55, 15, 15, 10, 5], [20, 20, 20, 20, 20], [65, 25, 10], [40, 40, 20]].map(counts => {
      const total = counts.reduce((sum, n) => sum + n, 0);
      const sumSquares = counts.reduce((sum, n) => sum + (n / total) ** 2, 0);
      const d = 1 - sumSquares;
      return calc(u, 'calc-simpson', counts.join('-'), `A survey of a ${total}-individual plant community finds these counts for each species: ${counts.join(', ')}. Using Simpson’s diversity index, D = 1 − Σ(n/N)², what is D? Round to two decimal places.`,
        [d.toFixed(2), sumSquares.toFixed(2), (sumSquares * counts.length).toFixed(2), (1 - Math.max(...counts) / total / 2).toFixed(2)],
        `Σ(n/N)² = ${sumSquares.toFixed(2)}, so D = 1 − ${sumSquares.toFixed(2)} = ${d.toFixed(2)}. Values closer to 1 mean higher diversity.`);
    }),
    ...[[1200, 780], [850, 510], [3000, 1950], [640, 416], [2500, 875], [420, 357], [5600, 3920], [980, 245], [1500, 1125], [760, 190], [2200, 1452], [350, 280], [4800, 2880], [1000, 620]].map(([original, remaining]) => {
      const lost = (original - remaining) / original * 100;
      return calc(u, 'calc-habitat-loss', original + '-' + remaining, `A forest once covered ${format(original)} km². After logging and road building, ${format(remaining)} km² remain. What percentage of the original forest has been lost? Round to one decimal place.`,
        [pct(lost), pct(remaining / original * 100), pct((original - remaining) / remaining * 100), pct(lost / 10)],
        `Lost = (${format(original)} − ${format(remaining)}) ÷ ${format(original)} × 100 ≈ ${pct(lost)}.`);
    }),
    ...[[1200, 350], [4500, 80], [850, 1200], [15000, 25], [2300, 640], [600, 5000], [9800, 45], [3100, 220], [480, 7500], [12500, 16], [7400, 90], [2750, 400]].map(([value, hectares], index) => {
      const service = ['flood protection', 'water filtration', 'pollination of nearby crops', 'fish nursery habitat'][index % 4];
      const total = value * hectares;
      return calc(u, 'calc-service-value', value + '-' + hectares, `Economists estimate that a wetland provides $${format(value)} per hectare per year in ${service}. What is the total annual value of this service for ${format(hectares)} hectares of wetland?`,
        ['$' + format(total), '$' + format(total * 10), '$' + format(total / 10), '$' + format(value + hectares)],
        `Total value = $${format(value)} × ${format(hectares)} ha = $${format(total)} per year.`);
    }),
    ...[[120, 25], [80, 15], [240, 40], [56, 25], [300, 12], [150, 30], [90, 20], [64, 25], [500, 18], [45, 20], [210, 10], [180, 35]].map(([species, percent]) => {
      const lost = Math.round(species * percent / 100);
      return calc(u, 'calc-species-remaining', species + '-' + percent, `An island has ${species} native bird species. Habitat loss is expected to cause ${percent}% of them to go extinct. How many native bird species would remain?`,
        [species - lost, lost, species - percent, species],
        `${percent}% of ${species} is ${lost} species, so ${species} − ${lost} = ${species - lost} species remain.`);
    }),
    ...[[45, 300], [120, 800], [18, 150], [260, 1300], [72, 240], [9, 60], [340, 850], [54, 450], [150, 600], [33, 220], [480, 1600], [27, 90]].map(([endemic, total]) =>
      calc(u, 'calc-endemic', endemic + '-' + total, `A survey of a mountain range records ${format(total)} plant species, of which ${endemic} are endemic (found nowhere else). What percentage of the species are endemic? Round to one decimal place.`,
        [pct(endemic / total * 100), pct((total - endemic) / total * 100), pct(endemic / (total - endemic) * 100), pct(total / endemic)],
        `Percent endemic = ${endemic} ÷ ${format(total)} × 100 ≈ ${pct(endemic / total * 100)}.`)),
    ...[[18, 24, 0.4], [15, 21, 0.5], [22, 26, 0.25], [10, 16, 0.3], [25, 28, 0.2], [12, 20, 0.8], [19, 23, 0.5], [8, 14, 0.6], [21, 27, 0.3], [16, 19, 0.25], [14, 22, 0.4], [20, 25, 0.5]].map(([current, limit, rate]) => {
      const decades = (limit - current) / rate;
      return calc(u, 'calc-tolerance', current + '-' + limit + '-' + rate, `A trout species can tolerate water up to ${limit} °C. A river currently averages ${current} °C and is warming by ${rate} °C per decade. If the trend continues, about how many years will it take for the river to reach the trout’s upper tolerance limit?`,
        [unit('years')(decades * 10), unit('years')(decades), unit('years')(round(limit / rate * 10, 0)), unit('years')(round((limit - current) * rate * 10, 1))],
        `The river must warm ${limit - current} °C. At ${rate} °C per decade that takes ${format(decades)} decades, or ${format(decades * 10)} years.`);
    }),
    ...[[4, 40, 20], [2, 32, 15], [6, 54, 24], [3, 45, 30], [5, 35, 12], [10, 70, 40], [8, 56, 16], [1, 25, 8], [12, 60, 24], [7, 49, 21], [0, 36, 18], [9, 81, 36]].map(([start, end, years]) =>
      calc(u, 'calc-succession-rate', start + '-' + end + '-' + years, `After a field was abandoned, its plant species richness rose from ${start} to ${end} species over ${years} years. What was the average increase in species per year?`,
        [unit('species per year')((end - start) / years), unit('species per year')(round(end / years, 2)), unit('species per year')(round(years / (end - start), 2)), unit('species per year')(end - start)],
        `Average rate = (${end} − ${start}) ÷ ${years} = ${format((end - start) / years)} species per year.`))
  ],
  3: u => [
    ...[[38, 8], [22, 9], [12, 10], [45, 12], [18, 6], [9, 11], [30, 7], [16, 8], [27, 5], [11, 9], [40, 15], [14, 4], [25, 10], [8, 10], [33, 6], [20, 13]].map(([cbr, cdr]) =>
      calc(u, 'calc-growth-rate', cbr + '-' + cdr, `A country has a crude birth rate of ${cbr} per 1,000 people and a crude death rate of ${cdr} per 1,000 people. Ignoring migration, what is its annual population growth rate?`,
        [pct((cbr - cdr) / 10, 2), pct(cbr - cdr, 2), pct((cbr + cdr) / 10, 2), pct((cbr - cdr) / 100, 2)],
        `Growth rate (%) = (CBR − CDR) ÷ 10 = (${cbr} − ${cdr}) ÷ 10 = ${format((cbr - cdr) / 10)}%.`)),
    ...[0.5, 0.7, 0.25, 1.4, 2, 2.5, 3.5, 0.35, 1.75, 2.8, 0.2, 0.1, 1.2, 3, 4, 0.8].map(rate =>
      calc(u, 'calc-doubling-time', rate, `A population grows at ${rate}% per year. Using the rule of 70, about how many years will it take to double? Round to one decimal place.`,
        [unit('years')(round(70 / rate, 1)), unit('years')(round(70 * rate, 1)), unit('years')(round(100 / rate, 1)), unit('years')(round(7 / rate, 1))],
        `Doubling time ≈ 70 ÷ ${rate} = ${format(round(70 / rate, 1))} years.`)),
    ...[[50000, 1200, 450, 300, 150], [120000, 2600, 1100, 400, 900], [8000, 240, 96, 60, 20], [25000, 410, 380, 90, 260], [300000, 4500, 2700, 800, 1200], [64000, 900, 1100, 150, 40], [15000, 330, 120, 45, 85], [90000, 1800, 700, 250, 600], [4200, 126, 42, 30, 14], [220000, 2900, 3300, 500, 350], [36000, 720, 250, 80, 190], [75000, 1050, 825, 410, 95]].flatMap(([n, b, d, i, e]) => {
      const change = b + i - d - e;
      return [
        calc(u, 'calc-population-change', n + '-' + b + '-' + d, `A town of ${format(n)} people has ${format(b)} births, ${format(d)} deaths, ${format(i)} immigrants, and ${format(e)} emigrants in one year. What is the population at the end of the year?`,
          [n + change, n + b - d, n + b + i + d + e, n + b + e - d - i],
          `ΔN = B + I − D − E = ${format(b)} + ${format(i)} − ${format(d)} − ${format(e)} = ${format(change)}, so the population is ${format(n + change)}.`),
        calc(u, 'calc-growth-percent', n + '-' + b + '-' + d, `A city of ${format(n)} people records ${format(b)} births, ${format(d)} deaths, ${format(i)} immigrants, and ${format(e)} emigrants in one year. What is its percent growth rate for that year? Round to two decimal places.`,
          [pct(change / n * 100, 2), pct((b - d) / n * 100, 2), pct(change / n * 1000, 2), pct((b + i) / n * 100, 2)],
          `Growth rate = (B + I − D − E) ÷ N × 100 = ${format(change)} ÷ ${format(n)} × 100 ≈ ${pct(change / n * 100, 2)}.`)
      ];
    }),
    ...[[2, 35, 70], [5, 25, 75], [1.5, 20, 60], [8, 50, 100], [3, 30, 90], [12, 70, 140], [0.8, 18, 54], [4, 40, 120], [6, 23, 46], [1.2, 15, 60], [20, 35, 105], [2.5, 28, 84], [10, 45, 90], [0.5, 14, 56]].map(([start, doubling, years]) => {
      const doublings = years / doubling;
      const show = unit('million');
      return calc(u, 'calc-future-population', start + '-' + doubling + '-' + years, `A country of ${format(start)} million people has a doubling time of ${doubling} years. If its growth rate stays the same, what will its population be in ${years} years?`,
        [show(start * 2 ** doublings), show(start * doublings), show(start * 2 ** (doublings + 1)), show(start * 2 ** (doublings - 1))],
        `${years} years is ${doublings} doubling times, so ${format(start)} × 2^${doublings} = ${format(start * 2 ** doublings)} million.`);
    }),
    ...[[24000, 120], [1500, 30], [860000, 430], [4200, 600], [125000, 250], [3600, 90], [72000, 1800], [950, 19], [48000, 64], [2800000, 1400], [6300, 35], [180000, 900]].map(([people, area]) =>
      calc(u, 'calc-density', people + '-' + area, `A region has ${format(people)} people living in ${format(area)} km². What is its population density?`,
        [unit('people/km²')(round(people / area, 2)), unit('people/km²')(round(people / area * 10, 2)), unit('people/km²')(people * area), unit('people/km²')(round(people / area / 10, 2))],
        `Density = ${format(people)} ÷ ${format(area)} km² = ${format(people / area)} people/km².`)),
    ...[[80, 60, 15], [40, 35, 7], [120, 90, 27], [25, 30, 6], [150, 100, 30], [70, 48, 12], [200, 160, 40], [36, 45, 9], [90, 75, 18], [55, 66, 11], [110, 80, 16], [64, 50, 8]].map(([marked, caught, recaptured]) =>
      calc(u, 'calc-mark-recapture', marked + '-' + caught + '-' + recaptured, `Biologists tag ${marked} lizards and release them. A week later they capture ${caught} lizards, and ${recaptured} of them are tagged. Using N = (marked × caught) ÷ recaptured, what is the estimated population size?`,
        [Math.round(marked * caught / recaptured), marked + caught, Math.round(marked * recaptured / caught), marked + caught - recaptured],
        `N = ${marked} × ${caught} ÷ ${recaptured} = ${format(Math.round(marked * caught / recaptured))} lizards.`)),
    ...[[450, 15000], [1200, 40000], [96, 24000], [3300, 55000], [72, 18000], [2600, 65000], [510, 8500], [140, 35000], [1950, 30000], [88, 22000], [4800, 60000], [315, 7000]].map(([deaths, births]) =>
      calc(u, 'calc-infant-mortality', deaths + '-' + births, `In one year a country records ${format(births)} live births and ${format(deaths)} deaths of infants under one year old. What is its infant mortality rate per 1,000 live births?`,
        [round(deaths / births * 1000, 1), round(deaths / births * 100, 2), round(births / deaths, 1), round(deaths / births * 10000, 1)],
        `IMR = ${format(deaths)} ÷ ${format(births)} × 1,000 = ${format(round(deaths / births * 1000, 1))} per 1,000 live births.`)),
    ...[35, 14, 70, 28, 50, 20, 10, 140, 25, 40, 17.5, 100].map(doubling =>
      calc(u, 'calc-rate-from-doubling', doubling, `A population is doubling every ${doubling} years. Using the rule of 70, what is its approximate annual growth rate?`,
        [pct(70 / doubling, 2), pct(doubling / 70, 2), pct(100 / doubling, 2), pct(70 / doubling * 10, 2)],
        `Growth rate ≈ 70 ÷ ${doubling} = ${format(70 / doubling)}% per year.`))
  ],
  4: u => [
    ...[[40, 40], [20, 20], [65, 25], [10, 70], [35, 45], [55, 30], [15, 50], [70, 15], [30, 30], [45, 40], [25, 55], [60, 10], [5, 40], [50, 20]].map(([sand, silt]) =>
      calc(u, 'calc-soil-texture', sand + '-' + silt, `A soil sample is ${sand}% sand and ${silt}% silt. The rest is clay. What percentage of the sample is clay?`,
        [pct(100 - sand - silt, 0), pct(sand + silt, 0), pct((sand + silt) / 2, 0), pct(100 - sand, 0)],
        `Sand + silt + clay = 100%, so clay = 100 − ${sand} − ${silt} = ${100 - sand - silt}%.`)),
    ...[[250, 5], [100, 0.5], [500, 40], [300, 12], [150, 2.5], [400, 16], [200, 25], [600, 8], [120, 1.5], [350, 14], [450, 90], [80, 0.4]].map(([volume, minutes]) =>
      calc(u, 'calc-infiltration', volume + '-' + minutes, `In a percolation test, ${volume} mL of water drains through a soil column in ${minutes} minutes. What is the average infiltration rate?`,
        [unit('mL/min')(round(volume / minutes, 2)), unit('mL/min')(round(minutes / volume, 4)), unit('mL/min')(volume * minutes), unit('mL/min')(round(volume / minutes / 60, 2))],
        `Rate = ${volume} mL ÷ ${minutes} min = ${format(volume / minutes)} mL/min.`)),
    ...[[50, 40], [120, 96], [80, 68], [200, 150], [64, 48], [150, 135], [90, 72], [250, 175], [45, 36], [180, 153], [300, 240], [110, 88]].map(([wet, dry]) =>
      calc(u, 'calc-soil-moisture', wet + '-' + dry, `A soil sample has a mass of ${wet} g before drying and ${dry} g after drying in an oven. Using water content = (wet − dry) ÷ dry × 100, what is its water content? Round to one decimal place.`,
        [pct((wet - dry) / dry * 100), pct((wet - dry) / wet * 100), pct(dry / wet * 100), pct(wet - dry)],
        `Water content = (${wet} − ${dry}) ÷ ${dry} × 100 ≈ ${pct((wet - dry) / dry * 100)}.`)),
    ...[[40, 100], [90, 250], [35, 140], [120, 300], [18, 60], [75, 150], [52, 200], [66, 120], [27, 90], [140, 400], [48, 80], [33, 150]].map(([water, soil]) =>
      calc(u, 'calc-porosity', water + '-' + soil, `Water is slowly poured into a container holding ${soil} mL of dry soil. The soil is saturated after ${water} mL of water is added. What is the soil’s porosity? Round to one decimal place.`,
        [pct(water / soil * 100), pct((soil - water) / soil * 100), pct(water / (soil + water) * 100), pct(soil / water * 10)],
        `Porosity = pore volume ÷ total volume × 100 = ${water} ÷ ${soil} × 100 ≈ ${pct(water / soil * 100)}.`)),
    ...[[100, 15], [200, 25], [500, 10], [250, 30], [400, 20], [150, 12], [300, 8], [1000, 5], [350, 18], [120, 40], [600, 6], [80, 45]].map(([yearsPerCm, depth]) =>
      calc(u, 'calc-soil-formation', yearsPerCm + '-' + depth, `In a region, it takes about ${yearsPerCm} years for 1 cm of topsoil to form. Erosion removed ${depth} cm of topsoil from a farm. About how long would it take to naturally replace the lost topsoil?`,
        [unit('years')(yearsPerCm * depth), unit('years')(round(yearsPerCm / depth, 2)), unit('years')(round(depth / yearsPerCm, 3)), unit('years')(yearsPerCm + depth)],
        `${depth} cm × ${yearsPerCm} years per cm = ${format(yearsPerCm * depth)} years.`)),
    ...[[25, 2], [30, 4], [15, 3], [20, 6], [10, 1.5], [28, 8], [18, 5], [35, 10], [22, 2.5], [12, 4], [5, 3], [16, 7]].map(([surface, height]) => {
      const show = value => format(round(value, 2)) + ' °C';
      return calc(u, 'calc-lapse-rate', surface + '-' + height, `Air temperature in the troposphere falls by about 6.5 °C for every kilometer of altitude. If the air at sea level is ${surface} °C, what is the expected temperature at ${height} km?`,
        [show(surface - 6.5 * height), show(surface + 6.5 * height), show(surface - 6.5), show(surface - 10 * height)],
        `${surface} − (6.5 × ${height}) = ${format(round(surface - 6.5 * height, 2))} °C.`);
    }),
    ...[[2, 5], [1.5, 12], [3, 40], [0.5, 80], [4, 2.5], [2.5, 16], [1, 150], [6, 7], [0.8, 25], [5, 30], [3.5, 4], [1.2, 60]].map(([rain, area]) =>
      calc(u, 'calc-rain-volume', rain + '-' + area, `A storm drops ${rain} cm of rain on a ${area} km² watershed. One centimeter of rain over 1 km² equals 10,000 m³ of water. What volume of rain fell on the watershed?`,
        [unit('m³')(Math.round(rain * area * 10000)), unit('m³')(Math.round(rain * area * 1000)), unit('m³')(Math.round(rain * area * 100000)), unit('m³')(round(rain * area, 2))],
        `${rain} cm × ${area} km² × 10,000 m³ = ${format(Math.round(rain * area * 10000))} m³.`)),
    ...[[340, 102], [1000, 850], [340, 30], [1000, 90], [800, 640], [500, 175], [1200, 96], [340, 119], [900, 45], [600, 480], [750, 225], [400, 28]].map(([incoming, reflected]) =>
      calc(u, 'calc-albedo', incoming + '-' + reflected, `A surface receives ${incoming} W/m² of sunlight and reflects ${reflected} W/m². What is its albedo, expressed as a percentage? Round to one decimal place.`,
        [pct(reflected / incoming * 100), pct((incoming - reflected) / incoming * 100), pct(reflected / (incoming - reflected) * 100), pct(incoming / reflected)],
        `Albedo = reflected ÷ incoming × 100 = ${reflected} ÷ ${incoming} × 100 ≈ ${pct(reflected / incoming * 100)}.`))
  ],
  5: u => [
    ...[[3.5, 1.28, 12], [5, 1.6, 8], [2.5, 1.5, 10], [4, 1.1, 6], [3, 0.8, 15], [6, 2, 5], [2.2, 1.2, 20], [1.6, 0.8, 24], [3.6, 1.6, 9], [4.5, 1.5, 7], [2, 1.28, 18], [5.5, 2.5, 4]].map(([before, after, uses], index) => {
      const fixture = index % 2 === 0 ? ['toilet', 'flushes'] : ['showerhead', 'minutes of showering'];
      const saved = Math.round((before - after) * uses * 365);
      return calc(u, 'calc-water-savings', before + '-' + after + '-' + uses, `A family replaces a ${fixture[0]} that uses ${before} gallons per ${index % 2 === 0 ? 'flush' : 'minute'} with one that uses ${after} gallons. They average ${uses} ${fixture[1]} per day. About how many gallons of water will they save per year?`,
        [unit('gallons')(saved), unit('gallons')(round((before - after) * uses, 2)), unit('gallons')(Math.round(before * uses * 365)), unit('gallons')(Math.round((before - after) * uses * 52))],
        `(${before} − ${after}) × ${uses} per day × 365 days ≈ ${format(saved)} gallons per year.`);
    }),
    ...[[9000, 50, 90], [12000, 40, 80], [6000, 60, 90], [20000, 50, 95], [15000, 45, 90], [8000, 60, 80], [30000, 50, 75], [4500, 45, 90], [18000, 40, 90], [10000, 50, 80], [24000, 60, 96], [7200, 40, 90]].map(([needed, flood, drip]) => {
      const saved = Math.round(needed / (flood / 100) - needed / (drip / 100));
      return calc(u, 'calc-irrigation', needed + '-' + flood + '-' + drip, `A field’s crops need ${format(needed)} liters of water. Flood irrigation is ${flood}% efficient, and drip irrigation is ${drip}% efficient. How much less water must be applied if the farmer switches from flood to drip irrigation?`,
        [unit('liters')(saved), unit('liters')(Math.round(needed * (drip - flood) / 100)), unit('liters')(Math.round(needed / (drip / 100))), unit('liters')(Math.round(needed / (flood / 100)))],
        `Flood: ${format(needed)} ÷ ${flood / 100} = ${format(Math.round(needed / (flood / 100)))} L. Drip: ${format(needed)} ÷ ${drip / 100} = ${format(Math.round(needed / (drip / 100)))} L. Difference ≈ ${format(saved)} L.`);
    }),
    ...[[450, 150], [2400, 600], [96, 40], [1800, 250], [620, 124], [7500, 1500], [360, 90], [1150, 230], [84, 35], [5400, 1200], [270, 45], [960, 320]].map(([tonnes, hectares]) =>
      calc(u, 'calc-crop-yield', tonnes + '-' + hectares, `A farm harvests ${format(tonnes)} metric tons of wheat from ${format(hectares)} hectares. What is its yield in metric tons per hectare?`,
        [unit('t/ha')(round(tonnes / hectares, 2)), unit('t/ha')(round(hectares / tonnes, 3)), unit('t/ha')(tonnes * hectares), unit('t/ha')(round(tonnes / hectares * 10, 2))],
        `Yield = ${format(tonnes)} t ÷ ${format(hectares)} ha = ${format(tonnes / hectares)} t/ha.`)),
    ...percentChange(u, 'calc-percent-change', [['A country’s annual cod catch', 'thousand metric tons'], ['Water withdrawn for agriculture', 'km³ per year'], ['The area of irrigated farmland', 'thousand hectares'], ['A region’s forest cover', 'thousand km²']],
      [[85, 51], [1200, 780], [64, 40], [420, 630], [9.5, 4.2], [3300, 2310], [250, 110], [18, 27], [720, 504], [5600, 3360], [140, 98], [46, 23]]),
    ...[[5000, 20, 0.9], [12000, 15, 0.95], [800, 30, 0.85], [2500, 40, 0.9], [10000, 10, 0.2], [6000, 25, 0.15], [3000, 50, 0.9], [15000, 12, 0.3], [1200, 35, 0.95], [4000, 18, 0.1], [9000, 22, 0.85], [2000, 60, 0.25]].map(([area, rain, coefficient]) => {
      const surface = coefficient >= 0.8 ? 'a parking lot' : 'a park with lawns and trees';
      const runoff = area * rain / 1000 * coefficient;
      return calc(u, 'calc-runoff', area + '-' + rain + '-' + coefficient, `A storm drops ${rain} mm of rain on ${surface} with an area of ${format(area)} m². Its runoff coefficient is ${coefficient}. Using runoff = area × rainfall (m) × coefficient, how much water runs off?`,
        [unit('m³')(round(runoff, 1)), unit('m³')(round(area * rain * coefficient, 1)), unit('m³')(round(area * rain / 1000, 1)), unit('m³')(round(area * rain / 1000 * (1 - coefficient), 1))],
        `${rain} mm = ${format(rain / 1000)} m, so ${format(area)} × ${format(rain / 1000)} × ${coefficient} = ${format(round(runoff, 1))} m³.`);
    }),
    ...[8.0, 4.8, 2.4, 6.4, 1.2, 3.2, 5.6, 0.8, 7.2, 4.0, 10.4, 2.0].map(footprint =>
      calc(u, 'calc-footprint', footprint, `The average ecological footprint in a country is ${footprint.toFixed(1)} global hectares per person, and Earth’s biocapacity is about 1.6 global hectares per person. How many Earths would be needed if everyone lived like the average person in that country?`,
        [unit('Earths')(round(footprint / 1.6, 2)), unit('Earths')(round(1.6 / footprint, 2)), unit('Earths')(round(footprint - 1.6, 2)), unit('Earths')(round(footprint * 1.6, 2))],
        `Earths needed = ${footprint.toFixed(1)} ÷ 1.6 = ${format(round(footprint / 1.6, 2))}.`)),
    ...[10000, 4800, 25000, 860, 1200000, 64000, 3600, 150000, 9000, 420, 72000, 30000].map(k =>
      calc(u, 'calc-msy', k, `A fish population follows logistic growth with a carrying capacity of ${format(k)} fish. Growth, and therefore maximum sustainable yield, is greatest when the population is at about half of carrying capacity. At what population size should managers aim to keep the stock?`,
        [unit('fish')(k / 2), unit('fish')(k), unit('fish')(k / 4), unit('fish')(k / 10)],
        `MSY occurs near K ÷ 2 = ${format(k)} ÷ 2 = ${format(k / 2)} fish.`)),
    ...[[120, 50, 15], [200, 30, 10], [90, 120, 20], [150, 80, 12], [60, 250, 25], [180, 45, 8], [110, 64, 30], [240, 20, 5], [75, 160, 18], [130, 90, 14], [95, 40, 22], [160, 75, 6]].map(([rate, hectares, lost]) => {
      const total = rate * hectares;
      return calc(u, 'calc-fertilizer-runoff', rate + '-' + hectares + '-' + lost, `A farmer applies ${rate} kg of nitrogen fertilizer per hectare to ${hectares} hectares. About ${lost}% of it washes into a nearby stream. How many kilograms of nitrogen reach the stream?`,
        [unit('kg')(round(total * lost / 100, 1)), unit('kg')(total), unit('kg')(round(total * (1 - lost / 100), 1)), unit('kg')(round(rate * lost / 100, 1))],
        `${rate} × ${hectares} = ${format(total)} kg applied; ${lost}% of that is ${format(round(total * lost / 100, 1))} kg.`);
    })
  ],
  6: u => [
    ...[[1000, 350], [500, 85], [2500, 950], [8000, 2640], [1200, 1080], [600, 108], [4000, 1600], [350, 322], [9000, 3150], [750, 165], [150, 27], [3200, 1056], [2000, 1900], [480, 96]].map(([input, output], index) => {
      const device = ['a coal power plant', 'an incandescent light bulb', 'a natural gas plant', 'a car engine', 'a home furnace', 'a solar panel', 'a wind turbine', 'an electric motor'][index % 8];
      return calc(u, 'calc-efficiency', input + '-' + output, `${device[0].toUpperCase() + device.slice(1)} takes in ${format(input)} J of energy and delivers ${format(output)} J of useful energy. What is its efficiency? Round to one decimal place.`,
        [pct(output / input * 100), pct((input - output) / input * 100), pct(input / output * 10), pct(output / input)],
        `Efficiency = useful output ÷ input × 100 = ${format(output)} ÷ ${format(input)} × 100 ≈ ${pct(output / input * 100)}.`);
    }),
    ...[[60, 5, 365], [1500, 2, 30], [100, 8, 30], [2000, 1, 365], [9, 6, 365], [400, 24, 30], [1200, 0.5, 365], [75, 4, 90], [3500, 3, 30], [15, 10, 365], [800, 1.5, 30], [250, 12, 30]].map(([watts, hours, days]) => {
      const kwh = watts * hours * days / 1000;
      return calc(u, 'calc-energy-use', watts + '-' + hours + '-' + days, `An appliance rated at ${format(watts)} W runs ${hours} hours per day for ${days} days. How much electrical energy does it use?`,
        [unit('kWh')(round(kwh, 2)), unit('kWh')(watts * hours * days), unit('kWh')(round(watts * hours / 1000, 3)), unit('kWh')(round(watts * hours * days / 100, 2))],
        `Energy = ${format(watts)} W × ${hours} h/day × ${days} days ÷ 1,000 = ${format(kwh)} kWh.`);
    }),
    ...[[60, 9, 10, 5], [100, 15, 8, 4], [75, 11, 12, 6], [40, 6, 20, 3], [60, 10, 15, 4], [100, 14, 6, 8], [75, 12, 25, 2], [150, 23, 4, 5], [60, 8, 30, 3], [40, 5, 16, 6], [100, 16, 10, 10], [75, 10, 8, 4]].map(([oldWatts, newWatts, bulbs, hours]) => {
      const saved = (oldWatts - newWatts) * bulbs * hours * 365 / 1000;
      return calc(u, 'calc-bulb-savings', oldWatts + '-' + newWatts + '-' + bulbs + '-' + hours, `A school replaces ${bulbs} incandescent bulbs rated at ${oldWatts} W with LED bulbs rated at ${newWatts} W. The lights are on ${hours} hours per day, 365 days per year. How much electricity does the school save per year?`,
        [unit('kWh')(round(saved, 1)), unit('kWh')(round(oldWatts * bulbs * hours * 365 / 1000, 1)), unit('kWh')(round((oldWatts - newWatts) * bulbs * hours / 1000, 2)), unit('kWh')(round((oldWatts - newWatts) * hours * 365 / 1000, 1))],
        `(${oldWatts} − ${newWatts}) W × ${bulbs} bulbs × ${hours} h × 365 days ÷ 1,000 = ${format(round(saved, 1))} kWh.`);
    }),
    ...[[850, 0.14], [1200, 0.12], [640, 0.18], [9500, 0.11], [320, 0.25], [2400, 0.15], [780, 0.2], [5600, 0.09], [150, 0.3], [3300, 0.13], [410, 0.16], [7200, 0.1]].map(([kwh, price]) =>
      calc(u, 'calc-electric-cost', kwh + '-' + price, `A household uses ${format(kwh)} kWh of electricity in a month. Electricity costs $${price.toFixed(2)} per kWh. What is the monthly cost?`,
        [money(kwh * price), money(kwh / price), money(kwh * price / 10), money(kwh * price * 100)],
        `Cost = ${format(kwh)} kWh × $${price.toFixed(2)} = ${money(kwh * price)}.`)),
    ...halfLife(u, 'calc-half-life', 'A sample of radioactive waste', 'g', [[800, 30, 90, 'years'], [1000, 5730, 17190, 'years'], [64, 8, 32, 'days'], [500, 12, 36, 'years'], [2400, 2, 10, 'hours'], [120, 28, 84, 'years'], [96, 6, 24, 'hours'], [1600, 24000, 72000, 'years'], [50, 1600, 4800, 'years'], [360, 4, 12, 'days'], [2000, 30, 120, 'years'], [256, 5, 25, 'days']]),
    ...[[12000, 1500], [18000, 1200], [9600, 800], [25000, 2500], [15000, 1875], [7200, 900], [21000, 1400], [30000, 2000], [4500, 750], [16800, 1400], [11000, 1100], [27000, 1800]].map(([cost, savings]) =>
      calc(u, 'calc-payback', cost + '-' + savings, `A homeowner installs solar panels for $${format(cost)}. The panels reduce electricity bills by $${format(savings)} per year. How many years will it take for the savings to pay back the cost?`,
        [unit('years')(round(cost / savings, 1)), unit('years')(round(cost / (12 * savings), 2)), unit('years')(round(2 * cost / savings, 1)), unit('years')(round((cost - savings) / savings, 1))],
        `Payback period = $${format(cost)} ÷ $${format(savings)} per year = ${format(round(cost / savings, 1))} years.`)),
    ...[[500, 90], [1000, 92], [150, 35], [2, 30], [50, 25], [1200, 85], [300, 45], [3, 40], [800, 60], [100, 20], [600, 50], [250, 95]].map(([megawatts, factor]) => {
      const mwh = Math.round(megawatts * 8760 * factor / 100);
      return calc(u, 'calc-capacity-factor', megawatts + '-' + factor, `A power plant has a capacity of ${format(megawatts)} MW and a capacity factor of ${factor}%. A year has 8,760 hours. How much electricity does it generate in a year?`,
        [unit('MWh')(mwh), unit('MWh')(megawatts * 8760), unit('MWh')(Math.round(megawatts * 24 * factor / 100)), unit('MWh')(Math.round(mwh / 1000))],
        `${format(megawatts)} MW × 8,760 h × ${factor / 100} = ${format(mwh)} MWh.`);
    }),
    ...[[40, 25, 10, 8, 10, 7], [120, 80, 30, 45, 20, 5], [15, 30, 5, 20, 18, 12], [200, 150, 60, 25, 40, 25], [5, 10, 0, 60, 15, 10], [80, 40, 20, 10, 30, 20], [35, 45, 25, 15, 12, 8], [10, 20, 15, 40, 10, 5], [60, 90, 0, 30, 15, 5], [25, 15, 35, 5, 12, 8], [150, 60, 40, 20, 20, 10], [8, 12, 4, 50, 16, 10]].map(([coal, gas, nuclear, hydro, wind, solar]) => {
      const total = coal + gas + nuclear + hydro + wind + solar;
      return calc(u, 'calc-renewable-share', [coal, gas, nuclear, hydro, wind, solar].join('-'), `A country generates electricity from coal (${coal} TWh), natural gas (${gas} TWh), nuclear (${nuclear} TWh), hydroelectric (${hydro} TWh), wind (${wind} TWh), and solar (${solar} TWh). What percentage comes from renewable sources? Round to one decimal place.`,
        [pct((hydro + wind + solar) / total * 100), pct((coal + gas + nuclear) / total * 100), pct((wind + solar) / total * 100), pct((hydro + wind + solar + nuclear) / total * 100)],
        `Renewables (hydro + wind + solar) = ${hydro + wind + solar} TWh of ${total} TWh ≈ ${pct((hydro + wind + solar) / total * 100)}. Nuclear is not renewable.`);
    }),
    ...[[350, 35], [900, 45], [120, 30], [2400, 40], [600, 60], [1500, 33], [80, 20], [4500, 90], [270, 27], [1000, 25], [720, 80], [1350, 45]].map(([output, efficiency]) =>
      calc(u, 'calc-fuel-input', output + '-' + efficiency, `A power plant must deliver ${format(output)} MJ of electricity. It is ${efficiency}% efficient. How much energy must be supplied in the form of fuel?`,
        [unit('MJ')(round(output / (efficiency / 100), 1)), unit('MJ')(round(output * efficiency / 100, 1)), unit('MJ')(round(output / efficiency, 2)), unit('MJ')(round(output * (1 + efficiency / 100), 1))],
        `Input = output ÷ efficiency = ${format(output)} ÷ ${efficiency / 100} = ${format(round(output / (efficiency / 100), 1))} MJ.`))
  ],
  7: u => [
    ...percentChange(u, 'calc-percent-change', [['The average PM2.5 concentration in a city', 'µg/m³'], ['The average NO₂ concentration near a highway', 'ppb'], ['The average SO₂ concentration downwind of a power plant', 'ppb'], ['The peak ozone concentration in a valley', 'ppb']],
      [[35, 21], [48, 60], [12.5, 8], [80, 52], [90, 70], [150, 96], [22, 33], [9, 6.3], [64, 40], [110, 88], [27, 40.5], [5.2, 3.9], [300, 210], [18, 12.6]]),
    ...[[4500, 150], [12000, 400], [860, 43], [25000, 1250], [3600, 90], [700, 35], [18000, 240], [950, 19], [6400, 320], [2400, 48], [15000, 600], [1300, 65]].map(([emissions, area]) =>
      calc(u, 'calc-pollution-density', emissions + '-' + area, `A city covering ${format(area)} km² emits ${format(emissions)} metric tons of nitrogen oxides per year. What is its emission density?`,
        [unit('t/km²')(round(emissions / area, 2)), unit('t/km²')(round(area / emissions, 3)), unit('t/km²')(emissions * area), unit('t/km²')(round(emissions / area / 1000, 4))],
        `Density = ${format(emissions)} t ÷ ${format(area)} km² = ${format(emissions / area)} t/km².`)),
    ...[[42000, 1200000], [9600, 320000], [150000, 3000000], [5500, 110000], [78000, 1950000], [3300, 66000], [21000, 700000], [64000, 800000], [1800, 90000], [36000, 450000], [12500, 250000], [99000, 2200000]].map(([emissions, people]) =>
      calc(u, 'calc-per-capita', emissions + '-' + people, `A metropolitan area of ${format(people)} people emits ${format(emissions)} metric tons of particulate matter per year. What is its per capita emission in kilograms per person?`,
        [unit('kg per person')(round(emissions * 1000 / people, 2)), unit('kg per person')(round(emissions / people, 4)), unit('kg per person')(round(people / emissions, 2)), unit('kg per person')(round(emissions * 100 / people, 2))],
        `${format(emissions)} t × 1,000 kg/t ÷ ${format(people)} people = ${format(emissions * 1000 / people)} kg per person.`)),
    ...[[10000, 12000, 404], [50000, 10000, 350], [2500, 15000, 450], [120000, 11000, 300], [8000, 9000, 500], [30000, 13500, 380], [500, 20000, 420], [75000, 12500, 320], [16000, 8000, 410], [4000, 14000, 390], [200000, 10500, 280], [1200, 18000, 460]].map(([cars, miles, grams]) => {
      const tonnes = Math.round(cars * miles * grams / 1e6);
      return calc(u, 'calc-vehicle-emissions', cars + '-' + miles + '-' + grams, `A city has ${format(cars)} cars. Each is driven ${format(miles)} miles per year and emits ${grams} grams of CO₂ per mile. How many metric tons of CO₂ do the cars emit per year? (1 metric ton = 1,000,000 g)`,
        [unit('metric tons')(tonnes), unit('metric tons')(tonnes * 1000), unit('metric tons')(Math.round(tonnes / 1000)), unit('metric tons')(round(cars * grams / 1e6, 2))],
        `${format(cars)} × ${format(miles)} × ${grams} g = ${format(cars * miles * grams)} g ≈ ${format(tonnes)} metric tons.`);
    }),
    ...[[12000, 95], [8500, 90], [30000, 98], [4200, 85], [60000, 92], [1500, 80], [22000, 96], [9600, 75], [45000, 99], [3300, 90], [18000, 88], [7000, 94]].map(([tons, removal]) =>
      calc(u, 'calc-scrubber', tons + '-' + removal, `A power plant would release ${format(tons)} tons of SO₂ per year without controls. A scrubber removes ${removal}% of the SO₂. How many tons are still released?`,
        [unit('tons')(round(tons * (1 - removal / 100), 1)), unit('tons')(round(tons * removal / 100, 1)), unit('tons')(tons - removal), unit('tons')(round(tons * (1 - removal / 1000), 1))],
        `${format(tons)} × (1 − ${removal / 100}) = ${format(round(tons * (1 - removal / 100), 1))} tons.`)),
    ...[0.04, 0.0415, 0.03, 0.042, 0.93, 0.0002, 0.00018, 0.0005, 0.1, 0.035, 0.0003, 1.2].map((percent, index) => {
      const ppm = round(percent * 10000, 2);
      if (index % 2 === 0) return calc(u, 'calc-ppm', 'to-ppm-' + percent, `An air sample contains ${percent}% of a gas by volume. What is this concentration in parts per million (ppm)?`,
        [unit('ppm')(ppm), unit('ppm')(round(percent * 1000, 3)), unit('ppm')(round(percent * 100, 4)), unit('ppm')(round(percent * 1e6, 2))],
        `1% = 10,000 ppm, so ${percent}% × 10,000 = ${format(ppm)} ppm.`);
      return calc(u, 'calc-ppm', 'to-percent-' + percent, `An air sample contains ${format(ppm)} ppm of a gas. What is this concentration as a percentage by volume?`,
        [percent + '%', round(ppm / 1000, 4) + '%', round(ppm / 100, 4) + '%', round(ppm * 10000, 2) + '%'],
        `Divide by 10,000: ${format(ppm)} ppm ÷ 10,000 = ${percent}%.`);
    }),
    ...[[4.6, 5.6], [3.6, 5.6], [4, 6], [3, 5], [4.2, 6.2], [5, 7], [3.5, 5.5], [4.3, 5.3], [2.8, 5.8], [4.1, 6.1], [3.9, 5.9], [4.4, 7.4]].map(([acid, normal]) => {
      const difference = Math.round(normal - acid);
      return calc(u, 'calc-acid-rain', acid + '-' + normal, `Rain falling downwind of a coal plant has a pH of ${acid}, while unpolluted rain in the area has a pH of ${normal}. How many times more acidic (higher in H⁺ concentration) is the polluted rain?`,
        [times(10 ** difference), times(difference), times(2 * difference), times(10 ** (difference + 1))],
        `pH is logarithmic: ${difference} pH unit${difference === 1 ? '' : 's'} = 10^${difference} = ${format(10 ** difference)} times more H⁺.`);
    }),
    ...[[60, 80], [50, 70], [70, 100], [40, 60], [85, 105], [30, 60], [65, 85], [90, 110], [55, 75], [45, 75], [80, 110], [100, 120]].map(([quiet, loud]) => {
      const steps = (loud - quiet) / 10;
      return calc(u, 'calc-decibels', quiet + '-' + loud, `Every 10 dB increase means 10 times more sound intensity. A construction site measures ${loud} dB, while a nearby park measures ${quiet} dB. How many times more intense is the sound at the construction site?`,
        [times(10 ** steps), times(loud - quiet), times(steps), times(2 ** steps)],
        `${loud - quiet} dB is ${steps} steps of 10 dB, so 10^${steps} = ${format(10 ** steps)} times more intense.`);
    })
  ],
  8: u => [
    ...[[50, 0.25], [200, 70], [5, 2.5], [1200, 0.3], [15, 60], [300, 4], [0.5, 80], [2500, 0.02], [80, 12], [640, 0.75], [25, 45], [1000, 1.5], [10, 0.4], [350, 8]].map(([ld50, mass]) => {
      const dose = ld50 * mass;
      return calc(u, 'calc-ld50', ld50 + '-' + mass, `A pesticide has an LD50 of ${ld50} mg/kg. What dose would be expected to kill half of a test population of animals that each have a mass of ${mass} kg?`,
        [unit('mg')(round(dose, 3)), unit('mg')(round(ld50 / mass, 3)), unit('mg')(round(dose / 2, 3)), unit('mg')(round(dose * 10, 3))],
        `Dose = LD50 × body mass = ${ld50} mg/kg × ${mass} kg = ${format(round(dose, 3))} mg.`);
    }),
    ...[[0.02, 10, 3], [0.5, 5, 2], [0.003, 10, 4], [0.04, 8, 3], [1, 4, 3], [0.01, 12, 2], [0.2, 6, 3], [0.005, 10, 3], [0.08, 3, 4], [0.15, 10, 2], [0.6, 5, 3], [0.002, 20, 3]].map(([start, factor, levels]) => {
      const show = unit('ppm');
      return calc(u, 'calc-biomagnification', start + '-' + factor + '-' + levels, `A persistent pesticide is found at ${start} ppm in phytoplankton. Its concentration increases ${factor}-fold at each higher trophic level. What concentration is expected in a predator ${levels} trophic levels above the phytoplankton?`,
        [show(round(start * factor ** levels, 3)), show(round(start * factor * levels, 3)), show(round(start * factor ** (levels - 1), 3)), show(round(start * factor ** (levels + 1), 3))],
        `${start} × ${factor}^${levels} = ${format(round(start * factor ** levels, 3))} ppm.`);
    }),
    ...halfLife(u, 'calc-pesticide-decay', 'A pesticide in soil', 'mg/kg', [[40, 14, 42, 'days'], [120, 30, 90, 'days'], [8, 5, 20, 'days'], [250, 60, 180, 'days'], [64, 7, 28, 'days'], [18, 10, 30, 'days'], [500, 45, 135, 'days'], [36, 3, 9, 'days'], [96, 20, 80, 'days'], [200, 12, 36, 'days'], [72, 9, 27, 'days'], [160, 25, 100, 'days']]),
    ...[[2.2, 50000], [1.5, 120000], [0.8, 300000], [2.0, 25000], [1.2, 80000], [2.5, 10000], [0.6, 1000000], [1.8, 45000], [2.4, 6000], [1.1, 250000], [0.9, 40000], [3.0, 15000]].map(([kg, people]) => {
      const tonnes = Math.round(kg * people * 365 / 1000);
      return calc(u, 'calc-waste', kg + '-' + people, `Each of a town’s ${format(people)} residents produces an average of ${kg} kg of solid waste per day. How many metric tons of waste does the town produce per year? (1 metric ton = 1,000 kg)`,
        [unit('metric tons')(tonnes), unit('metric tons')(Math.round(kg * people * 365)), unit('metric tons')(round(kg * people / 1000, 1)), unit('metric tons')(Math.round(kg * people * 52 / 1000))],
        `${kg} kg × ${format(people)} people × 365 days ÷ 1,000 ≈ ${format(tonnes)} metric tons.`);
    }),
    ...[[68, 25, 292], [12, 4, 80], [150, 60, 600], [3.5, 1.5, 20], [45, 15, 240], [90, 30, 400], [22, 8, 150], [310, 90, 1000], [7, 3, 50], [56, 24, 320], [130, 20, 500], [18, 6, 96]].map(([recycled, composted, total]) => {
      const rate = (recycled + composted) / total * 100;
      return calc(u, 'calc-diversion-rate', recycled + '-' + composted + '-' + total, `A city generates ${format(total)} thousand tons of municipal solid waste. Of this, ${recycled} thousand tons are recycled and ${composted} thousand tons are composted. What percentage of the waste is kept out of landfills and incinerators? Round to one decimal place.`,
        [pct(rate), pct(recycled / total * 100), pct(100 - rate), pct((recycled + composted) / (total - recycled - composted) * 100)],
        `(${recycled} + ${composted}) ÷ ${format(total)} × 100 ≈ ${pct(rate)}.`);
    }),
    ...[[2000000, 80000], [500000, 25000], [1200000, 96000], [3600000, 120000], [750000, 50000], [900000, 36000], [4800000, 160000], [250000, 12500], [1500000, 75000], [640000, 32000], [2400000, 150000], [360000, 24000]].map(([capacity, yearly]) =>
      calc(u, 'calc-landfill-life', capacity + '-' + yearly, `A landfill can hold ${format(capacity)} m³ of waste. The community adds ${format(yearly)} m³ of waste per year. How many years will the landfill last?`,
        [unit('years')(round(capacity / yearly, 1)), unit('years')(round(yearly / capacity, 3)), unit('years')(round(capacity / (yearly * 12), 2)), unit('years')(round(capacity / yearly / 2, 1))],
        `${format(capacity)} ÷ ${format(yearly)} = ${format(round(capacity / yearly, 1))} years.`)),
    ...[[9.2, 3.1], [8.5, 4.2], [10.1, 2.6], [7.8, 5.4], [9.6, 1.9], [8.0, 6.0], [11.2, 4.8], [7.2, 3.0], [9.0, 4.5], [8.8, 2.2], [10.4, 7.8], [6.9, 2.1]].map(([upstream, downstream]) =>
      calc(u, 'calc-dissolved-oxygen', upstream + '-' + downstream, `Dissolved oxygen is ${upstream} mg/L upstream of a sewage outfall and ${downstream} mg/L downstream. By what percentage did dissolved oxygen decrease? Round to one decimal place.`,
        [pct((upstream - downstream) / upstream * 100), pct(downstream / upstream * 100), pct((upstream - downstream) / downstream * 100), pct(upstream - downstream)],
        `(${upstream} − ${downstream}) ÷ ${upstream} × 100 ≈ ${pct((upstream - downstream) / upstream * 100)}.`)),
    ...[[0.5, 20000], [2.4, 5000], [0.08, 150000], [12, 800], [0.3, 40000], [1.6, 2500], [0.05, 600000], [7.5, 1200], [0.2, 90000], [3, 15000], [0.012, 1000000], [45, 400]].map(([concentration, liters]) =>
      calc(u, 'calc-pollutant-mass', concentration + '-' + liters, `A pond holds ${format(liters)} L of water contaminated with nitrate at ${concentration} mg/L. What is the total mass of nitrate in the pond, in grams?`,
        [unit('g')(round(concentration * liters / 1000, 2)), unit('g')(round(concentration * liters, 2)), unit('g')(round(concentration * liters / 10000, 3)), unit('g')(round(concentration * liters / 100, 2))],
        `${concentration} mg/L × ${format(liters)} L = ${format(round(concentration * liters, 2))} mg = ${format(round(concentration * liters / 1000, 2))} g.`))
  ],
  9: u => [
    ...[[1960, 317, 2020, 413], [1980, 339, 2000, 369], [2000, 369, 2020, 413], [1990, 354, 2010, 389], [1970, 326, 1990, 354], [2005, 379, 2015, 400], [1965, 320, 2015, 400], [1985, 346, 2005, 379], [2010, 389, 2022, 418], [1975, 331, 1995, 361], [1995, 361, 2015, 400], [1960, 317, 1990, 354]].map(([startYear, startPpm, endYear, endPpm]) => {
      const years = endYear - startYear;
      const change = endPpm - startPpm;
      return calc(u, 'calc-co2-rate', startYear + '-' + endYear, `Atmospheric CO₂ was ${startPpm} ppm in ${startYear} and ${endPpm} ppm in ${endYear}. What was the average rate of increase?`,
        [unit('ppm per year')(round(change / years, 2)), unit('ppm per year')(round(years / change, 2)), unit('ppm per year')(change), unit('ppm per year')(round(change / years * 10, 2))],
        `(${endPpm} − ${startPpm}) ÷ (${endYear} − ${startYear}) = ${change} ÷ ${years} = ${format(round(change / years, 2))} ppm per year.`);
    }),
    ...[[420, 2.4, 500], [415, 2, 450], [410, 2.5, 560], [400, 2, 480], [425, 3, 550], [418, 2.2, 450], [412, 2.4, 460], [405, 1.5, 450], [430, 2.5, 500], [420, 2, 600], [408, 2.4, 480], [422, 2.6, 500]].map(([now, rate, target]) =>
      calc(u, 'calc-co2-projection', now + '-' + rate + '-' + target, `Atmospheric CO₂ is ${now} ppm and rising by ${rate} ppm per year. If this rate stays constant, how many years will it take to reach ${target} ppm?`,
        [unit('years')(round((target - now) / rate, 1)), unit('years')(round(target / rate, 1)), unit('years')(round((target - now) * rate, 1)), unit('years')(round((target - now) / (rate * 10), 2))],
        `(${target} − ${now}) ÷ ${rate} = ${format(round((target - now) / rate, 1))} years.`)),
    ...[50, 120, 8, 2500, 640, 15, 1.5, 900, 36, 4200, 75, 300].map((tonnes, index) => {
      const [gas, gwp] = index % 2 === 0 ? ['methane', 28] : ['nitrous oxide', 265];
      const show = unit('metric tons CO₂e');
      return calc(u, 'calc-co2-equivalent', gas + '-' + tonnes, `A farm releases ${format(tonnes)} metric tons of ${gas} per year. ${gas[0].toUpperCase() + gas.slice(1)} has a 100-year global warming potential of ${gwp}. What are these emissions in CO₂ equivalents?`,
        [show(round(tonnes * gwp, 1)), show(tonnes), show(round(tonnes / gwp, 3)), show(round(tonnes * gwp * 10, 1))],
        `${format(tonnes)} t × ${gwp} = ${format(round(tonnes * gwp, 1))} t CO₂e.`);
    }),
    ...[0.1, 0.2, 0.3, 0.4, 0.5, 0.15, 0.25, 0.35, 0.05, 0.12].map(drop => {
      const start = 8.2;
      const increase = (10 ** drop - 1) * 100;
      return calc(u, 'calc-ocean-acidity', drop, `Surface ocean pH falls from ${start} to ${round(start - drop, 2)}. By about what percentage does the hydrogen ion concentration increase? Round to the nearest whole percent.`,
        [pct(increase, 0), pct(drop * 100, 0), pct((1 - 10 ** -drop) * 100, 0), pct(10 ** drop * 100, 0)],
        `H⁺ increases by a factor of 10^${drop} ≈ ${format(round(10 ** drop, 2))}, which is an increase of about ${pct(increase, 0)}.`);
    }),
    ...[[3.3, 50], [3.6, 80], [4.5, 100], [2.8, 30], [5, 76], [3.4, 25], [6, 50], [4.2, 40], [3.7, 60], [8, 75], [2.5, 120], [10, 27]].map(([rate, years]) =>
      calc(u, 'calc-sea-level', rate + '-' + years, `Global sea level is rising by ${rate} mm per year. At this rate, how much will sea level rise over ${years} years, in centimeters?`,
        [unit('cm')(round(rate * years / 10, 2)), unit('cm')(round(rate * years, 2)), unit('cm')(round(rate * years / 100, 3)), unit('cm')(round(rate / years, 3))],
        `${rate} mm/yr × ${years} yr = ${format(round(rate * years, 2))} mm = ${format(round(rate * years / 10, 2))} cm.`)),
    ...percentChange(u, 'calc-percent-change', [['September Arctic sea ice extent', 'million km²'], ['The number of breeding pairs of a seabird', 'pairs'], ['The area of a mountain glacier', 'km²']],
      [[7.5, 4.6], [320, 180], [48, 30], [6.9, 3.7], [1500, 1125], [85, 51], [7.0, 4.3], [640, 256], [24, 8], [7.8, 4.9], [42, 63], [150, 96]]),
    ...[[0.0, 0.9, 50], [0.2, 0.8, 40], [0.3, 1.1, 30], [0.2, 1.1, 45], [0.4, 0.8, 20], [0.1, 1.3, 60], [0.4, 0.9, 25], [0.0, 1.1, 55], [0.5, 0.9, 16], [0.1, 1.0, 90], [0.6, 1.0, 10], [0.3, 1.1, 32]].map(([from, to, years]) => {
      const total = round(to - from, 2);
      return calc(u, 'calc-warming-rate', from + '-' + to + '-' + years, `The global temperature anomaly rose from ${from.toFixed(1)} °C to ${to.toFixed(1)} °C over ${years} years. What was the average rate of warming per decade?`,
        [unit('°C per decade')(round(total / years * 10, 3)), unit('°C per decade')(round(total / years, 4)), unit('°C per decade')(total), unit('°C per decade')(round(total / years * 100, 2))],
        `${total} °C ÷ ${years} years × 10 = ${format(round(total / years * 10, 3))} °C per decade.`);
    }),
    ...[[5, 3, 12], [20, 4, 16], [1.5, 2, 10], [12, 5, 15], [0.8, 1, 6], [40, 6, 18], [3, 2.5, 10], [60, 7, 21], [2, 1.5, 9], [25, 3, 15], [0.5, 2, 12], [100, 8, 24]].map(([area, doubling, years]) => {
      const doublings = years / doubling;
      const show = unit('km²');
      return calc(u, 'calc-invasive-spread', area + '-' + doubling + '-' + years, `An invasive plant covers ${format(area)} km², and the area it covers doubles every ${doubling} years. If nothing stops it, how much area will it cover in ${years} years?`,
        [show(round(area * 2 ** doublings, 2)), show(round(area * doublings, 2)), show(round(area * 2 ** (doublings - 1), 2)), show(round(area * 2 * years, 2))],
        `${years} ÷ ${doubling} = ${format(doublings)} doublings, so ${format(area)} × 2^${format(doublings)} = ${format(round(area * 2 ** doublings, 2))} km².`);
    }),
    ...[[12000, 25], [8000, 40], [15000, 20], [10000, 50], [20000, 32], [6000, 24], [18000, 36], [9000, 18], [14000, 28], [5000, 45], [11000, 22], [16000, 30]].map(([miles, mpg]) => {
      const kg = Math.round(miles / mpg * 8.9);
      return calc(u, 'calc-car-footprint', miles + '-' + mpg, `A driver travels ${format(miles)} miles per year in a car that gets ${mpg} miles per gallon. Burning one gallon of gasoline releases about 8.9 kg of CO₂. How much CO₂ does the car emit per year?`,
        [unit('kg')(kg), unit('kg')(Math.round(miles / mpg)), unit('kg')(Math.round(miles * 8.9)), unit('kg')(round(miles / mpg * 8.9 / 1000, 2))],
        `${format(miles)} ÷ ${mpg} = ${format(round(miles / mpg, 1))} gallons × 8.9 kg ≈ ${format(kg)} kg CO₂.`);
    })
  ]
};

function writtenQuestion(unitNumber, entry, index) {
  const id = 'env-' + unitNumber + '-written-' + index;
  if (!Array.isArray(entry)) return { ...entry, id, answer: 0, family: entry.family };
  const [family, prompt, correct, a, b, c, explanation] = entry;
  // Concept questions are split into three groups so sets mix in more of them, as on the AP exam.
  const mixFamily = family === 'concept' ? 'concept-' + (index % 3) : family;
  return { id, family: mixFamily, prompt, choices: [correct, a, b, c], answer: 0, explanation };
}

const cache = new Map();

export function environmentalQuestions(unitNumber) {
  if (!cache.has(unitNumber)) {
    const items = (written[unitNumber - 1] ?? []).map((entry, index) => writtenQuestion(unitNumber, entry, index));
    const generated = (generators[unitNumber]?.(unitNumber) ?? []).filter(Boolean);
    const unique = new Map();
    for (const item of [...items, ...generated]) if (!unique.has(item.id)) unique.set(item.id, item);
    cache.set(unitNumber, [...unique.values()]);
  }
  return cache.get(unitNumber);
}
