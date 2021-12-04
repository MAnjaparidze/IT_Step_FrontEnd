/* GET Request
    გამოიყენება მაშინ როდესაც Front-ის მხრიდან არ გვიწევს Javascript Object-ის 
გაგზავნა და მხოლოდ ბაზიდან ვითხოვთ ინფორმაციას.
*/
/* POST Request
    გამოიყენება მაშინ როდესაც Front-ის მხრიდან გვიწევს Javascript Object-ის გაგზავნა, და ამ ობიექტის
მიხედვით რაიმე მოქმედების გაკეთება ბაზაში, შემდგომ კი ბაზიდან ინფორმაციის მიღება.

    მაგალითი: Authentication, Registration
    1. მომხმარებელმა ჩაწერა თავისი ინფორმაცია (email, password);
    2. Submit
    3. service.POST("url", {email: "anjaparidzemamuka@gmail.com", password: "MeMiyvarsMalina"})
    4. Backend შეამოწმებს email-ს და password-ს, თუ ემთხვევა ყველაფერი, გვეტყვის რომ ეგარი.
    5. გვიბრუნებს status code-ს 200, message: "Sagol"
*/
/* PATCH Request
    გამოიყენება მაშინ როდესაც Front-ის მხრიდან გვიწევს შეცვლილი Javascript Object-ის გაგზავნა, და ამ ობიექტის
მიხედვით უკვე არსებული ობიექტის განახლება (update).

    მაგალითი: Edit Profile
    1. User შევიდა პირად გვერდზე
    2. დაიწყო თავის ინფორმაციის და-edit-ება
    3. შეცვალა მომხმარებლის სახელი (username)
    4. შეცვალა გვარი (surname)
    5. დააჭირა Update ღილაკს
    6. service.patch("url", { username: "MAnjaparidze", name: "Mamuka", surname: "Ghobeglejiashvili", email: "asifaf@gmail.com"})
    7. Bacekend შეხედავს რა შეიცვალა უკვე შენახულ ობიექტთან შედარებით და დაინახავს username, surname
    8. შეცვლის განსხვავებულებს და შეცვლის ობიექტს შეინახავს, ძველს გადააწერს.
    
    const userObject = {
        _id: "a0s9f7)(&ARF)(#@%asdgvlia",
        name: "apsofjaposfja",
        surname: "apsgfaposfj",
        email: "apsoifjapfj@gmail.com",
        password: "enkibenkidoskidoskialamoski"
    }
    
    const updatedObject = {
        _id: "a0s9f7)(&ARF)(#@%asdgvlia",
        name: "qwerty",
        surname: "zxcvbnm",
        email: "apsoifjapfj@gmail.com",
        password: "enkibenkidoskidoskialamoski"
    }
    
    userObject.name = updatedObject.name
*/
/* DELETE Request
    წაშლის იმ ობიექტს რომლის id-ც დაემთხვევა.

    მაგალითი:

    1. Settings -> Delete Post ....
    2. ჯავასკრიპტი იღებს კონკრეტულად ამ პოსტის id-ს
    3. service.delete("url/06234967209s0dgsD**");
    4. ბაზა მოძებნის id-ს მიხედვით ობიექტს და წაშლის
*/

/*
 A <--------------------------------------------------> B

 A წერტილს ჰყავს 4 ფერის მანქანა

 მწვანე: რომელსაც მიაქვს საჭმელები
 წითელი: რომელსაც მიაქვს ავეჯი
 ყვითელი: რომელსაც მიაქვს ტექნიკა
 ლურჯი: რომელსაც მიაქვს საშენი მასალა  
*/

function xmlGetRequest() {
    const XMLHttpRequest = require("xhr2");
    const HTTPService = new XMLHttpRequest();

    const BASE_URL = "https://jsonplaceholder.typicode.com";

    // Get 'Facebook' Posts
    HTTPService.open("GET", `${BASE_URL}/posts`);
    HTTPService.send();

    HTTPService.onreadystatechange = function () {
        console.log(this.readyState, " [READY]");
        if (this.readyState === 4 && this.status === 200) {
            // console.log(HTTPService.responseText, " [RESPONSE]");
        }
    }
}

function xmlPostRequest() {
    // Create 'Facebook' Post
    HTTPService.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    HTTPService.open("POST", `${BASE_URL}/posts/`, true);
    HTTPService.send([{ title: "Test", body: "Whololo" }]);

    HTTPService.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 201) {
            console.log(HTTPService.responseText, " [CREATE RESPONSE]");
        }
    }
}

// FETCH FUNCTIONALITY --------------------------------------------
// import fetch from "node-fetch";
const fetch = require("node-fetch");

fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
    console.log(response, " [FETCH RESPONSE - GET]");
});