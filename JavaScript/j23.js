console.log("ES6");

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan() {
        return `I am ${this.name} and this company is best`;
    }
    joiningYear() {
        return 2021 - this.experience;
    }
    static add(a, b) {
        return a + b;
    }
}
o1 = new Employee("Hritik", 1, "TRB");
console.log(Employee.add(5, 7));
console.log(o1.joiningYear());


class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, language, github) {
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }

    favoriteLanguage() {
        if (this.language == 'python') {
            return 'Python';
        } else {
            return 'JavaScript';
        }
    }

    static multiply(a, b) {
        return a * b;
    }
}

// harry = new Employee("Harry", 56, "Division");
// console.log(harry.joiningYear());
// console.log(Employee.add(34, 5))
rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420")
console.log(rohan)
console.log(rohan.favoriteLanguage())
console.log(Programmer.multiply(5, 7));