const coding = ["js", "py", "cpp", "java", "ruby"];



// it will not return any thing 
// const values = coding.forEach((item) => {
//     return item;
// });



// to solve the issue of returnoccured in for each loop we have different methods

const mynums = [1, 2, 3, 4, 5];
const newnums = mynums.filter((num) => num > 2) // filter returns the values  greater than 2. using the arrow function
    // console.log(newnums);



// if we use the curky braces then we need to use the return keyword explicit return.
const number = mynums.filter((num) => {
    return num > 5
})



// another way of doing the same work 

const numbers = []
mynums.forEach((nums) => {
    if (nums > 2) {
        numbers.push(nums)
    }
})




//filter has other methods also


// example of book arrray having objects in its each index

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// 1. fetch the books having the genre History
const userbooksgenre = books.filter((bok) => {
        return bok.genre === 'History';
    })
    // console.log(userbooksgenre);


// 2. fetch the books published after 2000  
const userBookyrs = books.filter((bk) => bk.publish > 2000) // can use like this without curely braces which doesnt require return statement
    // console.log(userBookyrs);


// 3. fetch the books published after 2000 and book genre id history
const bookspublished = books.filter((bk) => bk.publish > 1995 && bk.genre === 'History')
    // console.log(bookspublished);










// Map Function  --> creates a new array from calling a function for every array element and does not change the original array.
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newnum = num.map(num => num + 10);
// console.log(newnum);


// chaining
const newnum2 = num
    .map((numbers) => numbers * 10)
    .map((numbers) => numbers + 1)
    .filter((number) => number >= 40)

// console.log(newnum2);









// Reduce  --> method executes a reducer function for array element. && method returns a single value: the function's accumulated result.


// llike if we want to calcukate the sum of elements present in the array then we can use the reduce function.

const forsum = [1, 2, 3, 4, 5, 6, 7]
let intitalvalue = 0;
const sum =
    forsum.reduce((accumulator, currentvalue) => accumulator + currentvalue, intitalvalue)

// the accumulator will take the intitalvalue for the 1st time then stores the sum in it like 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7

// console.log(sum);




// another way using the funciton

const total = forsum.reduce(function(accumulator, currentvalue) {
    // console.log(`accumulator: ${accumulator} and currentValue : ${currentvalue}`);
    return accumulator + currentvalue
}, intitalvalue)

// console.log(total);




//this method will beperformed for the shooping cart also

const cart = [
    {
    itemname: "java",
    cost: 90
    },

    {
    itemname: "js",
    cost: 80
    },

    {
        itemname: "py",
        cost: 70
    },

    {
        itemname: "rust",
        cost: 60
    }

]

// add all the price of the course u have purchased. lets say all in cart

const totalCartPrice = cart.reduce( (accumulator,cartItem) => accumulator + cartItem.cost , 0)
console.log(totalCartPrice);