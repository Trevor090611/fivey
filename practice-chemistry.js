// Fivey AP Chemistry question bank: original questions aligned to the nine units of the
// College Board AP Chemistry course framework. Hand-written items cover concepts, data,
// graphs, experimental design, and predictions; calculation items are generated with
// different values so each unit has many distinct practice questions.
// Hand-written format: [family, prompt, correct, wrong, wrong, wrong, explanation]

const written = [
  // Unit 1: Atomic Structure and Properties
  [
    ['concept', 'Every pure sample of water, from any source, contains 11.2% hydrogen and 88.8% oxygen by mass. Which law does this illustrate?', 'The law of definite proportions', 'The law of multiple proportions', 'The law of conservation of mass', 'Avogadro’s law', 'A given compound always contains its elements in the same proportions by mass.'],
    ['concept', 'Carbon forms CO and CO₂. For a fixed mass of carbon, the masses of oxygen in the two compounds are in a 1 : 2 ratio. Which law does this illustrate?', 'The law of multiple proportions', 'The law of definite proportions', 'The law of conservation of mass', 'The ideal gas law', 'When two elements form more than one compound, the masses of one element that combine with a fixed mass of the other are in small whole-number ratios.'],
    ['concept', 'In a photoelectron spectrum, what does the relative height of each peak indicate?', 'The relative number of electrons in that subshell', 'The energy needed to remove an electron from that subshell', 'The mass of the nucleus', 'The number of neutrons in the atom', 'Peak position shows binding energy; peak height is proportional to the number of electrons.'],
    ['data', 'A photoelectron spectrum shows four peaks:\n104 MJ/mol (relative height 2)\n6.84 MJ/mol (relative height 2)\n3.67 MJ/mol (relative height 6)\n0.50 MJ/mol (relative height 1)\nWhich element produced this spectrum?', 'Sodium', 'Neon', 'Magnesium', 'Lithium', 'The pattern 1s² 2s² 2p⁶ 3s¹ has 11 electrons, which is sodium.'],
    ['concept', 'Why does magnesium have a higher first ionization energy than sodium?', 'Magnesium has more protons, so its 3s electrons feel a greater effective nuclear charge in the same shell.', 'Magnesium’s valence electrons are in a higher energy level.', 'Magnesium has fewer core electrons shielding its valence electrons.', 'Sodium has a full valence shell.', 'Across a period, nuclear charge increases while shielding stays about the same.'],
    ['concept', 'Why is the first ionization energy of oxygen slightly lower than that of nitrogen?', 'Oxygen’s fourth 2p electron is paired, and repulsion between the paired electrons makes it easier to remove.', 'Oxygen has fewer protons than nitrogen.', 'Oxygen’s valence electrons are in the 3p subshell.', 'Nitrogen has a lower effective nuclear charge.', 'Electron–electron repulsion in the doubly occupied 2p orbital outweighs the small increase in nuclear charge.'],
    ['concept', 'Why does atomic radius increase down a group?', 'Valence electrons occupy higher energy levels that are farther from the nucleus, with more inner-shell shielding.', 'The nuclear charge decreases down the group.', 'Atoms lose protons down the group.', 'Electrons are pulled closer by more protons.', 'Each new shell places the valence electrons farther from the nucleus.'],
    ['concept', 'Why is a Na⁺ ion much smaller than a Na atom?', 'Na⁺ has lost its only 3s electron, so its outermost electrons are in the n = 2 shell.', 'Na⁺ has gained a proton.', 'Na⁺ has more electrons than Na.', 'Na⁺ has a smaller nucleus.', 'Removing the entire outer shell sharply decreases the radius.'],
    ['concept', 'Which element has the highest electronegativity?', 'Fluorine', 'Oxygen', 'Chlorine', 'Nitrogen', 'Electronegativity increases across a period and up a group, so fluorine is highest.'],
    ['concept', 'What is the ground-state electron configuration of Fe²⁺?', '[Ar] 3d⁶', '[Ar] 4s² 3d⁴', '[Ar] 4s² 3d⁶', '[Ar] 4s¹ 3d⁵', 'Transition metals lose 4s electrons before 3d electrons when they form ions.'],
    ['data', 'Successive ionization energies of element X (kJ/mol):\nIE₁ = 738\nIE₂ = 1,451\nIE₃ = 7,733\nIE₄ = 10,540\nIn which group of the periodic table is X most likely found?', 'Group 2', 'Group 1', 'Group 13', 'Group 16', 'The large jump after the second electron shows X has two valence electrons.'],
    ['concept', 'According to Coulomb’s law, which pair of ions has the strongest attraction?', 'Mg²⁺ and O²⁻', 'Na⁺ and Cl⁻', 'K⁺ and Br⁻', 'Na⁺ and I⁻', 'Attraction increases with greater ionic charges and smaller distance between ion centers.'],
    ['concept', 'How do isotopes of the same element differ?', 'They have different numbers of neutrons.', 'They have different numbers of protons.', 'They have different numbers of electrons in the neutral atom.', 'They have different chemical properties.', 'Isotopes share an atomic number but differ in mass number.'],
    ['data', 'A mass spectrum of an element shows two peaks of nearly equal height at m/z = 79 and m/z = 81. Which element is it?', 'Bromine', 'Chlorine', 'Selenium', 'Copper', 'Bromine has two isotopes of almost equal abundance, giving an average atomic mass near 79.9.'],
    ['predict', 'Which is the best estimate for the fourth ionization energy of boron, and why?', 'Much greater than the third, because the fourth electron is removed from the 1s core shell close to the nucleus.', 'About equal to the third, because all electrons are removed from the same subshell.', 'Smaller than the third, because the ion is more positive.', 'Zero, because boron has only three electrons.', 'Boron has three valence electrons; the fourth comes from the core, where it is held much more tightly.'],
    ['concept', 'Why does scandium usually form a 3+ ion?', 'Losing its two 4s electrons and one 3d electron gives it the stable configuration of argon.', 'Scandium has three electrons in its 4p subshell.', 'Scandium gains three electrons to fill its 3d subshell.', 'Scandium has three protons in its nucleus.', 'Sc is [Ar] 4s² 3d¹; removing three electrons leaves [Ar].'],
    ['concept', 'Which species has the electron configuration 1s² 2s² 2p⁶ 3s² 3p⁶?', 'S²⁻', 'Ca', 'K', 'Ne', 'Sulfur gains two electrons to reach 18 electrons, the same as argon.'],
    ['concept', 'Why do noble gases have very high first ionization energies?', 'Their valence shells are full and their electrons feel a high effective nuclear charge.', 'They have no electrons in their valence shells.', 'They have the largest atomic radii in each period.', 'Their nuclei contain no neutrons.', 'A filled valence shell with high effective nuclear charge makes electrons very hard to remove.'],
    { family: 'graph', context: 'The first four ionization energies of an element in period 3 were measured.', plot: { type: 'bar', xLabel: 'Ionization', yLabel: 'Ionization energy (kJ/mol)', x: ['1st', '2nd', '3rd', '4th'], series: [{ name: 'Energy', values: [578, 1817, 2745, 11577] }] }, prompt: 'Which element is most consistent with these data?', choices: ['Aluminum', 'Magnesium', 'Sodium', 'Silicon'], explanation: 'The large jump after the third ionization shows three valence electrons, which fits aluminum in Group 13.' },
    { family: 'graph', context: 'A mass spectrum of a sample of an element was recorded.', plot: { type: 'bar', xLabel: 'Mass (amu)', yLabel: 'Relative abundance (%)', x: ['24', '25', '26'], series: [{ name: 'Abundance', values: [79, 10, 11] }] }, prompt: 'What is the approximate average atomic mass, and which element is it?', choices: ['24.3 amu; magnesium', '25.0 amu; magnesium', '24.3 amu; sodium', '26.0 amu; aluminum'], explanation: '(24 × 0.79) + (25 × 0.10) + (26 × 0.11) ≈ 24.3 amu, which matches magnesium.' }
  ],
  // Unit 2: Compound Structure and Properties
  [
    ['concept', 'Which description fits the bonding in sodium chloride?', 'Electrons transfer from sodium to chlorine, and the ions are held by electrostatic attraction in a lattice.', 'Sodium and chlorine share a pair of electrons equally.', 'Delocalized electrons move freely between sodium and chlorine atoms.', 'Hydrogen bonds hold sodium and chlorine together.', 'A metal and a nonmetal form an ionic compound held by Coulombic attraction.'],
    ['concept', 'Why does MgO have a much larger lattice energy than NaF?', 'Mg²⁺ and O²⁻ have larger charges, so the Coulombic attraction is much stronger.', 'MgO has larger ions than NaF.', 'MgO is a covalent compound.', 'NaF has more electrons per formula unit.', 'Lattice energy increases with the product of the ionic charges.'],
    ['concept', 'Which property of metals is best explained by a “sea” of delocalized electrons?', 'Metals conduct electricity and can be hammered into sheets.', 'Metals have low melting points.', 'Metals are brittle.', 'Metals form molecules with fixed bond angles.', 'Mobile electrons carry current and allow layers of cations to slide without breaking bonds.'],
    ['concept', 'Steel is an interstitial alloy of iron and carbon. Why is steel harder and less malleable than pure iron?', 'Small carbon atoms fill holes between iron atoms and make it harder for layers to slide.', 'Carbon atoms replace iron atoms of the same size.', 'Carbon removes the delocalized electrons from iron.', 'Steel is held together by ionic bonds.', 'Interstitial atoms disrupt the regular layers, so the metal resists deformation.'],
    ['concept', 'Which condition is needed for a substitutional alloy such as brass to form?', 'The two metals have atoms of similar radius.', 'One atom is much smaller than the other.', 'The metals have opposite charges.', 'One component is a nonmetal gas.', 'Atoms of similar size can replace one another in the metallic lattice.'],
    ['concept', 'What is the molecular geometry of NH₃?', 'Trigonal pyramidal', 'Trigonal planar', 'Tetrahedral', 'Bent', 'Four electron domains with one lone pair give a trigonal pyramidal shape.'],
    ['concept', 'Which molecule has the smallest bond angle?', 'H₂O', 'CH₄', 'NH₃', 'BF₃', 'Two lone pairs on oxygen compress the H–O–H angle to about 104.5°.'],
    ['concept', 'Which molecule is polar?', 'NH₃', 'CO₂', 'CH₄', 'BF₃', 'NH₃ has polar bonds arranged asymmetrically, so the dipoles do not cancel.'],
    ['concept', 'The nitrate ion, NO₃⁻, has three resonance structures. What is true about its N–O bonds?', 'All three bonds are identical, with a bond order of about 1.33.', 'One bond is double and two are single at all times.', 'All three bonds are double bonds.', 'The bonds rapidly switch between single and double.', 'Resonance means the actual structure is an average of the three, so the bonds are equivalent.'],
    ['concept', 'How are formal charges used to choose the best Lewis structure?', 'The best structure has formal charges closest to zero, with any negative charge on the most electronegative atom.', 'The best structure has the largest formal charges.', 'The best structure always has a positive charge on oxygen.', 'Formal charges cannot help choose between structures.', 'Minimizing formal charges and placing negative charge on electronegative atoms gives the most stable structure.'],
    ['concept', 'Which carbon–carbon bond is the shortest?', 'The triple bond in ethyne, C₂H₂', 'The double bond in ethene, C₂H₄', 'The single bond in ethane, C₂H₆', 'All carbon–carbon bonds have the same length.', 'More shared electron pairs pull the nuclei closer together.'],
    ['concept', 'Under which condition does solid sodium chloride conduct electricity?', 'When it is melted or dissolved in water, so its ions can move', 'Only in its solid form', 'Never, because it has no electrons', 'Only when it is cooled below 0 °C', 'Ions are locked in place in the solid but are free to move when molten or dissolved.'],
    ['concept', 'Why does quartz (SiO₂) have a very high melting point?', 'It is a covalent network solid, so melting requires breaking many strong covalent bonds.', 'It is held together by weak London dispersion forces.', 'It is made of small, separate molecules.', 'It is a metallic solid.', 'In a network solid every atom is covalently bonded to its neighbors throughout the crystal.'],
    ['concept', 'How is a pi (π) bond formed?', 'By side-by-side overlap of unhybridized p orbitals', 'By end-to-end overlap of s orbitals', 'By transfer of an electron between atoms', 'By overlap of two hybrid orbitals along the bond axis', 'Sigma bonds form along the bond axis; pi bonds form above and below it.'],
    ['concept', 'In nitrous acid, HNO₂ (H–O–N=O), how many lone pairs are on the nitrogen atom?', '1', '0', '2', '3', 'Nitrogen forms three bonds (one single, one double) and keeps one lone pair to complete its octet.'],
    ['concept', 'What is the molecular geometry of XeF₄?', 'Square planar', 'Tetrahedral', 'Seesaw', 'Square pyramidal', 'Six electron domains with two lone pairs opposite each other give a square planar shape.'],
    ['concept', 'What are the hybridizations of carbon and oxygen in methanol, CH₃OH?', 'Carbon sp³ and oxygen sp³', 'Carbon sp² and oxygen sp³', 'Carbon sp³ and oxygen sp²', 'Carbon sp and oxygen sp', 'Both atoms have four electron domains, so both are sp³ hybridized.'],
    ['concept', 'Which combination would most increase the melting point of an ionic solid?', 'Larger ionic charges and smaller ionic radii', 'Smaller ionic charges and larger ionic radii', 'Larger ionic radii only', 'Adding covalent character to the bonds', 'Both factors increase the Coulombic attraction between ions.'],
    { family: 'graph', context: 'The potential energy of two hydrogen atoms was plotted against the distance between their nuclei.', plot: { type: 'line', xLabel: 'Internuclear distance (pm)', yLabel: 'Potential energy (kJ/mol)', x: [40, 60, 74, 100, 150, 200, 300], series: [{ name: 'H₂', values: [480, -300, -436, -360, -150, -50, 0] }] }, prompt: 'What are the bond length and bond energy of H₂?', choices: ['74 pm and 436 kJ/mol', '40 pm and 480 kJ/mol', '300 pm and 0 kJ/mol', '100 pm and 360 kJ/mol'], explanation: 'The minimum of the curve gives the bond length (74 pm), and its depth gives the bond energy (436 kJ/mol).' },
    { family: 'graph', context: 'The boiling points of the hydrides of group 16 elements were measured.', plot: { type: 'bar', xLabel: 'Compound', yLabel: 'Boiling point (°C)', x: ['H₂O', 'H₂S', 'H₂Se', 'H₂Te'], series: [{ name: 'Boiling point', values: [100, -60, -41, -2] }] }, prompt: 'Why is the boiling point of H₂O much higher than the trend predicts?', choices: ['Water molecules form hydrogen bonds with each other.', 'Water has the largest electron cloud and strongest London forces.', 'Water molecules are ionic.', 'Water has the weakest covalent bonds.'], explanation: 'H₂S, H₂Se, and H₂Te rise with London forces, but water’s hydrogen bonding makes it far higher.' }
  ],
  // Unit 3: Properties of Substances and Mixtures
  [
    ['concept', 'Why does H₂O have a much higher boiling point than H₂S?', 'Water molecules form hydrogen bonds, which are stronger than the dipole–dipole forces in H₂S.', 'H₂S has stronger covalent bonds.', 'Water has a larger molar mass.', 'H₂S forms hydrogen bonds but water does not.', 'Hydrogen bonding between O–H groups requires more energy to overcome.'],
    ['concept', 'Which isomer of pentane (C₅H₁₂) has the highest boiling point?', 'n-Pentane, because its straight chain has the most surface contact for London dispersion forces', 'Neopentane, because it is the most compact', 'Isopentane, because it forms hydrogen bonds', 'All three have the same boiling point because they have the same molar mass.', 'Straight chains have more surface area in contact, giving stronger dispersion forces.'],
    ['concept', 'Which substance cannot form hydrogen bonds with other molecules of itself?', 'CH₃OCH₃ (dimethyl ether)', 'CH₃OH (methanol)', 'NH₃', 'HF', 'Dimethyl ether has no H bonded directly to O, N, or F.'],
    ['concept', 'How are water molecules arranged around a dissolved Na⁺ ion?', 'With their partially negative oxygen atoms pointing toward the ion', 'With their partially positive hydrogen atoms pointing toward the ion', 'With random orientation', 'Covalently bonded to the ion', 'Ion–dipole attractions orient the negative end of each water dipole toward the cation.'],
    ['concept', 'Under which conditions do real gases deviate most from ideal behavior?', 'High pressure and low temperature', 'Low pressure and high temperature', 'Low pressure and low temperature only for noble gases', 'Standard temperature and pressure for all gases', 'Particle volume and intermolecular attractions matter most when gas particles are close and slow.'],
    ['concept', 'Helium and argon are in the same container at 300 K. Which statement is correct?', 'Both gases have the same average kinetic energy, but helium atoms move faster on average.', 'Argon atoms have greater average kinetic energy.', 'Helium atoms have greater average kinetic energy.', 'Both gases have the same average speed.', 'Average kinetic energy depends only on temperature; lighter particles move faster at the same energy.'],
    ['concept', 'In paper chromatography with polar paper and a nonpolar solvent, which dye travels farthest?', 'The least polar dye', 'The most polar dye', 'The dye with the largest molar mass', 'All dyes travel the same distance', 'Nonpolar dyes are attracted less to the polar paper and move with the nonpolar solvent.'],
    ['concept', 'Distillation separates two liquids based on what property?', 'Differences in boiling point, which reflect differences in intermolecular forces', 'Differences in density', 'Differences in color', 'Differences in molar mass only', 'The liquid with weaker intermolecular forces boils off first.'],
    ['concept', 'Why does iodine (I₂) dissolve better in hexane than in water?', 'Both I₂ and hexane are nonpolar and interact through London dispersion forces.', 'I₂ forms hydrogen bonds with hexane.', 'I₂ is ionic and dissolves in nonpolar solvents.', 'Water molecules react with iodine.', '“Like dissolves like”: nonpolar solutes dissolve in nonpolar solvents.'],
    ['design', 'Which procedure correctly prepares 0.250 L of 0.100 M Na₂CO₃ (molar mass 105.99 g/mol)?', 'Dissolve 2.65 g of Na₂CO₃ in some water in a 250 mL volumetric flask, then add water to the mark.', 'Add 2.65 g of Na₂CO₃ to 250 mL of water.', 'Dissolve 10.6 g of Na₂CO₃ in 250 mL of water.', 'Dissolve 0.0250 g of Na₂CO₃ in a 250 mL beaker.', 'Moles = 0.100 × 0.250 = 0.0250 mol, which is 2.65 g; diluting to the mark gives the exact total volume.'],
    ['concept', 'Which type of electromagnetic radiation causes electronic transitions in molecules?', 'Ultraviolet and visible light', 'Infrared radiation', 'Microwave radiation', 'Radio waves', 'UV/visible photons have energies that match electronic energy gaps; infrared causes vibrations and microwaves cause rotations.'],
    ['concept', 'How does the energy of a photon change as its wavelength decreases?', 'It increases.', 'It decreases.', 'It stays the same.', 'It becomes zero.', 'E = hc/λ, so shorter wavelengths carry more energy.'],
    ['concept', 'Why are molecular solids such as ice and dry ice typically soft with low melting points?', 'Their molecules are held together by relatively weak intermolecular forces.', 'They contain delocalized electrons.', 'Their atoms are held by strong covalent bonds throughout the solid.', 'They are made of ions.', 'Only intermolecular forces, not covalent bonds, must be overcome to melt a molecular solid.'],
    ['predict', 'The volume of a gas sample is cut in half at constant temperature and amount. What happens to the pressure?', 'It doubles.', 'It is cut in half.', 'It stays the same.', 'It quadruples.', 'By Boyle’s law, pressure is inversely proportional to volume.'],
    ['concept', 'Liquid A has a higher vapor pressure than liquid B at the same temperature. What can be concluded?', 'Liquid A has weaker intermolecular forces than liquid B.', 'Liquid A has stronger intermolecular forces than liquid B.', 'Liquid A has a higher boiling point.', 'Liquid A has a larger molar mass.', 'Weaker attractions let more molecules escape to the vapor phase.'],
    ['design', 'A student uses a spectrophotometer to find the concentration of a colored solution. Which wavelength should be selected?', 'The wavelength at which the solution absorbs most strongly', 'The wavelength at which the solution absorbs the least', 'Any wavelength in the infrared region', 'The wavelength of the color the solution appears', 'Measuring at maximum absorbance gives the greatest sensitivity in Beer’s law measurements.'],
    ['concept', 'Which statement about an aqueous solution of sodium acetate, CH₃COONa, is correct?', 'It contains separated Na⁺ and CH₃COO⁻ ions surrounded by water molecules.', 'It contains intact CH₃COONa molecules.', 'It does not conduct electricity.', 'The acetate ions form covalent bonds with water.', 'Soluble ionic compounds dissociate into hydrated ions.'],
    ['concept', 'Which change would increase the solubility of a gas in water?', 'Increasing the partial pressure of the gas above the water', 'Increasing the water temperature', 'Stirring the solution vigorously while heating it', 'Decreasing the pressure of the gas', 'More gas dissolves at higher pressure and lower temperature.'],
    { family: 'graph', context: 'The vapor pressures of two liquids were measured at several temperatures.', plot: { type: 'line', xLabel: 'Temperature (°C)', yLabel: 'Vapor pressure (torr)', x: [0, 20, 40, 60, 80], series: [{ name: 'Liquid X', values: [45, 120, 260, 520, 900] }, { name: 'Liquid Y', values: [5, 18, 55, 150, 355] }] }, prompt: 'Which conclusion is best supported by the data?', choices: ['Liquid Y has stronger intermolecular forces and a higher normal boiling point than liquid X.', 'Liquid X has stronger intermolecular forces than liquid Y.', 'Both liquids have the same normal boiling point.', 'Vapor pressure decreases as temperature increases.'], explanation: 'At every temperature, liquid Y has the lower vapor pressure, so its particles are held more strongly.' },
    { family: 'graph', context: 'A Beer’s law calibration curve was made for a dye at its wavelength of maximum absorbance.', plot: { type: 'line', xLabel: 'Concentration (M)', yLabel: 'Absorbance', x: [0, 0.1, 0.2, 0.3, 0.4, 0.5], series: [{ name: 'Absorbance', values: [0, 0.15, 0.3, 0.45, 0.6, 0.75] }] }, prompt: 'An unknown solution of the dye has an absorbance of 0.45. What is its concentration?', choices: ['0.30 M', '0.45 M', '0.15 M', '0.68 M'], explanation: 'Absorbance rises by 0.15 for every 0.1 M, so A = 0.45 corresponds to 0.30 M.' }
  ],
  // Unit 4: Chemical Reactions
  [
    ['concept', 'Which change is a chemical change?', 'Iron rusting in moist air', 'Ice melting', 'Sugar dissolving in water', 'Water boiling', 'Rusting produces a new substance (iron oxide); the others change only physical state or mixing.'],
    ['concept', 'What is the net ionic equation when AgNO₃(aq) is mixed with NaCl(aq)?', 'Ag⁺(aq) + Cl⁻(aq) → AgCl(s)', 'Na⁺(aq) + NO₃⁻(aq) → NaNO₃(s)', 'AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)', 'Ag⁺(aq) + NO₃⁻(aq) → AgNO₃(s)', 'Na⁺ and NO₃⁻ are spectator ions and are left out of the net ionic equation.'],
    ['concept', 'What is the balanced equation when Na₂CO₃(aq) is mixed with HCl(aq)?', 'Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂', 'Na₂CO₃ + HCl → NaCl + H₂CO₃', 'Na₂CO₃ + 2HCl → Na₂Cl₂ + H₂CO₃', 'Na₂CO₃ + HCl → NaCl + H₂O + CO₂', 'Carbonic acid decomposes into water and carbon dioxide, and two HCl are needed for the two Na⁺.'],
    ['concept', 'What are spectator ions?', 'Ions present in solution that do not take part in the reaction', 'Ions that form the precipitate', 'Ions that are oxidized', 'Ions produced by water', 'Spectator ions appear unchanged on both sides of the complete ionic equation.'],
    ['concept', 'Which is the balanced equation for the complete combustion of octane, C₈H₁₈?', '2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O', 'C₈H₁₈ + 8O₂ → 8CO₂ + 9H₂O', '2C₈H₁₈ + 17O₂ → 16CO + 18H₂O', 'C₈H₁₈ + 25O₂ → 8CO₂ + 9H₂O', 'Balancing carbon, hydrogen, then oxygen gives 16 CO₂ and 18 H₂O for two octane molecules.'],
    ['concept', 'In the reaction NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, what is the conjugate acid of NH₃?', 'NH₄⁺', 'OH⁻', 'H₂O', 'NH₂⁻', 'NH₃ accepts a proton to become NH₄⁺, its conjugate acid.'],
    ['concept', 'In the reaction Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), which species is oxidized?', 'Zn, whose oxidation number increases from 0 to +2', 'Cu²⁺, whose oxidation number decreases from +2 to 0', 'Zn²⁺', 'Cu', 'Oxidation is the loss of electrons, shown by an increase in oxidation number.'],
    ['concept', 'In the reaction Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), what is the oxidizing agent?', 'Cu²⁺', 'Zn', 'Zn²⁺', 'Cu', 'The oxidizing agent is the species that is reduced, gaining electrons from zinc.'],
    ['concept', 'According to the Brønsted–Lowry definition, what is an acid?', 'A proton (H⁺) donor', 'A proton acceptor', 'An electron-pair donor', 'A substance that produces OH⁻ in water', 'Brønsted–Lowry acids donate H⁺ ions; bases accept them.'],
    ['data', 'A buret reads 1.20 mL before a titration and 23.65 mL at the end point. What volume of titrant was delivered?', '22.45 mL', '24.85 mL', '23.65 mL', '22.5 mL', 'Volume delivered = final − initial = 23.65 − 1.20 = 22.45 mL, recorded to two decimal places.'],
    ['concept', 'Which pair of solutions forms a precipitate when mixed?', 'Ba(NO₃)₂(aq) and Na₂SO₄(aq)', 'NaCl(aq) and KNO₃(aq)', 'KBr(aq) and NaNO₃(aq)', 'NH₄Cl(aq) and NaNO₃(aq)', 'Barium sulfate is insoluble, while all nitrates and most sodium and potassium salts are soluble.'],
    ['design', 'In a gravimetric analysis, why is the precipitate heated and weighed repeatedly until its mass is constant?', 'To make sure all the water has been removed so the measured mass is only the precipitate', 'To make the precipitate react with oxygen', 'To dissolve any remaining impurities', 'To increase the mass of the precipitate', 'Leftover water would make the precipitate mass, and the calculated result, too high.'],
    ['concept', 'When NH₄NO₃ dissolves in water, the temperature of the solution drops. What does this indicate?', 'The dissolving process is endothermic.', 'The dissolving process is exothermic.', 'No energy change occurs.', 'A precipitate has formed.', 'The process absorbs heat from the surroundings, so the solution cools.'],
    ['concept', 'Which reaction is an oxidation–reduction reaction?', '2Mg(s) + O₂(g) → 2MgO(s)', 'HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)', 'AgNO₃(aq) + KCl(aq) → AgCl(s) + KNO₃(aq)', 'CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)', 'Magnesium goes from 0 to +2 and oxygen from 0 to −2, so electrons are transferred.'],
    ['data', 'In the reaction 2CO + O₂ → 2CO₂, a container holds 4 CO molecules and 4 O₂ molecules. What does the container hold after the reaction is complete?', '4 CO₂ molecules and 2 O₂ molecules', '4 CO₂ molecules only', '2 CO₂ molecules and 2 CO molecules', '8 CO₂ molecules', 'Four CO react with two O₂ to make four CO₂, leaving two O₂ in excess.'],
    ['concept', 'Why must chemical equations be balanced?', 'Atoms are neither created nor destroyed in a chemical reaction.', 'Molecules must be the same on both sides.', 'The number of moles of gas must stay the same.', 'Charges are always zero on both sides.', 'Balancing reflects the law of conservation of mass.'],
    ['concept', 'Which species can act as both a Brønsted–Lowry acid and a base?', 'H₂O', 'Cl⁻', 'NH₄⁺', 'Na⁺', 'Water can donate a proton (forming OH⁻) or accept one (forming H₃O⁺), so it is amphoteric.'],
    ['concept', 'What is the formula of the sulfate ion?', 'SO₄²⁻', 'SO₃²⁻', 'S²⁻', 'SO₄⁻', 'Sulfate has four oxygen atoms and a 2− charge; sulfite has three oxygen atoms.'],
    { family: 'graph', context: 'Solutions of 0.10 M AgNO₃ were added in steps to 50.0 mL of a NaCl solution, and the mass of dry AgCl precipitate was measured after each addition.', plot: { type: 'line', xLabel: 'Volume of AgNO₃ added (mL)', yLabel: 'Mass of AgCl (g)', x: [0, 5, 10, 15, 20, 25, 30], series: [{ name: 'AgCl', values: [0, 0.072, 0.143, 0.215, 0.287, 0.287, 0.287] }] }, prompt: 'Why does the mass of precipitate stop increasing after about 20 mL?', choices: ['All the chloride ions have reacted, so Cl⁻ is now the limiting reactant.', 'All the silver ions have reacted.', 'The precipitate begins to dissolve.', 'AgNO₃ stops reacting above 20 mL.'], explanation: 'Once all Cl⁻ is used up, adding more Ag⁺ produces no more AgCl.' },
    { family: 'graph', context: 'The temperature of a mixture was recorded as two solutions reacted in an insulated cup.', plot: { type: 'line', xLabel: 'Time (s)', yLabel: 'Temperature (°C)', x: [0, 20, 40, 60, 80, 100], series: [{ name: 'Temperature', values: [21.0, 25.5, 28.0, 28.5, 28.3, 28.1] }] }, prompt: 'What does the temperature change suggest about the reaction?', choices: ['It is exothermic, releasing heat to the solution.', 'It is endothermic, absorbing heat from the solution.', 'No reaction occurred.', 'It is a physical change only.'], explanation: 'The temperature rises, so the reaction releases thermal energy to its surroundings.' }
  ],
  // Unit 5: Kinetics
  [
    ['concept', 'How are the exponents in a rate law determined?', 'From experimental rate data', 'From the coefficients in the overall balanced equation', 'From the equilibrium constant', 'From the molar masses of the reactants', 'Only elementary steps have rate laws that follow their coefficients; overall rate laws must be measured.'],
    ['concept', 'Why does increasing temperature increase reaction rate?', 'A larger fraction of collisions have energy equal to or greater than the activation energy.', 'The activation energy decreases.', 'The reaction becomes more exothermic.', 'The number of molecules increases.', 'Higher temperature shifts the Maxwell–Boltzmann distribution so more particles exceed Eₐ.'],
    ['concept', 'How does a catalyst increase the rate of a reaction?', 'It provides an alternative pathway with a lower activation energy.', 'It increases the enthalpy change of the reaction.', 'It increases the temperature of the reactants.', 'It shifts the equilibrium toward products.', 'A catalyst lowers Eₐ without changing ΔH or being consumed overall.'],
    ['concept', 'Which statement describes the rate-determining step of a mechanism?', 'It is the slowest step, and it limits the overall rate.', 'It is always the first step.', 'It is the fastest step.', 'It is the step with the most reactants.', 'The overall reaction can go no faster than its slowest elementary step.'],
    ['concept', 'How does a reaction intermediate differ from a catalyst?', 'An intermediate is produced and then consumed; a catalyst is consumed and then regenerated.', 'An intermediate appears in the overall equation; a catalyst does not.', 'They are the same thing.', 'A catalyst is always a product of the reaction.', 'Neither appears in the overall equation, but they appear in the mechanism in opposite order.'],
    ['concept', 'What are the units of the rate constant for a second-order reaction when rate is in M/s?', 'M⁻¹ s⁻¹', 's⁻¹', 'M s⁻¹', 'M⁻² s⁻¹', 'For a second-order reaction, k = rate ÷ M², which gives M⁻¹ s⁻¹.'],
    ['concept', 'Which is true for a first-order reaction?', 'Its half-life does not depend on the starting concentration.', 'Its half-life doubles each time.', 'A plot of [A] versus time is linear.', 'Its rate does not depend on concentration.', 'For first order, t½ = 0.693/k, which is constant.'],
    ['concept', 'For which reaction order is a plot of [A] versus time a straight line?', 'Zero order', 'First order', 'Second order', 'Third order', 'Zero-order reactions lose reactant at a constant rate.'],
    ['concept', 'For a second-order reaction, which plot gives a straight line?', '1/[A] versus time', 'ln[A] versus time', '[A] versus time', '[A]² versus time', 'The second-order integrated rate law is 1/[A] = kt + 1/[A]₀.'],
    ['concept', 'What is the rate law for the elementary step 2NO₂ → NO₃ + NO?', 'Rate = k[NO₂]²', 'Rate = k[NO₂]', 'Rate = k[NO₃][NO]', 'Rate = k[NO₂]²[NO₃]', 'For an elementary step, the exponents equal the coefficients of the reactants.'],
    ['concept', 'Why do many collisions between reactant molecules not lead to a reaction?', 'The molecules lack enough energy or do not collide with the correct orientation.', 'All collisions lead to reactions.', 'The molecules are moving too slowly to collide.', 'Catalysts prevent most collisions.', 'Effective collisions need both energy ≥ Eₐ and proper orientation.'],
    ['data', 'Initial rate data for A + B → products:\nExp 1: [A] = 0.10 M, [B] = 0.10 M, rate = 2.0 × 10⁻³ M/s\nExp 2: [A] = 0.20 M, [B] = 0.10 M, rate = 8.0 × 10⁻³ M/s\nExp 3: [A] = 0.10 M, [B] = 0.20 M, rate = 2.0 × 10⁻³ M/s\nWhat is the rate law?', 'Rate = k[A]²', 'Rate = k[A][B]', 'Rate = k[A]²[B]', 'Rate = k[B]', 'Doubling [A] quadruples the rate (second order); doubling [B] has no effect (zero order).'],
    ['concept', 'The rate law for a reaction is rate = k[NO₂]². Which mechanism is consistent with this rate law?', 'A slow first step NO₂ + NO₂ → NO₃ + NO, followed by a fast step', 'A fast first step NO₂ + NO₂ → NO₃ + NO, followed by a slow step NO₃ + CO → NO₂ + CO₂', 'A single step NO₂ + CO → NO + CO₂', 'A slow step involving only CO', 'The rate law matches the reactants of the slow, rate-determining step.'],
    ['concept', 'How does the Maxwell–Boltzmann distribution change when the temperature increases?', 'The curve flattens and shifts to the right, so more particles have high energies.', 'The curve becomes taller and shifts to the left.', 'The curve does not change.', 'The area under the curve increases greatly.', 'The total number of particles stays the same, but the energy distribution broadens to higher values.'],
    ['concept', 'In the Arrhenius equation, k = Ae^(−Eₐ/RT), what does the factor A represent?', 'The frequency of collisions with the correct orientation', 'The activation energy', 'The temperature of the reaction', 'The equilibrium constant', 'A is the pre-exponential (frequency) factor.'],
    ['concept', 'How does a solid catalyst speed up a reaction between gases?', 'Reactant molecules adsorb onto the surface, which weakens their bonds and brings them together.', 'The catalyst dissolves in the gases.', 'The catalyst raises the temperature of the gases.', 'The catalyst is permanently consumed in the reaction.', 'Heterogeneous catalysts provide a surface where bonds are weakened and reactants meet.'],
    ['concept', 'Why does powdered zinc react faster with HCl than a single lump of zinc with the same mass?', 'The powder has a much larger surface area, so collisions with acid happen more often.', 'The powder has a higher activation energy.', 'Powdered zinc is a different element.', 'The lump contains more zinc atoms.', 'More exposed surface increases the frequency of effective collisions.'],
    ['design', 'A student wants to find the order of a reaction with respect to reactant B. What should the student do?', 'Run trials that change only [B] while keeping all other concentrations and the temperature constant, then compare initial rates.', 'Change the temperature and [B] at the same time.', 'Measure only the final concentration of the products.', 'Change all concentrations by the same factor.', 'Isolating one variable shows how the rate depends on that reactant alone.'],
    { family: 'graph', context: 'The concentration of reactant A was measured during a decomposition reaction.', plot: { type: 'line', xLabel: 'Time (s)', yLabel: '[A] (M)', x: [0, 20, 40, 60, 80], series: [{ name: '[A]', values: [0.8, 0.4, 0.2, 0.1, 0.05] }] }, prompt: 'What is the half-life of the reaction, and what is its order?', choices: ['20 s; first order', '40 s; first order', '20 s; zero order', '80 s; second order'], explanation: 'The concentration halves every 20 s regardless of its starting value, which shows a constant first-order half-life.' },
    { family: 'graph', context: 'A student plotted the natural log of reactant concentration against time.', plot: { type: 'line', xLabel: 'Time (min)', yLabel: 'ln[A]', x: [0, 5, 10, 15, 20], series: [{ name: 'ln[A]', values: [-1.0, -1.5, -2.0, -2.5, -3.0] }] }, prompt: 'What is the order of the reaction and the value of k?', choices: ['First order; k = 0.10 min⁻¹', 'Second order; k = 0.10 M⁻¹ min⁻¹', 'Zero order; k = 0.10 M/min', 'First order; k = 0.50 min⁻¹'], explanation: 'A straight ln[A] plot means first order, and k = −slope = 0.5 ÷ 5 = 0.10 min⁻¹.' }
  ],
  // Unit 6: Thermochemistry
  [
    ['concept', 'Which statement describes an exothermic reaction?', 'The system releases energy to the surroundings, so ΔH is negative.', 'The system absorbs energy, so ΔH is positive.', 'The temperature of the surroundings decreases.', 'Energy is destroyed during the reaction.', 'In exothermic processes heat flows out of the system and the surroundings warm up.'],
    ['concept', 'Which statement about bonds is correct?', 'Breaking bonds requires energy, and forming bonds releases energy.', 'Breaking bonds releases energy.', 'Forming bonds requires energy.', 'Bond breaking and forming involve no energy change.', 'Energy must be added to separate bonded atoms; it is released when bonds form.'],
    ['concept', 'What is meant by thermal equilibrium?', 'Two objects in contact are at the same temperature, so there is no net heat flow between them.', 'Both objects contain the same amount of heat.', 'The objects have the same mass.', 'Heat flows from the colder object to the hotter one.', 'Heat flows until temperatures are equal.'],
    ['predict', 'Equal masses of aluminum (c = 0.897 J/g·°C) and iron (c = 0.449 J/g·°C) absorb the same amount of heat. Which statement is correct?', 'The aluminum block has the smaller temperature increase.', 'The iron block has the smaller temperature increase.', 'Both blocks have the same temperature increase.', 'The aluminum block’s temperature decreases.', 'ΔT = q/(mc), so the higher specific heat gives a smaller temperature change.'],
    ['concept', 'While water boils at 100 °C, its temperature stays constant even though heat is added. Where does the energy go?', 'It overcomes intermolecular forces, increasing the potential energy of the molecules.', 'It increases the average kinetic energy of the molecules.', 'It breaks the covalent O–H bonds.', 'It is lost because energy is not conserved.', 'During a phase change, added energy separates molecules rather than speeding them up.'],
    ['concept', 'What is the standard enthalpy of formation of O₂(g)?', '0 kJ/mol, because it is an element in its standard state', '−498 kJ/mol', '+498 kJ/mol', 'It cannot be measured.', 'By definition, elements in their standard states have ΔH°f = 0.'],
    ['concept', 'If a reaction has ΔH = −250 kJ, what is ΔH for the reverse reaction?', '+250 kJ', '−250 kJ', '0 kJ', '+500 kJ', 'Reversing a reaction changes the sign of ΔH.'],
    ['concept', 'In coffee-cup calorimetry, what is assumed about heat transfer?', 'Heat released or absorbed by the reaction is equal and opposite to the heat change of the solution.', 'No heat is transferred.', 'The cup absorbs all of the heat.', 'The solution’s temperature stays constant.', 'q(reaction) = −q(solution) when heat loss to the surroundings is negligible.'],
    ['concept', 'For the same substance, which phase change involves the greatest increase in potential energy?', 'Liquid to gas', 'Solid to liquid', 'Gas to liquid', 'Liquid to solid', 'Vaporization separates molecules almost completely, so it needs much more energy than melting.'],
    ['concept', 'How does adding a catalyst change an energy diagram for a reaction?', 'It lowers the activation energy peak but does not change the energies of reactants or products.', 'It lowers the energy of the products.', 'It raises the energy of the reactants.', 'It changes ΔH for the reaction.', 'A catalyst provides a lower-energy path; ΔH is unchanged.'],
    ['predict', 'A student dissolves the same mass of KCl in 50.0 g of water instead of 100.0 g of water. How does the temperature change compare?', 'The temperature change is greater with 50.0 g of water.', 'The temperature change is smaller with 50.0 g of water.', 'The temperature change is the same.', 'The temperature increases instead of decreasing.', 'The same heat absorbed by a smaller mass of water produces a larger ΔT.'],
    ['concept', 'Which bond has the highest bond enthalpy?', 'N≡N', 'N=N', 'N–N', 'N–H', 'Triple bonds are the strongest bonds between the same two atoms.'],
    ['design', 'What is the minimum set of data needed to find the molar enthalpy of solution of KNO₃ in a coffee-cup calorimeter?', 'The mass of KNO₃, the mass of water, and the initial and final temperatures', 'Only the mass of KNO₃', 'The volume of the cup and the room temperature', 'The density of KNO₃ and the boiling point of water', 'These values give q = mcΔT and the moles of solute.'],
    ['concept', 'Why is the combustion of methane exothermic?', 'More energy is released forming the bonds in CO₂ and H₂O than is needed to break the bonds in CH₄ and O₂.', 'Breaking the bonds in methane releases energy.', 'No bonds are broken during combustion.', 'The products have higher potential energy than the reactants.', 'ΔH = energy to break bonds − energy released forming bonds, which is negative here.'],
    ['concept', 'Instant cold packs contain NH₄NO₃ and water. Why do they feel cold?', 'Dissolving NH₄NO₃ is endothermic and absorbs heat from the surroundings.', 'Dissolving NH₄NO₃ is exothermic.', 'Water freezes inside the pack.', 'NH₄NO₃ reacts with oxygen in the air.', 'The process absorbs thermal energy from your skin.'],
    ['concept', 'A hot metal is placed in cool water in an insulated container. Which relationship is correct?', 'q(metal) = −q(water)', 'q(metal) = q(water)', 'q(metal) = 0', 'q(water) = 0', 'Energy lost by the metal is gained by the water.'],
    ['concept', 'Why can Hess’s law be used to combine reactions?', 'Enthalpy is a state function, so ΔH depends only on the starting and ending states.', 'All reactions have the same ΔH.', 'ΔH depends on the path taken.', 'Hess’s law applies only to combustion reactions.', 'The total ΔH is the same whether a reaction occurs in one step or several.'],
    ['concept', 'What energy conversion takes place when a fuel burns?', 'Chemical potential energy is converted to thermal energy.', 'Thermal energy is converted to chemical energy.', 'Nuclear energy is converted to chemical energy.', 'Kinetic energy is converted to mass.', 'Energy stored in chemical bonds is released as heat.'],
    { family: 'graph', context: 'A sample of ice was heated at a constant rate, and its temperature was recorded.', plot: { type: 'line', xLabel: 'Time (min)', yLabel: 'Temperature (°C)', x: [0, 2, 4, 6, 8, 10, 12, 14], series: [{ name: 'Temperature', values: [-20, 0, 0, 40, 80, 100, 100, 100] }] }, prompt: 'What is happening between 2 and 4 minutes?', choices: ['The ice is melting at constant temperature as energy overcomes intermolecular forces.', 'The water is boiling.', 'The ice is warming up.', 'The temperature of the liquid is rising.'], explanation: 'The flat segment at 0 °C is the melting plateau.' },
    { family: 'graph', context: 'The energy of a reaction system was plotted along the reaction pathway.', plot: { type: 'line', xLabel: 'Reaction progress', yLabel: 'Energy (kJ/mol)', x: [0, 1, 2, 3, 4, 5, 6], series: [{ name: 'Energy', values: [50, 50, 90, 120, 70, 20, 20] }] }, prompt: 'What are ΔH and the activation energy for the forward reaction?', choices: ['ΔH = −30 kJ/mol; Eₐ = 70 kJ/mol', 'ΔH = +30 kJ/mol; Eₐ = 70 kJ/mol', 'ΔH = −30 kJ/mol; Eₐ = 120 kJ/mol', 'ΔH = −100 kJ/mol; Eₐ = 100 kJ/mol'], explanation: 'ΔH = 20 − 50 = −30 kJ/mol, and Eₐ = 120 − 50 = 70 kJ/mol.' }
  ],
  // Unit 7: Equilibrium
  [
    ['concept', 'Which statement describes a system at chemical equilibrium?', 'The forward and reverse rates are equal, and concentrations remain constant.', 'The concentrations of reactants and products are equal.', 'The reactions have stopped.', 'Only the forward reaction occurs.', 'Equilibrium is dynamic: both reactions continue at equal rates.'],
    ['concept', 'A reaction has K = 4.5 × 10⁸ at 25 °C. What does this indicate?', 'Products are strongly favored at equilibrium.', 'Reactants are strongly favored at equilibrium.', 'The reaction is very fast.', 'The reaction cannot reach equilibrium.', 'A very large K means the equilibrium mixture is mostly products; K says nothing about rate.'],
    ['concept', 'Which species are left out of an equilibrium constant expression?', 'Pure solids and pure liquids', 'Gases', 'Aqueous ions', 'All products', 'The activities of pure solids and liquids are constant, so they do not appear in K.'],
    ['predict', 'More N₂ is added to the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g). What happens?', 'The equilibrium shifts right, producing more NH₃.', 'The equilibrium shifts left, producing more H₂.', 'K increases.', 'Nothing changes.', 'Adding a reactant makes Q < K, so the forward reaction proceeds.'],
    ['predict', 'The volume of the container for 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) is decreased at constant temperature. What happens?', 'The equilibrium shifts right, toward fewer moles of gas.', 'The equilibrium shifts left, toward more moles of gas.', 'K decreases.', 'Nothing happens because K is constant.', 'Increasing pressure by reducing volume favors the side with fewer gas particles (2 versus 3).'],
    ['predict', 'An exothermic reaction is at equilibrium. What happens when the temperature is increased?', 'The equilibrium shifts left, and K decreases.', 'The equilibrium shifts right, and K increases.', 'The equilibrium shifts left, but K stays the same.', 'Nothing happens.', 'Heat acts like a product in an exothermic reaction, so adding heat favors reactants and lowers K.'],
    ['concept', 'How does adding a catalyst affect a system at equilibrium?', 'It does not change the equilibrium position or K.', 'It shifts the equilibrium toward products.', 'It increases K.', 'It shifts the equilibrium toward reactants.', 'A catalyst speeds both forward and reverse reactions equally.'],
    ['predict', 'Argon gas is added to an equilibrium mixture of gases in a rigid container at constant temperature. What happens?', 'Nothing, because the partial pressures of the reacting gases do not change.', 'The equilibrium shifts toward fewer moles of gas.', 'The equilibrium shifts toward more moles of gas.', 'K increases.', 'Adding an inert gas at constant volume leaves all concentrations unchanged.'],
    ['concept', 'Why is AgCl less soluble in 0.10 M NaCl than in pure water?', 'The added Cl⁻ shifts AgCl(s) ⇌ Ag⁺ + Cl⁻ to the left (the common-ion effect).', 'NaCl reacts with AgCl to form a new compound.', 'The Ksp of AgCl decreases in NaCl solution.', 'Water molecules are removed by NaCl.', 'A common ion pushes the dissolution equilibrium back toward the solid.'],
    ['concept', 'For a reaction mixture, Q is less than K. What will happen?', 'The forward reaction proceeds until Q equals K.', 'The reverse reaction proceeds until Q equals K.', 'The system is already at equilibrium.', 'K decreases until it equals Q.', 'When Q < K, there are too few products, so more form.'],
    ['concept', 'For which reaction does Kp equal Kc?', 'H₂(g) + I₂(g) ⇌ 2HI(g)', 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)', 'N₂O₄(g) ⇌ 2NO₂(g)', 'PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)', 'Kp = Kc(RT)^Δn, and Δn = 0 for the H₂ + I₂ reaction.'],
    ['concept', 'A reaction has an equilibrium constant K. What is the equilibrium constant for the reverse reaction?', '1/K', '−K', 'K²', 'K', 'Reversing a reaction inverts its equilibrium constant.'],
    ['predict', 'Which change will increase the amount of HI at equilibrium for H₂(g) + I₂(g) ⇌ 2HI(g)?', 'Adding more H₂', 'Removing some I₂', 'Adding a catalyst', 'Decreasing the volume', 'Adding a reactant shifts the equilibrium right; volume changes do not affect this reaction because Δn = 0.'],
    ['concept', 'What is the equilibrium expression Kp for CaCO₃(s) ⇌ CaO(s) + CO₂(g)?', 'Kp = P(CO₂)', 'Kp = P(CO₂) × [CaO]/[CaCO₃]', 'Kp = 1/P(CO₂)', 'Kp = [CaO][CO₂]', 'Pure solids are omitted, leaving only the partial pressure of CO₂.'],
    ['concept', 'Two salts, AgCl (Ksp = 1.8 × 10⁻¹⁰) and AgBr (Ksp = 5.0 × 10⁻¹³), have the same ion ratio. Which is less soluble in water?', 'AgBr', 'AgCl', 'They are equally soluble.', 'It cannot be determined.', 'For salts with the same ion ratio, the smaller Ksp means lower solubility.'],
    ['concept', 'When will a precipitate form after two solutions are mixed?', 'When the ion product Q is greater than Ksp', 'When Q is less than Ksp', 'When Q equals zero', 'Whenever two ionic solutions are mixed', 'If Q > Ksp, the solution is supersaturated and the solid forms.'],
    ['predict', 'NO₂ is removed from the equilibrium N₂O₄(g) ⇌ 2NO₂(g). What happens?', 'More N₂O₄ decomposes to replace some of the NO₂.', 'More N₂O₄ forms.', 'K increases.', 'Nothing happens.', 'Removing a product shifts the equilibrium toward products.'],
    ['concept', 'Why is Mg(OH)₂ more soluble in acidic solution than in pure water?', 'H⁺ reacts with OH⁻, removing it and shifting Mg(OH)₂(s) ⇌ Mg²⁺ + 2OH⁻ to the right.', 'Acid raises the Ksp of Mg(OH)₂.', 'Mg²⁺ reacts with water.', 'Acid adds more OH⁻ ions.', 'Removing a product ion drives more solid to dissolve.'],
    { family: 'graph', context: 'N₂O₄ was placed in a sealed flask and allowed to decompose: N₂O₄(g) ⇌ 2NO₂(g). Concentrations were tracked over time.', plot: { type: 'line', xLabel: 'Time (s)', yLabel: 'Concentration (M)', x: [0, 10, 20, 30, 40, 50], series: [{ name: 'N₂O₄', values: [0.1, 0.07, 0.06, 0.055, 0.055, 0.055] }, { name: 'NO₂', values: [0, 0.06, 0.08, 0.09, 0.09, 0.09] }] }, prompt: 'Which statement about the system after 30 s is correct?', choices: ['The system is at equilibrium; both reactions continue at equal rates.', 'The reactions have stopped.', '[N₂O₄] equals [NO₂].', 'Only the forward reaction is occurring.'], explanation: 'Constant concentrations show equilibrium, which is dynamic; the concentrations do not need to be equal.' },
    { family: 'graph', context: 'The equilibrium constant of a gas-phase reaction was measured at several temperatures.', plot: { type: 'bar', xLabel: 'Temperature (K)', yLabel: 'K', x: ['300', '400', '500', '600'], series: [{ name: 'K', values: [850, 120, 25, 6] }] }, prompt: 'Which conclusion about the forward reaction is supported?', choices: ['It is exothermic, because K decreases as temperature increases.', 'It is endothermic, because K decreases as temperature increases.', 'It is exothermic, because K increases as temperature increases.', 'Its ΔH is zero.'], explanation: 'For an exothermic reaction, raising the temperature favors reactants and lowers K.' }
  ],
  // Unit 8: Acids and Bases
  [
    ['concept', 'What is true about a strong acid such as HCl in water?', 'It ionizes completely to form H₃O⁺ and Cl⁻.', 'It ionizes only slightly.', 'It does not conduct electricity.', 'It has a very small Ka.', 'Strong acids transfer essentially all of their protons to water.'],
    ['concept', 'What is the conjugate base of HSO₄⁻?', 'SO₄²⁻', 'H₂SO₄', 'HSO₃⁻', 'SO₃²⁻', 'Removing one H⁺ from HSO₄⁻ gives SO₄²⁻.'],
    ['data', 'Three weak acids have these Ka values:\nHX: 1.8 × 10⁻⁵\nHY: 6.8 × 10⁻⁴\nHZ: 4.9 × 10⁻¹⁰\nWhich ranking goes from strongest to weakest acid?', 'HY > HX > HZ', 'HZ > HX > HY', 'HX > HY > HZ', 'HY > HZ > HX', 'A larger Ka means a stronger acid.'],
    ['concept', 'At 25 °C, a solution has a pH of 3.0. What is its pOH?', '11.0', '3.0', '7.0', '17.0', 'pH + pOH = 14.00 at 25 °C.'],
    ['concept', 'Which mixture will not act as a buffer?', 'HCl and NaCl', 'CH₃COOH and CH₃COONa', 'NH₃ and NH₄Cl', 'H₂CO₃ and NaHCO₃', 'A buffer needs a weak acid and its conjugate base (or a weak base and its conjugate acid); HCl is a strong acid.'],
    ['concept', 'How does an acetic acid/acetate buffer resist a pH change when a small amount of HCl is added?', 'The acetate ions react with the added H⁺ to form acetic acid.', 'The acetic acid reacts with the added H⁺.', 'The water molecules absorb the H⁺.', 'Na⁺ ions neutralize the acid.', 'The conjugate base consumes added acid, so [H⁺] changes very little.'],
    ['concept', 'During the titration of a weak acid with a strong base, what is true at the half-equivalence point?', 'pH = pKa', 'pH = 7', 'pH = 14 − pKa', 'All of the acid has been neutralized.', 'At half-equivalence, [HA] = [A⁻], so the Henderson–Hasselbalch equation gives pH = pKa.'],
    ['concept', 'Why is the pH greater than 7 at the equivalence point when a weak acid is titrated with NaOH?', 'The conjugate base produced reacts with water to form OH⁻.', 'Excess NaOH remains.', 'The weak acid is still present.', 'Na⁺ ions make the solution basic.', 'At equivalence the solution contains A⁻, which is a weak base.'],
    ['concept', 'How should an indicator be chosen for a titration?', 'Its pKa should be close to the pH at the equivalence point.', 'Its color should match the color of the acid.', 'Its pKa should be 7 for every titration.', 'It should be a strong acid.', 'An indicator changes color near its pKa, which should match the equivalence-point pH.'],
    ['concept', 'What is the Kb expression for propylamine, C₃H₇NH₂?', 'Kb = [C₃H₇NH₃⁺][OH⁻] / [C₃H₇NH₂]', 'Kb = [C₃H₇NH₃⁺][H₂O] / [C₃H₇NH₂]', 'Kb = [C₃H₇NH₃⁺][OH⁻] / ([C₃H₇NH₂][H₂O])', 'Kb = [C₃H₇NH₂] / [C₃H₇NH₃⁺][OH⁻]', 'Water is a pure liquid and is left out of the expression.'],
    ['concept', 'What is the conjugate base of phenol, C₆H₅OH?', 'C₆H₅O⁻', 'C₆H₅OH₂⁺', 'C₆H₆O', 'C₆H₅⁻', 'Phenol loses the H⁺ from its O–H group.'],
    ['concept', 'A solution of weak acid HA has a pH lower than the acid’s pKa. Which species is present in the greater amount?', 'HA', 'A⁻', 'They are equal.', 'OH⁻', 'When pH < pKa, the protonated form predominates.'],
    ['concept', 'Which is the strongest acid?', 'HClO₄', 'HClO₃', 'HClO₂', 'HClO', 'More oxygen atoms pull electron density from the O–H bond and stabilize the conjugate base.'],
    ['concept', 'At 50 °C, Kw = 5.5 × 10⁻¹⁴ and pure water has a pH of about 6.6. Is the water acidic?', 'No, it is neutral because [H⁺] still equals [OH⁻].', 'Yes, because its pH is below 7.', 'No, it is basic because Kw increased.', 'Yes, because heating adds H⁺ ions.', 'Neutral means [H⁺] = [OH⁻]; the neutral pH shifts with temperature.'],
    ['concept', 'For the diprotic acid H₂SO₃, how do Ka₁ and Ka₂ compare?', 'Ka₁ is much larger than Ka₂.', 'Ka₂ is larger than Ka₁.', 'They are equal.', 'Ka₂ is always zero.', 'Removing a proton from a negative ion is harder than from a neutral molecule.'],
    ['concept', 'Is a solution of NH₄Cl acidic, basic, or neutral?', 'Acidic, because NH₄⁺ donates protons to water', 'Basic, because Cl⁻ accepts protons', 'Neutral, because it is a salt', 'Basic, because NH₄⁺ produces OH⁻', 'NH₄⁺ is the conjugate acid of a weak base, while Cl⁻ is a negligible base.'],
    ['concept', 'Which species is amphiprotic?', 'HCO₃⁻', 'CO₃²⁻', 'Na⁺', 'Cl⁻', 'HCO₃⁻ can donate a proton to become CO₃²⁻ or accept one to become H₂CO₃.'],
    ['concept', 'Which buffer has the greatest capacity to resist pH change?', '1.0 M CH₃COOH and 1.0 M CH₃COONa', '0.10 M CH₃COOH and 0.10 M CH₃COONa', '0.010 M CH₃COOH and 0.010 M CH₃COONa', '1.0 M CH₃COOH and 0.010 M CH₃COONa', 'Higher, equal concentrations of acid and conjugate base can neutralize more added acid or base.'],
    { family: 'graph', context: '25.0 mL of a weak acid HA was titrated with 0.100 M NaOH.', plot: { type: 'line', xLabel: 'Volume of NaOH (mL)', yLabel: 'pH', x: [0, 5, 12.5, 20, 25, 30, 40], series: [{ name: 'pH', values: [2.9, 4.14, 4.74, 5.34, 8.7, 12.0, 12.3] }] }, prompt: 'What is the pKa of HA?', choices: ['4.74', '8.7', '2.9', '7.0'], explanation: 'At half-equivalence (12.5 mL), pH = pKa = 4.74.' },
    { family: 'graph', context: 'A strong acid was titrated with a strong base.', plot: { type: 'line', xLabel: 'Volume of base added (mL)', yLabel: 'pH', x: [0, 5, 10, 15, 20, 25, 30], series: [{ name: 'pH', values: [1.0, 1.2, 1.5, 2.0, 7.0, 11.8, 12.3] }] }, prompt: 'Which indicator would best show the equivalence point?', choices: ['Bromothymol blue (color change pH 6.0–7.6)', 'Methyl violet (color change pH 0.0–1.6)', 'Thymol blue (color change pH 1.2–2.8)', 'Alizarin yellow (color change pH 10.1–12.0)'], explanation: 'The equivalence point is at pH 7.0, which falls within bromothymol blue’s range.' }
  ],
  // Unit 9: Thermodynamics and Electrochemistry
  [
    ['concept', 'Which process has the largest increase in entropy?', 'A solid decomposing to produce two moles of gas', 'A gas condensing to a liquid', 'A liquid freezing', 'Two moles of gas combining to form one mole of gas', 'Producing gas from a solid greatly increases the number of possible microstates.'],
    ['concept', 'Under standard conditions, a process is thermodynamically favorable when what is true?', 'ΔG° < 0', 'ΔG° > 0', 'ΔH° > 0', 'ΔS° < 0', 'A negative Gibbs free energy change means the process is favorable.'],
    ['concept', 'A reaction has ΔH < 0 and ΔS > 0. When is it thermodynamically favorable?', 'At all temperatures', 'Only at high temperatures', 'Only at low temperatures', 'Never', 'Both terms make ΔG = ΔH − TΔS negative at any temperature.'],
    ['concept', 'The conversion of diamond to graphite is thermodynamically favorable, yet diamonds do not visibly change. Why?', 'The reaction has a very high activation energy, so it is extremely slow.', 'ΔG for the reaction is positive.', 'Graphite is less stable than diamond.', 'The reaction is at equilibrium.', 'Thermodynamics shows whether a reaction can occur; kinetics determines how fast.'],
    ['concept', 'A reaction has ΔG° < 0 at 298 K. What must be true about its equilibrium constant?', 'K > 1', 'K < 1', 'K = 1', 'K = 0', 'ΔG° = −RT ln K, so a negative ΔG° gives K > 1.'],
    ['concept', 'In a galvanic cell, where does oxidation occur and which way do electrons flow?', 'At the anode; electrons flow from the anode to the cathode through the wire.', 'At the cathode; electrons flow from the cathode to the anode.', 'At the anode; electrons flow through the salt bridge.', 'At the cathode; electrons flow through the salt bridge.', 'Oxidation at the anode releases electrons, which travel through the external circuit.'],
    ['concept', 'What is the purpose of the salt bridge in a galvanic cell?', 'It lets ions flow to keep each half-cell electrically neutral.', 'It carries electrons between the electrodes.', 'It provides the reactants for the cell.', 'It prevents any current from flowing.', 'Without ion flow, charge would build up and stop the reaction.'],
    ['concept', 'How does an electrolytic cell differ from a galvanic cell?', 'An electrolytic cell needs an external power source to drive a thermodynamically unfavorable reaction.', 'An electrolytic cell produces electricity from a favorable reaction.', 'An electrolytic cell has no anode.', 'An electrolytic cell does not involve redox reactions.', 'Electrolysis uses electrical energy to force a reaction with ΔG > 0.'],
    ['concept', 'A cell has a positive standard cell potential, E°cell. What does this mean?', 'ΔG° is negative, so the cell reaction is thermodynamically favorable.', 'ΔG° is positive.', 'The reaction requires an external power source.', 'K is less than 1.', 'ΔG° = −nFE°, so a positive E° gives a negative ΔG°.'],
    ['predict', 'A galvanic cell is made from a Zn electrode in Zn²⁺(aq) and a Cu electrode in Cu²⁺(aq). What happens to the electrode masses as the cell runs?', 'The zinc electrode loses mass and the copper electrode gains mass.', 'The zinc electrode gains mass and the copper electrode loses mass.', 'Both electrodes gain mass.', 'Neither electrode changes mass.', 'Zinc is oxidized to Zn²⁺ ions, while Cu²⁺ ions are reduced and plate onto the copper.'],
    ['concept', 'How can a thermodynamically unfavorable reaction be made to occur in living cells?', 'By coupling it with a favorable reaction such as ATP hydrolysis so that the overall ΔG is negative', 'By lowering its activation energy with an enzyme alone', 'By increasing its ΔG', 'By cooling the cell', 'Coupled reactions share an intermediate so that their combined ΔG is negative.'],
    ['concept', 'For a reaction mixture, Q < K. What is true about ΔG?', 'ΔG is negative, so the forward reaction is favorable.', 'ΔG is positive.', 'ΔG is zero.', 'ΔG cannot be determined.', 'ΔG = RT ln(Q/K), which is negative when Q < K.'],
    ['concept', 'Urea dissolves in water on its own, and the solution gets colder. What does this tell you?', 'The process is endothermic, and it is driven by an increase in entropy.', 'The process is exothermic.', 'The entropy of the system decreases.', 'ΔG for the process is positive.', 'A favorable endothermic process must have ΔS > 0 large enough that TΔS > ΔH.'],
    ['predict', 'In a Zn/Cu²⁺ galvanic cell, the concentration of Cu²⁺ is increased. What happens to the cell potential?', 'It increases.', 'It decreases.', 'It stays the same.', 'It becomes zero.', 'More reactant makes Q smaller, so E increases (Nernst relationship).'],
    ['design', 'A student electroplates copper to determine the Faraday constant. Which measurement is not needed?', 'The volume of the copper(II) sulfate solution', 'The current', 'The time the current flows', 'The change in mass of the cathode', 'The charge (current × time) and the moles of copper deposited are enough.'],
    ['concept', 'For 2H₂(g) + O₂(g) → 2H₂O, how does ΔS° change if the water is formed as a liquid instead of a gas?', 'ΔS° becomes more negative.', 'ΔS° becomes more positive.', 'ΔS° stays the same.', 'ΔS° becomes zero.', 'Liquid water has much lower entropy than water vapor.'],
    ['concept', 'Why does the entropy of a gas increase when it expands into a larger volume at constant temperature?', 'The particles have more possible positions, so there are more microstates.', 'The particles move faster.', 'The particles gain potential energy.', 'The number of particles increases.', 'A larger volume increases the number of ways energy and particles can be arranged.'],
    ['concept', 'During electroplating of silver onto a spoon, where does silver deposit and by what process?', 'On the cathode, by reduction of Ag⁺ ions', 'On the anode, by oxidation of Ag atoms', 'On the cathode, by oxidation of Ag⁺ ions', 'On the anode, by reduction of Ag⁺ ions', 'Reduction always occurs at the cathode, where Ag⁺ gains electrons to become Ag.'],
    { family: 'graph', context: 'The standard free energy change of a reaction was calculated at several temperatures.', plot: { type: 'line', xLabel: 'Temperature (K)', yLabel: 'ΔG° (kJ/mol)', x: [200, 300, 400, 500, 600], series: [{ name: 'ΔG°', values: [30, 15, 0, -15, -30] }] }, prompt: 'What are the signs of ΔH° and ΔS° for this reaction?', choices: ['ΔH° > 0 and ΔS° > 0', 'ΔH° < 0 and ΔS° < 0', 'ΔH° < 0 and ΔS° > 0', 'ΔH° > 0 and ΔS° < 0'], explanation: 'ΔG° = ΔH° − TΔS° decreases as T rises (ΔS° > 0) and is positive at low T (ΔH° > 0).' },
    { family: 'graph', context: 'Standard molar entropies of water in three phases were compared.', plot: { type: 'bar', xLabel: 'Phase', yLabel: 'S° (J/mol·K)', x: ['H₂O(s)', 'H₂O(l)', 'H₂O(g)'], series: [{ name: 'S°', values: [41, 70, 189] }] }, prompt: 'Why does water vapor have by far the greatest entropy?', choices: ['Gas particles move freely through a large volume, so there are many more possible microstates.', 'Water vapor has stronger hydrogen bonds.', 'Water vapor molecules are heavier.', 'Gas molecules have fewer ways to move.'], explanation: 'Entropy increases dramatically from liquid to gas because of the freedom of particle motion.' }
  ]
];

