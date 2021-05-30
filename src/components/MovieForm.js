import React from "react";

function MovieForm({ submit, updateInput, inputeValue }) {
  return (
    <form onSubmit={submit}>
      <label>Search Movie</label>
      <input
        type="text"
        onChange={updateInput}
        value={inputeValue}
        placeholder="ex: Jurassic Park"
      />
      <button>Search</button>
    </form>
  );
}

export default MovieForm;
