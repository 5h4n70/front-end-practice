const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");

function showError(input, message) {
    const fc = input.parentElement;
    fc.className = 'form-control error';
    const small = fc.querySelector('small');
    small.innerText = message;
}
function showSuccess(input) {
    const fc = input.parentElement;
    fc.className = 'form-control success';
}
function validateEmail(email) {
    if (email.trim().length < 3)
        return false;
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function getFieldName(loopVariable) {
    var temp = Array.from(loopVariable.id);
    temp[0] = temp[0].toUpperCase();
    temp = temp.toString().replace(/,/g, "");
    return temp;
}
function checkRequired(arr) {
    arr.forEach(loopVariable => {
        if (loopVariable.value.trim() === '') {
            temp = getFieldName(loopVariable);
            showError(loopVariable, temp + " is required");
        }
        else {
            // showSuccess(loopVariable);
            if (loopVariable.id == "username")
                checkLength(loopVariable, 3, 15);
            else if (loopVariable.id == "password")
                checkLength(loopVariable, 6, 15);
            else if (loopVariable.id == "email") {
                if (validateEmail(loopVariable.value))
                    showSuccess(loopVariable);
                else
                    showError(loopVariable, "You entered a wrong Email address!!")
            }
            else if (loopVariable.id == "confirm-password") {
                if (password.value != confirm_password.value)
                    showError(loopVariable, "password not matching.");
                else
                    showSuccess(loopVariable);
            }
        }
    });
}
function checkPassword(pass1, pass2) {
    if (pass1 != pass2)
        return false;
    return true;
}
function checkLength(input, mn, mx) {

    if (input.value.length < mn || input.value.length > mx) {
        showError(input, getFieldName(input) + " Length must be between 3-15 characters .");
    }
    else {
        const dp = document.getElementById(input.id);
        showSuccess(dp);
        // if (input.id == "username")
        //     checkLength(dp, mn, mx);
        // // showSuccess(document.getElementById(input.id));
        // else if (input.id == 'password')
        //     checkLength(dp, mn, mx);
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();


    checkRequired([username, email, password, confirm_password]);



});