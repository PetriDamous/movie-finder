import React, { useState } from "react";

import MovieCard from "./MovieCard";
import MovieForm from "./MovieForm";

function MovieSearch() {
  const [searchInputValue, setSearchInput] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const movieQuery = searchInputValue;

  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieQuery}&page=1&include_adult=true`;

  const updateSearchInput = (e) => {
    const searchValue = e.target.value;

    setSearchInput(searchValue);
  };

  const searchForMovie = async (e) => {
    e.preventDefault();
    if (searchInputValue.length <= 0) return;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      console.log(data.results);

      setSearchResults(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <MovieForm
        submit={searchForMovie}
        updateInput={updateSearchInput}
        inputeValue={searchInputValue}
      />

      {searchResults.map((movie) => (
        <MovieCard id={movie.id} movieData={movie} />
      ))}
    </div>
  );
}

// {searchResults.length > 0 ? <h2>show results</h2> : <h2>no results</h2>}

export default MovieSearch;
