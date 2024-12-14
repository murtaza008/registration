const checkFirstName = (firstName) => {
    let p = document.querySelector("#pFirstName");
    for (let i of firstName) {
        if ((i >= 'A' && i <= 'Z') || (i >= 'a' && i <= 'z')) {
            p.innerText = ""; // Clear any previous error message
            continue;
        } else {
            p.style.color = "red";
            p.innerText = "Must contain only Alphabets";
            break;
        }
    }
}

const checkLastName = (lastName) => {
    let p = document.querySelector("#pLastName");
    for (let i of lastName) {
        if ((i >= 'A' && i <= 'Z') || (i >= 'a' && i <= 'z')) {
            p.innerText = ""; // Clear any previous error message
            continue;
        } else {
            p.style.color = "red";
            p.innerText = "Must contain only Alphabets";
            break;
        }
    }
}

const checkPhone = (phone) => {
    let p = document.querySelector("#pPhone");
    if (phone.length !== 11) {
        p.style.color = "red";
        p.innerText = "Must contain only 11 digits";
    } else {
        p.innerText = ""; // Clear any previous error message
        for (let i of phone) {
            if (i >= '0' && i <= '9') {
                p.innerText = ""; // Clear any previous error message
                continue;
            } else {
                p.style.color = "red";
                p.innerText = "Must contain only Numbers";
                break;
            }
        }
    }
}

const checkPassword = (password) => {
    let p = document.querySelector("#pPassword");
    if (password.length < 8) {
        p.style.color = "red";
        p.innerText = "Must be 8 characters long";
    } else {
        p.innerText = ""; // Clear any previous error message
    }
}

const checkConfirmPassword = (password, confirmPassword) => {
    let p = document.querySelector("#pConfirmPassword");
    if (password !== confirmPassword) {
        p.style.color = "red";
        p.innerText = "Must be same as password";
    } else {
        p.innerText = ""; // Clear any previous error message
    }
}

const checkPostalCode = (postalCode) => {
    let p = document.querySelector("#pPostalCode");
    for (let i of postalCode) {
        if (i >= '0' && i <= '9') {
            p.innerText = ""; // Clear any previous error message
            continue;
        } else {
            p.style.color = "red";
            p.innerText = "Must contain only Numbers";
            break;
        }
    }
}

const checkCaptcha = (captcha, captchaInput) => {
    let p = document.querySelector("#pCaptcha");
    if (captcha !== captchaInput) {
        p.style.color = "red";
        p.innerText = "Not Same";
    } else {
        p.innerText = ""; // Clear any previous error message
    }
}

const form = document.querySelector("#registrationForm");
form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
        // If the form is invalid, let the browser handle it
        return;
    }
    event.preventDefault(); // Prevent form submission for custom validation

    let firstName = document.querySelector("#firstName").value;
    checkFirstName(firstName);

    let lastName = document.querySelector("#lastName").value;
    checkLastName(lastName);

    let phone = document.querySelector("#phone").value;
    checkPhone(phone);

    let password = document.querySelector("#password").value;
    checkPassword(password);

    let confirmPassword = document.querySelector("#confirmPassword").value;
    checkConfirmPassword(password, confirmPassword);

    let postalCode = document.querySelector("#postalCode").value;
    checkPostalCode(postalCode);

    let captcha = document.querySelector("#captcha").value;
    let captchaInput = document.querySelector("#captchaInput").value;
    checkCaptcha(captcha, captchaInput);

    // If custom validations pass, proceed with form submission
    if (
        !document.querySelector("#pFirstName").innerText &&
        !document.querySelector("#pLastName").innerText &&
        !document.querySelector("#pPhone").innerText &&
        !document.querySelector("#pPassword").innerText &&
        !document.querySelector("#pConfirmPassword").innerText &&
        !document.querySelector("#pPostalCode").innerText &&
        !document.querySelector("#pCaptcha").innerText
    ) {
        alert("Registration Successful");
    }
});