// 1. document method
var element;
element = document;
console.log(element);

//2 .document.all method
var num2 = document.all;
console.log(num2);
var num21 = document.all[2];
console.log(num21);

//3. documentElement method
// var num3 = document.documentElement


// 4.document.head method
var num4 = document.head;
console.log(num4);

// 5. document.title method
console.log(document.title);


//6. document.body
console.log(document.body);

//7. document.links method
console.log(document.links);
console.log(document.links[2]);

//8. documents.images method
console.log(document.images);
console.log(document.images[2]);

// 9.document.doctype
console.log(document.doctype);

//10. document.URL
console.log(document.URL);

//11. document.baseURI
console.log(document.baseURI);

//12. document.domain
console.log(document.domain);

//13. document.forms
console.log(document.forms);

//14. document.anchors
console.log(document.anchors);







/*-------------------------------- Use of Get and Set methods in the htmls ------------------------------
we can get text,html and attribute from the html to use that we have some methods of document*/

// 1.innerText --if i want to see what text are their in my name div then
var nameelement = document.getElementById("name").innerText;
console.log(nameelement);


// 2. innerHtml  -- if i want to see the html in the description div
var description = document.getElementById("description").innerHTML;
console.log(description);


/*3. getAttribute--it will extract the value of the attribute required by us.
        this will return the attribute value of the field we want.*/
var getattribute = document.getElementById("name").getAttribute("id");
console.log(getattribute);

// 4. getAttributeNode
var getattributeNode = document.getElementById("name").getAttributeNode("style");
console.log(getattributeNode);

// 5. Attributes -- extracts all the attributes present.
var attribute = document.getElementById("description").attributes;
console.log(attribute);



/* ---------------------------- Use of Set Attributes in the HTML-----------------------
    we can set the attribute values in the html for that we have some methods : */

// 1. innerText --> change the value in pragraph having id myname
document.getElementById("myname").innerText = "Pawan Kumar Mishra";

// 2. innnweHTML --> change the html of pragraph having id myname
document.getElementById("myname").innerHTML = "<h1>Nita Devi Mishra</h1>";

// 3. setAttribute
document.getElementById("name").setAttribute("id", "xyz");

// 4. Attributes  ---> we need to identify the attibute index so setAttribute is better than this
document.getElementById("xyz").attributes[1].value = "myname";


// 5. removeAttribute --> Delete the attribute
document.getElementById("myname").removeAttribute("class");