import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardComponent.css";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const CardComponent = ({
  heroes,
  setHeroes,
  setSelectedCharacter,
  setIsTabActive,
  getHeroes,
  loading,
  setLoading,
}) => {
  // fetch karakters en zet state van heroes naar ontvangen data
  // const getHeroes = async () => {
  //   setLoading(true);
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "60c503507fmsh0cc3a931ffb93bfp1d4530jsnf6378345cc90",
  //       "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
  //     },
  //   };
  //   const response = await fetch(
  //     "https://superhero-search.p.rapidapi.com/api/heroes",
  //     options
  //   );
  //   const data = await response.json();
  //   setHeroes(data);
  //   setLoading(false);
  // };

  // zet geklikte karakter naar selectedCharacter state
  const updateDetailedCharacterCard = (character) => {
    setSelectedCharacter(character);
    setIsTabActive(true);
  };

  // functie om karakters te vernieuwen
  const refreshCharacters = async () => {
    setLoading(true);
    await getHeroes();
    setLoading(false);
  };

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <main className="main-container">
      {/* karakters refreshen */}
      <aside onClick={refreshCharacters} className="refresh-characters">
        {loading ? (
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>
            <FontAwesomeIcon className="refresh-rotate" icon={faRotateRight} />
            <span>refresh characters</span>
          </>
        )}
      </aside>
      <aside className="heroes_container">
        {heroes?.map((hero) => (
          <Card
            onClick={() => {
              updateDetailedCharacterCard(hero);
            }}
            style={{ width: "160px", height: "300px" }}
            className="bg-black text-light animate__animated animate__slideInLeft card-shadow character-mini-card"
          >
            <Card.Img variant="top" src={hero?.images?.lg} />
            <Card.Body>
              <Card.Title style={{ color: "yellow" }} className="text-center">
                {hero?.name}
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </aside>
    </main>
  );
};

export default CardComponent;
