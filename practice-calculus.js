// Original AP Calculus AB practice questions, written for Fivey in the style of the AP exam.
// Each unit mixes concept questions, graph and table questions, and calculation questions
// whose wrong answers come from common mistakes.
// Questions are multiple choice with the correct answer listed first; the practice page shuffles the choices.

// Hand-written questions: [family, prompt, correct, wrong, wrong, wrong, explanation] or a graph object.
const written = [
  // Unit 1: Limits and Continuity
  [
    ['concept', 'If lim x→3⁻ f(x) = 5 and lim x→3⁺ f(x) = 5, but f(3) = 2, which statement is true?', 'lim x→3 f(x) = 5, and f is not continuous at x = 3.', 'lim x→3 f(x) = 2, and f is continuous at x = 3.', 'lim x→3 f(x) does not exist.', 'f is continuous at x = 3 because both one-sided limits exist.', 'The two one-sided limits agree, so the limit is 5, but it does not equal f(3), so f is discontinuous there.'],
    ['concept', 'Which three conditions together mean that f is continuous at x = c?', 'f(c) is defined, lim x→c f(x) exists, and lim x→c f(x) = f(c).', 'f(c) is defined and f is differentiable at c.', 'The one-sided limits at c both exist.', 'f(c) = 0 and the limit at c exists.', 'This is the definition of continuity at a point.'],
    ['concept', 'f is continuous on [1, 5] with f(1) = −2 and f(5) = 6. Which must be true?', 'f(c) = 0 for at least one c in (1, 5).', 'f′(c) = 2 for some c in (1, 5).', 'f has a maximum value of 6 on [1, 5].', 'f is increasing on [1, 5].', 'By the Intermediate Value Theorem, f takes every value between −2 and 6, including 0.'],
    ['concept', 'What kind of discontinuity does f(x) = (x² − 4)/(x − 2) have at x = 2?', 'A removable discontinuity (a hole)', 'A jump discontinuity', 'An infinite discontinuity (a vertical asymptote)', 'No discontinuity', 'The factor (x − 2) cancels, so the graph has a hole at x = 2.'],
    ['concept', 'Which function has a vertical asymptote at x = 3?', 'f(x) = (x + 1)/(x − 3)', 'f(x) = (x² − 9)/(x − 3)', 'f(x) = (x − 3)/(x + 1)', 'f(x) = x² − 3', 'The denominator is zero at x = 3 while the numerator is 4, so the function grows without bound.'],
    ['concept', 'What is lim x→0 (sin x)/x?', '1', '0', 'The limit does not exist.', '∞', 'This is a standard limit; the ratio approaches 1 as x approaches 0.'],
    ['concept', 'What is lim x→∞ (5x³ − 2x)/(2x³ + 7)?', '5/2', '0', '∞', '−2/7', 'The degrees are equal, so the limit is the ratio of the leading coefficients, 5/2.'],
    ['concept', 'If lim x→a⁻ f(x) = 4 and lim x→a⁺ f(x) = 7, what is lim x→a f(x)?', 'It does not exist.', '4', '7', '5.5', 'The one-sided limits disagree, so the two-sided limit does not exist.'],
    ['concept', 'Which statement about the Squeeze Theorem is correct?', 'If g(x) ≤ f(x) ≤ h(x) near a and lim g = lim h = L at a, then lim x→a f(x) = L.', 'If f(x) ≤ g(x), then lim f = lim g.', 'It guarantees that f is differentiable at a.', 'It only applies to polynomial functions.', 'A function trapped between two functions with the same limit must share that limit.'],
    ['concept', 'For which value of k is f(x) = { kx + 1 for x < 2; x² for x ≥ 2 } continuous at x = 2?', 'k = 3/2', 'k = 2', 'k = 4', 'k = 1/2', 'Continuity requires 2k + 1 = 4, so k = 3/2.'],
    { family: 'graph', context: 'The graph shows a function f. The open circle marks a hole in the graph, and the filled point shows the value of f(1).', plot: { type: 'line', xLabel: 'x', yLabel: 'f(x)', x: [-2, -1, 0, 1, 2, 3, 4], series: [{ name: 'f', values: [-1, 0, 1, 2, 3, 4, 5] }], markers: { open: 3, point: 4 } }, prompt: 'What are lim x→1 f(x) and f(1)?', choices: ['lim x→1 f(x) = 2 and f(1) = 4', 'lim x→1 f(x) = 4 and f(1) = 2', 'Both equal 2.', 'The limit does not exist, and f(1) = 4.'], explanation: 'The graph approaches the hole at height 2 from both sides, but the filled point puts f(1) at 4.' },
    { family: 'graph', context: 'The graph shows values of a function g as x grows.', plot: { type: 'line', xLabel: 'x', yLabel: 'g(x)', x: [1, 2, 3, 4, 5, 6], series: [{ name: 'g', values: [5, 3.5, 2.75, 2.38, 2.19, 2.09] }] }, prompt: 'Which value of lim x→∞ g(x) do the data suggest?', choices: ['2', '0', '5', 'The limit does not exist.'], explanation: 'The values level off toward 2, suggesting a horizontal asymptote at y = 2.' }
  ],
  // Unit 2: Differentiation: Definition and Fundamental Properties
  [
    ['concept', 'Which expression is the definition of f′(a)?', 'lim h→0 [f(a + h) − f(a)]/h', 'lim h→0 [f(a + h) − f(a)]', '[f(b) − f(a)]/(b − a)', 'lim h→∞ [f(a + h) − f(a)]/h', 'The derivative is the limit of the difference quotient as h approaches 0.'],
    ['concept', 'If f is differentiable at x = a, which must be true?', 'f is continuous at x = a.', 'f′(a) = 0.', 'f has a maximum at x = a.', 'f is not continuous at x = a.', 'Differentiability implies continuity (but not the reverse).'],
    ['concept', 'At which kind of point can a continuous function fail to be differentiable?', 'A corner, a cusp, or a vertical tangent', 'Any point where f(x) = 0', 'Any point where the graph is increasing', 'Any point where the graph crosses the x-axis', 'A derivative fails to exist where the graph has a sharp turn or a vertical tangent line.'],
    ['concept', 'What is the derivative of f(x) = eˣ + ln x?', 'eˣ + 1/x', 'eˣ + ln x', 'x·eˣ⁻¹ + 1/x', 'eˣ − 1/x', 'd/dx eˣ = eˣ, and d/dx ln x = 1/x.'],
    ['concept', 'What is the derivative of f(x) = sin x · cos x?', 'cos²x − sin²x', '−sin x cos x', 'cos x − sin x', '−sin²x', 'Product rule: (cos x)(cos x) + (sin x)(−sin x).'],
    ['concept', 'What is d/dx (tan x)?', 'sec²x', 'cot x', '−csc²x', 'sec x tan x', 'This is the standard derivative of tangent.'],
    ['concept', 'The average rate of change of f on [a, b] equals', '[f(b) − f(a)]/(b − a)', '[f′(b) − f′(a)]/(b − a)', 'f′((a + b)/2)', '[f(b) + f(a)]/2', 'Average rate of change is the slope of the secant line.'],
    ['concept', 'What is the derivative of f(x) = 7?', '0', '7', '7x', '1', 'The derivative of a constant is zero.'],
    ['concept', 'If f(x) = x/eˣ, what is f′(x)?', '(1 − x)/eˣ', '1/eˣ', '(x − 1)/eˣ', '−x/eˣ', 'Quotient rule: (eˣ − x·eˣ)/e²ˣ = (1 − x)/eˣ.'],
    ['concept', 'Which expression equals lim h→0 [(2 + h)³ − 8]/h?', 'The derivative of x³ at x = 2, which is 12', '0', '8', 'The limit does not exist.', 'It is f′(2) for f(x) = x³, and f′(2) = 3·2² = 12.'],
    { family: 'graph', context: 'The graph of f consists of three line segments.', plot: { type: 'line', xLabel: 'x', yLabel: 'f(x)', x: [0, 2, 4, 6], series: [{ name: 'f', values: [1, 5, 5, -1] }] }, prompt: 'What is f′(5)?', choices: ['−3', '2', '0', '−1'], explanation: 'On (4, 6) the segment falls from 5 to −1, so the slope is −6/2 = −3.' },
    { family: 'graph', context: 'The graph of a continuous function g is shown.', plot: { type: 'line', xLabel: 'x', yLabel: 'g(x)', x: [0, 1, 2, 3, 4], series: [{ name: 'g', values: [2, 1, 0, 1, 2] }] }, prompt: 'At which value of x is g not differentiable?', choices: ['x = 2', 'x = 0', 'x = 1', 'g is differentiable everywhere.'], explanation: 'The graph has a corner at x = 2, where the slope jumps from −1 to 1.' }
  ],
  // Unit 3: Composite, Implicit, and Inverse Functions
  [
    ['concept', 'What is d/dx [sin(3x²)]?', '6x cos(3x²)', 'cos(3x²)', '6x cos(6x)', '3x² cos(3x²)', 'Chain rule: cos(3x²) times the derivative of 3x², which is 6x.'],
    ['concept', 'What is d/dx [e^(5x)]?', '5e^(5x)', 'e^(5x)', '5x·e^(5x − 1)', 'e⁵', 'Chain rule: e^(5x) times 5.'],
    ['concept', 'What is d/dx [ln(x² + 1)]?', '2x/(x² + 1)', '1/(x² + 1)', '2x ln(x² + 1)', '1/(2x)', 'Chain rule: 1/(x² + 1) times 2x.'],
    ['concept', 'If x² + y² = 25, what is dy/dx?', '−x/y', 'x/y', '−y/x', '2x + 2y', 'Differentiate implicitly: 2x + 2y·dy/dx = 0, so dy/dx = −x/y.'],
    ['concept', 'If g is the inverse of f, f(2) = 5, and f′(2) = 4, what is g′(5)?', '1/4', '4', '1/5', '1/2', 'g′(f(a)) = 1/f′(a), so g′(5) = 1/f′(2) = 1/4.'],
    ['concept', 'What is d/dx [arctan x]?', '1/(1 + x²)', '1/√(1 − x²)', 'sec²x', '−1/(1 + x²)', 'This is the standard derivative of the inverse tangent.'],
    ['concept', 'What is d/dx [arcsin x]?', '1/√(1 − x²)', '1/(1 + x²)', '−1/√(1 − x²)', 'cos x', 'This is the standard derivative of the inverse sine.'],
    ['concept', 'If y = cos(x³), what is dy/dx?', '−3x² sin(x³)', '3x² sin(x³)', '−sin(3x²)', '−sin(x³)', 'Chain rule: −sin(x³) times 3x².'],
    ['concept', 'For the curve xy = 6, what is dy/dx at the point (2, 3)?', '−3/2', '3/2', '−2/3', '6', 'Implicitly, y + x·dy/dx = 0, so dy/dx = −y/x = −3/2.'],
    ['concept', 'If f(x) = x³ − 2x, what is f″(x)?', '6x', '3x² − 2', '6x − 2', '6', 'f′(x) = 3x² − 2, and differentiating again gives 6x.'],
    { family: 'graph', context: 'The graph of f consists of two line segments. Let h(x) = f(2x).', plot: { type: 'line', xLabel: 'x', yLabel: 'f(x)', x: [0, 1, 2, 3, 4], series: [{ name: 'f', values: [0, 3, 6, 7, 8] }] }, prompt: 'What is h′(0.5)?', choices: ['6', '3', '1.5', '2'], explanation: 'h′(x) = 2f′(2x), so h′(0.5) = 2f′(1) = 2(3) = 6.' },
    { family: 'graph', context: 'The graph of a one-to-one function f is shown. Let g be the inverse of f.', plot: { type: 'line', xLabel: 'x', yLabel: 'f(x)', x: [0, 1, 2, 3, 4], series: [{ name: 'f', values: [0, 3, 6, 7, 8] }] }, prompt: 'What is g′(3)?', choices: ['1/3', '3', '1', '1/6'], explanation: 'f(1) = 3 and f′(1) = 3, so g′(3) = 1/f′(1) = 1/3.' }
  ],
  // Unit 4: Contextual Applications of Differentiation
  [
    ['concept', 'A particle’s position is s(t). What does s′(t) represent?', 'The particle’s velocity', 'The particle’s acceleration', 'The total distance traveled', 'The particle’s speed squared', 'The derivative of position with respect to time is velocity.'],
    ['concept', 'A particle is speeding up at time t when', 'its velocity and acceleration have the same sign', 'its acceleration is positive', 'its velocity is positive', 'its position is increasing', 'Speed increases when velocity and acceleration point the same way.'],
    ['concept', 'W(t) is the amount of water in a tank, in gallons, t minutes after noon. What does W′(10) = −3 mean?', 'At 12:10, the amount of water is decreasing at 3 gallons per minute.', 'At 12:10, the tank holds 3 gallons.', 'Over the first 10 minutes, 3 gallons drained.', 'The tank will be empty in 3 minutes.', 'A derivative is an instantaneous rate of change with units of gallons per minute.'],
    ['concept', 'The tangent line to f at x = a is used to approximate f(a + 0.1). If f is concave up near a, the approximation is', 'an underestimate', 'an overestimate', 'exactly correct', 'impossible to classify', 'When f is concave up, its tangent lines lie below the graph.'],
    ['concept', 'Which condition allows L’Hôpital’s Rule to be applied to lim x→a f(x)/g(x)?', 'The limit has the form 0/0 or ∞/∞.', 'f and g are both polynomials.', 'g(a) ≠ 0.', 'The limit has the form 0 · ∞ only.', 'L’Hôpital’s Rule applies directly only to the indeterminate forms 0/0 and ∞/∞.'],
    ['concept', 'What is lim x→0 (e^(3x) − 1)/x?', '3', '1', '0', 'The limit does not exist.', 'It has the form 0/0; by L’Hôpital’s Rule it equals lim 3e^(3x)/1 = 3.'],
    ['concept', 'The radius of a circle increases at 2 cm/s. How fast is the area increasing when the radius is 5 cm?', '20π cm²/s', '10π cm²/s', '25π cm²/s', '4π cm²/s', 'dA/dt = 2πr·dr/dt = 2π(5)(2) = 20π.'],
    ['concept', 'A particle’s velocity is v(t) = t² − 4t + 3. When is the particle at rest?', 't = 1 and t = 3', 't = 2 only', 't = 0 only', 't = −1 and t = −3', 'Set v(t) = (t − 1)(t − 3) = 0.'],
    ['concept', 'If P(t) is a population, in thousands, and t is in years, what are the units of P′(t)?', 'Thousands of people per year', 'Thousands of people', 'Years per thousand people', 'Thousands of people per year squared', 'Units of a derivative are output units per input unit.'],
    ['concept', 'Using the tangent line to f(x) = √x at x = 9, what is the approximation of √9.2?', '3.033', '3.067', '3.100', '3.200', 'L(x) = 3 + (1/6)(x − 9), so L(9.2) = 3 + 0.2/6 ≈ 3.033.'],
    { family: 'graph', context: 'The graph shows the position s(t), in meters, of a particle moving along a line.', plot: { type: 'line', xLabel: 't (seconds)', yLabel: 's(t) (meters)', x: [0, 1, 2, 3, 4, 5, 6], series: [{ name: 's', values: [0, 4, 6, 6, 4, 0, -2] }] }, prompt: 'On which interval is the particle moving left (in the negative direction)?', choices: ['3 < t < 6', '0 < t < 3', '0 < t < 2', '5 < t < 6 only'], explanation: 'The particle moves left when s is decreasing, which happens from t = 3 to t = 6.' },
    { family: 'graph', context: 'The graph shows the velocity v(t), in m/s, of a particle.', plot: { type: 'line', xLabel: 't (seconds)', yLabel: 'v(t) (m/s)', x: [0, 1, 2, 3, 4, 5], series: [{ name: 'v', values: [-2, 0, 2, 2, 0, -2] }] }, prompt: 'What is the particle’s acceleration at t = 1.5?', choices: ['2 m/s²', '1 m/s²', '0 m/s²', '−2 m/s²'], explanation: 'Acceleration is the slope of v; from t = 1 to t = 2, v rises from 0 to 2, a slope of 2.' }
  ],
  // Unit 5: Analytical Applications of Differentiation
  [
    ['concept', 'The Mean Value Theorem guarantees a value c with f′(c) = [f(b) − f(a)]/(b − a) when', 'f is continuous on [a, b] and differentiable on (a, b)', 'f is differentiable at a and b only', 'f(a) = f(b)', 'f is increasing on [a, b]', 'These are the hypotheses of the Mean Value Theorem.'],
    ['concept', 'If f′(c) = 0 and f″(c) < 0, then f has', 'a relative maximum at x = c', 'a relative minimum at x = c', 'a point of inflection at x = c', 'no conclusion possible', 'By the second derivative test, a horizontal tangent on a concave-down graph is a maximum.'],
    ['concept', 'If f′ changes from negative to positive at x = c, then f has', 'a relative minimum at x = c', 'a relative maximum at x = c', 'a point of inflection at x = c', 'a vertical asymptote at x = c', 'f decreases then increases, so f has a local minimum (first derivative test).'],
    ['concept', 'A point of inflection of f occurs where', 'f″ changes sign', 'f′ = 0', 'f changes sign', 'f″ = 0, whether or not it changes sign', 'Concavity must actually change at an inflection point.'],
    ['concept', 'If f″(x) > 0 on an interval, then on that interval', 'f is concave up, and f′ is increasing', 'f is increasing', 'f′ is decreasing', 'f is concave down', 'A positive second derivative means the slope is increasing.'],
    ['concept', 'According to the Extreme Value Theorem, a function is guaranteed to have both an absolute maximum and minimum on [a, b] if it is', 'continuous on [a, b]', 'differentiable on (a, b) only', 'increasing on [a, b]', 'defined at a and b', 'Continuity on a closed interval guarantees absolute extrema.'],
    ['concept', 'To find the absolute maximum of a continuous function on [a, b], you should', 'compare f at the critical points in (a, b) and at the endpoints', 'check only where f′ = 0', 'check only the endpoints', 'check only where f″ = 0', 'The candidates test compares all critical points and endpoints.'],
    ['concept', 'If f′(x) = (x − 2)²(x + 1), at which x does f have a relative extremum?', 'x = −1 only', 'x = 2 only', 'x = −1 and x = 2', 'No relative extrema', 'f′ changes sign only at x = −1; (x − 2)² does not change sign.'],
    ['concept', 'If f(1) = 3, f(5) = 11, and f is differentiable, which must be true for some c in (1, 5)?', 'f′(c) = 2', 'f′(c) = 0', 'f(c) = 7', 'f′(c) = 8', 'By the MVT, f′(c) = (11 − 3)/(5 − 1) = 2.'],
    ['concept', 'Where is f(x) = x³ − 3x² concave down?', 'x < 1', 'x > 1', '0 < x < 2', 'x < 0', 'f″(x) = 6x − 6 < 0 when x < 1.'],
    { family: 'graph', context: 'The graph shows f′, the derivative of a function f.', plot: { type: 'line', xLabel: 'x', yLabel: 'f′(x)', x: [-3, -2, -1, 0, 1, 2, 3], series: [{ name: 'f′', values: [4, 2, 0, -2, -1, 0, 3] }] }, prompt: 'At which value of x does f have a relative maximum?', choices: ['x = −1', 'x = 2', 'x = 0', 'x = −3'], explanation: 'f′ changes from positive to negative at x = −1.' },
    { family: 'graph', context: 'The graph shows f′, the derivative of a function f.', plot: { type: 'line', xLabel: 'x', yLabel: 'f′(x)', x: [-3, -2, -1, 0, 1, 2, 3], series: [{ name: 'f′', values: [4, 2, 0, -2, -1, 0, 3] }] }, prompt: 'On which interval is the graph of f concave up?', choices: ['0 < x < 3', '−3 < x < 0', '−1 < x < 2', '2 < x < 3 only'], explanation: 'f is concave up where f′ is increasing, which is from x = 0 to x = 3.' }
  ],
  // Unit 6: Integration and Accumulation of Change
  [
    ['concept', 'If F′(x) = f(x), what does the Fundamental Theorem of Calculus say about ∫ₐᵇ f(x) dx?', 'It equals F(b) − F(a).', 'It equals F(a) − F(b).', 'It equals f(b) − f(a).', 'It equals F′(b) − F′(a).', 'A definite integral equals the change in an antiderivative.'],
    ['concept', 'If g(x) = ∫₁ˣ cos(t²) dt, what is g′(x)?', 'cos(x²)', 'sin(x²)', '2x cos(x²)', 'cos(x²) − cos(1)', 'By the second part of the FTC, g′(x) equals the integrand evaluated at x.'],
    ['concept', 'What is ∫ (1/x) dx for x > 0?', 'ln x + C', '−1/x² + C', 'x⁰ + C', 'eˣ + C', 'The derivative of ln x is 1/x.'],
    ['concept', 'What is ∫ cos x dx?', 'sin x + C', '−sin x + C', 'cos x + C', '−cos x + C', 'The derivative of sin x is cos x.'],
    ['concept', 'If f is increasing on [a, b], how does a left Riemann sum compare with ∫ₐᵇ f(x) dx?', 'It is an underestimate.', 'It is an overestimate.', 'It is exact.', 'It depends on the number of subintervals.', 'Left endpoints of an increasing function give rectangle heights below the curve.'],
    ['concept', 'What does ∫ₐᵇ r(t) dt represent if r(t) is the rate water flows into a tank, in liters per hour?', 'The net liters of water that flow in from t = a to t = b', 'The rate of flow at time b', 'The average flow rate', 'The amount of water in the tank at time b', 'Integrating a rate gives the net change in the quantity.'],
    ['concept', 'If ∫₀⁵ f(x) dx = 8, what is ∫₅⁰ f(x) dx?', '−8', '8', '0', '1/8', 'Reversing the limits of integration changes the sign.'],
    ['concept', 'Which substitution makes ∫ 2x·e^(x²) dx easier?', 'u = x²', 'u = 2x', 'u = e^(x²)', 'u = e', 'With u = x², du = 2x dx, and the integral becomes ∫ eᵘ du.'],
    ['concept', 'What is ∫ (3x² + 4) dx?', 'x³ + 4x + C', '6x + C', 'x³ + C', '3x³ + 4x + C', 'Integrate term by term with the power rule.'],
    ['concept', 'If f is concave up on [a, b], how does the trapezoidal approximation compare with ∫ₐᵇ f(x) dx?', 'It is an overestimate.', 'It is an underestimate.', 'It is exact.', 'It cannot be determined.', 'Trapezoid tops are secant lines, which lie above a concave-up curve.'],
    { family: 'graph', context: 'The graph of f consists of line segments.', plot: { type: 'line', xLabel: 'x', yLabel: 'f(x)', x: [0, 1, 2, 3, 4, 5, 6], series: [{ name: 'f', values: [2, 2, 0, -2, -2, 0, 2] }] }, prompt: 'What is ∫₀³ f(x) dx?', choices: ['2', '3', '0', '−2'], explanation: 'Area from 0 to 1 is 2, from 1 to 2 is 1, and from 2 to 3 is −1, giving 2.' },
    { family: 'graph', context: 'The graph of f consists of line segments. Let g(x) = ∫₀ˣ f(t) dt.', plot: { type: 'line', xLabel: 'x', yLabel: 'f(x)', x: [0, 1, 2, 3, 4, 5, 6], series: [{ name: 'f', values: [2, 2, 0, -2, -2, 0, 2] }] }, prompt: 'At what value of x does g attain its maximum on [0, 6]?', choices: ['x = 2', 'x = 1', 'x = 5', 'x = 6'], explanation: 'g increases while f > 0 (up to x = 2) and then decreases; g(2) = 3 is larger than g(6) = 0.' }
  ],
  // Unit 7: Differential Equations
  [
    ['concept', 'Which describes the general solution of dy/dt = ky?', 'y = Ce^(kt)', 'y = kt + C', 'y = Ct^k', 'y = e^(kt) + C', 'Separating variables gives ln|y| = kt + C, so y = Ce^(kt).'],
    ['concept', 'A slope field for dy/dx = x − y has horizontal segments where', 'y = x', 'x = 0', 'y = 0', 'y = −x', 'Slopes are zero when x − y = 0.'],
    ['concept', 'What is the first step in solving dy/dx = xy² by separation of variables?', 'Rewrite it as dy/y² = x dx.', 'Integrate both sides with respect to x immediately.', 'Multiply both sides by y².', 'Set dy/dx = 0.', 'Separation puts all y terms with dy and all x terms with dx.'],
    ['concept', 'A quantity grows at a rate proportional to its size. Which differential equation models it?', 'dP/dt = kP', 'dP/dt = k', 'dP/dt = kt', 'dP/dt = P + k', 'Proportional growth means the rate equals a constant times the amount.'],
    ['concept', 'Which function is a solution to y′ = 3y?', 'y = 5e^(3x)', 'y = 3e^x', 'y = e^(3x) + 5', 'y = 3x', 'y′ = 15e^(3x) = 3(5e^(3x)).'],
    ['concept', 'Newton’s law of cooling says dT/dt = −k(T − A). What does A represent?', 'The temperature of the surroundings', 'The initial temperature of the object', 'The rate of cooling', 'The time when cooling stops', 'The object’s temperature approaches the ambient temperature A.'],
    ['concept', 'For dy/dx = 2x with y(0) = 3, what is the particular solution?', 'y = x² + 3', 'y = x² ', 'y = 2x + 3', 'y = x² − 3', 'Integrate to get y = x² + C, and y(0) = 3 gives C = 3.'],
    ['concept', 'For dy/dx = y − 2, what happens to a solution with y(0) = 2?', 'It stays constant at y = 2.', 'It grows without bound.', 'It decreases to 0.', 'It oscillates.', 'At y = 2 the slope is 0, so y = 2 is an equilibrium solution.'],
    ['concept', 'If dy/dx = x²y and y > 0, what is the sign of the slope at the point (−1, 3)?', 'Positive', 'Negative', 'Zero', 'Undefined', 'The slope is (−1)²(3) = 3 > 0.'],
    ['concept', 'A population is modeled by P(t) = 200e^(0.05t). What is P′(t)/P(t)?', '0.05', '200', '10', '0.05t', 'For exponential models, the relative growth rate is the constant k = 0.05.'],
    { family: 'graph', context: 'The graph shows a solution y(t) to a differential equation of the form dy/dt = ky.', plot: { type: 'line', xLabel: 't', yLabel: 'y', x: [0, 3, 6, 9, 12], series: [{ name: 'y', values: [5, 10, 20, 40, 80] }] }, prompt: 'Which value is closest to k?', choices: ['0.231', '2', '0.5', '3'], explanation: 'y doubles every 3 units, so e^(3k) = 2 and k = ln 2 ÷ 3 ≈ 0.231.' },
    { family: 'graph', context: 'The graph shows the temperature of a cup of tea cooling in a room.', plot: { type: 'line', xLabel: 'Time (minutes)', yLabel: 'Temperature (°C)', x: [0, 5, 10, 15, 20, 25], series: [{ name: 'T', values: [90, 70, 56, 46, 39, 34] }] }, prompt: 'Which model best fits the graph if the room is 20°C?', choices: ['dT/dt = −k(T − 20), k > 0', 'dT/dt = k(T − 20), k > 0', 'dT/dt = −kT², k > 0', 'dT/dt = −k, k > 0'], explanation: 'The rate of cooling slows as the tea approaches room temperature, so the rate is proportional to T − 20.' }
  ],
  // Unit 8: Applications of Integration
  [
    ['concept', 'The average value of a continuous function f on [a, b] is', '(1/(b − a)) ∫ₐᵇ f(x) dx', '[f(a) + f(b)]/2', '∫ₐᵇ f(x) dx', '[f(b) − f(a)]/(b − a)', 'The average value divides the integral by the length of the interval.'],
    ['concept', 'A particle has velocity v(t). Which expression gives the total distance traveled from t = a to t = b?', '∫ₐᵇ |v(t)| dt', '∫ₐᵇ v(t) dt', '|∫ₐᵇ v(t) dt|', 'v(b) − v(a)', 'Total distance counts motion in both directions, so integrate speed.'],
    ['concept', 'If the region under y = f(x) from x = a to x = b is rotated about the x-axis, the volume is', 'π ∫ₐᵇ [f(x)]² dx', '∫ₐᵇ [f(x)]² dx', '2π ∫ₐᵇ f(x) dx', 'π ∫ₐᵇ f(x) dx', 'Disk method: each cross section is a circle of radius f(x).'],
    ['concept', 'The area between y = f(x) and y = g(x) from x = a to x = b, where f(x) ≥ g(x), is', '∫ₐᵇ [f(x) − g(x)] dx', '∫ₐᵇ [g(x) − f(x)] dx', '∫ₐᵇ f(x)g(x) dx', '∫ₐᵇ f(x) dx · ∫ₐᵇ g(x) dx', 'Integrate the top curve minus the bottom curve.'],
    ['concept', 'A solid has a base on the region R, and its cross sections perpendicular to the x-axis are squares. The volume is', '∫ (side length)² dx over R', 'π ∫ (side length)² dx', '∫ (side length) dx', '½ ∫ (side length)² dx', 'Each square slice has area (side)².'],
    ['concept', 'For the washer method rotating about the x-axis with outer radius R(x) and inner radius r(x), the volume is', 'π ∫ [R(x)² − r(x)²] dx', 'π ∫ [R(x) − r(x)]² dx', 'π ∫ R(x)² dx', '2π ∫ [R(x) − r(x)] dx', 'Subtract the hole’s area from the outer disk’s area.'],
    ['concept', 'A particle starts at x = 4 with velocity v(t). Its position at time T is', '4 + ∫₀ᵀ v(t) dt', '∫₀ᵀ v(t) dt', '4 + v(T)', '4 · ∫₀ᵀ v(t) dt', 'Position = initial position + net change from integrating velocity.'],
    ['concept', 'What is the average value of f(x) = x² on [0, 3]?', '3', '9', '4.5', '1', '(1/3) ∫₀³ x² dx = (1/3)(9) = 3.'],
    ['concept', 'When finding area by integrating with respect to y, the integrand is', 'right curve minus left curve, written as functions of y', 'top curve minus bottom curve, written as functions of x', 'left curve minus right curve', 'the product of the two curves', 'Horizontal slices run from the left boundary to the right boundary.'],
    ['concept', 'If a region is rotated about the line y = 2 instead of the x-axis, the radius of each disk is', 'the distance from the curve to y = 2', 'f(x)', 'f(x) + 2', '2', 'The radius is measured from the axis of rotation.'],
    { family: 'graph', context: 'The graph shows the velocity v(t), in m/s, of a particle.', plot: { type: 'line', xLabel: 't (seconds)', yLabel: 'v(t) (m/s)', x: [0, 1, 2, 3, 4, 5, 6], series: [{ name: 'v', values: [0, 4, 4, 0, -2, -2, 0] }] }, prompt: 'What is the total distance the particle travels from t = 0 to t = 6?', choices: ['12 m', '4 m', '8 m', '16 m'], explanation: 'Forward area = 2 + 4 + 2 = 8 m; backward area = 1 + 2 + 1 = 4 m; total distance = 12 m.' },
    { family: 'graph', context: 'The graph shows the velocity v(t), in m/s, of a particle.', plot: { type: 'line', xLabel: 't (seconds)', yLabel: 'v(t) (m/s)', x: [0, 1, 2, 3, 4, 5, 6], series: [{ name: 'v', values: [0, 4, 4, 0, -2, -2, 0] }] }, prompt: 'What is the particle’s displacement from t = 0 to t = 6?', choices: ['4 m', '12 m', '8 m', '0 m'], explanation: 'Displacement = 8 m forward − 4 m backward = 4 m.' }
  ]
];

