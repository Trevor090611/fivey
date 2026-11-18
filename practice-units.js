import { variantAt } from './progress-variants.js?v=4';

export const units = {
  "biology": [
    "Chemistry of Life",
    "Cells",
    "Cellular Energetics",
    "Cell Communication and Cell Cycle",
    "Heredity",
    "Gene Expression and Regulation",
    "Natural Selection",
    "Ecology"
  ],
  "chemistry": [
    "Atomic Structure and Properties",
    "Compound Structure and Properties",
    "Properties of Substances and Mixtures",
    "Chemical Reactions",
    "Kinetics",
    "Thermochemistry",
    "Equilibrium",
    "Acids and Bases",
    "Thermodynamics and Electrochemistry"
  ],
  "physics-1": [
    "Kinematics",
    "Force and Translational Dynamics",
    "Work, Energy, and Power",
    "Linear Momentum",
    "Torque and Rotational Dynamics",
    "Energy and Momentum of Rotating Systems",
    "Oscillations",
    "Fluids"
  ],
  "calculus-ab": [
    "Limits and Continuity",
    "Differentiation: Definition and Fundamental Properties",
    "Differentiation: Composite, Implicit, and Inverse Functions",
    "Contextual Applications of Differentiation",
    "Analytical Applications of Differentiation",
    "Integration and Accumulation of Change",
    "Differential Equations",
    "Applications of Integration"
  ],
  "psychology": [
    "Biological Bases of Behavior",
    "Cognition",
    "Development and Learning",
    "Social Psychology and Personality",
    "Mental and Physical Health"
  ],
  "macroeconomics": [
    "Basic Economic Concepts",
    "Economic Indicators and the Business Cycle",
    "National Income and Price Determination",
    "Financial Sector",
    "Long-Run Consequences of Stabilization Policies",
    "Open Economy—International Trade and Finance"
  ],
  "environmental-science": [
    "The Living World: Ecosystems",
    "The Living World: Biodiversity",
    "Populations",
    "Earth Systems and Resources",
    "Land and Water Use",
    "Energy Resources and Consumption",
    "Atmospheric Pollution",
    "Aquatic and Terrestrial Pollution",
    "Global Change"
  ]
};

// Indices in progress-questions.json?v=2. General research-method questions are omitted.
const bankGroups = {"biology":[[],[0,2,25,26],[1,3,4,22,27],[5,6,7],[8,9,10],[11,12,13],[14,15,16,17,24,28],[18,19,20,21,29]],"chemistry":[[1,10,15,20,25],[2],[0,3,9,11,16,21,26],[],[4,12,17,22,27],[13,18,23,28],[5,14,19,24,29],[6],[7,8]],"physics-1":[[10,15,20,25,0],[1,2],[],[11,12,16,17,21,22,26,27],[4,8,9,13,18,23,28],[3],[5,14,19,24,29],[6,7]],"calculus-ab":[[0,10,15,20,25],[],[11,16,21,26],[],[1,2,3,14,19,24,29],[5,6],[8,13,18,23,28],[4,7,9,12,17,22,27]],"psychology":[[4,5,7,8],[6,9,10,11,12,13,14],[15,16,17,18,19,20],[21,22,23,24,25,26,27],[28,29]],"macroeconomics":[[],[0,1,11,12,13,16,17,18,21,22,23,26,27,28],[2,3,4,6,10,15,20,25],[5,14,19,24,29],[7,9],[8]],"environmental-science":[[0,1,2],[3,4,5],[6,7,8],[9,10,11],[12,13,14,15],[16,17,18],[19,20,21],[22,23,24,25],[26,27,28,29]]};
const variantUnits = {"biology":[7,3,8],"chemistry":[8,5,6],"physics-1":[1,4,5],"calculus-ab":[3,8,7],"psychology":[0,3,0],"macroeconomics":[3,2,2],"environmental-science":[1,0,3]};

function numeric(prompt, value, explanation) {
  const choices = [value, value + Math.abs(value) + 1, value / 2 - 1, value - Math.abs(value) - 2];
  return { prompt, choices: choices.map(x => String(Number(x.toFixed(4)))), answer: 0, explanation };
}

