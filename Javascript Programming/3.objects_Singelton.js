
/* we can create objects using a constructor then that objects has singleton */

            const users = new Object()

            users.id = "123abc"
            users.name = "devi"
            users.isLoggedIn = false

            // console.log(users);





/* 1. objects having objects in it --->  nested objects  */

                    const reguser = {
                        email: "dm@gmail.com",
                        fullName : {
                            userfullname:{
                                fistName: "DEvi",
                                middleName : "Prasad",
                                LastName : "Mishra"
                            }
                        }
                    }

                    // console.log(reguser.fullName.userfullname.middleName);



/* 2 . combining the objects with each others */

                const obj1 = { name : "ram"}
                const obj2 = { firstname : "hari"}

                /* trying to combining the objects simply */
                const obj3 = {obj1 , obj2};
                // console.log(obj3);  //--> creates a proble saying objects in objects 


                /* resolving the above problem we can use object.assign */
                const obj4 = Object.assign({}, obj1 , obj2)
                // console.log(obj4);


                /* using spread operator */
                const obj5 = {...obj1 , ...obj2}
                // console.log(obj5);





/*3. arrays having different object in it. */

                const LoggedUsers = [
                    {
                        id:1,
                        email : "dm1@gmail.com"
                    },
                    {
                        id:2,
                        email : "dm2@gmail.com"
                    },
                    {
                        id:3,
                        email : "dm3@gmail.com"
                    },
                    {
                        id:4,
                        email : "dm4@gmail.com"
                    }
                ]


                 /* access the email of the user in index 1 */
                            let a1 = LoggedUsers[1].email 
                             // console.log(a1);

                        /* print the object users */
                            // console.log(users);



                /* keys() Returns the names of the enumerable string properties and methods of an object.*/
                            let a2 = Object.keys(users)
                            // console.log(a2); 


                /* values() Returns an array of values of the enumerable properties of an object */
                        let a3 = Object.values(users)
                        // console.log(a3) 


                /*enteriees() Returns an array of key/values of the enumerable properties of an object */
                            let a4 = Object.entries(users)
                        // console.log(a4) 



                /* Determines whether an object has a property with the specified name. */
                        let a5 = users.hasOwnProperty('isLogged')
                        // console.log(a5) 
