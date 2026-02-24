const container = document.querySelector('#articles-container');

function renderArticles() {
    // Clear existing content (Cleanup requirement)
    container.innerHTML = "";

    articles.forEach(article => {
        // Create the article element
        const post = document.createElement('article');
        post.classList.add('post');

        // Create the inner HTML using a template literal
        const html = `
            <div class="post-meta">
                <p class="date">${article.date}</p>
                <p class="ages">${article.ages}</p>
                <p class="genre">${article.genre}</p>
                <p class="stars">${article.stars}</p>
            </div>
            <div class="post-content">
                <h2><a href="#">${article.title}</a></h2>
                <div class="post-image">
                    <img src="${article.imgSrc}" alt="${article.imgAlt}">
                </div>
                <p class="post-description">${article.description}</p>
            </div>
        `;

        post.innerHTML = html;
        container.appendChild(post);
    });
}

// Initialize the blog
document.addEventListener("DOMContentLoaded", renderArticles);