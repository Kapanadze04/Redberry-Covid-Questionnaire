const vaccineYes = document.querySelector("#vaccine-yes");
const vaccineNo = document.querySelector("#vaccine-no");

const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");

const step1 = document.querySelector("#step1");
const step2 = document.querySelector("#step2");
const step3 = document.querySelector("#step3");

const wait1 = document.querySelector("#wait1");
const wait2 = document.querySelector("#wait2");
const wait3 = document.querySelector("#wait3");

const vaccine2Registration = document.querySelector(".vaccine2-registration");
const dontPlanVaccine = document.querySelector(".dont-plan-vaccine");
const dontPlanVaccine2 = document.querySelector(".dont-plan-vaccine2");

vaccineYes.addEventListener("click", function() {
    if(vaccineYes.checked) {
        question2.style.display = "block";
        question3.style.display = "none";
    }
})

vaccineNo.addEventListener("click", function() {
    if(vaccineNo.checked) {
        question2.style.display = "none";
        question3.style.display = "block";
    }
})

step1.addEventListener("click", function() {
    if(step1.checked) {
        vaccine2Registration.style.display = "none";
    }
})

step2.addEventListener("click", function() {
    if(step2.checked) {
        vaccine2Registration.style.display = "none";
    }
})

step3.addEventListener("click", function() {
    if(step3.checked) {
        vaccine2Registration.style.display = "block";
    }
})

wait1.addEventListener("click", function() {
    dontPlanVaccine.style.display = "none";
    dontPlanVaccine2.style.display = "none";
})

wait2.addEventListener("click", function() {
    dontPlanVaccine.style.display = "block";
    dontPlanVaccine2.style.display = "none";
})

wait3.addEventListener("click", function() {
    dontPlanVaccine.style.display = "none";
    dontPlanVaccine2.style.display = "block";
})

function onLeftPage() {
    document.location.href = "../covid/covid.html";
}

function onNextPage() {
    document.location.href = "../tips/tips.html";
}