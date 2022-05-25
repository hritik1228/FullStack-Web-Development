console.log("Session and Local Storage");
// sets a key-value pair to inside localstorage
localStorage.setItem('Name', 'Hritik');
localStorage.setItem('Name2', 'Rahul');

// cannot add array to localstorage
let impa = ['adrak', 'pyaz', 'lasoon', 'chana']
localStorage.setItem('bag', JSON.stringify(impa));

// typeof window.localStorage
// window.localStorage.Name
// window.localStorage.Name2
// to get item from localstorage

// to clear localstorage
// localStorage.clear();

// to clear particular key-pair value
localStorage.removeItem('Name')

// to retrieve localstorage item
// let name = localStorage.getItem('Name')
// console.log(name)
let name = localStorage.getItem('bag')
name = JSON.parse(localStorage.getItem('bag'))
console.log(name)


sessionStorage.setItem('sessionName', 'Hritik');
sessionStorage.setItem('sessionName2', 'Rahul');

// cannot add array to localstorage
let impa1 = ['adrak', 'pyaz', 'lasoon', 'chana']
sessionStorage.setItem('sessionbag', JSON.stringify(impa1));