// count the number of vowels in a string
var str = "DEvi";
var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(str, vowels) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str.charAt(i))) {
            continue;
        } else {
            count++;
        }
    }

    return count;
}

console.log("number of vowels in string are: " + countVowels(str, vowels));