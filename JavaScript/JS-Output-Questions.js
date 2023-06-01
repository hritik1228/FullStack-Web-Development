// It returns true when we perform delete on the object properties
// let data={name:"Anil"}
// console.log(delete data.name)
// console.log(data)

// We cannot delete the object we can delete the object properties, it is not deleted so it output false
// let data ={name:'Anil'}
// console.log(delete data)

// It output is Anil Hritik 
// const data =['Anil','Hritik','Khushi','Vandana']
// const [y,z]=data
// console.log(y,z)

// How to get the second element
// Below code will display the second element
// const data =['Anil','Hritik','Khushi','Vandana']
// const [,y]=data
// console.log(y)

// How to get name property without . operator
// const obj={name:'Hritik',age:24,gender:'Male'}
// const {name}=obj
// console.log(name)

// How to merge two objects
// let data={name:"Hritik",age:'24'}
// let info={company:"Wipro",salary:"24k"}
// data={...data,...info}
// console.log(data)

// It will create internal object inside data
// output will be 
// {
//   data: { name: 'Hritik', age: '24' },
//   company: 'Wipro',
//   salary: '24k'
// }
// let data={name:"Hritik",age:'24'}
// let info={company:"Wipro",salary:"24k"}
// data={data,...info}
// console.log(data)

// When we merge two object and properties of the object has same key in both then 2nd key will override the first one with same position as first
// { name: 'Hritik', age: '24', skill: 'React', company: 'Wipro',salary: '24k'}
// let data={name:"Hritik",age:'24',skill:'JS'}
// let info={company:"Wipro",salary:"24k",skill:"React"}
// data={...data,...info}
// console.log(data)

// It will give an error name is not a function
// const name="Anil"
// console.log(name())

// It will return {} as first case is false and then it goes to {}
// const result=false || {} || null
// console.log(result)

// In this scenario neither of them are positive value so at last it will return '' as the output if all the value are negative it will pick the last value
// const result= null || false || '';
// console.log(result)

// It will return [] as in first case only it get [] as true value
// const result=[] || true || 0;
// console.log(result)

// It will return Promise fullfilled
// console.log(Promise.resolve(5))

// output will be true-> there unicode gets compared
// console.log('❤'==='❤')

// JSON.parse -> Parse JSON to a javascript value

// It gives an error incase of let and cost hoisting is not possible it can be achieved by var
// let name="Bajaj"
// function getName(){
//     console.log(name)
//     let name="Hritik"
// }
// getName()


// let has block scope it means it cannot be accessed outside the block, in below code name is trying to access outside the block that is possible but let cannot be accessed outside the block
// let name="Hritik"
// function getName(){
//     let age=24
//     console.log(name)
// }
// getName()
// console.log(age) // error age is not defined cannot be access inside the block

// ...[1,2,3] it destrcuts the array
// function sumValues(x,y,z){
//     return x+y+z
// }
// console.log(sumValues(...[1,2,3]))

// It will return false=> it starts from left to right and it returns false and then false==="object" which is false
// let name="Hritik"
// console.log(!typeof name==='object')
// console.log(!typeof name==='string')

// Output is true and false NaN subscribe is not  a number true
// const name="subscribe";
// const age=21;
// console.log(isNaN(name))
// console.log(isNaN(age))


// arr.shift removes the first element
// const arr=[1,2,3]
// arr.shift()
// console.log(arr)

// arr.pop() removes the element from last
// const arr=[1,2,3]
// arr.pop()
// console.log(arr)

// To check odd or even
// const num=13;
// console.log(num%2==0?'even':'odd')

// convert data to boolean false value
// let data="true";
// console.log(typeof !data)


// difference between map and forEach function
// map function returns something but forEach will not return anything

// Output is ['Anil',empty,'Mukesh']
// let arr=['Anil','John','Mukesh']
// delete arr[1]
// console.log(arr)

// Still the length remains 3
// let arr=['Anil','John','Mukesh']
// delete arr[1]
// console.log(arr.length)

// Merge two array
// let a1=[1,2,3,4,5]
// let a2=[10,9,8,7,6]
// a1=[...a1,...a2]
// console.log(a1)

// If there is same value in both the array it will keep both the value but in case of object same key cannot be there in two object
// let a1=[1,2,3,4,5]
// let a2=[10,9,8,7,6,5]
// a1=[...a1,...a2]
// console.log(a1)

// It returns 3*3*3 output is 27
// let a=3**3
// console.log(a)

// It returns 100 as it executes let a=2 then a=100 after it executes setTimeout till then a value is 100
// let a=2;
// setTimeout(()=>{
//     console.log(a)
// },0)
// a=100

// It is possible a and A both are different
// let a=3;
// let A=2;
// console.log(A)

// Start of variable you cannot use digit
// let A10=20;
// let 10A=30;
// console.log(A10)

// It will be true both are string with same value
// const a="Like";
// const b=`Like`;
// console.log(a===b)

// It will return true c value gets decremented
// let a=2
// let b=1
// console.log(--a===b)

// As the a===b returns true and true ===1 which is false
// let a=1;
// let b=1;
// let c=2;
// console.log(a===b===--c)

// last one will return error single and double star works while *** it will give error
// console.log(3*3)
// console.log(3**3)
// console.log(3***3)

// It will return undefined
// console.log(a)
// var a=10

// It will give error a is not defined
// console.log(a)