const SUP = '⁻⁰¹²³⁴⁵⁶⁷⁸⁹';
const SUB = '₀₁₂₃₄₅₆₇₈₉';
const sup = text => String(text).replace(/[-0-9]/g, ch => SUP['-0123456789'.indexOf(ch)]);
const sub = text => String(text).replace(/[0-9]/g, ch => SUB[Number(ch)]);

// Formats a number to a few significant figures, using scientific notation when it is very large or small.
function num(value, digits = 3) {
  if (!Number.isFinite(value)) return 'NaN';
  if (value === 0) return '0';
  const abs = Math.abs(value);
  let text;
  if (abs >= 1e5 || abs < 1e-3) {
    const [mantissa, exponent] = value.toExponential(digits - 1).split('e');
    text = mantissa + ' × 10' + sup(Number(exponent));
  } else {
    text = abs >= 10 ** digits ? Math.round(value).toLocaleString('en-US') : value.toPrecision(digits);
    if (/e/.test(text)) text = Number(text).toLocaleString('en-US');
  }
  return text.replace(/^-/, '−');
}
const u = (value, label, digits) => num(value, digits) + ' ' + label;
const signed = value => (value > 0 ? '+' : '') + num(value);
const liters = mL => String(Number((mL / 1000).toFixed(6)));
const fixed = (value, places) => value.toFixed(places).replace(/^-/, '−');

