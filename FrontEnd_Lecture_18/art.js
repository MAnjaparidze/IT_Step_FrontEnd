function createArr(numberAmount, min, max) {
    let tmpArr = []
    for (let i = 0; i < numberAmount; i++) {
        let randomNumber = Math.floor(Math.random(max - min) * max + 1)
        tmpArr.push(randomNumber)
    }
    return tmpArr
}

const arr = createArr(25, 10, 120)

function getMax(array) {
    return Math.max(...array)
}
// console.log(getMax(arr));

// Math RANDOM

let randNum = Math.random() * 100;

console.log(randNum, "[Random Number]");
// 99.36762
// 99

let floorInt = Math.floor(randNum);

console.log(floorInt, "[Floored Integer]");

let roundInt = Math.round(randNum);

console.log(roundInt, "[Rounded Integer]");

Math.max([]);

Math.min([]);