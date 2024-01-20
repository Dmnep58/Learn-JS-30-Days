## Promises
    ---> it represents the eventual completion or failure of an asynchronous operation and its resulting value.
    e.g cryptographic problems and accessing of camera sound devices and so on. which takes time

--> it is an object representing eventual completion.


## example

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


