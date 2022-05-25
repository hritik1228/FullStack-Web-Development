console.log("Mr. Hritik Kumar");

const proto = {

        slogan: function() {
            return `This company is the best`;

        },
        changeName: function(newName) {
            this.name = newName;

        }

    }
    // This creates harry object
const hritik = Object.create(proto);
hritik.name = "Hritik";
hritik.role = "Programmer";
hritik.changeName("Khuhsi");
console.log(hritik)

// This also creates harry object
const harry1 = Object.create(proto, {
    name: { value: "harry", writable: true },
    role: { value: "Programmer" },
});
harry1.changeName("Harry2")
    // console.log(harry1)


function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

//Slogan
Employee.prototype.slogan = function() {
        return `This company is best. Regards, ${this.name}`;

    }
    // Create an object from this constructor now
let hritikObj = new Employee("Hritik", 800000, 92);
console.log(hritikObj.slogan())

function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience)
    this.language = language;
}
// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

//Manually set the constructor
Programmer.prototype.constructor = Programmer;

let tiya = new Programmer("Siya", 2, 0, "JavaScript");

console.log(tiya);
console.log(tiya.slogan())