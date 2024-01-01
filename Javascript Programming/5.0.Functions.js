/*
function in JS
*/

// 1. create a sum function of 2 numbers

        function sum(a,b){
            return a+b;
        }

        // console.log(sum(1,2))



// 2. function to show just logged in person 

            function LoggedIn(username){
                    if(username === undefined  || !username){
                        return `Please enter a username`
                    }
                return `${username} just Logged in`
            }

            // console.log(LoggedIn('Devi'));
            // console.log(LoggedIn());  --> throws an error of undefinied argument which is handeled using the if statement in the funtion.


/* 3. predefined value in functions */

            function user(username = "Devi"){
                return `${username} logged in`
            }

            // console.log(user());
            // console.log(user("pawan"));



/* 4. using the rest operator 
            the same operator is said to be rest and spread based on the use-case.
*/
            // calcualte the dum of numbers.
                    function sum(...a){
                        let total = 0;
                        for(const a1 of a){
                            total += a1
                        }
                        return total
                    }

                   // console.log(sum(1,2,3));



                   // calcualte the dum of numbers. where 1st 2 numbers are fixed like
                   function sum( a, b, ...c){
                    let total = a+b;
                    for(const a1 of c){
                        total += a1
                    }
                    return total
                }

               // console.log(sum(1,2,3,4,5,6));  // the values in c is [ 3,4,5,6]

/* 5. using the functions with the objects  i.e passing object as an parameter in function*/

                const users = {
                    username : "Devi",
                    price : 199
                }

                function handleObject(anyObject){   // any object means we can pass any of the object in the function but only objects
                    console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);  // we can access the keys using the anyobject.Kwyname
                }

                // handleObject(users)



                /*object can be passed object directly like */ 

                        /*  handleObject({
                                username : "Pawan",
                                price : 200
                            })

                            */

                    



/* 6. Passing an array as an Paramater in the function */

                const myarray = [100 ,200, 300, 400, 500, 600]

                function returnSecondValue(getarray){
                    return getarray[2]
                }

                // console.log(returnSecondValue(myarray));




/* 7. different ways of declaring function */

                    const total = function (num){
                        return num + 1
                    }

                    // console.log(total(5));