const burgerMenu = document.querySelector(".burger-menu");
const overlay = document.querySelector(".overlay");
const body = document.body;
const dropdownMenu = document.querySelector(".dropdown-menu");
const navLinks = dropdownMenu.querySelectorAll(".nav-link");
const dropdownLogo = dropdownMenu.querySelector(".dropdown-logo");

burgerMenu.addEventListener("click", burgerMenuHandler);

function burgerMenuHandler() {
  burgerMenu.classList.toggle("cross");
  body.classList.toggle("lock");
  overlay.hidden = !overlay.hidden;
  dropdownMenu.hidden = !dropdownMenu.hidden;
}

overlay.addEventListener("click", function (e) {
  switch (e.currentTarget) {
    case overlay:
    case burgerMenu:
      burgerMenuHandler();
      break;
  }
});

dropdownLogo.onclick = burgerMenuHandler;

for (let link of navLinks) {
  link.onclick = burgerMenuHandler;
}
