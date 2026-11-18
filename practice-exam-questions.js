// Original practice aligned to the College Board course frameworks.
const concepts = {
  "biology": [
    null,
    [["A synthetic vesicle contains a dilute solution of impermeant solute. It is placed in a concentrated solution of the same solute. The membrane is permeable only to water. What is the predicted initial response?","The vesicle loses volume as water moves outward.","The vesicle gains volume as solute enters.","The vesicle gains volume as water moves inward.","The vesicle stays the same size because solute cannot cross.","Water tends to move toward the compartment with higher effective solute concentration."],["A fluorescent protein is made with its normal ER-targeting signal deleted. Where is most newly synthesized protein expected?","Cytosol","ER lumen","Golgi lumen","Outside the cell","Without the targeting signal, translation remains on free cytosolic ribosomes."]],
    [["Illuminated chloroplasts receive a compound that makes the thylakoid membrane freely permeable to protons without directly blocking electron transport. Which output declines most immediately?","ATP synthesis","Light absorption by chlorophyll","Photon arrival at the leaf","Initial water availability","The proton gradient provides the energy for ATP synthase."],["Plants placed under increasing light show no further increase in initial carbon fixation at the highest intensities. Which follow-up best tests whether carbon dioxide has become limiting?","Raise carbon dioxide while holding light and temperature constant.","Lower light and temperature together.","Use smaller plants at the same light.","Measure only the chlorophyll concentration.","Holding light and temperature constant isolates carbon dioxide."]],
    [["Cells expressing a receptor release a product after contact with a signal. A receptor mutant binds the signal normally but cannot activate a downstream kinase. Which result is most likely?","Signal binding with reduced product release","No signal binding with normal release","Normal release only in receptor-free cells","Increased release due to loss of kinase activity","Binding can occur without downstream signal transduction."],["Damaged cells ordinarily arrest before entering S phase. A mutant continues into S phase after the same damage. What is the likely consequence?","Replication of damaged DNA","Failure of chromosomes to duplicate before cell division","Immediate crossing over between homologs","Automatic restoration of the original DNA","Failure of the checkpoint allows damaged DNA to be replicated."]],
    [["A double heterozygote is testcrossed. The two parental phenotypes occur much more often than the two recombinant phenotypes. Which explanation fits?","The loci are linked on the same chromosome.","Both alleles at each locus are dominant.","The loci assort independently.","Crossing over occurs between every pair of sister chromatids.","Linked loci tend to be inherited together."],["A diploid cell completes meiosis I with both homologs of one chromosome in the same daughter cell. Meiosis II proceeds normally. What is expected?","Two gametes have one extra chromosome and two lack it.","Only one gamete is abnormal.","All gametes retain the normal chromosome count.","Two gametes are diploid and two are haploid.","Meiosis I nondisjunction affects both cells entering meiosis II."]],
    [["An investigator separately measures mature mRNA and protein from a gene after introducing a complementary small RNA. Mature mRNA stays constant but protein falls. Which mechanism fits?","Reduced translation of the mRNA","Reduced transcription initiation","Deletion of the coding sequence","Increased replication of the gene","A fall in protein without reduced mRNA is consistent with translation inhibition."],["A promoter mutation prevents RNA polymerase from binding. Which initial measurement should change first?","The amount of newly synthesized transcript","The order of nucleotides in unrelated genes","The number of chromosomal origins","The genetic code of the organism","Polymerase binding is needed to initiate transcription."]],
    [["Two insect populations begin with a rare resistance allele. The allele increases only in populations exposed to insecticide. Which explanation is best supported?","Resistant carriers left more offspring under exposure.","Exposure directed all susceptible insects to acquire the allele.","All alleles became equally common through random mating.","Recombination created the allele in every exposed adult.","A consistently higher reproductive success can increase an existing resistance allele."],["A storm moves a random sample of a large population to an island. A rare source allele is common in the founders. Which process best explains the immediate difference?","Genetic drift","Natural selection for the allele","Directional mutation","Assortative mating after colonization","Sampling during founding can change allele frequencies without a fitness advantage."]],
    [["In replicated mesocosms, removing predatory fish increases grazing invertebrates and decreases algae. Which explanation fits?","Fish indirectly increase algae by suppressing grazers.","Fish directly increase grazing by eating algae.","Grazers raise algal biomass when fish are absent.","Algae reduce grazing by increasing fish mortality.","The manipulation reveals a trophic cascade."],["An introduced species uses the same nesting sites as a native species. Which result most strongly supports competition for nesting sites?","Adding nest sites reduces the decline of the native species.","Both species increase after more prey is added.","Both species inhabit the same area without effects on reproduction.","The native species declines equally at sites never invaded.","Adding the suspected limiting resource should reduce competition."]]
  ],
  "chemistry": [
    [["The first four ionization energies of a main-group atom increase moderately, then a large jump occurs before the fifth. Which inference is best?","Four electrons occupy its valence shell.","The atom has five valence electrons.","The fifth electron is easier to remove.","The first ionization removes a core electron.","After removing the four valence electrons, removal of a core electron costs much more."],["Two isotopes have the same electron configuration but different masses. Which feature accounts for the mass difference?","Number of neutrons","Number of protons","Number of valence electrons","Number of occupied orbitals","Isotopes of an element differ in neutron number."]],
    [["Lewis models show BF₃ and NH₃ each having three polar bonds. Which comparison is correct?","BF₃ has no net dipole, whereas NH₃ does.","Both have no net dipole because there are three bonds.","Both have identical molecular geometry.","NH₃ is nonpolar because nitrogen has a lone pair.","The trigonal-planar bond dipoles in BF₃ cancel, unlike those in pyramidal NH₃."],["Two solids contain ions with the same charges. One has smaller interionic distances. Which property should its model predict?","Stronger electrostatic attraction","Weaker electrostatic attraction","The same attraction because their charges match","A shift from ionic to metallic bonding","Coulombic attraction strengthens as distance decreases, all else equal."]],
    [["At equal temperature, ethanol has a lower vapor pressure than a similar-mass ether that cannot donate hydrogen bonds. Which explanation fits?","Ethanol molecules attract one another more strongly.","Ethanol has weaker attractions and evaporates faster.","The ether has fewer electrons because it is a liquid.","The vapor pressure is determined by molar mass alone.","Hydrogen bonding makes escape to the vapor phase less favorable."],["A real gas at high pressure occupies more volume than the ideal-gas equation predicts. Which model feature can explain this?","Particles occupy nonnegligible volume.","Particles have zero volume.","Attractions necessarily raise the volume at every pressure.","Particles move only when they collide.","At high density, finite molecular size can dominate deviations."]],
    [["Equal volumes of aqueous AgNO₃ and excess NaCl are mixed to form a precipitate. Which equation represents the net change?","Ag⁺(aq) + Cl⁻(aq) → AgCl(s)","Na⁺(aq) + NO₃⁻(aq) → NaNO₃(s)","Ag⁺(aq) + NO₃⁻(aq) → AgNO₃(s)","Na⁺(aq) + Cl⁻(aq) → NaCl(s)","Sodium and nitrate remain spectator ions."],["A reactant in excess is doubled, with the amount of limiting reactant fixed. After complete reaction, which result follows?","The theoretical product amount is unchanged.","The theoretical product amount doubles.","The limiting reactant remains entirely unreacted.","The product amount must fall by half.","The limiting amount determines the maximum product yield."]],
    [["Doubling [A] at fixed [B] doubles the initial rate. Doubling [B] at fixed [A] quadruples it. Which rate law fits both results?","Rate = k[A][B]²","Rate = k[A]²[B]","Rate = k[A][B]","Rate = k[B]²","The measured changes establish first order in A and second order in B."],["A catalyst lowers the energy of the transition state along an alternative pathway. What happens at the same temperature?","The reaction reaches equilibrium faster.","The equilibrium constant increases.","Only the forward rate increases.","The overall reaction enthalpy changes sign.","The alternative pathway increases both rates while leaving the equilibrium constant fixed."]],
    [["An exothermic reaction warms water in a calorimeter. What sign combination applies to heat transferred between the reaction and water?","q reaction < 0 and q water > 0","Both heat transfers are negative.","Both heat transfers are positive.","q reaction > 0 and q water < 0","The reaction releases the heat gained by the water."],["An experiment loses heat to the room as an exothermic reaction warms its solution. If this loss is ignored, which bias is expected?","The magnitude of the reaction enthalpy is underestimated.","The magnitude is overestimated.","The measured solution gains more heat than the reaction releases.","The calculated temperature change is larger than in perfect insulation.","Some released heat is missing from the measured solution warming."]],
    [["For N₂O₄(g) ⇌ 2 NO₂(g), a piston rapidly halves the volume at fixed temperature. Which direction does the system shift?","Toward N₂O₄","Toward NO₂","No direction because K changes immediately","No direction because both partial pressures increase equally","Q doubles because the numerator contains a squared pressure, so Q exceeds K."],["A reaction has Q below K. Which statement describes the net change as it approaches equilibrium?","Products form until Q reaches K.","Reactants form until Q decreases.","Both rates become zero.","K decreases at fixed temperature until it equals Q.","A product-to-reactant ratio below equilibrium favors the forward change."]],
    [["Equal volumes of a weak acid and its conjugate base at equal concentrations are mixed. A small amount of strong acid is added. Which species primarily consumes the added protons?","The conjugate base","The weak acid","The spectator cation","Dissolved oxygen","The conjugate base reacts to form more weak acid."],["Weak acid titrated by strong base reaches the half-equivalence point. Which relation explains the measured pH?","pH equals pKa because acid and conjugate base have equal concentrations.","pH equals 7 because the acid is fully neutralized.","pH equals pKb because hydroxide is in large excess.","pH equals zero because equal volumes have been mixed.","The concentration ratio is one in the Henderson–Hasselbalch equation."]],
    [["A galvanic cell has a zinc electrode that loses mass and a copper electrode that gains mass. Which electron path fits?","From zinc through the external circuit to copper","From copper through the salt bridge to zinc","From copper through the external circuit to zinc","Through the solution directly from copper ions to zinc ions","Zinc is oxidized and supplies electrons to copper reduction."],["A reaction has positive ΔH and positive ΔS. At which temperatures can ΔG be negative?","Temperatures above ΔH/ΔS, in kelvins","All temperatures below ΔH/ΔS","No positive temperatures","All temperatures because entropy rises","The favorable TΔS term must exceed the enthalpy cost."]]
  ],
  "physics-1": [
    [["Two carts pass the same mark at t = 0. Cart X has constant positive velocity. Cart Y starts from rest with constant positive acceleration. When their positions next coincide, how do their speeds compare?","Y is faster than X.","Y is slower than X.","Their speeds are equal.","Their speeds cannot be compared from the given information.","Equal displacement implies equal average speed. Y accelerates from rest, so its final speed exceeds its average speed."],["On an x-versus-t graph a smooth curve is rising but flattening. Which statement follows?","Velocity is positive and acceleration is negative.","Velocity and acceleration are both positive.","Velocity is negative and acceleration is positive.","Both are zero.","Position rises, but the positive slope decreases."]],
    [["A block rests on a truck bed as the truck accelerates east. The block does not slip. What real horizontal force acts on the block?","Static friction east","Static friction west","Kinetic friction east","A force west from the block’s inertia","The block must accelerate east, and static friction supplies the horizontal force."],["A satellite moves in a circular orbit with constant speed. Which statement correctly describes the net force?","It points toward the center and changes the velocity direction.","It is zero because speed is constant.","It points tangent to the orbit and increases speed.","It points away from the center and holds the orbit open.","Centripetal acceleration changes velocity direction."]],
    [["Identical carts start from rest. A force does the same positive work on each, but one cart is pushed over twice the distance. Ignoring friction, compare their final speeds.","The final speeds are equal.","The cart pushed farther moves twice as fast.","The cart pushed farther moves half as fast.","The result depends on which push lasts longer.","Net work determines the change in kinetic energy."],["A ball rolls down a ramp and reaches a flat section where it slows. Which system boundary lets thermal energy account for mechanical energy loss internally?","Ball plus ramp and flat surface","Ball alone with friction excluded","Ramp alone with no contact included","Earth alone with no contact included","Including both surfaces makes frictional energy transfer internal to the system."]],
    [["A cart collides with a stationary cart on a frictionless track and the carts stick. Which quantities are conserved for the two-cart system during the collision?","Momentum and total energy","Kinetic energy and momentum only","Kinetic energy and each cart’s momentum","Each cart’s kinetic energy and total momentum only","Momentum is conserved and kinetic energy is transformed into internal energy."],["Two balls hit identical walls at equal incoming speed. One stops and the other rebounds at the incoming speed. For equal ball masses and contact times, which wall receives greater average force magnitude?","The wall hit by the rebounding ball","The wall hit by the stopping ball","Both receive zero average force.","Both receive the same force magnitude.","Reversal produces twice the momentum change of stopping."]],
    [["A uniform rod is hinged at one end. A student applies a force of fixed magnitude at the free end. Which direction maximizes the torque magnitude?","Perpendicular to the rod","Along the rod away from the hinge","Along the rod toward the hinge","At 30° to the rod","Torque magnitude varies as the sine of the angle between force and lever arm."],["A rigid wheel is rotating counterclockwise. A constant net clockwise torque begins acting. Before reversal, what are the directions of angular velocity and angular acceleration?","Velocity counterclockwise, acceleration clockwise","Both clockwise","Both counterclockwise","Velocity clockwise, acceleration counterclockwise","Net torque establishes angular acceleration, which can oppose the existing rotation."]],
    [["A spinning platform has negligible external torque. A rider shifts inward toward the axis. How do the system’s angular momentum and rotational kinetic energy change?","Angular momentum stays fixed and rotational kinetic energy increases.","Both stay fixed.","Angular momentum decreases and rotational kinetic energy stays fixed.","Angular momentum increases and rotational kinetic energy decreases.","The moment of inertia decreases at constant angular momentum. The rider does work, increasing rotational kinetic energy."],["Two rigid bodies roll without slipping with the same mass and center-of-mass speed. One has larger I/R². Which has greater total kinetic energy?","The one with larger I/R².","The one with smaller I/R².","They have equal total kinetic energy.","They have equal rotational kinetic energy because translational speeds match.","Rotational energy for rolling is ½(I/R²)v²."]],
    [["A block attached to an ideal horizontal spring is released from maximum displacement. At equilibrium, which pair describes the block?","Maximum speed and zero acceleration","Zero speed and maximum acceleration","Maximum speed and maximum acceleration","Zero speed and zero acceleration","The restoring force vanishes at equilibrium and kinetic energy is greatest there."],["A spring oscillator’s amplitude doubles while mass and spring constant stay fixed. What happens to the period and energy?","Period stays fixed and energy quadruples.","Period doubles and energy is unchanged.","Both double.","Period halves and energy doubles.","The period is independent of amplitude and total energy equals ½kA²."]],
    [["A sealed object floats with half its volume submerged in fresh water. It is placed in denser salt water. What changes when it settles?","Submerged fraction decreases and buoyant force stays the same.","Submerged fraction increases and buoyant force stays the same.","Submerged fraction stays fixed and buoyant force increases.","Submerged fraction decreases and buoyant force decreases.","A floating object displaces its own weight of fluid. Less volume is needed in the denser fluid."],["An incompressible fluid flows steadily through a level pipe that narrows. What happens at the narrow point in an ideal-flow model?","Speed rises and static pressure falls.","Speed falls and static pressure rises.","Both speed and static pressure rise.","Speed stays fixed and static pressure rises.","Continuity increases speed through the smaller area, and Bernoulli’s relation lowers static pressure."]]
  ],
  "calculus-ab": [
    [["A function agrees with x + 2 near x = 2 except that f(2) = 9. Which statement is true?","The limit at 2 exists and is 4, but f is discontinuous there.","The limit is 9 because that is the function value.","The limit does not exist because the value differs.","The derivative at 2 is 1 despite the discontinuity.","A point value does not affect the limit from nearby points, and differentiability implies continuity."],["A continuous function has f(0) = −1 and f(3) = 2. Which must be true?","It has at least one zero in (0, 3).","It has exactly one zero in (0, 3).","Its derivative is 1 somewhere.","It is increasing everywhere.","The Intermediate Value Theorem guarantees a zero, without uniqueness."]],
    [["For a differentiable function f, (f(2+h) − f(2))/h approaches −3. Which interpretation follows?","The tangent slope at x = 2 is −3.","The graph passes through (2, −3).","The second derivative is −3.","The average slope on every interval starting at 2 is −3.","The difference quotient approaches the instantaneous slope."],["The left and right portions of a continuous graph meet with slopes −2 and 2. What can be concluded about the join?","The derivative fails to exist there.","The derivative is their average, 0.","The derivative is 2 because the graph is continuous.","The join must be a removable discontinuity.","Different one-sided slopes prevent differentiability."]],
    [["Suppose g(x)=f(2x+1), and f′(5)=4. Which is the slope of g at x=2?","8","4","2","16","The chain rule multiplies the derivative at the inner value by 2."],["A differentiable increasing function has f(3)=7 and f′(3)=2. What is the slope of its inverse at x=7?","1/2","2","7/3","1/7","The slope of the inverse at the output is the reciprocal of the original slope at the corresponding input."]],
    [["A particle moves on a line and at some instant its velocity is negative while its acceleration is positive. Which describes its motion then?","It is moving in the negative direction and slowing down.","It is moving in the positive direction and speeding up.","It is moving in the negative direction and speeding up.","It must be stopped because the signs differ.","Velocity gives direction. Opposite velocity and acceleration signs mean speed is decreasing."],["A circular oil slick expands. Its radius increases at a constant positive rate. What happens to the rate of increase of area?","It increases as radius grows.","It stays constant because the radius rate is constant.","It decreases as radius grows.","It vanishes whenever radius is positive.","The area rate is 2πr times the radius rate."]],
    [["The sign of f′ changes from positive to negative at x=c. The sign of f″ remains negative nearby. Which statement follows?","f has a local maximum at c.","f has a local minimum at c.","f has an inflection point because f′ changes sign.","The absolute minimum must occur at c.","The first-derivative test gives a local maximum."],["A function is continuous on [a,b] and differentiable on (a,b). Its endpoint values agree. Which is guaranteed?","Some interior tangent slope is zero.","Every interior tangent slope is zero.","The function is monotonic.","An interior point has nonzero second derivative.","Rolle’s theorem yields an interior derivative of zero."]],
    [["Let A(x)=∫₀ˣ f(t)dt for a continuous f that is negative just left of c and positive just right. What happens to A at c?","A has a local minimum.","A has a local maximum.","A must equal zero.","A is discontinuous.","By the Fundamental Theorem, A′ is f and changes from negative to positive."],["A rate is positive and decreasing over an interval. Which estimate of total accumulation overestimates the exact value for an equal-width partition?","Left endpoint sum","Right endpoint sum","Both sums","Neither sum","Each left rectangle lies above the decreasing rate curve."]],
    [["A population model satisfies dP/dt=k(P−L), with k<0. If initially P<L, what does the model predict?","P increases toward L.","P decreases away from L.","P stays fixed at its initial value.","P immediately exceeds L.","Below L, both factors are negative so the derivative is positive, and L is a stable equilibrium."],["For dy/dx=x−y, what is true of a slope field along the line y=x?","All displayed slopes there are zero.","All slopes are 1.","The line is itself a solution curve.","The slopes are undefined.","The right-hand side vanishes along the line, though the line has slope 1."]],
    [["A velocity is positive on [0,2] and negative on [2,5]. Which expression gives total distance?","∫₀²v(t)dt − ∫₂⁵v(t)dt","∫₀⁵v(t)dt","−∫₀²v(t)dt + ∫₂⁵v(t)dt","The absolute value of ∫₀⁵v(t)dt in every case","Distance accumulates speed, so the negative signed area is reversed."],["The region between two positive functions is revolved about the x-axis. Which formula gives the washer area where f(x)≥g(x)?","π(f(x)²−g(x)²)","π(f(x)−g(x))²","π(f(x)²+g(x)²)","2π(f(x)−g(x))","Subtract the inner disk area from the outer disk area."]]
  ],
  "psychology": [
    [["After a motor task, a patient can describe the instructions but has trouble coordinating the fine movements required to perform it. Which structure is most directly implicated?","Cerebellum","Hypothalamus","Auditory cortex","Medulla","The cerebellum contributes to coordination and fine motor learning."],["A drug blocks reuptake of a neurotransmitter after it is released. What effect is most likely immediately at the synapse?","The transmitter stays available in the synaptic cleft longer.","The axon can no longer contain a membrane potential.","The postsynaptic neuron starts producing the drug.","Action potentials reverse their direction along every axon.","Blocking reuptake slows removal of the transmitter from the cleft."]],
    [["After hearing a misleading description, witnesses are more likely to report an object that was absent in a video. Which concept explains the pattern?","Misinformation effect","State-dependent memory","Procedural memory","Sensory adaptation","Post-event information can alter later reports of the event."],["Students learn one list of paired terms, then a second list using the same cues with different responses. At test they confuse newer responses with the original ones. Which effect is illustrated?","Retroactive interference","Proactive interference","Primacy effect","Encoding specificity","New learning interferes with recall of the earlier material."]],
    [["A child imitates how an adult solves a puzzle even though the child received no reward for watching. What best explains the imitation?","Observational learning","Negative reinforcement","Stimulus extinction","An unconditioned reflex","The child acquires a behavior by observing a model."],["A driver fastens a seat belt sooner after learning that doing so stops an unpleasant chime. Which consequence explains the increased behavior?","Negative reinforcement","Negative punishment","Positive punishment","Positive reinforcement","Removing an aversive stimulus increases the behavior."]],
    [["A person changes their public answer to agree with a group but privately keeps the original answer to avoid disapproval. Which mechanism fits?","Normative social influence","Informational social influence","Social loafing","Group polarization","Public conformity motivated by acceptance is normative."],["A supervisor assumes a late employee is irresponsible and overlooks a widely reported transit disruption. Which tendency fits?","Fundamental attribution error","Self-serving bias","Availability heuristic","Ingroup favoritism","The supervisor overweights disposition and underweights the situation."]],
    [["A therapist helps a client test the belief that making a mistake means they will fail at everything. Which approach is most directly illustrated?","Cognitive therapy","Psychodynamic free association","Medication management","Classical aversive conditioning","Testing an overgeneralized belief targets patterns of thinking."],["Someone who feels overwhelmed by a crowded schedule arranges to share responsibilities. Which coping approach is primarily illustrated?","Problem-focused coping","Emotion-focused coping","Rumination","Avoidance","The person acts on the stressor itself."]]
  ],
  "macroeconomics": [
    [["Country A gives up 2 tons of wheat for each machine. Country B gives up 5 tons. Which terms of trade can benefit both if A exports machines?","3 tons of wheat per machine","1 ton of wheat per machine","6 tons of wheat per machine","0 tons of wheat per machine","A mutually beneficial price lies between their opportunity costs."],["A decrease in the price of a substitute for good X occurs. Which effect is most likely in the market for X?","Demand shifts left.","Supply shifts left.","Demand shifts right.","Quantity demanded rises solely because the price of X rose.","Consumers switch toward the cheaper substitute."]],
    [["The number of employed people stays fixed while some unemployed workers stop actively looking for work. What happens to measured unemployment and labor-force participation?","Both rates decline.","Both rates rise.","Unemployment rises and participation falls.","Unemployment falls and participation rises.","People who stop looking no longer count as unemployed or in the labor force."],["Nominal GDP rises while real GDP stays constant. Which interpretation follows?","The GDP deflator rises.","Output volume rises with the price level unchanged.","The GDP deflator falls.","The base year must have changed.","When nominal GDP grows at constant real GDP, the implied price level rises."]],
    [["A sudden increase in energy input prices raises firms’ production costs. In the short-run AD–AS model, which outcome follows, all else equal?","Output falls and the price level rises.","Output and the price level both rise.","Output rises and the price level falls.","Output and the price level both fall.","Higher input costs shift short-run aggregate supply left."],["Households cut spending and the economy is below potential output. Which fiscal action directly raises aggregate demand?","Increase government purchases.","Reduce government purchases.","Raise household income taxes.","Raise required bank reserves.","Government purchases are a component of aggregate demand."]],
    [["A central bank in a limited-reserves system purchases securities in the open market. Which initial effect follows?","Bank reserves rise and the nominal interest rate tends to fall.","Bank reserves fall and the nominal interest rate tends to rise.","Bank reserves rise and the money supply immediately falls.","Bank reserves are unchanged because no funds enter the banking system.","Purchases add reserves and expand the money supply in the limited-reserves model."],["The market interest rate rises after a fixed-coupon bond is issued. What happens to the price of the existing bond, all else equal?","It falls.","It rises.","It remains fixed because the coupon is fixed.","It rises in exact proportion to the coupon rate.","A fixed future payment has lower present value at a higher discount rate."]],
    [["The government deficit increases. In a closed-economy loanable-funds model with unchanged private saving behavior, which result is most likely?","The real interest rate rises and private investment falls.","The real interest rate falls and private investment rises.","Both the real interest rate and private investment fall.","The interest rate is fixed because the deficit is fiscal.","Greater borrowing or lower national saving raises real interest rates and can crowd out investment."],["An economy improves productivity without changing its labor-force size. Which long-run change follows?","Potential output increases.","Potential output falls.","The natural rate of unemployment must rise.","The Phillips curve must become horizontal in the long run.","Higher productivity increases what the economy can produce with the same labor."]],
    [["The domestic currency appreciates relative to trading partners’ currencies. Holding foreign and domestic prices fixed, which effect is most likely?","Domestic exports become relatively more expensive to foreign buyers.","Domestic exports become cheaper to foreign buyers.","Imported products become more expensive for domestic buyers.","Relative prices are unchanged when exchange rates change.","A stronger domestic currency raises the foreign-currency price of domestic goods."],["A foreign investor purchases a newly issued domestic corporate bond. How is the transaction recorded for the domestic country?","A financial account inflow","A current account export of goods","A current account import of services","An official transfer without a corresponding payment","Foreign purchases of domestic assets are financial inflows."]]
  ],
  "environmental-science": [
    [["Fertilizer flows into a lake, followed by more algal biomass and lower dissolved oxygen after the bloom dies. Which mechanism best links the observations?","Decomposers consume oxygen while processing dead algae.","Dead algae release oxygen through photosynthesis.","Fertilizer converts existing oxygen into nitrogen gas directly.","The bloom permanently eliminates microbial respiration.","Decomposition of organic matter increases oxygen demand."],["The biomass available to an herbivore population falls while primary productivity rises slightly. Which finding would best explain the mismatch?","Most new production is in plant tissue the herbivores cannot digest.","Plants have increased their uptake of usable light.","Herbivores have lower energy requirements at the same food intake.","A larger fraction of primary production becomes edible.","Net production does not necessarily translate to energy accessible to consumers."]],
    [["Two equally large islands have similar habitats, but one is much closer to the mainland. Which pattern would the island biogeography model predict, all else equal?","The nearer island receives more immigrants.","The farther island receives more immigrants.","Both receive equal immigration because their areas match.","The nearer island has no extinction at all.","Isolation generally reduces immigration from a source population."],["A plant community with diverse responses to drought maintains production better than a monoculture. Which explanation fits?","Some species maintain function when others decline.","Every species must respond identically to stress.","Greater diversity prevents all water loss.","The monoculture contains more functionally distinct species.","Different responses can stabilize aggregate ecosystem function."]],
    [["A deer population grows rapidly after reintroduction, then slows near a stable abundance. Which process best explains the shape?","Competition increases as deer approach carrying capacity.","Population growth stays exponential indefinitely.","Per-capita resources rise with population density.","The limiting resource is unused at high density.","Density-dependent limits can reduce the per-capita growth rate."],["Two populations start at equal size. One has a much larger fraction of prereproductive individuals. Birth and survival schedules are otherwise alike. Which projection is best supported?","The younger population has more potential for future growth.","The younger population must immediately shrink.","They must grow identically because current sizes match.","The older population has proportionally more future entrants into reproductive ages.","Age structure affects future recruitment to reproductive ages."]],
    [["Two plots receive equal rainfall. One has deep sandy soil and one has fine compacted clay. Which result is most likely immediately after heavy rain?","Greater infiltration in the sandy plot","Greater infiltration in the compacted clay plot","Equal runoff regardless of soil structure","No percolation through sand","Larger connected pores in sandy soil generally permit faster infiltration."],["Moist air crosses a mountain ridge. Why does the leeward slope receive less precipitation?","Air loses moisture while rising and then warms as it descends.","Air cools and gains moisture while descending.","Gravity draws rainfall only to low elevations.","The windward air cannot condense during ascent.","Descending air warms after much of its moisture precipitates on the windward side."]],
    [["A farm replaces flood irrigation with drip irrigation under comparable weather and crop conditions. Which measurement best tests the claimed conservation benefit?","Water applied per kilogram of crop harvested","Field area alone","Annual seed purchases alone","One midday air-temperature measurement","Comparing water use per unit yield accounts for output as well as water applied."],["A county replaces lawns next to a stream with native vegetated buffers. Which outcome is most likely during storms?","Less sediment and nutrient runoff reaches the stream.","More nutrients enter because roots cannot absorb any.","Soil erosion increases because runoff gains speed.","The stream warms because woody cover is eliminated.","Buffers slow runoff, trap sediment, and can take up nutrients."]],
    [["A power grid adds solar generation with no storage. Which comparison most directly tests how much firm backup is needed?","Compare hourly generation with hourly demand, especially after sunset.","Compare annual generation with annual demand only.","Measure peak panel efficiency at noon alone.","Compare the number of panels with the number of customers.","Annual totals can hide hourly supply shortfalls."],["Two power plants produce the same electricity. One converts a larger fraction of its fuel energy to electricity. Assuming the same fuel, what follows?","The more efficient plant uses less fuel and releases less waste heat per unit electricity.","Both use equal fuel because output matches.","The more efficient plant must release more waste heat.","The less efficient plant consumes less fuel per unit output.","Higher efficiency means less fuel input and less loss for the same useful output."]],
    [["A city observes high ozone on warm sunny afternoons downwind of heavy traffic. Which mechanism is responsible?","Sunlight drives reactions involving nitrogen oxides and volatile organic compounds.","Ozone is released unchanged from vehicle exhaust in the largest amounts.","Carbon dioxide decomposes into ozone at night.","Rainwater chemically removes ozone precursors from the air and raises ozone.","Ground-level ozone is a secondary pollutant made by photochemistry."],["Pollutants build up near the surface overnight. Temperature measurements show warmer air above cooler surface air. Which explanation fits?","The inversion suppresses vertical mixing.","The inversion increases convection out of the valley.","The cooler air rises through the warm air faster.","The temperature pattern eliminates vehicle emissions.","Stable air limits dispersion and traps pollutants near the ground."]],
    [["A long-lived pollutant is found in water, plankton, small fish, and fish-eating birds. Its concentration rises at each level. Which process explains the comparison?","Biomagnification","Primary succession","Biological nitrogen fixation","Growth dilution at higher trophic levels","Persistent contaminants can reach higher concentrations as predators consume many prey."],["A sewage spill enters a river. Downstream, dissolved oxygen declines while biochemical oxygen demand increases. Which inference is most consistent?","Microbial breakdown of additional organic matter consumes oxygen.","Oxygen-demanding material has decreased.","Photosynthesis must have become the only oxygen sink.","Water temperature is required to rise before oxygen can be consumed.","Organic input raises microbial oxygen demand."]],
    [["As Arctic sea ice decreases, more dark ocean is exposed. Which effect forms a positive climate feedback?","The ocean absorbs more radiation, promoting warming and further melting.","The ocean reflects more radiation, cooling the ice edge.","Sea ice loss increases surface albedo and reverses the warming.","Air temperature cannot respond to surface reflection.","Lower albedo increases absorbed radiation and amplifies warming."],["Added carbon dioxide dissolves into seawater. Which consequence is most directly relevant to shell-building organisms?","Carbonate ion availability generally declines.","Carbonate ion availability rises in proportion to dissolved CO₂.","Dissolved oxygen becomes chemically identical to carbonate.","Seawater becomes more basic as hydrogen ion concentration rises.","Acidification shifts carbonate toward bicarbonate, reducing carbonate available for calcification."]]
  ]
};

