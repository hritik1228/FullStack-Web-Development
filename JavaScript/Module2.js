import { greet, message, sum, multiply, demo, fname as firstName, lname as lastName } from "./Module1.js";

// import * as test from "./Module1.js";

console.log(greet);
console.log(test.message);

console.log(sum(2, 2));

multiply(2, 3);

// let c = new test.demo();
let c = new demo();

// console.log(`My firstName is ${firstName} and lastName is ${lastName}`);


// for default keyword

// import { default as demo } from "./Module1.js";

// default function name demo
import demo from "./Module1.js";

demo();