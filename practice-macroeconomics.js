// Original AP Macroeconomics practice questions, written for Fivey in the style of the AP exam.
// Each unit mixes concept questions, cause-and-effect ("shock") questions, classification questions,
// graph questions, and calculation questions whose wrong answers come from common mistakes.
// Questions are multiple choice with the correct answer listed first; the practice page shuffles the choices.

// Hand-written questions: [family, prompt, correct, wrong, wrong, wrong, explanation] or a graph object.
const written = [
  // Unit 1: Basic Economic Concepts
  [
    ['concept', 'Which situation best illustrates the concept of opportunity cost?', 'A student who spends Saturday studying gives up the wages she could have earned working that day.', 'A store raises the price of a product that is in high demand.', 'A government prints more money to pay for a new program.', 'A firm’s total revenue rises after it lowers its price.', 'Opportunity cost is the value of the next-best alternative given up when a choice is made.'],
    ['concept', 'A production possibilities curve that is bowed outward (concave to the origin) indicates that', 'resources are not equally suited to producing both goods, so opportunity costs increase', 'opportunity costs are constant', 'the economy is not using all of its resources', 'the economy has an absolute advantage in both goods', 'As more of one good is produced, less-suited resources must be used, so each additional unit costs more of the other good.'],
    ['concept', 'A point inside an economy’s production possibilities curve represents', 'unemployment or inefficient use of resources', 'a combination of goods that cannot be produced with current resources', 'efficient use of all resources', 'economic growth', 'The economy could produce more of both goods by putting idle or misused resources to work.'],
    ['concept', 'Which of the following would shift a country’s production possibilities curve outward?', 'An increase in the size and skills of its labor force', 'A decrease in the unemployment rate', 'A shift of resources from producing capital goods to consumer goods', 'A rise in the price level', 'More or better resources increase what the economy can produce; lower unemployment only moves the economy toward its existing curve.'],
    ['compare', 'With the same resources, Country X can produce more of both goods than Country Y. Which statement is correct?', 'Country X has an absolute advantage in both goods, but both countries can still gain from trade based on comparative advantage.', 'Country X has a comparative advantage in both goods.', 'Country Y cannot gain from trade.', 'Trade will benefit only Country X.', 'Comparative advantage depends on opportunity cost, and each country has a lower opportunity cost in at least one good.'],
    ['concept', 'According to the principle of comparative advantage, a country should specialize in the good for which it has', 'the lower opportunity cost', 'the greater total output', 'the higher world price', 'the greatest domestic consumption', 'Specializing where opportunity cost is lowest allows both trading partners to consume beyond their own production possibilities.'],
    ['concept', 'Which of the following causes a movement along the demand curve for pizza rather than a shift of the curve?', 'A decrease in the price of pizza', 'An increase in consumers’ incomes', 'A decrease in the price of hamburgers', 'A change in consumer tastes toward pizza', 'A change in the good’s own price changes the quantity demanded; other factors shift the whole curve.'],
    ['concept', 'A good for which demand decreases when consumers’ incomes rise is', 'an inferior good', 'a normal good', 'a complementary good', 'a substitute good', 'For inferior goods, higher income leads consumers to buy less.'],
    ['concept', 'The government sets a maximum legal rent below the equilibrium rent for apartments. What is the most likely result?', 'A shortage of apartments', 'A surplus of apartments', 'No change in the number of apartments rented', 'An increase in the quantity of apartments supplied', 'A binding price ceiling raises quantity demanded and lowers quantity supplied, creating a shortage.'],
    ['concept', 'A minimum wage set above the equilibrium wage in a labor market is most likely to cause', 'a surplus of labor (unemployment) in that market', 'a shortage of labor in that market', 'no change in employment', 'an increase in the quantity of labor demanded', 'A binding price floor raises the quantity of labor supplied and lowers the quantity demanded.'],
    ['concept', 'Which is one of the three basic questions every economic system must answer?', 'For whom should goods and services be produced?', 'How can scarcity be eliminated?', 'Why do prices change over time?', 'When should the government print money?', 'Every economy must decide what to produce, how to produce it, and for whom.'],
    ['concept', 'In a market economy, what mainly signals producers about which goods to make?', 'Prices determined by supply and demand', 'Production targets set by the central government', 'Tradition and custom', 'Random selection', 'Rising prices signal that consumers want more of a good, drawing resources toward it.'],
    { family: 'graph', context: 'The graph shows an economy’s production possibilities curve.', plot: { type: 'line', xLabel: 'Robots (units)', yLabel: 'Wheat (tons)', x: [0, 10, 20, 30, 40], series: [{ name: 'PPC', values: [100, 96, 86, 66, 36] }] }, prompt: 'What is the opportunity cost of increasing robot production from 20 to 30 units?', choices: ['20 tons of wheat', '10 tons of wheat', '66 tons of wheat', '30 tons of wheat'], explanation: 'Wheat output falls from 86 to 66 tons, so the 10 extra robots cost 20 tons of wheat.' },
    { family: 'graph', context: 'The graph shows the demand and supply of a good.', plot: { type: 'line', xLabel: 'Quantity (units)', yLabel: 'Price ($)', x: [0, 20, 40, 60, 80], series: [{ name: 'Demand', values: [80, 60, 40, 20, 0] }, { name: 'Supply', values: [0, 20, 40, 60, 80] }] }, prompt: 'If the government sets a price ceiling of $30, what results?', choices: ['A shortage of 20 units', 'A surplus of 20 units', 'A shortage of 30 units', 'No shortage or surplus'], explanation: 'At $30, consumers want 50 units but producers supply only 30, a shortage of 20 units.' }
  ],
  // Unit 2: Economic Indicators and the Business Cycle
  [
    ['concept', 'Which of the following is counted in this year’s GDP?', 'The construction of a new home this year', 'The sale of a used car', 'A Social Security payment to a retiree', 'The purchase of shares of stock', 'GDP counts final goods and services produced this year; used goods, transfers, and financial transactions are excluded.'],
    ['concept', 'Why are intermediate goods excluded from GDP?', 'Their value is already included in the price of the final goods, so counting them would double-count output.', 'They are not produced in the current year.', 'They are usually imported.', 'They are paid for by the government.', 'GDP counts only final goods to avoid counting the same production twice.'],
    ['concept', 'A worker who has stopped looking for work because she believes no jobs are available is', 'not counted in the labor force, so the unemployment rate understates joblessness', 'counted as unemployed', 'counted as employed', 'counted as structurally unemployed', 'Discouraged workers are not actively searching, so they are excluded from the labor force.'],
    ['concept', 'When the economy is at full employment, which types of unemployment are present?', 'Frictional and structural unemployment', 'Only cyclical unemployment', 'Cyclical and frictional unemployment', 'No unemployment of any kind', 'Full employment means cyclical unemployment is zero; frictional and structural unemployment remain.'],
    ['concept', 'Who is most likely to be hurt by unexpectedly high inflation?', 'A bank that made fixed-rate loans', 'A borrower with a fixed-rate mortgage', 'A worker whose wages are automatically adjusted for inflation', 'A homeowner whose house rises in value with prices', 'Lenders are repaid with dollars that buy less than expected.'],
    ['concept', 'Why might the consumer price index overstate increases in the cost of living?', 'Consumers switch toward cheaper goods, and improvements in quality are not fully reflected.', 'It includes the prices of capital goods bought by firms.', 'It is calculated only every ten years.', 'It counts the prices of imported goods twice.', 'Substitution bias, quality changes, and new products cause the fixed-basket CPI to overstate inflation.'],
    ['concept', 'Nominal GDP rose 6% while the price level rose 4%. Approximately how much did real GDP change?', 'It rose about 2%.', 'It rose about 10%.', 'It fell about 2%.', 'It rose about 6%.', '%Δ real GDP ≈ %Δ nominal GDP − inflation = 6% − 4% = 2%.'],
    ['concept', 'Which phase of the business cycle is marked by falling real GDP and rising unemployment?', 'Recession (contraction)', 'Expansion', 'Peak', 'Recovery', 'During a contraction, output falls and unemployment rises.'],
    ['concept', 'Which statement about real GDP per capita is most accurate?', 'It is a useful measure of average living standards but ignores income distribution and nonmarket activity.', 'It measures the total output of an economy without adjusting for population.', 'It rises whenever the price level rises.', 'It includes the value of household production and leisure.', 'Per capita GDP averages output across the population but leaves out many factors that affect well-being.'],
    ['concept', 'How does the GDP deflator differ from the consumer price index?', 'The GDP deflator covers all final goods and services produced domestically, while the CPI uses a fixed basket of consumer goods.', 'The GDP deflator measures only the prices of imported goods.', 'The CPI includes investment and government purchases.', 'The two measures are always equal.', 'The deflator reflects everything in GDP; the CPI tracks what typical urban consumers buy, including imports.'],
    ['concept', 'The natural rate of unemployment is best described as', 'the unemployment rate when the economy is producing its full-employment output', 'an unemployment rate of zero', 'the rate of cyclical unemployment', 'the highest unemployment rate during a recession', 'The natural rate includes frictional and structural unemployment but no cyclical unemployment.'],
    ['compare', 'A country’s real GDP grows by 3%, and its population also grows by 3%. What happens to real GDP per capita?', 'It stays about the same.', 'It rises about 3%.', 'It rises about 6%.', 'It falls about 3%.', 'Per capita growth ≈ real GDP growth − population growth = 3% − 3% = 0%.'],
    { family: 'graph', context: 'The graph shows an economy’s real GDP over eight quarters.', plot: { type: 'line', xLabel: 'Quarter', yLabel: 'Real GDP ($ billions)', x: [1, 2, 3, 4, 5, 6, 7, 8], series: [{ name: 'Real GDP', values: [100, 104, 107, 105, 101, 99, 102, 106] }] }, prompt: 'Between which quarters is the economy in a recession (contraction)?', choices: ['Quarters 3 to 6', 'Quarters 1 to 3', 'Quarters 6 to 8', 'Quarters 2 to 4'], explanation: 'Real GDP peaks in quarter 3 and falls to a trough in quarter 6.' },
    { family: 'graph', context: 'The graph shows a country’s consumer price index (base year = 2021).', plot: { type: 'bar', xLabel: 'Year', yLabel: 'CPI', x: ['2021', '2022', '2023', '2024'], series: [{ name: 'CPI', values: [100, 108, 113.4, 117.9] }] }, prompt: 'Between which two consecutive years was the inflation rate highest?', choices: ['2021 to 2022', '2022 to 2023', '2023 to 2024', 'Inflation was the same in every year.'], explanation: 'Inflation was 8.0% from 2021 to 2022, 5.0% from 2022 to 2023, and about 4.0% from 2023 to 2024.' }
  ],
  // Unit 3: National Income and Price Determination
  [
    ['concept', 'Why does the aggregate demand curve slope downward?', 'A lower price level raises real wealth, lowers interest rates, and makes domestic goods cheaper relative to foreign goods.', 'Firms produce more when the price level is higher.', 'Nominal wages are sticky in the short run.', 'The money supply increases as the price level falls.', 'The wealth, interest rate, and exchange rate effects explain the downward slope of AD.'],
    ['concept', 'Why does the short-run aggregate supply curve slope upward?', 'Some input prices, such as nominal wages, adjust slowly, so a higher price level raises profits and output.', 'Consumers buy more when prices are lower.', 'Higher prices reduce real wealth.', 'The economy is always at full employment.', 'With sticky wages, firms earn more per unit when output prices rise, so they produce more.'],
    ['concept', 'The long-run aggregate supply curve is vertical because', 'in the long run, all input prices adjust, so output returns to its full-employment level whatever the price level', 'the price level never changes in the long run', 'aggregate demand has no effect on the price level', 'unemployment is zero in the long run', 'Long-run output is set by resources and technology, not by the price level.'],
    ['concept', 'An economy is producing below its full-employment output. If policymakers take no action, what will happen in the long run?', 'Nominal wages will fall, shifting SRAS to the right until output returns to full employment.', 'Nominal wages will rise, shifting SRAS to the left.', 'Aggregate demand will automatically shift to the right.', 'Long-run aggregate supply will shift left to match current output.', 'Unemployment pushes wages down, lowering costs and moving the economy back to full employment.'],
    ['concept', 'Which combination describes stagflation?', 'A rising price level and falling real output', 'A falling price level and rising real output', 'A rising price level and rising real output', 'A falling price level and falling real output', 'Stagflation usually results from a decrease in SRAS.'],
    ['concept', 'Which is an example of an automatic stabilizer?', 'Unemployment benefits that increase during a recession', 'A new highway program passed by Congress', 'A one-time tax rebate approved during a recession', 'An open-market purchase of bonds by the central bank', 'Automatic stabilizers change with the economy without new legislation.'],
    ['concept', 'Why is the tax multiplier smaller in absolute value than the spending multiplier?', 'Part of a tax cut is saved, so the first round of new spending is smaller than the tax cut.', 'Taxes affect only the price level.', 'Government spending is always larger than taxes.', 'Tax cuts reduce aggregate supply.', 'The tax multiplier is −MPC/(1 − MPC), smaller than 1/(1 − MPC).'],
    ['concept', 'If the government increases spending and taxes by the same amount, what happens to real GDP?', 'It increases by about the amount of the spending increase.', 'It does not change.', 'It decreases.', 'It increases by the spending multiplier times the spending increase.', 'The balanced-budget multiplier is 1.'],
    ['concept', 'Which fiscal policy is appropriate for closing an inflationary gap?', 'Decreasing government spending or increasing taxes', 'Increasing government spending', 'Cutting taxes', 'Buying government bonds', 'Contractionary fiscal policy reduces aggregate demand.'],
    ['concept', 'An increase in the marginal propensity to consume causes the spending multiplier to', 'increase', 'decrease', 'stay the same', 'become negative', 'The multiplier 1/(1 − MPC) rises as MPC rises.'],
    ['concept', 'In the short run, a sharp increase in the price of oil most likely causes', 'the price level to rise and real output to fall', 'the price level to fall and real output to rise', 'both the price level and real output to rise', 'both the price level and real output to fall', 'Higher input costs shift SRAS to the left.'],
    ['concept', 'Why might discretionary fiscal policy take effect slowly?', 'Policy changes must be recognized, debated, and approved by lawmakers before they are carried out.', 'Fiscal policy affects only the money supply.', 'The central bank must approve all fiscal policy.', 'Fiscal policy affects only the long run.', 'Recognition, decision, and implementation lags delay fiscal policy.'],
    { family: 'graph', context: 'The graph shows aggregate demand (AD) and short-run aggregate supply (SRAS) for an economy. Full-employment real GDP is $550 billion.', plot: { type: 'line', xLabel: 'Real GDP ($ billions)', yLabel: 'Price level', x: [400, 450, 500, 550, 600], series: [{ name: 'AD', values: [140, 125, 110, 95, 80] }, { name: 'SRAS', values: [80, 95, 110, 125, 140] }] }, prompt: 'Which statement describes this economy?', choices: ['There is a recessionary gap of $50 billion; short-run equilibrium is at $500 billion and a price level of 110.', 'There is an inflationary gap of $50 billion.', 'The economy is at full employment.', 'There is a recessionary gap of $110 billion.'], explanation: 'AD and SRAS intersect at $500 billion and a price level of 110, which is $50 billion below full employment.' },
    { family: 'graph', context: 'The graph shows a shift in aggregate demand from AD₁ to AD₂ with an unchanged SRAS curve.', plot: { type: 'line', xLabel: 'Real GDP ($ billions)', yLabel: 'Price level', x: [400, 450, 500, 550, 600], series: [{ name: 'AD₁', values: [140, 125, 110, 95, 80] }, { name: 'AD₂', values: [170, 155, 140, 125, 110] }, { name: 'SRAS', values: [80, 95, 110, 125, 140] }] }, prompt: 'What happens in the short run when AD shifts from AD₁ to AD₂?', choices: ['Real GDP rises from $500 billion to $550 billion, and the price level rises from 110 to 125.', 'Real GDP rises to $550 billion, and the price level stays at 110.', 'Real GDP falls to $450 billion, and the price level rises to 125.', 'Real GDP stays at $500 billion, and the price level rises to 140.'], explanation: 'AD₂ crosses SRAS at $550 billion and a price level of 125.' }
  ],
  // Unit 4: Financial Sector
  [
    ['concept', 'A store lists the prices of its products in dollars. Which function of money does this show?', 'Unit of account', 'Medium of exchange', 'Store of value', 'Commodity backing', 'Money serves as a common measure of value.'],
    ['concept', 'When market interest rates rise, what happens to the prices of previously issued bonds?', 'They fall.', 'They rise.', 'They stay the same.', 'They become more liquid.', 'Older bonds pay lower rates than new ones, so their prices must fall to attract buyers.'],
    ['concept', 'If the Federal Reserve wants to increase the money supply through open-market operations, it should', 'buy government bonds', 'sell government bonds', 'raise the required reserve ratio', 'raise the interest rate it pays on reserves', 'Buying bonds adds reserves to the banking system, allowing more lending.'],
    ['concept', 'A person withdraws $500 in cash from her checking account. What happens to M1 immediately?', 'It does not change.', 'It decreases by $500.', 'It increases by $500.', 'It decreases by $500 times the money multiplier.', 'Checkable deposits fall by $500, but currency held by the public rises by $500.'],
    ['concept', 'Why might the actual increase in the money supply be smaller than the money multiplier predicts?', 'Banks may hold excess reserves, and people may hold some money as cash instead of depositing it.', 'The Federal Reserve sets the multiplier to zero.', 'Banks are required to lend all of their reserves.', 'Interest rates are fixed by law.', 'Any leakage out of the deposit-and-loan process reduces money creation.'],
    ['concept', 'In a system with ample reserves, the Federal Reserve’s main tool for influencing the federal funds rate is', 'the interest rate it pays on reserve balances', 'the required reserve ratio', 'printing additional currency', 'changes in income tax rates', 'With ample reserves, the Fed adjusts administered rates such as interest on reserves.'],
    ['concept', 'Which asset is the most liquid?', 'Currency', 'A savings bond', 'A house', 'Shares of stock', 'Currency can be spent immediately without converting it.'],
    ['concept', 'In the money market, an increase in real GDP will cause', 'money demand to increase and the nominal interest rate to rise', 'money demand to decrease and the nominal interest rate to fall', 'the money supply to increase', 'no change in the nominal interest rate', 'More transactions increase the demand for money.'],
    ['concept', 'A bank has no excess reserves. Can it make new loans?', 'Not unless it gains new reserves', 'Yes, up to the amount of its required reserves', 'Yes, up to its total deposits', 'Yes, but only to the government', 'A bank can lend only its excess reserves.'],
    ['concept', 'Which statement about the loanable funds market is correct?', 'Government borrowing to finance a deficit increases the demand for loanable funds and raises the real interest rate.', 'An increase in saving raises the real interest rate.', 'The supply of loanable funds comes mainly from borrowers.', 'Loanable funds determine the nominal interest rate only in the short run.', 'More borrowing shifts demand right, raising the real interest rate.'],
    ['concept', 'Which of the following is a liability on a commercial bank’s balance sheet?', 'Customers’ checkable deposits', 'Loans the bank has made to customers', 'Required reserves', 'Government bonds the bank owns', 'Deposits are owed to customers, so they are liabilities.'],
    ['concept', 'Why does the quantity of money demanded fall when the nominal interest rate rises?', 'The opportunity cost of holding money increases.', 'Prices of goods fall.', 'Banks have fewer reserves.', 'Real GDP decreases.', 'Holding money means giving up interest that could be earned on bonds.'],
    { family: 'graph', context: 'The graph shows the market for loanable funds.', plot: { type: 'line', xLabel: 'Quantity of loanable funds ($ billions)', yLabel: 'Real interest rate (%)', x: [100, 200, 300, 400, 500], series: [{ name: 'Demand', values: [9, 7.5, 6, 4.5, 3] }, { name: 'Supply', values: [3, 4.5, 6, 7.5, 9] }] }, prompt: 'What are the equilibrium real interest rate and quantity of loanable funds?', choices: ['6% and $300 billion', '7.5% and $200 billion', '9% and $500 billion', '4.5% and $400 billion'], explanation: 'Demand and supply cross at a 6% real interest rate and $300 billion.' },
    { family: 'graph', context: 'The graph shows the market price of an existing bond at different market interest rates.', plot: { type: 'line', xLabel: 'Market interest rate (%)', yLabel: 'Bond price ($)', x: [2, 3, 4, 5, 6], series: [{ name: 'Bond price', values: [1250, 1100, 1000, 900, 830] }] }, prompt: 'Which conclusion does the graph support?', choices: ['Bond prices and interest rates move in opposite directions.', 'Bond prices rise when interest rates rise.', 'Bond prices do not depend on interest rates.', 'Interest rates rise when the money supply increases.'], explanation: 'As market interest rates rise, the price of an existing bond falls.' }
  ],
  // Unit 5: Long-Run Consequences of Stabilization Policies
  [
    ['concept', 'The long-run Phillips curve is vertical at', 'the natural rate of unemployment', 'an inflation rate of zero', 'an unemployment rate of zero', 'the current unemployment rate', 'In the long run, there is no tradeoff between inflation and unemployment.'],
    ['concept', 'According to the quantity theory of money, if velocity and real output are constant, a 5% increase in the money supply causes', 'about a 5% increase in the price level', 'about a 5% increase in real output', 'about a 5% decrease in the price level', 'no change in the price level', 'MV = PY: with V and Y fixed, P changes in proportion to M.'],
    ['concept', 'Crowding out occurs when', 'government borrowing raises real interest rates and reduces private investment', 'the central bank buys government bonds', 'tax cuts increase consumption', 'imports replace domestic goods', 'Deficit spending increases the demand for loanable funds, pushing up interest rates.'],
    ['concept', 'Which policy is most likely to increase long-run economic growth?', 'Subsidies for education and job training that increase human capital', 'A temporary tax rebate', 'A one-time increase in the money supply', 'Higher tariffs on imported capital equipment', 'Growth depends on productivity, which rises with human capital, physical capital, and technology.'],
    ['concept', 'An increase in expected inflation causes the short-run Phillips curve to', 'shift to the right (upward)', 'shift to the left (downward)', 'become vertical', 'stay in the same place', 'Workers and firms build expected inflation into wages and prices.'],
    ['concept', 'A government’s national debt is best described as', 'the total amount the government owes from past borrowing', 'the gap between spending and tax revenue in a single year', 'the total amount citizens owe to banks', 'the value of a country’s imports minus its exports', 'Each year’s deficit adds to the debt.'],
    ['concept', 'Persistent budget deficits can slow long-run growth because', 'higher real interest rates reduce investment in physical capital', 'they always cause deflation', 'they reduce the money supply', 'they increase the natural rate of unemployment immediately', 'Less investment means slower growth of the capital stock.'],
    ['concept', 'In the long run, what is the effect of expansionary monetary policy on real output?', 'Real output returns to its full-employment level, and only the price level is higher.', 'Real output stays permanently higher.', 'Real output falls below full employment.', 'Both real output and the price level return to their original levels.', 'Money is neutral in the long run.'],
    ['concept', 'Which of the following would shift the long-run aggregate supply curve to the right?', 'An improvement in production technology', 'An increase in the money supply', 'A decrease in government spending', 'An increase in consumer confidence', 'Technology raises the economy’s productive capacity.'],
    ['concept', 'A movement up and to the left along a short-run Phillips curve represents', 'lower unemployment and higher inflation, usually caused by an increase in aggregate demand', 'higher unemployment and higher inflation', 'a negative supply shock', 'an increase in the natural rate of unemployment', 'An AD increase raises output and prices, lowering unemployment and raising inflation.'],
    ['concept', 'Hyperinflation is most often caused by', 'rapid growth in the money supply, often to finance government spending', 'a decrease in the money supply', 'a rise in productivity', 'falling government spending', 'Printing money faster than output grows drives prices up rapidly.'],
    ['concept', 'Supply-side economists argue that lower marginal tax rates will', 'increase incentives to work, save, and invest, shifting LRAS to the right', 'reduce aggregate demand', 'shift LRAS to the left', 'have no effect on output', 'Better incentives can raise productive capacity.'],
    { family: 'graph', context: 'The graph shows an economy’s short-run Phillips curve.', plot: { type: 'line', xLabel: 'Unemployment rate (%)', yLabel: 'Inflation rate (%)', x: [2, 3, 4, 5, 6, 7, 8], series: [{ name: 'SRPC', values: [9, 7, 5.5, 4, 3, 2.2, 1.5] }] }, prompt: 'If the economy moves along this curve from 6% to 4% unemployment, what happens to inflation?', choices: ['It rises from 3% to 5.5%.', 'It falls from 5.5% to 3%.', 'It stays at 4%.', 'It rises from 4% to 9%.'], explanation: 'Read the curve: 6% unemployment matches 3% inflation, and 4% unemployment matches 5.5%.' },
    { family: 'graph', context: 'The graph shows real GDP per capita for two countries that start at the same level.', plot: { type: 'line', xLabel: 'Years', yLabel: 'Real GDP per capita ($ thousands)', x: [0, 7, 14, 21, 28, 35], series: [{ name: 'Country A', values: [10, 11.5, 13.2, 15.2, 17.5, 20.1] }, { name: 'Country B', values: [10, 13.2, 17.4, 22.9, 30.3, 40] }] }, prompt: 'Country B grows about 4% per year. Using the rule of 70, about how often does its real GDP per capita double?', choices: ['About every 17.5 years', 'About every 35 years', 'About every 7 years', 'About every 4 years'], explanation: 'Doubling time ≈ 70 ÷ 4 = 17.5 years; the graph shows B doubling from 10 to 20 in about 17–18 years.' }
  ],
  // Unit 6: Open Economy—International Trade and Finance
  [
    ['concept', 'If the U.S. dollar appreciates against the euro, what tends to happen?', 'U.S. exports become more expensive for Europeans, and U.S. net exports fall.', 'U.S. exports become cheaper for Europeans.', 'U.S. imports from Europe become more expensive.', 'U.S. net exports rise.', 'A stronger dollar makes U.S. goods costlier abroad and foreign goods cheaper in the U.S.'],
    ['concept', 'The current account of the balance of payments includes', 'trade in goods and services, investment income, and transfer payments', 'purchases of foreign stocks and bonds', 'foreign direct investment only', 'changes in the central bank’s gold holdings only', 'Asset purchases are recorded in the financial account.'],
    ['concept', 'If a country has a current account deficit and its official reserves do not change, its financial account must show', 'a surplus of equal size', 'a deficit of equal size', 'a balance of zero', 'a surplus twice as large', 'The balance of payments sums to zero.'],
    ['concept', 'Higher real interest rates in the United States relative to other countries will most likely', 'increase foreign demand for U.S. financial assets and cause the dollar to appreciate', 'cause the dollar to depreciate', 'reduce foreign demand for U.S. assets', 'have no effect on exchange rates', 'Investors move funds to where returns are higher, increasing demand for dollars.'],
    ['concept', 'A tariff on imported steel is most likely to', 'raise the domestic price of steel, helping domestic steel producers and hurting steel users', 'lower the domestic price of steel', 'increase steel imports', 'help steel users and hurt steel producers', 'A tariff is a tax on imports that raises prices and protects domestic producers.'],
    ['concept', 'Who demands U.S. dollars in the foreign exchange market?', 'Foreigners who want to buy U.S. goods, services, or assets', 'Americans who want to buy foreign goods', 'Americans traveling abroad', 'U.S. firms investing in other countries', 'To buy U.S. products or assets, foreigners need dollars.'],
    ['concept', 'Under a fixed exchange rate, how could a country keep its currency from depreciating?', 'Use its reserves of foreign currency to buy its own currency', 'Sell its own currency on the foreign exchange market', 'Lower its interest rates', 'Increase its money supply', 'Buying its own currency increases demand for it and supports its value.'],
    ['concept', 'Which would increase the supply of U.S. dollars in the foreign exchange market?', 'Americans buying more imported goods', 'Foreign tourists visiting the United States', 'Foreigners buying U.S. government bonds', 'Higher U.S. interest rates', 'Americans supply dollars when they exchange them for foreign currency.'],
    ['concept', 'How does an import quota differ from a tariff?', 'A quota limits the quantity of a good that can be imported.', 'A quota is a tax on each imported unit.', 'A quota lowers the domestic price of the good.', 'A quota raises tax revenue for the government.', 'Quotas restrict quantity directly, while tariffs tax imports.'],
    ['concept', 'In an open economy with flexible exchange rates, expansionary monetary policy tends to', 'lower interest rates, depreciate the currency, and increase net exports', 'raise interest rates and appreciate the currency', 'reduce net exports', 'have no effect on the exchange rate', 'Lower interest rates reduce demand for the country’s assets, weakening its currency.'],
    ['concept', 'When the euro depreciates relative to the dollar, a European traveler visiting the United States finds that', 'U.S. goods and hotel stays cost more in euros', 'U.S. goods cost fewer euros', 'prices in euros do not change', 'U.S. prices in dollars have fallen', 'Each euro buys fewer dollars, so U.S. goods cost more euros.'],
    ['concept', 'If a country’s exports of goods and services exceed its imports, it has', 'a trade surplus', 'a trade deficit', 'a budget surplus', 'a financial account surplus', 'Net exports are positive.'],
    { family: 'graph', context: 'The graph shows the foreign exchange market for U.S. dollars, priced in euros.', plot: { type: 'line', xLabel: 'Quantity of dollars (billions)', yLabel: 'Euros per dollar', x: [100, 200, 300, 400, 500], series: [{ name: 'Demand for dollars', values: [1.2, 1.1, 1, 0.9, 0.8] }, { name: 'Supply of dollars', values: [0.8, 0.9, 1, 1.1, 1.2] }] }, prompt: 'What is the equilibrium exchange rate?', choices: ['1.0 euro per dollar', '1.2 euros per dollar', '0.8 euro per dollar', '300 euros per dollar'], explanation: 'Demand and supply for dollars cross at 1.0 euro per dollar.' },
    { family: 'graph', context: 'The graph shows a country’s current account components ($ billions).', plot: { type: 'bar', xLabel: 'Component', yLabel: 'Balance ($ billions)', x: ['Goods', 'Services', 'Income', 'Transfers'], series: [{ name: 'Balance', values: [-80, 30, 15, -10] }] }, prompt: 'What is the country’s current account balance?', choices: ['−$45 billion', '−$80 billion', '+$45 billion', '−$135 billion'], explanation: 'Current account = −80 + 30 + 15 − 10 = −$45 billion.' }
  ]
];

