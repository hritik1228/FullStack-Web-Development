console.log("Ajax tutorial in one video");
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {

    console.log('You have clicked the fetchBtn Button');


    // Instantiate an xhr objects
    const xhr = new XMLHttpRequest();

    // Open the object [GET request means only I will provide URL and POST request means URL + some data] true means asynchronus
    // xhr.open('GET', 'hritik.txt', true);
    // xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    // use this for POST Request
    xhr.open('POST', 'https://reqres.in/api/users', true);
    xhr.getResponseHeader('Content-type', 'application/json');

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
    params = `{
        "name": "hritik",
        "job": "leader"
    }`;
    xhr.send(params);

    console.log('We are completed!!');

}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function() {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj) {
                str += `<li>${obj[key].employee_age} </li>`;
            }
            list.innerHTML = str;
        } else {
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");

}

let fetchFruit = document.getElementById('fetchFruit');
fetchFruit.addEventListener('click', displayFruit);

function displayFruit() {
    console.log('You clicked on fetch fruits btn');

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'fruit.txt', true);

    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log('Error occured');
        }
    }

    xhr.send();

    console.log('Task Complete');
}

let fetchVeg = document.getElementById('fetchVeg');
fetchVeg.addEventListener('click', displayVeg);

function displayVeg() {
    console.log('You clicked on fetch Veg btn');

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'vegetable.txt', true);

    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log('Error occured');
        }
    }

    xhr.send();

    console.log('Task Complete');
}