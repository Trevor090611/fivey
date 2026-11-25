import { biologyQuestions } from './practice-biology.js?v=2';
import { environmentalQuestions } from './practice-environmental.js?v=1';
import { chemistryQuestions } from './practice-chemistry.js?v=1';
import { psychologyQuestions } from './practice-psychology.js?v=1';
import { physicsQuestions } from './practice-physics.js?v=1';
import { macroeconomicsQuestions } from './practice-macroeconomics.js?v=1';

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

// Question banks by course. Courses without a bank return no questions yet.
export function unitPool(course, unit) {
  if (course === 'biology') return biologyQuestions(unit);
  if (course === 'environmental-science') return environmentalQuestions(unit);
  if (course === 'chemistry') return chemistryQuestions(unit);
  if (course === 'psychology') return psychologyQuestions(unit);
  if (course === 'physics-1') return physicsQuestions(unit);
  if (course === 'macroeconomics') return macroeconomicsQuestions(unit);
  return [];
}
