console.log("Ajax tutorial in one video");
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {

    console.log('You have clicked the fetchBtn Button');


    // Instantiate an xhr objects
    const xhr = new XMLHttpRequest();

    // Open the object [GET request means only I will provide URL and POST request means URL + some data] true means asynchronus
    // xhr.open('GET', 'hritik.txt', true);
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    // use this for POST Request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/employee/2', true);

    // what to do OnProgress(Optional)
    xhr.onprogress = function() {
        console.log('I am on onProgress')
    }

    /*
        onreadystatechange code values
        0 UNSENT- Client has been created.open() not called yet.
        1 OPENED- open() has been called.
        2 HEADERS_RECEIVED- send() has been called, and headers and status are available.
        3 LOADING- Downloading; responseText holds partial data.
        4 DONE- The operation is complete.
    */

    xhr.onreadystatechange = function() {
        console.log('Ready state is', xhr.readyState);
    }

    // what to do when response is ready
    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log('Some error occured');
        }

    }

    // send the request
    xhr.send();

    console.log('We are completed!!');

}