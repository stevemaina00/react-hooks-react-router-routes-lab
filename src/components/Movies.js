import React from "react";
import { movies } from "../data";

export default function Movies() {
  const moviesDisplay = movies.map((movie) => (
    <div key={movie.title}>
      <h3>Name: {movie.title}</h3>
      <p>Time: {movie.time}</p>
      Genres:
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesDisplay}
    </div>
  );
}


