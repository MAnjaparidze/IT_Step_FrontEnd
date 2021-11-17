let registerForm = document.getElementById("register_form");

function submitRegisterForm(e) {
    e.preventDefault();

    let formElements = registerForm.elements;
    console.log(e);
    console.log(registerForm);
    console.log(formElements);
    let userObject = {};
    for (let prop of formElements) {
        console.log(prop.tagName);
        if (prop.tagName === "INPUT") {
            userObject[prop.name] = prop.value;
        }
    }

    if (userObject.password !== userObject.re_password) {
        let rePasswordInput = document.getElementById("re_password")
        rePasswordInput.style.border = "2px solid red";
        // rePasswordInput.style.borderColor = "red";

        alert("Passwords don't Match!");
        setTimeout(function () {
            rePasswordInput.style.borderWidth = "0px 0px 2px 0px";
            rePasswordInput.style.borderColor = "#a9cdf0";

        }, 2000)
    }
    console.log(userObject, "[USER OBJECT CREATED]");
}


registerForm.addEventListener("submit", submitRegisterForm);