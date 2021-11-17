// Operators ტიპები

/*
    არითმეტიკული (Arithmetic Operators)
    მინიჭების (Assignment Operators)
    შედარების (Comparision Operators)
    ლოგიკური (Logical Operators)
    ბიტობრივი (BitWise Operators)
*/
let x = 13;
let y = 2;

//#region Arithmetic Operators

/*
    console.log(x + y, " Sum of the X and Y");
    console.log(x - y, " Substraction of the X and Y");
    console.log(x * y, " Multiplication of X and Y");
    console.log(x / y, " Division of X and Y");
    console.log(x % y, " Remainder of X and Y");
    console.log(x ** y, " Power of X to Y");
*/

// Increment
/*
    console.log(++x); // 14
    console.log(x++); // 14 -> 15
    console.log(x);   // 15
*/

// Decrement
/*
    console.log(--x); // 14
    console.log(x--); // 14
    console.log(x);   // 13
*/
/*
    let firstName = "Mamuka";
    let lastName = "Anjaparidze";

    console.log(firstName + " " + lastName);
    // ""
    // ''
    // ~
    // `` <- ერთიანის(1) გვერდით
    console.log(`გამარჯობა ${firstName} ${lastName} კეთილი იყოს შენი მობრძანება`);
*/
//#endregion

//#region Assignment Operators

/*
    x++;
    x = x + 1;
    x += 5;
    console.log(x);

    x -= 5;
    console.log(x);

    x **= 3;
    console.log(x);
*/

//#endregion

//#region Comparision Operators

// Relational Operations
/*
    console.log(x > 0);
    console.log(x >= 13);

    console.log(y < 4);
    console.log(y <= 2);
*/

// Equality
/*
    console.log(y == 2);
    console.log(x !== 13);
    console.log(true == 0);
    console.log(false == 1);
*/

// Strict Equality (Type + Value)
/*
    console.log(y == "2");
    console.log(y === "2");
*/

// Precedence
/*
    let precEx = 2 + 3 * 4;
    console.log(precEx);
    let precEx2 = (2 + 3) * 4;
    console.log(precEx2);
*/

// Ternary - Conditional Operators

/*
    let points = 90;
    let rank;

    console.log(points > 100);

    if(points > 100) {
        rank = "Gold";
    } else {
        rank = "Silver"
    }

    rank = points > 100 ? "Gold" : "Silver";
    rank = points > 100 && "Gold";

    let isFormActive = false;
*/

//#endregion

//#region Logical Operators

// Logical AND (&&)
// აბრუნებს TRUE-ს თუ ორივე ცვლადი არის TRUE

/*
    console.log(false && false);
    console.log(true && false);
    console.log(false && true);
    console.log(true && true);
*/
/*
let a = 34;
let b = false;

console.log(x && y);
console.log(y && x);
console.log(2 && 2);
console.log(a && b);
*/

/*
    let highIncome = true;
    let goodCreditScore = false;

    let eligibileForLoan = highIncome && goodCreditScore;
    console.log(eligibileForLoan, " BANK");
*/
// Logical OR(||)
// აბრუნებს TRUE-ს თუ რომელიმე ცვლადი არის TRUE;
/*
    let eligibileForLoan2 = highIncome || goodCreditScore;
    console.log(eligibileForLoan2, " MicroFinance");
*/
// !(NOT)
/*
    let applicationRefused = !eligibileForLoan;

    let applicationRefused2 = !eligibileForLoan2;
    console.log(`Bank Application Refued: ${applicationRefused}`);
    console.log(`Micro Finance Applicaion Refued: ${applicationRefused2}`);
*/
/*
    console.log(false || false);
    console.log("Test" || undefined);
    console.log(undefined || 1);
    console.log(35 || false);
*/
// Falsy
    // undefined
    // null
    // 0
    // false
    // ""
    // NaN
    // console.log(3 / "A")

/*
    let userColor;
    let defaultColor = "blue";
    let currentColor = userColor || defaultColor;
*/
//#endregion

//#region BitWise

    // 1 = 00000001
    // 2 = 00000010
    //OR = 00000011 -> 3
    //AR = 00000000

// console.log(1 | 2); // BitWise OR -> 3
// console.log(1 & 2); // BitWise AND -> 0

// Read, Write, Execute
// 00000001
// 00000010
// 00000100

/*
    const readPermission = 1;
    const writePermission = 2;
    const executePermission = 4;
    let myPermission = 0; // 00000000
    myPermission = myPermission | readPermission | writePermission;
*/

// 00000000
//+00000001
//+00000010 
// 00000011
 
// console.log(myPermission);

// 00000011
// 00000100;
/*
    let result = (myPermission & executePermission) ? "Yes" : "No";
    console.log(`Do I have Exec Permissions: ${result}`);
*/
//#endregion