const NA = 6.022e23;
const PLANCK = 6.626e-34;
const LIGHT = 2.998e8;
const RL = 0.08206;
const R = 8.314;
const FARADAY = 96485;

// Builds one calculation question; returns null unless the four choices are distinct.
function calc(unitNumber, family, key, prompt, values, explanation) {
  const choices = values.map(value => typeof value === 'number' ? num(value) : value);
  if (new Set(choices).size !== 4 || choices.some(choice => /NaN|Infinity|undefined/.test(choice))) return null;
  return { id: 'chem-' + unitNumber + '-' + family + '-' + key, family, prompt, choices, answer: 0, explanation };
}

// The correct value followed by the first three distinct wrong values from a list of likely mistakes.
function options(correct, candidates, format = num) {
  const out = [format(correct)];
  for (const value of candidates) {
    const text = format(value);
    if (typeof value === 'number' && !Number.isFinite(value)) continue;
    if (out.includes(text) || /NaN/.test(text)) continue;
    out.push(text);
    if (out.length === 4) break;
  }
  return out;
}

// Three different wrong options from a pool, chosen by position so the set stays stable.
function others(pool, correct, index) {
  const rest = pool.filter(item => item !== correct);
  return [0, 1, 2].map(step => rest[(index + step) % rest.length]);
}

