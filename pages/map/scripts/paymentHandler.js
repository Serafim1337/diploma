const dotBlocks = Array.from(document.querySelectorAll(".dot-block"));
const dots = Array.from(document.querySelectorAll(".yellow-dot"));
const amountInput = document.querySelector(".amount-number");
const dotsValues = dots.map((item) => item.dataset.value);
const seatsBlock = document.querySelector('.seats');
const priceMark = document.querySelector('#price');

let seatsCounter = 0;
const price = 8;

priceMark.textContent = price;

for (let block of dotBlocks) {
  block.addEventListener("click", function (e) {
    dotClickHandler(e);
  });
}

for (let i = 1; i <= 80; i++) {
  let seat = document.createElement('div');
  seat.classList.add('seats-element');
  let number = document.createElement('span');
  number.textContent = i;
  seat.append(number);
  seat.addEventListener('click', function (e) {

    if (seat.classList.contains('seat-chosen')) {
      seat.classList.remove('seat-chosen');
      seatsCounter--;
      highlightValue(`${seatsCounter}`);
      insertAmount(seatsCounter * price);
    } else if (seatsCounter >= 0 && seatsCounter < 8) {
      seat.classList.add('seat-chosen');
      seatsCounter++;
      highlightValue(`${seatsCounter}`);
      insertAmount(seatsCounter * price);
    }


  });
  seatsBlock.append(seat);
}

amountInput.addEventListener("input", function (e) {
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
  }
  highlightValue(this.value);
});

function dotClickHandler(e) {
  let currentDot;

  if (e.target.classList.contains("dot-block")) {
    currentDot = e.target.firstElementChild;
    highlightDot(currentDot);
  } else {
    currentDot = e.target;
    highlightDot(currentDot);
  }

  insertAmount(currentDot.dataset.value);
}

function highlightDot(currentDot) {
  dots.map((item) => item.classList.remove("clicked"));
  currentDot.classList.add("clicked");
}

function insertAmount(amount) {
  amountInput.value = amount;
}

function highlightValue(amount) {
  if (dotsValues.includes(amount)) {
    let currentDot = document.querySelector(`[data-value="${amount}"]`);
    highlightDot(currentDot);
  }
}
