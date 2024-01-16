import "./style.css"

const buttons = document.querySelectorAll(".btn")
const slides = document.querySelectorAll(".slide")

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const calcNextSlide = e.currentTarget.id === "next" ? 1 : -1;
        console.log("calcNextSlide : ", calcNextSlide)

    })
})