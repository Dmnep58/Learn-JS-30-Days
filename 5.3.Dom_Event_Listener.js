// adding action event listener to the add events.add making document more interactive




// 1. way to make actions using js.

// like we want todo some thing with the name home section then we canuse like:
document.getElementById("name").onclick = colorchange;

function colorchange() {
    document.getElementById("name").style.backgroundColor = "green";
}

// similarly we can use onmouseenter fucntion also
document.getElementById("myname").onmouseenter = changefont;

function changefont() {
    document.getElementById("myname").style.fontSize = "smaller";
}




// 2. way using the action event listner  ---> changing the font size of the about div

document.getElementById("aboutheading").addEventListener("click", changeSize); // first parameter isevent name and the second parameter is function name


function changeSize() {
    document.getElementById("aboutheading").style.fontSize = "150px";
}


// 2.a using multiple methods in single tag
document.getElementById("aboutheading").addEventListener("click", function() {
    document.getElementById("aboutheading").style.border = "10px solid red";
});