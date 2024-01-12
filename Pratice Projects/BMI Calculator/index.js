
const form = document.querySelector('form');

form.addEventListener('submit',function(e){

    e.preventDefault()

    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);

    const result = document.querySelector("#results");

    if(height === '' || height< 0 || isNaN(height)){
        result.textContent = "Please give a valid height"
    }
    else if(weight === '' || weight< 0 || isNaN(weight)){
        result.textContent = "Please give a valid weight"
    }
    else{
      const bmi =  (weight / ((height * height)/10000)).toFixed(2)
        result.textContent = `the bmi is ${bmi}`
    }

});