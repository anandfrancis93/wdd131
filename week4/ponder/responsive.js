// Target the menu button and the navigation
const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

// Add a click event listener to the menu button
menuButton.addEventListener('click', () => {
  // Show or hide the nav
  nav.classList.toggle('hide');
  // Switch the button between hamburger and X
  menuButton.classList.toggle('change');
});