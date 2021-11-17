// Exercise #1

// დაწერეთ ფუნქცია რომელიც ელემენტს INDEX-ის მიხედვით გადაადგილებს ელემენტს OFFSET-იდან გამომდინარე
const numbers = [69, 72, 3, 8, 14, 6, 7, 12];

// ნამიოკი ;) გამოიყენეთ SPLICE მეთოდი

// Edge Cases - გაუთვალისწინებელი მომენტები რომლებიც შეიძლება მოხდეს ფუნქციაში
// Ex: მასივი იყოს ცარიელი ამ დროს რა ხდება
// Offset / Index - იყოს მასივის საზღვრებს გარეთ
// Index + Offset - იყოს მასივის საზღვრებს გარეთ

function moveElement(array, index, offset) {
    const position = index + offset;

    if (array.length === 0) {
        return array;
    }

    if (position >= array.length || position < 0) {
        console.error("Invalid Offset");
        return;
    }

    let arrayToReturn = [...array];

    let element = arrayToReturn.splice(index, 1)[0];
    console.log(arrayToReturn, element, "[In Progress]");

    arrayToReturn.splice(position, 0, element);

    return arrayToReturn;
};

// console.log(moveElement(numbers, 5, -3), "[RESULT]") // [1,2,3,4]
// console.log(moveElement(numbers, 0, 1)) // [2,1,3,4]
// console.log(moveElement(numbers, 0, 2)) // [2,3,1,4]
// console.log(moveElement(numbers, 1, -1)); // [2,1,3,4]

// If the OFFSET exceeds index of possible position in the array console.error("Invalid Offset")

// Exercise #2

// ფუნქციამ უნდა დააბრუნოს გადაცემული მასივში არსებული ყველაზე დიდი ელემენტი

function getMaxElement(array) {
    if (array.length === 0) {
        console.error("Array is empty");

        return;
    }

    // let max = array[0];

    // for(let i = 1; i < array.length; i++) {
    //     if(array[i] > max) {
    //         max = array[i];
    //     }
    // }

    // return max;
    [1, 6, 2, 8];
    //accumulator // currentValue
    return array.reduce((accumulator, currentValue) => (accumulator > currentValue) ? accumulator : currentValue);
    // accumulator -> 1 currentValue -> undefined
    // accumulator -> 6 currentValue -> 1
    // accumulator -> 2 currentValue -> 6
    // accumulator -> 8 currentValue -> 6

    //currentValue -> 8
}


const max = getMaxElement(numbers);
console.log(max); // 4