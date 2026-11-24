// Fivey AP Biology question bank: original questions aligned to the eight units of the
// College Board AP Biology course framework. Hand-written items cover concepts, data,
// graphs, experimental design, and predictions; calculation items are generated with
// different values so each unit has many distinct practice questions.
// Hand-written format: [family, prompt, correct, wrong, wrong, wrong, explanation]

const written = [
  // Unit 1: Chemistry of Life
  [
    ['concept', 'Some insects can walk on the surface of a pond without sinking. Which property of water best explains this?', 'Surface tension caused by cohesion between water molecules', 'Adhesion of water to the insect’s legs', 'The high specific heat of water', 'The lower density of ice than liquid water', 'Hydrogen bonds hold surface water molecules together, creating surface tension that supports small insects.'],
    ['predict', 'The inner walls of a plant’s xylem vessels are coated with a waxy, nonpolar layer. Which effect on water transport is most likely?', 'Water adheres less to the vessel walls, so the water column rises less effectively.', 'Water molecules stop forming hydrogen bonds with each other.', 'Water moves up the xylem faster because there is less friction.', 'Transpiration from the leaves stops completely.', 'Adhesion to the polar walls of xylem helps pull water upward; a nonpolar coating reduces adhesion.'],
    ['data', 'Densities measured in a lab:\nLiquid water at 4 °C: 1.000 g/mL\nIce at 0 °C: 0.917 g/mL\nWhich consequence for organisms in a lake during winter is best supported?', 'Ice floats and insulates the water below, which stays liquid.', 'Ice sinks and the lake freezes from the bottom up.', 'Water at 4 °C rises to the surface and freezes first.', 'The lake loses its ability to store heat.', 'Ice is less dense than liquid water, so it forms a floating layer that insulates the water beneath it.'],
    ['concept', 'Why can carbon atoms form the backbones of so many different biological molecules?', 'Each carbon atom can form four covalent bonds, allowing chains, branches, and rings.', 'Carbon atoms form ionic bonds with every other element.', 'Carbon is the most abundant element in Earth’s crust.', 'Carbon atoms cannot bond to other carbon atoms.', 'Carbon’s four valence electrons let it form four stable covalent bonds in many arrangements.'],
    ['concept', 'Which bond links adjacent nucleotides within one strand of DNA?', 'A phosphodiester bond between the phosphate of one nucleotide and the sugar of the next', 'A hydrogen bond between two nitrogenous bases', 'A peptide bond between two sugars', 'An ionic bond between two phosphate groups', 'The sugar-phosphate backbone is held together by covalent phosphodiester bonds; hydrogen bonds join the two strands.'],
    ['predict', 'A modified nucleotide that lacks a 3′ hydroxyl group is added to the end of a growing DNA strand. What happens next?', 'No more nucleotides can be added to that strand.', 'The strand continues growing in the 3′ to 5′ direction.', 'The modified nucleotide is converted into ribose.', 'DNA polymerase adds nucleotides to the 5′ end instead.', 'New nucleotides attach to the 3′ hydroxyl of the previous nucleotide, so without it, synthesis stops.'],
    ['concept', 'Which feature distinguishes a saturated fatty acid from an unsaturated fatty acid?', 'It has no carbon–carbon double bonds in its hydrocarbon chain.', 'It contains a phosphate group.', 'It has at least one carbon–carbon double bond.', 'It is a polymer of glucose.', 'Saturated chains hold the maximum number of hydrogens because they have only single bonds between carbons.'],
    ['concept', 'Which interactions stabilize the alpha helices and beta pleated sheets of a protein?', 'Hydrogen bonds between atoms of the polypeptide backbone', 'Peptide bonds between R groups', 'Disulfide bonds between every amino acid', 'Ionic bonds between phosphate groups', 'Secondary structure forms from hydrogen bonding between backbone carbonyl and amino groups.'],
    ['predict', 'A chemical breaks the disulfide bonds between cysteine residues in a protein but leaves peptide bonds intact. Which level of structure is most directly disrupted?', 'Tertiary structure', 'Primary structure', 'The sequence of nucleotides that codes for the protein', 'The peptide bonds of the backbone', 'Disulfide bonds between R groups stabilize the three-dimensional (tertiary) shape; the amino acid sequence is unchanged.'],
    ['design', 'A researcher hypothesizes that one histidine in an enzyme’s active site is required for catalysis. Which experiment best tests this hypothesis?', 'Replace only that histidine with a different amino acid and compare activity to the unchanged enzyme under identical conditions.', 'Heat the enzyme until it denatures and measure its activity.', 'Replace every amino acid in the active site at the same time.', 'Measure the enzyme’s activity at many different pH values.', 'Changing one variable, the single histidine, isolates its contribution to catalysis.'],
    ['concept', 'Starch and cellulose are both polymers of glucose. Why can humans digest starch but not cellulose?', 'The glucose monomers are joined by different glycosidic linkages, and human enzymes cannot hydrolyze those in cellulose.', 'Cellulose is made of amino acids instead of glucose.', 'Starch contains nitrogen, which human enzymes recognize.', 'Cellulose molecules are too small to be digested.', 'Starch has α linkages that human amylase breaks; cellulose has β linkages that human enzymes cannot break.'],
    ['predict', 'A plant has a mutation that prevents it from making cellulose. Which outcome is most likely?', 'Its cell walls are weak, so its cells cannot resist the pressure of water entering them.', 'It can no longer store energy as starch.', 'It cannot make proteins.', 'Its membranes lose all of their phospholipids.', 'Cellulose provides the structural strength of plant cell walls that resists turgor pressure.'],
    ['data', 'Elements found in four purified molecules:\nW: C, H, O\nX: C, H, O, N, S\nY: C, H, O, N, P\nZ: C, H, O (long hydrocarbon chains)\nWhich identification is most likely?', 'X is a protein and Y is a nucleic acid.', 'W is a protein and Z is a nucleic acid.', 'Y is a carbohydrate and X is a lipid.', 'Z is a protein and W is a nucleic acid.', 'Sulfur appears in some amino acids, and phosphorus appears in the backbone of nucleic acids.'],
    ['concept', 'Oil droplets added to water clump together instead of spreading out. Which explanation is best?', 'Water molecules hydrogen bond with each other and exclude the nonpolar oil molecules.', 'Oil molecules form hydrogen bonds with each other.', 'Oil is more polar than water.', 'Water forms covalent bonds with the oil.', 'Nonpolar molecules cannot hydrogen bond with water, so they are pushed together (the hydrophobic effect).'],
    { family: 'graph', context: 'Equal masses of water and vegetable oil were heated with identical burners. Their temperatures were recorded every minute.', plot: { xLabel: 'Time (min)', yLabel: 'Temperature (°C)', x: [0, 1, 2, 3, 4, 5], series: [{ name: 'Water', values: [20, 23, 26, 29, 32, 35] }, { name: 'Oil', values: [20, 26, 32, 38, 44, 50] }] }, prompt: 'Which explanation best accounts for the difference between the two lines?', choices: ['Water has a higher specific heat because energy is used to break hydrogen bonds.', 'Oil received more heat because it is less dense.', 'Water evaporated, so its temperature could not rise.', 'Oil molecules form more hydrogen bonds than water molecules.'], explanation: 'With the same energy input, water’s temperature rose half as fast, reflecting its high specific heat.' },
    ['predict', 'A plant cannot absorb phosphate from the soil. Which molecules would it have the most trouble making?', 'DNA, RNA, ATP, and phospholipids', 'Cellulose and starch', 'Glucose and fructose', 'Proteins that contain only carbon, hydrogen, oxygen, and nitrogen', 'Phosphorus is part of nucleic acids, ATP, and the heads of phospholipids.'],
    ['concept', 'A protein folds in the watery cytoplasm. Which R group is most likely to be found on the outer surface of the protein?', 'A polar or charged R group', 'A long nonpolar hydrocarbon R group', 'An R group that contains no atoms', 'Any R group, since R groups do not affect folding', 'Hydrophilic R groups interact favorably with water and tend to face outward; nonpolar R groups cluster inside.'],
    ['predict', 'An enzyme is unfolded with a chemical and loses activity. When the chemical is removed, the enzyme refolds and becomes active again. What does this show?', 'The information for folding is contained in the amino acid sequence.', 'The enzyme’s amino acid sequence changed during the treatment.', 'Enzymes can only fold inside living cells.', 'The chemical permanently broke peptide bonds.', 'Refolding without any other input shows that the primary structure determines the final shape.'],
    ['design', 'A student compares how fast table salt dissolves in water and in ethanol. Which factor must be kept the same in both trials?', 'The temperature of the two liquids', 'The type of liquid', 'The time it takes the salt to dissolve', 'Which liquid is tested first', 'The liquid is the independent variable and dissolving time is measured; temperature is a controlled variable.'],
    ['data', 'Solution A has a pH of 3, and solution B has a pH of 5. How does the hydrogen ion concentration of A compare with that of B?', 'A has 100 times more hydrogen ions than B.', 'A has 2 times more hydrogen ions than B.', 'B has 100 times more hydrogen ions than A.', 'A and B have the same hydrogen ion concentration.', 'The pH scale is logarithmic; each unit is a tenfold change, so 2 units is 10² = 100.']
  ],
  // Unit 2: Cell Structure and Function
  [
    ['concept', 'Which description of ribosomes is correct?', 'They are made of rRNA and protein and are found in all cells.', 'They are surrounded by a double membrane.', 'They are found only in eukaryotic cells.', 'They store genetic information as DNA.', 'All cells make proteins on ribosomes built from ribosomal RNA and proteins.'],
    ['concept', 'Which pairing of organelle and function is correct?', 'Smooth ER: synthesizes lipids and detoxifies some drugs', 'Rough ER: stores the cell’s DNA', 'Golgi complex: produces ATP', 'Lysosome: performs photosynthesis', 'Smooth ER lacks ribosomes and makes lipids; rough ER has ribosomes that make proteins.'],
    ['predict', 'A few lysosomes break open and release their enzymes into the cytosol, where the pH is about 7.2. Why is damage to the cell usually limited?', 'Lysosomal enzymes work best at acidic pH and are much less active in the cytosol.', 'The enzymes are immediately pumped back into the nucleus.', 'Cytosol contains no molecules the enzymes can break down.', 'The enzymes become active only at high temperature.', 'Lysosomal enzymes have an acidic pH optimum, so they work poorly at cytosolic pH.'],
    ['concept', 'How does the folded inner membrane of a mitochondrion support its function?', 'The folds increase surface area for electron transport chains and ATP synthase.', 'The folds store glucose for glycolysis.', 'The folds allow ribosomes to make lipids.', 'The folds prevent oxygen from entering the matrix.', 'More membrane area holds more of the proteins that carry out oxidative phosphorylation.'],
    ['concept', 'In a chloroplast, where are the pigments that capture light energy located?', 'In the thylakoid membranes', 'In the stroma', 'In the outer membrane', 'In the cell wall', 'Chlorophyll and the photosystems are embedded in thylakoid membranes.'],
    ['data', 'Cell parts are separated by centrifugation into three pellets:\nPellet 1: very high DNA content\nPellet 2: high levels of enzymes used in cellular respiration\nPellet 3: high levels of rRNA\nWhich organelle is most likely concentrated in pellet 2?', 'Mitochondria', 'Nuclei', 'Ribosomes', 'Lysosomes', 'Respiratory enzymes are located in mitochondria.'],
    ['predict', 'Enzymes normally sent to lysosomes carry a chemical tag added in the Golgi. If a cell cannot add this tag, where will these enzymes most likely end up?', 'They are secreted out of the cell.', 'They remain in the nucleus.', 'They are delivered to lysosomes faster.', 'They are moved into mitochondria.', 'Without the lysosomal sorting tag, the enzymes follow the default secretory pathway.'],
    ['concept', 'How are phospholipids arranged in a plasma membrane?', 'In a bilayer with hydrophilic heads facing the watery environments and hydrophobic tails facing inward', 'In a single layer with tails facing outward', 'In a bilayer with hydrophobic tails facing the cytoplasm', 'As a solid sheet bonded to the cell wall', 'The phosphate heads interact with water on both sides, and the fatty acid tails avoid water inside the bilayer.'],
    ['predict', 'Bacteria are moved from 25 °C to 42 °C and grown for many generations. Which change in their membranes would help keep membrane fluidity stable?', 'A higher proportion of saturated fatty acid tails', 'A higher proportion of unsaturated fatty acid tails', 'Removal of all membrane proteins', 'Replacement of phospholipids with starch', 'Saturated tails pack tightly and reduce the extra fluidity caused by high temperature.'],
    ['data', 'Relative rates at which molecules cross an artificial phospholipid bilayer:\nO₂: very high\nH₂O: moderate\nGlucose: very low\nNa⁺: almost zero\nWhich conclusion is best supported?', 'Small nonpolar molecules cross easily, while ions require transport proteins.', 'Ions cross the bilayer faster than gases.', 'Large polar molecules cross faster than small polar molecules.', 'All molecules cross at the same rate.', 'The hydrophobic core lets small nonpolar molecules through but blocks charged and large polar molecules.'],
    ['concept', 'What do facilitated diffusion and active transport have in common?', 'Both use membrane proteins to move substances.', 'Both require ATP.', 'Both move substances only against their concentration gradients.', 'Both move substances directly through the lipid bilayer.', 'Both rely on transport proteins, but only active transport uses energy to move substances against a gradient.'],
    ['predict', 'A drug blocks the sodium–potassium pump. Cells use the sodium gradient to bring glucose in through a cotransporter. What happens to glucose uptake?', 'It decreases because the sodium gradient runs down.', 'It increases because more sodium stays inside.', 'It is unchanged because glucose moves by simple diffusion.', 'It stops because glucose channels are destroyed.', 'Secondary active transport depends on the sodium gradient created by the pump.'],
    ['concept', 'How do pancreatic cells release insulin, a protein hormone?', 'Vesicles containing insulin fuse with the plasma membrane by exocytosis.', 'Insulin diffuses directly through the phospholipid bilayer.', 'Insulin is pumped out through aquaporins.', 'The cell takes in insulin by phagocytosis.', 'Large proteins leave the cell when secretory vesicles fuse with the plasma membrane.'],
    ['data', 'Onion cells were placed in sucrose solutions, and the percentage of plasmolyzed cells was counted:\n0.1 M: 0%\n0.2 M: 5%\n0.3 M: 48%\n0.4 M: 92%\n0.5 M: 100%\nWhich solution is closest to the solute concentration of the cells’ cytoplasm?', '0.3 M', '0.1 M', '0.5 M', '0.2 M', 'About half the cells plasmolyze where the solution is close to isotonic with the cell contents.'],
    ['predict', 'A plant cell is placed in distilled water. What will most likely happen?', 'Water enters and the cell becomes turgid, but the cell wall prevents it from bursting.', 'Water leaves and the cell plasmolyzes.', 'The cell bursts because plant cells have no cell wall.', 'Nothing happens because plant membranes are impermeable to water.', 'Water moves into the cell by osmosis; pressure from the cell wall balances further entry.'],
    ['concept', 'Which statement correctly describes water potential?', 'Water moves from an area of higher water potential to an area of lower water potential.', 'Water moves from lower water potential to higher water potential.', 'Adding solute raises water potential.', 'Water potential is always positive in living cells.', 'Solutes lower water potential, and water flows toward the lower value.'],
    ['concept', 'What is the role of aquaporins in a membrane?', 'They increase the rate of water movement across the membrane.', 'They pump water against its concentration gradient using ATP.', 'They determine the direction in which water moves.', 'They transport glucose into the cell.', 'Aquaporins are channels that speed water movement; the direction still depends on water potential.'],
    ['concept', 'Which observation supports the hypothesis that chloroplasts descended from photosynthetic prokaryotes?', 'Chloroplasts have two membranes and their own circular DNA.', 'Chloroplasts are made by the Golgi complex.', 'Chloroplasts are found in all eukaryotic cells.', 'Chloroplasts lack ribosomes.', 'A double membrane, circular DNA, and bacterial-type ribosomes all point to an endosymbiotic origin.'],
    ['design', 'Students observe Elodea leaf cells in a salt solution under a microscope to look for plasmolysis. What is the best control?', 'Cells from the same leaf observed in pond water with the same microscope', 'Cells from a different plant species in salt solution', 'The same salt solution observed with no cells', 'Cells observed in a more concentrated salt solution', 'The control matches every condition except the salt treatment.'],
    { family: 'graph', context: 'Cells were placed in solutions with increasing concentrations of two different solutes, and the initial rate of uptake of each solute was measured.', plot: { xLabel: 'Outside concentration (mM)', yLabel: 'Uptake rate (units)', x: [0, 2, 4, 6, 8, 10], series: [{ name: 'Solute A', values: [0, 4, 8, 12, 16, 20] }, { name: 'Solute B', values: [0, 7, 11, 13, 14, 14] }] }, prompt: 'Which conclusion is best supported by the data?', choices: ['Solute B uses carrier proteins that become saturated, while solute A may cross by simple diffusion.', 'Solute A uses carrier proteins that become saturated.', 'Both solutes cross by simple diffusion.', 'Solute B enters by osmosis.'], explanation: 'A rate that levels off indicates a limited number of carriers; a straight-line increase fits simple diffusion.' }
  ],
  // Unit 3: Cellular Energetics
  [
    ['concept', 'The final product of a metabolic pathway binds to the first enzyme of the pathway at a site other than its active site and reduces its activity. What is this called?', 'Feedback inhibition by an allosteric inhibitor', 'Competitive inhibition', 'Denaturation', 'Activation energy', 'An end product binding an allosteric site turns off its own production.'],
    ['predict', 'The end product of a five-step pathway builds up in a cell. If the pathway is controlled by feedback inhibition, what happens next?', 'The first enzyme of the pathway is inhibited, and production slows.', 'The last enzyme of the pathway speeds up.', 'All five enzymes are destroyed.', 'The cell makes more of the first substrate.', 'Feedback inhibition prevents wasting resources on more product than is needed.'],
    ['data', 'An enzyme’s reaction rate rises with substrate concentration and then levels off at high substrate concentrations. How could the maximum rate be increased?', 'Add more enzyme.', 'Add more substrate.', 'Add a competitive inhibitor.', 'Lower the temperature far below the optimum.', 'At saturating substrate, every enzyme is busy; only more enzyme raises the maximum rate.'],
    ['concept', 'Some enzymes need a magnesium ion bound to them in order to work. What is the magnesium ion?', 'A cofactor', 'A substrate', 'A product', 'An allosteric inhibitor', 'Inorganic ions that help enzymes function are cofactors.'],
    ['concept', 'How does a cell use ATP to drive a reaction that would not happen on its own?', 'It couples ATP hydrolysis to the reaction, often by transferring a phosphate to a reactant.', 'It uses ATP to raise the temperature of the cell.', 'It converts ATP directly into glucose.', 'It uses ATP as an enzyme.', 'Energy released by ATP hydrolysis is coupled to endergonic reactions through phosphorylated intermediates.'],
    { family: 'graph', context: 'The same amount of an enzyme was mixed with excess substrate at two temperatures. Product was measured every 2 minutes.', plot: { xLabel: 'Time (min)', yLabel: 'Product (µmol)', x: [0, 2, 4, 6, 8, 10], series: [{ name: '25 °C', values: [0, 4, 8, 12, 16, 20] }, { name: '45 °C', values: [0, 9, 15, 18, 19, 19] }] }, prompt: 'Substrate was still present at 10 minutes in both tubes. Which explanation best accounts for the 45 °C results?', choices: ['The enzyme worked faster at first but was gradually denatured at 45 °C.', 'The substrate was used up at 45 °C.', 'The enzyme was inhibited by product at 25 °C.', 'Higher temperature always increases the total amount of product.'], explanation: 'The fast early rate shows higher kinetic energy, and the plateau with substrate remaining shows the enzyme lost activity over time.' },
    ['concept', 'Plants are given water containing the heavy oxygen isotope ¹⁸O. Where will the ¹⁸O first appear?', 'In the oxygen gas released during photosynthesis', 'In the glucose produced', 'In the CO₂ the plant absorbs', 'In the chlorophyll molecules', 'Photosystem II splits water, so the O₂ released comes from water.'],
    ['predict', 'A herbicide blocks electron flow out of photosystem II. Which effect is most likely?', 'Production of ATP and NADPH falls, so the Calvin cycle slows.', 'The Calvin cycle speeds up because more CO₂ is available.', 'More oxygen is released.', 'Chlorophyll absorbs more light.', 'Without electron flow, the light reactions cannot supply the ATP and NADPH the Calvin cycle needs.'],
    ['concept', 'What happens during the Calvin cycle?', 'ATP and NADPH are used to convert fixed CO₂ into sugar in the stroma.', 'Water is split to release oxygen in the thylakoids.', 'Light energy excites electrons in chlorophyll.', 'Glucose is broken down into pyruvate in the cytosol.', 'Rubisco fixes CO₂, and the products are reduced to G3P using ATP and NADPH.'],
    ['concept', 'Which pairing of process and location in a eukaryotic cell is correct?', 'Krebs cycle: mitochondrial matrix', 'Glycolysis: inner mitochondrial membrane', 'Electron transport chain: cytosol', 'Calvin cycle: mitochondrial matrix', 'Glycolysis is in the cytosol, the Krebs cycle in the matrix, and the electron transport chain in the inner membrane.'],
    ['concept', 'What is the role of oxygen in cellular respiration?', 'It is the final electron acceptor and forms water.', 'It is converted into carbon dioxide.', 'It provides the carbon atoms for glucose.', 'It is used to make NADH in glycolysis.', 'Oxygen accepts electrons at the end of the electron transport chain, combining with H⁺ to form water.'],
    ['predict', 'Yeast growing in a sealed container use up the oxygen. Which process allows them to keep making ATP?', 'Alcohol fermentation, which regenerates NAD⁺ and releases ethanol and CO₂', 'Lactic acid fermentation, which releases O₂', 'The Calvin cycle', 'Oxidative phosphorylation using CO₂ as the electron acceptor', 'Yeast ferment pyruvate to ethanol and CO₂, recycling NAD⁺ so glycolysis can continue.'],
    ['data', 'Oxygen consumption by peas in a respirometer (mL in 20 min):\nGerminating peas at 10 °C: 0.4\nGerminating peas at 20 °C: 0.9\nDry peas at 20 °C: 0.05\nWhich conclusion is best supported?', 'Germinating peas respire more than dry peas, and their rate increases with temperature.', 'Dry peas respire faster than germinating peas.', 'Temperature has no effect on respiration.', 'Germinating peas do not use oxygen.', 'Germinating seeds are metabolically active, and warmer temperatures speed enzyme-catalyzed reactions.'],
    ['design', 'In a respirometer experiment, potassium hydroxide (KOH) is added to each vial. What is its purpose?', 'It absorbs CO₂, so changes in gas volume reflect oxygen consumption.', 'It provides oxygen for the seeds.', 'It keeps the temperature constant.', 'It speeds up respiration.', 'Removing CO₂ means the volume decrease measured is caused by O₂ being used.'],
    ['design', 'A respirometer containing only glass beads is set up next to vials with seeds. Why?', 'It detects volume changes caused by temperature or pressure rather than respiration.', 'It measures how fast glass beads respire.', 'It supplies extra oxygen to the other vials.', 'It is the independent variable.', 'Any change in the bead vial reflects the environment and is used to correct the seed readings.'],
    ['concept', 'Which statement describes chemiosmosis in both mitochondria and chloroplasts?', 'ATP synthase uses the flow of protons down their gradient to make ATP.', 'Glucose is split directly by ATP synthase.', 'Oxygen is pumped across a membrane to make ATP.', 'ATP is made only in the cytosol.', 'Both organelles build a proton gradient across a membrane and use it to power ATP synthase.'],
    ['predict', 'A chemical makes the pH inside the thylakoids equal to the pH of the stroma while light is still on. Which result is most likely?', 'ATP production by the chloroplast stops.', 'More ATP is produced.', 'The Calvin cycle no longer needs ATP.', 'Light absorption by chlorophyll stops.', 'Without a proton gradient, ATP synthase has no energy source.'],
    ['data', 'Chlorophyll a absorbs very little light at 480 nm, yet a plant photosynthesizes well at 480 nm. Which explanation is best?', 'Accessory pigments absorb 480 nm light and pass the energy to chlorophyll a.', 'Chlorophyll a absorbs 480 nm light most strongly.', 'Photosynthesis does not require light absorption.', 'The plant uses 480 nm light only for respiration.', 'Pigments such as carotenoids broaden the range of light that drives photosynthesis.'],
    ['concept', 'How many ATP are produced in total per glucose by fermentation?', '2 ATP, all from glycolysis', '36 ATP', '0 ATP', '4 ATP from the Krebs cycle', 'Fermentation does not make additional ATP; it only regenerates NAD⁺ so glycolysis can continue.'],
    ['predict', 'ATP normally binds an allosteric site on phosphofructokinase and slows glycolysis. A mutation prevents ATP from binding there. Which outcome is most likely?', 'Glycolysis continues at a high rate even when ATP is plentiful.', 'Glycolysis stops completely.', 'The cell can no longer make pyruvate.', 'The enzyme’s active site no longer binds its substrate.', 'Without feedback inhibition by ATP, the pathway is not slowed when energy is abundant.']
  ],
  // Unit 4: Cell Communication and Cell Cycle
  [
    ['concept', 'What is the correct order of the stages of cell signaling?', 'Reception, transduction, response', 'Transduction, reception, response', 'Response, reception, transduction', 'Reception, response, transduction', 'A signal is received by a receptor, relayed by a transduction pathway, and produces a response.'],
    ['concept', 'A hormone circulates through the whole body but affects only certain cells. Why?', 'Only those cells have receptors that bind the hormone.', 'The hormone is destroyed in all other cells.', 'Only those cells have DNA.', 'The hormone can enter only cells that are dividing.', 'A cell responds only if it has the specific receptor for that signal.'],
    ['predict', 'A mutation prevents a G protein from hydrolyzing its bound GTP. What is the most likely effect?', 'The G protein stays active, and the signal continues after the ligand is gone.', 'The G protein can never be activated.', 'The receptor can no longer bind its ligand.', 'The cell stops making ATP.', 'Hydrolysis of GTP to GDP turns a G protein off; without it, signaling continues.'],
    ['concept', 'In many pathways, the enzyme adenylyl cyclase makes cAMP. What role does cAMP play?', 'It is a second messenger that activates protein kinases.', 'It is the first messenger that binds the receptor.', 'It is a receptor protein in the membrane.', 'It is a transcription factor in the nucleus.', 'cAMP relays and amplifies the signal inside the cell, often by activating protein kinase A.'],
    ['predict', 'Caffeine inhibits the enzyme that breaks down cAMP. In a cell responding to a hormone that raises cAMP, what will caffeine do?', 'It will prolong the cell’s response.', 'It will block the hormone from binding its receptor.', 'It will stop the cell from making cAMP.', 'It will have no effect on the response.', 'If cAMP is not broken down, its level stays high and the response lasts longer.'],
    ['concept', 'What happens when a receptor tyrosine kinase is activated by its ligand?', 'The receptors pair up and phosphorylate each other’s tyrosines, activating relay proteins.', 'The receptor enters the nucleus and binds DNA.', 'The receptor opens a channel for water.', 'The receptor hydrolyzes cAMP.', 'Dimerization and autophosphorylation create docking sites that activate several pathways at once.'],
    ['data', 'Cell responses to a hormone:\nNormal cells: strong response\nCells lacking the receptor: no response\nCells with the receptor plus a kinase inhibitor: no response\nWhich conclusion is best supported?', 'The response requires both the receptor and kinase activity.', 'The response requires only the receptor.', 'The kinase inhibitor increases the response.', 'The hormone acts without any receptor.', 'Removing either the receptor or kinase activity eliminates the response, so both are required.'],
    ['concept', 'Which example describes paracrine (local) signaling rather than endocrine signaling?', 'A growth factor released by one cell acts on nearby cells in the same tissue.', 'Insulin travels through the blood to muscle cells.', 'A hormone from the pituitary gland acts on the kidneys.', 'Adrenaline circulates to the heart.', 'Paracrine signals act over short distances; endocrine hormones travel in the blood.'],
    ['concept', 'When body temperature rises, sweating increases, and evaporation cools the body. What kind of regulation is this?', 'Negative feedback', 'Positive feedback', 'Signal amplification', 'Apoptosis', 'The response (cooling) counteracts the change (heating), returning the body toward its set point.'],
    ['concept', 'When a blood vessel is damaged, activated platelets release chemicals that attract more platelets. What kind of regulation is this?', 'Positive feedback', 'Negative feedback', 'Homeostasis', 'Feedback inhibition of an enzyme', 'The response amplifies the original change until the clot forms.'],
    ['concept', 'What is the correct order of the phases of the eukaryotic cell cycle?', 'G₁, S, G₂, M', 'S, G₁, M, G₂', 'M, S, G₁, G₂', 'G₁, G₂, S, M', 'Cells grow in G₁, copy DNA in S, prepare in G₂, and divide in M.'],
    ['concept', 'What happens to a cell’s DNA during S phase?', 'It is replicated, so each chromosome consists of two sister chromatids.', 'It is divided equally between two daughter cells.', 'It condenses and attaches to the spindle.', 'It is transcribed into mRNA for the first time.', 'DNA replication in S phase doubles the DNA content.'],
    ['data', 'DNA content was measured in cells from a dividing culture:\n2 units: 60% of cells\nBetween 2 and 4 units: 15% of cells\n4 units: 25% of cells\nIn which phase are the cells with between 2 and 4 units?', 'S phase', 'G₁', 'G₂ or mitosis', 'G₀', 'Cells in S phase are partway through copying their DNA.'],
    ['predict', 'Normally, a cyclin is destroyed near the end of mitosis. If this cyclin cannot be destroyed, what is the most likely result?', 'The cell stays in mitosis and cannot complete division normally.', 'The cell skips mitosis.', 'The cell divides faster.', 'The cell replicates its DNA twice in a row.', 'Cyclin breakdown inactivates the cyclin-dependent kinase so the cell can exit mitosis.'],
    ['concept', 'What does the G₂ checkpoint check before a cell enters mitosis?', 'Whether DNA replication is complete and the DNA is undamaged', 'Whether chromosomes are attached to the spindle', 'Whether the cell has enough nutrients to start G₁', 'Whether sister chromatids have separated', 'The G₂ checkpoint prevents cells with incomplete or damaged DNA from dividing.'],
    ['concept', 'How can a mutation in a tumor suppressor gene such as p53 contribute to cancer?', 'Cells with damaged DNA are no longer stopped or destroyed, so they keep dividing.', 'It makes cells divide more slowly.', 'It makes all cells undergo apoptosis.', 'It prevents DNA replication.', 'Tumor suppressors halt the cell cycle or trigger apoptosis when DNA is damaged.'],
    ['concept', 'During development, the cells between the fingers of a human embryo die, separating the fingers. Which process causes this?', 'Apoptosis', 'Mitosis', 'Meiosis', 'Necrosis caused by infection', 'Programmed cell death removes cells in a controlled way during development.'],
    ['design', 'Researchers want to know whether a drug blocks a hormone’s receptor. Which set of treatments is best?', 'No treatment, hormone only, and hormone plus drug', 'Drug only', 'Hormone only at three temperatures', 'Hormone plus drug only', 'Comparing hormone alone with hormone plus drug, against an untreated baseline, shows whether the drug blocks the response.'],
    { family: 'graph', context: 'Two identical cultures of cells were grown with or without a growth factor.', plot: { xLabel: 'Day', yLabel: 'Cells (× 10⁴)', x: [0, 1, 2, 3, 4], series: [{ name: 'With growth factor', values: [1, 2, 4, 8, 16] }, { name: 'Without growth factor', values: [1, 1.2, 1.3, 1.3, 1.4] }] }, prompt: 'Which conclusion is best supported?', choices: ['The growth factor stimulates cells to divide, with numbers doubling about once a day.', 'Cells divide faster without the growth factor.', 'The growth factor kills cells.', 'The growth factor has no effect on cell number.'], explanation: 'With the growth factor, the cell count doubles each day; without it, the count barely changes.' },
    ['concept', 'Which statement about mitosis is correct?', 'It produces two daughter cells with the same number of chromosomes as the parent cell.', 'It produces four genetically different cells.', 'It halves the chromosome number.', 'It occurs only in gametes.', 'Mitosis distributes identical copies of each chromosome to two daughter cells.']
  ],
  // Unit 5: Heredity
  [
    ['concept', 'What are the products of meiosis in an animal cell?', 'Four haploid cells that are genetically different from each other', 'Two diploid cells that are genetically identical', 'Four diploid cells that are identical', 'Two haploid cells that are identical', 'Meiosis halves the chromosome number and shuffles alleles.'],
    ['concept', 'What separates during meiosis I and meiosis II?', 'Homologous chromosomes in meiosis I; sister chromatids in meiosis II', 'Sister chromatids in meiosis I; homologous chromosomes in meiosis II', 'Homologous chromosomes in both divisions', 'Sister chromatids in both divisions', 'Meiosis I separates homologs; meiosis II separates chromatids, as in mitosis.'],
    ['predict', 'Nondisjunction of one pair of homologous chromosomes occurs in meiosis I. What is expected among the four gametes?', 'All four gametes have an abnormal number of chromosomes.', 'Two gametes are normal and two are abnormal.', 'All four gametes are normal.', 'Only one gamete is abnormal.', 'If homologs fail to separate in meiosis I, two gametes get an extra chromosome and two are missing one.'],
    ['concept', 'When does independent assortment of chromosomes occur?', 'When homologous pairs line up randomly at metaphase I', 'When sister chromatids separate in anaphase II', 'During DNA replication in S phase', 'During cytokinesis of mitosis', 'Each homologous pair orients independently of the others at metaphase I.'],
    ['predict', 'Two pea plants heterozygous for height (Tt) are crossed. Tall (T) is dominant. What fraction of the offspring is expected to be short?', '1/4', '1/2', '3/4', '0', 'Tt × Tt gives 1 TT : 2 Tt : 1 tt, so one quarter are tt.'],
    ['predict', 'A plant with the dominant phenotype is crossed with a homozygous recessive plant. Half the offspring show the recessive phenotype. What is the genotype of the first plant?', 'Heterozygous', 'Homozygous dominant', 'Homozygous recessive', 'It cannot carry a recessive allele', 'Recessive offspring must receive a recessive allele from both parents, so the dominant parent is heterozygous.'],
    ['concept', 'A person with blood type AB has both A and B antigens on their red blood cells. What pattern of inheritance is this?', 'Codominance', 'Incomplete dominance', 'Complete dominance', 'Sex linkage', 'Both alleles are fully expressed in the heterozygote.'],
    ['predict', 'A person with genotype Iᴬi has children with a person with genotype Iᴮi, where i is the recessive allele for type O. What blood types are possible among their children?', 'A, B, AB, and O, each with probability 1/4', 'Only A and B', 'Only AB', 'Only O', 'The cross Iᴬi × Iᴮi gives IᴬIᴮ, Iᴬi, Iᴮi, and ii in equal proportions.'],
    ['predict', 'A man with an X-linked recessive disorder has children with a woman who is homozygous for the normal allele. What is expected?', 'All daughters are carriers, and no sons are affected.', 'All sons are affected.', 'Half of the daughters are affected.', 'All children are affected.', 'Daughters get his X with the allele; sons get his Y and their mother’s normal X.'],
    ['data', 'In a pedigree, a trait appears in every generation. Affected fathers pass it to all of their daughters but none of their sons. Which pattern fits best?', 'X-linked dominant', 'Autosomal recessive', 'Y-linked', 'Mitochondrial', 'Fathers give their X to all daughters and their Y to all sons, so an X-linked dominant trait follows this pattern.'],
    ['concept', 'Why are X-linked recessive traits more common in males than in females?', 'Males have only one X chromosome, so one recessive allele is enough to show the trait.', 'Males have two X chromosomes.', 'The Y chromosome carries the dominant allele.', 'Females cannot inherit X-linked alleles.', 'Males are hemizygous for X-linked genes.'],
    ['concept', 'Two genes are close together on the same chromosome. How are their alleles usually inherited?', 'Together, unless crossing over separates them', 'Always independently of each other', 'Never together', 'Only through the mother', 'Linked genes are inherited as a unit except when crossing over occurs between them.'],
    ['predict', 'Adult height in a population shows a smooth bell-shaped range of values. Which explanation is most likely?', 'Height is influenced by many genes and by the environment.', 'Height is controlled by one gene with two alleles showing complete dominance.', 'Height is a Y-linked trait.', 'Height is controlled only by mitochondrial DNA.', 'Polygenic traits plus environmental effects produce continuous variation.'],
    ['concept', 'In some turtles, eggs incubated at warmer temperatures develop into females and cooler ones into males. What does this show?', 'The environment can affect the phenotype that develops.', 'Temperature changes the turtles’ DNA sequence.', 'Sex in turtles is determined by X-linked genes only.', 'All turtles are genetically identical.', 'This is phenotypic plasticity: the same genome develops differently under different conditions.'],
    ['predict', 'A woman has a disorder caused by a mutation in her mitochondrial DNA. Her partner is unaffected. Which of their children are expected to inherit the mutation?', 'All of the children', 'Only the sons', 'Only the daughters', 'None of the children', 'Mitochondria are passed to all offspring through the egg.'],
    ['concept', 'Down syndrome is usually caused by an extra copy of chromosome 21. How does this usually arise?', 'Nondisjunction during meiosis in a parent', 'Crossing over in the zygote', 'A point mutation on chromosome 21', 'Exposure to sunlight', 'Failure of chromosome 21 to separate produces a gamete with an extra copy.'],
    ['data', 'A dihybrid cross of two heterozygotes (AaBb × AaBb) produces 160 offspring. The genes assort independently. How many offspring are expected to show both recessive traits?', '10', '30', '90', '40', 'The expected fraction is 1/16, and 160 × 1/16 = 10.'],
    ['concept', 'Which event happens in meiosis but not in mitosis?', 'Homologous chromosomes pair up and cross over.', 'Chromosomes condense.', 'Sister chromatids separate.', 'The nuclear envelope breaks down.', 'Synapsis and crossing over occur only in prophase I of meiosis.'],
    ['predict', 'If crossing over never occurred, how would offspring be affected?', 'Alleles of linked genes would always stay in their parental combinations, reducing variation.', 'Offspring would be genetically identical to one parent.', 'Independent assortment would also stop.', 'Gametes would be diploid.', 'Crossing over creates new combinations of linked alleles; without it, those combinations would not form.'],
    ['design', 'A geneticist wants to know whether two genes are linked. Which approach is best?', 'Testcross a dihybrid and check whether recombinant offspring are well below 50%.', 'Self-cross a homozygous recessive plant.', 'Count chromosomes in a skin cell.', 'Cross two homozygous dominant plants.', 'Unlinked genes give about 50% recombinants in a testcross; far fewer indicates linkage.']
  ],
  // Unit 6: Gene Expression and Regulation
  [
    ['concept', 'Which enzyme joins Okazaki fragments into a continuous DNA strand?', 'DNA ligase', 'Helicase', 'Primase', 'RNA polymerase', 'Ligase seals the gaps in the sugar-phosphate backbone between fragments.'],
    ['predict', 'A cell has a nonfunctional DNA ligase. What happens during DNA replication?', 'The lagging strand stays in disconnected fragments.', 'The double helix cannot be unwound.', 'No RNA primers are made.', 'The leading strand cannot be made at all.', 'Ligase joins Okazaki fragments; without it, the lagging strand remains in pieces.'],
    ['concept', 'In which direction does RNA polymerase build an RNA molecule?', '5′ to 3′, while reading the template strand 3′ to 5′', '3′ to 5′, while reading the template strand 5′ to 3′', 'In both directions at once', 'In whatever direction the ribosome is moving', 'Nucleotides are added to the 3′ end of the growing RNA.'],
    ['concept', 'A DNA template strand reads 3′-TACGGA-5′. What is the mRNA transcribed from it?', '5′-AUGCCU-3′', '5′-UACGGA-3′', '5′-ATGCCT-3′', '3′-AUGCCU-5′', 'mRNA is complementary and antiparallel to the template, with U in place of T.'],
    ['concept', 'An mRNA codon reads 5′-AUG-3′. Which tRNA anticodon pairs with it?', '3′-UAC-5′', '5′-AUG-3′', '3′-TAC-5′', '5′-UAC-3′', 'The anticodon is complementary and antiparallel to the codon.'],
    ['concept', 'Where does translation begin on an mRNA?', 'At the start codon AUG, which codes for methionine', 'At the first stop codon', 'At the 5′ cap, with any codon', 'At the poly-A tail', 'Ribosomes begin translating at the AUG start codon.'],
    ['predict', 'A point mutation changes a codon in the middle of a gene into a stop codon. What is the most likely result?', 'A shorter protein that is often nonfunctional', 'A longer protein', 'No change in the protein', 'An mRNA that cannot be transcribed', 'A nonsense mutation ends translation early.'],
    ['predict', 'A mutation replaces leucine with isoleucine, a similar nonpolar amino acid, on the surface of a protein far from its active site. What is the most likely effect?', 'Little or no change in the protein’s function', 'The protein cannot be made at all', 'All amino acids after the mutation change', 'The protein becomes a nucleic acid', 'A conservative substitution away from functional sites usually has little effect.'],
    ['concept', 'What do the 5′ cap and poly-A tail do for a eukaryotic mRNA?', 'They protect it from breakdown and help it leave the nucleus and be translated.', 'They code for the first and last amino acids.', 'They are removed before translation begins.', 'They bind RNA polymerase to the promoter.', 'These modifications stabilize the mRNA and aid export and ribosome binding.'],
    ['concept', 'What happens to introns in a eukaryotic pre-mRNA?', 'They are removed, and the exons are joined together.', 'They are translated into protein.', 'They are added to the 5′ end.', 'They are copied into DNA.', 'Splicing removes introns before the mRNA leaves the nucleus.'],
    ['concept', 'How do transcription factors control eukaryotic gene expression?', 'They bind regulatory DNA sequences and help or block RNA polymerase at the promoter.', 'They translate mRNA into protein.', 'They splice introns out of mRNA.', 'They replicate DNA.', 'Activators and repressors binding enhancers and promoters control whether a gene is transcribed.'],
    ['concept', 'How does acetylation of histones usually affect gene expression?', 'It loosens chromatin, making genes more accessible for transcription.', 'It packs chromatin tightly and silences genes.', 'It changes the DNA sequence.', 'It destroys the promoter.', 'Acetylation reduces histones’ hold on DNA, opening chromatin to transcription machinery.'],
    ['predict', 'A drug blocks the enzymes that remove acetyl groups from histones. What is the most likely effect?', 'Chromatin stays more open, and transcription of affected genes increases.', 'All genes are silenced.', 'DNA replication stops.', 'Introns are no longer removed.', 'Keeping histones acetylated maintains open chromatin.'],
    ['concept', 'What is an operon?', 'A group of prokaryotic genes controlled by one promoter and operator', 'A eukaryotic gene with many introns', 'A protein that binds to mRNA', 'A sequence that ends translation', 'Operons let bacteria regulate several related genes together.'],
    ['predict', 'A mutation changes the lac repressor so that it can no longer bind the operator. What happens?', 'The lac genes are transcribed even when lactose is absent.', 'The lac genes are never transcribed.', 'Lactose can no longer enter the cell.', 'The cell can no longer make the repressor mRNA.', 'Without repression, the operon is expressed constantly.'],
    ['concept', 'In gel electrophoresis, why does DNA move toward the positive electrode?', 'The phosphate groups give DNA a negative charge.', 'DNA is positively charged.', 'The gel pushes all molecules in that direction.', 'Larger fragments are attracted more strongly.', 'Negatively charged DNA migrates toward the positive pole; smaller fragments move farther.'],
    ['concept', 'Why are restriction enzymes useful for making recombinant DNA?', 'They cut DNA at specific sequences, often leaving sticky ends that can pair with other DNA cut the same way.', 'They copy DNA many times.', 'They join any two DNA fragments without needing matching ends.', 'They translate DNA into protein.', 'Matching sticky ends let a gene be inserted into a plasmid, then sealed by ligase.'],
    ['concept', 'Bacteria are mixed with a plasmid that carries an ampicillin resistance gene and then spread on ampicillin plates. Why?', 'Only bacteria that took up the plasmid can grow, so transformed cells are selected.', 'Ampicillin helps the bacteria take up the plasmid.', 'Ampicillin kills only transformed bacteria.', 'It ensures every bacterium is transformed.', 'The resistance gene is a marker that lets only transformed cells survive.'],
    ['data', 'Results of a transformation experiment:\nBacteria + plasmid on plain agar: lawn of growth\nBacteria + plasmid on ampicillin agar: 45 colonies\nBacteria without plasmid on ampicillin agar: no growth\nWhich conclusion is best supported?', 'Some bacteria took up the plasmid and gained ampicillin resistance.', 'All the bacteria were naturally resistant to ampicillin.', 'The plasmid killed the bacteria.', 'Ampicillin has no effect on these bacteria.', 'Growth on ampicillin only with the plasmid shows that the plasmid carries the resistance gene.'],
    ['concept', 'How does ultraviolet light cause mutations?', 'It can bond adjacent thymine bases together, distorting the DNA.', 'It changes ribose into deoxyribose.', 'It adds extra chromosomes to cells.', 'It breaks peptide bonds in histones.', 'Thymine dimers can lead to errors during replication if they are not repaired.']
  ],
  // Unit 7: Natural Selection
  [
    ['concept', 'On what does natural selection act directly?', 'Phenotypes of individuals', 'Genotypes that are not expressed', 'Entire species at once', 'Mutations that have not yet occurred', 'Selection acts on traits that affect survival and reproduction; populations then evolve.'],
    ['concept', 'Which condition is required for natural selection to change a population?', 'Heritable variation that affects reproductive success', 'A population that never changes in size', 'Individuals that change their traits during their lifetime', 'Identical individuals', 'Selection needs variation, inheritance, and differences in survival or reproduction.'],
    ['predict', 'Human babies with very low or very high birth weights have lower survival than babies of average weight. What is the expected effect on the birth-weight distribution?', 'The range narrows around the average.', 'The average shifts toward higher weights.', 'The distribution splits into two peaks.', 'The range becomes wider.', 'This is stabilizing selection, which favors intermediate phenotypes.'],
    ['predict', 'In a bird population, only very small and very large seeds are available, and birds with medium beaks have low survival. What is the expected effect?', 'Two peaks form in the distribution of beak sizes.', 'The distribution narrows around the medium size.', 'All birds develop medium beaks.', 'Beak size stops being heritable.', 'Disruptive selection favors both extremes.'],
    ['concept', 'In which population is genetic drift likely to have the largest effect?', 'A small, isolated population', 'A very large population', 'A population with high gene flow', 'A population under strong directional selection', 'Random changes in allele frequency are larger when fewer individuals reproduce.'],
    ['concept', 'A few birds from a large mainland population colonize an island. The island population has different allele frequencies from the mainland. What is this called?', 'The founder effect', 'Gene flow', 'Stabilizing selection', 'Convergent evolution', 'A small founding group carries only a sample of the original population’s alleles.'],
    ['concept', 'Broccoli, cabbage, and kale were all developed from one wild mustard species by farmers. What process produced them?', 'Artificial selection', 'Natural selection', 'Genetic drift', 'Gene flow', 'Humans chose which plants to breed for desired traits.'],
    ['concept', 'The bones of a human arm, a whale flipper, and a bat wing have the same basic arrangement. What do these homologous structures indicate?', 'Common ancestry', 'Convergent evolution', 'That they have identical functions', 'That they evolved independently', 'Similar underlying structure inherited from a common ancestor is homology.'],
    ['concept', 'Some whales have small pelvic bones that do not support legs. What are these bones evidence of?', 'Descent from four-legged ancestors', 'Recent mutations in all whales', 'Convergent evolution with fish', 'Artificial selection', 'Vestigial structures are remnants of features that were functional in ancestors.'],
    ['data', 'Characters present (+) or absent (−) in four species:\nSpecies P: vertebrae −, jaws −, lungs −\nSpecies Q: vertebrae +, jaws −, lungs −\nSpecies R: vertebrae +, jaws +, lungs −\nSpecies S: vertebrae +, jaws +, lungs +\nWhich species is the best outgroup?', 'P', 'Q', 'R', 'S', 'The outgroup lacks all the shared derived characters found in the other species.'],
    ['concept', 'Nearly all organisms use the same genetic code. What does this support?', 'All life shares a common ancestor.', 'Life arose many separate times.', 'The genetic code changes rapidly.', 'Only animals share a common ancestor.', 'A universal code is best explained by inheritance from a single common ancestor.'],
    ['concept', 'A river changes course and splits a population of beetles into two groups that can no longer meet. Over many generations, they become different species. What type of speciation is this?', 'Allopatric speciation', 'Sympatric speciation', 'Artificial selection', 'Gene flow', 'Geographic separation allows populations to diverge independently.'],
    ['concept', 'A plant produces offspring with twice the normal number of chromosome sets, and these offspring cannot breed with the parent population. What has occurred?', 'Sympatric speciation by polyploidy', 'Allopatric speciation', 'The founder effect', 'Stabilizing selection', 'Polyploidy can create reproductive isolation instantly, without geographic separation.'],
    ['concept', 'A horse and a donkey can mate and produce a mule, but mules are sterile. What kind of barrier is this?', 'A postzygotic barrier: hybrid sterility', 'A prezygotic barrier: temporal isolation', 'A prezygotic barrier: behavioral isolation', 'Gene flow', 'The barrier acts after fertilization, because the hybrid cannot reproduce.'],
    ['predict', 'Fossils of a snail lineage show almost no change for millions of years, followed by rapid change over a short period. Which model does this support?', 'Punctuated equilibrium', 'Gradualism', 'Stabilizing selection only', 'Hardy–Weinberg equilibrium', 'Long periods of stasis broken by rapid change fit punctuated equilibrium.'],
    ['concept', 'After a mass extinction, one surviving group quickly gives rise to many new species with varied lifestyles. What is this called?', 'Adaptive radiation', 'Convergent evolution', 'Genetic drift', 'A bottleneck', 'Many open niches allow rapid diversification from a common ancestor.'],
    ['concept', 'What does it mean if a population is in Hardy–Weinberg equilibrium?', 'Its allele and genotype frequencies stay constant from generation to generation.', 'It is evolving rapidly.', 'All individuals have the same genotype.', 'Natural selection is acting strongly.', 'Equilibrium means no evolutionary forces are changing allele frequencies.'],
    ['concept', 'Why do many scientists think RNA came before DNA and proteins in early life?', 'RNA can store genetic information and catalyze reactions.', 'RNA is more stable than DNA.', 'RNA cannot be copied.', 'RNA contains amino acids.', 'Ribozymes show that RNA can act as both genetic material and catalyst.'],
    ['data', 'In a region where air pollution was reduced, tree trunks became lighter as lichens returned. The proportion of dark-colored moths fell from 90% to 10% over 40 years. Which explanation is best?', 'Light moths were better hidden from predators, so they survived and reproduced more.', 'Dark moths changed color to match the trees.', 'Pollution caused mutations that made moths light.', 'Moth color is not heritable.', 'Predation favored camouflaged moths, changing the population’s allele frequencies.'],
    { family: 'graph', context: 'A computer model tracked the frequency of a neutral allele in populations of different sizes, starting at 0.5.', plot: { xLabel: 'Generation', yLabel: 'Allele frequency', x: [0, 10, 20, 30, 40, 50], series: [{ name: 'Population of 20', values: [0.5, 0.65, 0.4, 0.75, 0.9, 1] }, { name: 'Population of 5,000', values: [0.5, 0.51, 0.49, 0.5, 0.52, 0.5] }] }, prompt: 'Which process best explains the difference between the two populations?', choices: ['Genetic drift, which has a stronger effect in small populations', 'Natural selection favoring the allele in the small population only', 'Gene flow into the large population', 'Mutation occurring only in the small population'], explanation: 'The allele is neutral, so the random swings and fixation in the small population reflect drift.' }
  ],
  // Unit 8: Ecology
  [
    ['concept', 'Many birds begin migrating when day length shortens in autumn. What does this show?', 'Organisms respond to environmental cues with changes in behavior.', 'Birds migrate only when they run out of food.', 'Migration is caused by random mutations each year.', 'Day length has no effect on animals.', 'Changes in photoperiod act as a signal that triggers migratory behavior.'],
    ['concept', 'Why does a mouse need much more food per gram of body mass than a lizard of the same size?', 'The mouse is an endotherm and uses energy from metabolism to keep its body warm.', 'The lizard is an endotherm.', 'The mouse uses less oxygen.', 'Lizards do not respire.', 'Endotherms spend much of their energy generating body heat.'],
    ['concept', 'Why do small endotherms, such as shrews, have higher metabolic rates per gram than large endotherms, such as elephants?', 'Their large surface area-to-volume ratio makes them lose heat faster.', 'They have smaller surface area-to-volume ratios.', 'They are ectotherms.', 'They do not need to maintain a body temperature.', 'More surface per unit of volume means more heat loss, which must be replaced by metabolism.'],
    ['predict', 'All decomposers are removed from a forest ecosystem. What is the most likely long-term effect?', 'Nutrients stay locked in dead material, and plant growth declines.', 'Plants grow faster because they face less competition.', 'Carbon dioxide levels in the soil rise sharply.', 'Energy flow through the food web increases.', 'Decomposers return nutrients to the soil; without them, nutrient cycling slows.'],
    ['concept', 'What do nitrogen-fixing bacteria do?', 'Convert nitrogen gas into ammonia that plants can use', 'Convert ammonia into nitrogen gas', 'Release oxygen from water', 'Fix carbon dioxide into glucose', 'Most organisms cannot use N₂; fixation makes nitrogen available to ecosystems.'],
    ['concept', 'Which processes add carbon dioxide to the atmosphere?', 'Cellular respiration and burning fossil fuels', 'Photosynthesis and respiration', 'Photosynthesis only', 'Nitrogen fixation', 'Respiration and combustion release CO₂; photosynthesis removes it.'],
    ['predict', 'Fertilizer runoff enters a lake. Which sequence of events is most likely?', 'Algae grow rapidly, then die and decompose, lowering oxygen and killing fish.', 'Algae die immediately, and oxygen rises.', 'Fish populations grow because there is more food.', 'Nothing changes because fertilizer stays in the soil.', 'This is eutrophication: decomposition of the algal bloom uses up dissolved oxygen.'],
    ['concept', 'Under what conditions does a population grow exponentially?', 'When resources are unlimited and there are few limits on growth', 'When the population is at carrying capacity', 'When birth rate equals death rate', 'When predators are abundant', 'With no limits, the growth rate is proportional to population size, giving a J-shaped curve.'],
    ['concept', 'What is carrying capacity?', 'The maximum population size an environment can support over time', 'The number of offspring produced per year', 'The fastest possible growth rate of a population', 'The size of a population when it is first founded', 'Carrying capacity is set by resources and other limiting factors.'],
    ['data', 'An oyster releases millions of eggs, but nearly all of the larvae die within weeks. The few that survive often live for many years. Which survivorship pattern fits?', 'Type III', 'Type I', 'Type II', 'No survivorship pattern', 'Type III survivorship has very high early mortality.'],
    ['concept', 'Two species need exactly the same limited resource in the same habitat. What does the competitive exclusion principle predict?', 'One species will eventually outcompete and eliminate the other there.', 'Both species will coexist indefinitely without change.', 'Both species will go extinct.', 'The species will become mutualists.', 'Two species cannot share an identical niche indefinitely.'],
    ['concept', 'Several warbler species feed in the same tree but in different parts of it. What does this show?', 'Resource partitioning reduces competition between species.', 'The species are mutualists.', 'One species is a keystone predator.', 'The species are in exponential growth.', 'Using different parts of a resource lets similar species coexist.'],
    ['concept', 'In a predator–prey cycle, why do predator peaks usually come after prey peaks?', 'Predators increase only after more prey become available to support reproduction.', 'Predators reproduce faster than prey.', 'Prey numbers depend only on weather.', 'Predators eat plants when prey is scarce.', 'Predator numbers respond to food supply with a time lag.'],
    { family: 'graph', context: 'An ecologist counted a prey species and its predator in the same area each year.', plot: { xLabel: 'Year', yLabel: 'Population size', x: [1, 2, 3, 4, 5, 6, 7], series: [{ name: 'Prey', values: [100, 160, 220, 140, 80, 110, 170] }, { name: 'Predator', values: [20, 25, 35, 45, 30, 20, 26] }] }, prompt: 'Which explanation best accounts for the decline of the predator after year 4?', choices: ['Prey numbers had fallen, reducing the predators’ food supply.', 'The prey population was increasing at the time.', 'Predators always decline every four years regardless of prey.', 'The predator switched to being a producer.'], explanation: 'Predators declined after prey numbers dropped, showing their dependence on prey.' },
    ['concept', 'Sea stars eat mussels. When sea stars are removed, mussels take over the shore and many other species disappear. What kind of species are sea stars here?', 'A keystone species', 'An invasive species', 'A producer', 'A decomposer', 'A keystone species has an effect on community structure far larger than its abundance.'],
    ['concept', 'Two communities each have 4 species and 100 individuals. Community A has 25 of each species; community B has 85 of one species and 5 of each of the others. Which statement is true?', 'A is more diverse because its species are more evenly distributed.', 'B is more diverse because one species dominates.', 'Both are equally diverse because they have the same number of species.', 'Neither has any diversity.', 'Diversity reflects both species richness and evenness.'],
    ['predict', 'An invasive plant with no natural herbivores in its new range spreads rapidly. What is the most likely effect on the native community?', 'Native plant diversity declines as the invader outcompetes them.', 'Native diversity increases.', 'The invader is eaten by native herbivores right away.', 'No change occurs.', 'Without natural enemies, invaders can dominate resources and reduce diversity.'],
    ['concept', 'Which organisms are typically the first to colonize bare rock during primary succession?', 'Lichens and mosses', 'Large trees', 'Grazing mammals', 'Shrubs with deep roots', 'Pioneer species can grow without soil and help form it.'],
    ['predict', 'As average temperatures rise, what is the most likely change in the range of a cold-adapted mountain plant?', 'Its range shifts to higher elevations.', 'Its range shifts to lower elevations.', 'Its range expands in every direction.', 'Its range stays exactly the same.', 'Species track suitable conditions, moving upslope or poleward as climate warms.'],
    ['design', 'Students test whether pill bugs prefer moist or dry conditions using a two-sided choice chamber. Before adding water to one side, what should they do?', 'Run a trial with both sides identical to check that the chamber itself causes no bias.', 'Put all the pill bugs on the moist side.', 'Use a different species on each side.', 'Count the pill bugs only once at the start.', 'A trial with identical conditions shows whether the setup itself influences where the animals go.']
  ]
];

