const rangeInput = document.querySelector(".scroller");

let cards = Array.from(document.querySelectorAll(".testimonial-card"));
let cardsBlock = document.querySelector(".testimonials-cards");
let cardWidth = parseInt(getComputedStyle(cards[0]).width);
let cardsGap = parseInt(getComputedStyle(cardsBlock).gap);

let clonedCards = [];
let rangeValue;
let cardsOffset;

for (let i = 0; i < 2; i++) {
  for (let card of cards) {
    clonedCards.push(card.cloneNode(true));
  }
}

cardsBlock.append(...clonedCards);

rangeInput.addEventListener("input", moveSlider);

function moveSlider() {
  rangeValue = rangeInput.value;
  if (rangeValue == 0) {
    cardsOffset = 0;
    cardsBlock.style.transform = `translateX(${cardsOffset}px)`;
  } else {
    multipliedGaps = rangeValue == 0 ? cardsGap : cardsGap * rangeValue;
    cardsOffset = -cardWidth * rangeValue - multipliedGaps;
    cardsBlock.style.transform = `translateX(${cardsOffset}px)`;
  }
}
