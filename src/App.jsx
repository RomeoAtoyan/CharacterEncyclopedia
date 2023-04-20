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
  const [loading, setLoading] = useState(false);

  // list van karakters fetchen en omvormen naar json formaat en heroes state omzetten naar de ontvangen data
  const getHeroes = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${import.meta.env.VITE_API_KEY}`,
        "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
      },
    };
    const response = await fetch(
      "https://superhero-search.p.rapidapi.com/api/heroes",
      options
    );
    const data = await response.json();
    setHeroes(data);
    setLoading(false);
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
          isTabActive={isTabActive}
          setIsTabActive={setIsTabActive}
          getHeroes={getHeroes}
          loading={loading}
          setLoading={setLoading}
        />
        <div className="search-and-detailed-container">
          <Search
            setSelectedCharacter={setSelectedCharacter}
            setIsTabActive={setIsTabActive}
          />
          <DetailedCard
            setHeroes={setHeroes}
            isTabActive={isTabActive}
            selectedCharacter={selectedCharacter}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
