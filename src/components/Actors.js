import React from "react";
import { actors } from "../data";

export default function Actors() {
  const actorDisplay = actors.map((actor) => (
    <div key={actor.name}>
      <h2>Name: {actor.name}</h2>
      Movies:
      <ul>
        {actor.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Actors Page</h1>
      {actorDisplay}
    </div>
  );
}