const format = value => Number.isInteger(value) ? value.toLocaleString('en-US') : String(Number(value.toFixed(2)));

// Builds one calculation question; returns null unless the four choices are distinct.
function calc(unit, family, key, prompt, values, explanation) {
  const choices = values.map(value => typeof value === 'number' ? format(value) : value);
  if (new Set(choices).size !== 4 || choices.some(choice => /NaN|Infinity/.test(choice))) return null;
  return { id: 'bio-' + unit + '-' + family + '-' + key, family, prompt, choices, answer: 0, explanation };
}

const generators = {
  1: unit => [
    ...[24, 38, 51, 75, 96, 110, 129, 150, 187, 203, 248, 300, 352, 415, 500].map((n, index) => {
      const [polymer, monomer] = [['polypeptide', 'amino acids'], ['polysaccharide', 'glucose monomers'], ['single-stranded nucleic acid', 'nucleotides']][index % 3];
      const forming = index % 2 === 0;
      return calc(unit, 'calc-condensation', n, forming
        ? `A linear ${polymer} is built from ${n} ${monomer} by dehydration synthesis. How many water molecules are released?`
        : `How many water molecules are needed to completely hydrolyze a linear ${polymer} made of ${n} ${monomer}?`,
        [n - 1, n, n + 1, n - 2], `A linear chain of ${n} monomers has ${n - 1} bonds, and each bond involves one water molecule.`);
    }),
    ...[[2, 4], [3, 6], [4, 5], [5, 8], [6, 9], [7, 9], [3, 4], [2, 5], [4, 7], [6, 8], [1, 3], [5, 6]].map(([a, b]) =>
      calc(unit, 'calc-ph', a + '-' + b, `How many times greater is the hydrogen ion concentration of a solution at pH ${a} than one at pH ${b}?`,
        [10 ** (b - a), b - a, 2 * (b - a), 10 ** (b - a + 1)], `Each pH unit is a tenfold change, so ${b - a} units is 10^${b - a} = ${format(10 ** (b - a))}.`)),
    ...[12, 14, 16, 18, 20, 22, 24, 27, 29, 31, 33, 35, 38].map((a, index) => {
      const base = ['guanine (G)', 'thymine (T)', 'cytosine (C)'][index % 3];
      const answer = index % 3 === 1 ? a : 50 - a;
      const wrong = index % 3 === 1 ? [50 - a, 100 - 2 * a, 2 * a] : [a, 100 - a, 100 - 2 * a];
      return calc(unit, 'calc-chargaff', a + '-' + index, `A sample of double-stranded DNA is ${a}% adenine. What percentage of its bases are ${base}?`,
        [answer + '%', ...wrong.map(value => value + '%')], `A pairs with T and G pairs with C, so T = ${a}% and G = C = (100 − 2 × ${a}) ÷ 2 = ${50 - a}%.`);
    })
  ],
  2: unit => [
    ...[0.5, 1, 2, 3, 4, 5, 8, 10, 12, 15, 20, 25].map(side =>
      calc(unit, 'calc-sav', side, `A cube-shaped cell has sides of ${side} µm. What is its surface area-to-volume ratio? Round to two decimal places if needed.`,
        [6 / side, side / 6, 6 * side, side * side], `Surface area = 6 × ${side}² and volume = ${side}³, so the ratio is 6 ÷ ${side} = ${format(6 / side)}.`)),
    ...[0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5].flatMap(molar => [[1, 'sucrose', 295], [1, 'sucrose', 300], [2, 'NaCl', 295], [2, 'NaCl', 300]].map(([i, solute, kelvin]) => {
      const value = -i * molar * 0.0831 * kelvin;
      return calc(unit, 'calc-solute-potential', molar + '-' + solute + '-' + kelvin, `Using ψs = −iCRT, what is the solute potential of a ${molar} M ${solute} solution at ${kelvin} K? (R = 0.0831 L·bar/mol·K; i = ${i} for ${solute}.) Round to one decimal place.`,
        [value.toFixed(1) + ' bar', (-value).toFixed(1) + ' bar', (value / i * (i === 1 ? 2 : 1)).toFixed(1) + ' bar', (-i * molar * 0.0831 * (kelvin - 273)).toFixed(1) + ' bar'],
        `ψs = −(${i})(${molar})(0.0831)(${kelvin}) ≈ ${value.toFixed(1)} bar.`);
    })),
    ...[[2.5, 2.8], [3.2, 2.9], [4.0, 4.6], [1.8, 1.5], [5.0, 5.4], [2.4, 2.1], [3.6, 3.96], [4.4, 3.74], [2.0, 2.3], [6.0, 5.1], [3.0, 3.36], [2.8, 2.38]].map(([before, after]) => {
      const change = (after - before) / before * 100;
      return calc(unit, 'calc-mass-change', before + '-' + after, `A potato core has a mass of ${before.toFixed(2)} g before soaking in a sucrose solution and ${after.toFixed(2)} g after. What is the percent change in mass? Round to one decimal place.`,
        [change.toFixed(1) + '%', (-change).toFixed(1) + '%', ((after - before) / after * 100).toFixed(1) + '%', (after - before).toFixed(1) + '%'],
        `Percent change = (${after.toFixed(2)} − ${before.toFixed(2)}) ÷ ${before.toFixed(2)} × 100 ≈ ${change.toFixed(1)}%.`);
    }),
    ...[[12, 400], [8, 400], [15, 1000], [6, 100], [30, 1500], [9, 450], [24, 600], [5, 250], [18, 1200], [40, 2000]].map(([image, magnification]) => {
      const actual = image * 1000 / magnification;
      return calc(unit, 'calc-magnification', image + '-' + magnification, `In a micrograph magnified ${magnification} times, a cell measures ${image} mm across. What is the cell’s actual width in micrometers?`,
        [actual + ' µm', image * magnification + ' µm', image / magnification + ' µm', actual * 10 + ' µm'],
        `Actual size = image size ÷ magnification = ${image * 1000} µm ÷ ${magnification} = ${actual} µm.`);
    })
  ],
  3: unit => [
    ...[[0.42, 6], [0.63, 7], [0.84, 12], [1.05, 15], [1.26, 9], [0.96, 8], [1.44, 12], [0.75, 5], [1.2, 10], [0.36, 4], [1.8, 15], [0.9, 6], [2.1, 14], [0.56, 8]].map(([volume, minutes]) =>
      calc(unit, 'calc-respiration-rate', volume + '-' + minutes, `In a respirometer, germinating seeds use ${volume} mL of oxygen in ${minutes} minutes. What is the average rate of oxygen consumption, in mL/min?`,
        [volume / minutes, minutes / volume, volume * minutes, volume / minutes / 2], `Rate = ${volume} mL ÷ ${minutes} min = ${format(volume / minutes)} mL/min.`)),
    ...[[50, 20], [80, 60], [40, 30], [120, 90], [60, 15], [90, 45], [75, 60], [200, 50], [64, 48], [150, 120], [30, 6], [100, 35]].map(([without, withInhibitor]) => {
      const percent = (without - withInhibitor) / without * 100;
      return calc(unit, 'calc-inhibition', without + '-' + withInhibitor, `An enzyme makes ${without} µmol of product per minute. With an inhibitor added, it makes ${withInhibitor} µmol per minute. By what percentage did the inhibitor reduce the rate? Round to one decimal place.`,
        [percent.toFixed(1) + '%', (100 - percent).toFixed(1) + '%', ((without - withInhibitor) / withInhibitor * 100).toFixed(1) + '%', (without - withInhibitor) + '%'],
        `Reduction = (${without} − ${withInhibitor}) ÷ ${without} × 100 ≈ ${percent.toFixed(1)}%.`);
    }),
    ...[[12, 3], [30, 5], [18, 4], [45, 9], [24, 8], [60, 12], [27, 6], [50, 10], [36, 15], [16, 5]].map(([product, minutes]) =>
      calc(unit, 'calc-enzyme-rate', product + '-' + minutes, `An enzyme reaction produces ${product} µmol of product in the first ${minutes} minutes. What is the initial reaction rate in µmol/min?`,
        [product / minutes, minutes / product, product * minutes, product - minutes], `Rate = ${product} µmol ÷ ${minutes} min = ${format(product / minutes)} µmol/min.`))
  ],
  4: unit => [
    ...[[200, 20, 24], [500, 40, 20], [300, 15, 24], [400, 60, 16], [250, 25, 22], [600, 30, 18], [800, 80, 24], [150, 12, 25], [450, 45, 12], [1000, 120, 20], [360, 24, 15], [240, 30, 16], [500, 25, 30], [720, 60, 24]].map(([total, dividing, hours]) =>
      calc(unit, 'calc-mitosis-time', total + '-' + dividing + '-' + hours, `In a root tip, ${total} cells are counted and ${dividing} of them are in mitosis. If one cell cycle takes ${hours} hours, about how many hours does mitosis last?`,
        [dividing / total * hours, (total - dividing) / total * hours, dividing / hours, hours / dividing], `The fraction of cells in mitosis estimates its share of the cycle: ${dividing} ÷ ${total} × ${hours} h = ${format(dividing / total * hours)} h.`)),
    ...[[10, 5, 100], [20, 10, 50], [5, 8, 200], [30, 4, 25], [12, 6, 150], [8, 20, 40], [25, 10, 60], [15, 3, 300], [40, 5, 20], [6, 12, 75], [50, 2, 500], [18, 5, 120]].map(([receptors, enzymes, messengers]) =>
      calc(unit, 'calc-amplification', receptors + '-' + enzymes + '-' + messengers, `Each activated receptor activates ${enzymes} enzyme molecules, and each enzyme makes ${messengers} second-messenger molecules. If ${receptors} receptors are activated, how many second-messenger molecules are made?`,
        [receptors * enzymes * messengers, enzymes * messengers, receptors + enzymes + messengers, receptors * messengers], `${receptors} × ${enzymes} × ${messengers} = ${format(receptors * enzymes * messengers)}, showing how signals are amplified.`)),
    ...[[1000, 4, 12], [500, 6, 24], [200, 3, 15], [5000, 8, 24], [100, 2, 10], [300, 5, 20], [2000, 6, 18], [50, 4, 28], [800, 12, 36], [400, 3, 18], [250, 2, 12], [60, 5, 25]].map(([start, generation, hours]) => {
      const divisions = hours / generation;
      return calc(unit, 'calc-doubling', start + '-' + generation + '-' + hours, `A culture starts with ${format(start)} cells that divide every ${generation} hours. Assuming every cell divides on schedule, how many cells are present after ${hours} hours?`,
        [start * 2 ** divisions, start * divisions * 2, start * 2 * divisions + start, start + 2 ** divisions], `${hours} ÷ ${generation} = ${divisions} divisions, so ${format(start)} × 2^${divisions} = ${format(start * 2 ** divisions)} cells.`);
    })
  ],
  5: unit => [
    ...[[400, 290], [200, 140], [160, 128], [300, 238], [240, 168], [500, 390], [120, 82], [320, 252], [180, 147], [600, 430], [100, 81], [280, 196], [360, 255], [440, 345], [80, 52], [520, 400]].map(([total, dominant]) => {
      const recessive = total - dominant;
      const expectedDominant = total * 0.75;
      const expectedRecessive = total * 0.25;
      const value = (dominant - expectedDominant) ** 2 / expectedDominant + (recessive - expectedRecessive) ** 2 / expectedRecessive;
      const wrong = (dominant - expectedDominant) ** 2 / dominant + (recessive - expectedRecessive) ** 2 / recessive;
      const decision = chi => chi > 3.84 ? 'the 3:1 hypothesis is rejected' : 'the 3:1 hypothesis is not rejected';
      const opposite = chi => chi > 3.84 ? 'the 3:1 hypothesis is not rejected' : 'the 3:1 hypothesis is rejected';
      return calc(unit, 'calc-chi-square', total + '-' + dominant, `A cross is expected to produce a 3:1 ratio. Of ${total} offspring, ${dominant} show the dominant trait and ${recessive} show the recessive trait. What is the chi-square value, and what is the conclusion at p = 0.05 (critical value 3.84)?`,
        [`χ² ≈ ${value.toFixed(2)}; ${decision(value)}`, `χ² ≈ ${value.toFixed(2)}; ${opposite(value)}`, `χ² ≈ ${wrong.toFixed(2)}; ${opposite(wrong)}`, `χ² ≈ ${(value * 2).toFixed(2)}; ${opposite(value * 2)}`],
        `Expected: ${expectedDominant} and ${expectedRecessive}. χ² = Σ(o − e)²/e ≈ ${value.toFixed(2)}, which is ${value > 3.84 ? 'greater' : 'less'} than 3.84.`);
    }),
    ...[[1000, 80, 80], [500, 30, 35], [800, 100, 92], [2000, 150, 170], [400, 18, 22], [600, 72, 66], [1200, 60, 60], [300, 45, 39], [900, 27, 36], [1500, 210, 195], [250, 10, 15], [700, 49, 56], [1600, 40, 40], [450, 54, 45], [1000, 125, 135]].map(([total, first, second]) => {
      const percent = (first + second) / total * 100;
      return calc(unit, 'calc-recombination', total + '-' + first + '-' + second, `A testcross of a dihybrid produces ${format(total)} offspring, including ${first} and ${second} with the two recombinant phenotypes. What is the distance between the genes in map units?`,
        [percent.toFixed(1) + ' map units', (percent / 2).toFixed(1) + ' map units', (100 - percent).toFixed(1) + ' map units', (percent * 2).toFixed(1) + ' map units'],
        `Recombination frequency = (${first} + ${second}) ÷ ${format(total)} × 100 = ${percent.toFixed(1)}%, and 1% equals 1 map unit.`);
    }),
    ...[
      ['AaBb × AaBb', 'aabb', '1/16', ['1/4', '3/16', '9/16']],
      ['AaBb × AaBb', 'the dominant phenotype for both traits', '9/16', ['3/16', '1/16', '3/4']],
      ['AaBb × AaBb', 'genotype AaBb', '1/4', ['1/16', '1/2', '9/16']],
      ['AaBb × AaBb', 'the recessive phenotype for gene A and the dominant phenotype for gene B', '3/16', ['1/16', '9/16', '1/4']],
      ['AaBb × AaBb', 'genotype AABB', '1/16', ['1/4', '9/16', '1/8']],
      ['AaBb × aabb', 'the dominant phenotype for both traits', '1/4', ['9/16', '1/2', '1/16']],
      ['AaBb × aabb', 'genotype aabb', '1/4', ['1/16', '0', '1/2']],
      ['AaBbCc × AaBbCc', 'genotype aabbcc', '1/64', ['1/8', '1/16', '27/64']],
      ['AaBbCc × AaBbCc', 'the dominant phenotype for all three traits', '27/64', ['9/64', '1/64', '3/4']],
      ['AaBb × Aabb', 'genotype aabb', '1/8', ['1/16', '1/4', '3/8']],
      ['AaBb × Aabb', 'the dominant phenotype for both traits', '3/8', ['9/16', '1/4', '3/16']],
      ['AABb × aaBb', 'the dominant phenotype for both traits', '3/4', ['9/16', '1/4', '1/2']]
    ].map(([cross, outcome, answer, wrong], index) =>
      calc(unit, 'calc-probability', index, `Genes A, B, and C assort independently, and uppercase alleles are dominant. In the cross ${cross}, what is the probability that an offspring has ${outcome}?`,
        [answer, ...wrong], `Find the probability for each gene separately and multiply them; the result is ${answer}.`)),
    ...[2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map(pairs =>
      calc(unit, 'calc-gametes', pairs, `An organism has ${pairs} pairs of homologous chromosomes (2n = ${pairs * 2}). Considering independent assortment alone, how many genetically different gametes can it make?`,
        [2 ** pairs, pairs * 2, pairs ** 2, 2 ** (pairs * 2)], `The number of combinations is 2ⁿ, where n is the number of pairs: 2^${pairs} = ${format(2 ** pairs)}.`))
  ],
  6: unit => [
    ...[[1, 5], [1, 8], [2, 6], [3, 4], [5, 7], [10, 5], [4, 10], [1, 12], [6, 3], [8, 6], [2, 9], [20, 4], [3, 10], [1, 20], [5, 10], [12, 5]].map(([start, cycles]) =>
      calc(unit, 'calc-pcr', start + '-' + cycles, `A PCR reaction starts with ${start} ${start === 1 ? 'copy' : 'copies'} of a target DNA sequence. Assuming perfect doubling, how many copies are present after ${cycles} cycles?`,
        [start * 2 ** cycles, start * 2 * cycles, start + 2 ** cycles, start * cycles ** 2], `Each cycle doubles the DNA: ${start} × 2^${cycles} = ${format(start * 2 ** cycles)}.`)),
    ...[50, 75, 100, 120, 146, 180, 210, 250, 300, 333, 400, 512, 640, 1000].map(aminoAcids =>
      calc(unit, 'calc-codons', aminoAcids, `A protein has ${aminoAcids} amino acids. How many nucleotides are in the mRNA coding sequence, counting the stop codon but not the cap, tail, or untranslated regions?`,
        [3 * (aminoAcids + 1), 3 * aminoAcids, aminoAcids + 1, 4 * aminoAcids], `${aminoAcids} codons for amino acids plus 1 stop codon, each 3 nucleotides: 3 × ${aminoAcids + 1} = ${format(3 * (aminoAcids + 1))}.`)),
    ...[1, 2, 3, 4, 5, 6].flatMap(sites => ['circular plasmid', 'linear DNA molecule'].map(shape => {
      const circular = shape.startsWith('circular');
      const answer = circular ? sites : sites + 1;
      return calc(unit, 'calc-fragments', sites + '-' + (circular ? 'circular' : 'linear'), `A restriction enzyme cuts a ${shape} at ${sites} site${sites === 1 ? '' : 's'}. How many DNA fragments are produced?`,
        circular ? [answer, sites + 1, sites + 2, 2 * sites + 2] : [answer, sites, sites + 2, 2 * sites + 2], circular ? `Cutting a circle at ${sites} site${sites === 1 ? '' : 's'} gives ${sites} fragment${sites === 1 ? '' : 's'}.` : `Cutting a linear molecule at ${sites} site${sites === 1 ? '' : 's'} gives ${sites + 1} fragments.`);
    })),
    ...['TACGGA', 'TACCTT', 'TTAGCC', 'CGTAAT', 'GGCATA', 'TACAAG', 'ACCGTT', 'TGCATC', 'CATTGA', 'TACGTC', 'AGGCTA', 'TTCCGA'].map(template => {
      const pair = { A: 'U', T: 'A', G: 'C', C: 'G' };
      const dnaPair = { A: 'T', T: 'A', G: 'C', C: 'G' };
      const mrna = [...template].map(base => pair[base]).join('');
      return calc(unit, 'calc-transcription', template, `A DNA template strand reads 3′-${template}-5′. What is the sequence of the mRNA transcribed from it?`,
        [`5′-${mrna}-3′`, `5′-${template.replaceAll('T', 'U')}-3′`, `5′-${[...template].map(base => dnaPair[base]).join('')}-3′`, `5′-${[...mrna].reverse().join('')}-3′`],
        `mRNA is complementary and antiparallel to the template strand, with U pairing with A.`);
    })
  ],
  7: unit => [
    ...[0.01, 0.04, 0.09, 0.16, 0.25, 0.36, 0.49, 0.64, 0.81, 0.0225, 0.1225, 0.2025].map(recessive => {
      const q = Math.sqrt(recessive);
      const p = 1 - q;
      return calc(unit, 'calc-hw-heterozygous', recessive, `In a population in Hardy–Weinberg equilibrium, ${format(recessive * 100)}% of individuals show a recessive phenotype. What percentage of the population is expected to be heterozygous?`,
        [format(2 * p * q * 100) + '%', format(recessive * 100) + '%', format(p * q * 100) + '%', format(p * p * 100) + '%'],
        `q² = ${recessive}, so q = ${format(q)} and p = ${format(p)}; 2pq = ${format(2 * p * q)}.`);
    }),
    ...[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.15, 0.35, 0.45, 0.25, 0.65, 0.05, 0.9, 0.55].map((q, index) => {
      const p = 1 - q;
      if (index % 2 === 0) {
        return calc(unit, 'calc-hw-dominant', q, `In a population in Hardy–Weinberg equilibrium, the frequency of a recessive allele is ${q}. What frequency of individuals is expected to be homozygous dominant?`,
          [p * p, p, q * q, 2 * p * q], `p = 1 − ${q} = ${format(p)}, and p² = ${format(p * p)}.`);
      }
      return calc(unit, 'calc-hw-dominant', q, `In a population in Hardy–Weinberg equilibrium, the frequency of a recessive allele is ${q}. What fraction of the population is expected to show the dominant phenotype?`,
        [1 - q * q, p * p, p, 2 * p * q], `Everyone except q² shows the dominant phenotype: 1 − ${q}² = ${format(1 - q * q)}.`);
    }),
    ...[[36, 48, 16], [49, 42, 9], [25, 50, 25], [64, 32, 4], [81, 18, 1], [16, 48, 36], [120, 60, 20], [45, 90, 65], [90, 20, 40], [10, 60, 30], [200, 100, 50], [30, 40, 30]].map(([homozygousDominant, heterozygous, homozygousRecessive]) => {
      const total = homozygousDominant + heterozygous + homozygousRecessive;
      const p = (2 * homozygousDominant + heterozygous) / (2 * total);
      return calc(unit, 'calc-allele-frequency', homozygousDominant + '-' + heterozygous + '-' + homozygousRecessive, `A population contains ${homozygousDominant} AA, ${heterozygous} Aa, and ${homozygousRecessive} aa individuals. What is the frequency of allele A? Round to two decimal places.`,
        [p, homozygousDominant / total, (homozygousDominant + heterozygous) / total, 1 - p], `p = (2 × ${homozygousDominant} + ${heterozygous}) ÷ (2 × ${total}) = ${format(p)}.`);
    }),
    ...[[18, 3], [24, 4], [30, 5], [12, 2], [45, 9], [16, 4], [40, 8], [21, 7], [36, 6], [50, 10], [27, 3], [14, 2]].map(([differences, rate]) =>
      calc(unit, 'calc-molecular-clock', differences + '-' + rate, `Two species differ by ${differences} substitutions in a gene. If substitutions accumulate at a rate of ${rate} per million years, about how many million years ago did the species diverge?`,
        [differences / rate, differences * rate, rate / differences, differences / rate / 2], `Time = ${differences} ÷ ${rate} per million years = ${format(differences / rate)} million years.`))
  ],
  8: unit => [
    ...[[20000, 3], [10000, 2], [50000, 1], [80000, 3], [35000, 2], [12000, 1], [60000, 2], [100000, 3], [45000, 1], [25000, 3], [90000, 2], [15000, 2], [70000, 1], [40000, 3], [30000, 1]].map(([energy, level]) => {
      const name = ['', 'primary', 'secondary', 'tertiary'][level];
      const answer = energy * 0.1 ** level;
      return calc(unit, 'calc-energy-transfer', energy + '-' + level, `Producers in an ecosystem capture ${format(energy)} kcal of energy. Using the 10% rule, about how much energy reaches ${name} consumers?`,
        [Math.round(answer) + ' kcal', Math.round(answer * 10) + ' kcal', Math.round(answer / 10) + ' kcal', Math.round(energy * 0.9 ** level) + ' kcal'],
        `About 10% passes to each level: ${format(energy)} × 0.1^${level} = ${format(Math.round(answer))} kcal.`);
    }),
    ...[[0.2, 500], [0.1, 1200], [0.05, 4000], [0.3, 250], [0.15, 800], [0.4, 150], [0.25, 360], [0.08, 2500], [0.5, 90], [0.12, 1500], [0.35, 600], [0.02, 10000], [0.6, 40], [0.18, 700]].map(([rate, size]) =>
      calc(unit, 'calc-exponential', rate + '-' + size, `Using dN/dt = rN, how many individuals are added per year to a population of ${format(size)} with a per capita growth rate of ${rate} per year?`,
        [Math.round(rate * size), size, Math.round(size / rate), Math.round(rate * size / 2)], `dN/dt = ${rate} × ${format(size)} = ${format(Math.round(rate * size))} individuals per year.`)),
    ...[[0.4, 300, 1000], [0.2, 500, 1000], [0.5, 100, 400], [0.3, 600, 800], [0.1, 2000, 5000], [0.6, 50, 200], [0.25, 400, 500], [0.8, 150, 300], [0.4, 900, 1000], [0.35, 200, 1000], [0.15, 1200, 1500], [0.5, 250, 1000]].map(([rate, size, capacity]) => {
      const growth = rate * size * (capacity - size) / capacity;
      return calc(unit, 'calc-logistic', rate + '-' + size + '-' + capacity, `Using dN/dt = rN(K − N)/K, what is the population growth rate when r = ${rate} per year, N = ${format(size)}, and K = ${format(capacity)}?`,
        [Math.round(growth) + ' individuals per year', Math.round(rate * size) + ' individuals per year', Math.round(rate * (capacity - size)) + ' individuals per year', Math.round(rate * capacity) + ' individuals per year'],
        `dN/dt = ${rate} × ${format(size)} × (${format(capacity)} − ${format(size)}) ÷ ${format(capacity)} = ${format(Math.round(growth))} individuals per year.`);
    }),
    ...[[6, 2], [4, 1.5], [8, 3], [5, 2.5], [3.5, 1], [7, 2], [2.5, 1.5], [9, 4], [4.5, 2], [10, 3], [3, 2], [6.5, 1.5], [5.5, 3], [8.5, 2.5]].map(([light, dark], index) => {
      const question = index % 2 === 0 ? 'gross primary productivity' : 'rate of respiration';
      const answer = index % 2 === 0 ? light + dark : dark;
      const wrong = index % 2 === 0 ? [light, light - dark, dark] : [light + dark, light, light - dark];
      return calc(unit, 'calc-productivity', light + '-' + dark, `In a pond study, dissolved oxygen in a sealed clear bottle rises by ${light} mg/L in a day, and in a sealed dark bottle it falls by ${dark} mg/L. What is the ${question} in mg O₂/L per day?`,
        [answer, ...wrong], `The clear bottle shows net productivity (${light}); the dark bottle shows respiration (${dark}); gross productivity = net + respiration = ${format(light + dark)}.`);
    }),
    ...[[30, 10], [26, 14], [35, 15], [22, 18], [42, 18], [28, 12], [33, 27], [45, 15], [24, 16], [38, 22], [50, 30], [21, 19]].map(([first, second]) => {
      const expected = (first + second) / 2;
      const value = 2 * (first - expected) ** 2 / expected;
      const decision = chi => chi > 3.84 ? 'the null hypothesis is rejected' : 'the null hypothesis is not rejected';
      const opposite = chi => chi > 3.84 ? 'the null hypothesis is not rejected' : 'the null hypothesis is rejected';
      return calc(unit, 'calc-choice-chamber', first + '-' + second, `In a choice chamber, ${first + second} pill bugs settle with ${first} on the moist side and ${second} on the dry side. The null hypothesis predicts an equal split. What is the chi-square value, and what is the conclusion at p = 0.05 (critical value 3.84)?`,
        [`χ² = ${format(value)}; ${decision(value)}`, `χ² = ${format(value)}; ${opposite(value)}`, `χ² = ${format(value / 2)}; ${opposite(value / 2)}`, `χ² = ${format(Math.abs(first - second))}; ${decision(Math.abs(first - second))}`],
        `Expected ${format(expected)} on each side: χ² = 2 × (${first} − ${format(expected)})² ÷ ${format(expected)} = ${format(value)}, which is ${value > 3.84 ? 'greater' : 'less'} than 3.84.`);
    }),
    ...[[40, 50, 10], [60, 45, 9], [25, 40, 5], [80, 60, 12], [100, 80, 20], [35, 42, 7], [50, 30, 6], [120, 90, 15], [45, 36, 9], [70, 56, 8], [30, 25, 3], [90, 70, 14]].map(([marked, caught, recaptured]) => {
      const estimate = marked * caught / recaptured;
      return calc(unit, 'calc-mark-recapture', marked + '-' + caught + '-' + recaptured, `Researchers mark ${marked} turtles and release them. Later they catch ${caught} turtles, of which ${recaptured} are marked. Using N = (marked × caught) ÷ recaptured, what is the estimated population size?`,
        [Math.round(estimate), marked + caught, Math.round(marked * recaptured / caught), marked + caught - recaptured], `N = ${marked} × ${caught} ÷ ${recaptured} = ${format(Math.round(estimate))}.`);
    })
  ]
};

// Additional value sets for the calculation types above, plus AP exam-style data types
// (mitotic index, expected offspring, qPCR fold change, carrier frequency, enzyme optimum,
// standard error). Every question uses its own numbers or data set.
const polymers = [['polypeptide', 'amino acids'], ['polysaccharide', 'glucose monomers'], ['single-stranded nucleic acid', 'nucleotides']];
const chiDecision = (chi, rejected, kept) => chi > 3.84 ? rejected : kept;

const moreGenerators = {
  1: unit => [
    ...[30, 45, 62, 88, 101, 120, 135, 164, 175, 199, 222, 265, 280, 318, 333, 377, 402, 450, 480, 520].map((n, index) => {
      const [polymer, monomer] = polymers[index % 3];
      return calc(unit, 'calc-condensation', n, index % 2 === 1
        ? `A linear ${polymer} is built from ${n} ${monomer} by dehydration synthesis. How many water molecules are released?`
        : `How many water molecules are needed to completely hydrolyze a linear ${polymer} made of ${n} ${monomer}?`,
        [n - 1, n, n + 1, n - 2], `A linear chain of ${n} monomers has ${n - 1} bonds, and each bond involves one water molecule.`);
    }),
    ...[1, 2, 3, 4].flatMap(gap => [1, 2, 3, 4, 5, 6, 7, 8].filter(a => a + gap <= 9).map(a => [a, a + gap])).map(([a, b]) =>
      calc(unit, 'calc-ph', a + '-' + b, `How many times greater is the hydrogen ion concentration of a solution at pH ${a} than one at pH ${b}?`,
        [10 ** (b - a), b - a, 2 * (b - a), 10 ** (b - a + 1)], `Each pH unit is a tenfold change, so ${b - a} units is 10^${b - a} = ${format(10 ** (b - a))}.`)),
    ...[11, 13, 15, 17, 19, 21, 23, 26, 28, 30, 32, 34, 36, 37, 39, 40].map((a, index) => {
      const base = ['cytosine (C)', 'guanine (G)', 'thymine (T)'][index % 3];
      const isThymine = index % 3 === 2;
      return calc(unit, 'calc-chargaff', a + '-x' + index, `A sample of double-stranded DNA is ${a}% adenine. What percentage of its bases are ${base}?`,
        isThymine ? [a + '%', 50 - a + '%', 100 - 2 * a + '%', 2 * a + '%'] : [50 - a + '%', a + '%', 100 - a + '%', 100 - 2 * a + '%'],
        `A pairs with T and G pairs with C, so T = ${a}% and G = C = (100 − 2 × ${a}) ÷ 2 = ${50 - a}%.`);
    })
  ],
  2: unit => [
    ...[0.25, 1.5, 2.5, 7, 9, 11, 14, 16, 18, 30, 40, 50].map(side =>
      calc(unit, 'calc-sav', side, `A cube-shaped cell has sides of ${side} µm. What is its surface area-to-volume ratio? Round to two decimal places if needed.`,
        [6 / side, side / 6, 6 * side, side * side], `Surface area = 6 × ${side}² and volume = ${side}³, so the ratio is 6 ÷ ${side} = ${format(6 / side)}.`)),
    ...[0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.6, 0.75, 0.8, 1].flatMap(molar => [[1, 'sucrose', 310], [2, 'NaCl', 310], [1, 'sucrose', 290], [2, 'NaCl', 290]].map(([i, solute, kelvin]) => {
      const value = -i * molar * 0.0831 * kelvin;
      return calc(unit, 'calc-solute-potential', molar + '-' + solute + '-' + kelvin, `Using ψs = −iCRT, what is the solute potential of a ${molar} M ${solute} solution at ${kelvin} K? (R = 0.0831 L·bar/mol·K; i = ${i} for ${solute}.) Round to one decimal place.`,
        [value.toFixed(1) + ' bar', (-value).toFixed(1) + ' bar', (value / i * (i === 1 ? 2 : 1)).toFixed(1) + ' bar', (-i * molar * 0.0831 * (kelvin - 273)).toFixed(1) + ' bar'],
        `ψs = −(${i})(${molar})(0.0831)(${kelvin}) ≈ ${value.toFixed(1)} bar.`);
    })),
    ...[[2.2, 2.53], [3.4, 3.06], [4.5, 5.04], [1.6, 1.36], [5.2, 5.98], [2.6, 2.21], [3.8, 4.37], [4.2, 3.57], [2.9, 3.19], [6.4, 5.76], [3.3, 3.63], [5.6, 4.76]].map(([before, after]) => {
      const change = (after - before) / before * 100;
      return calc(unit, 'calc-mass-change', before + '-' + after, `A potato core has a mass of ${before.toFixed(2)} g before soaking in a sucrose solution and ${after.toFixed(2)} g after. What is the percent change in mass? Round to one decimal place.`,
        [change.toFixed(1) + '%', (-change).toFixed(1) + '%', ((after - before) / after * 100).toFixed(1) + '%', (after - before).toFixed(1) + '%'],
        `Percent change = (${after.toFixed(2)} − ${before.toFixed(2)}) ÷ ${before.toFixed(2)} × 100 ≈ ${change.toFixed(1)}%.`);
    }),
    ...[[16, 400], [20, 1000], [10, 500], [36, 1200], [14, 700], [27, 900], [45, 1500], [8, 1000], [21, 600], [50, 2500], [12, 1500], [33, 1100]].map(([image, magnification]) => {
      const actual = image * 1000 / magnification;
      return calc(unit, 'calc-magnification', image + '-' + magnification, `In a micrograph magnified ${magnification} times, a cell measures ${image} mm across. What is the cell’s actual width in micrometers?`,
        [actual + ' µm', image * magnification + ' µm', image / magnification + ' µm', actual * 10 + ' µm'],
        `Actual size = image size ÷ magnification = ${image * 1000} µm ÷ ${magnification} = ${actual} µm.`);
    })
  ],
  3: unit => [
    ...[[0.48, 6], [0.72, 9], [0.65, 5], [1.12, 14], [0.33, 3], [1.35, 15], [0.8, 4], [1.68, 12], [0.54, 9], [2.4, 16], [0.27, 3], [1.62, 18], [0.88, 11], [1.08, 9]].map(([volume, minutes]) =>
      calc(unit, 'calc-respiration-rate', volume + '-' + minutes, `In a respirometer, germinating seeds use ${volume} mL of oxygen in ${minutes} minutes. What is the average rate of oxygen consumption, in mL/min?`,
        [volume / minutes, minutes / volume, volume * minutes, volume / minutes / 2], `Rate = ${volume} mL ÷ ${minutes} min = ${format(volume / minutes)} mL/min.`)),
    ...[[45, 18], [70, 56], [36, 27], [140, 105], [84, 21], [96, 48], [55, 44], [160, 40], [72, 54], [125, 100], [48, 12], [110, 66], [65, 39], [90, 72]].map(([without, withInhibitor]) => {
      const percent = (without - withInhibitor) / without * 100;
      return calc(unit, 'calc-inhibition', without + '-' + withInhibitor, `An enzyme makes ${without} µmol of product per minute. With an inhibitor added, it makes ${withInhibitor} µmol per minute. By what percentage did the inhibitor reduce the rate? Round to one decimal place.`,
        [percent.toFixed(1) + '%', (100 - percent).toFixed(1) + '%', ((without - withInhibitor) / withInhibitor * 100).toFixed(1) + '%', (without - withInhibitor) + '%'],
        `Reduction = (${without} − ${withInhibitor}) ÷ ${without} × 100 ≈ ${percent.toFixed(1)}%.`);
    }),
    ...[[20, 4], [42, 6], [28, 7], [54, 9], [32, 8], [70, 14], [39, 3], [66, 11], [48, 16], [25, 2], [63, 9], [44, 11]].map(([product, minutes]) =>
      calc(unit, 'calc-enzyme-rate', product + '-' + minutes, `An enzyme reaction produces ${product} µmol of product in the first ${minutes} minutes. What is the initial reaction rate in µmol/min?`,
        [product / minutes, minutes / product, product * minutes, product - minutes], `Rate = ${product} µmol ÷ ${minutes} min = ${format(product / minutes)} µmol/min.`)),
    ...[['temperature', '°C', [10, 20, 30, 40, 50, 60]], ['temperature', '°C', [15, 25, 35, 45, 55, 65]], ['pH', '', [2, 4, 6, 8, 10, 12]], ['pH', '', [3, 4, 5, 6, 7, 8]]].flatMap(([factor, unitLabel, xs], set) =>
      [1, 2, 3, 4].map(peak => {
        const values = xs.map((_, index) => Math.max(0, 48 - Math.abs(index - peak) * (14 + set * 2) + (index > peak ? -6 : 0)));
        const label = x => factor === 'pH' ? 'pH ' + x : x + ' ' + unitLabel;
        const range = (low, high) => `Between ${label(xs[low])} and ${label(xs[high])}`;
        const others = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]].filter(([low]) => low !== peak - 1 && low !== peak).slice(0, 3);
        return calc(unit, 'data-optimum', factor + '-' + set + '-' + peak, `An enzyme’s activity was measured at different values of ${factor}:\n` + xs.map((x, index) => `${label(x)}: ${values[index]} units`).join('\n') + `\nBased on the data, where is the enzyme’s optimum ${factor} most likely located?`,
          [range(peak - 1, peak + 1), ...others.map(([low, high]) => range(low, high))],
          `Activity is highest at ${label(xs[peak])}, so the true optimum lies between the neighboring measurements, ${label(xs[peak - 1])} and ${label(xs[peak + 1])}.`);
      })),
    ...[[24.0, 4.0, 16], [18.5, 3.0, 9], [32.0, 6.0, 36], [12.4, 2.0, 25], [45.0, 9.0, 81], [27.5, 5.0, 25], [8.6, 1.2, 16], [56.0, 7.0, 49], [15.2, 2.4, 9], [40.0, 10.0, 100], [21.0, 3.6, 36], [9.8, 1.4, 49]].map(([mean, sd, n]) => {
      const se = sd / Math.sqrt(n);
      return calc(unit, 'calc-standard-error', mean + '-' + sd + '-' + n, `In an enzyme experiment, ${n} trials gave a mean rate of ${mean} µmol/min with a standard deviation of ${sd}. Using SE = s ÷ √n, what is the approximate 95% confidence interval (mean ± 2 SE)?`,
        [`${format(mean - 2 * se)} to ${format(mean + 2 * se)} µmol/min`, `${format(mean - se)} to ${format(mean + se)} µmol/min`, `${format(mean - 2 * sd)} to ${format(mean + 2 * sd)} µmol/min`, `${format(mean - 2 * sd / n)} to ${format(mean + 2 * sd / n)} µmol/min`],
        `SE = ${sd} ÷ √${n} = ${format(se)}, so mean ± 2 SE = ${mean} ± ${format(2 * se)}.`);
    })
  ],
  4: unit => [
    ...[[300, 36, 20], [400, 20, 24], [250, 50, 18], [500, 75, 16], [600, 48, 25], [350, 28, 22], [800, 64, 20], [200, 30, 14], [450, 54, 18], [900, 90, 24], [150, 18, 20], [640, 32, 22], [720, 36, 30], [560, 84, 15]].map(([total, dividing, hours]) =>
      calc(unit, 'calc-mitosis-time', total + '-' + dividing + '-' + hours, `In a root tip, ${total} cells are counted and ${dividing} of them are in mitosis. If one cell cycle takes ${hours} hours, about how many hours does mitosis last?`,
        [dividing / total * hours, (total - dividing) / total * hours, dividing / hours, hours / dividing], `The fraction of cells in mitosis estimates its share of the cycle: ${dividing} ÷ ${total} × ${hours} h = ${format(dividing / total * hours)} h.`)),
    ...[[4, 10, 150], [16, 5, 80], [7, 12, 100], [24, 6, 45], [9, 15, 60], [35, 4, 250], [11, 8, 120], [14, 20, 30], [45, 3, 400], [3, 25, 160], [60, 2, 75], [22, 9, 50], [13, 7, 200], [28, 5, 90]].map(([receptors, enzymes, messengers]) =>
      calc(unit, 'calc-amplification', receptors + '-' + enzymes + '-' + messengers, `Each activated receptor activates ${enzymes} enzyme molecules, and each enzyme makes ${messengers} second-messenger molecules. If ${receptors} receptors are activated, how many second-messenger molecules are made?`,
        [receptors * enzymes * messengers, enzymes * messengers, receptors + enzymes + messengers, receptors * messengers], `${receptors} × ${enzymes} × ${messengers} = ${format(receptors * enzymes * messengers)}, showing how signals are amplified.`)),
    ...[[2000, 4, 16], [600, 6, 30], [150, 3, 21], [4000, 8, 32], [300, 2, 14], [700, 5, 25], [1500, 6, 24], [80, 4, 32], [1200, 12, 48], [900, 3, 12], [450, 2, 16], [100, 5, 40]].map(([start, generation, hours]) => {
      const divisions = hours / generation;
      return calc(unit, 'calc-doubling', start + '-' + generation + '-' + hours, `A culture starts with ${format(start)} cells that divide every ${generation} hours. Assuming every cell divides on schedule, how many cells are present after ${hours} hours?`,
        [start * 2 ** divisions, start * divisions * 2, start * 2 * divisions + start, start + 2 ** divisions], `${hours} ÷ ${generation} = ${divisions} divisions, so ${format(start)} × 2^${divisions} = ${format(start * 2 ** divisions)} cells.`);
    }),
    ...[[200, 18], [500, 35], [250, 40], [400, 52], [800, 56], [150, 21], [600, 90], [300, 27], [1000, 85], [450, 63], [350, 14], [720, 108], [240, 36], [900, 45]].map(([total, dividing]) => {
      const index = dividing / total * 100;
      return calc(unit, 'calc-mitotic-index', total + '-' + dividing, `In a field of view of an onion root tip, ${total} cells are counted and ${dividing} are in a stage of mitosis. What is the mitotic index? Round to one decimal place if needed.`,
        [format(index) + '%', format((total - dividing) / total * 100) + '%', format(dividing / (total - dividing) * 100) + '%', format(index / 10) + '%'],
        `Mitotic index = cells in mitosis ÷ total cells × 100 = ${dividing} ÷ ${total} × 100 = ${format(index)}%.`);
    })
  ],
  5: unit => [
    ...[[480, 352], [160, 112], [240, 190], [400, 316], [120, 96], [360, 252], [200, 162], [640, 470], [80, 66], [300, 205], [560, 431], [440, 313], [96, 64], [720, 552]].map(([total, dominant]) => {
      const recessive = total - dominant;
      const expectedDominant = total * 0.75;
      const expectedRecessive = total * 0.25;
      const value = (dominant - expectedDominant) ** 2 / expectedDominant + (recessive - expectedRecessive) ** 2 / expectedRecessive;
      const wrong = (dominant - expectedDominant) ** 2 / dominant + (recessive - expectedRecessive) ** 2 / recessive;
      const decision = chi => chiDecision(chi, 'the 3:1 hypothesis is rejected', 'the 3:1 hypothesis is not rejected');
      const opposite = chi => chiDecision(chi, 'the 3:1 hypothesis is not rejected', 'the 3:1 hypothesis is rejected');
      return calc(unit, 'calc-chi-square', total + '-' + dominant, `A cross is expected to produce a 3:1 ratio. Of ${total} offspring, ${dominant} show the dominant trait and ${recessive} show the recessive trait. What is the chi-square value, and what is the conclusion at p = 0.05 (critical value 3.84)?`,
        [`χ² ≈ ${value.toFixed(2)}; ${decision(value)}`, `χ² ≈ ${value.toFixed(2)}; ${opposite(value)}`, `χ² ≈ ${wrong.toFixed(2)}; ${opposite(wrong)}`, `χ² ≈ ${(value * 2).toFixed(2)}; ${opposite(value * 2)}`],
        `Expected: ${expectedDominant} and ${expectedRecessive}. χ² = Σ(o − e)²/e ≈ ${value.toFixed(2)}, which is ${value > 3.84 ? 'greater' : 'less'} than 3.84.`);
    }),
    ...[[1000, 45, 55], [600, 39, 33], [800, 64, 72], [1500, 90, 105], [500, 20, 25], [1200, 102, 90], [400, 34, 30], [2000, 210, 230], [750, 30, 45], [900, 81, 72], [350, 21, 28], [1100, 66, 77], [650, 52, 39], [1800, 117, 126]].map(([total, first, second]) => {
      const percent = (first + second) / total * 100;
      return calc(unit, 'calc-recombination', total + '-' + first + '-' + second, `A testcross of a dihybrid produces ${format(total)} offspring, including ${first} and ${second} with the two recombinant phenotypes. What is the distance between the genes in map units?`,
        [percent.toFixed(1) + ' map units', (percent / 2).toFixed(1) + ' map units', (100 - percent).toFixed(1) + ' map units', (percent * 2).toFixed(1) + ' map units'],
        `Recombination frequency = (${first} + ${second}) ÷ ${format(total)} × 100 = ${percent.toFixed(1)}%, and 1% equals 1 map unit.`);
    }),
    ...[
      ['AaBb × AaBB', 'the dominant phenotype for both traits', '3/4', ['9/16', '1/4', '1/2']],
      ['AaBb × AaBB', 'genotype aaBB', '1/8', ['1/16', '1/4', '3/8']],
      ['AaBb × aaBb', 'the recessive phenotype for both traits', '1/8', ['1/16', '1/4', '3/16']],
      ['AaBb × aaBb', 'the dominant phenotype for both traits', '3/8', ['9/16', '1/4', '1/2']],
      ['AaBbCc × aabbcc', 'genotype aabbcc', '1/8', ['1/64', '1/16', '1/4']],
      ['AaBbCc × aabbcc', 'the dominant phenotype for all three traits', '1/8', ['27/64', '1/64', '3/8']],
      ['AaBbCc × AaBbCc', 'genotype AaBbCc', '1/8', ['1/64', '27/64', '1/4']],
      ['AABbCc × AaBbCc', 'the dominant phenotype for all three traits', '9/16', ['27/64', '3/4', '1/16']]
    ].map(([cross, outcome, answer, wrong], index) =>
      calc(unit, 'calc-probability', 'x' + index, `Genes A, B, and C assort independently, and uppercase alleles are dominant. In the cross ${cross}, what is the probability that an offspring has ${outcome}?`,
        [answer, ...wrong], `Find the probability for each gene separately and multiply them; the result is ${answer}.`)),
    ...[11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map(pairs =>
      calc(unit, 'calc-gametes', pairs, `An organism has ${pairs} pairs of homologous chromosomes (2n = ${pairs * 2}). Considering independent assortment alone, how many genetically different gametes can it make?`,
        [2 ** pairs, pairs * 2, pairs ** 2, 2 ** (pairs * 2)], `The number of combinations is 2ⁿ, where n is the number of pairs: 2^${pairs} = ${format(2 ** pairs)}.`)),
    ...[
      ['Aa × Aa', 'the recessive phenotype', 1 / 4],
      ['Aa × Aa', 'the dominant phenotype', 3 / 4],
      ['Aa × aa', 'the recessive phenotype', 1 / 2],
      ['AaBb × AaBb', 'both recessive phenotypes', 1 / 16],
      ['AaBb × AaBb', 'both dominant phenotypes', 9 / 16],
      ['AaBb × AaBb', 'the dominant A phenotype and the recessive B phenotype', 3 / 16],
      ['AaBb × aabb', 'both recessive phenotypes', 1 / 4]
    ].flatMap(([cross, outcome, fraction], index) => [320, 480, 640].filter((_, pick) => (index + pick) % 3 !== 2).map(total =>
      calc(unit, 'calc-expected-offspring', index + '-' + total, `Genes A and B assort independently, and uppercase alleles are dominant. A cross of ${cross} produces ${total} offspring. How many are expected to show ${outcome}?`,
        [total * fraction, total * (1 - fraction), total * fraction * 2, total * fraction / 2], `The expected fraction is ${fraction === 1 / 16 ? '1/16' : fraction === 9 / 16 ? '9/16' : fraction === 3 / 16 ? '3/16' : fraction === 1 / 4 ? '1/4' : fraction === 3 / 4 ? '3/4' : '1/2'}, and ${total} × that fraction = ${format(total * fraction)}.`)))
  ],
  6: unit => [
    ...[[2, 5], [4, 6], [3, 8], [6, 7], [1, 15], [10, 8], [5, 6], [8, 9], [2, 12], [3, 7], [15, 4], [7, 5], [1, 16], [9, 6], [4, 9], [25, 3]].map(([start, cycles]) =>
      calc(unit, 'calc-pcr', start + '-' + cycles, `A PCR reaction starts with ${start} ${start === 1 ? 'copy' : 'copies'} of a target DNA sequence. Assuming perfect doubling, how many copies are present after ${cycles} cycles?`,
        [start * 2 ** cycles, start * 2 * cycles, start + 2 ** cycles, start * cycles ** 2], `Each cycle doubles the DNA: ${start} × 2^${cycles} = ${format(start * 2 ** cycles)}.`)),
    ...[60, 88, 110, 132, 155, 199, 230, 275, 320, 365, 420, 480, 575, 720].map(aminoAcids =>
      calc(unit, 'calc-codons', aminoAcids, `A protein has ${aminoAcids} amino acids. How many nucleotides are in the mRNA coding sequence, counting the stop codon but not the cap, tail, or untranslated regions?`,
        [3 * (aminoAcids + 1), 3 * aminoAcids, aminoAcids + 1, 4 * aminoAcids], `${aminoAcids} codons for amino acids plus 1 stop codon, each 3 nucleotides: 3 × ${aminoAcids + 1} = ${format(3 * (aminoAcids + 1))}.`)),
    ...[7, 8, 9, 10].flatMap(sites => ['circular plasmid', 'linear DNA molecule'].map(shape => {
      const circular = shape.startsWith('circular');
      return calc(unit, 'calc-fragments', sites + '-' + (circular ? 'circular' : 'linear'), `A restriction enzyme cuts a ${shape} at ${sites} sites. How many DNA fragments are produced?`,
        circular ? [sites, sites + 1, sites + 2, 2 * sites + 2] : [sites + 1, sites, sites + 2, 2 * sites + 2], circular ? `Cutting a circle at ${sites} sites gives ${sites} fragments.` : `Cutting a linear molecule at ${sites} sites gives ${sites + 1} fragments.`);
    })),
    ...['TACGAT', 'TACTTG', 'CCGATA', 'GATTCA', 'TACCGG', 'ATGCAT', 'TTGACC', 'GCCTAT', 'TACATT', 'CAGGTA', 'ACTTGC', 'TGTACG', 'TACGCA', 'GGATCC'].map(template => {
      const pair = { A: 'U', T: 'A', G: 'C', C: 'G' };
      const dnaPair = { A: 'T', T: 'A', G: 'C', C: 'G' };
      const mrna = [...template].map(base => pair[base]).join('');
      return calc(unit, 'calc-transcription', template, `A DNA template strand reads 3′-${template}-5′. What is the sequence of the mRNA transcribed from it?`,
        [`5′-${mrna}-3′`, `5′-${template.replaceAll('T', 'U')}-3′`, `5′-${[...template].map(base => dnaPair[base]).join('')}-3′`, `5′-${[...mrna].reverse().join('')}-3′`],
        `mRNA is complementary and antiparallel to the template strand, with U pairing with A.`);
    }),
    ...[[18, 21], [22, 25], [16, 20], [24, 26], [19, 24], [20, 22], [17, 23], [21, 24], [15, 19], [23, 28], [26, 29], [14, 20]].map(([first, second]) => {
      const gap = second - first;
      return calc(unit, 'calc-qpcr-fold', first + '-' + second, `In a qPCR experiment, gene P is first detected at cycle ${first} and gene Q at cycle ${second}. Lower Cq means more starting mRNA, and the amount doubles each cycle. About how many times more starting mRNA did gene P have than gene Q?`,
        [2 ** gap, gap, 2 * gap, 10 ** gap], `The difference is ${gap} cycles, so P had about 2^${gap} = ${format(2 ** gap)} times more starting template.`);
    })
  ],
  7: unit => [
    ...[0.0025, 0.0049, 0.0144, 0.0256, 0.0324, 0.0484, 0.0576, 0.0729, 0.1024, 0.1444, 0.1764, 0.2304].map(recessive => {
      const q = Math.sqrt(recessive);
      const p = 1 - q;
      return calc(unit, 'calc-hw-heterozygous', recessive, `In a population in Hardy–Weinberg equilibrium, ${format(recessive * 100)}% of individuals show a recessive phenotype. What percentage of the population is expected to be heterozygous?`,
        [format(2 * p * q * 100) + '%', format(recessive * 100) + '%', format(p * q * 100) + '%', format(p * p * 100) + '%'],
        `q² = ${recessive}, so q = ${format(q)} and p = ${format(p)}; 2pq = ${format(2 * p * q)}.`);
    }),
    ...[0.12, 0.18, 0.22, 0.28, 0.32, 0.38, 0.42, 0.48, 0.52, 0.58, 0.62, 0.68, 0.72, 0.78].map((q, index) => {
      const p = Number((1 - q).toFixed(2));
      if (index % 2 === 0) {
        return calc(unit, 'calc-hw-dominant', q, `In a population in Hardy–Weinberg equilibrium, the frequency of a recessive allele is ${q}. What frequency of individuals is expected to be homozygous dominant? Round to two decimal places.`,
          [p * p, p, q * q, 2 * p * q], `p = 1 − ${q} = ${format(p)}, and p² ≈ ${format(p * p)}.`);
      }
      return calc(unit, 'calc-hw-dominant', q, `In a population in Hardy–Weinberg equilibrium, the frequency of a recessive allele is ${q}. What fraction of the population is expected to show the dominant phenotype? Round to two decimal places.`,
        [1 - q * q, p * p, p, 2 * p * q], `Everyone except q² shows the dominant phenotype: 1 − ${q}² ≈ ${format(1 - q * q)}.`);
    }),
    ...[[60, 30, 10], [40, 40, 20], [70, 20, 10], [20, 50, 30], [55, 35, 10], [15, 30, 55], [80, 15, 5], [35, 45, 20], [64, 32, 24], [12, 40, 48], [150, 100, 50], [90, 60, 50]].map(([homozygousDominant, heterozygous, homozygousRecessive]) => {
      const total = homozygousDominant + heterozygous + homozygousRecessive;
      const p = (2 * homozygousDominant + heterozygous) / (2 * total);
      return calc(unit, 'calc-allele-frequency', homozygousDominant + '-' + heterozygous + '-' + homozygousRecessive, `A population contains ${homozygousDominant} AA, ${heterozygous} Aa, and ${homozygousRecessive} aa individuals. What is the frequency of allele A? Round to two decimal places.`,
        [p, homozygousDominant / total, (homozygousDominant + heterozygous) / total, 1 - p], `p = (2 × ${homozygousDominant} + ${heterozygous}) ÷ (2 × ${total}) = ${format(p)}.`);
    }),
    ...[[20, 4], [33, 3], [28, 7], [60, 12], [48, 8], [35, 5], [42, 6], [64, 8], [26, 2], [54, 9], [72, 12], [15, 3]].map(([differences, rate]) =>
      calc(unit, 'calc-molecular-clock', differences + '-' + rate, `Two species differ by ${differences} substitutions in a gene. If substitutions accumulate at a rate of ${rate} per million years, about how many million years ago did the species diverge?`,
        [differences / rate, differences * rate, rate / differences, differences / rate / 2], `Time = ${differences} ÷ ${rate} per million years = ${format(differences / rate)} million years.`)),
    ...[100, 400, 900, 1600, 2500, 3600, 4900, 6400, 8100, 10000].map(oneIn => {
      const q = 1 / Math.sqrt(oneIn);
      const p = 1 - q;
      return calc(unit, 'calc-hw-carriers', oneIn, `A recessive disorder affects 1 in ${format(oneIn)} people in a population in Hardy–Weinberg equilibrium. What percentage of the population is expected to be heterozygous carriers? Round to two decimal places.`,
        [(2 * p * q * 100).toFixed(2) + '%', (q * 100).toFixed(2) + '%', (q * q * 100).toFixed(2) + '%', (p * q * 100).toFixed(2) + '%'],
        `q² = 1/${format(oneIn)}, so q = 1/${format(Math.sqrt(oneIn))} = ${format(q)} and 2pq ≈ ${(2 * p * q).toFixed(4)}, or ${(2 * p * q * 100).toFixed(2)}%.`);
    })
  ],
  8: unit => [
    ...[[24000, 3], [18000, 2], [55000, 1], [75000, 3], [42000, 2], [16000, 1], [64000, 2], [120000, 3], [48000, 1], [36000, 3], [95000, 2], [28000, 2], [85000, 1], [44000, 3], [32000, 1], [150000, 3], [26000, 2], [65000, 1], [52000, 3], [110000, 2]].map(([energy, level]) => {
      const name = ['', 'primary', 'secondary', 'tertiary'][level];
      const answer = energy * 0.1 ** level;
      return calc(unit, 'calc-energy-transfer', energy + '-' + level, `Producers in an ecosystem capture ${format(energy)} kcal of energy. Using the 10% rule, about how much energy reaches ${name} consumers?`,
        [Math.round(answer) + ' kcal', Math.round(answer * 10) + ' kcal', Math.round(answer / 10) + ' kcal', Math.round(energy * 0.9 ** level) + ' kcal'],
        `About 10% passes to each level: ${format(energy)} × 0.1^${level} = ${format(Math.round(answer))} kcal.`);
    }),
    ...[[0.3, 400], [0.15, 1200], [0.05, 6000], [0.4, 250], [0.2, 900], [0.45, 200], [0.12, 2500], [0.08, 5000], [0.6, 150], [0.25, 840], [0.35, 300], [0.03, 20000], [0.5, 360], [0.22, 450]].map(([rate, size]) =>
      calc(unit, 'calc-exponential', rate + '-' + size, `Using dN/dt = rN, how many individuals are added per year to a population of ${format(size)} with a per capita growth rate of ${rate} per year?`,
        [Math.round(rate * size), size, Math.round(size / rate), Math.round(rate * size / 2)], `dN/dt = ${rate} × ${format(size)} = ${format(Math.round(rate * size))} individuals per year.`)),
    ...[[0.3, 200, 1000], [0.5, 300, 600], [0.2, 1500, 2000], [0.4, 100, 500], [0.6, 400, 800], [0.25, 900, 1200], [0.1, 3000, 4000], [0.8, 50, 250], [0.45, 600, 1000], [0.3, 1200, 1600], [0.2, 250, 1000], [0.5, 700, 1000]].map(([rate, size, capacity]) => {
      const growth = rate * size * (capacity - size) / capacity;
      return calc(unit, 'calc-logistic', rate + '-' + size + '-' + capacity, `Using dN/dt = rN(K − N)/K, what is the population growth rate when r = ${rate} per year, N = ${format(size)}, and K = ${format(capacity)}?`,
        [Math.round(growth) + ' individuals per year', Math.round(rate * size) + ' individuals per year', Math.round(rate * (capacity - size)) + ' individuals per year', Math.round(rate * capacity) + ' individuals per year'],
        `dN/dt = ${rate} × ${format(size)} × (${format(capacity)} − ${format(size)}) ÷ ${format(capacity)} = ${format(Math.round(growth))} individuals per year.`);
    }),
    ...[[5, 1.5], [7.5, 2], [3, 1], [6, 2.5], [9.5, 3], [4, 2], [8, 1.5], [2, 0.5], [11, 4], [5.5, 1], [7, 3.5], [10, 2.5]].map(([light, dark], index) => {
      const question = index % 2 === 0 ? 'gross primary productivity' : 'rate of respiration';
      const answer = index % 2 === 0 ? light + dark : dark;
      const wrong = index % 2 === 0 ? [light, light - dark, dark] : [light + dark, light, light - dark];
      return calc(unit, 'calc-productivity', light + '-' + dark, `In a pond study, dissolved oxygen in a sealed clear bottle rises by ${light} mg/L in a day, and in a sealed dark bottle it falls by ${dark} mg/L. What is the ${question} in mg O₂/L per day?`,
        [answer, ...wrong], `The clear bottle shows net productivity (${light}); the dark bottle shows respiration (${dark}); gross productivity = net + respiration = ${format(light + dark)}.`);
    }),
    ...[[32, 8], [27, 13], [36, 24], [23, 17], [40, 20], [29, 11], [34, 26], [48, 12], [25, 15], [44, 16], [55, 25], [31, 29]].map(([first, second]) => {
      const expected = (first + second) / 2;
      const value = 2 * (first - expected) ** 2 / expected;
      const decision = chi => chiDecision(chi, 'the null hypothesis is rejected', 'the null hypothesis is not rejected');
      const opposite = chi => chiDecision(chi, 'the null hypothesis is not rejected', 'the null hypothesis is rejected');
      return calc(unit, 'calc-choice-chamber', first + '-' + second, `In a choice chamber, ${first + second} pill bugs settle with ${first} on the moist side and ${second} on the dry side. The null hypothesis predicts an equal split. What is the chi-square value, and what is the conclusion at p = 0.05 (critical value 3.84)?`,
        [`χ² = ${format(value)}; ${decision(value)}`, `χ² = ${format(value)}; ${opposite(value)}`, `χ² = ${format(value / 2)}; ${opposite(value / 2)}`, `χ² = ${format(Math.abs(first - second))}; ${decision(Math.abs(first - second))}`],
        `Expected ${format(expected)} on each side: χ² = 2 × (${first} − ${format(expected)})² ÷ ${format(expected)} = ${format(value)}, which is ${value > 3.84 ? 'greater' : 'less'} than 3.84.`);
    }),
    ...[[60, 50, 12], [30, 45, 9], [80, 40, 16], [45, 60, 15], [120, 75, 18], [24, 30, 4], [55, 44, 11], [100, 64, 16], [36, 50, 6], [75, 48, 12], [90, 40, 8], [150, 120, 25]].map(([marked, caught, recaptured]) => {
      const estimate = marked * caught / recaptured;
      return calc(unit, 'calc-mark-recapture', marked + '-' + caught + '-' + recaptured, `Researchers mark ${marked} turtles and release them. Later they catch ${caught} turtles, of which ${recaptured} are marked. Using N = (marked × caught) ÷ recaptured, what is the estimated population size?`,
        [Math.round(estimate), marked + caught, Math.round(marked * recaptured / caught), marked + caught - recaptured], `N = ${marked} × ${caught} ÷ ${recaptured} = ${format(Math.round(estimate))}.`);
    }),
    ...[[42.0, 6.0, 9], [15.5, 2.0, 16], [88.0, 12.0, 36], [23.4, 3.0, 25], [64.0, 8.0, 16], [9.2, 1.5, 9], [130.0, 20.0, 100], [36.8, 4.2, 49], [51.0, 9.0, 81], [12.6, 2.4, 36]].map(([mean, sd, n]) => {
      const se = sd / Math.sqrt(n);
      return calc(unit, 'calc-standard-error', 'eco-' + mean + '-' + sd + '-' + n, `Ecologists count plants in ${n} quadrats and find a mean of ${mean} plants per quadrat with a standard deviation of ${sd}. Using SE = s ÷ √n, what is the approximate 95% confidence interval (mean ± 2 SE)?`,
        [`${format(mean - 2 * se)} to ${format(mean + 2 * se)} plants`, `${format(mean - se)} to ${format(mean + se)} plants`, `${format(mean - 2 * sd)} to ${format(mean + 2 * sd)} plants`, `${format(mean - 2 * sd / n)} to ${format(mean + 2 * sd / n)} plants`],
        `SE = ${sd} ÷ √${n} = ${format(se)}, so mean ± 2 SE = ${mean} ± ${format(2 * se)}.`);
    })
  ]
};

function writtenQuestion(unit, entry, index) {
  const id = 'bio-' + unit + '-written-' + index;
  if (!Array.isArray(entry)) return { ...entry, id, answer: 0, family: entry.family };
  const [family, prompt, correct, a, b, c, explanation] = entry;
  return { id, family, prompt, choices: [correct, a, b, c], answer: 0, explanation };
}

const cache = new Map();

export function biologyQuestions(unit) {
  if (!cache.has(unit)) {
    const items = (written[unit - 1] ?? []).map((entry, index) => writtenQuestion(unit, entry, index));
    const generated = [...(generators[unit]?.(unit) ?? []), ...(moreGenerators[unit]?.(unit) ?? [])].filter(Boolean);
    const unique = new Map();
    for (const item of [...items, ...generated]) if (!unique.has(item.id)) unique.set(item.id, item);
    cache.set(unit, [...unique.values()]);
  }
  return cache.get(unit);
}
