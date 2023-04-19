import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardComponent.css";
import Card from "react-bootstrap/Card";

const CardComponent = ({
  heroes,
  setHeroes,
  selectedCharacter,
  setSelectedCharacter,
  isTabActive,
  setIsTabActive,
}) => {

  
  // fetch karakters en zet state van heroes naar ontvangen data
  const getHeroes = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "62f920c671msh3ba91345981d596p128993jsn9f1cac9f053b",
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      },
    };
    const response = await fetch(
      "https://superhero-search.p.rapidapi.com/api/heroes",
      options
    );
    const data = await response.json();
    setHeroes(data);
  };

  // zet geklikte karakter naar selectedCharacter state
  const updateDetailedCharacterCard = (character) => {
    // console.log(character);
    setSelectedCharacter(character);
    setIsTabActive(true);
  };

  useEffect(() => {
    getHeroes();
  }, []);

  // log naam van geklikte karakter
  const handleCharacterClick = (char) => {
    // console.log(char?.name);
  };

  return (
    <>
      {
        //karakters refreshen
        /* <div className="refresh-characters"></div> */
      }
      <main className="heroes_container">
        {heroes?.map((hero) => (
          <Card
            onClick={() => {
              updateDetailedCharacterCard(hero);
              handleCharacterClick(hero);
            }}
            style={{ width: "150px", height: "300px" }}
            className="bg-black text-light animate__animated animate__fadeIn card-shadow character-mini-card"
          >
            <Card.Img variant="top" src={hero?.images?.lg} />
            <Card.Body>
              <Card.Title style={{ color: "yellow" }} className="text-center">
                {hero?.name}
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </main>
    </>
  );
};

export default CardComponent;
