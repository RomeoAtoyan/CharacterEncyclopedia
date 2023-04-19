import React, { useState, useEffect } from "react";
import "./Search.css";
import { useDebounce } from "../Debounce/Debounce";
import Card from "react-bootstrap/Card";
import "animate.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [emptySearch, setEmptySearch] = useState(true);
  const [searchedHero, setSearchedHero] = useState(null);
  const debouncedSearch = useDebounce(search, 1000);

  // fetch karakter info a.d.v input
  const getSearchedCharacter = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "62f920c671msh3ba91345981d596p128993jsn9f1cac9f053b",
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

  // zoek input waarde naar search state
  // geen karakter tonen als input leeg is
  const getSearchTerm = (e) => {
    e.target.value === "" ? setEmptySearch(true) : setEmptySearch(false);
    setSearch(e.target.value);
  };

  // component refreshen als input veranderd. DEBOUNCE voor minimale netwerk gebruik (1 seconde wachten op input waarde voordat de data wordt gefetcht)
  useEffect(() => {
    getSearchedCharacter();
  }, [debouncedSearch]);

  return (
    <aside className="search-container">
      <div className="input-section">
        <input onChange={getSearchTerm} type="text" />
      </div>
      {emptySearch ? (
        ""
      ) : (
        <div className="search-result-section animate__animated animate__fadeInDown">
          <div className="search-result ">
            <Card
              style={{ width: "10rem", color: "yellow" }}
              className="card-shadow bg-black"
            >
              <Card.Img
                className="result-image"
                variant="top"
                src={searchedHero?.images?.md}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center", fontSize: "medium" }}>
                  {searchedHero?.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Search;