const atomic = { H: 1.008, C: 12.01, N: 14.01, O: 16.00, F: 19.00, Na: 22.99, Mg: 24.31, Al: 26.98, P: 30.97, S: 32.07, Cl: 35.45, K: 39.10, Ca: 40.08, Fe: 55.85, Cu: 63.55 };
const molar = parts => parts.reduce((sum, [element, count]) => sum + atomic[element] * count, 0);
const formulaOf = parts => parts.map(([element, count]) => element + (count > 1 ? sub(count) : '')).join('');

// [name, formula, parts, ionic]
const substances = [
  ['water', 'H₂O', [['H', 2], ['O', 1]], false],
  ['carbon dioxide', 'CO₂', [['C', 1], ['O', 2]], false],
  ['methane', 'CH₄', [['C', 1], ['H', 4]], false],
  ['propane', 'C₃H₈', [['C', 3], ['H', 8]], false],
  ['glucose', 'C₆H₁₂O₆', [['C', 6], ['H', 12], ['O', 6]], false],
  ['ammonia', 'NH₃', [['N', 1], ['H', 3]], false],
  ['ethanol', 'C₂H₆O', [['C', 2], ['H', 6], ['O', 1]], false],
  ['sulfur dioxide', 'SO₂', [['S', 1], ['O', 2]], false],
  ['nitrogen dioxide', 'NO₂', [['N', 1], ['O', 2]], false],
  ['ethane', 'C₂H₆', [['C', 2], ['H', 6]], false],
  ['hydrogen peroxide', 'H₂O₂', [['H', 2], ['O', 2]], false],
  ['sulfuric acid', 'H₂SO₄', [['H', 2], ['S', 1], ['O', 4]], false],
  ['calcium carbonate', 'CaCO₃', [['Ca', 1], ['C', 1], ['O', 3]], true],
  ['iron(III) oxide', 'Fe₂O₃', [['Fe', 2], ['O', 3]], true],
  ['aluminum oxide', 'Al₂O₃', [['Al', 2], ['O', 3]], true],
  ['sodium chloride', 'NaCl', [['Na', 1], ['Cl', 1]], true],
  ['magnesium chloride', 'MgCl₂', [['Mg', 1], ['Cl', 2]], true],
  ['potassium nitrate', 'KNO₃', [['K', 1], ['N', 1], ['O', 3]], true],
  ['copper(II) sulfate', 'CuSO₄', [['Cu', 1], ['S', 1], ['O', 4]], true],
  ['sodium carbonate', 'Na₂CO₃', [['Na', 2], ['C', 1], ['O', 3]], true]
];

const shapes = ['linear', 'trigonal planar', 'bent', 'tetrahedral', 'trigonal pyramidal', 'trigonal bipyramidal', 'seesaw', 'T-shaped', 'octahedral', 'square pyramidal', 'square planar'];
const hybrids = ['sp', 'sp²', 'sp³', 'sp³d', 'sp³d²'];
const angles = ['180°', '120°', '109.5°', 'slightly less than 120°', 'about 107°', 'about 104.5°'];
// [formula, central atom, electron domains, lone pairs, shape, hybridization, angle or null]
const vsepr = [
  ['CO₂', 'C', 2, 0, 'linear', 'sp', '180°'],
  ['HCN', 'C', 2, 0, 'linear', 'sp', '180°'],
  ['BF₃', 'B', 3, 0, 'trigonal planar', 'sp²', '120°'],
  ['SO₃', 'S', 3, 0, 'trigonal planar', 'sp²', '120°'],
  ['NO₃⁻', 'N', 3, 0, 'trigonal planar', 'sp²', '120°'],
  ['SO₂', 'S', 3, 1, 'bent', 'sp²', 'slightly less than 120°'],
  ['O₃', 'O', 3, 1, 'bent', 'sp²', 'slightly less than 120°'],
  ['CH₄', 'C', 4, 0, 'tetrahedral', 'sp³', '109.5°'],
  ['CCl₄', 'C', 4, 0, 'tetrahedral', 'sp³', '109.5°'],
  ['NH₄⁺', 'N', 4, 0, 'tetrahedral', 'sp³', '109.5°'],
  ['NH₃', 'N', 4, 1, 'trigonal pyramidal', 'sp³', 'about 107°'],
  ['PH₃', 'P', 4, 1, 'trigonal pyramidal', 'sp³', 'about 107°'],
  ['H₂O', 'O', 4, 2, 'bent', 'sp³', 'about 104.5°'],
  ['H₂S', 'S', 4, 2, 'bent', 'sp³', null],
  ['PCl₅', 'P', 5, 0, 'trigonal bipyramidal', 'sp³d', null],
  ['SF₄', 'S', 5, 1, 'seesaw', 'sp³d', null],
  ['ClF₃', 'Cl', 5, 2, 'T-shaped', 'sp³d', null],
  ['XeF₂', 'Xe', 5, 3, 'linear', 'sp³d', null],
  ['I₃⁻', 'I', 5, 3, 'linear', 'sp³d', null],
  ['SF₆', 'S', 6, 0, 'octahedral', 'sp³d²', null],
  ['BrF₅', 'Br', 6, 1, 'square pyramidal', 'sp³d²', null],
  ['XeF₄', 'Xe', 6, 2, 'square planar', 'sp³d²', null]
];

const reductions = { Ag: ['Ag⁺', 0.80, 1], Cu: ['Cu²⁺', 0.34, 2], Pb: ['Pb²⁺', -0.13, 2], Sn: ['Sn²⁺', -0.14, 2], Ni: ['Ni²⁺', -0.25, 2], Cd: ['Cd²⁺', -0.40, 2], Fe: ['Fe²⁺', -0.44, 2], Zn: ['Zn²⁺', -0.76, 2], Cr: ['Cr³⁺', -0.74, 3], Al: ['Al³⁺', -1.66, 3], Mg: ['Mg²⁺', -2.37, 2], Au: ['Au³⁺', 1.50, 3] };

// Standard enthalpies of formation (kJ/mol) and standard entropies (J/mol·K).
const thermo = {
  'CH₄(g)': [-74.8, 186.3], 'O₂(g)': [0, 205.2], 'CO₂(g)': [-393.5, 213.8], 'H₂O(l)': [-285.8, 70.0], 'H₂O(g)': [-241.8, 188.8],
  'C₃H₈(g)': [-103.8, 270.3], 'C₂H₅OH(l)': [-277.7, 160.7], 'CaCO₃(s)': [-1206.9, 92.9], 'CaO(s)': [-635.1, 38.1],
  'SO₂(g)': [-296.8, 248.2], 'SO₃(g)': [-395.7, 256.8], 'NH₃(g)': [-46.1, 192.5], 'NO(g)': [90.3, 210.8], 'NO₂(g)': [33.2, 240.1],
  'N₂O₄(g)': [9.2, 304.4], 'Fe₂O₃(s)': [-824.2, 87.4], 'CO(g)': [-110.5, 197.7], 'Fe(s)': [0, 27.3], 'C₂H₄(g)': [52.3, 219.3],
  'H₂(g)': [0, 130.7], 'C₂H₆(g)': [-84.7, 229.6], 'HCl(g)': [-92.3, 186.9], 'NH₄Cl(s)': [-314.4, 94.6], 'Al(s)': [0, 28.3],
  'Al₂O₃(s)': [-1675.7, 50.9], 'C₆H₁₂O₆(s)': [-1273.3, 212.1], 'N₂(g)': [0, 191.6], 'Cl₂(g)': [0, 223.1], 'C(s)': [0, 5.7]
};
const thermoReactions = [
  [[['CH₄(g)', 1], ['O₂(g)', 2]], [['CO₂(g)', 1], ['H₂O(l)', 2]]],
  [[['C₃H₈(g)', 1], ['O₂(g)', 5]], [['CO₂(g)', 3], ['H₂O(l)', 4]]],
  [[['C₂H₅OH(l)', 1], ['O₂(g)', 3]], [['CO₂(g)', 2], ['H₂O(l)', 3]]],
  [[['CaCO₃(s)', 1]], [['CaO(s)', 1], ['CO₂(g)', 1]]],
  [[['SO₂(g)', 2], ['O₂(g)', 1]], [['SO₃(g)', 2]]],
  [[['NH₃(g)', 4], ['O₂(g)', 5]], [['NO(g)', 4], ['H₂O(g)', 6]]],
  [[['NO(g)', 2], ['O₂(g)', 1]], [['NO₂(g)', 2]]],
  [[['NO₂(g)', 2]], [['N₂O₄(g)', 1]]],
  [[['Fe₂O₃(s)', 1], ['CO(g)', 3]], [['Fe(s)', 2], ['CO₂(g)', 3]]],
  [[['C₂H₄(g)', 1], ['H₂(g)', 1]], [['C₂H₆(g)', 1]]],
  [[['NH₃(g)', 1], ['HCl(g)', 1]], [['NH₄Cl(s)', 1]]],
  [[['Al(s)', 2], ['Fe₂O₃(s)', 1]], [['Al₂O₃(s)', 1], ['Fe(s)', 2]]],
  [[['C₆H₁₂O₆(s)', 1], ['O₂(g)', 6]], [['CO₂(g)', 6], ['H₂O(l)', 6]]],
  [[['N₂(g)', 1], ['H₂(g)', 3]], [['NH₃(g)', 2]]],
  [[['H₂(g)', 1], ['Cl₂(g)', 1]], [['HCl(g)', 2]]],
  [[['C(s)', 1], ['O₂(g)', 1]], [['CO₂(g)', 1]]],
  [[['H₂(g)', 2], ['O₂(g)', 1]], [['H₂O(g)', 2]]]
];
const side = list => list.map(([species, n]) => (n > 1 ? n : '') + species).join(' + ');
const equationOf = ([reactants, products]) => side(reactants) + ' → ' + side(products);
const total = (list, index) => list.reduce((sum, [species, n]) => sum + n * thermo[species][index], 0);

// Equilibrium templates: [equation, reactants [[species, coefficient]], products, change in moles of gas]
const equilibria = [
  ['N₂(g) + 3H₂(g) ⇌ 2NH₃(g)', [['N₂', 1], ['H₂', 3]], [['NH₃', 2]], -2],
  ['H₂(g) + I₂(g) ⇌ 2HI(g)', [['H₂', 1], ['I₂', 1]], [['HI', 2]], 0],
  ['2SO₂(g) + O₂(g) ⇌ 2SO₃(g)', [['SO₂', 2], ['O₂', 1]], [['SO₃', 2]], -1],
  ['N₂O₄(g) ⇌ 2NO₂(g)', [['N₂O₄', 1]], [['NO₂', 2]], 1],
  ['PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)', [['PCl₅', 1]], [['PCl₃', 1], ['Cl₂', 1]], 1],
  ['CO(g) + H₂O(g) ⇌ CO₂(g) + H₂(g)', [['CO', 1], ['H₂O', 1]], [['CO₂', 1], ['H₂', 1]], 0]
];
// Concentrations for each template, in the order reactants then products.
const equilibriumData = [
  [[0.50, 1.20, 0.30], [0.25, 0.80, 0.60], [1.00, 0.50, 0.20]],
  [[0.10, 0.20, 0.80], [0.25, 0.25, 1.50], [0.40, 0.10, 0.50]],
  [[0.30, 0.15, 0.90], [0.50, 0.20, 0.40], [0.12, 0.30, 0.60]],
  [[0.055, 0.090], [0.20, 0.30], [0.80, 0.40]],
  [[0.40, 0.20, 0.10], [0.15, 0.30, 0.30], [0.60, 0.12, 0.25]],
  [[0.20, 0.30, 0.40, 0.25], [0.50, 0.50, 0.75, 0.80], [0.10, 0.40, 0.30, 0.20]]
];
function kValue(template, values) {
  const [, reactants, products] = template;
  let top = 1;
  let bottom = 1;
  products.forEach(([, n], i) => { top *= values[reactants.length + i] ** n; });
  reactants.forEach(([, n], i) => { bottom *= values[i] ** n; });
  return [top / bottom, top, bottom];
}
const concentrationList = (template, values) => [...template[1], ...template[2]].map(([species], i) => `[${species}] = ${num(values[i])} M`).join(', ');

