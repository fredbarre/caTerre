let args = process.argv;
let text = args[2];
let text2 = args[3];

if (text && !text2 && Number.isNaN(parseInt(text))) {
  console.log(text.length);
} else {
  console.log("erreur.");
}
