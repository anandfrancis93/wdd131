const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("nav");

function toggleMenu() {
    menu.classList.toggle("show");
}

menuButton.addEventListener("click", toggleMenu);

// Handle window resizing: hide mobile menu on desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
        menu.classList.remove("show");
    }
});