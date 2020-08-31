import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  //The second argument of the useEffect can be
  //Empty array: Rua at initial render.
  //Nothing: Rua at initial render and after every rerender.
  //Array with elements: Run at initial render and after every rerender,
  //                     if one of the elements has changed
  useEffect(() => {
    console.log("abcde")
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
