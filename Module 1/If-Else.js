//var num = readLine().trim();
var num = parseInt(readLine());

var grade;

if (num >= 90) {
    grade = "A";
}
else if (num >=80) {
    grade = "B";
}
else if (num >=70) {
    grade = "C"
}
else if (num >=60) {
    grade = "D"
}
else if (num >= 50) {
    grade = "E"
}
else {
    grade = "F";
}

console.log(grade);