// ---------- Formatting helpers ----------

const SUPERSCRIPTS = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻' };
const SUBSCRIPTS = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉', '-': '₋' };
const sup = value => String(value).split('').map(ch => SUPERSCRIPTS[ch] ?? ch).join('');
const sub = value => String(value).split('').map(ch => SUBSCRIPTS[ch] ?? ch).join('');
const integral = (a, b) => (/^-?\d+$/.test(String(a)) && /^-?\d+$/.test(String(b)) ? '∫' + sub(a) + sup(b) : `∫ from ${a} to ${b}`);
const paren = value => (value < 0 ? `(${fr(value)})` : fr(value));

// Three significant figures.
function num(value, digits = 3) {
  if (!Number.isFinite(value)) return 'NaN';
  if (Math.abs(value) < 1e-12) return '0';
  const text = Math.abs(value) >= 10 ** digits ? Math.round(value).toLocaleString('en-US') : String(Number(value.toPrecision(digits)));
  return text.replace(/^-/, '−');
}

// Exact fractions such as 3/4 and −5/2 when the value is rational with a small denominator.
function fr(value) {
  if (!Number.isFinite(value)) return 'NaN';
  for (let q = 1; q <= 60; q++) {
    const p = value * q;
    if (Math.abs(p - Math.round(p)) < 1e-9) {
      const top = Math.round(p);
      return (top < 0 ? '−' : '') + Math.abs(top) + (q === 1 ? '' : '/' + q);
    }
  }
  return num(value);
}