const numericUnits = {
  biology: [
    null, // Chemistry of Life uses the original questions below.
    (a,b) => numeric(`A cubic cell model has edges of ${a} µm. A second model has edges ${b} times as long. What is the first model’s surface-area-to-volume ratio divided by the second’s?`,b,'A cube has a surface-area-to-volume ratio of 6 divided by its edge length.'),
    (a,b) => numeric(`At saturating substrate, ${a} identical enzymes produce ${a*b} product molecules per second together. What is the turnover rate per enzyme in molecules per second?`,b,'At saturation, divide the total production rate by the number of enzymes.'),
    (a,b) => numeric(`In an asynchronously dividing cell culture, ${a} of ${a*b} observed cells are in mitosis. What percentage is in mitosis? Round to four decimal places if needed.`,100/b,'Divide the number of cells in mitosis by the total, then multiply by 100.'),
    (a,b) => numeric(`Two independently assorting genes show complete dominance. A plant heterozygous at both loci is crossed with a plant recessive at both loci. In ${4*a*b} offspring, how many are expected to have both recessive phenotypes?`,a*b,'Each recessive phenotype has probability 1/2. Independent assortment gives a joint probability of 1/4.'),
    (a,b) => numeric(`A mature mRNA has a coding region of ${3*(a+b+1)} nucleotides from its start codon through its stop codon. How many amino acids are in the initial translation product?`,a+b,'There are three nucleotides per codon, and the stop codon contributes no amino acid.'),
    (a,b) => numeric(`In a diploid population, ${a} individuals have genotype AA and ${b} individuals have genotype Aa. How many copies of allele A are present in these individuals?`,2*a+b,'Each AA individual carries two copies and each Aa individual carries one.'),
    (a,b) => numeric(`A primary producer trophic level stores ${a*b*100} kJ of energy. The next level stores ${a*10} kJ. What is the energy transfer efficiency as a percentage? Round to four decimal places if needed.`,10/b,'Divide the energy stored at the higher trophic level by the starting energy and multiply by 100.')
  ],
  chemistry: [
    (a,b) => numeric(`A sample contains ${a} mol of CO₂ and ${b} mol of O₂. How many moles of oxygen atoms are present?`,2*(a+b),'Each molecule of either compound contributes two oxygen atoms.'),
    (a,b) => numeric(`A sample contains ${a} independent CH₄ molecules and ${b} independent NH₃ molecules. What is the total number of single covalent bonds represented in their Lewis structures?`,4*a+3*b,'Each methane has four C–H bonds and each ammonia has three N–H bonds.'),
    (a,b) => numeric(`A solution contains ${a*b} mmol of a dissolved solute in ${b} L. What is its concentration in mmol/L?`,a,'Molar concentration is amount divided by volume.'),
    (a,b) => numeric(`When excess oxygen reacts completely with ${a*b} mol of H₂ according to 2 H₂ + O₂ → 2 H₂O, how many moles of O₂ are consumed?`,a*b/2,'The balanced equation requires one mole of oxygen for every two moles of hydrogen.'),
    (a,b) => numeric(`For rate = k[A]²[B], [A] is multiplied by ${a} and [B] by ${b}. By what factor does the rate increase?`,a*a*b,'The rate scales as the square of [A] times the first power of [B].'),
    (a,b) => numeric(`How much heat in joules is needed to raise ${a*10} g of a substance with specific heat capacity 2 J/(g·°C) by ${b} °C?`,20*a*b,'Use q = mcΔT.'),
    (a,b) => numeric(`For A(g) ⇌ B(g), the equilibrium concentration of A is ${a/100} M and the equilibrium concentration of B is ${a*b/100} M. What is Kc?`,b,'For this 1:1 equilibrium, Kc = [B]/[A].'),
    (a,b) => numeric(`A ${a*10} mL sample of ${b/100} M HCl is titrated with 0.100 M NaOH. What volume of NaOH in mL is required at equivalence?`,a*b,'HCl and NaOH react 1:1, so the acid and base have equal mole amounts at equivalence.'),
    (a,b) => numeric(`A galvanic cell has a cathode reduction potential of +${a/10} V and an anode reduction potential of −${b/10} V. What is the standard cell potential in volts?`,(a+b)/10,'Subtract the anode reduction potential from the cathode reduction potential.')
  ],
  'physics-1': [
    (a,b) => numeric(`A cart accelerates from rest at ${a} m/s² for ${b} seconds. What displacement in meters does it cover?`,a*b*b/2,'From rest under constant acceleration, displacement equals ½at².'),
    (a,b) => numeric(`A net horizontal force of ${a*b} N acts on a ${a} kg cart. What is the magnitude of its acceleration in m/s²?`,b,'Newton’s second law gives a = Fnet/m.'),
    (a,b) => numeric(`A ${a} kg cart moves at ${b} m/s. What is its kinetic energy in joules?`,a*b*b/2,'Translational kinetic energy is ½mv².'),
    (a,b) => numeric(`A net force of ${a} N acts east for ${b} seconds. What is the change in eastward momentum in kg·m/s?`,a*b,'Impulse equals the change in momentum and is force times duration for constant force.'),
    (a,b) => numeric(`A force of ${a} N is applied perpendicular to a ${b} m lever arm. What is the torque magnitude in N·m?`,a*b,'For a perpendicular force, torque is the product of the lever arm and force.'),
    (a,b) => numeric(`A flywheel has rotational inertia ${a} kg·m² and angular speed ${b} rad/s. What is its rotational kinetic energy in joules?`,a*b*b/2,'Rotational kinetic energy equals ½Iω².'),
    (a,b) => numeric(`An ideal mass–spring oscillator completes ${a} cycles in ${a*b} seconds. What is its period in seconds?`,b,'The period is elapsed time divided by the number of cycles.'),
    (a,b) => numeric(`An object fully submerged in a fluid of density ${a*100} kg/m³ displaces ${b/100} m³. With g = 10 m/s², what is the buoyant force in newtons?`,10*a*b,'Archimedes’ principle gives the weight of the displaced fluid, ρVg.')
  ],
  'calculus-ab': [
    (a,b) => numeric(`What is the limit of (x² − ${a*a})/(x − ${a}) + ${b} as x approaches ${a}?`,2*a+b,'Factor the numerator and cancel the common factor before substituting.'),
    (a,b) => numeric(`For f(x) = ${a}x³ + ${b}x, what is f′(2)?`,12*a+b,'Apply the power and sum rules: f′(x) = 3ax² + b.'),
    (a,b) => numeric(`For f(x) = (${a}x + ${b})³, what is f′(1)?`,3*a*(a+b)**2,'Differentiate the outer cube and multiply by the derivative of the inner linear expression.'),
    (a,b) => numeric(`A circle’s radius is ${a} cm and increasing at ${b} cm/s. The area increases at kπ cm²/s. What is k?`,2*a*b,'Differentiating A = πr² with respect to time gives dA/dt = 2πr dr/dt.'),
    (a,b) => numeric(`The derivative of f is f′(x) = ${a}x − ${a*b}. At what x-value does f have its local minimum?`,b,'The derivative changes from negative to positive at its zero.'),
    (a,b) => numeric(`Evaluate the definite integral of ${a}x from x = 0 to x = ${b}.`,a*b*b/2,'An antiderivative is ax²/2. Evaluate at the upper endpoint and subtract the lower value.'),
    (a,b) => numeric(`A function satisfies dy/dx = ${a}x and y(0) = ${b}. What is y(2)?`,2*a+b,'Integrate to obtain y = ax²/2 + C; the initial value determines C.'),
    (a,b) => numeric(`The region between y = ${a}x and y = 0 on [0, ${b}] is rotated about the x-axis. Its volume is kπ. What is k? Round to four decimal places if needed.`,a*a*b**3/3,'The disk area is πa²x². Integrate from zero to the upper endpoint.')
  ],
  macroeconomics: [
    (a,b) => numeric(`A country can make ${a*b} bicycles or ${a} ovens using the same resources with constant opportunity costs. What is the opportunity cost of one oven in bicycles?`,b,'Divide the bicycles forgone by the ovens gained.'),
    (a,b) => numeric(`The labor force is ${a*100} thousand people, including ${a*b} thousand unemployed people. What is the unemployment rate as a percentage?`,b,'Divide unemployed people by the labor force and multiply by 100.'),
    (a,b) => numeric(`With an MPC of 0.75, government purchases rise by $${a*b} billion. Under the simple spending multiplier model, by how many billions of dollars does equilibrium output rise?`,4*a*b,'The spending multiplier is 1/(1 − MPC), or 4.'),
    (a,b) => numeric(`A bank has deposits of $${a*b*100} million and faces a required reserve ratio of ${b}%. What are its required reserves in millions of dollars?`,a*b*b,'Required reserves are the reserve ratio times deposits.'),
    (a,b) => numeric(`The unemployment rate is ${a+b}% and the natural rate is ${a}%. On the short-run Phillips curve, how many percentage points is unemployment above its long-run rate?`,b,'The long-run Phillips curve is at the natural unemployment rate.'),
    (a,b) => numeric(`At an exchange rate of ${a} units of foreign currency per dollar, a U.S. product priced at $${b*10} costs what amount in foreign currency?`,a*b*10,'Multiply the dollar price by foreign-currency units per dollar.')
  ],
  'environmental-science': [
    (a,b) => numeric(`A marsh’s gross primary productivity is ${a*b*100+100} kJ/m² per year and producer respiration is 100 kJ/m² per year. What is its net primary productivity in the same units?`,100*a*b,'Subtract producer respiration from gross primary productivity.'),
    (a,b) => numeric(`A habitat inventory finds ${a+b} plant species, including ${a} native species and ${b} nonnative species. If every nonnative species disappears and no native species is lost, what is the remaining species richness?`,a,'Species richness counts the number of species present.'),
    (a,b) => numeric(`A closed population of 500 individuals records ${a*10} births and ${b} deaths. What is the population after these changes?`,500+a*10-b,'Add births and subtract deaths from the starting population.'),
    (a,b) => numeric(`A layer of soil ${a} cm thick over bedrock loses ${b/100} cm to erosion per year. At this constant rate, how many centuries would it take to remove the layer? Round to four decimal places if needed.`,a/b,'Depth divided by annual erosion gives years; divide by 100 for centuries.'),
    (a,b) => numeric(`A farm uses ${a*b*100} L of irrigation water per day. A conservation measure saves ${a*100} L/day. What percentage of the original daily use does it save? Round to four decimal places if needed.`,100/b,'Divide water saved by original use and multiply by 100.'),
    (a,b) => numeric(`A solar array delivers ${a} kW for ${b} hours at that constant output. How many kWh does it generate?`,a*b,'Multiply electrical power in kilowatts by hours.'),
    (a,b) => numeric(`A scrubber reduces sulfur dioxide emissions from ${a*b*10} to ${a*10} kg/h. How many kg/h of sulfur dioxide does it remove?`,a*10*(b-1),'Subtract the outlet emission rate from the inlet rate.'),
    (a,b) => numeric(`A wastewater sample’s dissolved oxygen drops from ${a+b} to ${a} mg/L during a BOD test. What is the oxygen demand in mg/L for the undiluted sample?`,b,'The oxygen demand is measured by oxygen depleted during incubation.'),
    (a,b) => numeric(`Mean sea level rises at a constant ${a} mm per year for ${b*10} years. What is the total rise in centimeters?`,a*b,'Multiply rate by elapsed years, then divide millimeters by 10 to obtain centimeters.')
  ]
};

