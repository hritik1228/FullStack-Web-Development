console.log('We are at tut 6');
const name = 'Harry';
const greeting = 'Good Morning';

console.log(greeting + ' ' + name);

let html;

html = "<h1> this is heading</h1>" +
    "<p> this is My para</p>";
console.log(html);

html = html.concat('this', ' str2');
console.log(html);

let FirstName = "Hritik";
let LastName = FirstName.concat(" Kumar");
console.log(LastName)

let info = FirstName.concat(' Kumar', ' 23');
console.log(info);
console.log(info.length);
console.log(info.toLowerCase());
console.log(info.toUpperCase());
console.log(info[14]);
console.log(info.indexOf('3'));
console.log(info.lastIndexOf('3'));
console.log(info.charAt(14));
console.log(info.endsWith('k'));
console.log(info.includes('Hritik'));
console.log(info.substring(1));
console.log(info.slice(1));
console.log(info.split('i'));
console.log(info.replace('23', '34'));
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);
// console.log(html[1]);
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('dsfsdfd'));
// console.log(html.includes(' fg'));
// console.log(html.substring(1,6));
// console.log(html.slice(0, 4))
// console.log(html.split('>'));
// console.log(html.replace('this', 'it'));

let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

let car1 = 'Ford\'';
let car2 = 'Hundai';
let car3 = 'Ferrari';

let fourWheeler = `List of fourWheeler available in my store ${car1}, ${car2}, ${car3}. Thank you for Visiting sir!!`

console.log(fourWheeler);

document.body.innerHTML = myHtml;