import React, { useState, useEffect } from "react";
import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchedHero, setSearchedHero] = useState(null);

  const getSearchedCharacter = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2238a70dadmshde0dd25d90489a2p17fe94jsn2c74b54dec70",
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      },
    };

    const response = await fetch(
      `https://superhero-search.p.rapidapi.com/api/?hero=${search}`,
      options
    );
    const data = await response.json();
    setSearchedHero(data);
    console.log(data);
  };

//   useEffect(() => {}, []);

  return (
    <aside className="search-container">
      <div className="input-section">
        <input type="text" />
      </div>
      <div className="search-result-section">
        <div className="search-result">
          <img
            src="https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/313-hawkeye.jpg"
            alt=""
          />
          <h1>Hawkeye</h1>
        </div>
      </div>
    </aside>
  );
};

export default Search;
