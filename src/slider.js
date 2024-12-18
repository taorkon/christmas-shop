const sliderItems = document.querySelector('.slider__items');
const sliderContainer = document.querySelector('.slider__items-holder');
const sliderSection = document.querySelector('section.slider');
const sectionWidth = sliderSection.offsetWidth;

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const sliderContainerRect = sliderContainer.getBoundingClientRect();
const sliderContainerLeft = sliderContainerRect.left;
//const sliderContainerRight = sliderContainerRect.right;
const sliderContainerWidth = sliderContainer.offsetWidth;
const sliderItemsWidth = sliderItems.offsetWidth;
/*let sliderRight = sliderItems.getBoundingClientRect().right;*/
//console.log(sliderItems, sliderSection, sectionWidth, btnLeft, btnRight);

const stopLeftBtn = sliderContainerLeft;
const stopRightBtn = sliderContainerLeft + sliderContainerWidth - sliderItemsWidth;
console.log('sliderContainerLeft', sliderContainerLeft,
    'sliderContainerWidth', sliderContainerWidth);
console.log('stopLeftBtn', stopLeftBtn,
    'stopRightBtn', stopRightBtn);


let visibleArea = sliderContainerWidth; //- sliderContainerLeft;
console.log('sliderItemsWidth', sliderItemsWidth,
    'visibleArea', visibleArea);

let clicks = 3 - 1; //add screen width check;
let scrollWidth = (sliderItemsWidth - visibleArea) / clicks;
console.log('scrollWidth', scrollWidth);
let sliderPosition = 0;

btnRight.addEventListener('click', () => {

    let sliderLeft = sliderItems.getBoundingClientRect().left; //ch to func
    console.log('sliderLeft', sliderLeft);
    if (sliderPosition < clicks) {
        sliderPosition += 1;
        let sliderMove = -(sliderPosition * scrollWidth);
        sliderItems.style.transform = `translateX(${sliderMove}px)`;
        btnLeft.classList.remove('slider__btn--inactive');
        if (sliderPosition === clicks) {
            btnRight.classList.add('slider__btn--inactive')
        }
    }


    /*
    if (sliderLeft > stopRightBtn) { //to func?
        let scrollRight = sliderLeft - scrollWidth;
        console.log('scrollRight', scrollRight);
        if (scrollRight > stopRightBtn) {
            sliderItems.style.transform = `translateX(-${scrollWidth}px)`;
        } else {
            sliderItems.style.transform = `translateX(${stopRightBtn}px)`;
        }
    }*/
})
/*
btnRight.addEventListener('click', () => {
    if (sliderPosition )
})*/

btnLeft.addEventListener('click', () => {
    let sliderLeft = sliderItems.getBoundingClientRect().left; //ch to func

    if (sliderPosition > 0) {
        console.log('sliderPosition', sliderPosition);
        sliderPosition -= 1;
        let sliderMove = -(sliderPosition * scrollWidth);
        sliderItems.style.transform = `translateX(${sliderMove}px)`;
        btnRight.classList.remove('slider__btn--inactive');
        if (sliderPosition === 0) {
            btnLeft.classList.add('slider__btn--inactive')
        }
    }


    /*
    if (sliderLeft < stopLeftBtn) {
        let scrollLeft = sliderLeft + scrollWidth;
        if (scrollLeft < stopLeftBtn) {
            sliderItems.style.transform = `translateX(${scrollLeft}px)`;
        } else {
            sliderItems.style.transform = `translateX(${stopLeftBtn}px)`;
        }
    }*/
})