/* 1. ceil(x) return the upper value of the nearest integer */
var ceiling = Math.ceil(2.54);
var ceiling2 = Math.ceil(-23.34);
console.log("ceiling values are: " + ceiling + " " + ceiling2);


/* 2. floor(x) return the downward value of the nearest integer or float */
var flooring1 = Math.floor(5.55);
var flooring2 = Math.floor(-4.53);
console.log("floored values are: " + flooring1 + " " + flooring2);


/*3. round(x) returns round off to the nearest value  in  integer form*/
var rounding1 = Math.round(0.3);
var rounding2 = Math.round(0.5);
console.log("rounded values are: " + rounding1 + " " + rounding2);


/*4. trunc(x) it return the integer value only */
var truncing1 = Math.trunc(23.43);
var truncing2 = Math.trunc(43.532);
console.log("trunced values are: " + truncing1 + " " + truncing2);


/*5. max(x,y,z,...,n) returns the max value of the numbers */
var maximizing1 = Math.max(1, 2, 5, 3, 8, 6, 90);
var maximizing2 = Math.max(7, 4, 9, 3, 2, 1);
console.log("max values are: " + maximizing1 + " " + maximizing2);


/*6. min(xyx,z,....n) returns the min value of the numbers*/
var minimizing1 = Math.min(8, 7, 9, 0, 6, 4, 3);
var minimizing2 = Math.min(4, 5, 2, 7, 5, 9, 1);
console.log("min values are: " + minimizing1 + " " + minimizing2);


/*7. sqrt(x) return the square root of the number */
var squarerooting1 = Math.sqrt(25);
var squarerooting2 = Math.sqrt(169);
console.log("square roots are: " + squarerooting1 + " " + squarerooting2);


/*8. cbrt(x) return the cube root of a number */
var cuberooting1 = Math.cbrt(27);
var cuberooting2 = Math.cbrt(8);
console.log("cube roots are: " + cuberooting1 + " " + cuberooting2);


/*9. pow(x,y) returnt the value having pow y like pow(2,4)*/
var powering1 = Math.pow(2, 4);
var powering2 = Math.pow(3, 3);
console.log("power of the numbers are: " + powering1 + " " + powering2);


/*10.random() generates the random number */
var randomizing1 = Math.random(); // by default 0 to 1
var randomizing2 = (Math.random() * 10) + 1; // random value between 1 to 10
console.log("random values are: " + randomizing1 + " " + randomizing2);


/*11. abs(x) return the absolute value of the number */
var absolute1 = Math.abs(-23);
var absolute2 = Math.abs(34 - 234);
console.log("absolute values are: " + absolute1 + " " + absolute2);


/*12. pi math value 3.24 */
var pieing1 = Math.PI;
console.log("pie value is: " + pieing1);