const psychologyCases = [
  [
    [
      "{P} touches a hot surface and withdraws a hand before consciously feeling pain. Which structure coordinates the initial reflex?",
      "Spinal cord",
      "Visual cortex",
      "Hippocampus",
      "Cerebellum",
      "Spinal reflex circuits can initiate withdrawal before conscious processing."
    ],
    [
      "While {P} walks, which nervous-system division carries commands to skeletal muscles?",
      "Somatic nervous system",
      "Sympathetic division",
      "Parasympathetic division",
      "Endocrine system",
      "The somatic nervous system controls voluntary skeletal muscles."
    ],
    [
      "{P}’s heart rate rises on hearing an unexpected alarm. Which division primarily drives this immediate change?",
      "Sympathetic",
      "Parasympathetic",
      "Somatic",
      "Central visual",
      "The sympathetic division mobilizes the body during a threat."
    ]
  ],
  [
    [
      "When {P} recalls more items at the beginning of a list than in the middle, which effect is shown?",
      "Primacy effect",
      "Recency effect",
      "Misinformation effect",
      "Retroactive interference",
      "The primacy effect is enhanced recall for earlier items."
    ],
    [
      "{P} cannot recall a name at first but remembers it after hearing its first syllable. What does the syllable provide?",
      "Retrieval cue",
      "Sensory adaptation",
      "Positive reinforcement",
      "Procedural memory",
      "A retrieval cue helps access a stored memory."
    ],
    [
      "{P} keeps trying to solve a new puzzle using a strategy that worked on earlier puzzles. Which concept best fits?",
      "Mental set",
      "Divergent thinking",
      "Habituation",
      "Source amnesia",
      "A mental set is a tendency to apply a familiar strategy even when a different one could work better."
    ]
  ],
  [
    [
      "{P} receives a sticker after completing a chore and begins doing that chore more often. Which process occurred?",
      "Positive reinforcement",
      "Negative reinforcement",
      "Positive punishment",
      "Negative punishment",
      "A stimulus was added and the behavior increased."
    ],
    [
      "{P} practices a skill after watching a peer demonstrate it. Which learning process is most directly illustrated?",
      "Observational learning",
      "Classical extinction",
      "Stimulus discrimination",
      "Spontaneous recovery",
      "Observational learning occurs by watching a model."
    ],
    [
      "A sound previously predicted a snack for {P}. The sound is then repeatedly presented alone and the learned response weakens. Which process occurred?",
      "Extinction",
      "Acquisition",
      "Generalization",
      "Spontaneous recovery",
      "Extinction occurs when the conditioned stimulus is repeatedly presented without the unconditioned stimulus."
    ]
  ],
  [
    [
      "{P} privately disagrees with a group’s answer but publicly agrees to avoid rejection. Which influence best explains this?",
      "Normative social influence",
      "Informational social influence",
      "Social facilitation",
      "Self-serving bias",
      "Normative influence is conformity motivated by social acceptance."
    ],
    [
      "{P} credits a high score to ability and blames a low score on an unfair test. Which bias does this illustrate?",
      "Self-serving bias",
      "Hindsight bias",
      "Confirmation bias",
      "Outgroup homogeneity",
      "The self-serving bias attributes successes internally and failures externally."
    ],
    [
      "{P} is consistently organized and dependable. Which Big Five trait best describes this pattern?",
      "Conscientiousness",
      "Extraversion",
      "Openness",
      "Neuroticism",
      "Conscientiousness includes organization and dependability."
    ]
  ],
  [
    [
      "To reduce a conflict between work and study, {P} asks for a different work schedule. Which coping approach does this illustrate?",
      "Problem-focused coping",
      "Emotion-focused coping",
      "Avoidance coping",
      "Rumination",
      "Problem-focused coping acts on the source of stress."
    ],
    [
      "A therapist helps {P} identify and challenge an all-or-nothing interpretation. Which approach is most directly illustrated?",
      "Cognitive therapy",
      "Aversive conditioning",
      "Free association",
      "Biomedical therapy",
      "Cognitive therapy helps clients evaluate and change unhelpful thinking patterns."
    ],
    [
      "{P} practices approaching a feared object in gradual steps in a safe environment. Which behavioral approach is illustrated?",
      "Exposure therapy",
      "Aversive conditioning",
      "Free association",
      "Humanistic reflection",
      "Exposure therapy involves approaching feared stimuli under controlled conditions."
    ]
  ]
];
const names = ['Alex', 'Avery', 'Cameron', 'Casey', 'Drew', 'Ellis', 'Emerson', 'Jamie', 'Jordan', 'Kai', 'Lee', 'Morgan', 'Parker', 'Quinn', 'Reese', 'Riley', 'Robin', 'Rowan', 'Sam', 'Skyler', 'Taylor', 'Toby', 'Val', 'Wren'];

