/*  Immediately Invoked Function Expression ( IIFE ) */

/*
some times data gets polluted due to the global scope to mitigate that we uses the IIFE.

IIFE a function that runs the moment it is invoked or called in the JavaScript event loop.

like: 
if we want to connect the DB immediately weh the file is called without the gloabl pollution.
*/

            /*1. Basic structure or syntax 
                    or named IIFE
            */

            ( 
                function name(){
                console.log("Devi");
            }
            )();  //-->() calls the function and are in the () paranthesis


            /* use the semicolon at the end of the IIFE function. As the IIFE function doesnot know when to stop which will cause an error. */




            /* 2. Arrow function with parameters  or UnNamed IIFE. */

            (
                (name) => {
                    console.log(`my name is ${name}`);
                }
            )('Devi');


    