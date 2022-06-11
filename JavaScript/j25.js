console.log("CallBack Function");

const students = [
    { name: "Hritik", subject: "JavaScript" },
    { name: "Aditya", subject: "Python" }
]

function enrollStudent(student, callback) {
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 3000);
}

function getStudents() {
    setTimeout(function() {

        let str = "";
        students.forEach(function(student) {
            str += `<li>${student.name}</li>`
        });

        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 1000);
}


let newStudent = { name: "Nikhil", subject: "Java" }
enrollStudent(newStudent, getStudents);
//getStudents();