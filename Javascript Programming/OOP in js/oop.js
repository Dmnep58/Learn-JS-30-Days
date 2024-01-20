const user = {
    username : "Devi",
    loginCount: 4,
    SignedIn: true,

    getUserDetails : function(){
        console.log(`UserName: ${this.username}`);
    }
}

// console.log(user["username"])
// console.log(user.getUserDetails())

function Users(username , loginCount , isLoggedIn ){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this;
}

const userOne = new Users("Devi", 12 , true);
const userTwo = new Users("Pawan" ,12 , false) // user 2 will override user 1. if new keyword is not used
console.log(userOne.constructor);
// console.log(userTwo);



// constructor function  --> reference to user

// Instance of Method

// like it is the object of that class or not. like user instance of Users
