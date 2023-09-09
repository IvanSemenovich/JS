const API_KEY = "b6b09dfe-4abd-4f0f-bbfb-95d2485f5f80";
const API_URL =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";

getMovies(API_URL);

async function getMovies(url) {
  const respons = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    }
  });
  const responsData = await respons.json();
  console.log(responsData);
  showMovies(responsData)
}

function getClassByRate(vote) {
    if (vote >= 7) {
      return "green";
    } else if (vote > 5) {
      return "orange";
    } else {
      return "red";
    }
  }

function showMovies(data) {
    const moviesEl = document.querySelector(".movies");
  
    // Очищаем предыдущие фильмы
    document.querySelector(".movies").innerHTML = "";
  
    data.films.forEach((movie) => {
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");
      movieEl.innerHTML = `
          <div class="movie__cover-inner">
          <img
            src="${movie.posterUrl}"
            class="movie__cover"
            alt="${movie.nameRu}"
          />
          <div class="movie__cover--darkened"></div>
        </div>
        <div class="movie__info">
          <div class="movie__title">${movie.nameRu}</div>
          <div class="movie__category">${movie.genres.map(
            (genre) => ` ${genre.genre}`
          )}</div>
          ${
            movie.rating &&
            `
          <div class="movie__average movie__average--${getClassByRate(
            movie.rating
          )}">${movie.rating}</div>
          `
          }
        </div>
          `;
      moviesEl.appendChild(movieEl);
    });
  }
  
