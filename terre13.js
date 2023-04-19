let args = process.argv;
let num1 = parseInt(args[2]);
let num2 = parseInt(args[3]);
let num3 = parseInt(args[4]);

let result;

if (
  num1 == num2 ||
  num2 == num3 ||
  num1 == num3 ||
  Number.isNaN(num1) ||
  Number.isNaN(num3) ||
  Number.isNaN(num3)
) {
  result = "erreur.";
} else {
  let avg = (num1 + num2 + num3) / 3;
  let diff;
  let i;

  result = num1;
  diff = Math.abs(num1 - avg);
  if (diff > Math.abs(num2 - avg)) {
    result = num2;
    diff = Math.abs(num2 - avg);
  }

  if (diff > Math.abs(num3 - avg)) {
    result = num3;
    diff = Math.abs(num3 - avg);
  }
}

console.log(result);
