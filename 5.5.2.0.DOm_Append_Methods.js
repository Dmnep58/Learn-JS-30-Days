
// the html file used is  5.5.1.


/* The HTML DOM createElement() method is used for creating an HTML element dynamically using JavaScript.
    It takes the element name as the parameter and creates that element node. You need to use the appendChild() 
    method to have the newly created element as part of DOM  */


    // appends methods can help to attach the create methods inthe html file.



    // 1. appendChild we can attached to any tags in html page


            // example 1
                //first createElement
                var newElement = document.createElement("h2");

                // create text
                var text = document.createTextNode("hii devi");


                // append both of them
                newElement.appendChild(text);
                document.getElementById("test").appendChild(newElement);


// 2. insertBefore can add at aby position according to the programers

        // example 2
            var target = document.getElementById("test");

            // insert before all the things in the div target
            target.insertBefore(newElement,target.childNodes[0]); 



/*  3. method inserts a an element into a specified position.
            We can insert it into 4 position:
            1. beforebegin
            2. afterbegin
            3. beforeend
            4. afterend */

                // examples 1  beforebegin

                var e1 = document.createElement("p");
                var t1 = document.createTextNode("pawan before begin using insertAdjacentElement ");
                e1.appendChild(t1);
                var target = document.getElementById("test");
                target.insertAdjacentElement("beforebegin",e1);

                
                // exapmles 2 afterbegin

                var e2 = document.createElement("p");
                var t2 = document.createTextNode("pawan after begin using insertAdjacentElement");
                e2.appendChild(t2);
                var tar2 = document.getElementById("test");
                tar2.insertAdjacentElement("afterbegin",e2);


                // exapmle 3 beforened
                
                var e3 = document.createElement("p");
                var t3 = document.createTextNode("pawan before end using insertAdjacentElement");
                e3.appendChild(t3);
                var tar3 = document.getElementById("test");
                tar3.insertAdjacentElement("beforeend",e3);


                // exapmle 4 afterened
                
                var e4 = document.createElement("p");
                var t4 = document.createTextNode("pawan before end using insertAdjacentElement");
                e4.appendChild(t4);
                var tar4 = document.getElementById("test");
                tar4.insertAdjacentElement("afterend",e4);




/* 4. insertAdjacentHtml methods helps to insert the html
        We can insert it into 4 position:
                1. beforebegin
                2. afterbegin
                3. beforeend
                4. afterend */

                                // examples 1  beforebegin
                                var t1 = "<h6>Devi after begin using insertAdjacentHtml</h6>";
                                var target1 = document.getElementById("test");
                                target1.insertAdjacentHTML("afterbegin",t1);

                                
                                // exapmles 2 afterbegin

                                var t2 = "<h6>Devi before end using insertAdjacentHtml</h6>";
                                var target2 = document.getElementById("test");
                                target2.insertAdjacentHTML("beforeend",t2);


                                // exapmle 3 beforened
                                
                                var t3 = "<h6>Devi after end using insertAdjacentHtml</h6>";
                                var target3 = document.getElementById("test");
                                target3.insertAdjacentHTML("afterend",t3);


                                // exapmle 4 afterened
                                
                                var t4 = "<h6>Devi before begin using insertAdjacentHtml</h6>";
                                var target4 = document.getElementById("test");
                                target4.insertAdjacentHTML("beforebegin",t4);



