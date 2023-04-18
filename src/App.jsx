import { useEffect, useState } from "react";

import "./App.css";
import CardComponent from "./Components/Cards/CardComponent";
import Search from "./Components/Search/Search";

function App() {
  const [heroes, setHeroes] = useState(null);
  const [searchedHero, setSearchedHero] = useState(null);

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

  return (
    <div className="App">
      <main className="character-container">
        <CardComponent heroes={heroes} setHeroes={setHeroes} />
        <Search />
      </main>
    </div>
  );
}

export default App;

// {
//   "id": 30,
//   "name": "Ant-Man",
//   "slug": "30-ant-man",
//   "powerstats": {
//       "intelligence": 100,
//       "strength": 18,
//       "speed": 23,
//       "durability": 28,
//       "power": 32,
//       "combat": 32
//   },
//   "appearance": {
//       "gender": "Male",
//       "race": "Human",
//       "height": [
//           "6'11",
//           "211 cm"
//       ],
//       "weight": [
//           "270 lb",
//           "122 kg"
//       ],
//       "eyeColor": "Blue",
//       "hairColor": "Blond"
//   },
//   "biography": {
//       "fullName": "Hank Pym",
//       "alterEgos": "Giant-Man, Goliath, Wasp II, Yellowjacket",
//       "aliases": [
//           "Hank Pym",
//           "Doctor Pym",
//           "Ant-Man",
//           "Goliath",
//           "Yellowjacket",
//           "Wasp",
//           "Earth's Scientist Supreme"
//       ],
//       "placeOfBirth": "Elmsford, New York",
//       "firstAppearance": "Tales to Astonish #27 (January, 1962) (as Hank Pym)  Tales to Astonish #35 (September, 1962) (as Ant-Man)",
//       "publisher": "Giant-Man",
//       "alignment": "good"
//   },
//   "work": {
//       "occupation": "Adventurer, Biochemist, former manager of Avengers Compound",
//       "base": "Avengers Compound, Los Angeles; formerly Infinite Avengers Mansion; Captive aboard a Skrull ship; Avengers Mansion, New York City, New York"
//   },
//   "connections": {
//       "groupAffiliation": "Avengers Academy, Secret Avengers; formerly Mighty Avengers, Avengers (founding member), Defenders, Future Iron Man's Team",
//       "relatives": "-"
//   },
//   "images": {
//       "xs": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/30-ant-man.jpg",
//       "sm": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/30-ant-man.jpg",
//       "md": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/30-ant-man.jpg",
//       "lg": "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/30-ant-man.jpg"
//   }
// }
