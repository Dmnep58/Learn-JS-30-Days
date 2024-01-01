// variables let , const and var

            let a = 20
            const  b = 30
            var  c = 50

            //console.log(a , b, c);


/*1.  the above code with not have any problems but the real problems occure whent he curly braces used like local , global scope 
        based on the programmers requirements */


        /* 
        c will occur problem because the var variable will be on the global scope which occur problems.
        we can declare the var varibles more then one time which will be continuesly override the values.
        so var declaretion is problematic on the basis of local scope 
        */


        /* 
        let is preferred for the block scope and the global scope. where variables is declared once
         */

        /*
        const is used for  making the variabl unchangeable in progamme and cannot be declare twice.
        */




/* 2. Nested Scope  -->  closure property */

                function one(){
                    const username = "Devi"

                    function two(){
                        const website = "youtube"
                        console.log(username);
                    }
                    // console.log(website); // can not be accessed as it has its scope in two function

                    //two()  // this the property of the one function.

                }

                // one() // every time we call one function -- funtion two will automatically executed.




                /* using the closure with if else */
                        if(true){
                            const username = "Devi"
                            if(username === "Devi"){
                                const website = "yotube"
                                // console.log(username+" " + website);
                            }
                        }