// Original questions aligned to the AP Biology Chemistry of Life framework.
const chemistryOfLife = [
  ["Water droplets on identical clean slides have mean contact angles of 24° without a detergent and 11° with detergent. The surface and droplet volume are held constant.", [
    ["Which claim is supported by the contact-angle data?","Detergent-treated droplets spread farther across the slides.","Detergent increased the volume of water in the droplets.","Detergent made the glass absorb water.","Detergent increased the mass of each water molecule.","A lower contact angle indicates greater spreading."],
    ["Which molecular interaction primarily accounts for cohesion in the untreated droplets?","Attraction between partial charges on neighboring water molecules","Sharing of electrons between oxygen atoms in different molecules","Attraction between two positively charged hydrogen atoms","Ionic bonding between neutral water molecules","Water molecules cohere through intermolecular hydrogen bonds."],
    ["Which procedure would best assess variability in the effect of detergent?","Measure independent droplets on several slides per treatment.","Use one large droplet per treatment.","Measure only droplets with angles near the mean.","Use a different slide material for every untreated droplet.","Independent replicates reveal how variable the measurements are."],
    ["Which control best separates the detergent effect from the way it was added?","Add the same volume of detergent-free solvent to control droplets.","Use larger control droplets with no solvent.","Heat only the control droplets.","Use a more hydrophobic slide for the controls.","Matching solvent volumes isolates the presence of detergent."]
  ]],
  ["Researchers compare two insulated vessels given equal energy inputs. Each holds an equal mass of liquid. Water warms by 4°C and an unknown liquid warms by 10°C. Assume negligible evaporation and heat loss.", [
    ["Which conclusion follows?","Water has a higher specific heat capacity.","Water has a lower specific heat capacity.","The liquids absorbed different amounts of energy.","The unknown liquid must contain more molecules.","Equal energy per mass caused a smaller temperature change in water."],
    ["How does hydrogen bonding help explain the water result?","Some added energy disrupts attractions between water molecules.","Some added energy separates hydrogen nuclei from their electrons.","Heat forms permanent covalent bonds between water molecules.","Water molecules become less polar as they warm.","Energy can disrupt intermolecular hydrogen bonds instead of only raising kinetic energy."],
    ["Which prediction follows for equal masses receiving equal daily heat inputs?","Water will undergo a smaller temperature swing.","Water will reach the higher daytime temperature.","Both liquids will show identical temperature changes.","The unknown liquid will absorb no energy.","The material with higher specific heat changes temperature less per unit heat absorbed."],
    ["Which setup change makes the comparison harder to interpret?","Using twice the mass of water with the same heat input","Using thermometers calibrated against the same standard","Increasing the number of independent trials","Using the same starting temperature for both liquids","Mass changes the temperature response independently of specific heat."]
  ]],
  ["A pond freezes at the surface and remains liquid beneath. In a model of ice, neighboring water molecules are held in a relatively open arrangement.", [
    ["Which property links the model to the location of the ice?","The open arrangement makes ice less dense than liquid water.","Ice molecules weigh less than liquid water molecules.","The open arrangement increases the density of ice.","Water molecules lose hydrogen atoms during freezing.","A more open structure increases volume per unit mass."],
    ["Which effect of the surface ice helps organisms survive below it?","It slows heat exchange between liquid water and cold air.","It transforms dissolved salts into heat.","It prevents hydrogen bonds from forming below the surface.","It increases the density of the underlying water by adding solute.","The ice layer insulates the water beneath it."],
    ["Which observation would most directly test the density explanation?","Equal masses of ice and liquid water are compared for volume.","The color of water is recorded before and after freezing.","The pH of the pond is measured in summer.","Different masses of ice are held at the same temperature.","For equal masses, volume directly determines the density comparison."],
    ["In a model diagram, what should connect an oxygen on one molecule to a hydrogen on a different molecule?","A dashed line for a hydrogen bond","A solid line for a polar covalent bond","A line for an ionic bond between full charges","A bond showing two oxygen atoms sharing electrons","The attraction links partial charges on separate molecules."]
  ]],
  ["Genetically similar algae are grown with light, carbon dioxide, and equal starting cell counts. At day 5, cultures yield 80 units of biomass in complete medium, 22 without nitrate, and 25 without phosphate.", [
    ["Which interpretation is supported in these conditions?","Nitrate and phosphate both contribute to maximum biomass production.","Nitrate can substitute for phosphate in all cell molecules.","Phosphate omission increases biomass relative to complete medium.","The data show carbon dioxide limits growth more than either nutrient.","Removing either nutrient is associated with lower biomass than in complete medium."],
    ["Which cellular process is most directly limited by a shortage of nitrogen atoms?","Making amino acids and nitrogenous bases","Making glucose from carbon dioxide and water","Linking glucose subunits into starch","Linking glycerol and fatty acids into triglycerides","Amino acids and nitrogenous bases contain nitrogen."],
    ["Which product requires phosphorus as part of its repeating backbone?","DNA","Cellulose","A triglyceride","A polypeptide","DNA nucleotides are joined through phosphate and sugar groups."],
    ["Which additional comparison best tests whether nitrate omission specifically caused the low biomass?","Add nitrate back to otherwise identical nitrate-free medium.","Change the light level in nitrate-free medium.","Compare two complete cultures started at different densities.","Add phosphate to complete medium and lower the temperature.","Restoring one missing component tests whether that component explains the effect."]
  ]],
  ["In one culture, algae receive carbon dioxide containing ¹³C and nitrate containing ordinary nitrogen. In another, algae receive ordinary carbon dioxide and nitrate containing ¹⁵N. Researchers examine newly synthesized compounds.", [
    ["Which compound can incorporate labeled carbon directly into a carbohydrate product of carbon fixation?","Starch","Water","Inorganic phosphate","Nitrate","Fixed carbon can become glucose units stored as starch."],
    ["Where would ¹⁵N be expected in newly synthesized DNA nucleotides?","Nitrogenous bases","Deoxyribose groups","Phosphate groups","Hydrogen bonds","Nitrogen is present in the bases, while sugar and phosphate lack nitrogen."],
    ["Which pair of macromolecules could both contain ¹⁵N after assimilation?","Proteins and nucleic acids","Cellulose and starch","Triglycerides and glycogen","Starch and triglycerides","Amino groups and nitrogenous bases can incorporate assimilated nitrogen."],
    ["Why measure incorporation in a culture supplied with only unlabeled nutrients?","To establish the background signal for the tracer measurement","To make the labeled isotopes react faster","To eliminate all nitrogen from the control culture","To prevent the control from making macromolecules","A matched unlabeled culture provides a baseline for isotope detection."]
  ]],
  ["An enzyme acts on a purified carbohydrate in water. The mean length of the carbohydrate chains falls while the concentration of free monosaccharides rises.", [
    ["Which molecular process best accounts for both observations?","Hydrolysis of glycosidic bonds","Dehydration linking monosaccharides","Hydrolysis of peptide bonds","Base pairing between complementary nucleotides","Hydrolysis breaks carbohydrate linkages with the addition of water."],
    ["Which comparison best tests whether the enzyme caused the rise in monosaccharides?","Incubate substrate without enzyme at the same temperature and pH.","Incubate enzyme without any water.","Use a different carbohydrate and a higher temperature.","Measure only the final treated sample.","A matched substrate-only control detects changes that could occur without the enzyme."],
    ["If the reverse linkage reaction joins two monosaccharides, what small molecule is released?","Water","Carbon dioxide","Ammonia","Oxygen gas","A dehydration reaction releases water as it forms a covalent bond."],
    ["Which result would most directly show that the treatment changed chain length as well as sugar concentration?","A size-separation assay shifts from larger to smaller carbohydrate molecules.","A thermometer shows both samples reach the same temperature.","A pH assay shows the solution is buffered.","The solution contains the same initial mass of enzyme.","A shift in the size distribution directly measures the chain-length change."]
  ]],
  ["Two glucose polymers are tested with the same digestive extract. Polymer X has α linkages and yields abundant glucose. Polymer Y has β-1,4 linkages and yields very little glucose.", [
    ["Which explanation best fits the data?","The extract contains enzymes that preferentially act on the linkage present in X.","The glucose monomers in Y contain nitrogen instead of carbon.","The extract destroys glucose only when released from Y.","The two polymers must be composed of different monosaccharides.","Linkage geometry affects recognition even when monomers are identical."],
    ["Which structure most closely matches polymer Y?","Cellulose","Glycogen","Amylose","A triglyceride","Cellulose contains glucose subunits joined by β-1,4 bonds."],
    ["Which additional treatment best tests whether Y can be hydrolyzed by an appropriate enzyme?","Incubate Y with purified cellulase and measure glucose release.","Add more untreated Y without an enzyme.","Remove water from the reaction.","Add a protease and measure amino acids only.","Cellulase targets the β-1,4 bonds in cellulose."],
    ["What property helps polymer Y provide structural support in plants?","Adjacent straight chains can hydrogen-bond to form strong fibers.","Its branches create many sites for glucose release.","Its monomers are amino acids with strong ionic side chains.","Its hydrocarbon tails exclude water completely.","Cellulose chains associate into strong microfibrils through hydrogen bonding."]
  ]],
  ["Researchers prepare equal masses of two glucose storage polymers. Both have α-1,4 chains, but sample B has more α-1,6 branch points. An enzyme removes glucose units from accessible nonreducing ends.", [
    ["Which initial result is most likely when enzyme is abundant?","B releases glucose faster because more chain ends are available.","B releases glucose slower because it contains less carbon per monomer.","Both release glucose equally because their total masses match.","A releases glucose faster because branch points eliminate chain ends.","More branching creates additional ends where the enzyme can work in parallel."],
    ["Which measurement best compares the predicted initial rates?","Measure glucose at several short time intervals and compare the slopes.","Measure a single endpoint after both samples are fully degraded.","Measure the initial color of the empty tubes.","Compare the total masses of glucose in unused samples.","The slope during early sampling measures the rate of product formation."],
    ["What structural change would most directly reduce the number of ends in B?","Reduce the number of α-1,6 branches while retaining total chain mass.","Increase the number of branches at the same mass.","Replace the glucose molecules with amino acids.","Remove all water after the reaction has finished.","Fewer branches mean fewer chain ends available for rapid degradation."],
    ["Which biological advantage follows from the predicted behavior of B?","Cells can mobilize stored glucose rapidly when demand increases.","Cells can encode hereditary information in the branch order.","Cells can produce cellulose fibers without changing linkages.","Cells can avoid storing any carbon.","Many ends help cells release glucose quickly from glycogen."]
  ]],
  ["Two mixtures of fatty acids have equal average chain lengths. Mixture S is mainly saturated. Mixture U contains mainly fatty acids with cis double bonds. Both are gradually cooled.", [
    ["Which mixture is likely to remain liquid to a lower temperature?","U, because cis double bonds disrupt packing.","U, because cis double bonds make all chains ionic.","S, because straight chains disrupt packing.","S, because saturation removes hydrophobic regions.","Cis double bonds introduce bends that reduce packing and lower melting temperature."],
    ["Which diagram would represent the most common chains in U?","A chain with a pronounced bend at a double bond","A straight chain with no double bonds","A chain of sugars connected through oxygen","A ring of alternating sugar and phosphate groups","A cis double bond constrains the chain into a bent shape."],
    ["Which variable should be matched to isolate the contribution of saturation?","Fatty-acid chain length","The observed melting point","The number of cis double bonds","The final physical state","Chain length independently affects interactions and melting point."],
    ["Which molecular interaction is favored when straight chains pack closely?","Attractions between adjacent hydrocarbon chains","Hydrogen bonding between terminal methyl groups","Phosphodiester bonds between tails","Peptide bonds linking fatty acids into proteins","Close packing increases weak dispersion interactions between tails."]
  ]],
  ["Students shake two preparations containing equal volumes of oil and water. Only tube P receives a phospholipid. After settling, P contains many small oil droplets, whereas the comparison tube has one separated oil layer.", [
    ["How are phospholipids most likely oriented around an oil droplet in water?","Polar heads face the water and nonpolar tails face the oil.","Nonpolar tails face the water and polar heads face the oil.","Both heads and tails face water with no contact with oil.","Phosphate groups are buried in oil next to other polar heads.","The two regions orient toward their compatible environments."],
    ["Which modification would most directly reduce a phospholipid’s tendency to remain at the oil–water boundary?","Remove its polar head group.","Replace one fatty acid with another similar-length fatty acid.","Use the same molecule at a slightly lower temperature.","Label one tail carbon with a stable isotope.","The boundary orientation depends on the combination of polar and nonpolar regions."],
    ["Which observation best supports the claim that P stabilizes dispersed oil droplets?","Over time, droplets merge more slowly in P than in the comparison tube.","The initial oil mass is equal in both tubes.","The water remains the same temperature in both tubes.","Both tubes are shaken for equal amounts of time.","Slower coalescence is direct evidence that droplets persist."],
    ["Which structural distinction separates a typical phospholipid from a triglyceride?","A phospholipid has a phosphate-containing head in place of a third fatty acid.","A triglyceride has a phosphate backbone.","A phospholipid has three tails and no polar region.","A triglyceride contains phosphodiester-linked nucleotides.","A typical glycerophospholipid has two fatty acids and a polar phosphate-containing head."]
  ]],
  ["A double-stranded DNA fragment contains 200 total nucleotides, including 60 adenines. The two strands are intact and pair by the usual base-pairing rules.", [
    ["How many cytosines are present?","40","60","80","140","There are 60 thymines, leaving 80 G plus C nucleotides split equally."],
    ["If the fragment had more G–C pairs at the same length and comparable sequence arrangement, what outcome would be expected when heated?","Its strands would generally separate at a higher temperature.","Its covalent backbone would break at room temperature.","Its strands would separate at a lower temperature because G–C has fewer hydrogen bonds.","Its nucleotide order would become random before separation.","Higher G–C content generally increases duplex stability."],
    ["Which bond type remains intact when the strands are separated by mild heating?","Covalent phosphodiester bonds in each strand","Hydrogen bonds between the two strands","Ionic bonds linking bases across the strands","Peptide bonds linking adjacent nucleotides","Melting separates paired strands without cleaving their covalent backbones."],
    ["Which feature distinguishes this DNA fragment from an RNA fragment of the same length?","DNA contains deoxyribose and normally uses thymine.","DNA contains ribose and normally uses uracil.","DNA lacks phosphate groups.","DNA nucleotides contain amino acid side chains.","The pentose sugar and one of the standard bases differ."]
  ]],
  ["A DNA segment is shown with one strand labeled 5′–A C G T T A–3′. A model depicts the strands as paired and antiparallel.", [
    ["Which sequence is the paired strand when written 5′ to 3′?","5′–T A A C G T–3′","5′–T G C A A T–3′","5′–A C G T T A–3′","5′–U A A C G U–3′","The complementary sequence must be reversed to write it in the 5′ to 3′ direction."],
    ["What feature of the strands establishes the direction labels?","The 5′ and 3′ positions of the sugars in the backbone","The position of the first purine in each strand","The number of hydrogen bonds in each base pair","The total number of phosphate groups in both strands","The carbon positions on the sugars distinguish the ends."],
    ["If one A–T pair is replaced by a G–C pair, how does the standard hydrogen-bond count change?","It increases by one.","It decreases by one.","It increases by three.","It is unchanged.","A–T has two hydrogen bonds and G–C has three."],
    ["Which change preserves the chemical identity of the backbone but alters stored information?","Change the order of bases while retaining the sugar–phosphate linkages.","Replace deoxyribose with ribose in every nucleotide.","Remove every phosphate group from both strands.","Replace phosphodiester linkages with peptide bonds.","Base sequence carries information independently of the repeating backbone."]
  ]],
  ["A soluble protein has a compact shape. A variant replaces a buried nonpolar leucine with a charged aspartate. At the same concentration, the variant folds less consistently than the original.", [
    ["Which explanation is best supported?","The charged side chain is less favorable in the nonpolar interior.","The substitution removes every peptide bond.","The replacement makes the protein contain fewer residues.","The change converts aspartate into a nucleotide.","A buried charge can destabilize the interactions that favor the folded structure."],
    ["Which level changes directly as a result of the substitution?","Primary structure","Quaternary structure only","Secondary structure only","Tertiary structure only","Primary structure is the amino acid sequence itself."],
    ["Which second substitution would best test the role of side-chain polarity at that position?","Replace leucine with a similarly sized nonpolar amino acid and compare folding.","Remove the entire protein and test the buffer.","Compare two proteins with unrelated sequences and lengths.","Test the aspartate variant only at a higher temperature.","A comparable nonpolar side chain tests whether retaining hydrophobic character preserves folding."],
    ["Which observation would best support a difference in three-dimensional shape despite similar chain length?","A native-state structural assay shows different exposure of buried side chains.","Sequence analysis shows both proteins have the same number of residues.","Equal volumes of buffer are used.","Both samples have measurable peptide bonds.","Exposure of side chains reveals differences in how the chain folds."]
  ]],
  ["A purified protein contains two identical chains associated through noncovalent contacts. Moderate heating causes the two chains to separate without changing their amino acid sequences.", [
    ["Which structural level is directly lost when the chains separate?","Quaternary structure","Primary structure","The covalent peptide backbone","The amino acid sequence","Quaternary structure describes association between polypeptide subunits."],
    ["What observation supports the claim that heating did not hydrolyze peptide bonds?","Each separated chain has the same length and sequence as an original subunit.","The solution reaches a higher temperature.","The protein changes shape after heating.","The chains move farther apart after heating.","New peptide bond breaks would produce shorter fragments or altered chain boundaries."],
    ["Which additional finding would show that tertiary structure was also disrupted?","An individual chain loses its normal three-dimensional fold.","The two chains differ in total number when counted separately.","The chains have the same sequence as each other.","The solution contains equal numbers of both chains.","Tertiary structure is the three-dimensional fold of one polypeptide chain."],
    ["Which treatment is the clearest control for the effect of heating on subunit association?","Keep an identical aliquot at the starting temperature for the same duration.","Dilute an unheated aliquot with a different solvent.","Heat another protein with an unrelated structure.","Change the pH of a second aliquot during heating.","A matched unheated aliquot isolates the effect of temperature."]
  ]],
  ["Two related proteins have similar amino acid sequences. Protein R retains its shape under a broad pH range. Protein S unfolds at low pH. Their lengths remain unchanged during the treatment.", [
    ["Which mechanism can account for unfolding at low pH without chain breakage?","Protonation changes side-chain charge and weakens some stabilizing interactions.","Low pH removes the carbon atoms from the peptide backbone.","Low pH changes every amino acid into a monosaccharide.","Low pH always hydrolyzes every peptide bond immediately.","Protonation can disrupt charge-based interactions while leaving the backbone intact."],
    ["Which experiment best distinguishes reversible unfolding from permanent damage?","Restore the original pH and test whether the native structure returns.","Keep both proteins at low pH and measure only their lengths.","Raise the temperature instead of restoring pH.","Measure the color of the empty containers.","Recovery of the native structure under the original condition demonstrates reversibility."],
    ["Which change to S would directly test whether a particular ion pair stabilizes its folded state?","Replace one charged side chain in the pair with an uncharged side chain.","Add an equal length of cellulose to the sample.","Replace the buffer with pure oil.","Change every residue simultaneously.","A targeted substitution probes the contribution of the proposed interaction."],
    ["Which feature most plausibly explains the different responses of R and S?","Differences in the side-chain interactions that stabilize each protein.","A different set of standard chemical bonds linking all amino acids in R.","A different genetic alphabet used to encode the two proteins.","The absence of covalent bonds in every region of S.","Even related sequences can differ in the interactions that stabilize folding."]
  ]]
].flatMap(([stimulus, items]) => items.map(([stem, correct, a, b, c, explanation]) => ({
  prompt: stimulus + ' ' + stem,
  choices: [correct, a, b, c],
  answer: 0,
  explanation
})));

export function unitPool(course, unit, bank) {
  if (course === 'biology' && unit === 1) return chemistryOfLife;
  const index = unit - 1;
  const items = bankGroups[course][index].map(i => bank[i]);
  for (let offset = 0; offset < 867; offset++) {
    if (variantUnits[course][offset * 137 % 3] === unit) items.push(variantAt(course, offset));
  }
  if (course === 'psychology') {
    for (const [prompt, correct, a, b, c, explanation] of psychologyCases[index]) {
      for (const name of names) {
        items.push({ prompt: prompt.replace('{P}', name), choices: [correct, a, b, c], answer: 0, explanation });
      }
    }
  } else {
    const make = numericUnits[course][index];
    for (let a = 2; a < 19; a++) {
      for (let b = 2; b < 19; b++) items.push(make(a,b));
    }
  }
  const unique = new Map();
  for (const item of items) {
    if (item && new Set(item.choices).size === item.choices.length) unique.set(item.prompt, item);
  }
  return [...unique.values()];
}
