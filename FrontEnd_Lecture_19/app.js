// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);

// Get existing element BODY
let mainBody = document.body;
mainBody.style.height = "100vh";
mainBody.style.width = "100vw";
mainBody.style.margin = 0;
mainBody.style.display = "flex";
mainBody.style.justifyContent = "center";
mainBody.style.alignItems = "center";

// Create new element DIV
// let mainContainer = document.createElement("div");

// Assign Classname and Inner Text to the DIV
// mainContainer.className = "main_container";
// mainContainer.innerText = "Test";

// Styling
// mainContainer.style.width = "200px";
// mainContainer.style.height = "200px";
// mainContainer.style.backgroundColor = "red";

// Add created DIV to the existing BODY
// mainBody.appendChild(mainContainer);


// #region Creating Register Form
// let mainContainer = document.getElementsByClassName("main_container")[0];
// console.log(mainContainer);
let mainContainer = document.getElementById("main_container");
// console.log(mainContainerID);
mainContainer.style.width = "30vw";
mainContainer.style.padding = "20px";

let formHeader = document.createElement("h2");
formHeader.innerText = "Register Form";

mainContainer.appendChild(formHeader);

let registerForm = document.createElement("form");
registerForm.setAttribute("action", "#");
// Needed Props for the Dynamic Input Function - Firstname, Lastname, Email, Password, RepeatPassword
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e.target, "[SUBMIT EVENT]");

    let formElements = e.target.elements;

    // console.log(typeof (formElements), "[FORM ELEMENTS]");

    let userObj = {};
    // let inputsArray = [];
    for (let element of formElements) {
        // console.log(element, "[ELEMENT]");
        if (element.tagName === "INPUT") {
            // inputsArray.push(element);
            // userObject {

            // }
            // element.name = "firstName" -> 
            userObj[element.name] = element.value;
            // userObject {
                    // firstName: "asfasfasf"
            // }
        }
    }

    if(userObj.password !== userObj.re_password) {
        alert("Passwords Don't Match");
    } else {
        // JSON PARSE -> Get OBJECT from STRING
        // JSON STRINGIFY -> Create STRING from OBJECT
        // !!! localStorage-ს სჭირდება String! არ ესმის Object/Array... ა.შ
        /* 
            1) locaStorage.getItem -> წამოვიდა String
            2) JSON.parse() -> სტრინგი გადაკეთდა Object/Array-ად
            3) array.push({...})
            4) JSON.stringify(array) -> განახლებული Object/Array გადაკეთდა String-ად
            5) localStorage.setItem -> შევინახეთ სტრინგი 
        */

        // LocalStorage-ში ინფორმაცია ინახება String-ად
        let usersArrayString = localStorage.getItem("users");
        // JSON.parse-ს გადაყავს სტრინგი ობიექტში
        let parsedArray = JSON.parse(usersArrayString);

        console.log(parsedArray);
        if(!parsedArray) {
            parsedArray = [];
        }

        parsedArray.push(userObj);

        // JSON.stringify-ს ობიექტი გადაყავს სტრინგში
        let newArrayString = JSON.stringify(parsedArray);
        
        localStorage.setItem("users", newArrayString);
        alert("User Registered");
    }
    console.log(userObj, "[UPDATED USER OBJECT]")
})

function createInput(type, name, placeholder, max, min) {
    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", type);
    inputElement.setAttribute("name", name);
    inputElement.setAttribute("placeholder", placeholder);
    inputElement.setAttribute("min", min);
    inputElement.setAttribute("max", max);
    inputElement.style.padding = "10px";
    inputElement.style.margin = "10px 0px";

    return inputElement;
}

// Creating Inputs for the Form
// Firstname Input
let firstNameInput = createInput("text", "firstName", "Firstname...", "24", "3");

// Lastname Input
let lastNameInput = createInput("text", "lastName", "Lastname...", "24", "3");

// Email Input
let emailInput = createInput("email", "email", "Email...", "64", "8");

// Password Input
let passwordInput = createInput("password", "password", "Password...", "128", "8");

// Repeat Password Input
let re_passwordInput = createInput("password", "re_password", "Repeat Password...", "128", "8");

let submit_btn = document.createElement("button");
submit_btn.setAttribute("type", "submit");
submit_btn.innerText = "Submit";

let cancel_btn = document.createElement("button");
cancel_btn.innerText = "Cancel";
cancel_btn.setAttribute("type", "cancel");

// Append Childs to Register Form
registerForm.appendChild(firstNameInput);
registerForm.appendChild(lastNameInput);
registerForm.appendChild(emailInput);
registerForm.appendChild(passwordInput);
registerForm.appendChild(re_passwordInput);

registerForm.appendChild(submit_btn);
registerForm.appendChild(cancel_btn);

// Append Register Form to Main Conteiner
mainContainer.appendChild(registerForm);
// #endregion