// Multiples of π: 6π, π/2, 8π/3.
function piText(value) {
  if (Math.abs(value) < 1e-12) return '0';
  const text = fr(value);
  if (!/^−?\d+(\/\d+)?$/.test(text)) return num(value * Math.PI);
  const negative = text.startsWith('−');
  const [top, bottom] = text.replace('−', '').split('/');
  return (negative ? '−' : '') + (top === '1' ? '' : top) + 'π' + (bottom ? '/' + bottom : '');
}

// Polynomials from [coefficient, power] pairs: 3x² − 4x + 1.
function poly(terms, variable = 'x') {
  let out = '';
  for (const [c, p] of terms) {
    if (c === 0) continue;
    const abs = Math.abs(c);
    const coefficient = abs === 1 && p !== 0 ? '' : fr(abs);
    const body = p === 0 ? coefficient : coefficient + variable + (p === 1 ? '' : sup(p));
    out += out ? (c < 0 ? ' − ' : ' + ') + body : (c < 0 ? '−' : '') + body;
  }
  return out || '0';
}
const signed = value => (value < 0 ? '− ' + fr(-value) : '+ ' + fr(value));
const evalPoly = (terms, x) => terms.reduce((sum, [c, p]) => sum + c * x ** p, 0);
const derivative = terms => terms.filter(([, p]) => p > 0).map(([c, p]) => [c * p, p - 1]);
const antiderivative = terms => terms.map(([c, p]) => [c / (p + 1), p + 1]);

// All combinations of the given lists, in order.
const product = (...lists) => lists.reduce((rows, list) => rows.flatMap(row => list.map(item => [...row, item])), [[]]);
const each = (lists, build) => product(...lists).map(values => build(...values, values.join('_')));

// Three different wrong options from a pool, chosen by position so the set stays stable.
function others(pool, correct, index) {
  const rest = pool.filter(item => item !== correct);
  return [0, 1, 2].map(step => rest[(index + step) % rest.length]);
}

// The correct value followed by the first three distinct wrong values from a list of likely mistakes.
function options(correct, candidates, format = fr) {
  const out = [format(correct)];
  for (const value of [...candidates, correct * 2, correct / 2, correct + 1, -correct, correct - 1]) {
    if (typeof value === 'number' && !Number.isFinite(value)) continue;
    const text = typeof value === 'string' ? value : format(value);
    if (out.includes(text) || /NaN/.test(text)) continue;
    out.push(text);
    if (out.length === 4) break;
  }
  return out;
}

