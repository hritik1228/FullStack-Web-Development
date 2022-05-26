console.log("Welcome Dear");
let a = document;

a = document.all; //gives an HTML Collection tags

//a = document.body;
//a = document.forms;
//a = document.forms[1];
//a = document.forms[0];

a = document.forms;
a = document.body;

Array.from(a).forEach(function(element) {
    console.log(element);
})


a = document.links;
a = document.links[0].href;

a = document.images;

a = document.scripts;
a = document.scripts[0];
a = document.scripts[1];

console.log(a)
    //console.log(typeof document);