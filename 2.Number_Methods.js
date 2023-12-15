/*  1. the method Number(value ) converts the string or boolean or cahr to the number format */
console.log("using number method :")

// e.g. 1
var stringvalue = "99";
var b = Number(stringvalue);
console.log(b);

//e.g. 2
var booleanvalue = true;
console.log(Number(booleanvalue));





/* 2. parseInt( value ) return the  integer value  present int the strating other wise NaN*/
console.log("using parseInt method: ");

//e.g 1
var parseint1 = 99.90;
var parseint1conversion = parseInt(parseint1);
console.log(parseint1conversion);

// e.g. 2
var parseint2 = "22 years";
var parseint2conversion = parseInt(parseint2);
console.log(parseint2conversion);






/*3. parseFloat(value) return the staring integer value if starting isnot integer then NaN*/
console.log("using parseFloat method: ");

//e.g.1
var parsefloat1 = "10 20";
var parsefloat1conversion = parseFloat(parsefloat1);
console.log(parsefloat1conversion);

//e.g. 2
var parsefloat2 = "he is 2 yrs old";
var parsefloat2conversion = parseFloat(parsefloat2);
console.log(parsefloat2conversion);





/*4. isFinite return boolean values to check the value id finite or not */
console.log("using isFinite method:");

//e.g. 1
var isfinitenumer = 100;
console.log(Number.isFinite(isfinitenumer));

//e.g. 2
var isfinitenumer2 = Infinity;
console.log(Number.isFinite(isfinitenumer2));





/*5. isInteger return to check the number is integer or not */
console.log("using isInteger method :");

//e.g.1
var isinteger1 = 100.23;
console.log(Number.isInteger(isinteger1));

//e.g. 2
var isinteger2 = "1000";
console.log(Number.isInteger(isinteger2));




/*6. isFixed return the up to decimal points we requires the variable */
console.log("usning the isFixed: ");

//e.g. 1
var isfixed1 = 5.67856;
console.log(isfixed1.toFixed(2));
console.log(isfixed1.toFixed(4));





/*7. toPrecision is used to return the number of digits we want  */
console.log("using toPercision method: ");

//e.g.1
var toprecision1 = 5.6865;
console.log(toprecision1.toPrecision(3));
console.log(toprecision1.toPrecision(10));