const empiricalModels = {
  "biology": [
    null,
    ["Cells are placed in isotonic medium (A) or hypertonic medium (B) with identical temperatures. The outcome is mean final cell volume as a percentage of initial volume.","A","B","relative cell volume",95,-1,"Water leaves cells exposed to a higher effective solute concentration."],
    ["Chloroplasts receive low light (A) or higher light below saturation (B), with carbon dioxide and temperature matched. The outcome is oxygen released per minute in relative units.","A","B","oxygen production",20,1,"Under light limitation, increasing light can increase photosynthetic electron transport and oxygen release."],
    ["Identical cell cultures receive a signal alone (A) or the same signal plus a kinase inhibitor (B). The outcome is reporter output in relative units.","A","B","reporter output",75,-1,"Kinase inhibition can interrupt signaling downstream of the receptor."],
    ["In a testcross, the most frequent individual parental phenotype is class A. Class B is one of the individual recombinant phenotypes. Equal-size cohorts are scored using the same marker assays. The outcome is individuals of that class per cohort.","A","B","phenotype count",75,-1,"For linked genes, parental combinations are expected more often than recombinant combinations."],
    ["Cells contain the same reporter with an intact promoter (A) or with a promoter mutation that reduces polymerase binding (B). The outcome is mean newly made RNA in relative units.","A","B","new RNA",85,-1,"Reduced polymerase binding can reduce transcription initiation."],
    ["Replicate bacterial populations start with the same low frequency of an existing resistance allele. They grow with no antibiotic (A) or with antibiotic (B). The outcome is resistant colonies per equal number tested after treatment.","A","B","resistant colony count",16,1,"Antibiotic exposure can favor reproduction or survival of existing resistant cells."],
    ["Identical aquaria receive grazers. The low-density group is A and the high-density group is B. Light, nutrients, and initial algal mass are matched. The outcome is final algal mass in relative units.","A","B","algal mass",80,-1,"More grazers can increase the loss of algal biomass."]
  ],
  "psychology": [
    ["Participants are randomly assigned to sleep normally (A) or to a shortened sleep opportunity (B) before an identical attention task. The outcome is the mean percentage of targets detected.","A","B","target detection",83,-1,"Sleep restriction can impair sustained attention."],
    ["Students are randomly assigned to reread vocabulary (A) or use retrieval practice (B). Exposure time and a one-week delay are matched. The outcome is the mean percentage of words recalled.","A","B","recall",54,1,"Retrieving information during practice can strengthen later access."],
    ["Participants first learn that a tone predicts a puff of air. They are randomly assigned to continued pairings (A) or repeated tone-only presentations (B). The outcome is the percentage of final tone trials with an anticipatory blink.","A","B","conditioned blinking",78,-1,"Presenting a conditioned stimulus alone can weaken a conditioned response."],
    ["Volunteers are randomly assigned to make a decision privately (A) or aloud after a unanimous group responds (B). The outcome is the percentage agreeing with the group answer.","A","B","agreement",32,1,"A public response may increase pressure to agree. These data alone do not establish why agreement rose."],
    ["Volunteers are randomly assigned to usual support (A) or to usual support plus time-management coaching (B). The outcome is a mean self-reported stress score, with higher values meaning greater stress.","A","B","stress score",67,-1,"Coaching can help participants act on demands that contribute to stress."]
  ],
  "environmental-science": [
    ["Replicated ponds receive no added fertilizer (A) or added fertilizer (B). Before any bloom begins to die, researchers measure algal biomass in relative units.","A","B","algal biomass",39,1,"Additional nutrients can increase primary producer growth when nutrients are limiting."],
    ["Equal-area habitat patches are near (B) or far (A) from a source population. Habitat quality and survey effort are matched. The outcome is the number of immigrant species observed.","A","B","immigrant species count",21,1,"Nearer patches are easier for more species to reach."],
    ["Herbivores are kept at low density (A) or high density (B) with the same renewal rate of food per enclosure. The outcome is mean offspring per ten females.","A","B","offspring count",78,-1,"Higher density intensifies competition for a fixed supply of food."],
    ["Matched plots receive equal simulated rain. Soil is left uncompacted (A) or compacted (B). The outcome is surface runoff in liters.","A","B","runoff",28,1,"Compaction can reduce infiltration and raise surface runoff."],
    ["Matched farms use flood irrigation (A) or drip irrigation (B) for the same crop at comparable yields. The outcome is liters of irrigation water per equal mass harvested.","A","B","irrigation water",147,-1,"Drip irrigation targets roots and can reduce water lost to evaporation and runoff."],
    ["Two generators produce the same electrical output using the same fuel. A has lower conversion efficiency than B. The outcome is fuel energy input in megajoules.","A","B","fuel input",129,-1,"An efficient generator requires less input for the same output."],
    ["Matched boilers burn the same fuel without (A) or with (B) a sulfur dioxide scrubber. The outcome is sulfur dioxide released per hour in relative units.","A","B","sulfur dioxide emissions",93,-1,"Scrubbers remove part of the sulfur dioxide from exhaust."],
    ["Matched water samples incubate in darkness with no added organic matter (A) or added degradable organic matter (B). The outcome is final dissolved oxygen in relative units.","A","B","dissolved oxygen",78,-1,"Microbes can consume more dissolved oxygen when more degradable material is available."],
    ["Seawater chambers are exposed to current (A) or elevated (B) carbon dioxide. Other conditions are matched. The outcome is carbonate ion concentration in relative units.","A","B","carbonate concentration",82,-1,"Extra dissolved carbon dioxide can reduce carbonate ion availability."]
  ]
};

