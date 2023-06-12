let isOrderAccepted = false;
let isValetFound = false;
let hasRestaurantSeenYourOrder = false;
let restaurantTimer = null;

// Zomato App- Start/PowerUp/Boot up
window.addEventListener('load', function() {
    document.getElementById('acceptOrder').addEventListener('click', function() {
        askRestaurantToAcceptOrReject();
    })

    let res = checkIfOrderAcceptedFromRestaurant();
    // console.log(res);
    res.then((res) => {
            console.log('Update from Restaurant-', res);

            if (isOrderAccepted) startPreparingOrder();
            // Step-3 Order Rejected
            else this.alert('Sorry restaurant couldnt accept your order, Returning your amount with zomato shares!')
        })
        .catch((err) => {
            console.log(err)
            alert('Something went wrong, Please try again later')
        })
})


// Step:1 Check Wheteher Restaurant accepted order or not
function askRestaurantToAcceptOrReject() {

    setTimeout(() => {
        isOrderAccepted = confirm('Should Restaurant accept or not');
        hasRestaurantSeenYourOrder = true;
        console.log(isOrderAccepted)
    }, 1000)

    // Promise-> Resolve/Reject
    // let demoPromise = new Promise((resolve, reject) => {
    // })
}

// Step:2 Check if Restaurant has accepted order

function checkIfOrderAcceptedFromRestaurant() {

    return new Promise((resolve, reject) => {
        restaurantTimer = setInterval(() => {
            console.log('Checking if order accepted or not');
            if (!hasRestaurantSeenYourOrder) return;
            if (isOrderAccepted) {
                resolve(true);
            } else {
                resolve(false)
            }
            clearInterval(restaurantTimer)
        }, 2000);
    })
}

// Step-4 Start Preparing food

function startPreparingOrder() {
    Promise.all([
            updateOrderStatus(),
            updateMapView(),
            // startSearchingForValets(),
            // checkForOrderDelivery()
        ])
        .then((res) => {
            console.log(res)
            setTimeout(() => {
                alert('How was your food? Rate your food & delivery experience')
            }, 2000);
        })
        .catch((err) => {
            console.log(err)
        })
}

function updateOrderStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById('currentStatus').innerText = 'Preparing your order';
            resolve('status updated');
        }, 1500);
    })
}

function updateMapView() {
    // Fake delay to get data
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById('mapview').style.opacity = '1';
            resolve('map initialised');
        }, 1000);
    });
}

// Promise - then,catch         Callback- resolve, reject
// Types of promise-
// 1. Promise.all-> sare opertions ko call krta h parallely, if one fails Promise.all fails
// 2. Promise.allsettled-> sare opertions ko call krta h parallely, if one fails don't give a damn, promise.allsettled passes.
// 3. Promise.race-> first promise to complete - whether it is resolved or rejected
// 4. Promse.any-> first promise to fullfil that is resolved/fullfilled, it not bothers about the rejected promise it returns only the first resolve promise