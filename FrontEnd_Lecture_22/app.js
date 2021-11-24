// Function Constructors

// Object Oriented Programming (OOP) - არის პარადიგმა რომელიც ორიენტირებულია ობიექტებზე (Objects) უფრო მეტად
// ვიდრე ფუნქციებზე (Functions).

// !NOTE - OOP არ არის პროგრამირების ენა - ის უფრო მითითებებია თუ როგორ დაიწეროს კოდი

// თვითონ ცნება შექიმნა დაახლოებით 70-იან წლებში.

// ბევრი დღევანდელი Framewrok-ი არის დაფუძნებული OOP პრინციპებზე - Angular

// OOP-ს გააჩნია 4 ძირითადი სვეტი (Pillars)

// #1 Encapsulation - ენკაპსულაცია (შეფუთვა)
// #2 Abstraction - აბსტრაქცია (განზოგადება)
// #3 Inheritence - ინჰერითენსი (მემკვიდრეობითობა)
// #4 Polymorphism - პოლიმორფიზმი (სახეცვლილებია)

// OOP-მდე არსებობდა პროცედურული პროგრამირება - Procedular Programming
/* 
    ფუნქციებისა და ცვლადებისგან შედგებოდა მთელი პროგრამა, რომელიც ყველაზე კარგ შემთხვევაში იყო
აზრობრივად ფაილებითა და სახელებით განცალკევებული.
*/
// OOP-ს შემთხვევაში ფუნქციებსა და ცვლადებს ვაჯგუფებთ ლოგიკის მიხედვით ობიექტების ქვეშ კრებულად
/* 
    OOP-ში ობიექტების ქვეშ გაერთიანებულ ფუნქციებსა და ცვლადებს ეწოდებათ:
    * functions - მეთოდები "Methods"
    * variables - ფროფერთიები "Properties"

    Example: localStorage
    // ENCAPSULATION
    localStorage = {
        default: [],
        getItem: function(value) {
            ...
        },
        setItem: function(value) {
            ...
        }
    }
*/
// Spaghetti Code - არეული, ერთმანეთში გადახლართული, ძნელად წაკითხვადი/გარჩევადი კოდი

// Procedural Programming Example
function proceduralExample() {
    let baseSalary = 30000;
    let overtime = 30;
    let rate = 200;

    function getWage(baseSalary, overtime, rate) {
        return baseSalary + overtime * rate;
    }

    let monthlySalary = getWage(baseSalary, overtime, rate);

    console.log(monthlySalary, "[GIORGI'S Salary]");
}

// proceduralExample();

function oopExample() {
    // Encapsulation
    let employee = {
        baseSalary: 1500,
        overtime: 10,
        rate: 20,
        getWage: function() {
            return this.baseSalary + this.overtime * this.rate;
        }
    };
    
    let monthlySalary = employee.getWage();
    console.log(monthlySalary, "[LEN STAL BERIS Salary]");
};

oopExample();