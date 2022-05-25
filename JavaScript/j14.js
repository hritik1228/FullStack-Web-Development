console.log("Good Morning");
let element = document.createElement('li');
// let text = document.createTextNode('I am a text node');
console.log(element);
// element.appendChild(text);
//console.log(text)

//Add a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');

element.innerText = 'Hello this is created by Hritik'
    // to use html in text

// element.innerHTML = '<b>Hello this is created by hritik</b>'

// let ul = document.querySelector('ul.this');

// ul.appendChild(element);

// console.log(ul);
// console.log(element);

// //Replace element

// let elem2 = document.createElement('h3');
// elem2.id = 'elem2';
// elem2.className = 'elem2';
// let tnode = document.createTextNode('This is created node for elem2');
// elem2.appendChild(tnode)

// element.replaceWith(elem2);

// let myul = document.getElementById('myul');
// myul.replaceChild(element, document.getElementById('fui'));

// //Remove element

// myul.removeChild(document.getElementById('lui'));

// let pr = elem2.getAttribute('class');
// console.log(elem2, pr)

// pr = elem2.hasAttribute('class');
// console.log(pr);

// elem2.removeAttribute('id');

/*

<!-- Select and press ctrl + / to comment -->
    <!-- Emmet -->
    <!-- . is for class and # is for id -->
    <span class="redBg"></span>
    <span id="mainSpan"></span>
    <div class="redBg blackBorder anotherClass"></div>

    <!-- Emmet takes div tag as default -->
    <div class="blackBackground"></div>

    <!-- Creating multiple elements using Emmet -->
    <!-- span.myClass.myClass2.myClass3*4 + <Tab> to print 4 similar elements using Emmet -->
    <span class="myClass myClass2 myClass3">First</span>
    <span class="myClass myClass2 myClass3">Second</span>
    <span class="myClass myClass2 myClass3">Third</span>
    <span class="myClass myClass2 myClass3">Fourth</span>

*/