// ---------- Helpers ----------

const SUP = '⁻⁰¹²³⁴⁵⁶⁷⁸⁹';
const sup = text => String(text).replace(/[-0-9]/g, ch => SUP['-0123456789'.indexOf(ch)]);

// Three significant figures, using scientific notation only for very large or small values.
function num(value, digits = 3) {
  if (!Number.isFinite(value)) return 'NaN';
  if (Math.abs(value) < 1e-12) return '0';
  const abs = Math.abs(value);
  let text;
  if (abs >= 1e7 || abs < 1e-3) {
    const [mantissa, exponent] = value.toExponential(digits - 1).split('e');
    text = mantissa + ' × 10' + sup(Number(exponent));
  } else {
    text = abs >= 10 ** digits ? Number(value.toPrecision(digits)).toLocaleString('en-US') : value.toPrecision(digits);
    if (/e/.test(text)) text = Number(text).toLocaleString('en-US');
  }
  return text.replace(/^-/, '−');
}

// Plain numbers with at most two decimals: 2.5, 1,200, 0.75.
const plain = value => Number(value.toFixed(2)).toLocaleString('en-US', { maximumFractionDigits: 2 }).replace(/^-/, '−');
const dollars = value => (value < 0 ? '−$' : '$') + plain(Math.abs(value));
const billions = value => dollars(value) + ' billion';
const millions = value => dollars(value) + ' million';
const pct = (value, places = 1) => (Math.abs(value) < 1e-9 ? 0 : value).toFixed(places).replace(/^-/, '−') + '%';
const cap = text => text[0].toUpperCase() + text.slice(1);
const word = direction => (direction > 0 ? 'increases' : 'decreases');
// Plural subjects such as "net exports" take "increase"/"decrease".
const verb = (subject, direction) => (/(exports|inflows)$/.test(subject) ? (direction > 0 ? 'increase' : 'decrease') : word(direction));
const signed = value => (value < 0 ? '− ' + plain(-value) : '+ ' + plain(value));

