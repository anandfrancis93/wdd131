const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("nav");

function toggleMenu() {
    menu.classList.toggle("show");
}

menuButton.addEventListener("click", toggleMenu);

// Handle window resizing: hide mobile menu on desktop by removing .show class
function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("show");
    }
}
window.addEventListener("resize", handleResize);


// --- MODAL VIEWER ---

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    // Create a variable to hold the element that was clicked
    const clickedElement = event.target;

    // check if the clicked element is an image
    if (clickedElement.tagName === 'IMG') {
        // get the src attribute from that element
        let src = clickedElement.getAttribute('src');
        // split it on the "-"
        // Example: "norris-full.jpg" -> ["norris", "full.jpg"]
        // Example: "norris-sm.jpg" -> ["norris", "sm.jpg"]
        let parts = src.split("-");

        // construct the new image file name
        let newSrc = parts[0] + "-full.jpg";

        // insert the viewerTemplate into the top of the body
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newSrc, clickedElement.alt));

        // add a listener to the close button (X) that calls a function called closeViewer
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}

document.querySelector(".gallery").addEventListener("click", viewHandler);