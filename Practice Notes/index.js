// "use strict";
// single line comment

/* 
Multiple line
comment
*/

/**
 * Loops:
 * 
 * 1. for
 * 2. while
 * 3. do while
 * 
 */

/*
let a =0; 
for (; a < 10; a++) {
    console.log(a);
}*/

// let a = 0;
/*while (a < 5) {
    console.log(a);

    a++;
}*/

/*
do {

    console.log(a);

    a++;
} while(a < 5)
 */


// Conditional statements

/*let age = 19;

if (age > 20) {
    console.log("your age is greater than 20")
} else if (age > 18) {
    console.log("your age is greater than 18")
} else {
    console.log("your age is less than 20")
}

switch (age) {
    case 20:
        console.log("age is 20")
        break;

    default:
        console.log("age NA")
        break;
}
*/

/*
let no1 = prompt("Enter no1")
let no2 = prompt("Enter no2")

let sum = parseFloat(no1) + parseFloat(no2);

if (isNaN(sum)) {
    console.error("Please enter numbers");
} else {
    console.log(sum);   
}
*/

// let name = "Abc";
// let outerAge;

// named function
// function sum(a, b = 1) {
//     console.log(a + b)
// }

// Anonymous function
// let sub = function(a, b) {
//     console.log(a - b);
// }

// arrow function
/*
let mul = (a, b) => {
    return a * b;
}
*/

// let mul = (a, b) => a * b;

// sub(1, 2);

// console.log(mul(2, 2));

// let age = sum(1, 2);
// console.log(age)


// let username = String('Abc xyz');

// console.log(username.toUpperCase());

// let list = [1,2,3,4,5];

// list.push(6);

// list.pop();

// list.shift();

// list.unshift(111);

// console.log('----------', list.length)

/*
for (let i=0; i < list.length; i++) {
    console.log(list[i]);
}
*/

// callback
// list.forEach(function(no) {
//     console.log(no)
// });

// console.log('-------')

// list.forEach((no) => console.log(no));

// console.log('-------')

// let iterateLoop = function(no, index, arr) {
//     console.log(no, index, arr)
// };

// list.forEach(iterateLoop);

// list[4] = 6666;

// console.log(list)

/**
 * 1. string method
 * 2. array method
 * 3. assignment 
 * 
 *  
 */

// alert("Welcome to my cafe: \n 1.Coffe \n 2. Tea");

// prompt("which item:\n 1. coffe3 \n 2. Tea \n 3. Checkout ")

/*
restaurant
list of dishes
order no of dishes
total prices
bill
*/