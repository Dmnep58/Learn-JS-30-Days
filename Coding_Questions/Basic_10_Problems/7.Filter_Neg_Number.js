// find the neg number in the array and remove it.

var arr = [1, 2, -3, 4, -5, 6, 7, -8];

function removeNeg(arr) {
    var j = 0;
    var b = new Array();

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            b[j++] = arr[i];
        }
    }
    return b;
}

console.log("After removing neg number : " + removeNeg(arr));