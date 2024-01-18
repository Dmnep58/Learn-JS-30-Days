// first promises

const promiseOne = new Promise(function(resolve , reject){
    // Do an async task
    // DB calls
    // Cryptography related tasks
    // network call

    setTimeout(function(){
        //console.log('Async task is complete');
        resolve() // now it will be connected with .then below
    },1000)
})

// consume the promise
promiseOne.then(function(){               // resolve has connection with resolve
    //console.log('Promise consumed');
})






// create a new promise without storing it in variable

new Promise(function(resolve , reject){
    setTimeout(function(){
       // console.log("async task 2");
        resolve();
    },1000)
}).then(function(){
    //console.log("async 2 resolved")
})






// 3rd promise

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({Username : 'Devi', email:'dpm90797@gmail.com'})  // mainly resolve has object to be passed.
    },1000)
})

promiseThree.then(function(user){
    //console.log(user);
})







// 4th promise

const PromiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({user:'Devi', password:'123'});
        }
        else{
            reject('ERROR: something went wrong');  // contains the error
        }
    },1000)
})

// chaining the then to print the values
PromiseFour.then( (user) => {
    //console.log(user)
    return user.user
})
.then( (user) =>{
  //  console.log(user)
})
.catch( (error) => console.log(error))
.finally( () => console.log('The promise is either rejected or resolved'))






// Promise Five

const PromiseFive = new Promise( (resolve , reject) => {
    setTimeout(() => {
        let error = true;

        if(!error){
            console.log('error resolved promise five')
            resolve({name : 'resolving'});
        }
        else{
            reject('error occurred in promise five');
        }
    },1000)
});


// async await is exactly same as .then anf .catch which will hold the data for some time and then do then respective

async function consumePromiseFive(){
    try{
        const response = await PromiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()