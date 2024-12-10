const burgerNavbar = document.querySelector(".burger__navbar");
const burgerBtn = document.querySelector(".burger__btn");
const burgerLinks = Array.from(document.querySelectorAll(".burger__item"));
const burgerToggleEls = [burgerBtn, ...burgerLinks];

burgerToggleEls.forEach(el => el.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger__btn--close");
    burgerNavbar.classList.toggle("burger__navbar--opened");
    document.body.classList.toggle("body--no-scroll");
}));


