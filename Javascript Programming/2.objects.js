// objects are key valued paired 

// object literals 

//1. object creation

const user = { 
    name:"Devi",
    age: 22,
    location:"Nepal",
    email: "dm@gmail.com",
    isloggedIn:false,
    lastlogin: ["tuesday","wednesday"],
    "fullname" : "devi prasad",  // we cannot access this using dot operator so we need to use brackets [" "]
}

            // simple print values
            console.log(user.name);

            //another way
            console.log(user["name"]);
            console.log(user["fullname"]);


// 2. change values in objects
        user.email = "pawan kumar";
        console.log(user.email);




// 3. freeze the object  i.e the values of keys in object can not be modified
        const users = {
            name:"devi",
        }

        Object.freeze(users);

            // now change name
                users.name = "pawan";
                console.log("after freezing the object no chaneg in name : "+ users["name"]);



// 4. adding a function in user object

            // example 1
                user.greeting = function(){
                    console.log("hello devi");
                }

                console.log(user.greeting);  // --> gives an out put for function reference

                console.log(user.greeting()); // --> executes the function .


            // example 2 access the name in the object in the function greetings 

                    user.greetings = function(){
                        console.log(`Hello user : ${this.name}`)  // use this ` for using it otherwise it will not work
                        // this key is used to access object present in same class
                    }
                console.log(user.greetings());


