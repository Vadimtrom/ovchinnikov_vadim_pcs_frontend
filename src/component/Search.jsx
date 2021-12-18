import React from 'react';
const API_KEY = "df68ea5f-bb20-433a-8429-cdb744c64b37";
// const API_URL_POPULAR =
//     "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"
const API_URL_SEARCH =
    "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

const Search = () => {
    // getMovies(API_URL_POPULAR);
    async function getMovies(url) {
        const resp = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY,
            },
        });
        const respData = await resp.json();
        Search(respData);

    }
    const form = document.querySelector("form");
    const search = document.querySelector(".header__search");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
        if (search.value) {
            getMovies(apiSearchUrl);

            search.value = "";
        }
    });
    return (
        <form>


        </form>
    );
};

export default Search;