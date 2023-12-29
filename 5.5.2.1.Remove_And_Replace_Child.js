// remove and replace childs dom method


// 1. replace element in dom
var newElement = document.createElement("li");
var newText = document.createTextNode("mango");
newElement.appendChild(newText);
var old =document.getElementById("test").children[0];
document.getElementById("test").replaceChild(newElement,old);

// 2. remove element from dom

var target = document.getElementById("test");
target.removeChild(target.children[0]);

// shortcut

document.getElementById("test").removeChild(document.getElementById("test").children[0]); 


// 3. copy element using the cloneNode method

var tar = document.getElementById("test").children[0];
var copy = tar.cloneNode(true);

document.getElementById("list1").appendChild(copy);

document.getElementById("list1").style.backgroundColor = "red"; // set the bg color to identify the copied element.



