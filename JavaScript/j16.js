console.log("More On Events");

// let btn = document.getElementById('btn1');
// btn.addEventListener('click', func1);
// btn.addEventListener('dblclick', func2);
// btn.addEventListener('mousedown', func3);

// function func1(e) {
//     console.log("Thanks", e);
// }

// to bypass default behaviour of form when user click submit
// function func1(e) {
//     // console.log("Thanks", e);
// to bypass the default behaviour
//     e.preventDefault();
// }

// function func2(e) {
//     console.log("Thanks its a double click", e);
//     e.preventDefault();

// }

// function func3(e) {
//     console.log("Thanks its a mousedown", e);
//     e.preventDefault();

// }

// document.querySelector('.no').addEventListener('mouseenter', function() {
//     console.log('You entered no')

// })


// document.querySelector('.no').addEventListener('mouseleave', function() {
//     console.log('You exited no')

// })


document.querySelector('.container').addEventListener('mousemove', function(e) {
    console.log('You triggered mouse move event');
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},154)`
    console.log(e.offsetX, e.offsetY);

})