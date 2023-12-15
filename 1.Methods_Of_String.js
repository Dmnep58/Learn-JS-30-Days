var a = "My name is Devi prasad mishra. my aim is to be a developer."

// find the length of the string
var len = a.length;
console.log("length of the string is : " + len);

// to lower case
var lower = a.toLowerCase();
console.log("converting to lowercase : " + lower);

// to upper case
var upper = a.toUpperCase();
console.log("converting to  upper case: " + upper);

// inculdes searches for the word or character and return inboolean type */
var include = a.includes('d');
console.log("find the character or word : " + include);

//find the word or character that stars with the 
var stwith = a.startsWith('M');
console.log("the character starts with is present or not : " + 'M  :' + stwith);

// ends with just opposite of starts with
var enwith = a.endsWith("ra");
console.log("the character ends with is present or not : " + 'ra  :' + enwith);

// search return the index of the word or character
var searches = a.search("D");
console.log("find the index of the character : D : " + searches);

// matches find the word collects it and return it as array
var matches = a.match(/is/g);
console.log("finds the character and collects it as string: " + matches);

// find the index of the word or char from strating
var indexof = a.indexOf('Devi');
console.log("index of word from start is : " + indexof);

// find the index of the word or char from last
var lastindexof = a.lastIndexOf('i');
console.log("last indexof word from last of string: " + lastindexof);

// replace is used to change the word in the string
var replacing = a.replace('is', 'as');
var replaced = a.replace(/is/g, 'are');
console.log("replaced is used to replcae first found word matching form the string: " + replacing +
    "\n Replaces all the word found  matching : " + replaced);

// trims the extra spaces from the words and the character
var b = " Devi ";
var trimmers = b.trim();
console.log("trim the extra spaces from the word : " + trimmers);

// finds the position of the character
var charat = a.charAt(8);
console.log("character in 8th position is: " + charat);

//charcodeat return ascii code of the character 
var charcode = a.charCodeAt(9);
console.log("char code of 9th position is: " + charcode);

// fromcharcode return char from the ascii code
var fromcharcode = String.fromCharCode(65);
console.log("character of the ascii code 65 is :" + fromcharcode);

// concate merges 2 strings
var str1 = "Devi";
var str2 = "Prasad";
var str3 = str1.concat(str2);
console.log("merged 2 string together gives : " + str3);

// splits converts string into char arrray
var spilting = a.split(" "); // " " means splits from the spaces.
console.log("splitting the main string gives :" + spilting);

// repeat function repats the string as many times as u want
var repeating = a.repeat(3);
console.log("repeating the main string we get : " + repeating);

//slice return the characters in between given start and end indexes
var slicing = a.slice(12, 17);
console.log("after slicing we will get : " + slicing);

// substr works similar to slice but can have only one parameter also.
var substrs = a.substr(3);
console.log("substr of the string a is : " + substrs);

//substring works simliar to slice like it will go till end-1.
var substrings = a.substring(3, 6);
console.log("substring of the string a is : " + substrings);

// tostring converts any integer or float value to string.
var integers = 10;
var inttostring = integers.toString();
console.log("converting int to string : " + inttostring);
console.log("type of the tostring value : " + typeof inttostring);

// value of function 
var valuofmethod = a.valueOf();
console.log("value of method return : " + valuofmethod);