let args = process.argv;
let textDate = args[2];
let splitDate = textDate.split(":");
let hours = parseInt(splitDate[0]);
let mins = parseInt(splitDate[1]);

let ushours;

let AMPM;
if (hours <= 11) {
  AMPM = "AM";
} else {
  AMPM = "PM";
}

if (hours <= 12 && hours >= 1) ushours = hours;

if (hours >= 13 && hours <= 23) ushours = hours - 12;

if (hours == 0) ushours = 12;

if (mins == 0) mins = "00";

console.log(ushours + ":" + mins + AMPM);
