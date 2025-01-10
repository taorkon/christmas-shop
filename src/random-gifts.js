import giftList from "./json/gifts.json" assert {type: 'json'};
//console.log(giftList[1]);
const cardHolder = document.querySelector('.best-gifts__cards-holder');

const getCardType = (giftList, idx) => {
    const gift = giftList[idx];
    const giftCategory = gift.category
    const cardType = giftCategory.split(" ")[1].toLowerCase();
    return cardType;
}



//cycle from https://www.geeksforgeeks.org/how-to-create-an-array-containing-non-repeating-elements-in-javascript/
//to func

const createCardTemplateHTML = () => {
    const cardHTML = document.createElement('div');
    cardHTML.classList.add('card');
    const cardImgHolderHTML = document.createElement('div');
    cardImgHolderHTML.classList.add('card__img-holder');
    cardHTML.append(cardImgHolderHTML);
    const cardImgHTML = document.createElement('img');
    cardImgHTML.classList.add('card__img');
    cardImgHolderHTML.append(cardImgHTML);
    const cardContentHTML = document.createElement('div');
    cardContentHTML.classList.add('card__content');
    cardHTML.append(cardContentHTML);
    const header4 = document.createElement('div');
    header4.classList.add('header-4');
    cardContentHTML.append(header4);
    const header4Text = document.createElement('h4');
    header4Text.classList.add('header-4__text');
    header4.append(header4Text);
    const header3 = document.createElement('div');
    header3.classList.add('header-3');
    cardContentHTML.append(header3);
    const header3Text = document.createElement('h3');
    header3Text.classList.add('header-3__text');
    header3.append(header3Text);

    return { cardHTML, cardImgHTML, header4Text, header3Text };
};


const cardNumber = 4;



const getRandCardIdxes = (cardNumber, giftList) => {
    const maxGiftIdx = giftList.length - 1;
    const giftIdxList = [];
    do {
        // Generating random number
        const randomIdx = Math
            .floor(Math.random() * maxGiftIdx);

        // Pushing into the array only 
        // if the array does not contain it
        if (!giftIdxList.includes(randomIdx)) {
            giftIdxList.push(randomIdx);
        }
    }
    while (giftIdxList.length < cardNumber);

    return giftIdxList;
};

const giftIdxList = getRandCardIdxes(cardNumber, giftList);


console.log(giftIdxList);

for (let i = 0; i < cardNumber; i += 1) {
    const cardHTMLEls = createCardTemplateHTML();
    console.log(cardHTMLEls);
    const giftIdx = giftIdxList[i];
    const gift = giftList[giftIdx];

    console.log(giftIdx);
    console.log(giftList[giftIdx]);

    const cardType = getCardType(giftList, giftIdx);
    console.log(cardType);

    const imgSrc = `assets/images/card__img--${cardType}.png`;
    const typeClass = `header-4--${cardType}`
    cardHTMLEls.cardImgHTML.setAttribute('src', imgSrc);
    cardHTMLEls.header4Text.textContent = gift.category;
    cardHTMLEls.header4Text.classList.add(typeClass);
    cardHTMLEls.header3Text.textContent = gift.name;

    const card = cardHTMLEls.cardHTML;

    cardHolder.append(card);
}