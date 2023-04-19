let args = process.argv;
let i = 0;
for (let arg of args) {
  if (i > 1) {
    console.log(arg);
  }
  i++;
}
