// Print name N times using Recursion
function printName(i, n) {
    if (n < i) {
        return;
    }
    console.log('Hritik');
    printName(i, n - 1)
}
printName(1, 5)

// Print 1 to N using Recursion

function oneToNumber(i, n) {
    if (n < i) {
        return;
    }
    console.log(i)
    oneToNumber(i + 1, n)
}

oneToNumber(1, 5)

// Print N to 1 using Recursion
function NumberToOne(i, n) {
    if (n < i) {
        return;
    }
    console.log(n)
    NumberToOne(i, n - 1)
}
NumberToOne(1, 10)

// Sum of first N number
function sumNumber(num) {
    if (num == 0) {

        return 0;
    }
    return num + sumNumber(num - 1);
}

let resultSum = sumNumber(3)
console.log(resultSum)

// Factorial of number

function factorial(num) {
    if (num == 0) {
        return 1
    }
    return num * factorial(num - 1)
}
let resultFact = factorial(5)
console.log(resultFact)