import { useEffect, useState } from "react";
import "./App.css";
import CardComponent from "./Components/Cards/CardComponent";
import Search from "./Components/Search/Search";
import Nav from "./Components/Navbar/Navbar";
import DetailedCard from "./Components/Cards/DetailedCard";

function App() {
  // nodige state in app.js declareren om door te geven aan de componenten
  const [heroes, setHeroes] = useState(null);
  const [searchedHero, setSearchedHero] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [isTabActive, setIsTabActive] = useState(false);

  // list van karakters fetchen en omvormen naar json formaat en heroes state omzetten naar de ontvangen data
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
    console.log(data);
  };

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <div className="App">
      <Nav />
      <main className="character-container">
        <CardComponent
          setSelectedCharacter={setSelectedCharacter}
          selectedCharacter={selectedCharacter}
          setSearchedHero={setSearchedHero}
          searchedHero={searchedHero}
          heroes={heroes}
          setHeroes={setHeroes}
          isTabActive={isTabActive}
          setIsTabActive={setIsTabActive}
        />
        <div className="search-and-detailed-container">
          <Search />
          <DetailedCard
            setIsTabActive={setIsTabActive}
            isTabActive={isTabActive}
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
