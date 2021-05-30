import React from "react";

// https://image.tmdb.org/t/p/w185_and_h278_bestv2/

// image
// title
// release date
// vote average
// overview

function MovieCard({ movieData }) {
  console.log(movieData);
  return (
    <div>
      <h3>{movieData.title}</h3>
      <p>{movieData.release_date}</p>
      <p>{movieData.vote_average}</p>
      <p>{movieData.overview}</p>
    </div>
  );
}

export default MovieCard;
