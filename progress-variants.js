const width = 17;
const perTemplate = width ** 2;

function question(prompt, correct, distractors, explanation) {
  return { prompt, choices: [correct, ...distractors].map(String), answer: 0, explanation };
}

const percent = value => Number(value.toFixed(2)) + '%';

const templates = {
  biology: [
    (a, b) => {
      const p = (20 + a) / 100;
      const q = (20 + b) / 100;
      return question(
        `Two populations are in Hardy–Weinberg equilibrium. The recessive allele frequency is ${percent(p * 100)} in population A and ${percent(q * 100)} in B. What is the expected recessive phenotype frequency in A?`,
        percent(p ** 2 * 100),
        [percent(p * 100), percent(2 * p * (1 - p) * 100), percent((1 - p) ** 2 * 100)],
        'The recessive phenotype occurs in homozygous recessive individuals. Square the recessive allele frequency for population A.'
      );
    },
    (a, b) => question(
      `At low substrate concentration, a control enzyme produces ${a + 30} µmol of product per minute and an inhibited sample produces ${b + 2} µmol per minute. The two rates converge at very high substrate concentration. Which mechanism fits these data?`,
      'A competitive inhibitor competes with substrate for the active site.',
      ['A noncompetitive inhibitor permanently lowers the maximal rate.', 'The inhibitor raises the reaction equilibrium constant.', 'The inhibitor removes all substrate from the mixture.'],
      'Increasing substrate concentration can overcome competitive inhibition, allowing both samples to approach the same maximum rate.'
    ),
    (a, b) => question(
      `Researchers add ${a + 20} mg of nitrate per liter to a pond enclosure. After ${b + 2} days, algal biomass has risen and dissolved oxygen has fallen. Which follow-up measurement would most directly test whether decomposition drove the oxygen decline?`,
      'Oxygen consumption by microbes breaking down dead algal material.',
      ['The average size of the living algae at noon.', 'Nitrate concentration in a different lake.', 'Sunlight intensity above the enclosure at noon.'],
      'Decomposition by aerobic microbes consumes dissolved oxygen. Measuring that consumption tests the proposed mechanism directly.'
    )
  ],
  chemistry: [
    (a, b) => {
      const volume = a + 15;
      const acid = b + 5;
      const baseVolume = volume * acid / 20;
      return question(
        `A ${volume}.0 mL sample of ${(acid / 100).toFixed(2)} M HCl is titrated with 0.200 M NaOH. What volume of NaOH is needed at equivalence?`,
        baseVolume.toFixed(2) + ' mL',
        [(baseVolume / 2).toFixed(2) + ' mL', (2 * baseVolume).toFixed(2) + ' mL', (10 * baseVolume).toFixed(2) + ' mL'],
        'HCl and NaOH react in a 1:1 ratio. Set their amounts equal using MₐVₐ = MᵦVᵦ.'
      );
    },
    (a, b) => question(
      `For a reaction with rate = k[X]²[Y], [X] is increased by a factor of ${a} and [Y] is increased by a factor of ${b}. By what factor does the rate increase?`,
      a * a * b, [a * b, 2 * a * a * b, 2 * a * b + 1],
      'Square the change in [X] and multiply it by the change in [Y].'
    ),
    (a, b) => question(
      `A gas absorbs ${a * 20} J of heat and does ${b * 5} J of work on its surroundings. What is ΔU for the gas?`,
      (a * 20 - b * 5) + ' J',
      [(a * 20 + b * 5) + ' J', (a * 20 - b * 5 + 10) + ' J', (-a * 20 - b * 5) + ' J'],
      'Heat entering the gas is positive. Work done by the gas is negative, so subtract the work from the heat absorbed.'
    )
  ],
  'physics-1': [
    (a, b) => question(
      `A cart starts from rest and accelerates at ${a} m/s² for ${b} s on a straight track. How far does it travel?`,
      (a * b ** 2 / 2) + ' m',
      [(a * b ** 2) + ' m', (a * b ** 2 / 4) + ' m', (a * b ** 2 * 2) + ' m'],
      'For constant acceleration from rest, displacement is ½at².'
    ),
    (a, b) => question(
      `A ${a} kg cart moving right at ${b} m/s hits and sticks to a stationary cart with twice its mass. What is the speed of the combined carts immediately afterward?`,
      (b / 3).toFixed(2) + ' m/s',
      [b.toFixed(2) + ' m/s', (b / 2).toFixed(2) + ' m/s', (2 * b / 3).toFixed(2) + ' m/s'],
      'Momentum is conserved. Divide the initial momentum mv by the combined mass 3m.'
    ),
    (a, b) => question(
      `A wheel with rotational inertia ${a} kg·m² starts from rest. A constant net torque of ${b} N·m acts for 2 s. What is its angular speed at that point?`,
      (2 * b / a).toFixed(2) + ' rad/s',
      [(b / a).toFixed(2) + ' rad/s', (4 * b / a).toFixed(2) + ' rad/s', '0 rad/s'],
      'Divide torque by rotational inertia to find angular acceleration, then multiply by 2 s.'
    )
  ],
  psychology: [
    (a, b) => question(
      `A researcher randomly assigns ${a + 20} students to retrieval practice and ${b + 20} students to rereading. After one week, everyone takes the same recall test. Which is the dependent variable?`,
      'Each student’s recall test score.',
      ['Whether a student used retrieval practice or rereading.', 'The number of students assigned to retrieval practice.', 'The researcher’s method of assigning participants.'],
      'The dependent variable is the measured outcome. The study strategy is the independent variable.'
    ),
    (a, b) => question(
      `Over ${a + 3} sessions, a sound is paired with a puff of air that naturally causes blinking. After a ${b + 2}-minute break, the sound alone elicits blinking. What is the role of the sound at the time of the test?`,
      'Conditioned stimulus', ['Unconditioned stimulus', 'Conditioned response', 'Unconditioned response'],
      'The sound acquired the ability to elicit blinking through its pairing with the puff of air.'
    ),
    (a, b) => question(
      `Researchers survey ${a * 15} students from ${b} classrooms. More hours of sleep are associated with higher attention scores. Why can the researchers only conclude there is an association?`,
      'They did not assign sleep levels and rule out competing explanations.',
      ['An association is only valid when it is negative.', 'A larger sample would establish the cause automatically.', 'Attention scores cannot serve as an outcome measure.'],
      'The observational design leaves open the possibility of confounding variables or reverse causation.'
    )
  ],
  'calculus-ab': [
    (a, b) => question(
      `If f(x) = (${a}x + ${b})³, what is f′(0)?`,
      3 * a * b ** 2, [3 * a * b, 3 * a * b ** 2 + 1, -3 * a * b ** 2],
      'Apply the chain rule. The derivative is 3(ax + b)² · a, which at zero is 3ab².'
    ),
    (a, b) => question(
      `A particle has velocity v(t) = ${a}t − ${a * b} on 0 ≤ t ≤ ${2 * b}. What is the total distance traveled?`,
      a * b ** 2, [0, a * b ** 2 / 2, 2 * a * b ** 2],
      'Velocity changes sign at the midpoint. The area under the speed graph is the sum of two triangles, each with base b and height ab.'
    ),
    (a, b) => question(
      `The population P satisfies dP/dt = ${a}P and P(0) = ${b}. Which expression gives P(t)?`,
      `${b}e^(${a}t)`, [`${b} + ${a}t`, `${b}e^(−${a}t)`, `${b}e^(${a + 1}t)`],
      'A rate proportional to the current value has exponential solutions. The initial value is the coefficient and the proportionality constant is the exponent’s rate.'
    )
  ],
  macroeconomics: [
    (a, b) => question(
      `In the simple spending multiplier model, the marginal propensity to save is 0.25. Government purchases rise by $${a * 4} billion while autonomous consumption falls by $${b * 4} billion. What is the total change in equilibrium output?`,
      '$' + 16 * (a - b) + ' billion',
      ['$' + (4 * (a - b) + 4) + ' billion', '$' + (16 * (a - b) + 8) + ' billion', '$' + 16 * (a + b) + ' billion'],
      'Net autonomous spending changes by the difference between the two amounts. Multiply that change by 1/0.25 = 4.'
    ),
    (a, b) => question(
      `The labor force contains ${a * 100} thousand people, of whom ${a * b} thousand are unemployed and actively looking for work. What is the unemployment rate?`,
      percent(b), [percent(b / 10), percent(100 - b), percent(2 * b)],
      'Divide the number of unemployed workers by the labor force, then multiply by 100.'
    ),
    (a, b) => {
      const start = a * 100;
      const change = a * b;
      const end = start + change;
      const item = question(
        `The GDP deflator increases from ${start} to ${end}. By what percentage did the overall price level rise?`,
        percent(b), [percent(b / 10), percent(100 + b), percent(2 * b)],
        `The index rose by ${change}, since ${end} − ${start} = ${change}. Divide the rise by the starting index: ${change} ÷ ${start} = ${b / 100}. Express that fraction as a percentage: ${percent(b)}.`
      );
      item.choiceExplanations = [
        null,
        `${percent(b / 10)} of ${start} is only ${change / 10} index points. The actual rise was ${change} index points.`,
        `${percent(100 + b)} compares the entire ending index to the starting index. The question asks for just the increase, so subtract the starting index first.`,
        `${percent(2 * b)} of ${start} would be an increase of ${2 * change} index points, twice the actual change.`
      ];
      return item;
    }
  ]
};

export function variantAt(course, offset) {
  const formats = templates[course];
  const capacity = formats.length * perTemplate;
  if (offset >= capacity) return null;
  const index = offset * 137 % capacity;
  const sequence = Math.floor(index / formats.length);
  const a = 2 + sequence % width;
  const b = 2 + Math.floor(sequence / width);
  return formats[index % formats.length](a, b);
}
