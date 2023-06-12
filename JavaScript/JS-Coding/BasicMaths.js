// Count Digits

function countDigit(num) {
    var count = 0;
    var lastDigit;
    while (num > 0) {
        lastDigit = Math.trunc(num % 10);
        count++
        num = Math.trunc(num / 10)
    }
    return count;
}

let result = countDigit(77689)
console.log(result)

// Reverse of a number
function reverseNumber(num) {
    let reverse = 0;
    do {
        lastDigit = Math.trunc(num % 10)
        reverse = (reverse * 10) + lastDigit
        num = Math.trunc(num / 10)
    } while (num > 0)
    console.log(reverse)
}

reverseNumber(10400)
reverseNumber(17789)

// Pallindrome number-By reversing the number it remains the same i.e. 121->121

function pallindrome(num) {
    let number = num;
    let reverse = 0;
    do {
        lastDigit = Math.trunc(num % 10);
        reverse = (reverse * 10) + lastDigit;
        num = Math.trunc(num / 10)
    } while (num > 0)
    // console.log(reverse)
    if (reverse == number) {
        console.log('Pallindrome')
    } else {
        console.log('Not a pallindrome')
    }
}

pallindrome(121)


// Armstrong Number
// It is known as Number=371 cube of each digit and sum of each digit should be equal to 371

function armstrong(num) {
    let number = num;
    let cube = 0;
    do {
        lastDigit = Math.trunc(num % 10);
        cube = (lastDigit * lastDigit * lastDigit) + cube;
        num = Math.trunc(num / 10)
    } while (num > 0)
    // console.log(cube)
    if (cube == number) {
        console.log('Armstrong Number')
    } else {
        console.log('Not a armstrong number')
    }
}

armstrong(371)


// Print all divisors
// Take number 36->1,2,3,

function divisors(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            arr.push(i)
        }
    }
    console.log(arr)
}

divisors(36)

// Prime number ->which has exactly two factors i.e 1 and number itself

function prime(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count = count + 1
        }
    }
    if (count == 2) {
        console.log('Prime number')
    } else {
        console.log('Not a prime number')
    }
}

prime(7)


// GCD/HCF