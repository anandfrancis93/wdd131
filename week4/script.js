const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
  // Only react when a thumbnail image is clicked
  const clicked = e.target.closest('img');
  if (!clicked) return;

  // Swap the small image for the large one, e.g. book-sm.jpg -> book-full.jpg
  const src = clicked.getAttribute('src');
  const fullSrc = src.replace('-sm', '-full');

  modalImage.src = fullSrc;
  modalImage.alt = clicked.alt;

  // showModal() also makes the Esc key close the dialog
  modal.showModal();
}

// Close modal on button click
closeButton.addEventListener('click', () => {
  modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});