// The four "increase/decrease" combinations for two variables, correct one first.
function pair(first, second, a, b) {
  return [[a, b], [a, -b], [-a, b], [-a, -b]].map(([x, y]) => `${cap(first)} ${verb(first, x)}, and ${second} ${verb(second, y)}.`);
}

// All combinations of the given lists, in order.
const product = (...lists) => lists.reduce((rows, list) => rows.flatMap(row => list.map(item => [...row, item])), [[]]);
const each = (lists, build) => product(...lists).map(values => build(...values, values.join('_')));

// Three different wrong options from a pool, chosen by position so the set stays stable.
function others(pool, correct, index) {
  const rest = pool.filter(item => item !== correct);
  return [0, 1, 2].map(step => rest[(index + step) % rest.length]);
}

// The correct value followed by the first three distinct wrong values from a list of likely mistakes.
function options(correct, candidates, format) {
  const out = [format(correct)];
  for (const value of [...candidates, correct * 2, correct / 2, correct * 4, correct / 4]) {
    if (typeof value === 'number' && !Number.isFinite(value)) continue;
    const text = format(value);
    if (out.includes(text) || /NaN/.test(text)) continue;
    out.push(text);
    if (out.length === 4) break;
  }
  return out;
}

// Builds one question; returns null unless there are four distinct choices.
function make(n, family, key, prompt, choices, explanation, extra = {}) {
  if (choices.length !== 4 || new Set(choices).size !== 4 || choices.some(choice => /NaN|Infinity|undefined/.test(choice))) return null;
  return { id: 'macro-' + n + '-' + family + '-' + key, family, prompt, choices, answer: 0, explanation, ...extra };
}

// ---------- Scenario lists ----------

// Unit 1: markets with a substitute, a complement, and an input.
const markets = [
  ['coffee', 'tea', 'cream', 'coffee beans'],
  ['bicycles', 'electric scooters', 'bike helmets', 'aluminum'],
  ['movie theater tickets', 'streaming subscriptions', 'theater popcorn', 'projection equipment'],
  ['tennis rackets', 'pickleball paddles', 'tennis balls', 'graphite'],
  ['peanut butter', 'almond butter', 'jelly', 'peanuts'],
  ['home printers', 'print shop services', 'ink cartridges', 'computer chips']
];

const marketEvents = [
  [(m, s) => `The price of ${s}, a substitute for ${m}, rises.`, 'demand', 1],
  [(m, s) => `The price of ${s}, a substitute for ${m}, falls.`, 'demand', -1],
  [(m, s, c) => `The price of ${c}, a complement to ${m}, rises.`, 'demand', -1],
  [(m, s, c) => `The price of ${c}, a complement to ${m}, falls.`, 'demand', 1],
  [(m, s, c, i) => `The price of ${i}, an input used to produce ${m}, rises.`, 'supply', -1],
  [(m, s, c, i) => `The price of ${i}, an input used to produce ${m}, falls.`, 'supply', 1],
  [m => `A new technology lowers the cost of producing ${m}.`, 'supply', 1],
  [m => `The government places a per-unit tax on producers of ${m}.`, 'supply', -1],
  [m => `Consumers’ incomes rise, and ${m} is a normal good.`, 'demand', 1],
  [m => `Several firms that produce ${m} leave the market.`, 'supply', -1]
];

const doubleOutcomes = {
  'q+': 'The equilibrium quantity increases, but the change in the equilibrium price is indeterminate.',
  'q-': 'The equilibrium quantity decreases, but the change in the equilibrium price is indeterminate.',
  'p+': 'The equilibrium price increases, but the change in the equilibrium quantity is indeterminate.',
  'p-': 'The equilibrium price decreases, but the change in the equilibrium quantity is indeterminate.',
  'both+': 'Both the equilibrium price and the equilibrium quantity increase.',
  'both-': 'Both the equilibrium price and the equilibrium quantity decrease.'
};

// [good 1 (plural), good 2 (plural), good 2 (singular), Avalon output of good 1, of good 2, Brava output of good 1, of good 2]
const tradePairs = [
  ['bushels of wheat', 'bolts of cloth', 'bolt of cloth', 20, 10, 15, 5],
  ['cars', 'computers', 'computer', 6, 12, 4, 4],
  ['tons of rice', 'tons of steel', 'ton of steel', 30, 10, 24, 12],
  ['bags of coffee', 'phones', 'phone', 40, 8, 30, 10],
  ['tables', 'chairs', 'chair', 8, 24, 6, 12],
  ['bushels of corn', 'bushels of soybeans', 'bushel of soybeans', 50, 25, 40, 40],
  ['shirts', 'pairs of shoes', 'pair of shoes', 60, 20, 30, 15],
  ['tons of fish', 'tons of lumber', 'ton of lumber', 18, 6, 10, 5],
  ['bikes', 'scooters', 'scooter', 12, 4, 9, 6],
  ['crates of apples', 'crates of oranges', 'crate of oranges', 36, 12, 20, 10],
  ['radios', 'watches', 'watch', 10, 5, 12, 3],
  ['barrels of oil', 'tons of grain', 'ton of grain', 16, 8, 9, 3],
  ['laptops', 'tablets', 'tablet', 5, 10, 4, 12],
  ['pounds of cheese', 'gallons of juice', 'gallon of juice', 30, 15, 25, 5],
  ['meters of fabric', 'pairs of boots', 'pair of boots', 40, 10, 36, 12],
  ['solar panels', 'batteries', 'battery', 14, 7, 6, 6]
];

// Unit 2
const gdpCategories = ['Counted as consumption', 'Counted as investment', 'Counted as government purchases', 'Counted as net exports (exports)', 'Not counted in GDP'];
const gdpItems = [
  ['A family buys a newly built house.', 1, 'Purchases of new homes are counted as residential investment.'],
  ['A family buys a new car made in the United States.', 0, 'Household purchases of new final goods are consumption.'],
  ['A business buys new computers for its offices.', 1, 'Business purchases of capital equipment are investment.'],
  ['A firm’s inventory of unsold goods increases this year.', 1, 'Additions to inventories count as investment.'],
  ['The federal government pays a soldier’s salary.', 2, 'Payments for government employees’ services are government purchases.'],
  ['A city builds a new bridge.', 2, 'Government spending on public projects is a government purchase.'],
  ['The government sends Social Security checks to retirees.', 4, 'Transfer payments are not payments for current production.'],
  ['A person buys 100 shares of stock.', 4, 'Buying stock is a financial transaction, not production.'],
  ['A used car is sold to a neighbor.', 4, 'The car was counted in GDP when it was first produced.'],
  ['A bakery buys flour to make the bread it sells.', 4, 'Flour is an intermediate good; its value is included in the bread.'],
  ['A Japanese tourist pays for a hotel stay in Miami.', 3, 'Spending by foreigners on U.S. services counts as exports.'],
  ['A parent stays home to care for a child.', 4, 'Unpaid household work is not a market transaction.'],
  ['A patient pays a dentist for a checkup.', 0, 'Household purchases of services are consumption.'],
  ['A state government hires new teachers.', 2, 'Government payments for teachers’ services are government purchases.'],
  ['A U.S. company sells airplanes to an airline in France.', 3, 'U.S.-produced goods sold to foreigners are exports.'],
  ['A homeowner mows his own lawn.', 4, 'Nonmarket production is not counted.'],
  ['A student pays college tuition.', 0, 'Education services bought by households are consumption.'],
  ['A business builds a new factory.', 1, 'New structures built by firms are investment.'],
  ['A person buys a government savings bond.', 4, 'Buying a bond is a financial transaction.'],
  ['A software company in Texas sells a program license to a firm in Brazil.', 3, 'Sales of U.S. services to foreigners are exports.']
];

