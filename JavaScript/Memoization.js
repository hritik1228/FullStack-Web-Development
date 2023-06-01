// Memoization is a technique for speeding up applications by caching the results of expensive function calls and returning them when the same inputs are used again.

const calc = (n) => {
    let sum = 0;
    for (var i = 0; i < n; i++) {
        sum = sum + i
    }
    return sum;
}

const memoize = (callback) => {
    let cache = {};
    return function(...args) {
        console.log('The passed arguments are', args)
        let n = args[0];
        if (n in cache) {
            console.log('Cached Result')
            return cache[n];
        } else {
            console.log('Calculating first time')
            let result = callback(n);
            cache[n] = result;
            return result;
        }
    }
}

console.time()
const efficient = memoize(calc)
console.log(efficient(5))
console.timeEnd()

console.time();
// const efficient = memoize(calc);
console.log(efficient(5));
console.timeEnd();