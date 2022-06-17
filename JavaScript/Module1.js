export let greet = "Good Morning";
export let message = "Hello How are you";

export function sum(a, b) {
    return a + b;

}

export function multiply(num1, num2) {
    console.log("The multiply of two number is", num1 * num2);
}

export class demo {
    constructor() {
        console.log("Constructor invoked");
    }
}

// let fname = "Hritik";
// let lname = "Kumar";


// export all in one line no need to write export each time

// export { fname, lname };

// default keyword

export default function() {
    console.log("I am inside default function");
}