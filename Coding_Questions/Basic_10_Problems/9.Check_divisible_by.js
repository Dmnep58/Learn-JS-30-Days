// check a number is divisible by 10 or not and return the boolean value

var a = 12;

function checkDivisible(num) {
    if (num % 10 == 0) return true;
    else return false;
}

console.log("number is divisible by 10 " + checkDivisible(a));