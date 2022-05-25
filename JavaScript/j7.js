console.log('This is tutorial 8');
const age = 128;
const doesDrive = false;
// const vari = 34;

// if (age!=19){
//     console.log('Age is not 19')
// }

// if(age !== 65){
//     console.log('Age is not 65')
// }

// else{
//     console.log('Age is not 19')
// }

// if (typeof vari !== 'undefined'){
//     console.log('Vari is defined');
// }

// else{
//     console.log('Vari is not defined');
// }

// if (doesDrive || age>18){
//     console.log("You can drive");
// }
// else{
//     console.log("You cannot drive");
// }

// console.log(age==45? 'Age is 45': 'Age is not 45');

switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}

let a = 10;

if (a >= 50) {
    console.log('You can build the house');
} else {
    console.log('You cannot build house');
}

let b = Number('123');
if (b === 123) {
    console.log('Pass');
} else {
    console.log('fail');
}

let knowDrive = true;
let myAge = 18;
if (knowDrive || myAge >= 18) {
    console.log('You can Drive!!')
} else {
    console.log('You cannot Drive');
}

let priceOfMilk = 50;
switch (priceOfMilk) {
    case 22:
        console.log('Normal Milk');
        break;
    case 34:
        console.log('Butter Milk');
        break;
    case 40:
        console.log('Cream Butter Milk');
        break;
    default:
        console.log(`I Don't have Milk packet above ${priceOfMilk} price`);

}

let priceOfGlass = 20;

if (priceOfGlass > 40) {
    console.log('Buy on next month')
} else if (priceOfGlass == 40) {
    console.log('I will buy it in some days!!');

} else {
    console.log('I will buy it just now!');
}