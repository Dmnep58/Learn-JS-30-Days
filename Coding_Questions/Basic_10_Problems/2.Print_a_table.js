// print a table as per the requirement

var number = 12;
for (var i = 1; i <= 10; i++) {
    console.log(number + " X " + i + " = " + number * i);
}

console.log("\n");

// using a function to printa table of a number

function table(n) {
    for (var i = 1; i <= 10; i++) {
        console.log(n + " X " + i + " = " + n * i);
    }
}

table(13);