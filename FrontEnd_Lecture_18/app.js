// ForEach

function forEachExample() {
    let coursesArray = [
        {
            name: "Javascript"
        },
        {
            name: "HTML & CSS"
        },
        {
            name: "Angular"
        },
        {
            name: "Node.js"
        },
        {
            name: "React"
        },
        {
            name: "Design Patterns"
        },
        {
            name: "UI/UX Design"
        },
    ];

    function customCallBack(course) {
        console.log(course.name);
    }

    // coursesArray.forEach(customCallBack);
    coursesArray.forEach((course) => {
        console.log(course.name);
    });

    // for (let course of coursesArray) {
    //     console.log(course.name);
    // }

    coursesArray.forEach((course, index) => {
        console.log(course, index);
    })
};

// forEachExample();

function customFunctionExample() {

    function mainFunction(func) {
        let numbersArray = [1, 2, 3, 4, 5, 6, 7];

        let secondHalf = numbersArray.slice(3, 6);
        console.log("#3");
        func(secondHalf);
    };

    function callbackFunction(element) {
        console.log(element);
    };

    console.log("#1");
    callbackFunction("First Example");

    let secondExample = "Second Example";

    console.log("#2");
    callbackFunction(secondExample);

    mainFunction(callbackFunction);
}

// Join & Split Methods

function joinExample() {
    const letterArray = ["a", "b", "c", "d", "e", "f"];

    let joined = letterArray.join("");
    console.log(joined, typeof (joined));

    let joinedDash = letterArray.join("-");
    console.log(joinedDash, typeof (joinedDash));

    const numbersArray = [1, 2, 3, 4, 5, 6, 7];

    let joinedNums = numbersArray.join("");
    console.log(joinedNums, typeof (joinedNums));

    let joinedNumsDash = numbersArray.join("-");
    console.log(joinedNumsDash, typeof (joinedNumsDash));

    const arrayOfArrays = [[1, 2, 3, 4, 5, 6], ["a", "b", "c", "d", "e"]];

    let joinedArrays = arrayOfArrays.join("");
    console.log(joinedArrays, typeof (joinedArrays));
}

// joinExample();

function splitExample() {
    const passage = "ილოცე ძილის წინ დეზდემონაააა";
    const passage2 = "სალოცი, რა, მჭირს, შე, უბედურო";

    let passageSplit = passage.split(" ");
    let passage2Split = passage2.split(",");

    console.log(passageSplit);
    console.log(passage2Split);

    let recombined = passageSplit.join(" ");

    let recombined2 = passage2Split.join("~");

    console.log(recombined);
    console.log(recombined2);
}

// splitExample();

// Sorting

function sortExample() {
    const numbersArray = [2, 1, 5, 7, 3, 8, 4, 9, 6];

    numbersArray.sort();

    console.log(numbersArray);

    numbersArray.reverse();

    console.log(numbersArray);

    const objectArray = [
        {
            id: 3,
            name: "Fourth Course"
        },
        {
            id: 0,
            name: "First Course"
        },
        {
            id: 2,
            name: "Third Course"
        },
        {
            id: 1,
            name: "Second Course"
        },
    ];

    // objectArray.sort(); Will not work
    // console.log(objectArray);

    objectArray.sort(function (a, b) {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    });

    // console.log(objectArray);

    const objectLetterArray = [
        {
            id: 4,
            name: "f Course"
        },
        {
            id: 0,
            name: "A Course"
        },
        {
            id: 2,
            name: "b Course"
        },
        {
            id: 1,
            name: "a Course"
        },
        {
            id: 3,
            name: "C Course"
        },
        {
            id: 5,
            name: "F Course"
        },
    ]

    objectLetterArray.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    console.log(objectLetterArray);

    objectLetterArray.sort(function (a, b) {

        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    console.log(objectLetterArray);
}

// sortExample();

function sortExample2() {

    function sortReferenceArray(array) {
        let arrayToUse = [...array];
        arrayToUse.sort((a, b) => (a < b) ? -1 : 1);
        console.log(arrayToUse, '[INNER]');
    };

    let demoNumArray = [2, 15, 6, 4357, 8, 3, 23, 7, 7, 8, 2];
    sortReferenceArray(demoNumArray);

    console.log(demoNumArray, "[OUTER]");
}

// sortExample2();

// Filter
function filterExample() {
    const objectsArray = [
        {
            id: 0,
            name: "Student 1",
            subject: "Math"
        },
        {
            id: 1,
            name: "Student 2",
            subject: "Literature"
        },
        {
            id: 2,
            name: "Student 3",
            subject: "Math"
        },
        {
            id: 3,
            name: "Mamuka",
            subject: "Chemistry"
        },
    ];

    // let filteredArray = objectsArray.filter(function (studentObject) {
    //     return studentObject.subject === "Math";
    // });

    let filteredArray = objectsArray.filter(studentObject => studentObject.subject === "Math");

    console.log(filteredArray);

    return filteredArray;
}

// filterExample();

// Map

function mapExample(filterFunc) {
    let array = filterFunc();

    // array.map(element => console.log(element));

    let newArray = array.map(student => {
        student["class"] = `8${student.id}`;
        return student;
    });

    console.log(newArray);

    let itemsToRender = newArray.map((student) => `<li><a href="/students/${student.id}">${student.name}</a></li>`);
    console.log(itemsToRender);

    let htmlObject = `<ul>${itemsToRender.join("")}</ul>`;
    console.log(htmlObject);
};

// mapExample(filterExample);


// REDUCE

function reduceExample() {
    const numbersArray = [1, -2, 3, 4, 5, 6];

    let sum = 0;

    for (let num of numbersArray) {
        sum += num;
    }


    let sumReduce = numbersArray.reduce((a, b) => {
        return a + b;
    }, 0);

    console.log(sum, sumReduce);
}

// reduceExample();

// Testing in the Arrays

function testingExample() {
    const numbersArray = [-1, 2, -3];


    const isAllPositive = numbersArray.every(function(number) {
        return number >= 0;
    });

    console.log(isAllPositive);

    const atLeastOnePositive = numbersArray.some(function (number) {
        return number >= 0;
    });

    console.log(atLeastOnePositive);
}

testingExample();