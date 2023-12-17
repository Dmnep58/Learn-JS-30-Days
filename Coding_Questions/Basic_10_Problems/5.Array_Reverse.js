var a = [1, 2, 3, 4, 5];

function reverse(a) {
    var i = 0,
        j = a.length - 1;
    while (i != j) {
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i++;
        j--;
    }

    return a;
}

console.log(reverse(a));