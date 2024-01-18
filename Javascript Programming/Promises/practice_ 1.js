async function getAllUsers(){
    try{
        const response =  await fetch('https://api.github.com/users/Dmnep58')
        const data = await response.json()
        console.log(data)
    }
    catch(error) {
        console.log("ERROR: ",error)
    }

}

// getAllUsers();







// .then .catch format
fetch('https://api.github.com/users/Dmnep58')
.then ( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data)
})
.catch ( (error) => console.log(error))
