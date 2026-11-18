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
    (a,b) => numeric(`A linear peptide contains ${a} residues of one amino acid and ${b} residues of another. How many water molecules are released when its peptide bonds form?`,a+b-1,'A chain of n amino acids has n − 1 peptide bonds. Each condensation releases one water molecule.'),
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

export function unitPool(course, unit, bank) {
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
