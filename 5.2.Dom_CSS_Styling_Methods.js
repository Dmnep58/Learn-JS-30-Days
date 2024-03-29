// we can style the dom using the css and to do so we have 3 methods in dom

// 1.Style --> return the style value we have given like below example if not found the it will print nothing.

// 1.a. get method
var element;
element = document.querySelector("#name").style.color; // return the color applied to it using the inner css
console.log(element);


/* 1.b. set method --> while using this method we can set the style having some change  
        like : in css  bakground-color:red;  
                but in this we use capital letter of the word just after hypen
                        like: backgorundColor ="red" */

document.querySelector("#name").style.backgroundColor = "grey";
document.querySelector("#name").style.fontSize = "larger";




// 2.className  --> shows the name in same string 

/* 2.a. set class name to any tag like:
        we set class name to the section...*/

document.querySelector("#home").className = "homies sections"; // it will have classes  --- homies sections --- and the last class has highest priority.


/* 2.b. get the class name of any tag */
var classnames = document.querySelector("#home").className;
console.log(classnames);





// 3.classList --> returns a array having separate indexes.

/* 3.a. set the class list to any sections or divs */
document.querySelector("#home").classList = "security to home";


/* 3.b. get the class list from the document */
var classlists = document.querySelector("#home").classList;
console.log(classlists);



/* Methods of classList */

/* 1. add() method it will add a class to the tag we want like */
document.querySelector("#home").classList.add("you");

/* 2. remove() method will be removing class from tag like */
document.querySelector("#home").classList.remove("you");

/*3. length method to find the length of a tag i.e return how many calsses is there in a tag */
var classlen = document.getElementById("home").classList.length;
console.log(classlen);

/*4. toggle() method  it add and removes the class as per instructions like if u click it once it will 
add a class and anotehr click on it will remove the same class  like: */

document.getElementById("aboutheading").addEventListener("click", abc);

function abc() {
    document.getElementById("aboutheading").classList.toggle("wow");
};


/*5. item() method return the name of the class present in the index */

var classname = document.getElementById("home").classList.item(1); // name varies to index value like index 0 == security , index 1 == to.
console.log(classname);


/*6. contains() method returns the value showing that the class is present or not */

var classpresent = document.getElementById("home").classList.contains("to");
console.log(classpresent);