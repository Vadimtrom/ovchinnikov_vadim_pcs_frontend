import React from 'react';
import "../App.css"
const API_KEY = "df68ea5f-bb20-433a-8429-cdb744c64b37";
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"

const Pop = () => {
    getMovies(API_URL_POPULAR);
    async function getMovies(url) {
        const resp = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            },
        });
        const respData = await resp.json();
        showMovies(respData);

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
// контейнер с фильмами
    function showMovies(data) {
        const moviesEl = document.querySelector(".movies");

        // очищаем страницу с фильмами
        document.querySelector(".movies").innerHTML = "";

        data.films.forEach((movie) => {
            const movieEl = document.createElement("div");
            movieEl.classList.add("movie");
            movieEl.innerHTML = `
        <div class="movie__cover-inner">
            <img
            src="${movie.posterUrlPreview}"
            class="movie__cover"
            alt="${movie.nameRu}"
          
            />
            <div class="movie__cover--darkened"></div>
        </div>
            <div class="movie__title">${movie.nameRu}</div>
            <div class="movie__year">${movie.year}</div>
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
            `;
            moviesEl.appendChild(movieEl);


        });
    }
    return (
        <div>

        </div>
    );
};

export default Pop;