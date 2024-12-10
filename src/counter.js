const counterUnits = document.querySelectorAll(".cta__counter-unit");
const year = new Date().getFullYear();
const countDownDate = new Date(`Jan 1, ${year + 1} 00:00:00`).getTime();

const counter = setInterval(function () {
    const now = new Date().getTime();
    const difference = countDownDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const calculatedTime = [days, hours, minutes, seconds];

    for (let i = 0; i < counterUnits.length; i += 1) {
        counterUnits[i].firstElementChild.firstElementChild.
            textContent = calculatedTime[i];
    }
}, 1000);