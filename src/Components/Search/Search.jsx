import React, { useState, useEffect } from "react";
import "./Search.css";
import { useDebounce } from "../Debounce/Debounce";
import Card from "react-bootstrap/Card";
import "animate.css";

const Search = ({ setSelectedCharacter, setIsTabActive }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [emptySearch, setEmptySearch] = useState(true);
  const [foundChar, setFoundChar] = useState(null);
  const debouncedSearch = useDebounce(searchTerm, 1000);
  const [isResultSelected, setIsResultSelected] = useState(false);

  // fetch karakter info a.d.v input
  const getSearchedCharacter = async () => {
    const response = await fetch(
      `https://www.superheroapi.com/api.php/727054372039115/search/${searchTerm}`
    );
    const data = await response.json();
    setFoundChar(data?.results);
    console.log(data?.results);
  };

  //log naam van gezochte karakter
  const displaySearchedChar = (char) => {
    console.log(`Name is ${char?.name} and ID is ${char?.id}`);
    setSelectedCharacter(char);
    setIsTabActive(true);
    setIsResultSelected(true);
    let input = document.getElementById("search-input");
    input.value = "";
    console.log(char)
  };

  // zoekinput waarde naar search state
  // geen karakter tonen als input leeg is
  const getSearchTerm = (e) => {
    e.target.value === "" ? setEmptySearch(true) : setEmptySearch(false);
    setSearchTerm(e.target.value);
    setIsResultSelected(false);
  };

  // component refreshen als input veranderd. DEBOUNCE voor minimale netwerk gebruik (1 seconde wachten op input waarde voordat de data wordt gefetcht)
  useEffect(() => {
    getSearchedCharacter();
  }, [debouncedSearch]);

  return (
    <aside className="search-container">
      <div className="input-section">
        <input id="search-input" placeholder="Search Characters" onChange={getSearchTerm} type="text" />
      </div>
      {emptySearch || isResultSelected ? (
        ""
      ) : (
        <div
          className={`search-result-section animate__animated animate__fadeInDown`}
        >
          {foundChar?.map((hero) => (
            <div
              onClick={() => displaySearchedChar(hero)}
              key={hero?.id}
              className="result"
            >
              <img src={hero?.image?.url} alt="" />
              <h3>{hero?.name}</h3>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default Search;
