console.log("Ajax tutorial in one video");
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {

    console.log('You have clicked the fetchBtn Button');


    // Instantiate an xhr objects
    const xhr = new XMLHttpRequest();

    // Open the object [GET request means only I will provide URL and POST request means URL + some data] true means asynchronus
    xhr.open('GET', 'hritik.txt', true);

    // what to do OnProgress(Optional)
    xhr.onprogress = function() {
        console.log('I am on onProgress')
    }

    // what to do when response is ready
    xhr.onload = function() {
        console.log(this.responseText);
    }

    // send the request
    xhr.send();

}