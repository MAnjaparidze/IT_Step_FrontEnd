// ძირითადი ორი Engine - SpiderMonkey - Mozilla Firefox; V8 - Google Chrome;
// Javascript არის Case Sensitive - მნიშვნელობა აქვს ცვლადების პირველ რას დავარქმევთ
// Javascript Scope -> 'let' 'var' 'const' "Hoisting"
// Camel Case - სახელების დარქმევის პრინციპი, რომელშიც ცვლადის პირველი ასო არის პატარა, ხოლო შემდეგი ლოგიკური
// სიტყვის ასო არის დიდი. Example: exampleSampleDample;
console.log("Hello World"); // Hello World
// #region 'let'

// Hoisting
// let ცვლადები ინიციალიზდება დაწერილი კოდის მიხედვით შესაბამის ხაზზე, და მიუწვდომელია გარე კოდის ბლოკებისთვის
// თუ სპეციალურად არ გადავეცით
let firstName;

console.log(firstName); // Mamuka

let lastName = "Anjaparidze";

firstName = "Tornike";

console.log(firstName, lastName, " <===="); // Mamuka Anjaparidze <====
// #endregion let

console.log("<------------------------------------------->");

// #region 'const'

// const ტიპის ცვლადებისთვის ახალი მნიშნელობის მინიჭება, ან მნიშნელობის გადაწერა შეუძლებელია.
const age = 23;

// age = 21;

console.log(age);

// #endregion 'const'

console.log("<------------------------------------------->");

// #region 'var'

// var ცვლადები ინიციალიზდება კოდის დასაწყისში, ხოლო მნიშნელობები (value) ენიჭება შემდეგ. მისაწვდომია სხვა
// კოდის ბლოკებისთვი
console.log(dogName, "Before");

var dogName = "Tsuga";

console.log(dogName, "After");

// #endregion 'var'

// Primitive/Value Data Types / Reference Data Types

// Primitive
let personFirstName = "Mamuka"; // String
let personAge = 23; // Number
let isPersonMarrid; // undefined
let isPersonAlive = true; // Boolean
let isPersonEmployed = null; // NUll

// Reference Data Types

// Object
let person = {
    name: "Mamuka",
    surname: "Anjaparidze",
    age: 23,
    isAlive: false,
    moto: 'I love "workout"',
};

person.surname = "Abashidze";

console.log(person, "<== Person Object");

// Array - ნებისმიერი Data Type ელემენტების მასივი (ერთობლიობა);

let personHobbies = ["Basketball", "Chess", "Smithing", "Skiing"];

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let people = [
    {
        name: "Person 1 Name",
        surname: "Person 1 Surname",
        age: 23,
        isAlive: false,
        moto: 'I love "workout"',
    },
    {
        name: "Person 2 Name",
        surname: "Person 2 Surname",
        age: 23,
        isAlive: false,
        moto: 'I love "workout"',
    },
    {
        name: "Person 3 Name",
        surname: "Person 3 Surname",
        age: 23,
        isAlive: false,
        moto: 'I love "workout"',
    },
];

let arrayArray = [[], [], [], [], []];