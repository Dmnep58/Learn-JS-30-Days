// to find the nodes as per our required that may be the parent or may be the child or sibiling

// 1. parentElement method returns the root node if not present return undefined or null

var a = document.getElementById("inner").parentElement;
console.log(a);

            // change the color using this method like
            document.getElementById("inner").parentElement.style.backgroundColor = "red";

            // change the color of the parent class using the child having id child-c
            document.getElementById("child-c").parentElement.style.backgroundColor = "blue";



// 2. parentNode method 

var b = document.getElementById("inner").parentNode;
console.log(b);




// 3. Children method  returns all the child node of the element

var c = document.getElementById("outer").children;
console.log(c);

                // check the childrens of the inner div
                console.log(document.getElementById("inner").children);

                // fetch the 3 child of the inner element
                console.log(document.getElementById("inner").children[2]);

                // change the color of the 4th child of the class inner
                document.getElementById("inner").children[3].style.backgroundColor = "red";




// 4. ChilNode method return the number of the nodes in inner div and also return undefined if the element is not found.

var d = document.getElementById("inner").childNodes;
console.log(d);

                // trying to set the background color of the 2 div i.e. B , it will throw an error because it has only the read only access.
                    // document.getElementById("inner").childNodes[2].style.backgroundColor = "pink";




// 5. firstChild return the HTML content of the first child node

var e = document.getElementById("inner").firstChild.innerHTML;
console.log(e);




// 6. firstElementChild returns the first child element (ignores text and comment nodes)

var f = document.getElementById("inner").firstElementChild;
console.log(f);


                    //change the background color of the first element in the inner dic
                        document.getElementById("inner").firstElementChild.style.backgroundColor = "pink";






// 7. lastChildElement returns the last element of the inner div
var g = document.getElementById("inner").lastElementChild;
console.log(g);



// 8. lastChild returns the last child node (an element node, a text node or a comment node). Whitespace between elements are also text nodes.
var g = document.getElementById("inner").lastChild;
console.log(g);





// 9. nextElementSibiling return the next same level node present in the inner div just like ---> a tree has its sibilings.

var h = document.getElementById("child-c").nextElementSibling.innerText;
console.log(h);



// 10. nextElementSibiling return the next same level node present in the inner div just like ---> a tree has its sibilings.

let i = document.getElementById("child-c").nextSibling.innerHTML;
console.log(i);





// 11. previousElementSibiling return the next same level node present in the inner div just like ---> a tree has its sibilings.

var j = document.getElementById("child-c").previousElementSibling.innerText;
console.log(j);