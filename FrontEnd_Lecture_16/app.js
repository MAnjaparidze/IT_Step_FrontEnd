// Camel Case - first Letter MUST BE lower case, next word's first letter MUST BE Upper Case
// Ex personObject

// Case 2 - To use _ (underscore)
// Ex person_object

// Adding Elements

function addElement() {
    let numbersArr = [4]; // [ ]

    // Add Element(s) to the End of the Array
    numbersArr.push(5, 6);
    console.log(numbersArr);

    // Add Element(s) to the Start of the Array
    numbersArr.unshift(1, 2);
    console.log(numbersArr);

    // Add Element(s) to the Middle of the Array
    numbersArr.splice(2, 0, 3);

    // Splice - Remove Element, Add Element, Replace

    // 0  1  2  3 - Indexes
    // [1, 2, 3, 4];
    let dummyArr = ["a", "b", "c", "d"];
    // Remove Element
    dummyArr.splice(1, 1);
    // Replace Element
    dummyArr.splice(1, 1, "f");

    console.log(numbersArr);
}

// addElement();

// Finding Elmenets Primitives

function findingElements() {
    let number = ["a", "b", "3", "d", "e", "f", "e", "b"];

    // Get index of the Element in the Array
    console.log(number.indexOf("b"));

    // Get index of the Element which is not in the Array
    console.log(number.indexOf("h"));

    // Get index of the Element with incorrect Data Type in the Array
    console.log(number.indexOf("3"));

    console.log(number.indexOf(3));

    console.log(number.indexOf("3", 3));

    console.log(number.lastIndexOf("b"));
}

// findingElements();

// Includes

function arrayIncludes() {
    let numbersArr = [1, 2, 3, 4, 5, 6];

    // Don't do it
    console.log(numbersArr.indexOf(7) !== -1);

    // Do it
    console.log(numbersArr.includes(1));
}

// arrayIncludes();

// Finding Reference Data Type - Object

function findingObjects() {
    let coursesArr = [
        { id: 0, name: "First Course" },
        { id: 1, name: "Second Course" }
    ];


    // Bad Practise
    // console.log(coursesArr.includes({ id: 0, name: "First Course" }));

    // Find Method
    // Find takes a FUNCTION as an argument

    /*
    let numbersArr = [1, 2, 3, 4, 5, 6];
    let result = numbersArr.find(function (number) {
        return number > 3;
    });

    console.log(result);
    */

    // let objResult = coursesArr.find(function (course) {
    //     return course.name === "Third Course";
    // });

    // let objResult = coursesArr.find((course) => { return course.id === 0 });

    let objResult = coursesArr.find(course => course.id === 0);

    console.log(objResult);

    // Find Index
    let objIndex = coursesArr.findIndex(course => course.id === 1);
    console.log(objIndex);

    let bomondi = [
        {
            id: 10,
            name: "Merab Sefashvili",
            age: 56,
            hobby: "დაბადების დღეების მოხოდვა"
        },
        {
            id: 11,
            name: "Lela Tsurtsumia",
            age: 56,
            hobby: "ღამე სიჩუმის გაფანტვა"
        },
        {
            id: 12,
            name: "Leqseni",
            age: 56,
            hobby: "აქციებზე სიმღერა"
        },
        {
            id: 13,
            name: "Suramela",
            age: 69,
            hobby: "ბრენდობა"
        }
    ];

    let result = bomondi.find(singer => singer.name === "Merab Sefashvili");

    console.log(result.hobby);

    let resultIndex = bomondi.findIndex(singer => singer.name === "Merab Sefashvili");

    console.log(resultIndex);
}

// findingObjects();

// Remove Element from Array

function removeElement() {
    let numbersArr = [1, 2, 3, 4, 5, 6];

    // Remove Element at the End of the Array
    let lastNum = numbersArr.pop();
    console.log(lastNum);
    console.log(numbersArr);

    // Remove Element at the Start of the Array
    let firstNum = numbersArr.shift();
    console.log(firstNum);
    console.log(numbersArr);

    // Remove Element in the Middle of the Array
    let middleNum = numbersArr.splice(2, 1);
    console.log(middleNum);
    console.log(numbersArr);
}

// removeElement();

// Empty an Array

function emptyArray() {
    // const numbersArr = [1, 2, 3, 4, 5, 6];
    // numbersArr = []; Not cool man

    let numbersArr = [1, 2, 3, 4, 5, 6]; // Length will 6

    // Solution #1 - Works if we don't have any References
    let anotherArray = numbersArr; // This is a Reference
    numbersArr = [];

    console.log(anotherArray);
    console.log(numbersArr);


    // Solution #2
    numbersArr.length = 0;

    console.log(anotherArray, numbersArr);

    // Solution #3
    numbersArr.splice(0, numbersArr.length);

    console.log(anotherArray, numbersArr);

    // Solution #4 - Loop
    while (numbersArr.length > 0) {
        // Not good idea
        // Example - Array length can be in 10^26
        numbersArr.pop();
    }
}

emptyArray();
