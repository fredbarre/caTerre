let args = process.argv;
let textNumber = args[2];
let textPow = args[3];
let num = parseInt(textNumber);
let pow = parseInt(textPow);

if (Number.isNaN(num) || Number.isNaN(pow) || pow <= 0) {
  console.log("erreur.");
} else {
  console.log(num ** pow);
}
