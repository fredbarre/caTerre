let args = process.argv;
let textNumber = args[2];
let num = parseInt(textNumber);
let numfloat = parseFloat(textNumber);
let premier = true;
if (Number.isNaN(num) || num < 0 || numfloat != num) {
  console.log("erreur.");
} else {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) premier = false;
  }
  console.log(premier);
  if (premier && num > 1) {
    console.log("Oui, " + num + " est un nombre premier.");
  } else {
    console.log("Non, " + num + " n’est pas un nombre premier.");
  }
}
