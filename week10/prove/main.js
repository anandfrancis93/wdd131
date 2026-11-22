import recipes from './recipes.js';

const recipeList = document.querySelector('.recipe-list');
const searchForm = document.querySelector('.search form');
const searchInput = document.querySelector('#search-input');

function getRandomRecipe() {
  const index = Math.floor(Math.random() * recipes.length);
  return recipes[index];
}

function tagsTemplate(tags) {
  let html = '';
  for (const tag of tags) {
    html += `<li><button type="button" class="tag">${tag}</button></li>`;
  }
  return html;
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += '<span aria-hidden="true" class="icon-star">⭐</span>';
    } else {
      html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
    }
  }

  html += '</span>';
  return html;
}

function recipeTemplate(recipe) {
  return `<article class="recipe">
    <img class="recipe-img" src="${recipe.image}" alt="${recipe.name}">
    <div class="recipe-info">
      <ul class="tags">${tagsTemplate(recipe.tags)}</ul>
      <h2 class="recipe-title">${recipe.name}</h2>
      ${ratingTemplate(recipe.rating)}
      <p class="description">${recipe.description}</p>
    </div>
  </article>`;
}

function renderRecipes(recipeArray) {
  if (recipeArray.length === 0) {
    recipeList.innerHTML = '<p class="no-results">No recipes found.</p>';
  } else {
    recipeList.innerHTML = recipeArray.map(recipeTemplate).join('');
  }
}

function filterRecipes(query) {
  const filtered = recipes.filter(function (recipe) {
    const name = recipe.name.toLowerCase();
    const description = recipe.description.toLowerCase();
    const tags = recipe.tags.join(' ').toLowerCase();

    return name.includes(query) || description.includes(query) || tags.includes(query);
  });

  return filtered.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

function searchHandler(event) {
  event.preventDefault();
  const query = searchInput.value.toLowerCase();
  renderRecipes(filterRecipes(query));
}

function init() {
  renderRecipes([getRandomRecipe()]);
  searchForm.addEventListener('submit', searchHandler);
}

init();