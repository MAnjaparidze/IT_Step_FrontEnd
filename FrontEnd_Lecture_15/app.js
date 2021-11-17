//#region Functions 

// Declaration / Initialization Function
function greeting() {
    console.log("Hello World");
}

// greeting();

function greetPerson(personName) {
    console.log(`Hello ${personName}`);
}

// greetPerson("Mamuka");

function createNewPerson(personName, personSurname, personAge) {
    let person = {
        name: personName,
        surname: personSurname,
        age: personAge
    };

    return person;
}

// createNewPerson("Giorgi", "Abashidze", 58);

// let firstPerson = createNewPerson("Mamuka", "Anjaparidze", 23);
// console.log(firstPerson, "[RETURNED PERSON OBJECT]");

function calculatePersonAge(birthYear) {
    const currentYear = 2021;

    let age = currentYear - birthYear;

    return age;
}

// let personAge = calculatePersonAge(1998);
// console.log(personAge);

function calculateCreditScore(income, expenses) {
    let expensePercentage = expenses * 100 / income;
    let goodCreditScore = false;

    if (expensePercentage <= 30) {
        goodCreditScore = true;
    }
    return goodCreditScore;
}

function createPersonBio(personName, personSurname, personBirthDate, personIncome, personEpxenses) {
    let personObject = {
        name: personName,
        surname: personSurname,
        age: null,
        hasGoodCreditScore: undefined
    };

    let personAge = calculatePersonAge(personBirthDate);

    let personCreditScore = calculateCreditScore(personIncome, personEpxenses);

    personObject.age = personAge;
    personObject.hasGoodCreditScore = personCreditScore;

    return personObject;
};

// console.log(createPersonBio("Sandro", "Revazishvili", 1995, 5000, 0));
//#endregion

// Control Flow (Conditionals & Loop)

//#region Conditionals

// თუ დრო 6-12 -> დილამშვიდობისა
// თუ დრო 12-18 -> შუადღემშვიდობისა
// თუ დრო 18-21 -> საღამომშვიდობისა
// სხვა შემთხვევაში -> ღამემშვიდობისა

// If..Else
function greetOfTheDay(hour) {

    if (hour > 24) {
        return console.log("Invalid Hour Value");
    }

    if (hour >= 6 && hour < 12) {
        console.log("დილამშვიდობისა");
    } else if (hour >= 12 && hour < 18) {
        console.log("შუადღემშვიდობისა");
    } else if (hour >= 18 && hour < 21) {
        console.log("საღამომშვიდობისა");
    } else {
        console.log("ღამემშვიდობისა");
    }
}

// greetOfTheDay(14);

// Switch Case
function songOfTheWeak(weekday) {

    switch (weekday) {
        case "ორშაბათი":
            console.log(`${weekday}ც შაბათია`);
            break;
        case "სამშაბათი":
            console.log(`${weekday}ც შაბათია`);
            break;
        case "ოთხშაბათი":
            console.log(`${weekday}ც შაბათია`);
            break;
        case "ხუთშაბათი":
            console.log(`${weekday}ც შაბათია`);
            break;
        case "პარასკევი":
            console.log(`${weekday}ც შაბათია`);
            break;
        case "შაბათი":
            console.log(`${weekday}ც ხომ შაბათია`);
            break;
        default:
            console.log(`აბა ${weekday} რა ჭირია`);
    }

}

// songOfTheWeak("ლენსტალბერი");

//#endregion

//#region Loops

// For Loop

// Initial Expression / Condition / Increment Expression
function forLoop() {
    console.log("For Loop");
    for (let i = 0; i <= 5; i++) {
        // console.log(`Hello World - ${i}`);
        if (i % 2 !== 0) {
            console.log(`${i} - Odd Number`);
        };
    };
};

// forLoop();

// While Loop

function whileLoop() {
    console.log("While Loop");
    let i = 9; // Declaration / Initialisaton

    while (i <= 5) { // Condition
        if (i % 2 !== 0) {
            console.log(`${i} - Odd Number`);
        };
        i++; // Increment
    };
};

// whileLoop();

// Do-While Loop

function doWhileLoop() {
    console.log("Do While Loop");
    let i = 0; // Declaration / Initialisation

    do {
        if (i % 2 !== 0) {
            console.log(`${i} - Odd Number`);
        };
        i++; // Increment
    } while (i <= 5); // Condition
};

// doWhileLoop();

// For-In Loop

function forInLoop() {
    const person = createPersonBio("Sandro", "Revazishvili", 1995, 5000, 0);
    // Dot Notation
    // console.log(person.age);
    for (let key in person) {
        // console.log(key, '[KEY in PERSON]');
        // Bracket Notation
        console.log(key, person[key]);
        console.log("-----------------------------------")
    }
}

// forInLoop();

// For-OF Loop
function forOfLoop() {
    let colorArray = ["Red", "Yellow", "Blue", "Green", "Violet"];

    // for(let i = 0; i < colorArray.length; i++) {
    //     console.log(i, colorArray[i]);
    // }

    // for (let index in colorArray) {
    //     console.log(index, colorArray[index]);
    //     if(colorArray[index] === "Yellow") {
    //         // doSomething;
    //     }
    // }

    for (let color of colorArray) {
        console.log(color);
        if (color === "Yellow") {
            // doSomething
            let index = colorArray.indexOf(color);
            colorArray[index] = "Black";
        }
    }

    console.log(colorArray);
}

// forOfLoop();

// Break & Continue;

function breakContinue() {
    let i = 0;

    while (i <= 10) {

        if(i === 5) {
            break;
        }

        if (i % 2 !== 0) {
            i++;
            continue;
        }
        console.log(i);
        i++;
    }
}

// breakContinue();

//#endregion