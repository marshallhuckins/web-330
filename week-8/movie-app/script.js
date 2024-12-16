/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Marshall Huckins
  Date: 12/15/24
  Filename: script.js
*/

"use strict";

const movies = [
  // Add your movie objects here
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    synopsis: "A thief who steals corporate secrets through dream-sharing technology is tasked with planting an idea into the mind of a CEO."
  },
  {
    title: "The Matrix",
    director: "The Wachowskis",
    year: 1999,
    synopsis: "A computer hacker learns the true nature of reality and his role in the war against its controllers."
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  }
];

function fetchMovie(title) {
  // Implement this function
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find((movie) => movie.title.toLowerCase() === title.toLowerCase());
      if (movie) {
        resolve(movie);
      } else {
        reject("Movie not found.");
      }
    }, 1000);
  });
}

document.getElementById("movie-form").addEventListener("submit", async (event) => {
  // Implement this function
  event.preventDefault();

  const titleInput = document.getElementById("title-input").value.trim();
  const movieTitle = document.getElementById("movie-title");
  const movieDirector = document.getElementById("movie-director");
  const movieYear = document.getElementById("movie-year");
  const movieSynopsis = document.getElementById("movie-synopsis");
  const errorMessage = document.getElementById("error-message");

  movieTitle.textContent = "";
  movieDirector.textContent = "";
  movieYear.textContent = "";
  movieSynopsis.textContent = "";
  errorMessage.textContent = "Loading...";

  try {
    const movie = await fetchMovie(titleInput);
    errorMessage.textContent = "";
    movieTitle.textContent = `Title: ${movie.title}`;
    movieDirector.textContent = `Director: ${movie.director}`;
    movieYear.textContent = `Release Year: ${movie.year}`;
    movieSynopsis.textContent = `Synopsis: ${movie.synopsis}`;
  } catch (error) {
    errorMessage.textContent = error;
  }
});