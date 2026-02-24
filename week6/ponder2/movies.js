const movies = [
    {
        title: "Spider-Man: Into the Spider-Verse",
        date: "Dec 14, 2018",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
        imgAlt: "Miles Morales swinging through the city",
        ages: "10+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
        imgAlt: "Poster for The Other Side of Heaven",
        ages: "10+",
        genre: "Drama/Religious",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Luca",
        date: "June 18, 2021",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
        imgAlt: "Luca and Alberto on the beach",
        ages: "6+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "17 Miracles",
        date: "June 3, 2011",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
        imgAlt: "Movie poster for 17 Miracles",
        ages: "12+",
        genre: "Historical/Religious",
        stars: "⭐⭐⭐⭐"
    }
];

function movieTemplate(movie) {
    return `
        <article class="movie-card">
            <img src="${movie.imgSrc}" alt="${movie.imgAlt}" loading="lazy">
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
            <div class="details">
                <p><strong>Released:</strong> ${movie.date}</p>
                <p><strong>Genre:</strong> ${movie.genre}</p>
                <p><strong>Ages:</strong> ${movie.ages}</p>
                <p><strong>Rating:</strong> ${movie.stars}</p>
            </div>
        </article>
    `;
}

const movieListElement = document.getElementById('movie-list');
movieListElement.innerHTML = movies.map(movieTemplate).join('');