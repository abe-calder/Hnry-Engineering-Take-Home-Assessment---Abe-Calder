// Up to $15,600	10.5%
// $15,601 - $53,500	17.5%
// $53,501 - $78,100	30%
// $78,101 - $180,000	33%
// $180,001 and over	39%


const taxBrackets = [
  {threshold: 180000, rate: 0.39},
  {threshold: 78100, rate: 0.33},
  {threshold: 53500, rate: 0.30},
  {threshold: 15600, rate: 0.175},
  {threshold: 0, rate: 0.105}
]

function getIncomeTaxRate(amount: number): number {

  return
}