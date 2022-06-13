let e1 = document.getElementById('heading').innerText;
console.log(e1);

let e2 = document.getElementById('demo').innerHTML;
console.log(e2);

let e3 = document.getElementById('heading').getAttribute("style");
console.log(e3);

let e4 = document.getElementById('heading').getAttribute("class");
console.log(e4);

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