let args = process.argv;
let textDate = args[2];
let splitDate = textDate.split(":");
let ushours = parseInt(splitDate[0]);
let minsAMPM = splitDate[1];
let mins = parseInt(minsAMPM.slice(0, 2));
let AMPM = minsAMPM.slice(2, 4);

let hours;

if (ushours <= 11 && ushours >= 1 && AMPM == "AM") hours = ushours;

if (ushours <= 11 && ushours >= 1 && AMPM == "PM") hours = ushours + 12;

if (ushours == 12 && AMPM == "PM") hours = ushours;

if (ushours == 12 && AMPM == "AM") hours = 0;

if (mins == 0) mins = "00";

console.log(hours + ":" + mins);
