const wrapper = document.querySelector(".slider-wrapper");
const nextButton = document.querySelector(".arrow-right");
const prevButton = document.querySelector(".arrow-left");
const slider = document.querySelector(".slider");
const slide = document.querySelector(".animals-cards");
const slideWidth = slide.getBoundingClientRect().width;
let slidesCounter = 0;
const slidesGap = parseInt(getComputedStyle(slider).gap);
let currentOffset = 0;

nextButton.onclick = function (e) {
  let nextSlide = cloneSlide(slide);
  showNextSlide(nextSlide);
};

prevButton.onclick = function (e) {
  showPrevSlide();
};

function cloneSlide(slide) {
  slide = slide.cloneNode(true);

  let slideCards = Array.from(slide.children);
  slideCards = shuffleArray(slideCards);
  slide.innerHTML = "";
  slide.append(...slideCards);
  return slide;
}

function showNextSlide(nextSlide) {
  if (slidesCounter >= 10) {
    slider.style.transform = `translateX(0px)`;
    slidesCounter = 1;
    prevButton.disabled;
  } else {
    slider.append(nextSlide);
    currentOffset =
      -slidesGap * (slidesCounter + 1) - slideWidth * (slidesCounter + 1);
    slider.style.transform = `translateX(${currentOffset}px)`;
    slidesCounter++;
    prevButton.disabled = false;
  }
}

function showPrevSlide() {
  currentOffset =
    currentOffset + slideWidth + slidesGap * (slidesCounter > 0 ? 1 : 0);
  slider.style.transform = `translateX(${currentOffset}px)`;
  slidesCounter--;
  if (slidesCounter < 0) {
    slidesCounter = 0;
  }
  if (slidesCounter == 0) {
    prevButton.disabled = true;
  }
}

function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
