/*
for of statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
*/

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }




// for string

const str = "Hello Devi"

// for (const s of str) {
//     console.log(s);
// }




// Maps  -- > all unique values and no duplicates and insertion order is preserved

const map = new Map()
map.set('name', 'Devi')
map.set('roll', '20051958')
map.set('Nationality', 'Nepali')
    // console.log(map);

for (const [Maps, values] of map) {
    // console.log(Maps, values);
}



// for of loop  is not applicable for objects
const obj = {
    game1: 'nfs',
    game2: 'spiderman'
}

// for (const objs of obj) {
//     console.log(objs);
// }




// arrays using for each loop
const coding = ["js", "py", "cpp", "java", "ruby"];

// 1. call back functions
coding.forEach(function(index) {
    // console.log(index);
})

// 2. using arrow function
coding.forEach((item) => {
    // console.log(item);
})


//another way
function printMessage(item) {
    // console.log(item);
}

coding.forEach(printMessage)



// foreach loop having function can contain items , index , arr parameters

const mycoding = [

    {
        language: "java",
        languageFileName: "java"
    },

    {
        language: "javaScript",
        languageFileName: "js"
    },

    {
        language: "C++",
        languageFileName: "cpp"
    },

    {
        language: "Ruby",
        languageFileName: "rb"
    }

]

mycoding.forEach((item) => {
    console.log(`Language name is ${item.language} and its extension is ${item.languageFileName}`);
})