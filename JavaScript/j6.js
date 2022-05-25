console.log('We are in tut7.js and lets discuss about arrays');
let marks = [34, 23, 24, 93, 73, 25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23, 123, 21, 'Orange');
console.log(marks);
console.log(mixed);
console.log(fruits[1]);

console.log(arr.length);


let a = ['Hritik', 'Kumar', 'Khushi', 'Kumari']
a = new Array(1, 2, 4, 5, 'Hritik', 'Kumar', 'Khushi', 'Kumari');

console.log(a[5]);
console.log(Array.isArray(a));

let mobileCompany = ['Vivo', 'MI', 'Samsung', 'OPPO', 'VIVO', 'RealMe'];
mobileCompany[2] = 'Nokia'
console.log(mobileCompany);
console.log(mobileCompany.indexOf('MI'))
console.log(Array.isArray(mobileCompany));
console.log(mobileCompany.reverse())
console.log(mobileCompany[2])
mobileCompany.push('Apple');
mobileCompany.push('Micromax');
console.log(mobileCompany);
// mobileCompany.pop();
// mobileCompany.pop();
console.log(mobileCompany)
mobileCompany.unshift('Lava');
console.log(mobileCompany)
console.log(mobileCompany.shift());
console.log(mobileCompany);
// console.log(mobileCompany.splice(2, 3));
console.log(mobileCompany.sort())

// console.log(Array.isArray('dfdf'));
arr[0] = 'harry';
let arrelement = arr[0];
// console.log('element :', arrelement);
// console.log(arr);

let value = marks.indexOf(73);
// console.log(value)

// Mutating or Modifying arrays
// marks.push(3564);
// marks.unshift(1009);
// marks.pop()
// marks.shift()
// marks.splice(2, 3);
// marks.reverse()
let marks2 = [1, 2, 3, 7]
marks = marks.concat(marks2);
// console.log(marks);

let myobj = {
    'first name': 'harry',
    channel: 'CodeWithHarry',
    isActive: true,
    marks: [1, 5, 3, 6]
}

// console.log(myobj)
// console.log(myobj['channel'])
// console.log(myobj.channel)