
import React from "react";
import { directors } from "../data";

export default function Directors() {
  const directorDisplay = directors.map((director) => (
    <div key={director.name}>
      <h2>Name: {director.name}</h2>
      Movies:
      <ul>
        {director.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Directors Page</h1>
      {directorDisplay}
    </div>
  );
}

