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

let parentname = document.getElementById('item1').parentNode;
console.log(parentname);

let nodeName = document.getElementById('item1').parentNode.nodeName;
console.log(nodeName);

// let q = document.getElementById('NonVegMenu').childNodes;
let q = document.getElementById('NonVegMenu').firstElementChild;
console.log(q);