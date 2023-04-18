import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardComponent.css";
import Card from "react-bootstrap/Card";

const CardComponent = ({ heroes, setHeroes }) => {
  const getHeroes = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2238a70dadmshde0dd25d90489a2p17fe94jsn2c74b54dec70",
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      },
    };
    const response = await fetch(
      "https://superhero-search.p.rapidapi.com/api/heroes",
      options
    );
    const data = await response.json();
    setHeroes(data);
    console.log(data);
  };

  useEffect(() => {
    getHeroes();
  }, []);

  const handleCharacterClick = (char) => {
    console.log(char?.name);
  };

  return (
    <main className="heroes_container">
      {heroes?.map((hero) => (
        <Card
          onClick={() => handleCharacterClick(hero)}
          style={{ width: "200px", height: "350px" }}
        >
          <Card.Img variant="top" src={hero?.images.lg} />
          <Card.Body>
            <Card.Title>{hero?.name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </main>
  );
};

export default CardComponent;
