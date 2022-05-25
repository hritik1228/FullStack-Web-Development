// Primitive data types

// String
let name = "hritik";
console.log("My string is " + name);
console.log("Data type is " + (typeof name));

// Numbers
let marks = 8.6;
console.log("Data type is " + (typeof marks));

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

// Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// // Undefined
let undef = undefined;
console.log("Data type is " + (typeof undef));

// // Reference Data Types

// // Arrays
let myarr = [1, 2, 3, 4, false, "string"];
console.log("Data type is " + (typeof myarr));

// // Object Literals
let stMarks = {
    hritik: 89,
    nikhil: 36,
    adityaa: 34
}
console.log(stMarks);
console.log(typeof stMarks);

function findName() {

}
console.log(typeof findName);

let date = new Date();
console.log(typeof date);