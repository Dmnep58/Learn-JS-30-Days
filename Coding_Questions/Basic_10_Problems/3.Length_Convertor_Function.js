// convert kilometers in meter and then centimeters

function kmToM(number) {
    return number * 1000;
}

function mTOCm(number) {
    return number * 100;
}
var number = 1;

var meter = kmToM(number);
var centimeters = mTOCm(meter);

console.log(meter + " " + centimeters);