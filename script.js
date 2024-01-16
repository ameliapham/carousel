import "./style.css"

const buttons = document.querySelectorAll(".btn")
const slides = document.querySelectorAll(".slide")

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const calcNextSlide = e.currentTarget.id === "next" ? 1 : -1;
        console.log("calcNextSlide : ", calcNextSlide)


        const slideActive = document.querySelector(".active")
        console.log("slideActive index : ", [...slides].indexOf(slideActive))

        let newIndex
        newIndex = calcNextSlide + [...slides].indexOf(slideActive)
        console.log(newIndex)

        slides[newIndex].classList.add("active")
        slideActive.classList.remove("active")

    })
})