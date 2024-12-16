// // print to console
// console.log("Hello World");

// // alert, prompt, confirm

// alert("Hello World");

// let age = prompt("What is your age?", 20);

// console.log(age);

// let isAdult = confirm("Are you an adult?");

// console.log(isAdult);

// // variables (var, let, const)

// // var can be redeclared and reassigned
// var name = "John";
// console.log(name);
// name = "Doe";
// console.log(name);
// var name = "Jane";
// console.log(name);

// // let can be reassigned but not redeclared
// let name = "John";
// console.log(name);
// name = "Doe";
// console.log(name);
// let name = "Jane";
// console.log(name); // error

// // const cannot be redeclared or reassigned
// const name = "John";
// console.log(name);
// name = "Doe";
// console.log(name); // error
// const name = "Jane";
// console.log(name); // error

// data types
// primitive data types (string, number, boolean, null, undefined, symbol)
// non-primitive data types (array, object)

// // string
// let name = "Raj";
// console.log(name);
// console.log(typeof name);
// console.log("Hii", name);
// console.log("Hello " + name);
// console.log(`Hello ${name}`); // string template or template literals

// // number
// let age = 20;
// console.log(age);
// console.log(typeof age);
// let pi = 3.14;
// console.log(pi);
// console.log(typeof pi);
// let nan = NaN; // represents not a number
// console.log(nan);
// console.log(typeof nan);

// // boolean
// let isAdult = true;
// console.log(isAdult);
// console.log(!isAdult);
// console.log(typeof isAdult);

// // null
// let nullValue = null;
// console.log(nullValue);
// console.log(typeof nullValue); // object (bug in js)

// // undefined
// let undefinedValue;
// console.log(undefinedValue);
// console.log(typeof undefinedValue);

// // array
// let arr = [2, 3, 4];
// console.log(arr);
// console.log(typeof arr);

// // object
// let obj = {
//   name: 'Raj',
//   age: 20,
// }
// console.log(obj);
// console.log(typeof obj);

// // operators
// let first = 10;
// let second = 3;
// const add = first + second;
// const subtract = first - second;
// const multiply = first * second;
// const divide = first / second;
// const modulus = second % first;

// console.log(
//   `SUM = ${add}\nDIFFERENCE = ${subtract}\nMULTIPLICATION = ${multiply}\nDIVIDE = ${divide}\nMODULUS = ${modulus}`
// );

// // relational operators
// console.log(first > second);
// console.log(first < second);
// console.log(first >= second);
// console.log(first <= second);
// let a = 10, b = '10';
// console.log(a == b); // true (checks value only)
// console.log(a === b); // false (strict equality, checks value and type)
// console.log(a != b); // false
// console.log(a !== b); // true

// // logical operators
// console.log(5 == 5 && 10 > 5);
// console.log(5 == 5 && 10 < 5);
// console.log(5 == 5 || 10 < 5);
// console.log(5 != 5 || 10 < 5);
// console.log(!(5 != 5));
// console.log(!(5 == 5));

// type casting

// to numbers
// console.log(Number(true));
// console.log(Number("10"));
// console.log(Number("10.33"));
// console.log(parseInt("-10"));
// console.log(parseInt("10.33"));
// console.log(parseInt("-10.33"));
// console.log(parseInt("10 years"));
// console.log(parseInt("year 10"));
// console.log(parseFloat("20"));
// console.log(parseFloat("10.33"));
// console.log(parseFloat("10 years"));
// let y = "5"; // y is a string
// let x = +y; // x is a number //x=x+y
// console.log(x);

// // to string
// console.log(String(x));
// console.log(x.toString());

// // Automatic type conversion
// console.log(5 + null); // returns 5 because null is converted to 0
// console.log("5" + null); // returns "5null" because null is converted to "null"
// console.log("5" + 2); // returns "52" because 2 is converted to "2"
// console.log("5" - 2); // returns 3 because "5" is converted to 5
// console.log("5" * "2"); // returns 10 because "5" and "2" are converted to 5 and 2
// console.log("5" / "2");
// console.log("5" % "2");

// // if else
// let num = 1;
// if (num > 0) {
//   console.log("The number is positive");
// } else if (num === 0) {
//   console.log("The number is zero");
// } else {
//   console.log("The number is negative");
// }

// // switch case
// switch (num) {
//   case 0:
//     console.log("The number is zero");
//     break;
//   case 1:
//     console.log("The number is one");
//     break;
//   default:
//     console.log("The number is not zero or one");
// }

// ternary operator
const age = 26;
const driving = age >= 18 ? " You can drive" : " You cannot drive";
console.log(driving);

// condition ? true : false