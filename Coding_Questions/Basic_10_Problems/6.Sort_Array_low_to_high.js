var a = [1, 6, 2, 8, 3, 9];

// sorting the array using insertion sort method

function sorting(a) {
    var len = a.length;
    for (var i = 0; i < len; ++i) {
        var key = a[i];
        var j = i - 1;
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j = j - 1;
        }
        a[j + 1] = key;
    }
    return a;
}

console.log("Before sorting\n" + a + "\n" +
    "After sorting ");
console.log(sorting(a));