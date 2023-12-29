
                                                                // example using index.html



// 1. contains mehtod say that the element is present as child in the parent node or not it return the boolean value

          

            var parentElement = document.getElementById("home");

            var childElement = document.getElementById("devi")

            var find = parentElement.contains(childElement);

            console.log("contains method answer is: " +find);



// 2. hasAttribute method returns true if the attribute exists, otherwise false

            // exapmle: check if a button has onclick attribute

            const parentElement2 = document.getElementById("actionrepeat");

            let answer = parentElement2.hasAttribute("onclick");

            console.log( "hasAttribute method answer is: "+ answer);



/* 3. hasChildNodes() method method returns true if the specified node has any child nodes, otherwise false.
        this method returns true if the specified node has any child nodes, otherwise false. */

                //example: check that the list has their own child nodes or not
                let listchildpresent = document.getElementById("list1");
            let ans = listchildpresent.hasChildNodes();
            console.log("hasChildNodes method answer is: "+ ans);



/*4. isEqualNode() method  returns true if two elements (or nodes) are equal.

            Two nodes are equal if all of the following conditions are true:

            They have the same nodeType
            They have the same nodeName
            They have the same nodeValue
            They have the same nameSpaceURI
            They have the same childNodes with all the descendants
            They have the same attributes and attribute values
            They have the same localName and prefix           
*/


                // example : compare the  1st element of the list1 and list2 to very is they are equal or not

                        var element1 = document.getElementById("list1").firstElementChild;

                        var element2 = document.getElementById("list2").firstElementChild;

                        var isequal = element1.isEqualNode(element2);
                        
                        console.log("isEqualNode method answer is: "+ isequal);
