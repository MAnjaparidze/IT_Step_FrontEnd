// Hoisting -> როდესაც ფუნქციის/ცვლადის გამოყენება შეგვიძლია მათ დეკლარაციამდე
// ! Functions can be Hoisted
// ! Classes can NOT be Hoisted

// function
// let/var/const
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// Unnamed / Named

function unnamedClass() {
    let Rectangle = class {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }

    console.log(Rectangle.name, " [UNNAMED]");
}

function namedClass() {
    let Rectangle = class RectangleName {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }

    console.log(Rectangle.name, " [NAMED]")
}

let customUnnamedFunction = function () {
    console.log("OE");
}
let customNamedFunction = function namedFunction() {
    console.log("OE");
}

// unnamedClass();
// namedClass();
// console.log(customUnnamedFunction.name);
// console.log(customNamedFunction.name);

// Class Methods

class Employee {
    constructor(name, surname, salary, rate) {
        this.name = name;
        this.surname = surname;
        this.salary = salary;
        this.rate = rate;
        // this.getSalary = function (overtime) {
        //     return salary + (rate * overtime);
        // };
    }
    #privateVar
    static dummyVariable = "Test";

    getSalary(overtime) {
        return this.salary + (this.rate * overtime);
    }

    // sayHello() { // Method
    //     console.log(`Baro ${this.name}`);
    // }

    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    set updateDV(value) {
        this.dummyVariable = value;
    }

    get dummyV() {
        return this.dummyVariable;
    }
}


// function sayHello(name) { // Function
//     console.log(`Baro ${name}`);
// }

// sayHello("Eka");

let employeeSandro = new Employee("Sandro", "Revazishvili", 1.2, 0.2);

// function createEmployee(name,surname,salary,rate) {
//     return {
//         name,
//         surname,
//         salary,
//         rate
//     }
// }

// console.log(employeeSandro, " [CREATED EMPLOYEE]");
// employeeSandro.salary = 6.9; 
// console.log(employeeSandro, " [AFTER RAISE]");
// console.log(employeeSandro.getSalary(168), " [SANDRO SALARY]");

// Get Full Name
// console.log(employeeSandro.fullName);
// console.log(employeeSandro.dummyV); // GETTER
// console.log(employeeSandro.dummyVariable); // ERROR - Getting STATIC PRIVATE VARIABLE

// employeeSandro.updateDV = "Iobani Gardabani"; // SETTER

// console.log(employeeSandro.dummyV);

function superInheritance() {
    class Human {
        constructor(gender, name, surname, age) {
            this.gender = gender,
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.handCount = 2;
            this.legCount = 2;
            this.eyeCount = 2;
            this.isWalking = false;
        }

        walk() {
            this.isWalking = true;
            console.log(`${this.name} is walking...`);
        }

        stop() {
            if(this.isWalking) {
                this.isWalking = false;
                console.log(`${this.name} stopped walking...`);
            } else {
                console.log(`${this.name} was already resting...`);
            }
        }

        eat() {
            console.log(`${this.name} is eating... Yoishiiii`);
        }

        die() {
            console.log("Wasted... წევიდა მარილზე... RIP...");
            this.stop();
        }
    }

    class Student extends Human {
        constructor(school, gender, name, surname, age) {
            super(gender, name, surname, age);
            this.school = school;
        }

        stuDYING() {
            console.log(`${this.name} is studying but is not dead yet...`);
        }
    }

    let mamuka = new Student("ძააააან მაგარი სკოლა", "Male", "Mamuka", "Anjaparidze", 54);

    let giorgi = new Human("Male", "Giorgi", "Kurdadze", 84, "TEST");

    console.log(mamuka, " [EGI RA DGESHIA SIMON]");
    mamuka.walk();
    // console.log(giorgi, " [AR MIJEREBS]")
}

// superInheritance();

// Error Handling - Try Catch

// throw new Error("RAGACA");

class CustomError {
    constructor(message) {
        this.message = message;
        this.name = "Custom Error";
    }
}

class ValidationError extends CustomError {
    constructor(message) {
        super(message);
        this.name = "Validation Error"
    }
}

function errorSimulator() {
    throw new ValidationError("Olaaa! Pendejo");
}

// errorSimulator();

// try {
//     errorSimulator();
// } catch(error) {
//     console.log(error.message);
//     console.log(error.name);
// }

function readUser(json) {
    let user = JSON.parse(json);

    if(!user.age) {
        throw new ValidationError("No Field: AGE!");
    }

    if(!user.name) {
        throw new ValidationError("No Field: NAME!");
    }

    return user;
}

try {
    let resultUser = readUser('"age": 25');
    console.log(resultUser, " [AEE]");
} catch(err) {
    if(err instanceof ValidationError) {
        console.log(`Invalid DATA: ${err.message}`);
    } else if (err instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${err.message}`);
    } else {
        throw err;
    }
}

try {
    let userData = getUserData(id);
    // 200 - OK
} catch(err) {
    // ERROR STATUS CODES
    // 500 - Internal Server Error
    // 404 - Not Found
    // 401 - Action Restricted
    // 400 - Invalid Data

    // err.status
}