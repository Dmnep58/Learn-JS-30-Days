const obj = {
    js : 'javascript',
    cpp : 'C++',
    rv : 'ruby',
    swift : 'swift by apple'
}


// for in loops is use  to iterate in objects same for the array

for (const key in obj) {
   // console.log(key); // print the keys of the object
   // console.log(obj[key]); // print the values of the key.

console.log(`${obj[key]} key is ${key}`);
}