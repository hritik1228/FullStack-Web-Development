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

// document.getElementById('heading').removeAttribute("style");

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
// let r1 = document.querySelector("#heading").style.border;
// console.log(r1);

// let r2 = document.querySelector("#heading").style.color;
// console.log(r2);

// document.querySelector("#heading").style.backgroundColor = "red";

// document.querySelector(".header2").style.color = "green";
// document.querySelector(".header2").style.backgroundColor = "yellow";
// document.querySelector(".header2").style.border = "2px solid black";

// document.querySelector(".text2").className = "paraClass";

// let r3 = document.querySelector(".text2").className;
// console.log(r3);

// let r4 = document.querySelector(".text2").classList;
// console.log(r4);

// function func1() {
//     document.getElementById('heading').style.color = 'red';
// }

// function func2() {
//     document.getElementById('demo').innerHTML = "Hello It's working";

// }

// function func3() {
//     document.getElementById('heading').style.color = 'yellow';
// }
// let x = document.getElementById('myBtn');
// x.addEventListener("click", myFunc);
// x.addEventListener("click", otherFunc);

// function myFunc() {
//     alert('hi');
// }

// function otherFunc() {
//     document.getElementById('random').innerHTML = Math.random();
// }

// let tagName = document.getElementsByTagName('html');
// console.log(tagName);

// let parentname = document.getElementById('item1').parentNode;
// console.log(parentname);

// let nodeName = document.getElementById('item1').parentNode.nodeName;
// console.log(nodeName);

// let q = document.getElementById('NonVegMenu').childNodes;
// let q = document.getElementById('NonVegMenu').firstElementChild;
// console.log(q);

// let head = document.getElementById('heading').firstChild.nodeValue;
// console.log(head);

// const para = document.createElement("h3");
// para.appendChild(document.createTextNode('This is new text node'));


// const element = document.getElementsByClassName("container")
// para.appendChild(element);

// JavaScript addEventListener Method

document.getElementById('heading').onclick = myFunc1;

function myFunc1() {
    document.getElementById('heading').style.background = "pink";
}

document.getElementById('heading2').onmouseenter = myFunc2;

function myFunc2() {
    document.getElementById('heading2').style.background = "orange";
}

document.getElementById('NonVegMenu').addEventListener("mouseleave", myFunc3);
document.getElementById('NonVegMenu').addEventListener("mouseenter", function() {
    document.getElementById('NonVegMenu').style.border = "2px solid violet";
});

function myFunc3() {
    document.getElementById('NonVegMenu').style.background = "red";
}

document.getElementById("message1").addEventListener("dblclick", myFunc4);

function myFunc4() {
    this.style.color = "red";
}

document.getElementById("message1").addEventListener("click", myFunc5);

function myFunc5() {
    document.getElementById("message1").removeEventListener("dblclick", myFunc4);
}

// DOM Traversal Methods

// parentElement & parentNode
// parentElement returns null if no parent is there but parentNode reuturns something

let a1 = document.getElementById('box1').parentElement;
console.log(a1);

let a2 = document.getElementById('main1').parentElement;
console.log(a2);

let a3 = document.getElementById("heading").parentElement;
console.log(a3);

let a4 = document.getElementById('myMain').parentNode;
console.log(a4);

// It will return as no parent is there for below id
let a5 = document.getElementById('myMain').parentElement;
console.log(a5);

// Children & childNodes Methods
// children will return only the html tags
let a6 = document.getElementById('NonVegMenu').children;
console.log(a6);

document.getElementById('NonVegMenu').children[1].style.background = "pink";

let a7 = document.getElementById('main1').children;
console.log(a7);

let a8 = document.getElementById('myMain').children[0];
console.log(a8);

// childNode will return text node and comment also

let a9 = document.getElementById('NonVegMenu').childNodes;
console.log(a9);

let a10 = document.getElementById('NonVegMenu').childNodes[5].innerText;
console.log(a10);


// firstChild & lastChild Method

let b1 = document.getElementById('myMain').lastElementChild;
console.log(b1);

let b2 = document.getElementById('myMain').firstElementChild;
console.log(b2);

let b3 = document.getElementById('myMain').firstElementChild.innerHTML;
console.log(b3);

document.getElementById('box1').lastElementChild.style.background = "yellow";

let b4 = document.getElementById('box1').lastElementChild;
console.log(b4);

// firstChild will target text and comment also
let b5 = document.getElementById('box1').firstChild;
console.log(b5);

let b6 = document.getElementById('box1').lastChild;
console.log(b6);