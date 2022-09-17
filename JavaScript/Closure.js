const sum = (a) => {

    console.log('Executed sum function');
    var b = 6;
    return function(c) {
        return a + b + c;
    }
}

var store = sum(3);
console.log(store(6));