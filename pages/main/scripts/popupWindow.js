const testimonialBlock = document.querySelector(".testimonials-section");
const cardsSection = document.querySelector(".testimonials-cards");
let isPopupCreated = false;

cardsSection.addEventListener("click", function (e) {
  if (!e.target.closest(".testimonial-card")) return;
  if (document.documentElement.clientWidth > 980) return;
  toggleOverlay();
  togglePopup(e.target.closest(".testimonial-card"));
});

overlay.addEventListener("click", function (e) {
  if (!e.target.closest(".popup-card")) {
    if (isPopupCreated) {
      toggleOverlay();
      togglePopup(document.querySelector(".popup-card"));
    }
  }
});

function toggleOverlay() {
  overlay.hidden = !overlay.hidden;
  body.classList.toggle("lock");
}

function togglePopup(card) {
  isPopupCreated = !isPopupCreated;
  card.classList.toggle("popup-card");
  if (card.classList.contains("popup-card")) {
    overlay.before(card);
    card.firstElementChild.classList.toggle("popup-card-colored");
    card.addEventListener("click", function (e) {
      closePopupButtonHandler(e, card);
    });
  } else {
    let cardParent = card.parentElement;
    cardParent.removeChild(card);
  }
}

function closePopupButtonHandler(e, card) {
  if (e.target.classList.contains("popup-card")) {
    toggleOverlay();
    togglePopup(card);
  }
}
