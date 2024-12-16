const showScrollBtn = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
};
const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
const scrollBtn = document.querySelector(".scroll-top");
scrollBtn.addEventListener("click", scrollToTop);
window.onscroll = function () { showScrollBtn() };

