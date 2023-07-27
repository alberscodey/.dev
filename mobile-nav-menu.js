const menuBtn = document.getElementById("hamburger");
const closeBtn = document.getElementById("close");
const menu = document.getElementById("mobile-menu");

function menuToggle() {
    menuBtn.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");
    menu.classList.toggle("collapsed");
}