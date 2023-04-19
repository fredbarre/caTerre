let args = process.argv;
let textNumber = args[2];
let num = parseInt(textNumber);
if (Number.isNaN(num)) {
  console.log("Tu ne me la mettras pas à l’envers.");
} else {
  if (num % 2 == 0) {
    console.log("pair");
  } else {
    console.log("impair");
  }
}
