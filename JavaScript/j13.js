console.log("Mention Your Goal");
// let cont = document.querySelector('.no');
cont = document.querySelector('.container');
console.log(cont);
let nodeName = cont.childNodes[1].nodeName;
console.log(nodeName);

let nodeType = cont.childNodes[8].nodeType;
console.log(nodeType);

// Node Types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

//console.log(cont.childNodes); //it will show text, comment, new line 

//console.log(cont.children); //it will show only element excluding text, comment, new line

let container = document.querySelector('div.container');

// console.log(container.children[1].children[0].children[0]);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);

// console.log(container.childElementCount);
// console.log(container.childNodes);
// console.log(container.children);

// console.log(container.firstElementChild.parentNode);

// console.log(container.firstElementChild.nextElementSibling);

// console.log(container.firstElementChild.nextSibling);

// console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling);