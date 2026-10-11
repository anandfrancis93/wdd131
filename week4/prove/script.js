// ---------- Mobile menu ----------
const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

function toggleMenu() {
  nav.classList.toggle("hide");
  const isOpen = !nav.classList.contains("hide");
  menuButton.setAttribute("aria-expanded", isOpen);
}

menuButton.addEventListener("click", toggleMenu);

// ---------- Window resize handling ----------
// Large screens: always show the links. Small/medium: start hidden.
function handleResize() {
  if (window.innerWidth >= 1000) {
    nav.classList.remove("hide");
  } else {
    nav.classList.add("hide");
    menuButton.setAttribute("aria-expanded", "false");
  }
}

handleResize(); // run once on page load
window.addEventListener("resize", handleResize);

// ---------- Image viewer (modal) ----------
// Returns the HTML for the viewer, built from the image URL and alt text.
function viewerTemplate(pic, alt) {
  return `<dialog class="viewer">
    <button class="close-viewer" aria-label="Close image">X</button>
    <img src="${pic}" alt="${alt}">
  </dialog>`;
}

function closeViewer() {
  const modal = document.querySelector(".viewer");
  if (modal) {
    modal.close();
    modal.remove(); // take it out of the page so a fresh one is built next time
  }
}

function viewHandler(event) {
  // only react when an image was clicked
  const clicked = event.target.closest("img");
  if (!clicked) return;

  // norris-sm.jpg -> norris-full.jpg
  const src = clicked.getAttribute("src");
  const fullSrc = src.split("-")[0] + "-full.jpg";

  // build the viewer from the template and add it to the page
  document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullSrc, clicked.alt));
  const modal = document.querySelector(".viewer");
  modal.showModal();

  // close with the X button
  modal.querySelector(".close-viewer").addEventListener("click", closeViewer);

  // close by clicking outside the image (the backdrop belongs to the dialog)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeViewer();
  });

  // close with Esc (the browser fires "cancel" on a dialog when Esc is pressed)
  modal.addEventListener("cancel", (e) => {
    e.preventDefault();
    closeViewer();
  });
}

document.querySelector(".gallery").addEventListener("click", viewHandler);