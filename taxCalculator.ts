// Up to $15,600	10.5%
// $15,601 - $53,500	17.5%
// $53,501 - $78,100	30%
// $78,101 - $180,000	33%
// $180,001 and over	39%

// taxBrackets array with objects of threshold and applicable tax rate
const taxBrackets = [
  { threshold: 180000, rate: 0.39 },
  { threshold: 78100, rate: 0.33 },
  { threshold: 53500, rate: 0.30 },
  { threshold: 15600, rate: 0.175 },
  { threshold: 0, rate: 0.105 }
]

function getIncomeTaxRate(inputAmount: number): number {
  let taxDeductions = 0

  // totalAmount constant for the if statment in the loop
  const totalAmount = inputAmount

  // incomeToTax variable that will change within the loop
  let incomeToTax = totalAmount

  for (let i = 0 ; i < taxBrackets.length ; i++ ) {
    // define individual brackets
    const bracket = taxBrackets[i]
    // check if totalAmount is more than bracket.threshold
    if (totalAmount > bracket.threshold) {
      // reduce bracket threshold from incomeToTax
      const amountInBracket = incomeToTax - bracket.threshold
      // add the tax calc for the bracket to taxDeductions
      taxDeductions += amountInBracket * bracket.rate
      // reasign incomeToTax to be the bracket threshold
      incomeToTax = bracket.threshold
    }
  }

  

  return
}