function interpolate(text, a, b) {
  const values = { a, b, aa: a * a, ab: a * b, bb: 2 * b, ad: 2 * a, ah: 100 * a, bh: 100 * b, abh: 100 * a * b };
  return text.replace(/{{([a-z]+)}}/g, (_, field) => String(values[field]));
}

function item(prompt, choices, explanation, family) {
  return { prompt, choices, answer: 0, explanation, family };
}

function quantitative(stem, values, explanation, a, b, scenario) {
  const choices = values.map(value => typeof value === 'number' ? String(Number(value.toFixed(3))) : value);
  if (new Set(choices).size !== 4 || choices.some(value => value === 'NaN' || value === 'Infinity')) return null;
  const rounding = values.some(value => typeof value === 'number' && !Number.isInteger(value))
    ? ' Round to three decimal places if needed.' : '';
  return item(interpolate(stem, a, b) + rounding, choices, explanation, 'model-' + scenario);
}

const quantitativeModels = {
  "chemistry": [
    [
      (a, b) => {
        const result = a+b/4;
        return quantitative("A mass spectrum shows two isotopes of an element. The lighter isotope has mass {{a}} u and abundance 75%. The heavier isotope is {{b}} u heavier. What is the sample’s weighted mean atomic mass in u?", [result, 2*result, result/2, result+b], "Weight each isotope mass by its fractional abundance.", a, b, 0);
      },
      (a, b) => {
        const result = a+b+2;
        return quantitative("An ion X²⁺ has {{a}} electrons and its nucleus has {{b}} neutrons. Which mass number is consistent with the model?", [result, a+b, a+b-2, b+2], "A 2+ ion has lost two electrons, so protons = electrons + 2.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = b/a**2;
        return quantitative("For two pairs of singly charged ions, the separation in pair A is r and in pair B is {{a}}r. A model gives pair A an attraction of {{b}} nN. What magnitude in nN does the same model predict for B?", [result, 2*result, result/2, result+b], "Electrostatic force at fixed charges scales as the inverse square of distance.", a, b, 0);
      },
      (a, b) => {
        const result = a*b;
        return quantitative("Two pairs of hypothetical point charges have the same separation. The charges of pair A are +1 and −1. Pair B has charges +{{a}} and −{{b}}. What is the predicted attraction in B as a multiple of that in A?", [result, a+b, a, b], "At fixed distance, the magnitude scales with the product of charge magnitudes.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = b/4;
        return quantitative("A chemist takes {{a}} mL of a {{b}} M stock and adds water to reach four times the original volume. What concentration in M is predicted for the diluted sample?", [result, 2*result, result/2, result+b], "The solute amount stays fixed while the solution volume quadruples.", a, b, 0);
      },
      (a, b) => {
        const result = b/2;
        return quantitative("A rigid gas vessel at temperature {{a}}00 K and pressure {{b}} atm is cooled to half its original absolute temperature. The amount of gas is fixed. What pressure in atm does the ideal gas model predict?", [result, 2*b, b, b/4], "At fixed volume and amount, pressure is proportional to absolute temperature.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = Math.min(2*a,b);
        return quantitative("For 2 CO + O₂ → 2 CO₂, a sealed reactor contains {{a}} mol of O₂ and {{b}} mol of CO. The reaction goes to completion. What amount of CO₂ in mol is expected?", [result, 2*a+b, Math.max(2*a,b), a+2*b], "The product amount is limited by either available CO or twice the available oxygen.", a, b, 0);
      },
      (a, b) => {
        const result = a*b/2;
        return quantitative("For 2 H₂ + O₂ → 2 H₂O, a vessel starts with {{ab}} mol H₂ and {{ab}} mol O₂. When all H₂ is consumed, how many moles of O₂ remain?", [result, a*b, 0, a*b/4], "Each mole of hydrogen consumes half a mole of oxygen.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = 9*b;
        return quantitative("The initial rate is {{b}} units when [X]={{a}} units. The reaction is second order in X and all other concentrations are held constant. What initial rate is predicted for a threefold increase in [X]?", [result, 2*result, result/2, result+b], "Tripling X increases the rate by a factor of nine.", a, b, 0);
      },
      (a, b) => {
        const result = 12.5*a;
        return quantitative("A first-order reactant starts at {{ah}} mmol/L. Its half-life is {{b}} minutes. What concentration in mmol/L remains after three half-lives?", [result, 50*a, 25*a, a*100/3], "After three half-lives, one eighth of the initial concentration remains.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = 4.2*a*b;
        return quantitative("An exothermic reaction warms {{a}} g of water by {{b}} °C in an ideal calorimeter. Using 4.2 J/(g·°C), what is the magnitude of heat released in J?", [result, 2*result, result/2, result+b], "The magnitude equals the heat gained by the water, mcΔT.", a, b, 0);
      },
      (a, b) => {
        const result = -b;
        return quantitative("A reaction releases {{ab}} kJ when {{a}} mol of reactant is consumed. Under identical conditions, what is ΔH in kJ per mole of reactant?", [result, b, -a*b, -a], "Released heat is negative, and division by the moles gives the molar enthalpy.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = a*b;
        return quantitative("For A ⇌ B, Kc is {{a}} at the test temperature. If equilibrium [A] = {{b}} mmol/L, what equilibrium [B] in mmol/L is consistent with the model?", [result, 2*result, result/2, result+b], "For this 1:1 equilibrium, Kc is [B]/[A].", a, b, 0);
      },
      (a, b) => {
        const result = b/a**2;
        return quantitative("For 2 A(g) ⇌ B(g), an initial mixture has [A]={{a}} M and [B]={{b}} M. What reaction quotient Qc follows?", [result, a*a/b, b/a, b*b/a], "Use stoichiometric exponents: Qc = [B]/[A]².", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = a*b;
        return quantitative("A monoprotic acid sample has concentration 0.{{a}} M and volume {{b}} mL. It is titrated with 0.10 M NaOH. What volume of base in mL is needed at equivalence?", [result, 2*result, result/2, result+b], "The acid and base react 1:1. Multiply acid volume by the concentration ratio.", a, b, 0);
      },
      (a, b) => {
        const result = a+b;
        return quantitative("A buffer contains {{a}} mmol HA and {{b}} mmol A⁻. After {{a}} mmol of strong base reacts completely, how many mmol A⁻ are present?", [result, b-a, b, a], "Each mole of strong base converts one mole of HA into one mole of A⁻.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = (a+b)/10;
        return quantitative("A proposed cell model uses these half-cell potentials. The cathode reduction potential is +0.{{a}} V and the anode reduction potential is −0.{{b}} V. What standard cell potential in V is predicted?", [result, 2*result, result/2, result+b], "Subtract the anode reduction potential from the cathode reduction potential.", a, b, 0);
      },
      (a, b) => {
        const result = 100*a/b;
        return quantitative("A process has ΔH = {{ah}} J/mol and ΔS = {{b}} J/(mol·K). At what temperature in K is ΔG zero?", [result, a*b, b/(100*a), 100*a+b], "Set ΔG = ΔH − TΔS to zero and solve for T.", a, b, 1);
      }
    ]
  ],
  "physics-1": [
    [
      (a, b) => {
        const result = 2*(a+b);
        return quantitative("A sensor records cart speed {{a}} m/s at t=0 and {{b}} m/s at t=4 s. Acceleration is constant and velocity stays positive. How far does the cart travel, in meters?", [result, 2*result, result/2, result+b], "The displacement is the time multiplied by the average of the two velocities.", a, b, 0);
      },
      (a, b) => {
        const result = a/b;
        return quantitative("A cart’s velocity changes uniformly from {{a}} to {{ad}} m/s as it travels along a straight track for {{b}} seconds. What is the acceleration in m/s²?", [result, 2*a/b, a*b, b/a], "Velocity increases by a in b seconds.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = 2*a*b;
        return quantitative("A {{a}} kg block accelerates horizontally at {{b}} m/s². A force sensor reads 3 times the net force for the pull along the surface. What is the opposing friction force magnitude in newtons?", [result, 2*result, result/2, result+b], "The net force is ma, so friction is the applied pull minus ma.", a, b, 0);
      },
      (a, b) => {
        const result = b-1;
        return quantitative("A horizontal pull of {{ab}} N moves a {{a}} kg block across a rough floor. A sensor shows that opposing kinetic friction is {{a}} N. What is the horizontal acceleration in m/s²?", [result, b, b+1, 2*b], "Subtract opposing friction from the pull to obtain net force, then divide by mass.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = b/(2*a);
        return quantitative("A cart enters a braking region with {{b}} J of kinetic energy. The same constant opposing force acts over {{a}} m and reduces its kinetic energy by half. What is the force magnitude in newtons?", [result, 2*result, result/2, result+b], "The work of the opposing force is −Fd, equal to the negative change in kinetic energy.", a, b, 0);
      },
      (a, b) => {
        const result = a/2;
        return quantitative("A motor lifts a load with weight {{a}} N through {{b}} m in twice as many seconds as meters lifted. What average power in watts goes into increasing the load’s gravitational potential energy?", [result, a*b, 2*a, a/(2*b)], "Divide the gain in potential energy (weight times height) by the time 2b.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = b/3;
        return quantitative("A cart of mass {{a}} kg moving at {{b}} m/s hits a stationary cart of twice its mass. They stick on a level frictionless track. What is their common speed in m/s?", [result, 2*result, result/2, result+b], "Momentum is conserved, and the moving total mass triples.", a, b, 0);
      },
      (a, b) => {
        const result = a*b;
        return quantitative("A constant force of {{a}} N acts opposite the motion of a cart for {{b}} seconds. What is the magnitude of the impulse in N·s?", [result, a/b, b/a, a+b], "The constant-force impulse is force multiplied by elapsed time.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = 2*b;
        return quantitative("A force of {{b}} N acts perpendicular to a lever {{a}} m from a fixed pivot. A second force acts in the opposite rotational direction at half the lever distance. What magnitude in newtons balances the two torques?", [result, 2*result, result/2, result+b], "Balancing torque requires double the force at half the perpendicular lever arm.", a, b, 0);
      },
      (a, b) => {
        const result = 1;
        return quantitative("A wheel has moment of inertia {{a}} kg·m². A net torque of {{ab}} N·m starts acting clockwise while the wheel rotates counterclockwise at {{b}} rad/s. How long in seconds until it stops?", [result, b, a, a*b], "Its angular deceleration magnitude is torque divided by inertia, equal to its initial angular speed in numerical value.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = 2*b;
        return quantitative("A flywheel with rotational inertia {{a}} kg·m² spins at {{b}} rad/s. An internal mechanism reduces its inertia to half without external torque. What is its new angular speed in rad/s?", [result, 2*result, result/2, result+b], "Conservation of angular momentum requires doubling the angular speed.", a, b, 0);
      },
      (a, b) => {
        const result = 0.25;
        return quantitative("A rotating object with inertia {{a}} kg·m² has angular speed {{b}} rad/s. Braking reduces speed to half with no change in inertia. What fraction of its original rotational kinetic energy remains?", [result, 0.5, 0.75, 2], "Rotational kinetic energy scales with squared angular speed.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = a/9;
        return quantitative("A spring oscillator starts with {{a}} J of total energy at amplitude {{b}} cm. A student reduces the amplitude to one third using the same spring and mass. What is the new total energy in J?", [result, 2*result, result/2, result+b], "Oscillator energy scales as the square of amplitude.", a, b, 0);
      },
      (a, b) => {
        const result = 2*b;
        return quantitative("An ideal oscillator makes {{a}} oscillations in {{ab}} seconds with a mass attached. How long in seconds would one oscillation take after the mass is quadrupled, with the spring unchanged?", [result, 4*b, b, b/2], "The initial period is b; it scales with the square root of mass.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = 4*b;
        return quantitative("In a horizontal pipe, water flows steadily at {{b}} m/s where the cross-section is {{a}} cm². Downstream the cross-section is one quarter as large. What speed in m/s follows from continuity?", [result, 2*result, result/2, result+b], "For steady incompressible flow, area times speed is constant.", a, b, 0);
      },
      (a, b) => {
        const result = 1000*a*b;
        return quantitative("A diver descends an additional {{a}} m in a fluid with density {{bh}} kg/m³. With g=10 m/s², by how many pascals does the hydrostatic pressure increase?", [result, 100*a*b, 1000*b/a, 10*(a+b)], "The pressure difference equals fluid density times g times depth change.", a, b, 1);
      }
    ]
  ],
  "calculus-ab": [
    [
      (a, b) => {
        const result = 2*a+b;
        return quantitative("Except at x = {{a}}, a concentration model is C(x) = (x² − {{aa}})/(x − {{a}}) + {{b}}. What value must be assigned at x = {{a}} to make C continuous?", [result, 2*result, result/2, result+b], "Cancel the removable factor to calculate the two-sided limit.", a, b, 0);
      },
      (a, b) => {
        const result = interpolate("None", a, b);
        return quantitative("A piecewise function approaches {{a}} from the left at x=0 and {{b}} from the right. The value f(0) can be changed. Which proposed value makes f continuous when {{a}}≠{{b}}?", [result, interpolate("{{a}}", a, b), interpolate("{{b}}", a, b), interpolate("The average of the two limits", a, b)], "Changing the point value cannot make unequal one-sided limits agree.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = -3*b;
        return quantitative("A tangent line to f at x = {{a}} has slope {{b}}. What is the derivative of −3f(x) at the same point?", [result, 2*result, result/2, result+b], "The derivative is the slope of the tangent and scales by the constant multiplier.", a, b, 0);
      },
      (a, b) => {
        const result = a+b;
        return quantitative("At x=1, a data sheet gives f(1)={{a}} and f′(1)={{b}}. For g(x)=x f(x), what is g′(1)?", [result, a*b, b-a, a+2*b], "The product rule gives f(1)+f′(1).", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = 2*a*b;
        return quantitative("A table gives f(2)={{a}} and f′(2)={{b}}. For g(x)=[f(x)]², what is g′(2)?", [result, 2*result, result/2, result+b], "Apply the chain rule to the square using both table entries.", a, b, 0);
      },
      (a, b) => {
        const result = 1/b;
        return quantitative("A differentiable increasing function satisfies f({{a}})=14 and f′({{a}})={{b}}. What is (f⁻¹)′(14)?", [result, b, a/b, 1/a], "Evaluate the reciprocal of the original derivative at the corresponding input.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = 2*a*b;
        return quantitative("A circular spill has radius {{a}} m at an instant when the radius increases at {{b}} m/min. The area rate is kπ m²/min. What is k?", [result, 2*result, result/2, result+b], "Differentiate the area with respect to time to obtain 2πr dr/dt.", a, b, 0);
      },
      (a, b) => {
        const result = a/b;
        return quantitative("A particle has v(t)={{a}}−{{b}}t. At t=0 it moves in the positive direction. At what time does it first reverse direction?", [result, b/a, a+b, a*b], "The velocity changes sign at a/b, where it equals zero.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = 2*b;
        return quantitative("A differentiable function has f′(x)={{a}}(x−{{b}})(x−{{bb}}). On (0,∞), at which x does it have a local minimum?", [result, 2*result, result/2, result+b], "At 2b the sign of the derivative changes from negative to positive.", a, b, 0);
      },
      (a, b) => {
        const result = interpolate("It has a horizontal tangent and no local extremum.", a, b);
        return quantitative("A differentiable function has f′(x)={{a}}(x−{{b}})². Which statement describes f at x={{b}}?", [result, interpolate("It has a local maximum.", a, b), interpolate("It has a local minimum.", a, b), interpolate("Its tangent is undefined.", a, b)], "The derivative is zero but remains positive on each side.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = 2*a+4*b;
        return quantitative("Water flows into a tank at rate r(t)={{a}}+{{b}}t liters per minute. How many liters enter between t=1 and t=3?", [result, 2*result, result/2, result+b], "Integrate the rate over the requested interval.", a, b, 0);
      },
      (a, b) => {
        const result = 2*a+b;
        return quantitative("Let A(x)=∫₀ˣ ({{a}}t+{{b}})dt. What is the slope of A at x=2?", [result, 2*a+2*b, 4*a+b, a+b], "By the Fundamental Theorem of Calculus, A′(x)=ax+b.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = 4*a+b;
        return quantitative("A solution to dy/dx={{a}}x satisfies y(1)={{b}}. What is y(3)?", [result, 2*result, result/2, result+b], "Integrate the derivative from 1 to 3 and add the initial value.", a, b, 0);
      },
      (a, b) => {
        const result = interpolate("y increases toward {{b}}.", a, b);
        return quantitative("A model satisfies y′={{a}}({{b}}−y) with initial y(0)=0. Which long-term behavior is consistent with the differential equation?", [result, interpolate("y decreases without bound.", a, b), interpolate("y approaches {{a}} regardless of {{b}}.", a, b), interpolate("y stays at zero.", a, b)], "Below the equilibrium value b, the derivative is positive and the solution approaches b.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = a*a*b;
        return quantitative("The region under y={{a}} from x=0 to x={{b}} rotates around the x-axis. Its volume is kπ. What is k?", [result, 2*result, result/2, result+b], "The cross-sectional disk area is constant at πa², and the length is b.", a, b, 0);
      },
      (a, b) => {
        const result = a*a*b**3/3;
        return quantitative("The region above y=0 and below y={{a}}x on [0,{{b}}] is revolved about the x-axis. What is the volume divided by π?", [result, a*b*b/2, a*a*b*b/2, a*b**3/3], "Integrate the disk area πa²x² across the interval.", a, b, 1);
      }
    ]
  ],
  "macroeconomics": [
    [
      (a, b) => {
        const result = b;
        return quantitative("An economy can produce either {{a}} machines or {{ab}} tons of wheat under constant opportunity costs. It has a trade offer of {{bb}} tons of wheat for one machine. How many tons of wheat more than its domestic opportunity cost would it earn per exported machine?", [result, 2*b, b/2, 3*b], "The opportunity cost per machine is b tons. The offer gives 2b tons.", a, b, 0);
      },
      (a, b) => {
        const result = interpolate("Produce it domestically.", a, b);
        return quantitative("A country can produce {{a}} machines or {{ab}} units of food with the same resources and constant opportunity costs. Another country offers to sell one machine for {{bb}} food units. Which choice minimizes the first country’s food cost of one machine?", [result, interpolate("Import it at the offered price.", a, b), interpolate("Choose either, since they have equal costs.", a, b), interpolate("Use the offered price as the domestic opportunity cost.", a, b)], "Domestic production costs b units of food, below the offered price of 2b.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = 100*(a+b)/(101*a);
        return quantitative("An economy has {{ah}} million employed people and {{a}} million unemployed people. Then {{b}} million employed people lose their jobs and all look for work. What is the new unemployment rate as a percent?", [result, 2*result, result/2, result+b], "The labor force stays fixed; divide the new unemployed total by the original labor force.", a, b, 0);
      },
      (a, b) => {
        const result = (b-1)*100;
        return quantitative("A price index changes from {{ah}} to {{abh}} over a period, with the basket fixed. What is the percentage increase?", [result, 100*b, a*b, 100/b], "The new index is b times the old one; subtract one before multiplying by 100.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = 4*(a-b);
        return quantitative("In a simple closed-economy spending model, MPC is 0.75. Investment rises by {{a}} billion dollars and government purchases fall by {{b}} billion dollars. What is the predicted change in equilibrium output in billions of dollars?", [result, 2*result, result/2, result+b], "Net autonomous spending changes by a−b. The simple multiplier is four.", a, b, 0);
      },
      (a, b) => {
        const result = -3*a*b;
        return quantitative("A model’s marginal propensity to consume is 0.75. Lump-sum taxes rise by {{ab}} billion. Holding other autonomous components fixed, what is the change in equilibrium output in billions?", [result, -4*a*b, 3*a*b, -.75*a*b], "A tax rise cuts first-round consumption by 0.75 of the increase. Multiply by four.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = .9*a*b;
        return quantitative("A bank receives {{ab}} million dollars of new deposits. The required reserve ratio is 10% and the bank initially has no excess reserves. How much of the new deposits in millions is initially available to lend?", [result, 2*result, result/2, result+b], "The bank holds 10% of the new deposits as required reserves.", a, b, 0);
      },
      (a, b) => {
        const result = a;
        return quantitative("An investment pays {{ad}}% nominal interest with expected inflation {{a}}%. Using the approximate Fisher equation, what is the expected real interest rate in percent?", [result, 3*a, 2*a, -a], "Subtract expected inflation from the nominal interest rate.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = a*b;
        return quantitative("In a simple loanable-funds model, private investment initially equals {{ah}} billion dollars. The real interest rate rises by {{b}} percentage points after an increase in government borrowing. The investment schedule declines by {{a}} billion dollars per percentage point. What is the predicted decline in private investment in billions?", [result, 2*result, result/2, result+b], "Move along the investment schedule at the given response per percentage point.", a, b, 0);
      },
      (a, b) => {
        const result = b;
        return quantitative("An economy’s labor input is unchanged and output per worker rises from {{a}} to {{ab}} units. By what factor can output rise under this productivity change?", [result, a, a*b, b+1], "At constant employment, total output scales with output per worker.", a, b, 1);
      }
    ],
    [
      (a, b) => {
        const result = 2*a*b;
        return quantitative("The exchange rate moves from {{a}} to {{ad}} foreign currency units per domestic dollar. A domestic seller keeps the price at {{b}} domestic dollars. What amount in foreign currency do buyers now pay?", [result, 2*result, result/2, result+b], "Multiply the domestic price by the new exchange rate.", a, b, 0);
      },
      (a, b) => {
        const result = interpolate("The cost halves.", a, b);
        return quantitative("A domestic importer buys {{a}} units abroad at {{b}} foreign currency units each. The domestic currency buys twice as many foreign currency units as before. Holding the foreign price fixed, what happens to its total cost in domestic currency?", [result, interpolate("The cost doubles.", a, b), interpolate("The cost stays fixed.", a, b), interpolate("The cost falls to one quarter.", a, b)], "Each domestic currency unit buys twice as much foreign currency, so the same foreign total costs half.", a, b, 1);
      }
    ]
  ]
};

function empiricalQuestions(model, trial) {
  const [context, reference, comparison, outcome, baseline, direction, mechanism] = model;
  const difference = 5 + trial * 2;
  const initial = baseline + trial % 4 - 1;
  const observed = initial + direction * difference;
  const replicate = initial + 2;
  const observedAgain = replicate + direction * (difference + 4);
  const evidence = context + '\n
Trial 1 | ' + reference + ': ' + initial + ' · ' + comparison + ': ' + observed
    + '\nTrial 2 | ' + reference + ': ' + replicate + ' · ' + comparison + ': ' + observedAgain + '\n\n';
  const trend = direction > 0 ? 'higher' : 'lower';
  const opposite = direction > 0 ? 'lower' : 'higher';
  return [
    item(evidence + 'Which claim about ' + outcome + ' is supported by both trials?', [
      'Group B had ' + trend + ' values than group A in both trials.',
      'Group B had ' + opposite + ' values than group A in both trials.',
      'The direction of the difference reversed between trials.',
      'Both groups had equal values in the second trial.'
    ], 'The difference has the same direction in both rows. ' + mechanism, 'data-claim'),
    item(evidence + 'How did the magnitude of the between-group difference change from Trial 1 to Trial 2?', [
      'It increased by 4.', 'It decreased by 4.', 'It increased by 2.', 'It did not change.'
    ], 'The absolute differences were ' + difference + ' and ' + (difference + 4) + '.', 'data-comparison'),
    item(evidence + 'Which follow-up best tests whether the pattern in ' + outcome + ' is reproducible?', [
      'Repeat both conditions independently and compare the outcomes.',
      'Repeat only group B and omit group A.',
      'Use only the trial with the larger effect.',
      'Change the conditions and the measurement method at the same time.'
    ], 'Independent repeats of both conditions can test whether the same pattern recurs.', 'data-method'),
    item(evidence + 'A third trial gives group A a value of ' + (initial + 4) + '. Which group B result agrees with the direction of the first two trials?', [
      String(initial + 4 + direction * difference), String(initial + 4 - direction * difference), String(initial + 4), String(initial + 4 - direction * (difference + 1))
    ], 'A matching result places group B ' + trend + ' than group A, as in the first two trials.', 'data-prediction'),
    item(evidence + 'What is the strongest limitation on a claim that the two groups always differ by exactly the same amount?', [
      'The between-group differences are unequal across the two trials.',
      'The between-group differences are equal across the two trials.',
      'Only the first trial reports a measurement for group B.',
      'Group A was measured only in the second trial.'
    ], 'The direction of the difference is consistent, but its magnitude differs.', 'data-evaluation')
  ];
}

export function examQuestions(course, unit) {
  const index = unit - 1;
  const questions = concepts[course][index].map(([stem, correct, a, b, c, explanation], number) =>
    item(stem, [correct, a, b, c], explanation, 'concept-' + number));
  const empirical = empiricalModels[course]?.[index];
  if (empirical) {
    for (let trial = 0; trial < 16; trial++) questions.push(...empiricalQuestions(empirical, trial));
  } else {
    for (const scenario of quantitativeModels[course][index]) {
      for (let a = 2; a <= 9; a++) {
        for (let b = 2; b <= 9; b++) {
          if (a === b) continue;
          const question = scenario(a, b);
          if (question) questions.push(question);
        }
      }
    }
  }
  return questions;
}
