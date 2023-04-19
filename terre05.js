let args = process.argv;
let textNumber = args[2];
let textDiv = args[3];
let num = parseInt(textNumber);
let div = parseInt(textDiv);

if (
  Number.isNaN(num) ||
  Number.isNaN(div) ||
  div <= 0 ||
  div > num ||
  num < 0
) {
  console.log("erreur.");
} else {
  console.log("résultat: " + Math.trunc(num / div));
  console.log("reste: " + (num % div));
}
