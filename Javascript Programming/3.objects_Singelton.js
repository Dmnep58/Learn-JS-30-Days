
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
                const obj4 = Object.assign(obj1 , obj2)
                // console.log(obj4);