const generators = {
  1: n => [
    ...substances.filter(entry => !entry[3]).map(([name, formula, parts], index) => {
      const mass = [23.0, 9.01, 11.0, 8.02, 45.0, 17.0, 23.0, 32.0, 46.0, 15.0, 17.0, 49.0][index];
      const mm = molar(parts);
      const atoms = parts.reduce((sum, [, count]) => sum + count, 0);
      const molecules = mass / mm * NA;
      return calc(n, 'calc-particles', formula + '-' + mass, `How many molecules are in a ${num(mass)} g sample of ${name}, ${formula} (molar mass ${num(mm, 4)} g/mol)?`,
        [u(molecules, 'molecules'), u(mass * NA, 'molecules'), u(mm / mass * NA, 'molecules'), u(molecules * atoms, 'molecules')],
        `moles = ${num(mass)} g ÷ ${num(mm, 4)} g/mol = ${num(mass / mm)} mol; × 6.022 × 10²³ = ${num(molecules)} molecules.`);
    }),
    ...substances.map(([name, formula, parts], index) => {
      const mass = [5.00, 12.5, 40.0, 2.75, 90.0, 8.52, 1.50, 64.1, 23.0, 3.00, 6.80, 19.6, 25.0, 80.0, 10.2, 29.2, 47.6, 20.2, 31.9, 53.0][index];
      const mm = molar(parts);
      return calc(n, 'calc-moles', formula + '-' + mass, `How many moles are in ${num(mass)} g of ${name}, ${formula}? (molar mass ${num(mm, 4)} g/mol)`,
        [u(mass / mm, 'mol'), u(mass * mm, 'mol'), u(mm / mass, 'mol'), u(mass / mm * NA, 'mol')],
        `n = mass ÷ molar mass = ${num(mass)} ÷ ${num(mm, 4)} = ${num(mass / mm)} mol.`);
    }),
    ...substances.map(([name, formula, parts], index) => {
      const [element, count] = parts[parts.length - 1];
      const mm = molar(parts);
      const part = atomic[element] * count;
      const percent = part / mm * 100;
      const atoms = parts.reduce((sum, [, c]) => sum + c, 0);
      return calc(n, 'calc-percent-composition', formula + '-' + element, `What is the percent by mass of ${element} in ${name}, ${formula}?`,
        options(percent, [100 - percent, count / atoms * 100, atomic[element] / mm * 100, percent / 2], v => num(v) + '%'),
        `Mass % ${element} = (${count} × ${atomic[element]}) ÷ ${num(mm, 4)} × 100 = ${num(percent)}%.`);
    }),
    ...[[34.969, 75.78, 36.966], [62.930, 69.15, 64.928], [10.013, 19.9, 11.009], [6.015, 7.59, 7.016], [78.918, 50.69, 80.916], [68.926, 60.11, 70.925], [106.905, 51.84, 108.905], [120.904, 57.21, 122.904], [184.953, 37.4, 186.956], [38.964, 93.26, 40.962], [14.003, 99.63, 15.000], [92.906, 72.17, 94.906]].map(([m1, a1, m2]) => {
      const average = m1 * a1 / 100 + m2 * (1 - a1 / 100);
      const swapped = m1 * (1 - a1 / 100) + m2 * a1 / 100;
      const dominant = a1 > 50 ? m1 : m2;
      return calc(n, 'calc-average-mass', m1 + '-' + a1, `An element has two isotopes: ${m1} amu (${a1}% abundance) and ${m2} amu (${num(100 - a1, 4)}% abundance). What is its average atomic mass?`,
        [fixed(average, 2) + ' amu', fixed((m1 + m2) / 2, 2) + ' amu', fixed(swapped, 2) + ' amu', Math.round(dominant) + '.00 amu'],
        `(${m1} × ${a1 / 100}) + (${m2} × ${num(1 - a1 / 100, 4)}) = ${fixed(average, 2)} amu.`);
    }),
    ...[['P', 15, 31, -3], ['S', 16, 32, -2], ['Ca', 20, 40, 2], ['Fe', 26, 56, 3], ['Fe', 26, 56, 2], ['Al', 13, 27, 3], ['O', 8, 18, -2], ['Cl', 17, 37, -1], ['N', 7, 15, -3], ['Mg', 12, 25, 2], ['K', 19, 39, 1], ['Br', 35, 81, -1], ['Zn', 30, 66, 2], ['Cu', 29, 63, 1]].map(([element, z, a, q]) => {
      const charge = (Math.abs(q) > 1 ? sup(Math.abs(q)) : '') + (q > 0 ? '⁺' : '⁻');
      const symbol = sup(a) + element + charge;
      const text = (p, nn, e) => `${p} protons, ${nn} neutrons, ${e} electrons`;
      return calc(n, 'calc-subatomic', element + a + q, `How many protons, neutrons, and electrons are in the ion ${symbol}?`,
        [text(z, a - z, z - q), text(z, a - z, z + q), text(z, a, z - q), text(a - z, z, z - q)],
        `Protons = atomic number ${z}; neutrons = ${a} − ${z} = ${a - z}; electrons = ${z} ${q < 0 ? '+ ' + -q : '− ' + q} = ${z - q}.`);
    }),
    ...substances.slice(0, 14).map(([name, formula, parts], index) => {
      const moles = [0.250, 1.50, 0.040, 2.00, 0.125, 0.600, 0.0500, 3.20, 0.800, 0.450, 1.25, 0.0200, 0.750, 0.300][index];
      const [element, count] = parts.find(([el]) => el === 'O' || el === 'H') ?? parts[0];
      const atomCount = moles * count * NA;
      const atoms = parts.reduce((sum, [, c]) => sum + c, 0);
      return calc(n, 'calc-atoms', formula + '-' + moles, `How many ${element} atoms are in ${num(moles)} mol of ${formula}?`,
        [u(atomCount, 'atoms'), u(moles * NA, 'atoms'), u(moles * count, 'atoms'), u(moles * atoms * NA, 'atoms')],
        `${num(moles)} mol × ${count} ${element} atoms per molecule × 6.022 × 10²³ = ${num(atomCount)} atoms.`);
    }),
    ...[
      [[['C', 1], ['H', 2], ['O', 1]], ['C₂HO', 'CHO', 'CH₃O']],
      [[['C', 1], ['H', 2]], ['CH', 'CH₃', 'C₂H₅']],
      [[['N', 1], ['O', 2]], ['NO', 'N₂O', 'N₂O₅']],
      [[['Fe', 2], ['O', 3]], ['FeO', 'Fe₃O₄', 'FeO₂']],
      [[['C', 2], ['H', 5]], ['CH₂', 'CH₃', 'C₃H₈']],
      [[['P', 2], ['O', 5]], ['PO₂', 'P₂O₃', 'PO']],
      [[['C', 1], ['H', 4], ['O', 1]], ['CH₂O', 'CH₃O', 'C₂H₃O']],
      [[['N', 2], ['O', 1]], ['NO', 'NO₂', 'N₂O₃']],
      [[['Ca', 1], ['Cl', 2]], ['CaCl', 'Ca₂Cl', 'CaCl₃']],
      [[['S', 1], ['O', 3]], ['SO₂', 'S₂O₃', 'SO₄']],
      [[['Mg', 1], ['O', 1]], ['Mg₂O', 'MgO₂', 'Mg₂O₃']],
      [[['K', 1], ['N', 1], ['O', 3]], ['KNO₂', 'K₂NO₃', 'KN₂O₃']]
    ].map(([parts, wrong]) => {
      const mm = molar(parts);
      const breakdown = parts.map(([el, count]) => `${el} ${(atomic[el] * count / mm * 100).toFixed(1)}%`).join(', ');
      return calc(n, 'calc-empirical-formula', formulaOf(parts), `A compound has this composition by mass: ${breakdown}. What is its empirical formula?`,
        [formulaOf(parts), ...wrong],
        `Divide each mass by its molar mass and then by the smallest number of moles to get the ratio ${formulaOf(parts)}.`);
    })
  ],
  2: n => [
    ...vsepr.flatMap(([formula, center, domains, lone, shape, hybrid, angle], index) => [
      calc(n, 'calc-shape', formula, `What is the molecular geometry of ${formula}? (The central ${center} atom has ${domains} electron domains, ${lone} of them lone pairs.)`,
        [shape, ...others(shapes, shape, index)], `${domains} electron domains with ${lone} lone pair${lone === 1 ? '' : 's'} give a ${shape} molecular geometry.`),
      calc(n, 'calc-hybridization', formula, `What is the hybridization of the central ${center} atom in ${formula}?`,
        [hybrid, ...others(hybrids, hybrid, index)], `${domains} electron domains around ${center} correspond to ${hybrid} hybridization.`),
      angle && calc(n, 'calc-bond-angle', formula, `What is the approximate bond angle around the central atom in ${formula}?`,
        [angle, ...others(angles, angle, index)], `${domains} electron domains with ${lone} lone pair${lone === 1 ? '' : 's'} give a bond angle of ${angle}.`)
    ]),
    ...[['ethene', 'C₂H₄', 5, 1], ['ethyne', 'C₂H₂', 3, 2], ['carbon dioxide', 'CO₂', 2, 2], ['hydrogen cyanide', 'HCN', 2, 2], ['nitrogen', 'N₂', 1, 2], ['formaldehyde', 'CH₂O', 3, 1], ['acetic acid', 'CH₃COOH', 7, 1], ['benzene', 'C₆H₆', 12, 3], ['propene', 'C₃H₆', 8, 1], ['acetone', '(CH₃)₂CO', 9, 1], ['acetonitrile', 'CH₃CN', 5, 2], ['ethanol', 'C₂H₅OH', 8, 0], ['propyne', 'C₃H₄', 6, 2], ['methanol', 'CH₃OH', 5, 0], ['urea', 'CO(NH₂)₂', 7, 1], ['acrylonitrile', 'CH₂CHCN', 6, 3]].map(([name, formula, sigma, pi]) => {
      const text = (s, p) => `${s} σ and ${p} π bonds`;
      return calc(n, 'calc-sigma-pi', formula, `How many sigma (σ) and pi (π) bonds are in a molecule of ${name}, ${formula}?`,
        [text(sigma, pi), text(sigma + pi, pi === 0 ? 1 : 0), text(sigma - 1 || sigma + 2, pi + 1), pi === 0 ? text(sigma + 1, 0) : text(sigma + 2 * pi, pi)],
        `Every single bond is one σ bond; each double bond adds one π bond and each triple bond adds two. ${name[0].toUpperCase() + name.slice(1)} has ${sigma} σ and ${pi} π bonds.`);
    }),
    ...[['oxygen', 6, 3, 1], ['oxygen', 6, 2, 2], ['oxygen', 6, 1, 3], ['nitrogen', 5, 1, 3], ['nitrogen', 5, 0, 4], ['nitrogen', 5, 2, 2], ['carbon', 4, 0, 4], ['carbon', 4, 1, 3], ['sulfur', 6, 2, 2], ['sulfur', 6, 0, 6], ['sulfur', 6, 1, 3], ['sulfur', 6, 0, 4], ['chlorine', 7, 3, 1], ['phosphorus', 5, 0, 5], ['phosphorus', 5, 0, 4], ['boron', 3, 0, 4]].map(([atom, valence, pairs, bonds]) => {
      const charge = valence - 2 * pairs - bonds;
      const show = value => value > 0 ? '+' + value : value < 0 ? '−' + -value : '0';
      return calc(n, 'calc-formal-charge', atom + '-' + pairs + '-' + bonds, `In a Lewis structure, a${atom === 'oxygen' ? 'n' : ''} ${atom} atom has ${pairs} lone pair${pairs === 1 ? '' : 's'} and forms ${bonds} bond${bonds === 1 ? '' : 's'} (counting each shared pair as one bond). What is its formal charge?`,
        options(charge, [valence - pairs - bonds, charge + 1, charge - 1, -charge, valence - 2 * pairs - 2 * bonds], show),
        `Formal charge = valence electrons − nonbonding electrons − bonds = ${valence} − ${2 * pairs} − ${bonds} = ${show(charge)}.`);
    }),
    ...[['C', 2.55, 'H', 2.20], ['H', 2.20, 'Cl', 3.16], ['Na', 0.93, 'Cl', 3.16], ['O', 3.44, 'H', 2.20], ['C', 2.55, 'O', 3.44], ['N', 3.04, 'H', 2.20], ['Mg', 1.31, 'O', 3.44], ['C', 2.55, 'Cl', 3.16], ['K', 0.82, 'F', 3.98], ['S', 2.58, 'H', 2.20], ['Si', 1.90, 'O', 3.44], ['Ca', 1.00, 'Cl', 3.16], ['P', 2.19, 'H', 2.20], ['Li', 0.98, 'Br', 2.96], ['C', 2.55, 'F', 3.98], ['I', 2.66, 'Cl', 3.16], ['C', 2.55, 'S', 2.58]].map(([a, ea, b, eb]) => {
      const diff = Math.abs(ea - eb);
      const kinds = ['nonpolar covalent', 'polar covalent', 'ionic'];
      const kind = diff < 0.4 ? kinds[0] : diff <= 1.8 ? kinds[1] : kinds[2];
      const [w1, w2] = kinds.filter(item => item !== kind);
      return calc(n, 'calc-bond-type', a + '-' + b, `The electronegativity of ${a} is ${ea.toFixed(2)} and that of ${b} is ${eb.toFixed(2)}. What is the electronegativity difference, and what type of bond forms between them? (Use < 0.4 nonpolar, 0.4–1.8 polar, > 1.8 ionic.)`,
        [`${diff.toFixed(2)}, ${kind}`, `${diff.toFixed(2)}, ${w1}`, `${diff.toFixed(2)}, ${w2}`, `${(ea + eb).toFixed(2)}, ${kind}`],
        `|${ea.toFixed(2)} − ${eb.toFixed(2)}| = ${diff.toFixed(2)}, so the bond is ${kind}.`);
    }),
    ...[['MgO', 'NaF', 'NaCl', 'KBr'], ['CaO', 'KCl', 'NaBr', 'CsI'], ['Al₂O₃', 'MgCl₂', 'NaCl', 'KI'], ['LiF', 'NaF', 'KF', 'RbF'], ['NaF', 'NaCl', 'NaBr', 'NaI'], ['MgO', 'MgS', 'CaS', 'BaS'], ['BeO', 'MgO', 'CaO', 'SrO'], ['MgF₂', 'NaF', 'KCl', 'CsBr'], ['CaF₂', 'KF', 'KCl', 'KBr'], ['Na₂O', 'NaCl', 'KCl', 'KBr']].map(set =>
      calc(n, 'calc-lattice-energy', set.join('-'), `Which compound has the greatest lattice energy: ${[...set].sort().join(', ')}?`,
        [...set], `By Coulomb’s law, ${set[0]} has the greatest attraction because its ions have the largest charges and/or smallest radii.`)),
    ...[[['Mg', 2, false], ['Cl', 1, false]], [['Al', 3, false], ['O', 2, false]], [['Ca', 2, false], ['N', 3, false]], [['Na', 1, false], ['S', 2, false]], [['Ba', 2, false], ['OH', 1, true]], [['Al', 3, false], ['SO₄', 2, true]], [['Ca', 2, false], ['PO₄', 3, true]], [['NH₄', 1, true], ['SO₄', 2, true]], [['Fe', 3, false], ['O', 2, false]], [['K', 1, false], ['N', 3, false]], [['Mg', 2, false], ['N', 3, false]], [['Li', 1, false], ['O', 2, false]], [['Al', 3, false], ['Cl', 1, false]], [['Fe', 3, false], ['OH', 1, true]], [['Na', 1, false], ['CO₃', 2, true]], [['Ca', 2, false], ['NO₃', 1, true]], [['Mg', 2, false], ['PO₄', 3, true]]].map(([[cation, cq, cPoly], [anion, aq, aPoly]]) => {
      const gcd = (a, b) => b ? gcd(b, a % b) : a;
      const piece = (symbol, count, poly) => count === 1 ? symbol : poly ? `(${symbol})${sub(count)}` : symbol + sub(count);
      const build = (cCount, aCount) => piece(cation, cCount, cPoly) + piece(anion, aCount, aPoly);
      const g = gcd(cq, aq);
      const correct = build(aq / g, cq / g);
      const chargeLabel = (symbol, q, sign) => symbol + (q > 1 ? sup(q) : '') + sign;
      return calc(n, 'calc-ionic-formula', cation + '-' + anion, `What is the formula of the ionic compound formed from ${chargeLabel(cation, cq, '⁺')} and ${chargeLabel(anion, aq, '⁻')}?`,
        [correct, build(cq, aq), build(1, 1), build(aq / g * 2, cq / g * 2)],
        `The total positive and negative charges must cancel: ${aq / g} × (+${cq}) = ${cq / g} × (−${aq}), giving ${correct}.`);
    })
  ],
  3: n => [
    ...[[1.00, 2.50, 25, 1.50, 350], [2.00, 4.00, 27, 1.00, 127], [0.95, 10.0, 20, 1.20, 80], [1.50, 3.20, 0, 3.00, 273], [3.00, 1.80, 100, 1.00, 25], [0.80, 6.00, 15, 2.40, 150], [1.20, 5.50, 30, 0.60, -10], [2.50, 2.00, 50, 1.25, 200], [1.00, 22.4, 0, 2.00, 50], [4.00, 0.75, 25, 1.00, 75], [0.50, 12.0, 40, 1.50, 400], [1.80, 3.30, 10, 0.90, 90]].map(([p1, v1, t1, p2, t2]) => {
      const v2 = p1 * v1 * (t2 + 273) / (p2 * (t1 + 273));
      return calc(n, 'calc-combined-gas', [p1, v1, t1, p2, t2].join('-'), `A gas occupies ${num(v1)} L at ${num(p1)} atm and ${t1} °C. What is its volume at ${num(p2)} atm and ${t2} °C?`,
        [u(v2, 'L'), u(t1 === 0 ? v1 * p1 * 2 / p2 : p1 * v1 * t2 / (p2 * t1), 'L'), u(p1 * v1 / p2, 'L'), u(p2 * v1 * (t2 + 273) / (p1 * (t1 + 273)), 'L')],
        `V₂ = P₁V₁T₂ ÷ (P₂T₁) = (${num(p1)})(${num(v1)})(${t2 + 273} K) ÷ [(${num(p2)})(${t1 + 273} K)] = ${num(v2)} L. Temperatures must be in kelvins.`);
    }),
    ...[[1.00, 5.00, 298], [2.50, 1.20, 350], [0.750, 10.0, 273], [3.00, 2.00, 400], [1.20, 0.500, 310], [0.950, 25.0, 295], [4.50, 3.50, 500], [1.50, 8.00, 320], [0.500, 15.0, 260], [2.00, 0.750, 285], [6.00, 1.00, 600], [1.10, 4.40, 330], [0.800, 2.25, 250], [3.20, 6.50, 450]].map(([p, v, t], index) => {
      const moles = p * v / (RL * t);
      if (index % 2 === 0) return calc(n, 'calc-ideal-gas', 'n-' + [p, v, t].join('-'), `How many moles of gas are in a ${num(v)} L container at ${num(p)} atm and ${t} K? (R = 0.08206 L·atm/mol·K)`,
        [u(moles, 'mol'), u(p * v * RL * t, 'mol'), u(RL * t / (p * v), 'mol'), u(p * v / (RL * (t - 273 || 1)), 'mol')],
        `n = PV ÷ RT = (${p})(${v}) ÷ (0.08206 × ${t}) = ${num(moles)} mol.`);
      return calc(n, 'calc-ideal-gas', 'p-' + [p, v, t].join('-'), `${num(moles)} mol of gas is held in a ${num(v)} L container at ${t} K. What is the pressure? (R = 0.08206 L·atm/mol·K)`,
        [u(p, 'atm'), u(moles * RL * t * v, 'atm'), u(v / (moles * RL * t), 'atm'), u(moles * R * t / v, 'atm')],
        `P = nRT ÷ V = (${num(moles)})(0.08206)(${t}) ÷ ${v} = ${num(p)} atm.`);
    }),
    ...[[1.0, 3.0, 2.00], [0.50, 1.50, 4.00], [2.0, 2.0, 1.50], [0.25, 0.75, 1.00], [1.2, 0.8, 3.00], [3.0, 1.0, 2.40], [0.40, 1.60, 5.00], [1.5, 4.5, 0.90], [2.4, 0.6, 1.20], [0.30, 0.90, 6.00], [1.0, 4.0, 2.50], [0.60, 1.40, 3.00]].map(([a, b, total]) => {
      const partial = a / (a + b) * total;
      return calc(n, 'calc-partial-pressure', [a, b, total].join('-'), `A mixture contains ${num(a)} mol of N₂ and ${num(b)} mol of O₂ at a total pressure of ${num(total)} atm. What is the partial pressure of N₂?`,
        options(partial, [b / (a + b) * total, a * total, total / 2, a / b * total, total], v => u(v, 'atm')),
        `X(N₂) = ${a} ÷ ${num(a + b)} = ${num(a / (a + b))}; P(N₂) = X × P(total) = ${num(partial)} atm.`);
    }),
    ...[[0.20, 0.30, 5.00, 303], [0.50, 0.25, 10.0, 298], [1.00, 1.50, 20.0, 350], [0.10, 0.40, 2.50, 273], [0.75, 0.25, 8.00, 400], [0.60, 0.90, 12.0, 320], [0.050, 0.150, 1.00, 290], [1.20, 0.80, 25.0, 310], [0.30, 0.30, 4.00, 500], [2.00, 1.00, 50.0, 280]].map(([a, b, v, t]) => {
      const pressure = (a + b) * RL * t / v;
      return calc(n, 'calc-total-pressure', [a, b, v, t].join('-'), `A ${num(v)} L cylinder contains ${num(a)} mol of He and ${num(b)} mol of Ar at ${t} K. What is the total pressure? (R = 0.08206 L·atm/mol·K)`,
        [u(pressure, 'atm'), u(a * RL * t / v, 'atm'), u((a + b) * RL * (t - 273 || 1) / v, 'atm'), u((a + b) * R * t / v, 'atm')],
        `P = (n₁ + n₂)RT ÷ V = (${num(a + b)})(0.08206)(${t}) ÷ ${v} = ${num(pressure)} atm.`);
    }),
    ...substances.slice(12).concat(substances.slice(4, 6), substances.slice(11, 12)).map(([name, formula, parts], index) => {
      const grams = [5.00, 15.9, 10.2, 2.92, 4.76, 8.08, 12.0, 26.5, 9.00, 1.70, 4.90][index];
      const mL = [250, 500, 100, 50.0, 200, 400, 750, 1000, 150, 250, 500][index];
      if (grams === undefined) return null;
      const mm = molar(parts);
      const molarity = grams / mm / (mL / 1000);
      return calc(n, 'calc-molarity', formula + '-' + grams, `${num(grams)} g of ${name}, ${formula} (molar mass ${num(mm, 4)} g/mol), is dissolved to make ${num(mL)} mL of solution. What is the molarity?`,
        [u(molarity, 'M'), u(grams / mm / mL, 'M'), u(grams / (mL / 1000), 'M'), u(grams / mm * (mL / 1000), 'M')],
        `n = ${num(grams)} ÷ ${num(mm, 4)} = ${num(grams / mm)} mol; M = n ÷ ${liters(mL)} L = ${num(molarity)} M.`);
    }),
    ...[[6.00, 25.0, 250], [2.00, 10.0, 100], [12.0, 5.00, 500], [1.50, 40.0, 120], [0.500, 20.0, 50.0], [3.00, 15.0, 225], [18.0, 2.50, 300], [0.800, 75.0, 250], [4.00, 30.0, 200], [1.00, 12.5, 500], [0.250, 100, 400], [10.0, 8.00, 160], [5.00, 50.0, 1000], [2.50, 60.0, 750]].map(([m1, v1, v2], index) => {
      const m2 = m1 * v1 / v2;
      if (index % 2 === 0) return calc(n, 'calc-dilution', [m1, v1, v2].join('-'), `${num(v1)} mL of ${num(m1)} M HCl is diluted with water to a total volume of ${v2} mL. What is the new concentration?`,
        [u(m2, 'M'), u(m1 * v2 / v1, 'M'), u(m1 * v1 / (v2 + v1), 'M'), u(m1 - m1 * v1 / v2, 'M')],
        `M₂ = M₁V₁ ÷ V₂ = (${m1})(${num(v1)}) ÷ ${v2} = ${num(m2)} M.`);
      return calc(n, 'calc-dilution', 'v-' + [m1, v1, v2].join('-'), `What volume of ${num(m1)} M stock solution is needed to make ${v2} mL of ${num(m2)} M solution?`,
        [u(v1, 'mL'), u(m1 * v2 / m2, 'mL'), u(v2 - v1, 'mL'), u(m2 * m1 / v2, 'mL')],
        `V₁ = M₂V₂ ÷ M₁ = (${num(m2)})(${v2}) ÷ ${m1} = ${num(v1)} mL.`);
    }),
    ...[[0.450, 150, 1.00], [0.300, 500, 1.00], [0.725, 2500, 1.00], [0.120, 80.0, 1.00], [0.880, 11000, 1.00], [0.560, 4000, 1.00], [0.210, 15600, 1.00], [0.640, 320, 2.00], [0.350, 1750, 2.00], [0.900, 6000, 0.500], [0.075, 250, 1.00], [1.10, 22000, 1.00]].map(([absorbance, epsilon, path]) => {
      const conc = absorbance / (epsilon * path);
      return calc(n, 'calc-beers-law', [absorbance, epsilon, path].join('-'), `A solution has an absorbance of ${num(absorbance)} in a ${path} cm cuvette. The molar absorptivity is ${epsilon} M⁻¹cm⁻¹. Using A = εbc, what is its concentration?`,
        [u(conc, 'M'), u(absorbance * epsilon * path, 'M'), u(epsilon / absorbance, 'M'), u(conc * 10, 'M')],
        `c = A ÷ (εb) = ${num(absorbance)} ÷ (${epsilon} × ${path}) = ${num(conc)} M.`);
    }),
    ...[400, 450, 500, 550, 589, 600, 650, 700, 250, 300, 121.6, 656].map((nm, index) => {
      const lambda = nm * 1e-9;
      const energy = PLANCK * LIGHT / lambda;
      if (index % 3 === 2) return calc(n, 'calc-photon', 'f-' + nm, `What is the frequency of light with a wavelength of ${nm} nm? (c = 2.998 × 10⁸ m/s)`,
        [u(LIGHT / lambda, 's⁻¹'), u(LIGHT * lambda, 's⁻¹'), u(LIGHT / nm, 's⁻¹'), u(lambda / LIGHT, 's⁻¹')],
        `ν = c ÷ λ = 2.998 × 10⁸ ÷ (${nm} × 10⁻⁹ m) = ${num(LIGHT / lambda)} s⁻¹.`);
      return calc(n, 'calc-photon', 'e-' + nm, `What is the energy of one photon with a wavelength of ${nm} nm? (h = 6.626 × 10⁻³⁴ J·s, c = 2.998 × 10⁸ m/s)`,
        [u(energy, 'J'), u(PLANCK / lambda, 'J'), u(PLANCK * LIGHT * lambda, 'J'), u(PLANCK * LIGHT / nm, 'J')],
        `E = hc ÷ λ = (6.626 × 10⁻³⁴)(2.998 × 10⁸) ÷ (${nm} × 10⁻⁹) = ${num(energy)} J.`);
    }),
    ...[[1.25, 298, 1.00], [1.96, 273, 1.00], [0.714, 273, 1.00], [2.86, 300, 1.00], [3.17, 350, 1.20], [1.65, 320, 1.50], [0.900, 400, 1.00], [5.25, 290, 2.00], [1.43, 273, 1.00], [2.50, 310, 0.950]].map(([density, t, p]) => {
      const mm = density * RL * t / p;
      return calc(n, 'calc-gas-molar-mass', [density, t, p].join('-'), `A gas has a density of ${num(density)} g/L at ${t} K and ${num(p)} atm. What is its molar mass? (R = 0.08206 L·atm/mol·K)`,
        [u(mm, 'g/mol'), u(density * p / (RL * t), 'g/mol'), u(density * R * t / p, 'g/mol'), u(RL * t / (density * p), 'g/mol')],
        `M = dRT ÷ P = (${num(density)})(0.08206)(${t}) ÷ ${p} = ${num(mm)} g/mol.`);
    }),
    ...substances.slice(12).map(([name, formula, parts], index) => {
      const molarity = [0.100, 0.250, 0.0500, 1.50, 0.200, 0.400, 0.750, 0.0800][index];
      const mL = [250, 100, 500, 50.0, 1000, 200, 150, 250][index];
      const mm = molar(parts);
      const grams = molarity * mL / 1000 * mm;
      return calc(n, 'calc-solution-mass', formula + '-' + molarity, `What mass of ${name}, ${formula} (molar mass ${num(mm, 4)} g/mol), is needed to make ${num(mL)} mL of ${num(molarity)} M solution?`,
        [u(grams, 'g'), u(molarity * mL * mm, 'g'), u(molarity * mL / 1000, 'g'), u(molarity / (mL / 1000) * mm, 'g')],
        `n = ${num(molarity)} M × ${liters(mL)} L = ${num(molarity * mL / 1000)} mol; mass = n × ${num(mm, 4)} = ${num(grams)} g.`);
    })
  ],
  4: n => [
    ...[
      ['2H₂ + O₂ → 2H₂O', 'H₂', 2.016, 2, 'H₂O', 18.02, 2, [4.00, 10.0]],
      ['CaCO₃ → CaO + CO₂', 'CaCO₃', 100.09, 1, 'CO₂', 44.01, 1, [25.0, 150]],
      ['N₂ + 3H₂ → 2NH₃', 'H₂', 2.016, 3, 'NH₃', 17.03, 2, [6.05, 12.0]],
      ['2Na + Cl₂ → 2NaCl', 'Na', 22.99, 2, 'NaCl', 58.44, 2, [11.5, 4.60]],
      ['CH₄ + 2O₂ → CO₂ + 2H₂O', 'CH₄', 16.04, 1, 'H₂O', 18.02, 2, [8.02, 32.0]],
      ['4Fe + 3O₂ → 2Fe₂O₃', 'Fe', 55.85, 4, 'Fe₂O₃', 159.70, 2, [11.2, 50.0]],
      ['2KClO₃ → 2KCl + 3O₂', 'KClO₃', 122.55, 2, 'O₂', 32.00, 3, [24.5, 6.13]],
      ['Zn + 2HCl → ZnCl₂ + H₂', 'Zn', 65.38, 1, 'H₂', 2.016, 1, [13.1, 6.54]],
      ['C₃H₈ + 5O₂ → 3CO₂ + 4H₂O', 'C₃H₈', 44.10, 1, 'CO₂', 44.01, 3, [22.0, 8.82]],
      ['2Al + 3Cl₂ → 2AlCl₃', 'Al', 26.98, 2, 'AlCl₃', 133.33, 2, [5.40, 2.70]],
      ['CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂', 'CaCO₃', 100.09, 1, 'CaCl₂', 110.98, 1, [10.0, 3.50]],
      ['2Mg + O₂ → 2MgO', 'Mg', 24.31, 2, 'MgO', 40.30, 2, [4.86, 1.20]]
    ].flatMap(([equation, reactant, mr, cr, product, mp, cp, masses]) => masses.map(mass => {
      const grams = mass / mr * (cp / cr) * mp;
      return calc(n, 'calc-stoichiometry', reactant + '-' + product + '-' + mass, `For the reaction ${equation}, what mass of ${product} forms from ${num(mass)} g of ${reactant} with the other reactant in excess?`,
        options(grams, [mass / mr * (cr / cp) * mp, mass * cp / cr, mass * mr / mp * (cp / cr), mass / mr * mp, mass / mr * (cp / cr), grams * 2], v => u(v, 'g')),
        `${num(mass)} g ÷ ${mr} g/mol = ${num(mass / mr)} mol ${reactant}; × (${cp}/${cr}) = ${num(mass / mr * cp / cr)} mol ${product}; × ${mp} g/mol = ${num(grams)} g.`);
    })),
    ...[
      ['N₂ + 3H₂ → 2NH₃', 'N₂', 1, 'H₂', 3, 'NH₃', 2, [[2.0, 4.5], [1.0, 4.0], [0.50, 1.2], [3.0, 6.0]]],
      ['2H₂ + O₂ → 2H₂O', 'H₂', 2, 'O₂', 1, 'H₂O', 2, [[3.0, 2.0], [4.0, 1.5], [1.0, 1.0]]],
      ['2Al + 3Cl₂ → 2AlCl₃', 'Al', 2, 'Cl₂', 3, 'AlCl₃', 2, [[2.0, 2.4], [0.80, 1.5], [1.2, 2.1]]],
      ['2Na + Cl₂ → 2NaCl', 'Na', 2, 'Cl₂', 1, 'NaCl', 2, [[3.0, 1.0], [1.0, 2.0]]],
      ['CH₄ + 2O₂ → CO₂ + 2H₂O', 'CH₄', 1, 'O₂', 2, 'CO₂', 1, [[1.5, 2.0], [0.50, 2.4]]]
    ].flatMap(([equation, a, ca, b, cb, product, cp, sets]) => sets.map(([na, nb]) => {
      const limitA = na / ca < nb / cb;
      const [lim, other] = limitA ? [[a, na, ca], [b, nb, cb]] : [[b, nb, cb], [a, na, ca]];
      const made = lim[1] / lim[2] * cp;
      const wrongMade = other[1] / other[2] * cp;
      const text = (species, amount) => `${species} is limiting; ${num(amount)} mol ${product} forms`;
      return calc(n, 'calc-limiting-reactant', equation + '-' + na + '-' + nb, `For ${equation}, ${num(na)} mol of ${a} reacts with ${num(nb)} mol of ${b}. Which reactant is limiting, and how many moles of ${product} form?`,
        [text(lim[0], made), ...[text(other[0], wrongMade), text(lim[0], lim[1]), text(other[0], made), text(lim[0], made * 2), text(lim[0], made / 2), text(other[0], other[1])].filter((t, i, all) => t !== text(lim[0], made) && all.indexOf(t) === i).slice(0, 3)],
        `${a}: ${num(na)} ÷ ${ca} = ${num(na / ca)}; ${b}: ${num(nb)} ÷ ${cb} = ${num(nb / cb)}. The smaller value marks ${lim[0]} as limiting, giving ${num(made)} mol ${product}.`);
    })),
    ...[[25.0, 21.3], [12.4, 10.1], [50.0, 46.5], [8.20, 5.74], [100, 72.0], [3.65, 3.10], [44.0, 38.7], [16.8, 9.24], [5.00, 4.85], [75.0, 63.0], [2.40, 1.90], [60.0, 54.6]].map(([theoretical, actual]) =>
      calc(n, 'calc-percent-yield', theoretical + '-' + actual, `The theoretical yield of a reaction is ${num(theoretical)} g, and the student recovers ${num(actual)} g of product. What is the percent yield?`,
        [u(actual / theoretical * 100, '%').replace(' %', '%'), u(theoretical / actual * 100, '%').replace(' %', '%'), u((theoretical - actual) / theoretical * 100, '%').replace(' %', '%'), u(actual / theoretical, '%').replace(' %', '%')],
        `Percent yield = actual ÷ theoretical × 100 = ${num(actual)} ÷ ${num(theoretical)} × 100 = ${num(actual / theoretical * 100)}%.`)),
    ...[[0.100, 22.45, 25.00, 1], [0.150, 18.20, 20.00, 1], [0.250, 30.00, 15.00, 2], [0.0985, 27.60, 25.00, 1], [0.200, 12.50, 10.00, 2], [0.500, 24.80, 50.00, 1], [0.120, 35.40, 20.00, 2], [1.00, 9.85, 10.00, 1], [0.0750, 40.00, 30.00, 2], [0.300, 16.70, 25.00, 1], [0.180, 21.10, 15.00, 2], [0.0500, 45.20, 20.00, 1]].map(([mb, vb, va, protons]) => {
      const acid = protons === 2 ? 'H₂SO₄' : 'HCl';
      const ma = mb * vb / (protons * va);
      return calc(n, 'calc-titration', [mb, vb, va, protons].join('-'), `${num(va)} mL of ${acid} is titrated to the equivalence point with ${num(vb)} mL of ${num(mb)} M NaOH. What is the molarity of the ${acid}?`,
        [u(ma, 'M'), u(protons === 2 ? mb * vb / va : mb * vb / va * 2, 'M'), u(mb * va / (protons * vb), 'M'), u(mb * vb * protons / va * (protons === 2 ? 1 : 0.25), 'M')],
        `mol NaOH = ${num(mb)} × ${liters(vb)} L = ${num(mb * vb / 1000)} mol; mol ${acid} = that ÷ ${protons}; M = ${num(ma)} M.`);
    }),
    ...[['Mn', 'KMnO₄', 7], ['Cr', 'Cr₂O₇²⁻', 6], ['S', 'SO₄²⁻', 6], ['N', 'NO₃⁻', 5], ['N', 'NH₄⁺', -3], ['C', 'CO₃²⁻', 4], ['S', 'H₂S', -2], ['Cl', 'ClO⁻', 1], ['Cl', 'ClO₃⁻', 5], ['P', 'PO₄³⁻', 5], ['Fe', 'Fe₂O₃', 3], ['O', 'H₂O₂', -1], ['N', 'N₂O', 1], ['C', 'CH₄', -4], ['S', 'S₂O₃²⁻', 2], ['Mn', 'MnO₂', 4], ['N', 'NO₂', 4], ['Cr', 'CrO₄²⁻', 6]].map(([element, species, value], index) => {
      const show = v => v > 0 ? '+' + v : v < 0 ? '−' + -v : '0';
      const options = [value, -value, value + 1, value - 2, value + 2].filter((v, i, all) => all.indexOf(v) === i && v !== 0);
      return calc(n, 'calc-oxidation-number', element + '-' + species, `What is the oxidation number of ${element} in ${species}?`,
        [show(value), ...options.filter(v => v !== value).slice(0, 3).map(show)],
        `Oxygen is usually −2 and hydrogen +1; the oxidation numbers must add up to the overall charge, so ${element} is ${show(value)}.`);
    }),
    ...[[25.0, 0.100, 'AgCl', 143.32, 'AgNO₃', 'NaCl', 'Ag⁺'], [50.0, 0.200, 'AgCl', 143.32, 'AgNO₃', 'KCl', 'Ag⁺'], [15.0, 0.500, 'AgCl', 143.32, 'AgNO₃', 'NaCl', 'Ag⁺'], [40.0, 0.0750, 'AgCl', 143.32, 'AgNO₃', 'HCl', 'Ag⁺'], [20.0, 0.150, 'BaSO₄', 233.39, 'BaCl₂', 'Na₂SO₄', 'Ba²⁺'], [35.0, 0.100, 'BaSO₄', 233.39, 'Ba(NO₃)₂', 'K₂SO₄', 'Ba²⁺'], [10.0, 0.800, 'BaSO₄', 233.39, 'BaCl₂', 'H₂SO₄', 'Ba²⁺'], [60.0, 0.0500, 'BaSO₄', 233.39, 'Ba(NO₃)₂', 'Na₂SO₄', 'Ba²⁺'], [30.0, 0.250, 'PbI₂', 461.0, 'Pb(NO₃)₂', 'KI', 'Pb²⁺'], [12.0, 0.400, 'PbI₂', 461.0, 'Pb(NO₃)₂', 'NaI', 'Pb²⁺']].map(([mL, molarity, solid, mm, salt, partner, ion]) => {
      const grams = mL / 1000 * molarity * mm;
      return calc(n, 'calc-precipitate', [mL, molarity, solid].join('-'), `${num(mL)} mL of ${num(molarity)} M ${salt} is mixed with excess ${partner}. All of the ${ion} precipitates as ${solid} (molar mass ${num(mm, 4)} g/mol). What mass of ${solid} forms?`,
        [u(grams, 'g'), u(mL * molarity * mm, 'g'), u(mL / 1000 * molarity, 'g'), u(molarity * mm, 'g')],
        `mol ${ion} = ${num(molarity)} × ${liters(mL)} L = ${num(mL / 1000 * molarity)} mol; × ${mm} g/mol = ${num(grams)} g.`);
    }),
    ...[[1.20, 23.65], [0.55, 18.40], [2.10, 27.85], [0.00, 15.30], [5.45, 30.20], [3.80, 22.15], [12.60, 37.05], [0.95, 9.70], [7.25, 31.60], [1.05, 44.90]].map(([start, end]) =>
      calc(n, 'calc-buret', start + '-' + end, `A buret reads ${start.toFixed(2)} mL at the start of a titration and ${end.toFixed(2)} mL at the end point. What volume was delivered?`,
        [(end - start).toFixed(2) + ' mL', (end + start).toFixed(2) + ' mL', end.toFixed(2) + ' mL', (end - start + 0.10).toFixed(2) + ' mL'],
        `Volume delivered = final − initial = ${end.toFixed(2)} − ${start.toFixed(2)} = ${(end - start).toFixed(2)} mL.`))
  ],
  5: n => [
    ...[[0.10, 2, 0, 0.0040], [0.20, 2, 1, 0.012], [0.050, 2, 2, 0.0030], [0.30, 3, 0, 0.025], [0.10, 3, 1, 0.0080], [0.15, 3, 2, 0.0020], [0.25, 2, 1, 0.050], [0.40, 2, 2, 0.0090], [0.020, 3, 1, 0.0015], [0.60, 2, 0, 0.11], [0.080, 3, 2, 0.0045], [0.35, 2, 2, 0.0024]].map(([conc, factor, order, rate], index) => {
      const names = ['zero order', 'first order', 'second order', 'third order'];
      const species = ['NO', 'H₂', 'O₃', 'Br⁻'][index % 4];
      return calc(n, 'calc-order', [conc, factor, order, rate].join('-'), `When [${species}] is changed from ${num(conc)} M to ${num(conc * factor)} M with all other conditions constant, ${order === 0 ? `the initial rate stays at ${num(rate)} M/s` : `the initial rate changes from ${num(rate)} M/s to ${num(rate * factor ** order)} M/s`}. What is the order with respect to ${species}?`,
        [names[order], ...names.filter((_, i) => i !== order)],
        `Increasing the concentration by a factor of ${factor} multiplies the rate by ${factor ** order} = ${factor}^${order}, so the reaction is ${names[order]} in ${species}.`);
    }),
    ...[[1, 1, 2, 2], [2, 1, 2, 1], [2, 0, 3, 2], [1, 2, 2, 3], [2, 1, 0.5, 2], [1, 1, 3, 3], [0, 2, 2, 2], [2, 2, 2, 0.5], [1, 2, 4, 0.5], [2, 1, 3, 1], [1, 0, 2, 4], [3, 1, 2, 1], [1, 2, 0.5, 2], [2, 2, 3, 0.5]].map(([m, k, a, b]) => {
      const factor = a ** m * b ** k;
      const law = `rate = k[A]${m === 1 ? '' : sup(m)}[B]${k === 1 ? '' : sup(k)}`.replace('[A]⁰', '').replace('[B]⁰', '');
      return calc(n, 'calc-rate-change', [m, k, a, b].join('-'), `A reaction has the rate law ${law}. ${a === 1 ? '[A] is kept the same' : `[A] is multiplied by ${a}`}${b === 1 ? ' and [B] is kept the same' : ` and [B] is multiplied by ${b}`}. How does the rate change?`,
        options(factor, [a * b, a ** k * b ** m, a * m + b * k, a ** (m + 1) * b ** k, factor * 2, factor / 2], value => value === 1 ? 'The rate does not change' : `The rate is multiplied by ${Number(value.toPrecision(3))}`),
        `New rate factor = ${a}^${m} × ${b}^${k} = ${num(factor)}.`);
    }),
    ...[0.0231, 0.0693, 0.139, 1.73e-3, 4.62e-4, 0.0347, 5.78e-3, 0.231, 8.66e-4, 0.0116, 2.31e-5, 0.0462].map(k =>
      calc(n, 'calc-half-life', 'k-' + k, `A first-order reaction has a rate constant of ${num(k)} s⁻¹. What is its half-life?`,
        [u(0.693 / k, 's'), u(k / 0.693, 's'), u(1 / k, 's'), u(0.693 * k, 's')],
        `For first order, t½ = 0.693 ÷ k = 0.693 ÷ ${num(k)} = ${num(0.693 / k)} s.`)),
    ...[30.0, 12.5, 250, 4.00, 1600, 75.0, 8.50, 45.0, 600, 18.0].map(half =>
      calc(n, 'calc-rate-constant-half-life', half, `A first-order reaction has a half-life of ${half} s. What is its rate constant?`,
        [u(0.693 / half, 's⁻¹'), u(half / 0.693, 's⁻¹'), u(1 / half, 's⁻¹'), u(0.693 * half, 's⁻¹')],
        `k = 0.693 ÷ t½ = 0.693 ÷ ${half} = ${num(0.693 / half)} s⁻¹.`)),
    ...[[0.800, 20, 60], [1.20, 15, 45], [0.500, 30, 120], [2.00, 8, 40], [0.640, 10, 30], [0.960, 25, 100], [3.20, 12, 60], [0.400, 5, 15], [1.60, 40, 160], [0.250, 6, 24], [5.00, 3, 15], [0.720, 50, 150]].map(([start, half, time]) => {
      const halves = time / half;
      const left = start * 0.5 ** halves;
      return calc(n, 'calc-amount-remaining', [start, half, time].join('-'), `A first-order reactant starts at ${num(start)} M and has a half-life of ${half} min. What is its concentration after ${time} min?`,
        [u(left, 'M'), u(start / halves, 'M'), u(start * 0.5 ** (halves - 1), 'M'), u(start - left, 'M')],
        `${time} ÷ ${half} = ${halves} half-lives, so ${num(start)} × (½)^${halves} = ${num(left)} M.`);
    }),
    ...[[124, 50], [62, 25], [31, 12.5], [8.0, 6.25], [45, 25], [20, 12.5], [15, 50], [6.5, 6.25], [90, 12.5], [3.0, 25], [210, 6.25], [11, 50]].map(([half, percent]) => {
      const halves = Math.log2(100 / percent);
      return calc(n, 'calc-time-to-percent', half + '-' + percent, `A first-order reaction has a half-life of ${half} s. How long does it take for the reactant to fall to ${percent}% of its initial concentration?`,
        options(half * halves, [half * 100 / percent, half / halves, half * (halves + 1), half * percent / 100, half * 2 * halves], v => u(v, 's')),
        `${percent}% remaining is ${halves} half-li${halves === 1 ? 'fe' : 'ves'}, so t = ${halves} × ${half} = ${num(half * halves)} s.`);
    }),
    ...[[0.500, 0.0200, 30], [1.20, 0.0050, 100], [0.800, 0.150, 5], [2.00, 0.0010, 600], [0.350, 0.0400, 25], [0.900, 0.0120, 50], [1.50, 0.300, 2], [0.250, 0.0070, 90], [0.600, 0.0950, 10], [1.00, 0.00250, 400]].map(([start, k, t]) => {
      const left = start * Math.exp(-k * t);
      return calc(n, 'calc-integrated-first', [start, k, t].join('-'), `A first-order reaction has k = ${k} s⁻¹. If [A]₀ = ${num(start)} M, what is [A] after ${t} s? (ln[A] = ln[A]₀ − kt)`,
        [u(left, 'M'), u(Math.max(start - k * t, 0.001), 'M'), u(start * Math.exp(k * t), 'M'), u(start / (1 + k * t), 'M')],
        `[A] = ${num(start)} × e^(−${k} × ${t}) = ${num(start)} × e^(−${num(k * t)}) = ${num(left)} M.`);
    }),
    ...[[0.450, 0.390, 120, 180], [0.800, 0.620, 0, 60], [1.20, 0.950, 30, 80], [0.0650, 0.0410, 10, 40], [2.50, 1.90, 100, 250], [0.300, 0.255, 60, 90], [0.0920, 0.0780, 0, 20], [1.75, 1.40, 200, 270], [0.560, 0.420, 15, 50], [0.140, 0.0910, 40, 110]].map(([c1, c2, t1, t2]) => {
      const rate = (c1 - c2) / (t2 - t1);
      return calc(n, 'calc-average-rate', [c1, c2, t1, t2].join('-'), `The concentration of a reactant falls from ${num(c1)} M at ${t1} s to ${num(c2)} M at ${t2} s. What is the average rate of disappearance in this interval?`,
        [u(rate, 'M/s'), u((t2 - t1) / (c1 - c2), 'M/s'), u(c1 - c2, 'M/s'), u((c1 + c2) / 2 / (t2 - t1), 'M/s')],
        `Rate = −Δ[A] ÷ Δt = (${num(c1)} − ${num(c2)}) ÷ (${t2} − ${t1}) = ${num(rate)} M/s.`);
    }),
    ...[[2.4e-3, 0.20, 1], [6.0e-4, 0.15, 2], [3.6e-5, 0.30, 2], [1.5e-2, 0.50, 1], [8.1e-3, 0.30, 3], [4.0e-4, 0.050, 1], [9.0e-3, 0.60, 2], [2.0e-6, 0.010, 2], [5.0e-3, 0.25, 0], [7.2e-4, 0.12, 1]].map(([rate, conc, order]) => {
      const k = rate / conc ** order;
      const units = ['M/s', 's⁻¹', 'M⁻¹ s⁻¹', 'M⁻² s⁻¹'];
      return calc(n, 'calc-rate-constant', [rate, conc, order].join('-'), `For a reaction with rate = k[A]${order === 1 ? '' : sup(order)}, the rate is ${num(rate)} M/s when [A] = ${num(conc)} M. What is k?`.replace('[A]⁰', '[A]⁰ (zero order)'),
        [u(k, units[order]), u(rate * conc ** order, units[order]), u(k, units[(order + 1) % 4]), u(conc ** order / rate, units[order])],
        `k = rate ÷ [A]^${order} = ${num(rate)} ÷ ${num(conc)}^${order} = ${num(k)} ${units[order]}.`);
    })
  ],
  6: n => [
    ...[[50.0, 4.18, 20.0, 45.0, 'water'], [125, 4.18, 22.5, 30.0, 'water'], [35.0, 0.897, 25.0, 95.0, 'aluminum'], [80.0, 0.449, 18.0, 68.0, 'iron'], [200, 4.18, 15.0, 85.0, 'water'], [15.0, 0.385, 20.0, 120.0, 'copper'], [60.0, 2.44, 10.0, 40.0, 'ethanol'], [250, 4.18, 80.0, 25.0, 'water'], [42.5, 0.129, 30.0, 150.0, 'gold'], [75.0, 4.18, 4.0, 37.0, 'water'], [500, 0.897, 20.0, 50.0, 'aluminum'], [18.0, 2.03, -20.0, -5.0, 'ice'], [100, 4.18, 60.0, 20.0, 'water'], [24.0, 0.449, 200, 25.0, 'iron']].map(([mass, c, t1, t2, what]) => {
      const q = mass * c * (t2 - t1);
      return calc(n, 'calc-heat', [mass, c, t1, t2].join('-'), `How much heat is ${q >= 0 ? 'absorbed' : 'released'} when ${num(mass)} g of ${what} (c = ${c} J/g·°C) changes from ${t1} °C to ${t2} °C?`,
        [u(Math.abs(q), 'J'), u(Math.abs(mass * c * t2), 'J'), u(Math.abs(mass * (t2 - t1) / c), 'J'), u(Math.abs(q) / 1000, 'J')],
        `q = mcΔT = (${num(mass)})(${c})(${num(t2 - t1)}) = ${num(q)} J.`);
    }),
    ...[[1250, 25.0, 50.0], [3680, 80.0, 50.0], [452, 20.0, 50.4], [9200, 100, 22.0], [2090, 50.0, 10.0], [578, 30.0, 50.0], [15000, 250, 14.4], [1340, 40.0, 37.3], [880, 12.0, 81.5], [6270, 75.0, 20.0]].map(([q, mass, dt]) =>
      calc(n, 'calc-specific-heat', [q, mass, dt].join('-'), `A sample with a mass of ${num(mass)} g absorbs ${num(q)} J of heat, and its temperature rises by ${num(dt)} °C. What is its specific heat?`,
        [u(q / (mass * dt), 'J/g·°C'), u(q * mass / dt, 'J/g·°C'), u(mass * dt / q, 'J/g·°C'), u(q / mass, 'J/g·°C')],
        `c = q ÷ (mΔT) = ${q} ÷ (${num(mass)} × ${dt}) = ${num(q / (mass * dt))} J/g·°C.`)),
    ...[[50.0, 0.449, 95.0, 100, 22.0, 'iron'], [25.0, 0.897, 100, 75.0, 20.0, 'aluminum'], [40.0, 0.385, 150, 50.0, 25.0, 'copper'], [100, 0.449, 80.0, 200, 18.0, 'iron'], [30.0, 0.129, 200, 40.0, 21.0, 'gold'], [75.0, 0.897, 90.0, 150, 15.0, 'aluminum'], [60.0, 0.235, 120, 80.0, 24.0, 'silver'], [20.0, 0.385, 300, 100, 20.0, 'copper'], [150, 0.449, 60.0, 300, 10.0, 'iron'], [45.0, 0.897, 250, 120, 23.0, 'aluminum'], [90.0, 0.385, 99.0, 60.0, 19.0, 'copper'], [10.0, 0.129, 500, 25.0, 25.0, 'gold']].map(([mm, cm, tm, mw, tw, metal]) => {
      const final = (mm * cm * tm + mw * 4.18 * tw) / (mm * cm + mw * 4.18);
      return calc(n, 'calc-final-temperature', [mm, cm, tm, mw, tw].join('-'), `A ${num(mm)} g piece of ${metal} (c = ${cm} J/g·°C) at ${tm} °C is dropped into ${num(mw)} g of water (c = 4.18 J/g·°C) at ${tw} °C in an insulated cup. What is the final temperature?`,
        [u(final, '°C'), u((tm + tw) / 2, '°C'), u((mm * tm + mw * tw) / (mm + mw), '°C'), u((mm * 4.18 * tm + mw * cm * tw) / (mm * 4.18 + mw * cm), '°C')],
        `Heat lost by the metal equals heat gained by the water: T = (m₁c₁T₁ + m₂c₂T₂) ÷ (m₁c₁ + m₂c₂) = ${num(final)} °C.`);
    }),
    ...[['NaOH', 40.00, 2.00, 100, 5.1], ['NH₄NO₃', 80.04, 4.00, 100, -3.0], ['KCl', 74.55, 5.00, 50.0, -6.2], ['CaCl₂', 110.98, 5.55, 100, 9.6], ['LiCl', 42.39, 2.12, 75.0, 6.0], ['KNO₃', 101.10, 10.1, 100, -8.0], ['NaOH', 40.00, 4.00, 150, 6.8], ['NH₄Cl', 53.49, 5.35, 100, -3.5], ['MgSO₄', 120.37, 6.02, 100, 6.5], ['KCl', 74.55, 7.46, 100, -4.3], ['NH₄NO₃', 80.04, 8.00, 200, -2.9], ['CaCl₂', 110.98, 11.1, 150, 12.4]].map(([salt, mm, grams, water, dt]) => {
      const q = (water + grams) * 4.18 * dt;
      const moles = grams / mm;
      const dh = -q / moles / 1000;
      return calc(n, 'calc-enthalpy-solution', [salt, grams, water, dt].join('-'), `${num(grams)} g of ${salt} (molar mass ${num(mm, 4)} g/mol) dissolves in ${num(water)} g of water, and the temperature ${dt > 0 ? 'rises' : 'falls'} by ${Math.abs(dt)} °C. Assuming the solution has a mass of ${num(water + grams)} g and c = 4.18 J/g·°C, what is ΔH for dissolving ${salt} in kJ/mol?`,
        [u(dh, 'kJ/mol'), u(-dh, 'kJ/mol'), u(-q / 1000, 'kJ/mol'), u(-water * 4.18 * dt / grams / 1000, 'kJ/mol')],
        `q(solution) = (${num(water + grams)})(4.18)(${dt}) = ${num(q)} J; ΔH = −q ÷ n = −${num(q / 1000)} kJ ÷ ${num(moles)} mol = ${num(dh)} kJ/mol.`);
    }),
    ...[[-92.2, 2], [178.3, 3], [-285.8, 2], [-571.6, 0.5], [44.0, 2], [-393.5, 3], [180.5, 0.5], [-1366.8, 2], [-196.0, 0.5], [57.2, 2], [-905.2, 0.5], [131.3, 3]].map(([dh, factor]) =>
      calc(n, 'calc-hess-reverse', dh + '-' + factor, `For reaction X → Y, ΔH = ${signed(dh)} kJ. What is ΔH for the reaction written as ${factor === 0.5 ? '½Y → ½X' : factor + 'Y → ' + factor + 'X'}?`,
        [u(-dh * factor, 'kJ'), u(dh * factor, 'kJ'), u(-dh / factor, 'kJ'), u(-dh, 'kJ')],
        `Reversing changes the sign, and multiplying the equation by ${factor} multiplies ΔH by ${factor}: ${num(-dh * factor)} kJ.`)),
    ...[[-393.5, -283.0, 1, -1], [-296.8, -395.7, 2, -1], [180.5, -114.1, 1, 1], [-241.8, -285.8, -1, 1], [-110.5, -393.5, -2, 1], [90.3, 33.2, -1, 2], [-74.8, -890.4, 2, -1], [52.3, -137.0, 1, 2], [-46.1, -314.4, 2, -1], [-635.1, -178.3, 1, -1], [-824.2, -26.7, -1, 3], [9.2, 33.2, 2, -1]].map(([h1, h2, a, b]) => {
      const total = a * h1 + b * h2;
      const describe = (k, label) => `${Math.abs(k) === 1 ? '' : Math.abs(k) + ' × '}${label}${k < 0 ? ' reversed' : ''}`;
      return calc(n, 'calc-hess-combine', [h1, h2, a, b].join('-'), `Reaction 1 has ΔH₁ = ${signed(h1)} kJ and reaction 2 has ΔH₂ = ${signed(h2)} kJ. A target reaction equals ${describe(a, 'reaction 1')} plus ${describe(b, 'reaction 2')}. What is ΔH for the target reaction?`,
        options(total, [h1 + h2, -total, Math.abs(a) * h1 + Math.abs(b) * h2, a * h1 - b * h2, total * 2], v => u(v, 'kJ')),
        `ΔH = (${String(a).replace('-', '−')})(${num(h1)}) + (${String(b).replace('-', '−')})(${num(h2)}) = ${num(total)} kJ.`);
    }),
    ...[
      ['H₂ + Cl₂ → 2HCl', 'H–H 436, Cl–Cl 242, H–Cl 431', 436 + 242, 2 * 431],
      ['H₂ + Br₂ → 2HBr', 'H–H 436, Br–Br 193, H–Br 366', 436 + 193, 2 * 366],
      ['H₂ + F₂ → 2HF', 'H–H 436, F–F 155, H–F 567', 436 + 155, 2 * 567],
      ['CH₄ + Cl₂ → CH₃Cl + HCl', 'C–H 413, Cl–Cl 242, C–Cl 328, H–Cl 431', 413 + 242, 328 + 431],
      ['N₂ + 3H₂ → 2NH₃', 'N≡N 945, H–H 436, N–H 391', 945 + 3 * 436, 6 * 391],
      ['2H₂ + O₂ → 2H₂O(g)', 'H–H 436, O=O 498, O–H 463', 2 * 436 + 498, 4 * 463],
      ['CH₄ + 2O₂ → CO₂ + 2H₂O(g)', 'C–H 413, O=O 498, C=O 799, O–H 463', 4 * 413 + 2 * 498, 2 * 799 + 4 * 463],
      ['C₂H₄ + H₂ → C₂H₆', 'C=C 614, C–C 348, C–H 413, H–H 436', 614 + 436, 348 + 2 * 413],
      ['H₂ + I₂ → 2HI', 'H–H 436, I–I 151, H–I 299', 436 + 151, 2 * 299],
      ['CO + 2H₂ → CH₃OH', 'C≡O 1072, H–H 436, C–H 413, C–O 358, O–H 463', 1072 + 2 * 436, 3 * 413 + 358 + 463],
      ['N₂ + O₂ → 2NO', 'N≡N 945, O=O 498, N=O 607', 945 + 498, 2 * 607],
      ['2NH₃ → N₂ + 3H₂', 'N–H 391, N≡N 945, H–H 436', 6 * 391, 945 + 3 * 436]
    ].map(([equation, bonds, broken, formed]) =>
      calc(n, 'calc-bond-enthalpy', equation, `Use these average bond enthalpies (kJ/mol) to estimate ΔH for ${equation}: ${bonds}.`,
        [u(broken - formed, 'kJ/mol'), u(formed - broken, 'kJ/mol'), u(broken + formed, 'kJ/mol'), u(broken - formed / 2, 'kJ/mol')],
        `ΔH = Σ(bonds broken) − Σ(bonds formed) = ${broken} − ${formed} = ${num(broken - formed)} kJ/mol.`)),
    ...thermoReactions.slice(0, 13).map((reaction, index) => {
      const [reactants, products] = reaction;
      const dh = total(products, 0) - total(reactants, 0);
      const values = [...reactants, ...products].filter(([s]) => thermo[s][0] !== 0).map(([s]) => `${s} ${num(thermo[s][0], 4)}`).join('; ');
      const noCoefficients = products.reduce((s, [sp]) => s + thermo[sp][0], 0) - reactants.reduce((s, [sp]) => s + thermo[sp][0], 0);
      return calc(n, 'calc-enthalpy-formation', 'r' + index, `Using standard enthalpies of formation (kJ/mol) — ${values} — what is ΔH° for ${equationOf(reaction)}?`,
        options(dh, [-dh, noCoefficients, total(products, 0), -noCoefficients, total(products, 0) + total(reactants, 0)], v => u(v, 'kJ/mol', 4)),
        `ΔH° = ΣΔH°f(products) − ΣΔH°f(reactants) = ${num(total(products, 0), 4)} − (${num(total(reactants, 0), 4)}) = ${num(dh, 4)} kJ/mol.`);
    }),
    ...[[36.0, 'vaporize', 40.7], [9.01, 'vaporize', 40.7], [54.0, 'melt', 6.01], [18.0, 'melt', 6.01], [100, 'vaporize', 40.7], [250, 'melt', 6.01], [4.50, 'vaporize', 40.7], [72.1, 'melt', 6.01], [27.0, 'vaporize', 40.7], [500, 'melt', 6.01]].map(([grams, change, dh]) => {
      const moles = grams / 18.02;
      return calc(n, 'calc-phase-change', grams + '-' + change, `How much heat is needed to ${change} ${num(grams)} g of water at its ${change === 'melt' ? 'melting' : 'boiling'} point? (ΔH${change === 'melt' ? 'fus' : 'vap'} = ${dh} kJ/mol; molar mass 18.02 g/mol)`,
        [u(moles * dh, 'kJ'), u(grams * dh, 'kJ'), u(dh / moles, 'kJ'), u(moles * (change === 'melt' ? 40.7 : 6.01), 'kJ')],
        `n = ${num(grams)} ÷ 18.02 = ${num(moles)} mol; q = n × ΔH = ${num(moles * dh)} kJ.`);
    })
  ],
  7: n => [
    ...equilibria.flatMap((template, t) => equilibriumData[t].map((values, i) => {
      const [k, top, bottom] = kValue(template, values);
      const flat = values.slice(template[1].length).reduce((a, b) => a * b, 1) / values.slice(0, template[1].length).reduce((a, b) => a * b, 1);
      return calc(n, 'calc-k', t + '-' + i, `For ${template[0]}, the equilibrium concentrations are ${concentrationList(template, values)}. What is Kc?`,
        [num(k), num(1 / k), num(flat === k ? k * 2 : flat), num(top - bottom === k ? top + bottom : top - bottom)],
        `Kc = [products]^coefficients ÷ [reactants]^coefficients = ${num(top)} ÷ ${num(bottom)} = ${num(k)}.`);
    })),
    ...equilibria.flatMap((template, t) => [[0.5, 0], [2, 1]].map(([scale, i]) => {
      const values = equilibriumData[t][(i + 1) % 3];
      const [q] = kValue(template, values);
      const k = q * (scale < 1 ? 3.2 : 0.4);
      const options = ['Q < K, so the reaction shifts right toward products.', 'Q > K, so the reaction shifts left toward reactants.', 'Q = K, so the system is at equilibrium.', 'Q < K, so the reaction shifts left toward reactants.'];
      const correct = q < k ? options[0] : options[1];
      return calc(n, 'calc-reaction-quotient', t + '-' + i, `For ${template[0]}, Kc = ${num(k)}. A mixture has ${concentrationList(template, values)}. Which statement is correct?`,
        [correct, ...options.filter(o => o !== correct)],
        `Q = ${num(q)}. Since Q ${q < k ? '<' : '>'} K, the reaction proceeds ${q < k ? 'forward' : 'in reverse'} to reach equilibrium.`);
    })),
    ...[[4.0e3, 'reverse'], [2.5e-2, 'double'], [1.6e5, 'half'], [8.1e-3, 'reverse-double'], [50.0, 'double'], [3.6e-4, 'half'], [0.25, 'reverse'], [1.2e6, 'reverse-half'], [6.4, 'triple'], [9.0e-6, 'reverse'], [2.0e2, 'reverse-double'], [7.5e-8, 'double']].map(([k, change]) => {
      const map = {
        reverse: ['the reverse reaction', 1 / k, [k, k ** 2, 1 / Math.sqrt(k)]],
        double: ['the equation multiplied by 2', k ** 2, [2 * k, Math.sqrt(k), 1 / k ** 2]],
        half: ['the equation multiplied by ½', Math.sqrt(k), [k / 2, k ** 2, 1 / Math.sqrt(k)]],
        'reverse-double': ['the reverse reaction multiplied by 2', 1 / k ** 2, [k ** 2, 2 / k, 1 / (2 * k)]],
        'reverse-half': ['the reverse reaction multiplied by ½', 1 / Math.sqrt(k), [Math.sqrt(k), 1 / (2 * k), k / 2]],
        triple: ['the equation multiplied by 3', k ** 3, [3 * k, k ** (1 / 3), 1 / k ** 3]]
      };
      const [label, answer, wrong] = map[change];
      return calc(n, 'calc-manipulate-k', k + '-' + change, `A reaction has K = ${num(k)}. What is K for ${label}?`,
        [num(answer), ...wrong.map(v => num(v))],
        `Reversing a reaction inverts K, and multiplying the equation by n raises K to the nth power, giving ${num(answer)}.`);
    }),
    ...[['AgCl', 1, 1, 1.3e-5], ['BaSO₄', 1, 1, 1.0e-5], ['CaF₂', 1, 2, 2.1e-4], ['PbI₂', 1, 2, 1.5e-3], ['Ag₂CrO₄', 2, 1, 6.5e-5], ['Mg(OH)₂', 1, 2, 1.1e-4], ['Ag₂SO₄', 2, 1, 1.4e-2], ['Al(OH)₃', 1, 3, 2.9e-9], ['CaCO₃', 1, 1, 6.7e-5], ['PbCl₂', 1, 2, 1.6e-2], ['Ag₂CO₃', 2, 1, 1.3e-4], ['Fe(OH)₃', 1, 3, 9.0e-11]].map(([salt, a, b, s]) => {
      const ksp = (a * s) ** a * (b * s) ** b;
      return calc(n, 'calc-ksp', salt + '-' + s, `The molar solubility of ${salt} is ${num(s)} M. What is its Ksp?`,
        options(ksp, [s ** 2, s ** (a + b), a * b * s ** (a + b), s ** 3, 2 * s ** (a + b), s]),
        `${salt} dissolves to give ${a > 1 ? a + 's' : 's'} M cation and ${b > 1 ? b + 's' : 's'} M anion, so Ksp = ${a === 1 ? 's' : `(${a}s)${sup(a)}`} × ${b === 1 ? 's' : `(${b}s)${sup(b)}`} = ${num(ksp)}.`);
    }),
    ...[['AgBr', 1, 1, 5.0e-13], ['CuS', 1, 1, 6.3e-36], ['BaF₂', 1, 2, 1.0e-6], ['Ca(OH)₂', 1, 2, 5.5e-6], ['Ag₂S', 2, 1, 6.3e-50], ['Zn(OH)₂', 1, 2, 3.0e-17], ['SrSO₄', 1, 1, 3.2e-7], ['PbF₂', 1, 2, 3.3e-8], ['Cu(OH)₂', 1, 2, 2.2e-20], ['BaCO₃', 1, 1, 5.1e-9]].map(([salt, a, b, ksp]) => {
      const coefficient = a ** a * b ** b;
      const s = (ksp / coefficient) ** (1 / (a + b));
      return calc(n, 'calc-molar-solubility', salt + '-' + ksp, `${salt} has Ksp = ${num(ksp)}. What is its molar solubility in pure water?`,
        options(s, [Math.sqrt(ksp), ksp ** (1 / 3), ksp / coefficient, (ksp * coefficient) ** (1 / (a + b)), ksp], v => u(v, 'M')),
        `Ksp = ${coefficient === 1 ? '' : coefficient}s^${a + b}, so s = (${num(ksp)} ÷ ${coefficient})^(1/${a + b}) = ${num(s)} M.`);
    }),
    ...[[0.500, 0.100], [1.00, 0.200], [0.250, 0.0500], [0.800, 0.300], [2.00, 0.150], [0.400, 0.250], [1.50, 0.600], [0.100, 0.0200], [0.600, 0.0800], [1.20, 0.400], [0.300, 0.120], [0.750, 0.0300]].map(([start, x]) => {
      const k = x * x / (start - x);
      return calc(n, 'calc-ice', start + '-' + x, `PCl₅(g) ⇌ PCl₃(g) + Cl₂(g). A flask starts with ${num(start)} M PCl₅ and no products. At equilibrium, [Cl₂] = ${num(x)} M. What is Kc?`,
        [num(k), num(x * x / start), num(x / (start - x)), num(4 * x * x / (start - x))],
        `[PCl₃] = [Cl₂] = ${num(x)} M and [PCl₅] = ${num(start)} − ${x} = ${num(start - x)} M, so Kc = (${x})² ÷ ${num(start - x)} = ${num(k)}.`);
    }),
    ...[[0, 'H₂(g) + I₂(g) ⇌ 2HI(g)', 50.0, 700], [-2, 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)', 0.500, 500], [1, 'N₂O₄(g) ⇌ 2NO₂(g)', 4.6e-3, 298], [1, 'PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)', 0.0420, 523], [-1, '2SO₂(g) + O₂(g) ⇌ 2SO₃(g)', 280, 1000], [2, 'CH₄(g) + H₂O(g) ⇌ CO(g) + 3H₂(g)', 0.0050, 900], [1, 'COCl₂(g) ⇌ CO(g) + Cl₂(g)', 2.2e-10, 373], [-1, '2NO(g) + O₂(g) ⇌ 2NO₂(g)', 6.4e5, 500], [-2, 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)', 6.0e-2, 700], [2, 'NH₄Cl(s) ⇌ NH₃(g) + HCl(g)', 1.0e-3, 600]].map(([dn, eq, kc, t], index) => {
      const rt = RL * t;
      const kp = kc * rt ** dn;
      return calc(n, 'calc-kp', 'kp-' + index, `For ${eq}, Kc = ${num(kc)} at ${t} K. What is Kp? (Kp = Kc(RT)^Δn, R = 0.08206 L·atm/mol·K)`,
        [num(kp), num(dn === 0 ? kc * rt : kc * rt ** -dn), num(dn === 0 ? kc * R * t : kc * (R * t) ** dn), num(dn === 0 ? kc / rt : kc)],
        `Δn (moles of gas products − gas reactants) = ${dn}, so Kp = ${num(kc)} × (0.08206 × ${t})^${dn} = ${num(kp)}.`);
    })
  ],
  8: n => [
    ...[0.010, 0.0025, 3.2e-4, 0.15, 1.0e-3, 0.050, 6.3e-5, 0.0080, 0.200, 4.5e-3, 1.0, 2.0e-4, 0.075, 7.9e-6].map((conc, index) => {
      const acid = ['HCl', 'HNO₃', 'HBr', 'HClO₄'][index % 4];
      const ph = -Math.log10(conc);
      return calc(n, 'calc-ph-strong-acid', acid + '-' + conc, `What is the pH of ${num(conc)} M ${acid}?`,
        [fixed(ph, 2), fixed(14 - ph, 2), fixed(-Math.log(conc), 2), fixed(ph === 0 ? 1 : ph / 2, 2)],
        `${acid} is a strong acid, so [H⁺] = ${num(conc)} M and pH = −log(${num(conc)}) = ${fixed(ph, 2)}.`);
    }),
    ...[[0.010, 1], [0.0050, 2], [2.5e-3, 1], [0.15, 1], [0.020, 2], [4.0e-4, 1], [0.0010, 2], [0.080, 1], [3.0e-3, 2], [0.25, 1], [6.0e-5, 1], [0.040, 2], [1.0e-3, 1], [0.0075, 2]].map(([conc, count], index) => {
      const base = count === 2 ? 'Ba(OH)₂' : ['NaOH', 'KOH', 'LiOH'][index % 3];
      const poh = -Math.log10(conc * count);
      return calc(n, 'calc-ph-strong-base', base + '-' + conc, `What is the pH of ${num(conc)} M ${base} at 25 °C?`,
        options(14 - poh, [poh, 14 + Math.log10(conc), -Math.log10(conc), 15 - poh, 13 - poh], v => fixed(v, 2)),
        `[OH⁻] = ${count === 2 ? '2 × ' : ''}${num(conc)} = ${num(conc * count)} M; pOH = ${fixed(poh, 2)}; pH = 14.00 − ${fixed(poh, 2)} = ${fixed(14 - poh, 2)}.`);
    }),
    ...[3.20, 5.75, 8.40, 11.25, 1.85, 9.60, 4.30, 12.70, 6.15, 2.55, 10.10, 7.40].map(ph =>
      calc(n, 'calc-hydrogen-ion', ph, `A solution has a pH of ${ph.toFixed(2)} at 25 °C. What is [H⁺]?`,
        [u(10 ** -ph, 'M'), u(10 ** -(14 - ph), 'M'), u(10 ** ph, 'M'), u(ph / 14 === 10 ** -ph ? 1 : Math.exp(-ph), 'M')],
        `[H⁺] = 10^(−pH) = 10^(−${ph.toFixed(2)}) = ${num(10 ** -ph)} M.`)),
    ...[[1.8e-5, 0.100], [6.3e-5, 0.500], [6.8e-4, 0.250], [4.9e-10, 0.150], [1.4e-3, 0.0500], [3.0e-8, 0.200], [7.2e-4, 0.0800], [1.8e-4, 0.300], [4.5e-4, 0.120], [1.3e-5, 1.00], [6.2e-8, 0.400], [2.9e-8, 0.750], [3.5e-4, 0.0400], [1.0e-6, 0.600]].map(([ka, conc]) => {
      const h = Math.sqrt(ka * conc);
      return calc(n, 'calc-ph-weak-acid', ka + '-' + conc, `What is the approximate pH of ${num(conc)} M of a weak acid with Ka = ${num(ka)}?`,
        [fixed(-Math.log10(h), 2), fixed(-Math.log10(conc), 2), fixed(-Math.log10(ka * conc), 2), fixed(-Math.log10(ka), 2)],
        `[H⁺] ≈ √(Ka × C) = √(${num(ka)} × ${num(conc)}) = ${num(h)} M, so pH = ${fixed(-Math.log10(h), 2)}.`);
    }),
    ...[[0.100, 2.87], [0.250, 3.40], [0.0500, 3.12], [0.500, 2.10], [0.200, 4.55], [0.0100, 3.60], [1.00, 2.45], [0.150, 5.10], [0.300, 2.95], [0.0750, 4.20], [0.400, 3.75], [0.0250, 2.80]].map(([conc, ph]) => {
      const h = 10 ** -ph;
      const ka = h * h / (conc - h);
      return calc(n, 'calc-ka', conc + '-' + ph, `A ${num(conc)} M solution of a weak monoprotic acid has a pH of ${ph.toFixed(2)}. What is Ka?`,
        [num(ka), num(h / conc), num(h * h), num(Math.sqrt(h * conc))],
        `[H⁺] = [A⁻] = 10^(−${ph}) = ${num(h)} M; Ka = (${num(h)})² ÷ (${num(conc)} − ${num(h)}) = ${num(ka)}.`);
    }),
    ...[[4.74, 0.20, 0.10], [3.17, 0.50, 0.25], [9.25, 0.30, 0.30], [4.20, 0.15, 0.45], [7.21, 1.00, 0.10], [3.75, 0.40, 0.80], [6.35, 0.25, 0.50], [10.33, 0.60, 0.20], [4.87, 0.80, 0.40], [2.15, 0.050, 0.50], [9.25, 0.12, 0.36], [5.00, 0.75, 0.25], [4.74, 0.10, 1.00], [8.00, 0.35, 0.70]].map(([pka, base, acid]) => {
      const ph = pka + Math.log10(base / acid);
      return calc(n, 'calc-buffer', [pka, base, acid].join('-'), `A buffer contains ${num(acid)} M weak acid (pKa = ${pka.toFixed(2)}) and ${num(base)} M of its conjugate base. What is its pH?`,
        [fixed(ph, 2), fixed(pka + Math.log10(acid / base), 2), fixed(pka === ph ? pka + 1 : pka, 2), fixed(pka + base / acid, 2)],
        `pH = pKa + log([A⁻]/[HA]) = ${pka.toFixed(2)} + log(${base}/${acid}) = ${fixed(ph, 2)}.`);
    }),
    ...[[0.100, 1.3e-3], [0.500, 3.0e-3], [0.0500, 9.5e-4], [1.00, 4.2e-3], [0.250, 2.1e-3], [0.0200, 6.0e-4], [0.750, 1.5e-2], [0.150, 1.1e-4], [0.300, 7.4e-3], [0.0100, 4.0e-4]].map(([conc, h]) =>
      calc(n, 'calc-percent-ionization', conc + '-' + h, `In a ${num(conc)} M solution of a weak acid, [H⁺] = ${num(h)} M at equilibrium. What is the percent ionization?`,
        [u(h / conc * 100, '%').replace(' %', '%'), u(conc / h, '%').replace(' %', '%'), u(h * 100, '%').replace(' %', '%'), u(h / conc, '%').replace(' %', '%')],
        `% ionization = [H⁺] ÷ C × 100 = ${num(h)} ÷ ${num(conc)} × 100 = ${num(h / conc * 100)}%.`)),
    ...[1.8e-5, 6.3e-5, 4.9e-10, 6.8e-4, 5.6e-10, 4.3e-7, 1.3e-10, 7.2e-4, 3.0e-8, 1.4e-3].map(ka =>
      calc(n, 'calc-kb', ka, `An acid has Ka = ${num(ka)} at 25 °C. What is Kb for its conjugate base? (Kw = 1.0 × 10⁻¹⁴)`,
        [num(1.0e-14 / ka), num(ka / 1.0e-14), num(1 / ka), num(14 - ka === 14 ? 1.0e-14 * ka : 1.0e-14 * ka)],
        `Ka × Kb = Kw, so Kb = 1.0 × 10⁻¹⁴ ÷ ${num(ka)} = ${num(1.0e-14 / ka)}.`)),
    ...[[25.00, 0.100, 0.125, 1, 'HCl'], [20.00, 0.150, 0.100, 1, 'HNO₃'], [15.00, 0.200, 0.250, 2, 'H₂SO₄'], [50.00, 0.0500, 0.100, 1, 'CH₃COOH'], [10.00, 0.500, 0.200, 2, 'H₂SO₄'], [30.00, 0.120, 0.150, 1, 'HF'], [40.00, 0.0800, 0.160, 2, 'H₂C₂O₄'], [25.00, 0.250, 0.500, 1, 'HCl'], [35.00, 0.0600, 0.0750, 2, 'H₂SO₄'], [12.50, 0.400, 0.250, 1, 'HNO₃'], [45.00, 0.0200, 0.0300, 1, 'HC₇H₅O₂'], [22.00, 0.300, 0.150, 2, 'H₂SO₄']].map(([va, ma, mb, protons, acid]) => {
      const vb = va * ma * protons / mb;
      return calc(n, 'calc-equivalence-volume', [va, ma, mb, protons].join('-'), `What volume of ${num(mb)} M NaOH is needed to reach the equivalence point with ${num(va)} mL of ${num(ma)} M ${acid}?`,
        [u(vb, 'mL'), u(va * ma / mb === vb ? vb / 2 : va * ma / mb, 'mL'), u(va * mb / ma, 'mL'), u(ma * mb / va, 'mL')],
        `mol ${acid} = ${num(ma)} × ${liters(va)} L; mol NaOH = ${protons} × mol acid; V = ${num(vb)} mL.`);
    }),
    ...[[25.0, 0.100, 20.0, 0.100], [50.0, 0.200, 40.0, 0.200], [30.0, 0.150, 35.0, 0.150], [20.0, 0.250, 10.0, 0.400], [40.0, 0.100, 45.0, 0.100], [15.0, 0.500, 20.0, 0.300], [60.0, 0.0500, 25.0, 0.100], [10.0, 0.300, 12.0, 0.300], [35.0, 0.200, 30.0, 0.200], [25.0, 0.120, 15.0, 0.250]].map(([va, ma, vb, mb]) => {
      const acid = va * ma / 1000;
      const base = vb * mb / 1000;
      const volume = (va + vb) / 1000;
      const ph = acid > base ? -Math.log10((acid - base) / volume) : 14 + Math.log10((base - acid) / volume);
      const wrong = acid > base ? -Math.log10((acid - base) / (va / 1000)) : 14 + Math.log10((base - acid) / (vb / 1000));
      return calc(n, 'calc-mixing-ph', [va, ma, vb, mb].join('-'), `${num(va)} mL of ${num(ma)} M HCl is mixed with ${num(vb)} mL of ${num(mb)} M NaOH. What is the pH of the mixture?`,
        [fixed(ph, 2), fixed(wrong, 2), fixed(14 - ph, 2), '7.00'],
        `mol H⁺ = ${num(acid)}, mol OH⁻ = ${num(base)}; the excess ${acid > base ? 'H⁺' : 'OH⁻'} (${num(Math.abs(acid - base))} mol) in ${num(volume * 1000)} mL gives pH = ${fixed(ph, 2)}.`);
    })
  ],
  9: n => [
    ...[[-92.2, -198.7, 298], [178.3, 159.0, 298], [178.3, 159.0, 1200], [-571.6, -326.6, 298], [57.2, 175.8, 298], [57.2, 175.8, 400], [-198.4, -188.0, 1000], [-114.1, -146.6, 298], [131.3, 133.6, 1000], [-890.3, -242.9, 298], [44.0, 118.8, 373], [-136.3, -120.4, 500], [6.01, 22.0, 263], [6.01, 22.0, 283]].map(([dh, ds, t]) => {
      const dg = dh - t * ds / 1000;
      return calc(n, 'calc-gibbs', [dh, ds, t].join('-'), `A reaction has ΔH° = ${signed(dh)} kJ/mol and ΔS° = ${signed(ds)} J/mol·K. What is ΔG° at ${t} K?`,
        [u(dg, 'kJ/mol'), u(dh - t * ds, 'kJ/mol'), u(dh + t * ds / 1000, 'kJ/mol'), u(-dg, 'kJ/mol')],
        `ΔG° = ΔH° − TΔS° = ${num(dh)} − (${t})(${num(ds / 1000)} kJ/mol·K) = ${num(dg)} kJ/mol. Convert ΔS° to kJ first.`);
    }),
    ...[[178.3, 159.0], [57.2, 175.8], [-92.2, -198.7], [131.3, 133.6], [44.0, 118.8], [-198.4, -188.0], [90.2, 12.4], [-114.1, -146.6], [6.01, 22.0], [206.1, 214.6], [-41.2, -42.1], [30.9, 93.0]].map(([dh, ds]) => {
      const t = dh * 1000 / ds;
      return calc(n, 'calc-crossover-temperature', dh + '-' + ds, `A reaction has ΔH° = ${signed(dh)} kJ/mol and ΔS° = ${signed(ds)} J/mol·K. Above or below what temperature does its favorability change (ΔG° = 0)?`,
        [u(t, 'K'), u(dh / ds, 'K'), u(ds / dh, 'K'), u(t - 273, 'K')],
        `At ΔG° = 0, T = ΔH° ÷ ΔS° = ${num(dh * 1000)} J/mol ÷ ${num(ds)} J/mol·K = ${num(t)} K.`);
    }),
    ...[[-10.0, 298], [-25.0, 298], [5.0, 298], [-40.0, 500], [15.0, 298], [-2.5, 298], [-60.0, 400], [8.0, 350], [-33.0, 298], [20.0, 450], [-5.7, 298], [12.0, 298]].map(([dg, t]) => {
      const k = Math.exp(-dg * 1000 / (R * t));
      return calc(n, 'calc-k-from-g', dg + '-' + t, `A reaction has ΔG° = ${signed(dg)} kJ/mol at ${t} K. What is its equilibrium constant? (ΔG° = −RT ln K, R = 8.314 J/mol·K)`,
        [num(k), num(1 / k), num(Math.exp(-dg / (R * t))), num(-dg * 1000 / (R * t))],
        `ln K = −ΔG° ÷ RT = −(${num(dg * 1000)}) ÷ (8.314 × ${t}) = ${num(-dg * 1000 / (R * t))}, so K = ${num(k)}.`);
    }),
    ...[[1.0e3, 298], [2.5e-4, 298], [6.4, 350], [1.8e-5, 298], [4.2e8, 298], [0.050, 500], [3.3e2, 400], [7.1e-12, 298], [1.0, 298], [9.6e-2, 298]].map(([k, t]) => {
      const dg = -R * t * Math.log(k) / 1000;
      return calc(n, 'calc-g-from-k', k + '-' + t, `A reaction has K = ${num(k)} at ${t} K. What is ΔG°? (R = 8.314 J/mol·K)`,
        [u(dg, 'kJ/mol'), u(-dg === dg ? 1 : -dg, 'kJ/mol'), u(-R * t * Math.log10(k) / 1000, 'kJ/mol'), u(-R * t * Math.log(k), 'kJ/mol')],
        `ΔG° = −RT ln K = −(8.314)(${t}) ln(${num(k)}) ÷ 1000 = ${num(dg)} kJ/mol.`);
    }),
    ...[[2, 1.10], [1, 0.46], [2, 0.32], [3, 2.02], [6, 0.94], [2, -0.23], [1, 1.56], [2, 2.71], [3, 0.24], [2, 0.62], [6, 1.20], [1, -0.80]].map(([electrons, e]) => {
      const dg = -electrons * FARADAY * e / 1000;
      return calc(n, 'calc-g-from-e', electrons + '-' + e, `A redox reaction transfers ${electrons} mol of electrons and has E° = ${signed(e)} V. What is ΔG°? (F = 96,485 C/mol)`,
        [u(dg, 'kJ/mol'), u(-dg, 'kJ/mol'), u((electrons === 1 ? -2 : -1) * FARADAY * e / 1000, 'kJ/mol'), u(-electrons * FARADAY * e, 'kJ/mol')],
        `ΔG° = −nFE° = −(${electrons})(96,485)(${e}) = ${num(dg * 1000)} J = ${num(dg)} kJ/mol.`);
    }),
    ...[['Ag', 'Zn'], ['Cu', 'Zn'], ['Ag', 'Cu'], ['Cu', 'Fe'], ['Ni', 'Mg'], ['Au', 'Ni'], ['Pb', 'Al'], ['Cu', 'Al'], ['Ag', 'Fe'], ['Sn', 'Zn'], ['Cu', 'Cd'], ['Ag', 'Mg'], ['Au', 'Zn'], ['Ni', 'Cr']].map(([cathode, anode]) => {
      const [cIon, ec] = reductions[cathode];
      const [aIon, ea] = reductions[anode];
      const ecell = ec - ea;
      const show = value => (value >= 0 ? '+' : '−') + Math.abs(value).toFixed(2) + ' V';
      return calc(n, 'calc-cell-potential', cathode + '-' + anode, `A galvanic cell uses ${cathode}/${cIon} (E° = ${show(ec)}) and ${anode}/${aIon} (E° = ${show(ea)}). What is E°cell?`,
        [show(ecell), show(-ecell), show(ec + ea), show(2 * ec - ea === ecell ? ec - 2 * ea : 2 * ec - ea)],
        `E°cell = E°(cathode) − E°(anode) = ${show(ec)} − (${show(ea)}) = ${show(ecell)}. The metal with the higher reduction potential is the cathode.`);
    }),
    ...[['Cu', 63.55, 2, 2.00, 30.0], ['Ag', 107.87, 1, 1.50, 20.0], ['Zn', 65.38, 2, 3.00, 45.0], ['Ni', 58.69, 2, 0.750, 60.0], ['Al', 26.98, 3, 5.00, 120], ['Cr', 52.00, 3, 2.50, 90.0], ['Au', 196.97, 3, 0.500, 25.0], ['Cu', 63.55, 2, 10.0, 15.0], ['Ag', 107.87, 1, 0.250, 100], ['Zn', 65.38, 2, 1.20, 75.0], ['Ni', 58.69, 2, 4.00, 10.0], ['Cu', 63.55, 2, 0.800, 200]].map(([metal, mm, electrons, amps, minutes]) => {
      const charge = amps * minutes * 60;
      const grams = charge / FARADAY / electrons * mm;
      return calc(n, 'calc-electrolysis', [metal, amps, minutes].join('-'), `A current of ${num(amps)} A passes through a solution of ${metal}${electrons === 1 ? '⁺' : sup(electrons) + '⁺'} for ${minutes} min. What mass of ${metal} is deposited? (F = 96,485 C/mol)`,
        [u(grams, 'g'), u(charge / FARADAY * mm * (electrons === 1 ? 2 : 1), 'g'), u(amps * minutes / FARADAY / electrons * mm, 'g'), u(charge / FARADAY * electrons * mm, 'g')],
        `q = ${num(amps)} A × ${minutes * 60} s = ${num(charge)} C; mol e⁻ = q ÷ F = ${num(charge / FARADAY)}; mol ${metal} = ÷ ${electrons}; mass = ${num(grams)} g.`);
    }),
    ...thermoReactions.filter((_, index) => [0, 3, 4, 6, 7, 9, 13, 14, 15, 16].includes(index)).map((reaction, index) => {
      const [reactants, products] = reaction;
      const ds = total(products, 1) - total(reactants, 1);
      const values = [...reactants, ...products].map(([s]) => `${s} ${num(thermo[s][1], 4)}`).join('; ');
      const flat = products.reduce((s, [sp]) => s + thermo[sp][1], 0) - reactants.reduce((s, [sp]) => s + thermo[sp][1], 0);
      return calc(n, 'calc-entropy', 's' + index, `Using standard molar entropies (J/mol·K) — ${values} — what is ΔS° for ${equationOf(reaction)}?`,
        [u(ds, 'J/mol·K', 4), u(-ds, 'J/mol·K', 4), u(flat === ds ? ds + 100 : flat, 'J/mol·K', 4), u(total(products, 1) + total(reactants, 1), 'J/mol·K', 4)],
        `ΔS° = ΣS°(products) − ΣS°(reactants) = ${num(total(products, 1), 4)} − ${num(total(reactants, 1), 4)} = ${num(ds, 4)} J/mol·K.`);
    }),
    ...[[-120, 45], [85, 210], [-60, -150], [35, -40], [-250, 10], [12, 60], [-15, -90], [140, -25], [-300, -20], [5, 120], [-45, 30], [190, 150]].map(([dh, ds]) => {
      const options = ['Favorable at all temperatures', 'Favorable only at high temperatures', 'Favorable only at low temperatures', 'Not favorable at any temperature'];
      const correct = dh < 0 && ds > 0 ? options[0] : dh > 0 && ds > 0 ? options[1] : dh < 0 && ds < 0 ? options[2] : options[3];
      return calc(n, 'calc-favorability', dh + '-' + ds, `A process has ΔH° = ${signed(dh)} kJ/mol and ΔS° = ${signed(ds)} J/mol·K. Which describes its thermodynamic favorability?`,
        [correct, ...options.filter(o => o !== correct)],
        `ΔG° = ΔH° − TΔS°. With ΔH° ${dh < 0 ? '< 0' : '> 0'} and ΔS° ${ds < 0 ? '< 0' : '> 0'}, the process is ${correct.toLowerCase()}.`);
    })
  ]
};

function writtenQuestion(unitNumber, entry, index) {
  const id = 'chem-' + unitNumber + '-written-' + index;
  if (!Array.isArray(entry)) return { ...entry, id, answer: 0, family: entry.family };
  const [family, prompt, correct, a, b, c, explanation] = entry;
  // Concept questions are split into three groups so sets mix in more of them, as on the AP exam.
  const mixFamily = family === 'concept' ? 'concept-' + (index % 3) : family;
  return { id, family: mixFamily, prompt, choices: [correct, a, b, c], answer: 0, explanation };
}

const cache = new Map();

export function chemistryQuestions(unitNumber) {
  if (!cache.has(unitNumber)) {
    const items = (written[unitNumber - 1] ?? []).map((entry, index) => writtenQuestion(unitNumber, entry, index));
    const generated = (generators[unitNumber]?.(unitNumber) ?? []).filter(Boolean);
    const unique = new Map();
    for (const item of [...items, ...generated]) if (!unique.has(item.id)) unique.set(item.id, item);
    cache.set(unitNumber, [...unique.values()]);
  }
  return cache.get(unitNumber);
}
