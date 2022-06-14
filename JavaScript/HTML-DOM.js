let t1 = document.getElementById('heading');
console.log(t1);

let t2 = document.getElementsByTagName('p');
console.log(t2);

let t3 = document.getElementsByTagName('p')[1];
console.log(t3);

let t4 = document.getElementsByClassName('myClass');
console.log(t4);
// DOM Methods to get the value

let e1 = document.getElementById('heading').innerText;
console.log(e1);

let e2 = document.getElementById('demo').innerHTML;
console.log(e2);

let e3 = document.getElementById('heading').getAttribute("style");
console.log(e3);

let e4 = document.getElementById('heading').getAttribute("class");
console.log(e4);

let e5 = document.getElementById('heading').getAttribute("onmouseout");
console.log(e5);

let e6 = document.getElementById('heading').getAttributeNode("style");
console.log(e6);

let e7 = document.getElementById('heading').getAttributeNode("class");
console.log(e7);

let e8 = document.getElementById('heading').getAttributeNode("onmouseout").value;
console.log(e8);

let e9 = document.getElementById('heading').attributes;
console.log(e9);

let e10 = document.getElementById('heading').attributes[14];
console.log(e10);

Array.from(e9).forEach(element => {
    console.log(element);
});

// DOM Methods to set the value

document.getElementById('heading').innerText = 'Welcome Back !!'
document.getElementById('heading').innerHTML = "<i>Welcome Back to my Website !!</i>"

document.getElementById('heading').setAttribute("class", "xyz");
document.getElementById('heading').getAttribute("class");

document.getElementById('NonVegMenu').setAttribute("class", "NonVegItems");
document.getElementById('NonVegMenu').getAttribute("class");


document.getElementById('heading').setAttribute("style", "border: 2px solid black;");
document.getElementById('heading').getAttribute("style");

document.getElementById('heading').attributes[1].value = "myHeader";

document.getElementById('heading').removeAttribute("style");

document.getElementById('heading').removeAttribute("class");

// QuerySelector and QuerySelectorAll
let q1 = document.querySelector(".myClass");
console.log(q1);

let q2 = document.querySelectorAll(".myClass");
console.log(q2);

let q3 = document.querySelector("#NonVegMenu");
console.log(q3);

// let q4 = document.querySelector("p");
// console.log(q4);

let q5 = document.querySelectorAll(".text1")[0].innerHTML;
console.log(q5);

let q6 = document.querySelectorAll("li");
console.log(q6);

let q7 = document.querySelectorAll(".container h1");
console.log(q7);

let q8 = document.querySelectorAll(".container h1")[1].innerText;
console.log(q8);


// DOM CSS Styling Methods


function func1() {
    document.getElementById('heading').style.color = 'red';
}

function func2() {
    document.getElementById('demo').innerHTML = "Hello It's working";

}

function func3() {
    document.getElementById('heading').style.color = 'yellow';
}
let x = document.getElementById('myBtn');
// x.addEventListener("click", myFunc);
x.addEventListener("click", otherFunc);

// function myFunc() {
//     alert('hi');
// }

function otherFunc() {
    document.getElementById('random').innerHTML = Math.random();
}

let tagName = document.getElementsByTagName('html');
console.log(tagName);

let parentname = document.getElementById('item1').parentNode;
console.log(parentname);

let nodeName = document.getElementById('item1').parentNode.nodeName;
console.log(nodeName);

// let q = document.getElementById('NonVegMenu').childNodes;
let q = document.getElementById('NonVegMenu').firstElementChild;
console.log(q);

let head = document.getElementById('heading').firstChild.nodeValue;
console.log(head);

const para = document.createElement("h3");
para.appendChild(document.createTextNode('This is new text node'));


// const element = document.getElementsByClassName("container")
// para.appendChild(element);