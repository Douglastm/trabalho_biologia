const header__hamburger = document.querySelector(".header__hamburger");
const nav = document.querySelector(".header__nav");

header__hamburger.addEventListener("click", () => nav.classList.toggle("active"));

const headerNavList = document.querySelector(".header__nav-list");

headerNavList.addEventListener("click", (event) => {
    const eventTarget = event.target;

    eventTarget.tagName == "A" ? nav.classList.toggle("active") : false;
});
