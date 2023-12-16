const nameInput = document.querySelector("#name-input");
const nameError = document.querySelector(".name-error");

const lastnameInput = document.querySelector("#lastname-input");
const lastnameError = document.querySelector(".lastname-error");

const emailInput = document.querySelector("#email-input");
const emailError = document.querySelector(".email-error");

let trySubmit = false;


function checkName() {
    if(nameInput.value.trim() === "") {
        nameError.textContent = "სახელის ველი არ უნდა იყოს ცარიელი";
        return false;
    }

    if(nameInput.value.trim().length < 3) {
        nameError.textContent = "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან";
        return false;
    }

    nameError.textContent = "";
    return true;
}

function checkLastname() {
    if(lastnameInput.value.trim() === "") {
        lastnameError.textContent = "გვარის ველი არ უნდა იყოს ცარიელი";
        return false;
    }

    if(lastnameInput.value.trim().length < 4) {
        lastnameError.textContent = "გვარის ველი უნდა შედგებოდეს მინიმუმ 4 სიმბოლოსგან";
        return false;
    }

    lastnameError.textContent = "";
    return true;
}

function checkEmail() {
    if(emailInput.value.trim() === "") {
        emailError.textContent = "ელ-ფოსტის ველი არ უნდა იყოს ცარიელი";
        return false;
    }

    if(!(emailInput.value.includes("@")) || !(emailInput.value.includes("."))) {
        emailError.textContent = "უნდა აკმაყოფილებდეს ელ-ფოსტის ფორმატს";
        return false;
    }

    if(!(emailInput.value.endsWith("redberry.ge"))) {
        emailError.textContent = "უნდა მთავრდებოდეს 'redberry.ge' სუფიქსით";
        return false;
    }

    emailError.textContent = "";
    return true;
}


nameInput.addEventListener("input", function() {
    checkName();
})

lastnameInput.addEventListener("input", function() {
    checkLastname();
})

emailInput.addEventListener("input", function() {
    checkEmail();
})


function onNextPage() {
    if(!trySubmit) {
        trySubmit = true;
    }

    const nameStatus = checkName();
    const lastnameStatus = checkLastname();
    const emailStatus = checkEmail();

    if(nameStatus && lastnameStatus && emailStatus) {
        document.location.href = "../covid/covid.html";
    }
}

