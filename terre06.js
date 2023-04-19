let args = process.argv;
let text = args[2];
let resultat = "";
if (text) {
  for (let l of text) {
    resultat = l + resultat;
  }
}
console.log(resultat);
