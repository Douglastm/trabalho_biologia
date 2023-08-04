const header__hamburger = document.querySelector(".header__hamburger");
const nav = document.querySelector(".header__nav");

header__hamburger.addEventListener("click", () => nav.classList.toggle("active"));
