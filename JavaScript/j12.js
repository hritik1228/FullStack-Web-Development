console.log("Keep It Up!!");

/*
elements selectors:
1. Single Element Selectors
2. Multi Element Selectors

*/

//1. Single Element Selectors
let element = document.getElementById('Item1')
content = element.innerText;
element = element.className;
console.log(element);
console.log(content);

let a = document.getElementById('Yellow');
console.log(a);

// a.style.backgroundColor = 'Yellow';
a.innerText = 'Banana';
a.innerHTML = '<i>Banana<i>';
let active = document.activeElement.tagName;
console.log(active);

// content = element.innerText
// element = element.className
// element = element.childNodes
// element = element.parentNode
// element.style.color = 'red';
// element.style.textAlign = 'center'
// element.style.backgroundColor = 'Yellow'

// element.innerText = 'Hritik You can do it..!!'
// element.innerHTML = '<b>Hritik You can do it..!!</b>'

// console.log(element.innerHTML)

// let sel = document.querySelector('#myfirst') //# denotes id
// sel = document.querySelector('.child'); //. denotes class
// document.querySelectorAll('.child')
// sel = document.querySelector('b');
// sel = document.querySelector('div');
// sel.style.color = 'green';
// console.log(sel);

// console.log(element);

// 2. Multi Element Selectors

// let elems = document.getElementsByClassName('child');
// elems = document.getElementsByClassName('container');
// //console.log(elems[0].getElementsByClassName('child'));

// elems = document.getElementsByTagName('div');
// console.log(elems)

// Array.from(elems).forEach(element => {
//     // console.log(element);
//     val = element.innerText
//     console.log(val);
// });

// console.log(elems[2]);