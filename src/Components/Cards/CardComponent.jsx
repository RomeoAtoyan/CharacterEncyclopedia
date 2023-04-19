// import React from "react";
// import { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./CardComponent.css";
// import Card from "react-bootstrap/Card";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faRotateRight } from "@fortawesome/free-solid-svg-icons";

// // const CardComponent = ({
// //   heroes,
// //   setHeroes,
// //   selectedCharacter,
// //   setSelectedCharacter,
// //   isTabActive,
// //   setIsTabActive,
// // }) => {
// //   // fetch karakters en zet state van heroes naar ontvangen data
// //   const getHeroes = async () => {
// //     const options = {
// //       method: "GET",
// //       headers: {
// //         "X-RapidAPI-Key": "62f920c671msh3ba91345981d596p128993jsn9f1cac9f053b",
// //         "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
// //       },
// //     };
// //     const response = await fetch(
// //       "https://superhero-search.p.rapidapi.com/api/heroes",
// //       options
// //     );
// //     const data = await response.json();
// //     setHeroes(data);
// //   };

// //   // zet geklikte karakter naar selectedCharacter state
// //   const updateDetailedCharacterCard = (character) => {
// //     setSelectedCharacter(character);
// //     setIsTabActive(true);
// //   };

// //   useEffect(() => {
// //     getHeroes();
// //   }, []);

// //   return (
// //     <main className="main-container">
// //       {/* karakters refreshen */}
// //       <aside
// //       onClick={refreshCharacters}
// //       className="refresh-characters">
// //         <FontAwesomeIcon icon={faRotateRight} />
// //         <span>refresh characters</span>
// //       </aside>
// //       <aside className="heroes_container">
// //         {heroes?.map((hero) => (
// //           <Card
// //             onClick={() => {
// //               updateDetailedCharacterCard(hero);
// //               handleCharacterClick(hero);
// //             }}
// //             style={{ width: "160px", height: "300px" }}
// //             className="bg-black text-light animate__animated animate__slideInLeft card-shadow character-mini-card"
// //           >
// //             <Card.Img variant="top" src={hero?.images?.lg} />
// //             <Card.Body>
// //               <Card.Title style={{ color: "yellow" }} className="text-center">
// //                 {hero?.name}
// //               </Card.Title>
// //             </Card.Body>
// //           </Card>
// //         ))}
// //       </aside>
// //     </main>
// //   );
// // };

// // export default CardComponent;

// const CardComponent = ({
//   heroes,
//   setHeroes,
//   selectedCharacter,
//   setSelectedCharacter,
//   isTabActive,
//   setIsTabActive,
// }) => {
//   // fetch karakters en zet state van heroes naar ontvangen data
//   const getHeroes = async () => {
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "62f920c671msh3ba91345981d596p128993jsn9f1cac9f053b",
//         "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
//       },
//     };
//     const response = await fetch(
//       "https://superhero-search.p.rapidapi.com/api/heroes",
//       options
//     );
//     const data = await response.json();
//     setHeroes(data);
//   };

//   // zet geklikte karakter naar selectedCharacter state
//   const updateDetailedCharacterCard = (character) => {
//     setSelectedCharacter(character);
//     setIsTabActive(true);
//   };

//   // functie om karakters te vernieuwen
//   const refreshCharacters = async () => {
//     getHeroes();
//   };

//   useEffect(() => {
//     getHeroes();
//   }, []);

//   return (
//     <main className="main-container">
//       {/* karakters refreshen */}
//       <aside onClick={refreshCharacters} className="refresh-characters">
//         <FontAwesomeIcon className="refresh-rotate" icon={faRotateRight} />
//         <span>refresh characters</span>
//       </aside>
//       <aside className="heroes_container">
//         {heroes?.map((hero) => (
//           <Card
//             onClick={() => {
//               updateDetailedCharacterCard(hero);
//               handleCharacterClick(hero);
//             }}
//             style={{ width: "160px", height: "300px" }}
//             className="bg-black text-light animate__animated animate__slideInLeft card-shadow character-mini-card"
//           >
//             <Card.Img variant="top" src={hero?.images?.lg} />
//             <Card.Body>
//               <Card.Title style={{ color: "yellow" }} className="text-center">
//                 {hero?.name}
//               </Card.Title>
//             </Card.Body>
//           </Card>
//         ))}
//       </aside>
//     </main>
//   );
// };

// export default CardComponent;

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
}) => {
  const [loading, setLoading] = useState(false);

  // fetch karakters en zet state van heroes naar ontvangen data
  const getHeroes = async () => {
    setLoading(true);
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
    setLoading(false);
  };

  // zet geklikte karakter naar selectedCharacter state
  const updateDetailedCharacterCard = (character) => {
    setSelectedCharacter(character);
    setIsTabActive(true);
  };

  // functie om karakters te vernieuwen
  const refreshCharacters = async () => {
    await getHeroes();
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
              // handleCharacterClick(hero);
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
