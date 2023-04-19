let args = process.argv;
let textNumber = args[2];
let num = parseInt(textNumber);

if (Number.isNaN(num) || num < 0) {
  console.log("erreur.");
} else {
  console.log(Math.sqrt(num));
}
