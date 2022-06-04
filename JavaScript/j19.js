console.log("Date Object");

let today = new Date();
console.log(today);
console.log(today.getDate(), today.getDay(), today.getHours());
console.log(typeof today);

let otherDate = new Date('8-4-2023 04:54:05');
otherDate = new Date('06/28/1998');
console.log(otherDate);

// otherDate = new Date('June 26 1998'); // MM DD YY

// 0-sun
// 1-mon
// 2-tue
// 3-wed
// 4-thurs
// 5-Fri
// 6-sat

// console.log(otherDate);

let a;
// a = otherDate.getDay();
// a = otherDate.getDate();
// a = otherDate.getMinutes();

a = otherDate.getTime(); // No. of seconds since 1 jan 1970
a = otherDate.getMilliseconds();
a = otherDate.getMonth();

otherDate.setDate(23);
otherDate.setMonth(0); // 0-jan,1-feb so on
otherDate.setFullYear(1900);
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);

console.log(a);