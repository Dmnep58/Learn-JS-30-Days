/*
this keywards says about the current contents present.
*/

const userReg = {
    username : "Devi",
    price : 999,
    loggedInMessage : function(){
        console.log(`${this.username} welcome to website`);  // this is using the current contect i.e. username
    }
}

/*
const { loggedInMessage : welcomMessage } = userReg 
console.log(welcomMessage());

console.log(userReg.loggedInMessage());

console.log(this) // print the current context like current object which will be empty becuase of empty global object

but in web browser it will shows the window as it is the current context as global object.
*/



/*
function one(){
    console.log(this);
}

one()  // based on the node enviroment it will print the value

we cant use this in function. it will work on objects

*/






                /* Arrow function */



    /*1.add 2 number  and explicit returns */
    const addTwoNumber = (num1 , num2) => {
        return num1 + num2
    }

    // console.log(addTwoNumber(3,2));




    /* 2.  implict returns 
            in this function we need not to write the return statement as it will detect it automatically 
            and should be written in one line.
    */
        const  subTwoNumbers =  (num3 , num4 ) => num3 - num4
        // console.log(subTwoNumbers(5,6));

        /*  2.1 
        if we use the curly braces then we need to write the return statement but if we use the paranthersis () or have not used it
        then we need not to write the return statement
        */

        const  MULTwoNumbers =  (num3 , num4 ) => (
             num3 *  num4
            )
                
        // console.log(MULTwoNumbers(5,6));
        



    /* 3. return an object using implict returns
                
        we have to use the curly brace while handeling the objects in the arrow function.
    */

        const obj = () => (
            {
                username : "Devi"
            }
        )









