let args = process.argv;
let fich = args[1];
fich = fich.substring(fich.lastIndexOf("\\") + 1);
console.log(fich);
