// call apply and bind

// Call is a function that helps you change the context of the invoking function. In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.

// Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.

// Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.

// let userdetails={
//     name:'Hritik',
//     band:'B1',
//     age:24,
//     printDetails:function(){
//         console.log(this.name,this.age,this.band)
//     }
// }

// let userdetails_2={
//     name:'Happy',
//     band:'TRB',
//     age:21,
// }

// userdetails.printDetails()
// function borrowing
// userdetails.printDetails.call(userdetails_2)

// when the printDetails function is outside the object

// let userdetails={
//     name:'Hritik',
//     band:'B1',
//     age:24
// }

// let userdetails_2={
//     name:'Happy',
//     band:'TRB',
//     age:21,
// }

// let printDetails=function(state,country){
//     console.log(this.name,this.age,this.band,state,country)
// }

// printDetails.call(userdetails,'Amritsar','India')
// printDetails.call(userdetails_2,'Noida','India')
// In apply pass arguments as array list
// printDetails.apply(userdetails_2,['Amritsar','India'])

// Bind

let userdetails = {
    name: 'Hritik',
    band: 'B1',
    age: 24
}

let userdetails_2 = {
    name: 'Happy',
    band: 'TRB',
    age: 21,
}

let printDetails = function(state, country) {
    console.log(this.name, this.age, this.band, state, country)
}

printDetails.call(userdetails, 'Amritsar', 'India')
printDetails.call(userdetails_2, 'Noida', 'India')
let newFun = printDetails.bind(userdetails_2, 'Delhi', 'India')
console.log(newFun)

newFun()