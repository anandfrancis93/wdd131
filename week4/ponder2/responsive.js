const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName === 'IMG') {
        const src = e.target.getAttribute('src');
        const newSrc = src.replace('-sm.jpg', '-full.jpg');
        modalImage.setAttribute('src', newSrc);
        modalImage.setAttribute('alt', e.target.alt);
        modal.showModal();
    }
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