const unemploymentTypes = ['Frictional', 'Structural', 'Cyclical', 'Seasonal'];
const unemploymentCases = [
  ['A software developer quits her job to search for a better-paying one in another city.', 0, 'She is between jobs while searching, which is frictional unemployment.'],
  ['A recent college graduate is searching for his first full-time job.', 0, 'New entrants searching for work are frictionally unemployed.'],
  ['Factory workers lose their jobs after robots take over their tasks.', 1, 'Their skills no longer match available jobs because of a change in technology.'],
  ['Coal miners lose their jobs as power plants switch to natural gas, and their skills do not match the open jobs nearby.', 1, 'A permanent shift in the economy left a skills mismatch.'],
  ['Construction workers are laid off during a recession.', 2, 'Job losses caused by a downturn in the business cycle are cyclical.'],
  ['Auto workers lose their jobs as car sales fall during an economic downturn.', 2, 'Falling aggregate demand causes cyclical unemployment.'],
  ['Lifeguards are out of work after summer ends.', 3, 'Unemployment that follows a predictable pattern each year is seasonal.'],
  ['Retail workers hired for the holidays are let go in January.', 3, 'Holiday hiring and layoffs follow the calendar.'],
  ['A nurse moves to a new state with her spouse and is looking for a hospital job.', 0, 'She is searching for a job that matches her skills, which is frictional.'],
  ['Travel agents lose their jobs as consumers book trips online.', 1, 'A lasting change in the economy eliminated demand for their skills.'],
  ['Restaurant workers are laid off when a fall in aggregate demand reduces spending throughout the economy.', 2, 'Unemployment caused by a fall in aggregate demand is cyclical.'],
  ['Ski instructors are unemployed during the summer months.', 3, 'Their work depends on the season.'],
  ['Typesetters lose their jobs because publishing has become digital.', 1, 'Technological change made their skills obsolete.'],
  ['A worker leaves her job to find one closer to home.', 0, 'Voluntary job searching is frictional unemployment.'],
  ['Home builders lose work as rising unemployment and falling incomes cut housing demand during a recession.', 2, 'The job losses come from the downturn in the business cycle.']
];

// Unit 3: [event, curve, direction]
const adasEvents = [
  ['Consumer confidence rises sharply.', 'AD', 1],
  ['The government increases spending on highways and bridges.', 'AD', 1],
  ['The government cuts personal income taxes.', 'AD', 1],
  ['Businesses become optimistic and increase investment spending.', 'AD', 1],
  ['Household wealth rises because stock prices increase.', 'AD', 1],
  ['Incomes abroad rise, increasing demand for the country’s exports.', 'AD', 1],
  ['The central bank buys government bonds on the open market.', 'AD', 1],
  ['The country’s currency depreciates, making its exports cheaper abroad.', 'AD', 1],
  ['Consumers become pessimistic about their future incomes.', 'AD', -1],
  ['The government reduces military spending.', 'AD', -1],
  ['The government raises personal income taxes.', 'AD', -1],
  ['The central bank sells government bonds on the open market.', 'AD', -1],
  ['A recession abroad reduces demand for the country’s exports.', 'AD', -1],
  ['Household wealth falls because home prices decline.', 'AD', -1],
  ['The prices of key raw materials, such as oil, fall.', 'SRAS', 1],
  ['Nominal wages fall throughout the economy.', 'SRAS', 1],
  ['A new technology lowers production costs for most firms.', 'SRAS', 1],
  ['The price of oil rises sharply.', 'SRAS', -1],
  ['Nominal wages rise throughout the economy.', 'SRAS', -1],
  ['A severe drought destroys a large share of the country’s crops.', 'SRAS', -1],
  ['A natural disaster damages factories and transportation networks.', 'SRAS', -1]
];
const curveChoices = { 'AD+': 'Aggregate demand shifts to the right.', 'AD-': 'Aggregate demand shifts to the left.', 'SRAS+': 'Short-run aggregate supply shifts to the right.', 'SRAS-': 'Short-run aggregate supply shifts to the left.' };
const spendingSources = ['government spending', 'investment spending', 'export spending', 'consumer spending'];

// Unit 4: [action, sign (+1 expansionary), uses interest on reserves]
const fedActions = [
  ['The Federal Reserve buys government bonds on the open market.', 1, false],
  ['The Federal Reserve sells government bonds on the open market.', -1, false],
  ['The Federal Reserve lowers the discount rate.', 1, false],
  ['The Federal Reserve raises the discount rate.', -1, false],
  ['The Federal Reserve lowers the required reserve ratio.', 1, false],
  ['The Federal Reserve raises the required reserve ratio.', -1, false],
  ['The Federal Reserve lowers the interest rate it pays on reserve balances.', 1, true],
  ['The Federal Reserve raises the interest rate it pays on reserve balances.', -1, true]
];
const moneyDemandEvents = [
  ['The price level rises.', 1, 'A higher price level means people need more money for transactions.'],
  ['Real GDP increases.', 1, 'More output and income increase the transactions demand for money.'],
  ['The price level falls.', -1, 'Lower prices mean people need less money for transactions.'],
  ['Real GDP decreases during a recession.', -1, 'Fewer transactions reduce the demand for money.'],
  ['Households decide to hold more cash because they worry about the safety of financial assets.', 1, 'A desire to hold more money shifts money demand to the right.'],
  ['New payment apps let people keep more wealth in interest-earning accounts instead of cash.', -1, 'People choose to hold less money at every interest rate.']
];
const moneyMarketChoices = {
  '1': 'The nominal interest rate rises, and the quantity of money stays the same.',
  '-1': 'The nominal interest rate falls, and the quantity of money stays the same.',
  'up-up': 'The nominal interest rate rises, and the quantity of money increases.',
  'down-down': 'The nominal interest rate falls, and the quantity of money decreases.'
};
const loanableEvents = [
  ['The government’s budget deficit increases.', 'demand', 1],
  ['The government’s budget deficit shrinks and turns into a surplus.', 'demand', -1],
  ['Households decide to save a larger share of their income.', 'supply', 1],
  ['Households decide to save a smaller share of their income.', 'supply', -1],
  ['An investment tax credit makes new business projects more profitable.', 'demand', 1],
  ['Businesses become pessimistic and cancel planned investment projects.', 'demand', -1],
  ['Foreign investors send more financial capital into the country.', 'supply', 1],
  ['Financial capital flows out of the country to seek higher returns abroad.', 'supply', -1]
];
const loanableCurves = { 'demand+': 'The demand for loanable funds increases.', 'demand-': 'The demand for loanable funds decreases.', 'supply+': 'The supply of loanable funds increases.', 'supply-': 'The supply of loanable funds decreases.' };
const moneyMeasures = ['Part of M1 (and therefore M2)', 'Part of M2 but not M1', 'Part of neither M1 nor M2', 'Part of M1 but not M2'];
const moneyItems = [
  ['Paper currency and coins held by the public', 0, 'Currency in circulation is part of M1.'],
  ['The balance in a person’s checking account', 0, 'Checkable deposits are part of M1.'],
  ['A $5,000 certificate of deposit (small time deposit)', 1, 'Small time deposits are in M2 but not M1.'],
  ['Shares in a retail money market mutual fund', 1, 'Retail money market funds are counted in M2 only.'],
  ['Shares of corporate stock', 2, 'Stocks are financial assets, not money.'],
  ['A government bond held by a household', 2, 'Bonds are not part of the money supply.'],
  ['The unused credit limit on a credit card', 2, 'Credit is a loan, not money.'],
  ['Currency stored in a bank’s vault', 2, 'Vault cash is a bank reserve, not money held by the public.']
];

// Unit 5
const phillipsEvents = [
  ['Aggregate demand increases.', 'up', 'Movement up along the SRPC: inflation rises and unemployment falls.'],
  ['Aggregate demand decreases.', 'down', 'Movement down along the SRPC: inflation falls and unemployment rises.'],
  ['The government increases spending during a period of slack.', 'up', 'Higher AD moves the economy up along the SRPC.'],
  ['The central bank sells bonds to fight inflation.', 'down', 'Lower AD moves the economy down along the SRPC.'],
  ['A sharp increase in oil prices reduces short-run aggregate supply.', 'right', 'A negative supply shock shifts the SRPC to the right.'],
  ['Lower energy prices increase short-run aggregate supply.', 'left', 'A positive supply shock shifts the SRPC to the left.'],
  ['Workers and firms come to expect higher inflation.', 'right', 'Higher expected inflation shifts the SRPC to the right.'],
  ['Workers and firms come to expect lower inflation.', 'left', 'Lower expected inflation shifts the SRPC to the left.']
];
const phillipsMoves = { up: 'Movement up along the short-run Phillips curve', down: 'Movement down along the short-run Phillips curve', right: 'The short-run Phillips curve shifts to the right', left: 'The short-run Phillips curve shifts to the left' };
const phillipsEffects = { up: [1, -1], down: [-1, 1], right: [1, 1], left: [-1, -1] };

// Unit 6: [event, effect on the dollar, curve that shifts or null, effect on U.S. net exports or null]
const forexEvents = [
  ['U.S. real interest rates rise relative to interest rates in Europe.', 1, 'demand+', -1],
  ['U.S. real interest rates fall relative to interest rates in Europe.', -1, null, 1],
  ['European consumers develop a strong preference for U.S.-made products.', 1, 'demand+', null],
  ['Incomes in the United States rise, and Americans buy more European goods.', -1, 'supply+', null],
  ['Incomes in Europe rise, and Europeans buy more U.S. goods.', 1, 'demand+', null],
  ['The inflation rate in the United States rises relative to Europe’s.', -1, null, null],
  ['American tourists travel to Europe in record numbers.', -1, 'supply+', null],
  ['European investors buy more U.S. stocks and government bonds.', 1, 'demand+', -1],
  ['U.S. firms build more factories in Europe.', -1, 'supply+', 1],
  ['The Federal Reserve sells government bonds to fight inflation.', 1, 'demand+', -1],
  ['The Federal Reserve buys government bonds to fight a recession.', -1, null, 1],
  ['Larger U.S. budget deficits raise U.S. real interest rates.', 1, 'demand+', -1]
];
const forexCurves = { 'demand+': 'The demand for dollars increases.', 'demand-': 'The demand for dollars decreases.', 'supply+': 'The supply of dollars increases.', 'supply-': 'The supply of dollars decreases.' };
const bopCategories = ['Current account (credit)', 'Current account (debit)', 'Financial account (credit, an inflow)', 'Financial account (debit, an outflow)'];
const bopItems = [
  ['A U.S. firm exports wheat to Egypt.', 0, 'Exports of goods are current account credits.'],
  ['A U.S. consumer buys a car imported from Germany.', 1, 'Imports of goods are current account debits.'],
  ['A Japanese investor buys U.S. Treasury bonds.', 2, 'Foreign purchases of U.S. assets are financial account inflows.'],
  ['A U.S. company builds a factory in Mexico.', 3, 'U.S. purchases of foreign assets are financial account outflows.'],
  ['An American buys shares of a British company.', 3, 'Buying foreign assets is a financial account outflow.'],
  ['A worker in the U.S. sends money to family abroad.', 1, 'Transfers paid abroad are current account debits.'],
  ['Foreign tourists pay for hotel stays in New York.', 0, 'Services sold to foreigners are current account credits.'],
  ['Americans receive dividends from shares they own in foreign companies.', 0, 'Investment income received is a current account credit.'],
  ['A Canadian firm buys a U.S. company.', 2, 'Foreign purchases of U.S. businesses are financial account inflows.'],
  ['The U.S. pays interest to foreign holders of U.S. bonds.', 1, 'Investment income paid abroad is a current account debit.'],
  ['A U.S. company pays a firm in India for software services.', 1, 'Imports of services are current account debits.'],
  ['A foreign government buys office buildings in Chicago.', 2, 'Foreign purchases of U.S. real estate are financial account inflows.']
];
const currencies = [
  ['euro', 'euros', 0.9, [45, 180, 900, 2700]],
  ['yen', 'yen', 150, [3000, 18000, 75000, 450000]],
  ['peso', 'pesos', 18, [360, 1800, 9000, 27000]],
  ['Canadian dollar', 'Canadian dollars', 1.35, [27, 135, 540, 2025]]
];
const capitalCountries = [['Canada', 'Canadian dollar'], ['Japan', 'yen'], ['Mexico', 'peso'], ['the United Kingdom', 'pound'], ['Switzerland', 'Swiss franc'], ['Australia', 'Australian dollar'], ['India', 'rupee'], ['Brazil', 'real']];

// ---------- Generated questions by unit ----------

