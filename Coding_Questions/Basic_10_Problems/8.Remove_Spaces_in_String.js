// remove the spaces found in the array.

var str = "My name is Devi Prasad Mishra";

function removeSpace(str) {
    return str.replace(/[' ']/g, ''); // using the regular expression to remove the space.
}

console.log(removeSpace(str));