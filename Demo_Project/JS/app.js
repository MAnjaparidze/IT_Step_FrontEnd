let registerForm = document.getElementById("register_form");

function checkPasswords(userObject) {
    if (userObject.password !== userObject.re_password) {
        let rePasswordInput = document.getElementById("re_password")
        rePasswordInput.style.border = "2px solid red";

        alert("Passwords don't Match!");
        setTimeout(function () {
            rePasswordInput.style.borderWidth = "0px 0px 2px 0px";
            rePasswordInput.style.borderColor = "#a9cdf0";
        }, 2000)
    }
}

function saveUserObject(userObject) {
    // Getting string of array from local storage
    let usersArray = localStorage.getItem("users");
    // Parse array string into array object
    let arrToObj = JSON.parse(usersArray);

    if (!arrToObj)
        arrToObj = [];

    arrToObj.push(userObject);

    // Convert array object into array string
    let arrToString = JSON.stringify(arrToObj);
    // Setting updated array string to the local storage
    localStorage.setItem("users", arrToString);
}

function submitRegisterForm(e) {
    e.preventDefault();

    let formElements = registerForm.elements;

    let userObject = {};
    for (let prop of formElements) {
        console.log(prop.tagName);
        if (prop.tagName === "INPUT") {
            userObject[prop.name] = prop.value;
        }
    }

    checkPasswords(userObject);

    saveUserObject(userObject);
}


let someObject = {
    name: "Mamuka",

    createDate: new Date(),
}

console.log(someObject);



registerForm.addEventListener("submit", submitRegisterForm);