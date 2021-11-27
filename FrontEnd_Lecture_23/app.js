// ENCAPSULATION Example
console.dir(document);
// console.log(window);

// ABSTRACTION ----------------------

// method-ებისა და property-ების განზოგადება. როგორც ტელევიზორის პულტის გამოყენებისას არ ვუკვირდებით რა პროცესები მიდის
// რომელიმე ბრძანების შესასრულებლად (ხმის აწევა), შესაბამისად მიღებულია რომ მომხარებელს არ უნდა აინტერესებდეს/ეხებოდეს
// OOP კლასის შიგნით არსებული ყველა ცვლადი და ფუნქცია.

// გაცილებით მარტივი Interface
// Reduce Impact of Change - ბევრად ნაკლებია იმის შანსი რომ ადამიანის დაწერილმა კოდმა წარმოშვას პრობლემა. იმიტომ,
// რომ მხოლოდ საჭირო კოდთან აქვს შეხება.

// INHERITENCE ------------------------

// Human, Student, Sportsman
// GeneralHTMLClass -> Global Properties/Methods "hidden", "innerHTML", "onClick()", "onHover()"....
// SubClass (For Inputs) -> "onChange()", "value"...
// TextBox, Select, CheckBox
// გვეხმარება ზედმეტი კოდის აღმოფხვრაში

// POLYMORPHISM -----------------------

// Poly - Many (ბევრი) Morphism - Form (ფორმა) -> ბევრი ფორმა;
// გვეხმარება ზედმეტი if/else || switch/case conditionals
// გვეხმარება გამოვიყენოთ ერთი და იგივე მეთოდი/ცვლადი და შევცვალოთ იგი სიტუაციის მიხედვით.

/* Example: 
    <input ... />

    switch(type) {
        case "select": renderSelect(),
        case "text": renderText(),
        case "email": renderEmail(),
        case "password": .....
    }

    inputElement.render()

*/


function Employee(name, surname, salary, rate) {
    this.name = name;
    this.surname = surname;
    this.salary = salary; // თვიური მოჭრილი ხელფასი
    this.rate = rate; // საათობრივი ანაზღაურება

    this.getSalary = function (overtime) {
        return salary + (rate * overtime);
    }
}

let firstEmployee = new Employee("Mamuka", "Anjaparidze", 1000, 31);

// console.log(firstEmployee);

function AbstractEmployee(name, surname, salary) {
    this.name = name;
    this.surname = surname;
    this.salary = salary; // თვიური მოჭრილი ხელფასი
    // this.rate = rate; // საათობრივი ანაზღაურება
    let rate = 31;

    this.getSalary = function (overtime) {
        return salary + (rate * overtime);
    }
}

let firstAbstractEmployee = new AbstractEmployee("Jijigle", "Simaro", 15000);

// console.log(firstAbstractEmployee);

// Factory Function
function createCircle(radius, location) {
    return {
        radius: radius,
        location: location,
        draw: function () {
            console.log("Drawing Circle", location);
        }
    }
}

let circle1 = createCircle(10, { x: 200, y: 200 });
// { radius: 10, location: {x: 200, y: 200}};
// console.log(circle1);

// Constructor Functions
function CircleConstr(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 };
    this.draw = function (location) {
        if (location) {
            console.log("Drawing at Custom Location: ", location);
        } else {
            console.log("Drawing at Default Location: ", defaultLocation);
        }
    }
}

let circle2 = new CircleConstr(25);
console.log(circle2);
// თუ არ გამოვიყენებთ 'new' keyword-ს მაშინ "this" ეცდება რომ დაარეფერენსოს 'window' - Browser-ის შემთხვევაში
// ხოლო 'Global Object' - Node-ის შემთხვევაში
// let name = "Babayaga"; -> new String();
// let isOfAge = true; -> new Boolean();


// Functions are Objects

const CircleConstr1 = new Function(
    "radius",
    `
    this.radius = radius;
    this.draw = function() {
        console.log("Draw")
    }
    `
);

const circle3 = new CircleConstr1(3);

// const testName = new String("Lenini");
// console.log(circle3, "[WHAZAAAAAAP]")
// console.log(testName);

// Adding Properties

// circle2.location = { x: 1, y: 3};
circle2["location"] = { x: 2, y: 6 };
console.log(circle2);

// Removing Properties

delete circle2["location"];

console.log(circle2);


// Constructor Function with Private Abstract Methods & Properties
function Circle(radius) {
    this.radius = radius;

    // Private Property
    let defaultLocation = { x: 1, y: 1 };
    // Private Method
    let computeOptimalLocation = function (x, y) {
        // ....
    }

    this.draw = function (x, y) {
        let optLoc = computeOptimalLocation(x, y);

        console.log("Drawing at: ", optLoc);
    }
}

const mainCircle = new Circle(71);
// mainCircle.draw();

// GETTERS & SETTERS ------------------------


function getSetters() {
    // BAD EXAMPLE

    function Circle(radius) {
        this.radius = radius;

        // Private Property
        let defaultLocation = { x: 1, y: 1 };

        this.getDefaultLocation = function () {
            return defaultLocation;
        }

        this.draw = function (x, y) {

            console.log("Drawing at: ");
        }
    }

    let circleExample = new Circle(3);
    console.log(circleExample);
    circleExample.getDefaultLocation = function () {
        console.log("ATATATATATATATATAT")
    }
    circleExample.getDefaultLocation();
    // Better Example 

    function BetterCircle(radius) {
        /*
            { // Empty OBJECT

            }
        */

        this.radius = radius;

        // Private Property
        let defaultLocation = { x: 1, y: 1 };

        // this.getDefaultLocation = function () {
        //     return defaultLocation;
        // }

        this.draw = function (x, y) {
            console.log("Drawing at: ");
        }

        // GETTERS AND SETTERS
        Object.defineProperty(this, "defaultLocation", {
            get: function () {
                return defaultLocation;
            },
            set: function (value) {
                if (!value.x || !value.y) console.error("Invalid Location");
                defaultLocation = value;
            }
        })

        /*
            return this;
        */
    }

    const perfectCircle = new BetterCircle(67);
    console.log(perfectCircle, "PERFECT CIRCLE");
}

getSetters();