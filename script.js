var today = new Date();

// LOCK SCREEN
var lockhrs = new Array(23);
lockhrs[0] = "12"
lockhrs[1] = "1"
lockhrs[2] = "2";
lockhrs[3] = "3";
lockhrs[4] = "4";
lockhrs[5] = "5";
lockhrs[6] = "6";
lockhrs[7] = "7";
lockhrs[8] = "8"
lockhrs[9] = "9";
lockhrs[10] = "10";
lockhrs[11] = "11";
lockhrs[12] = "12";
lockhrs[13] = "1";
lockhrs[14] = "2";
lockhrs[15] = "3";
lockhrs[16] = "4";
lockhrs[17] = "5";
lockhrs[18] = "6";
lockhrs[19] = "7";
lockhrs[20] = "8";
lockhrs[21] = "9";
lockhrs[22] = "10";
lockhrs[23] = "11";

var lockminutes = new Array(9);
lockminutes[0] = "00";
lockminutes[1] = "01";
lockminutes[2] = "02";
lockminutes[3] = "03";
lockminutes[4] = "04";
lockminutes[5] = "05";
lockminutes[6] = "06";
lockminutes[7] = "07";
lockminutes[8] = "08";
lockminutes[9] = "09";
lockminutes[10] = "10";
lockminutes[11] = "11";
lockminutes[12] = "12";
lockminutes[13] = "13";
lockminutes[14] = "14";
lockminutes[15] = "15";
lockminutes[16] = "16";
lockminutes[17] = "17";
lockminutes[18] = "18";
lockminutes[19] = "19";
lockminutes[20] = "20";
lockminutes[21] = "21";
lockminutes[22] = "22";
lockminutes[23] = "23";
lockminutes[24] = "24";
lockminutes[25] = "25";
lockminutes[26] = "26";
lockminutes[27] = "27";
lockminutes[28] = "28";
lockminutes[29] = "29";
lockminutes[30] = "30";
lockminutes[31] = "31";
lockminutes[32] = "32";
lockminutes[33] = "33";
lockminutes[34] = "34";
lockminutes[35] = "35";
lockminutes[36] = "36";
lockminutes[37] = "37";
lockminutes[38] = "38";
lockminutes[39] = "39";
lockminutes[40] = "40";
lockminutes[41] = "41";
lockminutes[42] = "42";
lockminutes[43] = "43";
lockminutes[44] = "44";
lockminutes[45] = "45";
lockminutes[46] = "46";
lockminutes[47] = "47";
lockminutes[48] = "48";
lockminutes[49] = "49";
lockminutes[50] = "50";
lockminutes[51] = "51";
lockminutes[52] = "52";
lockminutes[53] = "53";
lockminutes[54] = "54";
lockminutes[55] = "55";
lockminutes[56] = "56";
lockminutes[57] = "57";
lockminutes[58] = "58";
lockminutes[59] = "59";

var lockweekday = new Array(7);
lockweekday[0] = "Sunday";
lockweekday[1] = "Monday";
lockweekday[2] = "Tuesday";
lockweekday[3] = "Wednesday";
lockweekday[4] = "Thursday";
lockweekday[5] = "Friday";
lockweekday[6] = "Saturday";

var lockmonth = new Array(12);
lockmonth[0] = "January";
lockmonth[1] = "February";
lockmonth[2] = "March";
lockmonth[3] = "April";
lockmonth[4] = "May";
lockmonth[5] = "June";
lockmonth[6] = "July";
lockmonth[7] = "August";
lockmonth[8] = "September";
lockmonth[9] = "October";
lockmonth[10] = "November";
lockmonth[11] = "December";

var locktime = lockhrs[today.getHours()] + ":" + lockminutes[today.getMinutes()];
var lockdate = lockweekday[today.getDay()] + "," + "&nbsp;" + lockmonth[today.getMonth()] + "&nbsp;" + today.getDate();
document.getElementById("locktime").innerHTML = locktime;
document.getElementById("lockdate").innerHTML = lockdate;

// CALENDAR APP
var calweekday = new Array(7);
calweekday[0] = "SUN";
calweekday[1] = "MON";
calweekday[2] = "TUE";
calweekday[3] = "WED";
calweekday[4] = "THU";
calweekday[5] = "FRI";
calweekday[6] = "SAT";

var calwd = calweekday[today.getDay()];
var calda = today.getDate();
document.getElementById("calwd").innerHTML = calwd;
document.getElementById("calda").innerHTML = calda;

// IN THE CALENDAR APP
var month = new Array(12);
month[0] = "1";
month[1] = "2";
month[2] = "3";
month[3] = "4";
month[4] = "5";
month[5] = "6";
month[6] = "7";
month[7] = "8";
month[8] = "9";
month[9] = "10";
month[10] = "11";
month[11] = "12";

document.getElementById("m").innerHTML = month[today.getMonth()];
document.getElementById("d").innerHTML = today.getDate();
document.getElementById("y").innerHTML = today.getFullYear();
