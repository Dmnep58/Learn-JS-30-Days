// here we will be using the query selector for the dom


/* 1. querySelector -- it will select the1st found selector
    e.g. :
    document.querySelector(CSS selector)*/

document.querySelector("#myname").innerHTML = "Pawan Kumar Mishra";




/*2. querySelectorAll --> it willbe selecting all the selctors present
    e.g.:
    document.querySelectorAll(css selector)
it will store them as array and show the values present in it as per the commands.*/

var element;
element = document.querySelectorAll(".intro")[1];