// Builds one question; returns null unless there are four distinct choices.
function make(n, family, key, prompt, choices, explanation, extra = {}) {
  // Negative numbers printed straight from JavaScript use a hyphen; show a true minus sign instead.
  // "x − −1" reads better as "x + 1", and "5 + −3" as "5 − 3".
  const minus = text => String(text).replace(/(^|[\s(=<>,/:])-(?=\d)/g, '$1−').replace(/ − −(?=\d)/g, ' + ').replace(/ \+ −(?=\d)/g, ' − ');
  choices = choices.map(minus);
  if (choices.length !== 4 || new Set(choices).size !== 4 || choices.some(choice => /NaN|Infinity|undefined/.test(choice))) return null;
  return { id: 'calc-' + n + '-' + family + '-' + key, family, prompt: minus(prompt), choices, answer: 0, explanation: minus(explanation), ...extra };
}

const DNE = 'The limit does not exist.';

// ---------- Generated questions by unit ----------

const generators = {
  // Unit 1: Limits and Continuity
  1: n => [
    ...each([[1, 2, 3, -2], [-3, -1, 4, 5]], (a, b, key) => {
      const numerator = poly([[1, 2], [-(a + b), 1], [a * b, 0]]);
      return make(n, 'calc-removable-limit', key, `What is lim x→${fr(a)} (${numerator})/(${poly([[1, 1], [-a, 0]])})?`,
        options(a - b, [0, a + b, DNE, b - a]),
        `Factor: (x ${signed(-a)})(x ${signed(-b)})/(x ${signed(-a)}) = x ${signed(-b)} for x ≠ ${fr(a)}, so the limit is ${fr(a)} ${signed(-b)} = ${fr(a - b)}.`);
    }),
    ...each([[2, 3, 6, -4], [[2, 2], [1, 3], [3, 2], [3, 3]]], (p, [top, bottom], key) => {
      const q = 5 - Math.abs(p) % 3;
      const expression = `(${poly([[p, top], [1, 0]])})/(${poly([[q, bottom], [-5, 0]])})`;
      const infinite = top > bottom ? (p > 0 ? '∞' : '−∞') : null;
      const answer = top === bottom ? fr(p / q) : top < bottom ? '0' : infinite;
      const pool = [fr(p / q), '0', '∞', '−∞', fr(q / p), fr(p)];
      return make(n, 'calc-limit-infinity', key, `What is lim x→∞ ${expression}?`,
        [answer, ...others(pool, answer, Math.abs(p) + top)],
        top === bottom ? `Equal degrees: the limit is the ratio of the leading coefficients, ${fr(p)} ÷ ${q} = ${fr(p / q)}.` : top < bottom ? 'The denominator has the higher degree, so the fraction approaches 0.' : `The numerator has the higher degree, so the fraction grows without bound toward ${infinite}.`);
    }),
    ...each([[2, 3, -1], [1, -4], [1, 2]], (a, b, c, key) => {
      const k = a * c + b - c * c;
      return make(n, 'calc-continuity-constant', key, `Let f(x) = ${poly([[a, 1], [b, 0]])} for x < ${c} and f(x) = x² + k for x ≥ ${c}. For what value of k is f continuous at x = ${c}?`,
        options(k, [a * c + b, a * c + b + c * c, c * c - a * c - b, a + b]),
        `Match the pieces at x = ${c}: ${fr(a * c + b)} = ${c * c} + k, so k = ${fr(k)}.`);
    }),
    ...each([[1, -2, 4, 5], [2, 3, -1]], (p, q, key) => make(n, 'reason-vertical-asymptote', key, `Where does the graph of f(x) = (${poly([[2, 1], [p, 0]])})/(${poly([[1, 1], [-q, 0]])}) have a vertical asymptote?`,
      [`x = ${fr(q)}`, `x = ${fr(-q)}`, `x = ${fr(-p / 2)}`, 'y = 2'],
      `The denominator is zero at x = ${fr(q)} while the numerator is ${fr(2 * q + p)} ≠ 0.`)),
    ...each([[1, -2, 4, 5], [2, 3, -1]], (p, q, key) => make(n, 'reason-horizontal-asymptote', key, `What is the horizontal asymptote of f(x) = (${poly([[3 + (p > 0 ? 1 : 0), 1], [p, 0]])})/(${poly([[1, 1], [-q, 0]])})?`,
      [`y = ${3 + (p > 0 ? 1 : 0)}`, `x = ${fr(q)}`, 'y = 0', `y = ${fr(p)}`],
      `The degrees are equal, so y = ${3 + (p > 0 ? 1 : 0)}/1.`)),
    ...[[2, 1], [3, 1], [5, 2], [4, 3], [6, 5], [1, 4], [7, 2], [3, 4]].map(([a, b]) => make(n, 'calc-trig-limit', a + '_' + b, `What is lim x→0 sin(${a === 1 ? '' : a}x)/(${b === 1 ? '' : b}x)?`,
      options(a / b, [b / a, 0, 1, DNE]),
      `Rewrite as (${fr(a)}/${b})·[sin(${a}x)/(${a}x)] → ${fr(a / b)} · 1 = ${fr(a / b)}.`)),
    ...[[2, 3], [5, 1], [3, 4], [4, 6]].map(([a, b]) => make(n, 'calc-trig-ratio-limit', a + '_' + b, `What is lim x→0 sin(${a === 1 ? '' : a}x)/sin(${b === 1 ? '' : b}x)?`,
      options(a / b, [b / a, 1, 0, DNE]),
      `Divide top and bottom by x: (${a}·1)/(${b}·1) = ${fr(a / b)}.`)),
    ...each([[[1, 4], [2, 9], [-3, 5]], [[0, 'yes'], [1, 'yes'], [2, 'no'], [3, 'no']]], ([low, high], [pick], key) => {
      const target = [low + 1, Math.round((low + high) / 2), high + 2, low - 3][pick];
      const inside = target > Math.min(low, high) && target < Math.max(low, high);
      const choices = ['Yes, by the Intermediate Value Theorem.', 'Not necessarily, because the value is not between f(1) and f(4).', 'Yes, by the Mean Value Theorem.', 'No, because f must be differentiable.'];
      const correct = inside ? choices[0] : choices[1];
      return make(n, 'reason-ivt', key, `f is continuous on [1, 4] with f(1) = ${fr(low)} and f(4) = ${fr(high)}. Must there be a value c in (1, 4) with f(c) = ${fr(target)}?`,
        [correct, ...choices.filter(c => c !== correct).slice(0, 3)],
        inside ? `${fr(target)} lies between ${fr(low)} and ${fr(high)}, so the IVT guarantees such a c.` : `${fr(target)} is not between ${fr(low)} and ${fr(high)}, so the IVT does not apply; f might never reach it.`);
    }),
    ...[[2, 3, -1], [-1, 4, 2], [3, -2, 5], [1, 1, -3], [-2, 0, 4], [4, -1, 1]].flatMap(([slope, start, point], g) => {
      const x = [-1, 0, 1, 2, 3, 4];
      const values = x.map(v => start + slope * (v + 1));
      const hole = 2 + (g % 3);
      const plot = { type: 'line', xLabel: 'x', yLabel: 'f(x)', x, series: [{ name: 'f', values }], markers: { open: hole, point } };
      const context = `The graph shows a function f. The open circle is a hole, and the filled point at x = ${x[hole]} shows the value of f(${x[hole]}).`;
      const limit = values[hole];
      return [
        make(n, 'graph-limit', g + '_lim', `What is lim x→${x[hole]} f(x)?`,
          options(limit, [point, DNE, values[hole + 1] ?? values[hole - 1]]),
          `Both sides of the graph approach the hole at height ${fr(limit)}; the filled point does not affect the limit.`, { plot, context }),
        make(n, 'graph-limit', g + '_val', `What is f(${x[hole]})?`,
          options(point, [limit, 'f is undefined there.', values[hole - 1]]),
          `The filled point shows f(${x[hole]}) = ${fr(point)}, even though the limit is ${fr(limit)}.`, { plot, context })
      ];
    }),
    ...each([[[2, 1], [-1, 2], [3, 0]], [-2, 1, 3, 4]], ([c, d], at, key) => {
      const terms = [[1, 3], [-c, 1], [d, 0]];
      const value = evalPoly(terms, at);
      return make(n, 'calc-direct-limit', key, `What is lim x→${fr(at)} (${poly(terms)})?`,
        options(value, [DNE, evalPoly(terms, -at), 0, at ** 3]),
        `Polynomials are continuous, so substitute: ${fr(value)}.`);
    }),
    ...[[2, 1, 1, 3, 1], [3, -2, 4, -5, 1], [1, 4, 2, 2, 2], [-1, 5, 3, -2, 2], [2, 3, 1, 5, 2], [4, -1, 2, 1, 1], [1, 1, -1, 3, 1], [3, 0, 1, 2, 3], [-2, 6, 1, 0, 2], [2, -3, 3, -5, 1], [5, 2, 1, 6, 1], [1, -2, 2, -3, 1]].map(([a, b, d, e, c], index) => {
      const left = a * c + b;
      const right = d * c + e;
      const answer = left === right ? fr(left) : DNE;
      return make(n, 'calc-piecewise-limit', String(index), `Let f(x) = ${poly([[a, 1], [b, 0]])} for x < ${c} and f(x) = ${poly([[d, 1], [e, 0]])} for x ≥ ${c}. What is lim x→${c} f(x)?`,
        [answer, ...[fr(left), fr(right), fr(left + right), DNE, '0'].filter(v => v !== answer).filter((v, i, all) => all.indexOf(v) === i).slice(0, 3)],
        `From the left the limit is ${fr(left)}; from the right it is ${fr(right)}. ${left === right ? 'They agree, so the limit is ' + fr(left) + '.' : 'They differ, so the two-sided limit does not exist.'}`);
    })
  ],

  // Unit 2: Differentiation: Definition and Fundamental Properties
  2: n => [
    ...each([[[3, 4, -2, 2, 5], [2, 3, 5, 1, -1], [-1, 4, 6, 2, 3], [4, 2, -3, 1, 7]], [-1, 1, 2, 3]], ([a, p, b, q, c], at, key) => {
      const terms = [[a, p], [b, q], [c, 0]];
      const slope = evalPoly(derivative(terms), at);
      return make(n, 'calc-power-rule', key, `If f(x) = ${poly(terms)}, what is f′(${fr(at)})?`,
        options(slope, [evalPoly(terms, at), evalPoly([[a * p, p], [b * q, q]], at), evalPoly(derivative(terms), -at), a * p + b * q]),
        `f′(x) = ${poly(derivative(terms))}, so f′(${fr(at)}) = ${fr(slope)}.`);
    }),
    ...[[[2, 3], [-5, 2], [7, 1], [1, 0]], [[4, 5], [3, 2], [-1, 0]], [[-3, 4], [2, 3], [6, 1]], [[1, 6], [-4, 3], [9, 1], [2, 0]], [[5, 2], [-8, 1], [3, 0]], [[2, 7], [-3, 2], [-4, 0]], [[6, 3], [1, 1]], [[-2, 5], [5, 4], [-1, 1]], [[3, 4], [-6, 2], [10, 0]], [[1, 3], [1, 2], [1, 1], [1, 0]], [[7, 2], [-7, 1]], [[-4, 3], [12, 1], [5, 0]]].map((terms, index) => {
      const right = poly(derivative(terms));
      const keepPower = poly(terms.filter(([, p]) => p > 0).map(([c, p]) => [c * p, p]));
      const noCoefficient = poly(terms.filter(([, p]) => p > 0).map(([c, p]) => [c, p - 1]));
      const keepConstant = poly([...derivative(terms), [terms.at(-1)[1] === 0 ? terms.at(-1)[0] : 1, 0]]);
      return make(n, 'calc-derivative-expression', String(index), `What is f′(x) if f(x) = ${poly(terms)}?`,
        options(right, [keepPower, noCoefficient, keepConstant, poly(antiderivative(terms))], v => v),
        `Apply the power rule to each term: f′(x) = ${right}.`);
    }),
    ...each([[2, 3, 4], [1, 2, -1, 3]], (power, a, key) => {
      const value = power * a ** (power - 1);
      return make(n, 'calc-limit-definition', key, `What is lim h→0 [(${fr(a)} + h)${sup(power)} − ${a < 0 ? '(' + fr(a) + ')' + sup(power) : fr(a) + sup(power)}]/h?`,
        options(value, [a ** power, 0, power * a ** power, DNE]),
        `This is the derivative of x${sup(power)} at x = ${fr(a)}: ${power}(${fr(a)})${sup(power - 1)} = ${fr(value)}.`);
    }),
    ...each([[[1, -3, 2], [2, 1, -4], [-1, 4, 0]], [-1, 1, 2, 3]], ([a, b, c], at, key) => {
      const terms = [[a, 2], [b, 1], [c, 0]];
      const slope = evalPoly(derivative(terms), at);
      const y0 = evalPoly(terms, at);
      const line = (m, k) => `y = ${poly([[m, 1], [k, 0]])}`;
      return make(n, 'calc-tangent-line', key, `Which is the equation of the line tangent to f(x) = ${poly(terms)} at x = ${fr(at)}?`,
        [line(slope, y0 - slope * at), line(slope, y0), line(y0, slope - y0 * at), line(slope, y0 + slope * at)].filter((v, i, all) => all.indexOf(v) === i).length === 4
          ? [line(slope, y0 - slope * at), line(slope, y0), line(y0, slope - y0 * at), line(slope, y0 + slope * at)]
          : [line(slope, y0 - slope * at), line(slope, y0 + 1), line(-slope, y0), line(slope + 1, y0)],
        `f(${fr(at)}) = ${fr(y0)} and f′(${fr(at)}) = ${fr(slope)}, so y ${signed(-y0)} = ${fr(slope)}(x ${signed(-at)}), which simplifies to ${line(slope, y0 - slope * at)}.`);
    }),
    ...each([[[1, 0, -2], [2, -1, 3], [-1, 3, 1]], [[0, 2], [1, 4], [-1, 3], [2, 5]]], ([a, b, c], [lo, hi], key) => {
      const terms = [[a, 3], [b, 2], [c, 0]];
      const rate = (evalPoly(terms, hi) - evalPoly(terms, lo)) / (hi - lo);
      return make(n, 'calc-average-rate', key, `What is the average rate of change of f(x) = ${poly(terms)} on the interval [${fr(lo)}, ${fr(hi)}]?`,
        options(rate, [evalPoly(terms, hi) - evalPoly(terms, lo), evalPoly(derivative(terms), (lo + hi) / 2), (evalPoly(derivative(terms), hi) - evalPoly(derivative(terms), lo)) / (hi - lo)]),
        `[f(${fr(hi)}) − f(${fr(lo)})]/(${fr(hi)} − ${paren(lo)}) = (${fr(evalPoly(terms, hi))} − ${paren(evalPoly(terms, lo))})/${hi - lo} = ${fr(rate)}.`);
    }),
    ...[[[0, 2, 5, 8], [150, 180, 228, 270]], [[0, 3, 4, 9], [12, 18, 21, 36]], [[1, 4, 6, 10], [40, 31, 25, 10]], [[0, 5, 10, 15], [200, 215, 245, 260]], [[2, 4, 7, 12], [8, 14, 23, 33]], [[0, 1, 3, 6], [50, 44, 38, 26]]].flatMap(([ts, vs], index) => [1, 2].map(i => {
      const rate = (vs[i + 1] - vs[i]) / (ts[i + 1] - ts[i]);
      const mid = (ts[i] + ts[i + 1]) / 2;
      const table = ts.map((t, k) => `R(${t}) = ${vs[k]}`).join(', ');
      return make(n, 'calc-table-derivative', index + '_' + i, `A differentiable function R has these values: ${table}. Using the data, what is the best estimate of R′(${fr(mid)})?`,
        options(rate, [vs[i + 1] - vs[i], (vs[3] - vs[0]) / (ts[3] - ts[0]), (vs[i + 1] + vs[i]) / 2, (vs[i] - vs[i - 1]) / (ts[i] - ts[i - 1])], v => num(v)),
        `Use the closest surrounding points: [R(${ts[i + 1]}) − R(${ts[i]})]/(${ts[i + 1]} − ${ts[i]}) = ${num(rate)}.`);
    })),
    ...each([[[3, 2, -1, 4], [5, -2, 3, 1], [-2, 4, 6, -3], [1, 7, 2, 5]], ['product', 'quotient']], ([f, fp, g, gp], kind, key) => {
      const value = kind === 'product' ? fp * g + f * gp : (fp * g - f * gp) / (g * g);
      const wrong = kind === 'product' ? [fp * gp, fp * g - f * gp, f * g] : [fp / gp, (f * gp - fp * g) / (g * g), (fp * g - f * gp) / g];
      return make(n, 'calc-product-quotient', key, `Given f(2) = ${fr(f)}, f′(2) = ${fr(fp)}, g(2) = ${fr(g)}, and g′(2) = ${fr(gp)}. If h(x) = ${kind === 'product' ? 'f(x)·g(x)' : 'f(x)/g(x)'}, what is h′(2)?`,
        options(value, wrong),
        kind === 'product' ? `Product rule: f′g + fg′ = (${fr(fp)})(${fr(g)}) + (${fr(f)})(${fr(gp)}) = ${fr(value)}.` : `Quotient rule: (f′g − fg′)/g² = [(${fr(fp)})(${fr(g)}) − (${fr(f)})(${fr(gp)})]/(${fr(g)})² = ${fr(value)}.`);
    }),
    ...[
      ['3eˣ + 2x', 0, 5, [3, 2, 1]], ['4eˣ − x²', 0, 4, [3, 0, 2]], ['5 ln x + x²', 1, 7, [5, 2, 1]], ['2 ln x − 3x', 1, -1, [2, -3, 1 / 2]],
      ['6 sin x + 2x', 0, 8, [6, 2, 0]], ['4 cos x + x', 0, 1, [4, -4, 5]], ['3 sin x − 2 cos x', 0, 3, [-2, 5, 1]], ['eˣ + ln x', 1, 3.718281828459045, [2, 1, 3]],
      ['x³ + 2 sin x', 0, 2, [1, 3, 0]], ['2eˣ + 3 cos x', 0, 2, [5, -1, 3]], ['ln x + x³', 1, 4, [1, 3, 5]], ['5x + 2 cos x', 0, 5, [7, 3, -2]]
    ].map(([f, at, value, wrong], index) => make(n, 'calc-special-derivative', String(index), `If f(x) = ${f}, what is f′(${at})?`,
      options(value, wrong, v => (Math.abs(v - 3.718281828459045) < 1e-9 ? 'e + 1' : fr(v))),
      `Differentiate each term (d/dx eˣ = eˣ, d/dx ln x = 1/x, d/dx sin x = cos x, d/dx cos x = −sin x) and substitute x = ${at}.`)),
    ...each([[1, 2, -3], [-4, 6, 2, -8]], (a, b, key) => {
      const terms = [[a, 2], [b, 1], [5, 0]];
      return make(n, 'calc-horizontal-tangent', key, `At what x-value does f(x) = ${poly(terms)} have a horizontal tangent line?`,
        options(-b / (2 * a), [b / (2 * a), -b / a, -2 * a / b, 0], v => 'x = ' + fr(v)),
        `f′(x) = ${poly(derivative(terms))} = 0 when x = ${fr(-b / (2 * a))}.`);
    }),
    ...each([[[1, 2], [2, 3], [3, 2]], [1, 2, -1, 3]], ([a, power], at, key) => {
      const slope = a * power * at ** (power - 1);
      return make(n, 'calc-normal-line', key, `What is the slope of the line normal to f(x) = ${poly([[a, power]])} at x = ${fr(at)}?`,
        options(-1 / slope, [slope, 1 / slope, -slope]),
        `The tangent slope is f′(${fr(at)}) = ${fr(slope)}, and the normal slope is its negative reciprocal, ${fr(-1 / slope)}.`);
    })
  ],

  // Unit 3: Differentiation: Composite, Implicit, and Inverse Functions
  3: n => [
    ...each([[[2, 5, 3, -1, 4], [1, 4, -2, 3, 6], [3, -1, 5, 2, -3], [0, 2, 4, -4, 1]], [1, 2, 3, 4]], ([g, gp, fpAtG, f, fp], a, key) => {
      const gi = g + a;
      const value = fpAtG * gp;
      return make(n, 'calc-chain-table', key, `For functions f and g: g(${a}) = ${gi}, g′(${a}) = ${fr(gp)}, f(${a}) = ${fr(f)}, f′(${a}) = ${fr(fp)}, and f′(${gi}) = ${fr(fpAtG)}. If h(x) = f(g(x)), what is h′(${a})?`,
        options(value, [fp * gp, fpAtG, fp * g, fpAtG + gp]),
        `Chain rule: h′(${a}) = f′(g(${a}))·g′(${a}) = f′(${gi})·${fr(gp)} = ${fr(fpAtG)}·${fr(gp)} = ${fr(value)}.`);
    }),
    ...each([[2, 3, -1], [1, -4], [3, 4], [1, 2]], (a, b, power, at, key) => {
      const inner = a * at + b;
      const value = power * a * inner ** (power - 1);
      return make(n, 'calc-chain-power', key, `If f(x) = (${poly([[a, 1], [b, 0]])})${sup(power)}, what is f′(${at})?`,
        options(value, [power * inner ** (power - 1), inner ** power, power * a * inner ** power, a * inner ** (power - 1)]),
        `f′(x) = ${power}(${poly([[a, 1], [b, 0]])})${sup(power - 1)}·${fr(a)}, so f′(${at}) = ${power}·(${fr(inner)})${sup(power - 1)}·${fr(a)} = ${fr(value)}.`);
    }),
    ...each([[1, 2, 3, 4], [1, 3, 5]], (a, c, key) => {
      const value = 2 * a / (a * a + c);
      return make(n, 'calc-chain-log', key, `If f(x) = ln(x² + ${c}), what is f′(${a})?`,
        options(value, [1 / (a * a + c), 2 * a, 1 / (2 * a), Math.log(a * a + c)], v => (Math.abs(v - Math.log(a * a + c)) < 1e-9 ? `ln ${a * a + c}` : fr(v))),
        `f′(x) = 2x/(x² + ${c}), so f′(${a}) = ${2 * a}/${a * a + c} = ${fr(value)}.`);
    }),
    ...[[3, 4], [4, 3], [5, 12], [12, 5], [6, 8], [-3, 4], [8, -6], [-5, -12], [1, 2], [2, -1], [-4, 3], [9, 12]].map(([x, y], index) => make(n, 'calc-implicit-circle', String(index), `For the curve x² + y² = ${x * x + y * y}, what is dy/dx at the point (${fr(x)}, ${fr(y)})?`,
      options(-x / y, [x / y, -y / x, y / x, 2 * x + 2 * y]),
      `2x + 2y·dy/dx = 0, so dy/dx = −x/y = −(${fr(x)})/(${fr(y)}) = ${fr(-x / y)}.`)),
    ...[[2, 3], [1, 6], [-2, 4], [3, -5], [4, 2], [-1, -7], [5, 1], [6, -2]].map(([x, y], index) => make(n, 'calc-implicit-product', String(index), `For the curve xy = ${x * y}, what is dy/dx at the point (${fr(x)}, ${fr(y)})?`,
      options(-y / x, [y / x, -x / y, x / y, x * y]),
      `y + x·dy/dx = 0, so dy/dx = −y/x = ${fr(-y / x)}.`)),
    ...[[1, 2], [2, 1], [-1, 3], [3, -1], [2, 2], [1, -3], [0, 2], [4, -1]].map(([x, y], index) => {
      const slope = -(2 * x + y) / (x + 2 * y);
      return make(n, 'calc-implicit-mixed', String(index), `For the curve x² + xy + y² = ${x * x + x * y + y * y}, what is dy/dx at the point (${fr(x)}, ${fr(y)})?`,
        options(slope, [-(2 * x) / (2 * y), (2 * x + y) / (x + 2 * y), -(x + 2 * y) / (2 * x + y), -x / y]),
        `2x + y + x·dy/dx + 2y·dy/dx = 0, so dy/dx = −(2x + y)/(x + 2y) = ${fr(slope)}.`);
    }),
    ...each([[[2, 5, 4], [1, 3, -2], [3, 7, 6], [0, 4, 5]], [0, 1, 2]], ([a, b, m], shift, key) => {
      const fa = b + shift;
      const slope = m + shift;
      return make(n, 'calc-inverse-derivative', key, `f is differentiable and one-to-one with f(${a}) = ${fa} and f′(${a}) = ${fr(slope)}. If g is the inverse of f, what is g′(${fa})?`,
        options(1 / slope, [slope, 1 / a, a, -1 / slope]),
        `g′(f(a)) = 1/f′(a), so g′(${fa}) = 1/f′(${a}) = ${fr(1 / slope)}.`);
    }),
    ...each([[1, 2, 3], [1, 2, -1, 3]], (k, a, key) => {
      const value = k / (1 + k * k * a * a);
      return make(n, 'calc-arctan-derivative', key, `If f(x) = arctan(${k === 1 ? '' : k}x), what is f′(${fr(a)})?`,
        options(value, [1 / (1 + k * k * a * a), k / (1 + a * a), k * a / (1 + k * k * a * a), -value]),
        `f′(x) = ${k}/(1 + ${k === 1 ? '' : k * k}x²), so f′(${fr(a)}) = ${fr(value)}.`);
    }),
    ...each([[[2, -3], [1, 4], [-1, 6], [3, 0]], [-1, 1, 2]], ([a, b], at, key) => {
      const terms = [[a, 3], [b, 2], [5, 1]];
      const second = evalPoly(derivative(derivative(terms)), at);
      return make(n, 'calc-second-derivative', key, `If f(x) = ${poly(terms)}, what is f″(${fr(at)})?`,
        options(second, [evalPoly(derivative(terms), at), 6 * a + 2 * b, evalPoly(terms, at)]),
        `f′(x) = ${poly(derivative(terms))} and f″(x) = ${poly(derivative(derivative(terms)))}, so f″(${fr(at)}) = ${fr(second)}.`);
    }),
    ...[2, 3, 4, 5].flatMap(k => [
      make(n, 'calc-chain-trig', 'sin' + k, `If f(x) = sin(${k}x), what is f′(0)?`,
        options(k, [1, 0, -k, k * k]), `f′(x) = ${k}cos(${k}x), so f′(0) = ${k}·1 = ${k}.`),
      make(n, 'calc-chain-trig', 'exp' + k, `If f(x) = e^(${k}x²), what is f′(1)?`,
        [`${2 * k}e^${k}`.replace(/\^(\d)$/, (m, d) => sup(d)), `e^${k}`.replace(/\^(\d)$/, (m, d) => sup(d)), `${k}e^${k}`.replace(/\^(\d)$/, (m, d) => sup(d)), `${2 * k}e`],
        `f′(x) = ${2 * k}x·e^(${k}x²), so f′(1) = ${2 * k}e${sup(k)}.`)
    ])
  ],

  // Unit 4: Contextual Applications of Differentiation
  4: n => [
    ...each([[[6, 9], [4, 2], [9, 15], [3, -5]], [1, 2, 3]], ([a, b], t, key) => {
      const terms = [[1, 3], [-a, 2], [b, 1]];
      const v = evalPoly(derivative(terms), t);
      return make(n, 'calc-motion-velocity', key, `A particle’s position is s(t) = ${poly(terms, 't')}. What is its velocity at t = ${t}?`,
        options(v, [evalPoly(terms, t), evalPoly(derivative(derivative(terms)), t), evalPoly(terms, t) / t]),
        `v(t) = s′(t) = ${poly(derivative(terms), 't')}, so v(${t}) = ${fr(v)}.`);
    }),
    ...each([[[6, 9], [4, 2], [9, 15], [3, -5]], [1, 2, 3]], ([a, b], t, key) => {
      const terms = [[1, 3], [-a, 2], [b, 1]];
      const acc = evalPoly(derivative(derivative(terms)), t);
      return make(n, 'calc-motion-acceleration', key, `A particle’s position is s(t) = ${poly(terms, 't')}. What is its acceleration at t = ${t}?`,
        options(acc, [evalPoly(derivative(terms), t), evalPoly(terms, t), 6 - 2 * a]),
        `a(t) = s″(t) = ${poly(derivative(derivative(terms)), 't')}, so a(${t}) = ${fr(acc)}.`);
    }),
    ...[[1, 3], [2, 5], [1, 4], [2, 6], [3, 4], [1, 6], [2, 3], [4, 5]].map(([p, q]) => make(n, 'calc-particle-at-rest', p + '_' + q, `A particle moves with velocity v(t) = ${poly([[1, 2], [-(p + q), 1], [p * q, 0]], 't')} for t ≥ 0. At what times is the particle at rest?`,
      [`t = ${p} and t = ${q}`, `t = ${fr((p + q) / 2)} only`, `t = ${p * q} only`, `t = ${-p} and t = ${-q}`],
      `v(t) = (t − ${p})(t − ${q}) = 0 at t = ${p} and t = ${q}.`)),
    ...each([[[2, 3, 'positive', 'positive'], [-4, -1, 'negative', 'negative'], [5, -2, 'positive', 'negative'], [-3, 6, 'negative', 'positive']], [1, 2, 3]], ([v, a], t, key) => {
      const speeding = v * a > 0;
      return make(n, 'reason-speeding-up', key, `At time t = ${t}, a particle has velocity ${fr(v)} m/s and acceleration ${fr(a)} m/s². Which describes the particle at that moment?`,
        [speeding ? 'It is speeding up.' : 'It is slowing down.', speeding ? 'It is slowing down.' : 'It is speeding up.', 'It is at rest.', 'Its speed is constant.'],
        `Velocity and acceleration have ${speeding ? 'the same' : 'opposite'} signs, so the speed is ${speeding ? 'increasing' : 'decreasing'}.`);
    }),
    ...each([[3, 5, 8], [2, 0.5]], (r, rate, key) => make(n, 'calc-related-circle', key, `The radius of a circle increases at ${fr(rate)} cm/s. How fast is the area increasing when the radius is ${r} cm?`,
      options(2 * r * rate, [r * rate, 2 * rate, r * r * rate, 4 * r * rate], v => piText(v) + ' cm²/s'),
      `A = πr², so dA/dt = 2πr·dr/dt = 2π(${r})(${fr(rate)}) = ${piText(2 * r * rate)} cm²/s.`)),
    ...each([[2, 3, 5], [1, 2]], (r, rate, key) => make(n, 'calc-related-sphere', key, `The radius of a spherical balloon increases at ${rate} cm/s. How fast is its volume increasing when the radius is ${r} cm?`,
      options(4 * r * r * rate, [4 / 3 * r ** 3 * rate, 4 * r * rate, 2 * r * r * rate, r * r * rate], v => piText(v) + ' cm³/s'),
      `V = (4/3)πr³, so dV/dt = 4πr²·dr/dt = 4π(${r})²(${rate}) = ${piText(4 * r * r * rate)} cm³/s.`)),
    ...each([[2, 4, 5], [3, 0.5]], (s, rate, key) => make(n, 'calc-related-cube', key, `Each edge of a cube grows at ${fr(rate)} cm/min. How fast is the volume growing when an edge is ${s} cm?`,
      options(3 * s * s * rate, [s ** 3 * rate, 3 * s * rate, s * s * rate, 6 * s * rate], v => fr(v) + ' cm³/min'),
      `V = s³, so dV/dt = 3s²·ds/dt = 3(${s})²(${fr(rate)}) = ${fr(3 * s * s * rate)} cm³/min.`)),
    ...[[10, 6, 2], [10, 8, 1], [13, 5, 3], [13, 12, 0.5], [25, 7, 2], [25, 24, 1]].map(([L, x, rate]) => {
      const y = Math.sqrt(L * L - x * x);
      const dy = -x * rate / y;
      return make(n, 'calc-related-ladder', `${L}_${x}`, `A ${L}-foot ladder leans against a wall. Its base slides away from the wall at ${fr(rate)} ft/s. How fast is the top sliding down the wall when the base is ${x} ft from the wall?`,
        options(dy, [-rate, x * rate / L, -y * rate / x, rate], v => fr(v) + ' ft/s'),
        `x² + y² = ${L * L}; with x = ${x}, y = ${fr(y)}. Then 2x·dx/dt + 2y·dy/dt = 0, so dy/dt = −(${x})(${fr(rate)})/${fr(y)} = ${fr(dy)} ft/s (moving down).`);
    }),
    ...each([[[5, 3], [-2, 4], [10, -1], [7, 0.5]], [0.1, 0.2, -0.3]], ([value, slope], h, key) => {
      const approx = value + slope * h;
      return make(n, 'calc-linearization', key, `f(2) = ${fr(value)} and f′(2) = ${fr(slope)}. Using the tangent line at x = 2, what is the approximation of f(${num(2 + h)})?`,
        options(approx, [value + slope, slope * (2 + h), value - slope * h, value * h + slope], v => num(v, 4)),
        `L(x) = ${fr(value)} + ${fr(slope)}(x − 2), so L(${num(2 + h)}) = ${fr(value)} + ${fr(slope)}(${num(h)}) = ${num(approx, 4)}.`);
    }),
    ...[[4, 0.1], [9, 0.3], [16, 0.4], [25, -0.5], [36, 0.6], [49, -0.7]].map(([a, d]) => {
      const root = Math.sqrt(a);
      const approx = root + d / (2 * root);
      return make(n, 'calc-root-approx', String(a), `Use the tangent line to f(x) = √x at x = ${a} to approximate √${num(a + d, 4)}.`,
        options(approx, [root + d, root + d / root, root + d / (4 * root), root], v => num(v, 4)),
        `L(x) = ${root} + (1/${2 * root})(x − ${a}), so L(${num(a + d, 4)}) = ${root} + ${num(d)}/${2 * root} ≈ ${num(approx, 4)}.`);
    }),
    ...[[3, 1], [5, 2], [2, 4], [4, 3], [6, 2], [1, 5], [7, 3], [3, 4]].map(([a, b]) => make(n, 'calc-lhopital', a + '_' + b, `What is lim x→0 (e^(${a}x) − 1)/sin(${b === 1 ? '' : b}x)?`,
      options(a / b, [b / a, a, 1, DNE]),
      `The limit has the form 0/0. By L’Hôpital’s Rule it equals lim ${a}e^(${a}x)/${b === 1 ? 'cos x' : `(${b} cos(${b}x))`} = ${fr(a / b)}.`)),
    ...each([[['W(t)', 'gallons', 'minutes', [[-1, 2], [12, 1], [40, 0]]], ['P(t)', 'thousand people', 'years', [[0.5, 2], [3, 1], [100, 0]]], ['H(t)', 'degrees Celsius', 'hours', [[-2, 2], [8, 1], [15, 0]]], ['V(t)', 'cubic meters', 'days', [[1, 3], [-6, 2], [20, 0]]]], [1, 2, 4]], ([name, units, time, terms], t, key) => {
      const rate = evalPoly(derivative(terms), t);
      const fn = name.split('(')[0];
      return make(n, 'calc-rate-in-context', key, `${name} = ${poly(terms, 't')} measures an amount in ${units}, where t is in ${time}. What is ${fn}′(${t}), and what are its units?`,
        [`${fr(rate)} ${units} per ${time.replace(/s$/, '')}`, `${fr(evalPoly(terms, t))} ${units}`, `${fr(rate)} ${units}`, `${fr(-rate)} ${units} per ${time.replace(/s$/, '')}`],
        `${fn}′(t) = ${poly(derivative(terms), 't')}, so ${fn}′(${t}) = ${fr(rate)} ${units} per ${time.replace(/s$/, '')}.`);
    }),
    ...each([[[1, -4, 3], [2, 1, -6], [-1, 6, 0], [1, 0, -12]], [[0, 2], [1, 3], [2, 5]]], ([a, b, c], [t1, t2], key) => {
      const terms = [[a, 3], [b, 2], [c, 1]];
      const average = (evalPoly(terms, t2) - evalPoly(terms, t1)) / (t2 - t1);
      return make(n, 'calc-average-velocity', key, `A particle’s position is s(t) = ${poly(terms, 't')}. What is its average velocity from t = ${t1} to t = ${t2}?`,
        options(average, [evalPoly(terms, t2) - evalPoly(terms, t1), (evalPoly(derivative(terms), t1) + evalPoly(derivative(terms), t2)) / 2, evalPoly(derivative(terms), (t1 + t2) / 2)]),
        `Average velocity = [s(${t2}) − s(${t1})]/(${t2} − ${t1}) = (${fr(evalPoly(terms, t2))} − ${paren(evalPoly(terms, t1))})/${t2 - t1} = ${fr(average)}.`);
    })
  ],

  // Unit 5: Analytical Applications of Differentiation
  5: n => [
    ...[[1, 3], [-1, 2], [0, 4], [-2, 1], [2, 5], [-3, 0], [1, 2], [-4, -1]].flatMap(([a, b]) => {
      const terms = [[2, 3], [-3 * (a + b), 2], [6 * a * b, 1]];
      const f = poly(terms);
      return [
        make(n, 'calc-critical-points', a + '_' + b, `What are the critical points of f(x) = ${f}?`,
          [`x = ${a} and x = ${b}`, `x = ${-a} and x = ${-b}`, `x = ${fr((a + b) / 2)} only`, `x = ${a * b} and x = ${a + b}`],
          `f′(x) = 6x² ${signed(-6 * (a + b))}x ${signed(6 * a * b)} = 6(x − ${a})(x − ${b}) = 0.`.replace(/− −/g, '+ ').replace(/x − −/g, 'x + ')),
        make(n, 'reason-relative-max', a + '_' + b, `Where does f(x) = ${f} have a relative maximum?`,
          [`x = ${a}`, `x = ${b}`, `x = ${fr((a + b) / 2)}`, 'f has no relative maximum.'],
          `f′ = 6(x − ${a})(x − ${b}) is positive before x = ${a} and negative between ${a} and ${b}, so f has a relative maximum at x = ${a}.`.replace(/x − −/g, 'x + ')),
        make(n, 'reason-relative-min', a + '_' + b, `Where does f(x) = ${f} have a relative minimum?`,
          [`x = ${b}`, `x = ${a}`, `x = ${fr((a + b) / 2)}`, 'f has no relative minimum.'],
          `f′ changes from negative to positive at x = ${b}, so f has a relative minimum there.`),
        make(n, 'reason-decreasing-interval', a + '_' + b, `On which interval is f(x) = ${f} decreasing?`,
          [`${a} < x < ${b}`, `x < ${a}`, `x > ${b}`, `x < ${a} and x > ${b}`],
          `f′ = 6(x − ${a})(x − ${b}) is negative between its zeros, so f decreases on ${a} < x < ${b}.`.replace(/x − −/g, 'x + '))
      ];
    }),
    ...each([[-6, -3, 3, 6, 9, -9], [1, -2]], (b, c, key) => {
      const terms = [[1, 3], [b, 2], [c, 1]];
      return make(n, 'calc-inflection', key, `At what x-value does f(x) = ${poly(terms)} have a point of inflection?`,
        options(-b / 3, [b / 3, -b / 2, -b, 0], v => 'x = ' + fr(v)),
        `f″(x) = 6x ${signed(2 * b)} changes sign at x = ${fr(-b / 3)}.`);
    }),
    ...each([[2, -3, 5], [[0, 2], [1, 5], [-2, 4], [-1, 3]]], (k, [a, b], key) => make(n, 'calc-mvt', key, `For f(x) = ${poly([[1, 2], [k, 1]])} on [${a}, ${b}], what value of c satisfies the conclusion of the Mean Value Theorem?`,
      options((a + b) / 2, [(b - a) / 2, (a + b + k) / 2, b, a + 1], v => 'c = ' + fr(v)),
      `[f(${b}) − f(${a})]/(${b} − ${a}) = ${fr(a + b + k)}, and f′(c) = 2c ${signed(k)} equals that when c = ${fr((a + b) / 2)}.`)),
    ...each([[1, 2, 3], [[0, 4], [-1, 5], [2, 6], [-2, 3]]], (p, [a, b], key) => {
      const q = 7;
      const f = x => x * x - 2 * p * x + q;
      const candidates = [a, b, ...(p > a && p < b ? [p] : [])];
      const minValue = Math.min(...candidates.map(f));
      const maxValue = Math.max(...candidates.map(f));
      return [
        make(n, 'calc-absolute-min', key, `What is the absolute minimum value of f(x) = ${poly([[1, 2], [-2 * p, 1], [q, 0]])} on [${a}, ${b}]?`,
          options(minValue, [maxValue, f(a), f(b), p], fr),
          `Check the critical point x = ${p}${p > a && p < b ? '' : ' (outside the interval)'} and the endpoints: f(${a}) = ${fr(f(a))}, f(${b}) = ${fr(f(b))}${p > a && p < b ? `, f(${p}) = ${fr(f(p))}` : ''}. The smallest is ${fr(minValue)}.`),
        make(n, 'calc-absolute-max', key, `What is the absolute maximum value of f(x) = ${poly([[1, 2], [-2 * p, 1], [q, 0]])} on [${a}, ${b}]?`,
          options(maxValue, [minValue, f(p), p, q], fr),
          `Compare the endpoints and critical point: the largest value is ${fr(maxValue)}.`)
      ];
    }).flat(),
    ...[[-2, 1, 'min'], [3, -1, 'max'], [0, 4, 'min'], [-5, -2, 'max'], [1, 6, 'min'], [2, -4, 'max'], [-1, 3, 'min'], [4, -2, 'max']].map(([c, second, kind]) => make(n, 'reason-second-derivative-test', c + '_' + second, `f′(${c}) = 0 and f″(${c}) = ${fr(second)}. What can be concluded?`,
      [kind === 'min' ? `f has a relative minimum at x = ${c}.` : `f has a relative maximum at x = ${c}.`, kind === 'min' ? `f has a relative maximum at x = ${c}.` : `f has a relative minimum at x = ${c}.`, `f has a point of inflection at x = ${c}.`, 'No conclusion can be drawn.'],
      `f″(${c}) is ${second > 0 ? 'positive (concave up)' : 'negative (concave down)'}, so the horizontal tangent is a relative ${kind === 'min' ? 'minimum' : 'maximum'}.`)),
    ...[[-1, 2], [0, 3], [-3, 1], [1, 4], [-2, 2], [2, 5]].flatMap(([p, q], g) => {
      const x = [p - 2, p - 1, p, (p + q) / 2, q, q + 1, q + 2];
      const values = x.map(v => Number(((v - p) * (v - q) * -1).toFixed(2)));
      const plot = { type: 'line', xLabel: 'x', yLabel: 'f′(x)', x, series: [{ name: 'f′', values }] };
      const context = 'The graph shows f′, the derivative of a function f.';
      return [
        make(n, 'graph-derivative-max', String(g), 'At which value of x does f have a relative maximum?',
          [`x = ${fr(q)}`, `x = ${fr(p)}`, `x = ${fr((p + q) / 2)}`, 'f has no relative maximum.'],
          `f′ changes from positive to negative at x = ${fr(q)}.`, { plot, context }),
        make(n, 'graph-derivative-increasing', String(g), 'On which interval is f increasing?',
          [`${fr(p)} < x < ${fr(q)}`, `x < ${fr(p)}`, `x > ${fr(q)}`, `${fr((p + q) / 2)} < x < ${fr(q + 2)}`],
          `f is increasing where f′ > 0, which is between x = ${fr(p)} and x = ${fr(q)}.`, { plot, context })
      ];
    }),
    ...[[2, 'up'], [-1, 'down'], [4, 'up'], [0, 'down'], [-3, 'up'], [5, 'down'], [1, 'up'], [-2, 'down']].map(([c, way]) => make(n, 'reason-concavity', c + '_' + way, `If f″(x) = ${way === 'up' ? poly([[1, 1], [-c, 0]]) : poly([[-1, 1], [c, 0]])}, on which interval is the graph of f concave up?`,
      [way === 'up' ? `x > ${c}` : `x < ${c}`, way === 'up' ? `x < ${c}` : `x > ${c}`, 'For all x', `x = ${c} only`],
      `f is concave up where f″(x) > 0, which happens when ${way === 'up' ? `x > ${c}` : `x < ${c}`}.`))
  ],

  // Unit 6: Integration and Accumulation of Change
  6: n => [
    ...each([[[3, 2, 1], [6, -4, 0], [1, 0, -3], [3, -2, 5]], [[0, 2], [1, 3], [-1, 2], [0, 1]]], ([a, b, c], [lo, hi], key) => {
      const terms = [[a, 2], [b, 1], [c, 0]];
      const F = antiderivative(terms);
      const value = evalPoly(F, hi) - evalPoly(F, lo);
      return make(n, 'calc-definite-integral', key, `What is ${integral(lo, hi)} (${poly(terms)}) dx?`,
        options(value, [evalPoly(terms, hi) - evalPoly(terms, lo), evalPoly(F, hi), evalPoly(F, lo) - evalPoly(F, hi), evalPoly(derivative(terms), hi) - evalPoly(derivative(terms), lo)]),
        `An antiderivative is ${poly(F)}. Evaluate from ${fr(lo)} to ${fr(hi)}: ${fr(evalPoly(F, hi))} − (${fr(evalPoly(F, lo))}) = ${fr(value)}.`);
    }),
    ...[[6, 2], [8, 3], [5, 4], [12, 5], [3, 1], [-4, 3], [10, 1], [-6, 2], [7, 6], [9, 2], [2, 7], [-15, 4]].map(([a, power], index) => {
      const right = poly([[a / (power + 1), power + 1]]) + ' + C';
      return make(n, 'calc-antiderivative', String(index), `What is ∫ ${poly([[a, power]])} dx?`,
        [right, poly([[a * power, power - 1]]) + ' + C', poly([[a, power + 1]]) + ' + C', poly([[a / power, power + 1]]) + ' + C'].filter((v, i, all) => all.indexOf(v) === i).concat(poly([[a / (power + 1), power]]) + ' + C').slice(0, 4),
        `Power rule for integrals: ∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C, so the answer is ${right}.`);
    }),
    ...[[[0, 2, 5, 7, 10], [3, 8, 6, 9, 4]], [[0, 1, 3, 6, 8], [10, 14, 20, 18, 12]], [[0, 3, 4, 8, 10], [2, 5, 9, 7, 6]], [[1, 2, 5, 6, 9], [20, 16, 12, 10, 4]]].flatMap(([xs, ys], index) => {
      const widths = xs.slice(1).map((x, i) => x - xs[i]);
      const left = widths.reduce((s, w, i) => s + w * ys[i], 0);
      const right = widths.reduce((s, w, i) => s + w * ys[i + 1], 0);
      const trap = widths.reduce((s, w, i) => s + w * (ys[i] + ys[i + 1]) / 2, 0);
      const table = xs.map((x, i) => `f(${x}) = ${ys[i]}`).join(', ');
      const ask = `${integral(xs[0], xs.at(-1))} f(x) dx`;
      return [
        make(n, 'calc-riemann', index + '_left', `Values of f: ${table}. Using a left Riemann sum with the four subintervals shown, what is the approximation of ${ask}?`,
          options(left, [right, trap, ys.slice(0, 4).reduce((a, b) => a + b, 0)]), `Left sum = Σ width × left height = ${fr(left)}.`),
        make(n, 'calc-riemann', index + '_right', `Values of f: ${table}. Using a right Riemann sum with the four subintervals shown, what is the approximation of ${ask}?`,
          options(right, [left, trap, ys.slice(1).reduce((a, b) => a + b, 0)]), `Right sum = Σ width × right height = ${fr(right)}.`),
        make(n, 'calc-riemann', index + '_trap', `Values of f: ${table}. Using the trapezoidal rule with the four subintervals shown, what is the approximation of ${ask}?`,
          options(trap, [left, right, (left + right)]), `Trapezoid sum = Σ width × (average of endpoint heights) = ${fr(trap)}.`)
      ];
    }),
    ...each([[1, 3, -2, 5], [0, 2, 1]], (k, a, key) => make(n, 'calc-ftc-derivative', key, `Let g(x) = ${integral(a, 'x')} (t² ${signed(k)}) dt. What is g′(3)?`,
      options(9 + k, [9 + k - (a * a + k), 2 * 3 + 0, 27 / 3 + 3 * k - (a ** 3 / 3 + k * a), 0]),
      `By the FTC, g′(x) = x² ${signed(k)}, so g′(3) = ${fr(9 + k)}.`)),
    ...each([[1, 2, 4], [1, 2, -1, 3]], (k, at, key) => {
      const value = 2 * at * (at ** 2 * at ** 2 + k);
      return make(n, 'calc-ftc-chain', key, `Let h(x) = ${integral(1, 'x²')} (t² ${signed(k)}) dt. What is h′(${fr(at)})?`,
        options(value, [at ** 4 + k, 2 * at * (at * at + k), (at ** 4 + k) / (2 * at)]),
        `h′(x) = [(x²)² ${signed(k)}]·2x, so h′(${fr(at)}) = (${fr(at ** 4 + k)})(${fr(2 * at)}) = ${fr(value)}.`);
    }),
    ...[[2, 1, 3], [-1, 3, 2], [3, -2, 1], [1, 2, -2], [4, -1, 3], [-2, 2, 0]].flatMap(([y0, y1, y2], g) => {
      const x = [0, 1, 2, 3, 4];
      const values = [y0, y1, y2, -y1, y0 - 2];
      const plot = { type: 'line', xLabel: 'x', yLabel: 'f(x)', x, series: [{ name: 'f', values }] };
      const area = (a, b) => (values[a] + values[b]) / 2 * (b - a);
      const to2 = area(0, 1) + area(1, 2);
      const to4 = to2 + area(2, 3) + area(3, 4);
      return [
        make(n, 'graph-integral', g + '_2', `What is ${integral(0, 2)} f(x) dx?`,
          options(to2, [values[2] - values[0], Math.abs(area(0, 1)) + Math.abs(area(1, 2)), area(0, 1)]),
          `Add the signed trapezoid areas: ${fr(area(0, 1))} + ${fr(area(1, 2))} = ${fr(to2)}.`, { plot, context: 'The graph of f consists of line segments.' }),
        make(n, 'graph-integral', g + '_4', `What is ${integral(0, 4)} f(x) dx?`,
          options(to4, [to2, values[4] - values[0], [0, 1, 2, 3].reduce((s, i) => s + Math.abs(area(i, i + 1)), 0)]),
          `Sum the signed areas on each unit interval: ${[0, 1, 2, 3].map(i => fr(area(i, i + 1))).join(' + ').replace(/\+ −/g, '− ')} = ${fr(to4)}.`, { plot, context: 'The graph of f consists of line segments.' })
      ];
    }),
    ...each([[[1, 2], [3, 0], [1, 1], [2, 1]], [[0, 3], [1, 4], [0, 6]]], ([a, b], [lo, hi], key) => {
      const terms = [[a, 2], [b, 0]];
      const F = antiderivative(terms);
      const average = (evalPoly(F, hi) - evalPoly(F, lo)) / (hi - lo);
      return make(n, 'calc-average-value', key, `What is the average value of f(x) = ${poly(terms)} on [${lo}, ${hi}]?`,
        options(average, [evalPoly(F, hi) - evalPoly(F, lo), (evalPoly(terms, lo) + evalPoly(terms, hi)) / 2, (evalPoly(terms, hi) - evalPoly(terms, lo)) / (hi - lo)]),
        `Average value = (1/${hi - lo}) ${integral(lo, hi)} (${poly(terms)}) dx = ${fr(evalPoly(F, hi) - evalPoly(F, lo))}/${hi - lo} = ${fr(average)}.`);
    }),
    ...each([[[5, 3], [8, -2], [-4, 6], [7, 1]], ['ac', 'ca', 'scaled']], ([p, q], kind, key) => {
      const value = kind === 'ac' ? p + q : kind === 'ca' ? -(p + q) : 2 * (p + q) + 3 * 6;
      const ask = kind === 'ac' ? `${integral(1, 7)} f(x) dx` : kind === 'ca' ? `${integral(7, 1)} f(x) dx` : `${integral(1, 7)} [2f(x) + 3] dx`;
      return make(n, 'calc-integral-properties', key, `If ${integral(1, 4)} f(x) dx = ${fr(p)} and ${integral(4, 7)} f(x) dx = ${fr(q)}, what is ${ask}?`,
        options(value, [p - q, p + q, -(p + q), 2 * (p + q) + 3, 2 * (p + q)]),
        kind === 'ac' ? `Add adjacent intervals: ${fr(p)} + ${fr(q)} = ${fr(value)}.` : kind === 'ca' ? `Reversing the limits changes the sign: −(${fr(p + q)}) = ${fr(value)}.` : `2(${fr(p + q)}) + 3·(7 − 1) = ${fr(value)}.`);
    }),
    ...each([[1, 2], [1, 2, 3]], (b, power, key) => {
      const value = ((b * b + 1) ** (power + 1) - 1) / (power + 1);
      return make(n, 'calc-u-substitution', key, `What is ${integral(0, b)} 2x(x² + 1)${sup(power)} dx?`,
        options(value, [(b * b + 1) ** (power + 1) / (power + 1), ((b * b + 1) ** power - 1) / power, (b * b + 1) ** (power + 1) - 1]),
        `Let u = x² + 1, du = 2x dx: ∫₁^${sup(b * b + 1)} u${sup(power)} du = [u${sup(power + 1)}/${power + 1}] = ${fr(value)}.`.replace('^', ''));
    }),
    ...each([[2, 3, 5, 7], [1, 2]], (k, m, key) => make(n, 'calc-log-integral', key, `What is ${integral(1, m === 1 ? 'e' : 'e' + sup(m))} (${k}/x) dx?`,
      options(k * m, [k, m, k * (Math.E ** m - 1), k / m], v => (Math.abs(v - k * (Math.E ** m - 1)) < 1e-9 ? `${k}(e${m === 1 ? '' : sup(m)} − 1)` : fr(v))),
      `${k} ln x evaluated from 1 to e${m === 1 ? '' : sup(m)} is ${k}(${m} − 0) = ${fr(k * m)}.`)),
    ...[2, 3, 4, 5].flatMap(k => [
      make(n, 'calc-trig-integral', 'sin' + k, `What is ${integral(0, 'π')} ${k} sin x dx?`,
        options(2 * k, [0, k, -2 * k, k * Math.PI], v => (Math.abs(v - k * Math.PI) < 1e-9 ? piText(k) : fr(v))),
        `${k}[−cos x] from 0 to π = ${k}(1 + 1) = ${2 * k}.`),
      make(n, 'calc-trig-integral', 'cos' + k, `What is ${integral(0, 'π/2')} ${k} cos x dx?`,
        options(k, [0, -k, 2 * k, k * Math.PI / 2], v => (Math.abs(v - k * Math.PI / 2) < 1e-9 ? piText(k / 2) : fr(v))),
        `${k}[sin x] from 0 to π/2 = ${k}(1 − 0) = ${k}.`)
    ])
  ],

  // Unit 7: Differential Equations
  7: n => [
    ...each([[[100, 0.05], [50, 0.2], [400, -0.1], [20, 0.3]], [2, 5, 10]], ([y0, k], t, key) => {
      const value = y0 * Math.exp(k * t);
      return make(n, 'calc-exponential-model', key, `dy/dt = ${num(k)}y and y(0) = ${y0}. What is y(${t})?`,
        options(value, [y0 * (1 + k * t), y0 * Math.exp(k), y0 + Math.exp(k * t), y0 * k * t], v => num(v)),
        `The solution is y = ${y0}e^(${num(k)}t), so y(${t}) = ${y0}e^(${num(k * t)}) ≈ ${num(value)}.`);
    }),
    ...each([[['x + y', (x, y) => x + y], ['x − y', (x, y) => x - y], ['xy', (x, y) => x * y], ['x² − y', (x, y) => x * x - y]], [[1, 2], [-2, 3], [3, -1], [0, 4]]], ([label, fn], [x, y]) => {
      const key = x + '_' + y;
      const slope = fn(x, y);
      return make(n, 'calc-slope-field', ['sum', 'difference', 'product', 'square'][['x + y', 'x − y', 'xy', 'x² − y'].indexOf(label)] + '_' + key, `For the differential equation dy/dx = ${label}, what is the slope of the solution curve at the point (${fr(x)}, ${fr(y)})?`,
        options(slope, [fn(y, x), x + y === slope ? x - y : x + y, x * y === slope ? y - x : x * y, 0]),
        `Substitute x = ${fr(x)} and y = ${fr(y)}: ${fr(slope)}.`);
    }),
    ...each([[2, 3, 4], [1, 2, 3, 4]], (a, b, key) => {
      const value = Math.sqrt(b * b + a * a);
      return make(n, 'calc-separable', key, `Find the particular solution of dy/dx = x/y with y(0) = ${a} and evaluate it at x = ${b}. What is y(${b})?`,
        options(value, [a + b, Math.sqrt(a * a - b * b + 2 * b * b), a + b * b / 2, b * b + a], v => (Number.isInteger(v) ? fr(v) : Math.abs(Math.round(v * v) - v * v) < 1e-9 ? `√${Math.round(v * v)}` : num(v))),
        `y dy = x dx gives y² = x² + C; y(0) = ${a} gives C = ${a * a}, so y = √(x² + ${a * a}) and y(${b}) = ${Number.isInteger(value) ? fr(value) : '√' + Math.round(value * value)}.`);
    }),
    ...[[0.05, 'grows'], [0.1, 'grows'], [0.035, 'grows'], [0.2, 'grows'], [0.0231, 'decays'], [0.1386, 'decays'], [0.07, 'grows'], [0.0462, 'decays']].map(([k, way]) => {
      const t = Math.log(2) / k;
      return make(n, 'calc-doubling-time', String(k), `A quantity ${way} according to dy/dt = ${way === 'grows' ? '' : '−'}${num(k)}y. About how long does it take to ${way === 'grows' ? 'double' : 'fall to half its size'}?`,
        options(t, [1 / k, 2 / k, Math.log(2) * k, k * 70], v => num(v)),
        `Solve e^(${num(k)}t) = 2: t = ln 2 / ${num(k)} ≈ ${num(t)}.`);
    }),
    ...[2, 3, 4, 5, -1, -2, 0.5, 6].map(k => make(n, 'reason-verify-solution', String(k), `Which function is a solution to dy/dx = ${num(k)}y?`,
      [`y = 7e^(${num(k)}x)`, `y = ${num(k)}e^x`, `y = e^(${num(k)}x) + 7`, `y = ${num(k)}x + 7`],
      `For y = Ce^(${num(k)}x), y′ = ${num(k)}·Ce^(${num(k)}x) = ${num(k)}y. Adding a constant breaks this.`)),
    ...each([[[90, 20, 0.1], [200, 70, 0.05], [5, 25, 0.2], [100, 30, 0.08]], [5, 10, 15]], ([T0, A, k], t, key) => {
      const value = A + (T0 - A) * Math.exp(-k * t);
      return make(n, 'calc-newton-cooling', key, `An object at ${T0}°C is placed in a room at ${A}°C, and dT/dt = −${num(k)}(T − ${A}). What is its temperature after ${t} minutes?`,
        options(value, [T0 * Math.exp(-k * t), A + T0 * Math.exp(-k * t), (T0 - A) * Math.exp(-k * t), A + (T0 - A) * Math.exp(k * t)], v => num(v) + '°C'),
        `T(t) = ${A} + (${T0 - A})e^(−${num(k)}t), so T(${t}) = ${A} + ${T0 - A}e^(${num(-k * t)}) ≈ ${num(value)}°C.`);
    }),
    ...each([[3, 6, -3], [2, -1, 5], [1, 2, 3, -2]], (a, c, b, key) => {
      const value = a / 3 * b ** 3 + c;
      return make(n, 'calc-particular-solution', key, `dy/dx = ${poly([[a, 2]])} and y(0) = ${fr(c)}. What is y(${fr(b)})?`,
        options(value, [a * b ** 3 + c, 2 * a * b + c, a / 3 * b ** 3, a * b * b + c]),
        `y = ${poly([[a / 3, 3]])} + C with C = ${fr(c)}, so y(${fr(b)}) = ${fr(value)}.`);
    }),
    ...[[2, 'x'], [-3, 'x'], [1, 'y'], [4, 'y'], [-2, 'y'], [5, 'x'], [0, 'y'], [-1, 'x']].map(([c, v]) => {
      const eq = v === 'x' ? `dy/dx = ${poly([[1, 1], [-c, 0]])}` : `dy/dx = ${poly([[1, 1], [-c, 0]], 'y')}`;
      const answer = v === 'x' ? `Along the vertical line x = ${c}` : `Along the horizontal line y = ${c}`;
      const pool = [`Along the vertical line x = ${c}`, `Along the horizontal line y = ${c}`, `Along the line y = x`, `Only at the origin`, `Along the vertical line x = ${-c}`];
      return make(n, 'reason-slope-field-zero', c + v, `Where are the slopes in the slope field for ${eq} equal to zero?`,
        [answer, ...others(pool, answer, Math.abs(c))],
        `The slope is zero when ${v} ${c < 0 ? '+ ' + -c : '− ' + c} = 0, that is, ${v} = ${c}.`.replace('− 0', '= 0').replace(' = 0 = 0', ' = 0'));
    })
  ],

  // Unit 8: Applications of Integration
  8: n => [
    ...[1, 2, 3, 4, 5, 6, 8, 9].map(k => make(n, 'calc-area-parabola-line', String(k), `What is the area of the region enclosed by y = x² and y = ${k === 1 ? '' : k}x?`,
      options(k ** 3 / 6, [k ** 3 / 3, k ** 2 / 2, k ** 3 / 2, k ** 3 / 12]),
      `They intersect at x = 0 and x = ${k}. Area = ${integral(0, k)} (${k === 1 ? '' : k}x − x²) dx = ${fr(k ** 3 / 2)} − ${fr(k ** 3 / 3)} = ${fr(k ** 3 / 6)}.`)),
    ...[1, 4, 9, 16, 25, 36, 49, 64].map(a => {
      const r = Math.sqrt(a);
      return make(n, 'calc-area-under-parabola', String(a), `What is the area of the region bounded by y = ${a} − x² and the x-axis?`,
        options(4 / 3 * r ** 3, [2 / 3 * r ** 3, 2 * a * r, a * r, 8 / 3 * r ** 3]),
        `The curve meets the x-axis at x = ±${r}. Area = ${integral(-r, r)} (${a} − x²) dx = ${fr(4 / 3 * r ** 3)}.`);
    }),
    ...[1, 2, 3, 4, 5, 6, 8, 10].map(b => make(n, 'calc-volume-sqrt', String(b), `The region under y = √x from x = 0 to x = ${b} is rotated about the x-axis. What is the volume of the solid?`,
      options(b * b / 2, [b * b, b ** 1.5 * 2 / 3, b * b / 4, b], piText),
      `Disk method: π${integral(0, b)} (√x)² dx = π${integral(0, b)} x dx = ${piText(b * b / 2)}.`)),
    ...[1, 2, 3, 4, 5, 6, 9, 12].map(b => make(n, 'calc-volume-cone', String(b), `The region under y = x from x = 0 to x = ${b} is rotated about the x-axis. What is the volume of the solid?`,
      options(b ** 3 / 3, [b ** 3, b * b / 2, b ** 3 / 6, b ** 3 / 2], piText),
      `Disk method: π${integral(0, b)} x² dx = ${piText(b ** 3 / 3)}.`)),
    ...[1, 2, 3, 4, 5, 6, 8, 10].map(b => make(n, 'calc-cross-section', String(b), `A solid’s base is the region under y = √x from x = 0 to x = ${b}. Cross sections perpendicular to the x-axis are squares. What is the volume?`,
      options(b * b / 2, [b * b * Math.PI / 2, b ** 1.5 * 2 / 3, b * b / 4, b * b / 8], v => (Math.abs(v - b * b * Math.PI / 2) < 1e-9 ? piText(b * b / 2) : fr(v))),
      `Each square has side √x and area x, so V = ${integral(0, b)} x dx = ${fr(b * b / 2)}.`)),
    ...each([[1, 2, 3], [4, 5, 6, 8]], (c, T, key) => {
      if (c >= T) return null;
      const displacement = T * T / 2 - c * T;
      const distance = c * c / 2 + (T - c) ** 2 / 2;
      return [
        make(n, 'calc-displacement', key, `A particle moves with velocity v(t) = t − ${c} for 0 ≤ t ≤ ${T}. What is its displacement on this interval?`,
          options(displacement, [distance, T * T / 2, T - c, -displacement])),
        make(n, 'calc-total-distance', key, `A particle moves with velocity v(t) = t − ${c} for 0 ≤ t ≤ ${T}. What is the total distance it travels?`,
          options(distance, [displacement, T * T / 2, Math.abs(displacement), (T - c) ** 2 / 2]),
          `The particle moves backward until t = ${c} (distance ${fr(c * c / 2)}) and forward after (distance ${fr((T - c) ** 2 / 2)}), for a total of ${fr(distance)}.`)
      ].map((q, i) => q && (i === 0 ? { ...q, explanation: `Displacement = ${integral(0, T)} (t − ${c}) dt = ${fr(T * T / 2)} − ${fr(c * T)} = ${fr(displacement)}.` } : q));
    }).flat().filter(Boolean),
    ...each([[[2, 3], [4, -1], [-1, 6], [3, 0]], [[0, 2], [5, 3], [-2, 4]]], ([a, b], [x0, T], key) => {
      const position = x0 + a * T * T / 2 + b * T;
      return make(n, 'calc-position-from-velocity', key, `A particle’s velocity is v(t) = ${poly([[a, 1], [b, 0]], 't')}, and its position at t = 0 is x = ${fr(x0)}. What is its position at t = ${T}?`,
        options(position, [a * T * T / 2 + b * T, x0 + a * T + b, x0 + a * T * T + b * T, a * T + b]),
        `x(${T}) = ${fr(x0)} + ${integral(0, T)} (${poly([[a, 1], [b, 0]], 't')}) dt = ${fr(x0)} + ${fr(a * T * T / 2 + b * T)} = ${fr(position)}.`);
    }),
    ...each([[[50, 4, 'gallons', 'hour'], [120, -6, 'liters', 'minute'], [30, 2, 'cubic feet', 'second'], [200, 10, 'people', 'hour']], [2, 3, 5]], ([start, slope, units, per], T, key) => {
      const base = 3;
      const total = start + base * T + slope * T * T / 2;
      return make(n, 'calc-accumulation', key, `A tank holds ${start} ${units} at t = 0. Material flows in at r(t) = ${poly([[slope, 1], [base, 0]], 't')} ${units} per ${per}. How much is in the tank at t = ${T}?`,
        options(total, [base * T + slope * T * T / 2, start + base + slope * T, start + (base + slope * T) * T, start + slope * T]),
        `Amount = ${start} + ${integral(0, T)} (${poly([[slope, 1], [base, 0]], 't')}) dt = ${start} + ${fr(base * T + slope * T * T / 2)} = ${fr(total)} ${units}.`);
    }),
    ...[1, 2, 3, 4, 5, 6, 8, 10].map(b => make(n, 'calc-volume-parabola', String(b), `The region under y = x² from x = 0 to x = ${b} is rotated about the x-axis. What is the volume of the solid?`,
      options(b ** 5 / 5, [b ** 3 / 3, b ** 5 / 3, b ** 4 / 4, b ** 5], piText),
      `Disk method: π${integral(0, b)} (x²)² dx = π${integral(0, b)} x⁴ dx = ${piText(b ** 5 / 5)}.`)),
    ...[2, 3, 4, 5, 6, 8, 9, 12].map(T => make(n, 'calc-average-of-velocity', String(T), `A particle’s velocity is v(t) = t² for 0 ≤ t ≤ ${T}. What is its average velocity on this interval?`,
      options(T * T / 3, [T * T / 2, T ** 3 / 3, T * T, T]),
      `Average velocity = (1/${T}) ${integral(0, T)} t² dt = (1/${T})(${fr(T ** 3 / 3)}) = ${fr(T * T / 3)}.`))
  ]
};

function writtenQuestion(n, entry, index) {
  const id = 'calc-' + n + '-written-' + index;
  if (!Array.isArray(entry)) return { ...entry, id, answer: 0, family: entry.family };
  const [family, prompt, correct, a, b, c, explanation] = entry;
  return { id, family, prompt, choices: [correct, a, b, c], answer: 0, explanation };
}

const cache = new Map();

export function calculusQuestions(n) {
  if (!cache.has(n)) {
    const items = (written[n - 1] ?? []).map((entry, index) => writtenQuestion(n, entry, index));
    const generated = (generators[n]?.(n) ?? []).filter(Boolean);
    // The practice page picks one question per type in turn, and types with more questions tend to come up first.
    // Two reasoning types, four calculation types, and one graph type give each set a mix like the AP exam's.
    let reasoning = 0;
    for (const item of items) item.family = item.plot ? 'graph' : 'reasoning-' + (reasoning++ % 2);
    const reasons = [...new Set(generated.filter(item => !item.plot && item.family.startsWith('reason-')).map(item => item.family))];
    const calcs = [...new Set(generated.filter(item => !item.plot && item.family.startsWith('calc-')).map(item => item.family))];
    for (const item of generated) {
      if (item.plot) item.family = 'graph';
      else item.family = item.family.startsWith('reason-') ? 'reasoning-' + (reasons.indexOf(item.family) % 2) : 'calc-' + (calcs.indexOf(item.family) % 4);
    }
    const unique = new Map();
    for (const item of [...items, ...generated]) if (!unique.has(item.id)) unique.set(item.id, item);
    cache.set(n, [...unique.values()]);
  }
  return cache.get(n);
}
