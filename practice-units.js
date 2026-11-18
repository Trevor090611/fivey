import { examQuestions } from './practice-exam-questions.js?v=1';

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
  const reviewItems = bankGroups[course][unit - 1].slice(0, 2).map(index => ({
    ...bank[index],
    family: 'review'
  }));
  return [...examQuestions(course, unit), ...reviewItems];
}
