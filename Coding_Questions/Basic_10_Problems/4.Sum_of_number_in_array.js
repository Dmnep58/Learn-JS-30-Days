// find the sum of the array numbers in array.
var a = [1, 2, 3, -4, -2, -3];

function arraySum(b) {
    var sum = 0;
    for (var i = 0; i < b.length; i++) {
        sum += b[i];
    }
    return sum;
}

var sum = arraySum(a);
console.log(sum);


console.log();

// sum of 2 different array
var b = [1, 2, 3, 4, 5, 6, 7];
var c = [-1, -5];

function TwoArraysSum(a, b) {
    var sum = 0;
    var i = 0,
        j = 0;

    while (i < a.length) {
        sum += a[i];
        i++;
    }
    while (j < b.length) {
        sum += b[j];
        j++;
    }

    return sum;
}

var twoArraySum = TwoArraysSum(b, c);
console.log(twoArraySum);