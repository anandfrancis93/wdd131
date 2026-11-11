// Character object: properties and methods
const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  image: "snortleblat.webp",

  // Subtract 20 from health. Tell the user when the character dies.
  attacked() {
    if (this.health <= 0) {
      return;
    }
    this.health -= 20;
    if (this.health <= 0) {
      this.health = 0;
      alert(`${this.name} has died!`);
    }
  },

  // Add 1 to level
  levelUp() {
    if (this.health <= 0) {
      return;
    }
    this.level += 1;
  }
};

// DOM references
const nameEl = document.querySelector("#char-name");
const classEl = document.querySelector("#char-class");
const levelEl = document.querySelector("#char-level");
const healthEl = document.querySelector("#char-health");
const imageEl = document.querySelector("#char-image");
const messageEl = document.querySelector("#char-message");
const attackedBtn = document.querySelector("#attacked-btn");
const levelUpBtn = document.querySelector("#levelup-btn");

// Show the current object values on the page
function renderCard() {
  nameEl.textContent = character.name;
  classEl.textContent = character.class;
  levelEl.textContent = character.level;
  healthEl.textContent = character.health;
  imageEl.src = character.image;
  imageEl.alt = `${character.name}, the ${character.class}`;

  if (character.health <= 0) {
    messageEl.textContent = `${character.name} has died.`;
    attackedBtn.disabled = true;
    levelUpBtn.disabled = true;
  } else {
    messageEl.textContent = "";
  }
}

// Button click listeners: call the method, then update the card
attackedBtn.addEventListener("click", () => {
  character.attacked();
  renderCard();
});

levelUpBtn.addEventListener("click", () => {
  character.levelUp();
  renderCard();
});

// First display
renderCard();