const generators = {
  // Unit 1: Basic Economic Concepts
  1: n => [
    ...tradePairs.flatMap(([good1, good2, one2, a1, a2, b1, b2], index) => {
      const ocA = a1 / a2;
      const ocB = b1 / b2;
      const setup = `In one hour, a worker in Avalon can produce ${a1} ${good1} or ${a2} ${good2}. A worker in Brava can produce ${b1} ${good1} or ${b2} ${good2}.`;
      const avalonCheaper = ocA < ocB;
      const low = Math.min(ocA, ocB);
      const high = Math.max(ocA, ocB);
      const mid = Number(((low + high) / 2).toFixed(2));
      const terms = value => `1 ${one2} for ${plain(value)} ${good1}`;
      return [
        make(n, 'calc-opportunity-cost', String(index), `${setup} What is Avalon’s opportunity cost of producing one more ${one2}?`,
          options(ocA, [a2 / a1, ocB, b2 / b1, a1], value => `${plain(value)} ${good1}`),
          `Avalon gives up ${a1} ${good1} to make ${a2} ${good2}, so each ${one2} costs ${a1} ÷ ${a2} = ${plain(ocA)} ${good1}.`),
        make(n, 'reason-comparative-advantage', String(index), `${setup} Which statement is correct?`,
          [`${avalonCheaper ? 'Avalon' : 'Brava'} has the comparative advantage in ${good2}.`, `${avalonCheaper ? 'Brava' : 'Avalon'} has the comparative advantage in ${good2}.`, `${a1 >= b1 && a2 >= b2 ? 'Avalon' : 'Brava'} has the comparative advantage in both goods.`, 'Neither country has a comparative advantage.'],
          `Opportunity cost of one ${one2}: Avalon ${plain(ocA)}, Brava ${plain(ocB)} ${good1}. The lower opportunity cost means comparative advantage; no country can have it in both goods.`),
        make(n, 'calc-terms-of-trade', String(index), `${setup} Which terms of trade would benefit both countries?`,
          [terms(mid), terms(plain(low / 2) === '1' ? low * 0.75 : low / 2), terms(high * 1.5), terms(high * 2.5)],
          `Mutually beneficial terms lie between the two opportunity costs (${plain(low)} and ${plain(high)} ${good1} per ${one2}).`)
      ];
    }),
    ...markets.flatMap(([market, substitute, complement, input], m) => marketEvents.map(([text, curve, direction], e) => {
      const price = curve === 'demand' ? direction : -direction;
      const quantity = direction;
      return make(n, 'reason-market-shock', m + '_' + e, `${text(market, substitute, complement, input)} What happens to the equilibrium price and quantity of ${market}?`,
        pair('the equilibrium price', 'the equilibrium quantity', price, quantity),
        `${cap(curve)} ${direction > 0 ? 'increases' : 'decreases'} (the ${curve} curve shifts ${direction > 0 ? 'right' : 'left'}), so price ${word(price)} and quantity ${word(quantity)}.`);
    })),
    ...markets.flatMap(([market, substitute, complement, input], m) => [[1, 1], [1, -1], [-1, 1], [-1, -1]].map(([d, s]) => {
      const demandText = d > 0 ? `the price of ${substitute}, a substitute, rises` : `the price of ${complement}, a complement, rises`;
      const supplyText = s > 0 ? `a new technology lowers production costs` : `the price of ${input}, an input, rises`;
      const key = d === s ? (d > 0 ? 'q+' : 'q-') : (d > 0 ? 'p+' : 'p-');
      const pool = Object.keys(doubleOutcomes);
      return make(n, 'reason-double-shift', m + '_' + d + '_' + s, `In the market for ${market}, ${demandText}, and at the same time ${supplyText}. What happens in this market?`,
        [doubleOutcomes[key], ...others(pool, key, m).map(k => doubleOutcomes[k])],
        `Demand ${d > 0 ? 'increases' : 'decreases'} and supply ${s > 0 ? 'increases' : 'decreases'}. ${key.startsWith('q') ? 'Both shifts move quantity the same way, but their effects on price conflict.' : 'Both shifts move price the same way, but their effects on quantity conflict.'}`);
    })),
    ...[60, 80, 100, 120].flatMap(top => {
      const eq = top / 2;
      const x = [0, top / 4, top / 2, (3 * top) / 4, top];
      const plot = { type: 'line', xLabel: 'Quantity (units)', yLabel: 'Price ($)', x, series: [{ name: 'Demand', values: x.map(q => top - q) }, { name: 'Supply', values: x.map(q => q) }] };
      const context = 'The graph shows the demand and supply of a good.';
      const cases = [
        ['ceiling', eq - 10, `A shortage of 20 units`, 'At the ceiling, quantity demanded exceeds quantity supplied by 20 units.'],
        ['floor', eq + 10, `A surplus of 20 units`, 'At the floor, quantity supplied exceeds quantity demanded by 20 units.'],
        ['ceiling', eq + 10, 'No shortage or surplus', 'A ceiling above the equilibrium price is not binding.'],
        ['floor', eq - 10, 'No shortage or surplus', 'A floor below the equilibrium price is not binding.']
      ];
      return cases.map(([kind, level, answer, why], c) => {
        const pool = ['A shortage of 20 units', 'A surplus of 20 units', 'No shortage or surplus', 'A shortage of 10 units', 'A surplus of 10 units'];
        return make(n, 'graph-price-control', top + '_' + c, `If the government sets a price ${kind} of $${level}, what results?`,
          [answer, ...others(pool, answer, c)],
          `Equilibrium is at $${eq} and ${eq} units. ${why}`, { plot, context });
      });
    }),
    ...[[100, 96, 86, 66, 36], [80, 78, 72, 60, 40], [120, 112, 98, 76, 44], [60, 57, 51, 41, 25]].flatMap((ys, p) => {
      const x = [0, 10, 20, 30, 40];
      const goods = [['Robots', 'tons of wheat', 'Wheat (tons)', 'robot'], ['Tractors', 'tons of corn', 'Corn (tons)', 'tractor'], ['Computers', 'crates of apples', 'Apples (crates)', 'computer'], ['Machines', 'tons of rice', 'Rice (tons)', 'machine']][p];
      const plot = { type: 'line', xLabel: goods[0] + ' (units)', yLabel: goods[2], x, series: [{ name: 'PPC', values: ys }] };
      return [0, 1, 2, 3].map(s => {
        const cost = ys[s] - ys[s + 1];
        return make(n, 'graph-ppc', p + '_' + s, `What is the opportunity cost of increasing ${goods[3]} production from ${x[s]} to ${x[s + 1]} units?`,
          options(cost, [10, ys[s + 1], ys[s], cost / 10], value => `${plain(value)} ${goods[1]}`),
          `Moving from ${x[s]} to ${x[s + 1]} ${goods[0].toLowerCase()} reduces output of the other good from ${ys[s]} to ${ys[s + 1]}, a cost of ${cost} ${goods[1]}.`,
          { plot, context: 'The graph shows an economy’s production possibilities curve.' });
      });
    })
  ],

  // Unit 2: Economic Indicators and the Business Cycle
  2: n => [
    ...each([[[800, 200, 300, 150, 180], [1200, 350, 400, 220, 300], [2500, 600, 700, 400, 380], [5000, 1100, 1500, 700, 900]], [1, 1.5, 2, 3]], ([c, i, g, x, m], scale, key) => {
      const [C, I, G, X, M] = [c, i, g, x, m].map(v => v * scale);
      const gdp = C + I + G + X - M;
      return make(n, 'calc-gdp', key, `An economy reports consumption of $${plain(C)} billion, investment of $${plain(I)} billion, government purchases of $${plain(G)} billion, exports of $${plain(X)} billion, and imports of $${plain(M)} billion. What is GDP?`,
        options(gdp, [C + I + G + X + M, C + I + G, C + I + G + X, C + I + G - X + M], billions),
        `GDP = C + I + G + (X − M) = ${plain(C)} + ${plain(I)} + ${plain(G)} + (${plain(X)} − ${plain(M)}) = $${plain(gdp)} billion.`);
    }),
    ...gdpItems.map(([item, category, why], index) => make(n, 'reason-gdp-category', String(index), `${item} How is this transaction treated in U.S. GDP?`,
      [gdpCategories[category], ...others(gdpCategories, gdpCategories[category], index)], why)),
    ...unemploymentCases.map(([text, type, why], index) => make(n, 'reason-unemployment-type', String(index), `${text} Which type of unemployment is this?`,
      [unemploymentTypes[type], ...unemploymentTypes.filter((_, t) => t !== type)], why)),
    ...each([[140, 152, 160, 175], [5, 7.2, 9, 12]], (employed, unemployed, key) => {
      const rate = unemployed / (employed + unemployed) * 100;
      return make(n, 'calc-unemployment-rate', key, `A country has ${employed} million employed workers and ${unemployed} million unemployed workers. What is the unemployment rate?`,
        options(rate, [unemployed / employed * 100, unemployed / (employed + unemployed + 60) * 100, employed / (employed + unemployed) * 100, unemployed], pct),
        `Unemployment rate = unemployed ÷ labor force = ${unemployed} ÷ (${employed} + ${unemployed}) × 100 = ${pct(rate)}.`);
    }),
    ...each([[150, 160, 170], [6, 9], [70, 100]], (employed, unemployed, outside, key) => {
      const rate = (employed + unemployed) / (employed + unemployed + outside) * 100;
      return make(n, 'calc-participation', key, `In a country, ${employed} million people are employed, ${unemployed} million are unemployed, and ${outside} million adults are not in the labor force. What is the labor force participation rate?`,
        options(rate, [employed / (employed + unemployed + outside) * 100, (employed + unemployed) / (employed + outside) * 100, unemployed / (employed + unemployed) * 100, outside / (employed + unemployed + outside) * 100], pct),
        `Participation rate = labor force ÷ adult population = ${employed + unemployed} ÷ ${employed + unemployed + outside} × 100 = ${pct(rate)}.`);
    }),
    ...each([[200, 250, 400, 500], [1.05, 1.12, 1.25, 0.96]], (base, factor, key) => {
      const current = base * factor;
      const cpi = current / base * 100;
      return make(n, 'calc-cpi', key, `A market basket cost $${plain(base)} in the base year and costs $${plain(current)} this year. What is this year’s consumer price index?`,
        options(cpi, [base / current * 100, current - base, cpi - 100, current / 100], value => plain(Number(value.toFixed(1)))),
        `CPI = (cost this year ÷ cost in base year) × 100 = ${plain(current)} ÷ ${plain(base)} × 100 = ${plain(Number(cpi.toFixed(1)))}.`);
    }),
    ...[[100, 104], [110, 115.5], [125, 130], [180, 189], [150, 147], [200, 216], [120, 126], [240, 252], [160, 168], [105, 109.2], [130, 136.5], [220, 213.4]].map(([first, second], index) => {
      const rate = (second - first) / first * 100;
      return make(n, 'calc-inflation', String(index), `The CPI was ${plain(first)} last year and is ${plain(second)} this year. What was the inflation rate?`,
        options(rate, [second - first, (second - first) / second * 100, -rate, second / first], pct),
        `Inflation = (${plain(second)} − ${plain(first)}) ÷ ${plain(first)} × 100 = ${pct(rate)}.`);
    }),
    ...each([[600, 1200, 2400, 4800], [80, 120, 150]], (nominal, deflator, key) => {
      const real = nominal / deflator * 100;
      return make(n, 'calc-real-gdp', key, `Nominal GDP is $${plain(nominal)} billion, and the GDP deflator is ${deflator}. What is real GDP?`,
        options(real, [nominal * deflator / 100, nominal - deflator, nominal / deflator, nominal], billions),
        `Real GDP = nominal GDP ÷ deflator × 100 = ${plain(nominal)} ÷ ${deflator} × 100 = $${plain(Number(real.toFixed(2)))} billion.`);
    }),
    ...each([[500, 900, 1500, 3000], [1.1, 1.25, 0.9]], (real, ratio, key) => {
      const nominal = real * ratio;
      const deflator = nominal / real * 100;
      return make(n, 'calc-deflator', key, `Nominal GDP is $${plain(nominal)} billion, and real GDP is $${plain(real)} billion. What is the GDP deflator?`,
        options(deflator, [real / nominal * 100, nominal - real, deflator - 100, nominal / real], value => plain(Number(value.toFixed(1)))),
        `GDP deflator = nominal ÷ real × 100 = ${plain(nominal)} ÷ ${plain(real)} × 100 = ${plain(Number(deflator.toFixed(1)))}.`);
    }),
    ...each([[3, 5, 8, 12], [2, 4, 9]], (nominal, inflation, key) => {
      const real = nominal - inflation;
      return make(n, 'calc-real-interest', key, `A bank charges a nominal interest rate of ${nominal}%, and the inflation rate is ${inflation}%. What is the real interest rate?`,
        options(real, [nominal + inflation, inflation - nominal, nominal * inflation / 10, nominal], pct),
        `Real interest rate ≈ nominal rate − inflation = ${nominal}% − ${inflation}% = ${pct(real)}.`);
    }),
    ...each([[2, 4, 6, 8], [1, 3, 5]], (raise, inflation, key) => {
      const real = raise - inflation;
      return make(n, 'calc-real-wage', key, `A worker’s nominal wage rises by ${raise}% in a year when the inflation rate is ${inflation}%. By about how much does the worker’s real wage change?`,
        options(real, [raise + inflation, inflation - raise, raise, inflation], value => (value > 0 ? '+' : '') + pct(value)),
        `%Δ real wage ≈ %Δ nominal wage − inflation = ${raise}% − ${inflation}% = ${pct(real)}.`);
    }),
    ...each([[1, 2, 3, 4], [2, 3, 5]], (growth, inflation, key) => {
      const nominal = growth + inflation;
      return make(n, 'calc-nominal-growth', key, `Real GDP grows by ${growth}% this year, and the GDP deflator rises by ${inflation}%. By about how much does nominal GDP grow?`,
        options(nominal, [growth, inflation - growth, growth * inflation, inflation], pct),
        `%Δ nominal GDP ≈ %Δ real GDP + %Δ price level = ${growth}% + ${inflation}% = ${pct(nominal)}.`);
    })
  ],

  // Unit 3: National Income and Price Determination
  3: n => [
    ...adasEvents.flatMap(([event, curve, direction], index) => {
      const key = curve + (direction > 0 ? '+' : '-');
      const price = curve === 'AD' ? direction : -direction;
      const pool = Object.keys(curveChoices);
      const why = `${curveChoices[key]} In the short run, the price level ${word(price)} and real output ${word(direction)}.`;
      return [
        make(n, 'reason-adas-curve', String(index), `${event} Which of the following is the most likely immediate effect?`,
          [curveChoices[key], ...pool.filter(k => k !== key).map(k => curveChoices[k])], why),
        make(n, 'reason-adas-price-output', String(index), `${event} In the short run, what happens to the price level and real output?`,
          pair('the price level', 'real output', price, direction), why),
        make(n, 'reason-adas-output-unemployment', String(index), `${event} In the short run, what happens to real GDP and the unemployment rate?`,
          pair('real GDP', 'the unemployment rate', direction, -direction), `${why} Higher output means lower unemployment, and lower output means higher unemployment.`)
      ];
    }),
    ...each([[0.5, 0.6, 0.75, 0.8, 0.9], [10, 20, 40, 50]], (mpc, change, key) => {
      const multiplier = 1 / (1 - mpc);
      const source = spendingSources[Math.round(mpc * 10 + change) % 3];
      const effect = change * multiplier;
      return make(n, 'calc-spending-multiplier', key, `The marginal propensity to consume is ${mpc}. If ${source} increases by $${change} billion, what is the maximum possible increase in real GDP?`,
        options(effect, [change * mpc / (1 - mpc), change / mpc, change * (1 - mpc), change], billions),
        `Spending multiplier = 1 ÷ (1 − ${mpc}) = ${plain(multiplier)}. ΔGDP = ${change} × ${plain(multiplier)} = $${plain(effect)} billion.`);
    }),
    ...each([[0.5, 0.6, 0.75, 0.8, 0.9], [20, 40, 100]], (mpc, cut, key) => {
      const multiplier = mpc / (1 - mpc);
      const effect = cut * multiplier;
      return make(n, 'calc-tax-multiplier', key, `The marginal propensity to consume is ${mpc}. If the government cuts taxes by $${cut} billion, what is the maximum possible increase in real GDP?`,
        options(effect, [cut / (1 - mpc), cut * mpc, cut, cut / mpc], billions),
        `Tax multiplier = MPC ÷ (1 − MPC) = ${plain(multiplier)}. ΔGDP = ${cut} × ${plain(multiplier)} = $${plain(effect)} billion.`);
    }),
    ...[[0.1, 'MPS'], [0.2, 'MPS'], [0.25, 'MPS'], [0.4, 'MPS'], [0.5, 'MPS'], [0.6, 'MPC'], [0.75, 'MPC'], [0.8, 'MPC'], [0.9, 'MPC'], [0.95, 'MPC']].map(([value, kind]) => {
      const mps = kind === 'MPS' ? value : 1 - value;
      const multiplier = 1 / mps;
      return make(n, 'calc-multiplier-value', kind + value, `If the ${kind === 'MPS' ? 'marginal propensity to save' : 'marginal propensity to consume'} is ${value}, what is the value of the spending multiplier?`,
        options(multiplier, [1 / (1 - mps), (1 - mps) / mps, mps, 1 - mps], plain),
        `MPS = ${plain(mps)}, so the spending multiplier = 1 ÷ MPS = ${plain(multiplier)}.`);
    }),
    ...each([[50, 100, 200], [0.5, 0.75, 0.8, 0.9]], (gap, mpc, key) => {
      const needed = gap * (1 - mpc);
      return make(n, 'calc-close-gap-spending', key, `An economy has a recessionary gap of $${gap} billion, and the MPC is ${mpc}. By how much should government spending increase to close the gap?`,
        options(needed, [gap, gap * mpc, gap / (1 - mpc), gap * (1 - mpc) / mpc], billions),
        `Required ΔG = gap ÷ multiplier = ${gap} × (1 − ${mpc}) = $${plain(needed)} billion.`);
    }),
    ...each([[50, 100, 200], [0.5, 0.75, 0.8, 0.9]], (gap, mpc, key) => {
      const needed = gap * (1 - mpc) / mpc;
      return make(n, 'calc-close-gap-taxes', key, `An economy has a recessionary gap of $${gap} billion, and the MPC is ${mpc}. By how much should taxes be cut to close the gap?`,
        options(needed, [gap * (1 - mpc), gap, gap * mpc / (1 - mpc), gap * mpc], billions),
        `Tax multiplier = ${plain(mpc / (1 - mpc))}. Required tax cut = ${gap} ÷ ${plain(mpc / (1 - mpc))} = $${plain(needed)} billion.`);
    }),
    ...each([[0.6, 0.75, 0.8], [20, 50]], (mpc, change, key) => make(n, 'calc-balanced-budget', key, `The MPC is ${mpc}. The government increases spending by $${change} billion and raises taxes by $${change} billion. What is the maximum change in real GDP?`,
      options(change, [change / (1 - mpc), 0, change * mpc / (1 - mpc), change * mpc], value => (value > 0 ? 'An increase of ' : 'No change: ') + billions(value)),
      `Spending adds ${change} × ${plain(1 / (1 - mpc))}; the tax increase subtracts ${change} × ${plain(mpc / (1 - mpc))}. The net effect equals the $${change} billion spending change (balanced-budget multiplier = 1).`)),
    ...each([[0.5, 0.6, 0.75, 0.8], [40, 100, 250]], (mpc, income, key) => {
      const change = mpc * income;
      return make(n, 'calc-mpc-consumption', key, `Disposable income rises by $${income} billion, and the MPC is ${mpc}. By how much does consumption increase?`,
        options(change, [income * (1 - mpc), income / (1 - mpc), income, income / mpc], billions),
        `ΔC = MPC × ΔYd = ${mpc} × ${income} = $${plain(change)} billion.`);
    }),
    ...each([[450, 500, 550], [100, 120], [-50, 0, 50]], (eqY, eqP, offset, key) => {
      const full = eqY + offset;
      const x = [eqY - 100, eqY - 50, eqY, eqY + 50, eqY + 100];
      const plot = { type: 'line', xLabel: 'Real GDP ($ billions)', yLabel: 'Price level', x, series: [{ name: 'AD', values: x.map(y => eqP + 0.3 * (eqY - y)) }, { name: 'SRAS', values: x.map(y => eqP + 0.3 * (y - eqY)) }] };
      const correct = offset > 0 ? `A recessionary gap of $50 billion` : offset < 0 ? `An inflationary gap of $50 billion` : 'No output gap; the economy is at full employment';
      const pool = ['A recessionary gap of $50 billion', 'An inflationary gap of $50 billion', 'No output gap; the economy is at full employment', 'A recessionary gap of $100 billion', 'An inflationary gap of $100 billion'];
      return make(n, 'graph-adas-gap', key, `Full-employment real GDP is $${full} billion. Which describes this economy in the short run?`,
        [correct, ...others(pool, correct, Math.abs(offset) / 50 + eqP / 20)],
        `AD and SRAS intersect at $${eqY} billion and a price level of ${eqP}. Compared with full employment at $${full} billion, ${offset === 0 ? 'there is no gap' : `output is $50 billion ${offset > 0 ? 'below' : 'above'} full employment`}.`,
        { plot, context: 'The graph shows aggregate demand (AD) and short-run aggregate supply (SRAS) for an economy.' });
    })
  ],

  // Unit 4: Financial Sector
  4: n => [
    ...each([[0.05, 0.1, 0.2, 0.25], [10, 40, 100]], (rr, amount, key) => {
      const change = amount / rr;
      return make(n, 'calc-open-market-purchase', key, `The required reserve ratio is ${pct(rr * 100, 0)}. The Federal Reserve buys $${amount} million of government bonds from commercial banks. Assuming banks lend all excess reserves and no cash is held, what is the maximum change in the money supply?`,
        options(change, [amount, amount * rr, amount * (1 - rr) / rr, amount * (1 - rr)], millions),
        `Banks gain $${amount} million of excess reserves. Money multiplier = 1 ÷ ${rr} = ${plain(1 / rr)}, so the money supply can rise by $${plain(change)} million.`);
    }),
    ...each([[0.05, 0.1, 0.2, 0.25], [1000, 5000, 20000]], (rr, cash, key) => {
      const change = cash * (1 - rr) / rr;
      return make(n, 'calc-cash-deposit', key, `The required reserve ratio is ${pct(rr * 100, 0)}. A person deposits $${plain(cash)} of cash into a checking account. Assuming banks lend all excess reserves, what is the maximum change in the money supply from new lending?`,
        options(change, [cash / rr, cash * (1 - rr), cash, cash * rr], dollars),
        `The deposit adds $${plain(cash * (1 - rr))} of excess reserves. Multiplying by 1 ÷ ${rr} gives $${plain(change)}. The deposit itself only swaps cash for checkable deposits.`);
    }),
    ...each([[0.05, 0.1, 0.2, 0.25], [1000, 5000, 20000]], (rr, cash, key) => {
      const loan = cash * (1 - rr);
      return make(n, 'calc-new-loan', key, `The required reserve ratio is ${pct(rr * 100, 0)}. A customer deposits $${plain(cash)} in cash at a bank that had no excess reserves. What is the maximum amount the bank can lend immediately?`,
        options(loan, [cash, cash * rr, cash / rr, cash * (1 - rr) / rr], dollars),
        `Required reserves = ${rr} × ${plain(cash)} = $${plain(cash * rr)}, so excess reserves (and new loans) = $${plain(loan)}.`);
    }),
    ...each([[200, 500, 1000], [0.1, 0.2], [0.05, 0.15]], (deposits, rr, extra, key) => {
      const reserves = deposits * (rr + extra);
      const excess = reserves - deposits * rr;
      return make(n, 'calc-excess-reserves', key, `A bank has $${plain(deposits)} million in checkable deposits and $${plain(reserves)} million in reserves. The required reserve ratio is ${pct(rr * 100, 0)}. What are the bank’s excess reserves?`,
        options(excess, [deposits * rr, reserves, deposits - reserves, excess / rr], millions),
        `Required reserves = ${rr} × ${plain(deposits)} = $${plain(deposits * rr)} million. Excess = ${plain(reserves)} − ${plain(deposits * rr)} = $${plain(excess)} million.`);
    }),
    ...[0.02, 0.04, 0.05, 0.08, 0.1, 0.125, 0.2, 0.25].map(rr => make(n, 'calc-money-multiplier', String(rr), `If the required reserve ratio is ${pct(rr * 100, rr * 100 % 1 ? 1 : 0)}, what is the simple money multiplier?`,
      options(1 / rr, [rr, 1 - rr, (1 - rr) / rr, rr * 100], plain),
      `Money multiplier = 1 ÷ required reserve ratio = 1 ÷ ${rr} = ${plain(1 / rr)}.`)),
    ...each([[2, 3, 5], [1, 2.5, 4], [0, 1]], (real, inflation, swap, key) => {
      const nominal = real + inflation;
      const answer = swap ? real : nominal;
      return make(n, 'calc-fisher', key, swap ? `A loan carries a nominal interest rate of ${nominal}%, and expected inflation is ${inflation}%. What is the expected real interest rate?` : `Lenders want a real interest rate of ${real}%, and expected inflation is ${inflation}%. What nominal interest rate should they charge?`,
        options(answer, swap ? [nominal + inflation, inflation, nominal] : [real - inflation, real, inflation], pct),
        swap ? `Real rate ≈ nominal rate − expected inflation = ${nominal}% − ${inflation}% = ${pct(real)}.` : `Nominal rate ≈ real rate + expected inflation = ${real}% + ${inflation}% = ${pct(nominal)}.`);
    }),
    ...fedActions.flatMap(([action, sign, ample], index) => [
      ample
        ? make(n, 'reason-fed-action', index + '_a', `${action} What is the most likely short-run effect on the federal funds rate and bank lending?`,
          pair('the federal funds rate', 'bank lending', -sign, sign), `${sign > 0 ? 'Lower' : 'Higher'} interest on reserves makes holding reserves ${sign > 0 ? 'less' : 'more'} attractive, so market rates ${sign > 0 ? 'fall' : 'rise'} and lending ${sign > 0 ? 'rises' : 'falls'}.`)
        : make(n, 'reason-fed-action', index + '_a', `${action} What is the most likely short-run effect on the money supply and the nominal interest rate?`,
          pair('the money supply', 'the nominal interest rate', sign, -sign), `This is ${sign > 0 ? 'expansionary' : 'contractionary'} monetary policy: the money supply ${word(sign)} and the nominal interest rate ${word(-sign)}.`),
      make(n, 'reason-fed-action', index + '_b', `${action} What is the most likely short-run effect on investment spending and real GDP?`,
        pair('investment spending', 'real GDP', sign, sign), `${sign > 0 ? 'Lower' : 'Higher'} interest rates ${sign > 0 ? 'encourage' : 'discourage'} borrowing for investment, so AD and real GDP ${word(sign)}.`),
      make(n, 'reason-fed-action', index + '_c', `${action} In the short run, what happens to the price level and the unemployment rate?`,
        pair('the price level', 'the unemployment rate', sign, -sign), `AD ${word(sign)}, so the price level ${word(sign)} and unemployment ${word(-sign)}.`)
    ]),
    ...moneyDemandEvents.flatMap(([event, direction, why], index) => {
      const pool = Object.keys(moneyMarketChoices);
      const key = String(direction);
      return [
        make(n, 'reason-money-demand', index + '_a', `Assume the central bank holds the money supply fixed (a vertical money supply curve). ${event} What happens in the money market?`,
          [moneyMarketChoices[key], ...pool.filter(k => k !== key).map(k => moneyMarketChoices[k])], `${why} Money demand ${word(direction)}, so the nominal interest rate ${direction > 0 ? 'rises' : 'falls'} while the quantity of money stays fixed.`),
        make(n, 'reason-money-demand', index + '_b', `Assume a fixed money supply. ${event} What happens to the nominal interest rate and the prices of existing bonds?`,
          pair('the nominal interest rate', 'the prices of existing bonds', direction, -direction), `${why} The interest rate ${word(direction)}, and bond prices move in the opposite direction.`)
      ];
    }),
    ...loanableEvents.flatMap(([event, curve, direction], index) => {
      const key = curve + (direction > 0 ? '+' : '-');
      const rate = curve === 'demand' ? direction : -direction;
      const pool = Object.keys(loanableCurves);
      return [
        make(n, 'reason-loanable-curve', String(index), `${event} What happens in the market for loanable funds?`,
          [loanableCurves[key], ...pool.filter(k => k !== key).map(k => loanableCurves[k])], `${loanableCurves[key]} The real interest rate ${word(rate)}.`),
        make(n, 'reason-loanable-effects', String(index), `${event} What happens to the real interest rate and the equilibrium quantity of loanable funds?`,
          pair('the real interest rate', 'the quantity of loanable funds', rate, direction), `${loanableCurves[key].slice(0, -1)}, so the real interest rate ${word(rate)} and the quantity ${word(direction)}.`)
      ];
    }),
    ...moneyItems.map(([item, measure, why], index) => make(n, 'reason-money-measure', String(index), `How is the following classified? ${item}`,
      [moneyMeasures[measure], ...moneyMeasures.filter((_, m) => m !== measure)], why)),
    ...product(['a recession', 'high inflation'], [['open-market operations', ['Buy government bonds', 'Sell government bonds']], ['the discount rate', ['Lower the discount rate', 'Raise the discount rate']], ['the reserve requirement', ['Lower the required reserve ratio', 'Raise the required reserve ratio']], ['interest on reserves', ['Lower the interest rate paid on reserves', 'Raise the interest rate paid on reserves']]]).map(([problem, [tool, actions]], index) => {
      const fight = problem === 'a recession' ? 0 : 1;
      const fiscal = fight === 0 ? ['Increase government spending', 'Cut income taxes'] : ['Decrease government spending', 'Raise income taxes'];
      return make(n, 'reason-fed-choice', String(index), `The economy is experiencing ${problem}. Which monetary policy action using ${tool} is appropriate?`,
        [actions[fight], actions[1 - fight], ...fiscal],
        `${fight === 0 ? 'Expansionary' : 'Contractionary'} monetary policy is needed: ${actions[fight].toLowerCase()}. Changing spending or taxes is fiscal policy, not a monetary tool.`);
    }),
    ...each([[4, 5, 6], [200, 300, 400, 500]], (rate, quantity, key) => {
      const x = [quantity - 200, quantity - 100, quantity, quantity + 100, quantity + 200];
      const plot = { type: 'line', xLabel: 'Quantity of loanable funds ($ billions)', yLabel: 'Real interest rate (%)', x, series: [{ name: 'Demand', values: x.map(q => rate + 1.5 * (quantity - q) / 100) }, { name: 'Supply', values: x.map(q => rate + 1.5 * (q - quantity) / 100) }] };
      const label = (r, q) => `${plain(r)}% and $${q} billion`;
      return make(n, 'graph-loanable', key, 'What are the equilibrium real interest rate and quantity of loanable funds?',
        [label(rate, quantity), label(rate + 1.5, quantity - 100), label(rate - 1.5, quantity + 100), label(rate + 3, quantity + 200)],
        `The demand and supply curves cross at ${rate}% and $${quantity} billion.`,
        { plot, context: 'The graph shows the market for loanable funds.' });
    })
  ],

  // Unit 5: Long-Run Consequences of Stabilization Policies
  5: n => [
    ...each([[3, 5, 8, 12], [1, 2, 3, 4]], (money, growth, key) => {
      const inflation = money - growth;
      return make(n, 'calc-quantity-theory', key, `The money supply grows by ${money}% per year, real GDP grows by ${growth}% per year, and velocity is constant. According to the quantity theory of money, what is the approximate inflation rate?`,
        options(inflation, [money + growth, money, growth - money, growth, money / 2 + growth], pct),
        `%ΔM + %ΔV = %ΔP + %ΔY, so inflation ≈ ${money}% + 0% − ${growth}% = ${pct(inflation)}.`);
    }),
    ...each([[4, 6, 10], [-1, 1, 2], [2, 3]], (money, velocity, growth, key) => {
      const inflation = money + velocity - growth;
      const v = velocity > 0 ? `rises by ${velocity}%` : `falls by ${-velocity}%`;
      return make(n, 'calc-quantity-velocity', key, `The money supply grows by ${money}%, the velocity of money ${v}, and real GDP grows by ${growth}%. According to the equation of exchange, what is the approximate inflation rate?`,
        options(inflation, [money - growth, money + velocity + growth, money - velocity - growth, money + velocity], pct),
        `%ΔM + %ΔV = %ΔP + %ΔY, so inflation ≈ ${money}% ${signed(velocity)}% − ${growth}% = ${pct(inflation)}.`);
    }),
    ...each([[500, 800, 1200, 2000], [2, 3.5, 5]], (money, velocity, key) => {
      const nominal = money * velocity;
      return make(n, 'calc-nominal-gdp', key, `The money supply is $${money} billion, and the velocity of money is ${velocity}. According to the equation of exchange, what is nominal GDP?`,
        options(nominal, [money / velocity, money + velocity, velocity / money * 1000, money], billions),
        `MV = PY, so nominal GDP = ${money} × ${velocity} = $${plain(nominal)} billion.`);
    }),
    ...each([[1000, 2400, 6000, 9000], [400, 1200, 2000]], (nominal, money, key) => {
      const velocity = nominal / money;
      return make(n, 'calc-velocity', key, `Nominal GDP is $${plain(nominal)} billion, and the money supply is $${plain(money)} billion. What is the velocity of money?`,
        options(velocity, [money / nominal, nominal - money, nominal * money / 1000, money / 100], plain),
        `V = nominal GDP ÷ M = ${plain(nominal)} ÷ ${plain(money)} = ${plain(velocity)}.`);
    }),
    ...[1, 1.4, 2, 2.5, 3.5, 5, 7, 10].map(rate => make(n, 'calc-rule-of-70', String(rate), `Real GDP per capita grows at a steady ${rate}% per year. Using the rule of 70, about how many years will it take to double?`,
      options(70 / rate, [rate * 70, 100 / rate, 70 - rate, 35 / rate], value => `About ${plain(Number(value.toFixed(1)))} years`),
      `Doubling time ≈ 70 ÷ growth rate = 70 ÷ ${rate} = ${plain(Number((70 / rate).toFixed(1)))} years.`)),
    ...[10, 14, 20, 25, 28, 35, 50, 70].map(years => make(n, 'calc-rule-of-70-rate', String(years), `A country’s real GDP doubled in ${years} years. Using the rule of 70, what was its approximate annual growth rate?`,
      options(70 / years, [years / 70 * 100, 100 / years, 7000 / years / 10, 35 / years], value => pct(value)),
      `Growth rate ≈ 70 ÷ doubling time = 70 ÷ ${years} = ${pct(70 / years)}.`)),
    ...[[1000, 50, 1060, 51], [2000, 100, 2100, 102], [500, 20, 540, 21], [3000, 150, 3150, 150], [800, 40, 840, 41], [1200, 60, 1296, 63], [4000, 200, 4400, 210], [900, 30, 954, 31.5], [1500, 75, 1620, 75], [2500, 125, 2575, 125], [600, 24, 660, 25.2], [1800, 90, 1900, 92.7]].map(([gdp1, pop1, gdp2, pop2], index) => {
      const per1 = gdp1 / pop1;
      const per2 = gdp2 / pop2;
      const growth = (per2 - per1) / per1 * 100;
      return make(n, 'calc-per-capita-growth', String(index), `Real GDP rises from $${plain(gdp1)} billion to $${plain(gdp2)} billion while the population rises from ${plain(pop1)} million to ${plain(pop2)} million. By about what percentage does real GDP per capita change?`,
        options(growth, [(gdp2 - gdp1) / gdp1 * 100, (pop2 - pop1) / pop1 * 100, (gdp2 - gdp1) / gdp1 * 100 + (pop2 - pop1) / pop1 * 100, per2 - per1], pct),
        `GDP per capita goes from ${plain(per1 * 1000)} to ${plain(per2 * 1000)} dollars per person, a change of ${pct(growth)}.`);
    }),
    ...phillipsEvents.flatMap(([event, move, why], index) => {
      const pool = Object.keys(phillipsMoves);
      const [inflation, unemployment] = phillipsEffects[move];
      return [
        make(n, 'reason-phillips-move', String(index), `${event} How is this shown on the Phillips curve graph in the short run?`,
          [phillipsMoves[move], ...pool.filter(k => k !== move).map(k => phillipsMoves[k])], why),
        make(n, 'reason-phillips-effects', String(index), `${event} In the short run, what happens to the inflation rate and the unemployment rate?`,
          pair('the inflation rate', 'the unemployment rate', inflation, unemployment), why)
      ];
    }),
    ...each([[900, 1200, 1500], [300, 500], [1000, 1400]], (spending, transfers, taxes, key) => {
      const balance = taxes - spending - transfers;
      const label = value => (value < 0 ? `A budget deficit of ${billions(-value)}` : value > 0 ? `A budget surplus of ${billions(value)}` : 'A balanced budget');
      return make(n, 'calc-budget-balance', key, `A government spends $${spending} billion on goods and services and $${transfers} billion on transfer payments, and collects $${plain(taxes)} billion in taxes. What is its budget balance?`,
        options(balance, [taxes - spending, -balance, taxes - spending + transfers, -(taxes - spending)], label),
        `Balance = taxes − (purchases + transfers) = ${plain(taxes)} − (${spending} + ${transfers}) = ${label(balance).toLowerCase()}.`);
    }),
    ...each([[2000, 5000], [[100, 150, 200], [300, 250, -50], [80, -40, 120], [500, 400, 300]]], (debt, deficits, key) => {
      const final = debt + deficits.reduce((sum, value) => sum + value, 0);
      const describe = deficits.map(value => (value >= 0 ? `a deficit of $${value} billion` : `a surplus of $${-value} billion`)).join(', ');
      return make(n, 'calc-debt', key, `A government’s debt is $${plain(debt)} billion. Over the next three years it runs ${describe}. What is its debt at the end of the three years?`,
        options(final, [debt + deficits.reduce((sum, value) => sum + Math.abs(value), 0), debt - deficits.reduce((sum, value) => sum + value, 0), debt + deficits[2], debt], billions),
        `Each deficit adds to the debt and each surplus reduces it: ${plain(debt)} + (${deficits.join(' + ').replace(/\+ -/g, '− ')}) = $${plain(final)} billion.`);
    }),
    ...each([[[2, 10, 1.5], [3, 12, 1.5], [1, 8, 1], [4, 14, 2]], [3, 4, 5]], ([start, top, slope], unemployment, key) => {
      const x = [start, start + 1, start + 2, start + 3, start + 4, start + 5];
      const values = x.map(u => Number((top - slope * (u - start)).toFixed(2)));
      const index = x.indexOf(start + unemployment - 2);
      const askU = x[index];
      const answer = values[index];
      const plot = { type: 'line', xLabel: 'Unemployment rate (%)', yLabel: 'Inflation rate (%)', x, series: [{ name: 'SRPC', values }] };
      return make(n, 'graph-phillips', key, `According to this short-run Phillips curve, what inflation rate goes with an unemployment rate of ${askU}%?`,
        options(answer, [values[index + 1], values[index - 1] ?? values[index + 2], askU, top], pct),
        `Reading the curve at ${askU}% unemployment gives ${pct(answer)} inflation.`,
        { plot, context: 'The graph shows an economy’s short-run Phillips curve.' });
    }),
    ...[
      ['recessionary', 'nominal wages', 'Nominal wages fall.', ['Nominal wages rise.', 'Nominal wages stay the same.', 'Nominal wages fall, and LRAS shifts left.'], 'High unemployment pushes nominal wages down.'],
      ['recessionary', 'the SRAS curve', 'SRAS shifts to the right.', ['SRAS shifts to the left.', 'SRAS does not shift.', 'AD shifts to the left.'], 'Lower wages reduce production costs, shifting SRAS right.'],
      ['recessionary', 'the price level', 'The price level falls further.', ['The price level rises.', 'The price level does not change.', 'The price level first falls and then returns to its original level.'], 'As SRAS shifts right along the original AD, the price level falls.'],
      ['recessionary', 'real GDP', 'Real GDP rises back to full-employment output.', ['Real GDP falls further.', 'Real GDP stays below full employment permanently.', 'Real GDP rises above full-employment output.'], 'The economy returns to LRAS.'],
      ['inflationary', 'nominal wages', 'Nominal wages rise.', ['Nominal wages fall.', 'Nominal wages stay the same.', 'Nominal wages rise, and LRAS shifts right.'], 'A tight labor market pushes nominal wages up.'],
      ['inflationary', 'the SRAS curve', 'SRAS shifts to the left.', ['SRAS shifts to the right.', 'SRAS does not shift.', 'AD shifts to the right.'], 'Higher wages raise production costs, shifting SRAS left.'],
      ['inflationary', 'the price level', 'The price level rises further.', ['The price level falls.', 'The price level does not change.', 'The price level returns to its original level.'], 'As SRAS shifts left along the original AD, the price level rises.'],
      ['inflationary', 'real GDP', 'Real GDP falls back to full-employment output.', ['Real GDP rises further.', 'Real GDP stays above full employment permanently.', 'Real GDP falls below full-employment output.'], 'The economy returns to LRAS.']
    ].map(([gap, variable, correct, wrong, why], index) => make(n, 'reason-long-run-adjustment', String(index), `An economy has ${gap === 'recessionary' ? 'a recessionary' : 'an inflationary'} gap, and policymakers take no action. In the long run, what happens to ${variable}?`,
      [correct, ...wrong], why)),
    ...[
      ['The government increases spending and finances it by borrowing.', 'the real interest rate', 'It rises.', 'It falls.', 'Government borrowing increases the demand for loanable funds.'],
      ['The government increases spending and finances it by borrowing.', 'private investment spending', 'It decreases.', 'It increases.', 'Higher real interest rates crowd out private investment.'],
      ['The government increases spending and finances it by borrowing.', 'the long-run growth rate of the capital stock', 'It slows.', 'It speeds up.', 'Less private investment means slower growth in physical capital.'],
      ['The government cuts spending and uses the savings to run a budget surplus.', 'the real interest rate', 'It falls.', 'It rises.', 'A surplus reduces government borrowing and adds to the supply of loanable funds.'],
      ['The government cuts spending and uses the savings to run a budget surplus.', 'private investment spending', 'It increases.', 'It decreases.', 'Lower real interest rates encourage investment.'],
      ['The government cuts spending and uses the savings to run a budget surplus.', 'the long-run growth rate of the capital stock', 'It speeds up.', 'It slows.', 'More investment adds to the capital stock.']
    ].map(([policy, variable, correct, opposite, why], index) => make(n, 'reason-crowding-out', String(index), `${policy} What happens to ${variable}?`,
      [correct, opposite, 'It does not change.', 'It changes only if the central bank changes the money supply.'], why))
  ],

  // Unit 6: Open Economy—International Trade and Finance
  6: n => [
    ...forexEvents.flatMap(([event, dollar, curve, netExports], index) => [
      make(n, 'reason-forex-value', String(index), `Consider the foreign exchange market for U.S. dollars and euros. ${event} What happens to the values of the two currencies?`,
        pair('the value of the dollar', 'the value of the euro', dollar, -dollar), `The dollar ${dollar > 0 ? 'appreciates' : 'depreciates'}, so the euro ${dollar > 0 ? 'depreciates' : 'appreciates'} relative to it.`),
      curve && make(n, 'reason-forex-curve', String(index), `${event} What happens in the foreign exchange market for U.S. dollars?`,
        [forexCurves[curve], ...Object.keys(forexCurves).filter(k => k !== curve).map(k => forexCurves[k])], `${forexCurves[curve]} As a result, the dollar ${dollar > 0 ? 'appreciates' : 'depreciates'}.`),
      netExports && make(n, 'reason-forex-net-exports', String(index), `${event} What is the most likely effect on the value of the dollar and on U.S. net exports?`,
        pair('the value of the dollar', 'U.S. net exports', dollar, netExports), `The dollar ${dollar > 0 ? 'appreciates' : 'depreciates'}, making U.S. goods ${dollar > 0 ? 'more' : 'less'} expensive abroad, so net exports ${verb('net exports', netExports)}.`)
    ].filter(Boolean)),
    ...capitalCountries.flatMap(([country, currency], index) => [1, -1].map(direction => make(n, 'reason-capital-flows', index + '_' + direction, `Real interest rates in ${country} ${direction > 0 ? 'rise' : 'fall'} relative to interest rates in other countries. What happens to financial capital flowing into ${country} and the value of the ${currency}?`,
      pair(`financial capital flowing into ${country}`, `the value of the ${currency}`, direction, direction),
      `Investors seek the highest returns, so capital inflows ${verb('inflows', direction)} and the ${currency} ${direction > 0 ? 'appreciates' : 'depreciates'}.`))),
    ...currencies.flatMap(([name, plural, rate, prices]) => prices.map(price => {
      const usd = price / rate;
      return make(n, 'calc-exchange-to-dollars', name + '_' + price, `The exchange rate is 1 U.S. dollar = ${plain(rate)} ${plural}. A product costs ${plain(price)} ${plural}. What is its price in U.S. dollars?`,
        options(usd, [price * rate, rate / price, price, price / rate / 10], dollars),
        `Dollar price = ${plain(price)} ÷ ${plain(rate)} = ${dollars(Number(usd.toFixed(2)))}.`);
    })),
    ...currencies.flatMap(([name, plural, rate]) => [20, 80, 250, 1200].map(usd => {
      const foreign = usd * rate;
      return make(n, 'calc-exchange-to-foreign', name + '_' + usd, `The exchange rate is 1 U.S. dollar = ${plain(rate)} ${plural}. An American product costs $${usd}. What does it cost in ${plural}?`,
        options(foreign, [usd / rate, usd, usd + rate, usd * rate * 10], value => `${plain(value)} ${plural}`),
        `Foreign price = $${usd} × ${plain(rate)} = ${plain(foreign)} ${plural}.`);
    })),
    ...[[100, 110], [150, 120], [120, 150], [90, 99], [200, 180], [80, 100], [110, 88], [125, 150], [140, 126], [95, 114], [160, 200], [130, 104]].map(([before, after], index) => {
      const change = (after - before) / before * 100;
      const alt = Math.abs(after - before) / after * 100;
      const way = change > 0 ? 'appreciated' : 'depreciated';
      const other = change > 0 ? 'depreciated' : 'appreciated';
      return make(n, 'calc-appreciation', String(index), `The exchange rate changes from ${before} yen per dollar to ${after} yen per dollar. Which statement is correct?`,
        [`The dollar ${way} by ${pct(Math.abs(change))}.`, `The dollar ${other} by ${pct(Math.abs(change))}.`, `The dollar ${way} by ${pct(alt)}.`, `The dollar ${other} by ${pct(alt)}.`],
        `Each dollar now buys ${after > before ? 'more' : 'fewer'} yen. Change = (${after} − ${before}) ÷ ${before} × 100 = ${pct(change)}.`);
    }),
    ...bopItems.map(([item, category, why], index) => make(n, 'reason-balance-of-payments', String(index), `From the U.S. point of view, how is this transaction recorded in the balance of payments? ${item}`,
      [bopCategories[category], ...bopCategories.filter((_, c) => c !== category)], why)),
    ...[[300, 380, 120, 90, 25, -15, 200], [500, 450, 80, 100, -10, -20, 150], [250, 310, 60, 40, 15, -5, 90], [900, 1100, 300, 200, 40, -60, 400], [150, 120, 30, 50, -5, -10, 60], [700, 820, 260, 180, 20, -30, 250], [420, 400, 90, 110, 10, -25, 120], [1000, 1250, 350, 220, 60, -40, 500], [180, 210, 70, 30, 5, -8, 70], [600, 580, 140, 160, -20, -15, 220], [330, 400, 110, 60, 12, -18, 140], [800, 760, 150, 210, 30, -45, 300]].map(([exports, imports, serviceExports, serviceImports, income, transfers, assets], index) => {
      const balance = exports - imports + serviceExports - serviceImports + income + transfers;
      return make(n, 'calc-current-account', String(index), `A country has goods exports of $${exports} billion, goods imports of $${imports} billion, service exports of $${serviceExports} billion, service imports of $${serviceImports} billion, net investment income of ${billions(income)}, and net transfers of ${billions(transfers)}. Foreigners also buy $${assets} billion of the country’s assets. What is the current account balance?`,
        options(balance, [exports - imports, balance + assets, exports - imports + serviceExports - serviceImports, -balance], billions),
        `Current account = (${exports} − ${imports}) + (${serviceExports} − ${serviceImports}) ${signed(income)} ${signed(transfers)} = ${billions(balance)}. Asset purchases belong in the financial account.`);
    }),
    ...[
      ['The central bank conducts expansionary monetary policy.', -1],
      ['The central bank conducts contractionary monetary policy.', 1],
      ['The government runs a larger budget deficit to fund new spending.', 1],
      ['The government cuts spending and reduces its borrowing.', -1]
    ].flatMap(([policy, rate], index) => [
      make(n, 'reason-open-policy', index + '_a', `${policy} In an open economy with flexible exchange rates, what happens to the domestic real interest rate and the value of the domestic currency?`,
        pair('the real interest rate', 'the value of the currency', rate, rate), `The real interest rate ${word(rate)}, so foreign demand for the country’s assets ${word(rate)} and the currency ${rate > 0 ? 'appreciates' : 'depreciates'}.`),
      make(n, 'reason-open-policy', index + '_b', `${policy} In an open economy with flexible exchange rates, what happens to the value of the domestic currency and net exports?`,
        pair('the value of the currency', 'net exports', rate, -rate), `The currency ${rate > 0 ? 'appreciates' : 'depreciates'}, making exports ${rate > 0 ? 'more' : 'less'} expensive, so net exports ${verb('net exports', -rate)}.`)
    ]),
    ...each([[100, 120, 150], [200, 300, 400, 500]], (rate, quantity, key) => {
      const x = [quantity - 200, quantity - 100, quantity, quantity + 100, quantity + 200];
      const step = rate / 10;
      const plot = { type: 'line', xLabel: 'Quantity of dollars (billions)', yLabel: 'Yen per dollar', x, series: [{ name: 'Demand for dollars', values: x.map(q => rate + step * (quantity - q) / 100) }, { name: 'Supply of dollars', values: x.map(q => rate + step * (q - quantity) / 100) }] };
      return make(n, 'graph-forex', key, 'What is the equilibrium exchange rate?',
        [`${rate} yen per dollar`, `${rate + step} yen per dollar`, `${rate - step} yen per dollar`, `${quantity} yen per dollar`],
        `Demand and supply for dollars cross at ${rate} yen per dollar and ${quantity} billion dollars.`,
        { plot, context: 'The graph shows the foreign exchange market for U.S. dollars, priced in yen.' });
    })
  ]
};

