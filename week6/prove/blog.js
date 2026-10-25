// Builds one <article> element from a book object.
function articleTemplate(article) {
  return `
    <article class="book">
      <div class="book-details">
        <p class="date">${article.date}</p>
        <p>${article.ages}</p>
        <p>${article.genre}</p>
        <p class="stars" aria-label="${article.stars.length / 2} stars">${article.stars}</p>
      </div>
      <div class="book-content">
        <h2>${article.title}</h2>
        <img src="${article.imgSrc}" alt="${article.imgAlt}">
        <p>${article.description}</p>
      </div>
    </article>
  `;
}

// Renders every article in the articles array (from articles.js) into <main>.
function renderArticles(list) {
  const container = document.querySelector('#articles');
  container.innerHTML = list.map(articleTemplate).join('');
}

renderArticles(articles);