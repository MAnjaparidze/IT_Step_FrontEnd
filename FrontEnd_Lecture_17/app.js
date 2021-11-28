// Combining Array

const combiningArray = () => {
    const firstArray = [1, 2, 3];
    const secondArray = [4, 5, 6];

    let combined = firstArray.concat(secondArray);

    console.log(combined);
}

// combiningArray();

// Slice
const sliceArray = () => {
    const numbersArray = [1, 2, 3, 4, 5, 6];

    // slice has 2 parameters -> 'startIndex', 'endIndex'
    /* NOTE - 'endIndex' in itself means that slice will go up to (but not include)
     element at the 'endIndex' */

    let sliced = numbersArray.slice(0, 3);

    console.log(sliced);

    let slicedSingle = numbersArray.slice(2);

    console.log(slicedSingle);

    let slicedCoppied = numbersArray.slice();

    console.log(slicedCoppied);
};

// sliceArray();

//  NOTE - If dealing with Primitive Data Types -> They will be copied.
//  NOTE - If dealing with Objects they will be pointers/references

const combiningObjects = () => {
    const firstObjArr = [{ id: 0, name: "Object 1" }];

    const secondObjArr = [4, 5, 6];

    let combined = firstObjArr.concat(secondObjArr);

    console.log(combined);

    let slicedArray = combined.slice();

    console.log(slicedArray);
};

// combiningObjects();

// Spread Operators

const spreadOperators = () => {
    // ES6 -> With using the spread operator you can also combine arrays
    const firstArr = [1, 2, 3];
    const secondArr = [4, 5, 6];

    // ...
    // let combinedArr = [...firstArr, ...secondArr];

    let combinedArr = [...firstArr, "a", ...secondArr, "b"];
    // let pseudoArr = [1, 2, 3, "a", 4, 5, 6, "b"];

    let copied = [...combinedArr];
    // let copiedSecond = ...combinedArr

    console.log(combinedArr);
    console.log(copied);
    // console.log(typeof(combinedArr));

}

// spreadOperators();

// Itteration - Process when person goes through all the elements of the array/object with a loop

/*
const arrayItteration = () => {}
*/

function arrayItteration() {
    const numbersArray = [1, 2, 3, 4, 5, 6];

    /* Ex 1
    for (let i = 0; i < numbersArray.length; i++) {
        console.log(numbersArray[i]);
    }
    */
    /*
    for(let number of numbersArray) { // OF - Means 'element' in the array
        console.log(number);
    }
    */
    /*
    for (let index in numbersArray) { // IN - Means 'index' of 'element' in the array
        console.log(index);
    }
    */

    // function consoleNumber(number) {
    //     console.log(number);
    // }
    // numbersArray.forEach(consoleNumber);

    numbersArray.forEach(function (number) {
        console.log(number);
    });

    let sumOfNumbers = 0;
    numbersArray.forEach(function (number) {
        sumOfNumbers += number;
    });

    let letterArr = ["a", "b", "c", "d", "e", "f"];
    let word = "";
    letterArr.forEach(function (letter) {
        word += letter;
    });
    // #1 - $a - "" + a
    // #2 - $b - "a" + b
    // #3 - $c - "ab" + c
    // #4 - $d - "abc" + d
    // #5 - $e - "abcd" + e
    // #6 - $f - "abcde" + f
    console.log(word) // abcdef
}

// arrayItteration();

// Callback Functions
function customCallback() {

    let numbersArray = ["a", "b", "c", "d", "e", "f"];

    function pseudoForEach(array, customFunction) {
        for (let letter of array) {
            customFunction(letter);
        }
        // ....
    }

    // Create Outside
    function consoleTheNumber(abdaubda) {
        console.log(abdaubda);
    }

    // consoleTheNumber("G");
    // consoleTheNumber({id: 0, name: "Chemi kai nikalai"})

    pseudoForEach(numbersArray, consoleTheNumber);

    // Legacy Callback
    pseudoForEach(numbersArray, function (abdaubda) {
        console.log(`Legacy Function - ${abdaubda}`);
    });

    // Arrow Callback
    pseudoForEach(numbersArray, (abdaubda) => {
        console.log(`Arrow Function - ${abdaubda}`);
    });
};




