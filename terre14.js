let args = process.argv;

let current = parseInt(args[2]);
let i = 0;
let sorted = true;
let error = false;
for (let num of args) {
  if (i >= 2) {
    if (Number.isNaN(parseInt(num))) {
      error = true;
      break;
    }

    if (current <= parseInt(num)) {
      current = parseInt(num);
    } else {
      sorted = false;
    }
  }
  i++;
}
if (error) {
  console.log("erreur.");
} else {
  if (sorted) {
    console.log("Triée !");
  } else {
    console.log("Pas triée !");
  }
}
