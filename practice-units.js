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

// All earlier practice question sets were removed on 2026-11-23.
// Add new question sets here: unitPool returns the questions for one course unit.
export function unitPool(course, unit) {
  return [];
}
