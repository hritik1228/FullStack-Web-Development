// Type conversion 
console.log('Welcome to tut5');
let myVar;
myVar = String(34);

console.log(myVar, (typeof myVar));
let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
console.log(date, (typeof date));

// let arr1 = String([1, 2, 3, 4, 5, 6, 7, 8, 9])
// console.log(arr1.charAt(2), typeof arr1);

// let arr = String([1, 2, 3, 4, 5]);
// console.log(arr.length, (typeof arr));

let i = 75;
console.log(i.toString())

// let stri = Number("123456");

stri = Number("343d4");

stri = Number(false);
// console.log(stri, typeof stri);
stri = Number([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(stri, (typeof stri));

let number = parseFloat('34.098');


console.log(number.toFixed(2), (typeof number));

// Type coercion

let mystr = Number("698");
let mynum = 34;

console.log(mystr + mynum);