function writtenQuestion(n, entry, index) {
  const id = 'macro-' + n + '-written-' + index;
  if (!Array.isArray(entry)) return { ...entry, id, answer: 0, family: entry.family };
  const [family, prompt, correct, a, b, c, explanation] = entry;
  return { id, family, prompt, choices: [correct, a, b, c], answer: 0, explanation };
}

const cache = new Map();

export function macroeconomicsQuestions(n) {
  if (!cache.has(n)) {
    const items = (written[n - 1] ?? []).map((entry, index) => writtenQuestion(n, entry, index));
    const generated = (generators[n]?.(n) ?? []).filter(Boolean);
    // The practice page picks one question per type in turn, and types with more questions tend to come up first.
    // Four reasoning types, two calculation types, and one graph type give each set a mix like the AP exam's,
    // which is mostly cause-and-effect reasoning.
    let reasoning = 0;
    for (const item of items) item.family = item.plot ? 'graph' : 'reasoning-' + (reasoning++ % 4);
    const reasons = [...new Set(generated.filter(item => !item.plot && item.family.startsWith('reason-')).map(item => item.family))];
    const calcs = [...new Set(generated.filter(item => !item.plot && item.family.startsWith('calc-')).map(item => item.family))];
    for (const item of generated) {
      if (item.plot) item.family = 'graph';
      else item.family = item.family.startsWith('reason-') ? 'reasoning-' + (reasons.indexOf(item.family) % 4) : 'calc-' + (calcs.indexOf(item.family) % 2);
    }
    const unique = new Map();
    for (const item of [...items, ...generated]) if (!unique.has(item.id)) unique.set(item.id, item);
    cache.set(n, [...unique.values()]);
  }
  return cache.get(n);
}
