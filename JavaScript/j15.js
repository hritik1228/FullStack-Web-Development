console.log("Events and Event objects");

let e = document.getElementById("heading");
document.getElementById("heading").addEventListener('click', function() {
    console.log("hello");
    e.innerText = 'Hello';
    // redirects to website
    // location.href = '//facebook.com';

});


document.getElementById("idefine").addEventListener("click", function() {

    console.log("You have clicked the heading");
    //location.href = '//google.co.in'
});

// document.getElementById("idefine").addEventListener("click", function(e) {
//     let variable;
//     variable = e.target;
//     variable = e.target.className;
//     variable = Array.from(e.target.classList);
//     //variale = e.target.id;
//     variable = e.offsetX;
//     variable = e.offsetY;
//     console.log(variable);
//     //location.href = '//google.co.in'
// });

// document.getElementById("heading").addEventListener("click", function(e) {
//     let variable = e.target.className;
//     console.log(variable);
//     //location.href = '//google.co.in'
// });