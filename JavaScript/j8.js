console.log("We are at tutorial 9");
// console.log(1)
// console.log(2)
// console.log(3)

// General Loops: for, while, do-while
// let a =34;
// a +=1;
// a++;
// console.log(a);
// for(let i=0; i<100;i++){
//     console.log(i);
// }

let j = 110;
while (j < 10) {
    console.log(j + 1);
    j++;
}

// let j = 110;
// while (j < 10) {
//   console.log(j + 1);
//   j += 1;
// }

// let k = 0;
// do {
//     if(k===5){
//         k +=1;
//         continue;
//     }
//   console.log(k + 1);
//   k +=1;
// } while (k < 10);

let arr = [2, 5, 6, 4, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

// arr.forEach(function(element, index, array) {
//     console.log(element, index, array);
// });

// let obj = {
//     name: "Rohan Das",
//     age: 78,
//     type: "Dangerous Programmer",
//     os: "Ubuntu"
// }
// for(let key in obj){
//     console.log(`The ${key} of object is ${obj[key]}`)
// }

console.log('done');

// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }

// let j = 0;
// while (j < 10) {

//     if (j === 7) {
//         break;
//     }
//     console.log(j)
//     j = j + 1;
// }
// console.log("Break Executed");


let arr1 = [100, 101, 102, 103, 104, 105];
// for (i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }

// arr1.forEach(element => {
//     console.log(element)
// });

// arr1.forEach(function(element, index) {
//     console.log(`The ${element} index is ${index}`);
// });


let friends = ["Sonia", "Modi", "Rahul", "Arvind"]
    // for (let i = 0; i < friends.length; i++) {
    //     const element = friends[i];

//     console.log(element);
// }

friends.forEach(function(element, index, array) {
    console.log(`${element} stands at position ${index} ${array}`);
});

let obj = {
    'First Name': 'Hritik',
    'Last Name': 'Kumar',
    Age: 23,
    Location: 'Chirkunda'
}
for (let key in obj) {
    console.log(obj[key]);
}




// let a = 100
// do {
//     console.log(a);
//     a = a + 1;
// } while (a < 10)