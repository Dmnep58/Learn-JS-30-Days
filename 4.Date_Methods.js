/*creating an date object  */
var now = new Date();
var previous = new Date('January 5 2001');

/*1. toDateString() it return the date with day */
console.log(now.toDateString());


/*2. getDate() returns the date without year */
console.log("day only: " + now.getDate());

/*3. getFullYear() return the year */
console.log("year only: " + now.getFullYear());

/*4. getMonth() return the month */
console.log("month only: " + now.getMonth());

/*5. getDay() return the day */
console.log("weekday is:" + now.getDay());


/*6. getHours() return the hour  */
console.log("get present hour: " + now.getHours());


//7.getMinutes return the present minutes
console.log("get minutes: " + now.getMinutes());


//8. getMilliSeconds return the milliseconds
console.log("get millisceonds " + now.getMilliseconds());

//9.set sets the date as per our need
var setdate = new Date();

setdate.setDate(20)
console.log("setting the date: " + setdate);

setdate.setFullYear(2020)
console.log("setting the fullyear: " + setdate);