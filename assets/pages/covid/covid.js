const covidYes = document.querySelector("#covid-yes");
const covidNo = document.querySelector("#covid-no");
const covidNow = document.querySelector("#covid-now");

const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const question4 = document.querySelector(".question4");

const testYes = document.querySelector("#test-yes");
const testNo = document.querySelector("#test-no");

const inputDate = document.querySelector("#input-date");
const inputAntiTest = document.querySelector("#input-anti-test");
const inputCovidPeriod = document.querySelector("#input-covid-period");

const error = document.querySelector(".error");

let trySubmit = false;


testYes.addEventListener("click", function() {
    if(testYes.checked) {
        question3.style.display = "block";
        question4.style.display = "none";
    }
})

testNo.addEventListener("click", function() {
    if(testNo.checked) {
        question3.style.display = "none";
        question4.style.display = "block";
    }
})

covidYes.addEventListener("click", function() {
    if(covidYes.checked) {
        question2.style.display = "block";
        question3.style.display = "none";
        question4.style.display = "none";
    }


})

covidNo.addEventListener("click", function() {
    if(covidNo.checked) {
        question2.style.display = "none";
        question3.style.display = "none";
        question4.style.display = "none";
    }
})

covidNow.addEventListener("click", function() {
    if(covidNow.checked) {
        question2.style.display = "none";
        question3.style.display = "none";
        question4.style.display = "none";
    }
})


function onLeftPage() {
    document.location.href = "../identification/identification.html";
}

function onNextPage() {
    document.location.href = "../vaccine/vaccine.html";
}


