let alphabet = "";
let args = process.argv;
let letter = args[2];
let letterCode = letter.charCodeAt(0);
for (let i = letterCode; i < 26 + 97; i++) {
  alphabet = alphabet + String.fromCharCode(i);
}
console.log(alphabet);