// It will return the same nested array
// console.log([[[[]]]])

// It will not work as for is a resrved keyword
// let for =100;

// if we don't define anything as age=21 by default it is var and in strict mode hoisting is not possible
// function getAge(){
//     'use strict'
//     age=21;
//     console.log(age)
// }

// getAge()


// in return statment we call the arrow functon
// function greet(){
//     return ((()=>'hello')())
// }

// console.log(typeof greet())

// Over here we do not call the arrow function so it returns function as type
// function greet(){
//     return (()=>'hello')
// }

// console.log(typeof greet())

// Two times !! it converts it into false
// console.log(!!null)
// console.log(!!"")
// console.log(!!"")


// let person={name:"John"}
// const members=[person]
// person=null
// console.log(members)

// it will return the key
// const person={name:'Hritik',age:24}
// for(item in person){
//     console.log(item)
// }

// it will return number45
// console.log(typeof 3+4+'5')

// when we put + infront of string it becomes number
// console.log(typeof (3+4+ +5))

// Memory location is different output is false
// console.log([]==[])

// When we pass any object is passed as a parameter to function it's memory location is passed,so the value is changed
// function getInfo(member){
//     member.name='Anil'
// }
// const person={name:'Sarah'}
// getInfo(person)
// console.log(person)

// fruit()
// function fruit(){
//     console.log(fruit1);
//     console.log(fruit2);

//     var fruit1="Banana";
//     let fruit2="Apple"
// }

// fruit()

// for(let i=0;i<3;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1)
// }

// console.log(+true)
// console.log(typeof +true)

// console.log(!"hritik")
// console.log(typeof !"hritik")

// Both has the same memory reference so the output will be anil
// let c={name:"peter"}
// let d;
// d=c;
// c.name="Anil";
// console.log(d.name)

// We can declare one variable as many times
// var x;
// var x=10;
// var x=20;
// console.log(x)

// Error-x already declared, as var has global scope but let not allows to declare with same varibale name
// var x;
// let x=10;
// console.log(x)

// == it compares the value & === it compares the value as well the data type
// let a=3;
// let b=new Number(3)
// console.log(a==b)
// console.log(a===b)

// undefined we declared it but have not assigned the value
// let name;
// console.log(name)

// if we add any properties to the function it will not impact the function
// function fruit(){
//     console.log('Banana')
// }

// fruit.name="Apple"
// fruit()

// if we have one numeric and one string value both will work as string value and add two string value it will concatenate
// function sum(a,b){
//     return a+b
// }

// const result= sum(1,"2")
// console.log(result)

// In first console.log we print it and then it will increment in memory
// In second console.log it increments the value from 1 and makes it to 2
// let number=0
// console.log(number++)
// console.log(++number)
// console.log(number)

// everything in JS is object so typeof args is object 
// function getArgs(...args){
//     console.log(typeof args)
// }
// getArgs(21,22,12)

// if we use strict mode hoisting is not possible
// function getAge(){
//     'use strict'
//     age=16;
//     console.log(age)
// }

// getAge()
// eval will take string and make it number, priority of multiplication is higher so it is 105
// const sum=eval('10*10+5')
// const sum=eval('10+10/5')
// console.log(sum)

// if we have key as numeric value in object then we can use it as string as well as number
// const obj={1:'a',2:'b',3:'c'}
// console.log(obj.hasOwnProperty('1'))
// console.log(obj.hasOwnProperty(1))
// console.log(obj)

// We override the a property value with "three" but the position of that key will be same
// const obj={a:"one",b:"two",a:"three"}
// console.log(obj)

// const foo=()=>console.log('First')
// const bar=()=>setTimeout(()=>console.log("second"))
// const baz=()=>console.log('Third');
// bar();
// foo();
// baz();

// Bubbling output will third,second,first
// <div onclick="console.log("first div")">
//     <div onclick="console.log("second div")">
//         <button onclick="console.log("third div")">
//             click me
//         </buttton>
//     </div>
// </div>

// In bind it returns a function and again we need to call it and while in case of call it returns the text
// const person={name:"Hritik"}

// function sayHi(age){
//     return `My name is ${this.name} and age ${age}`
// }

// const result=sayHi.call(person,21)
// console.log(sayHi.bind(person,21)())
// console.log(result)

// it will return number
// function demo(){
//     return (()=>0)()
// }

// console.log(typeof demo())

// it will return function
// function demo(){
//     return (()=>0)
// }

// console.log(typeof demo())

// it will be string => typeof number=> string 
// console.log(typeof typeof 1)

// output will be [ 1, 2, 3, <7 empty items>, 10 ]
// const arr=[1,2,3]
// arr[10]=10
// console.log(arr)

// [ 1, 2, 3, 4, [Circular] ] 
// const numbers=[1,2,3,4]
// numbers[4]=numbers
// console.log(numbers)

// In javascript everything is either primitive i.e (boolena,numbers,string) and object

// setInterval returns the id of it through which we can stop the specific setInterval
// console.log(setInterval(()=>console.log("Hi"),1000))
// console.log(setInterval(()=>console.log("Hi"),1000))
// console.log(setInterval(()=>console.log("Hi"),1000))

// it returns an array with individual letter [ 'h', 'r', 'i', 't', 'i', 'k' ]
// console.log([..."hritik"])

// first it will evaluate the typeof 3 and then 45 output is number45
// console.log(typeof 3+4+'5')