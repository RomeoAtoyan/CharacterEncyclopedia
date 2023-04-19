import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Tabs from "./Tabs";
import "./DetailedCard.css";

const DetailedCard = ({
  selectedCharacter,
  isTabActive,
}) => {
  const [activeTab, setActiveTab] = useState("Appearance");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  // indien er geen gewicht of lengte ontvangen wordt
  const test = (char) => {
    if (
      char?.appearance.height[1] === "0 cm" ||
      char?.appearance.weight[1] === "0 kg"
    ) {
      return "no-cm";
    }
  };

  // verschillende namen bij verschillende api calls
  const fullNameIfNoName = selectedCharacter?.biography["full-name"];
  const alterEgoIfNoAlterEgo = selectedCharacter?.biography["alter-egos"];
  const birthIfNoBirth = selectedCharacter?.biography["place-of-birth"];
  const appearanceIfNoAppearance =
    selectedCharacter?.biography["first-appearance"];
  const groupAffiliationIfNogroupAffiliation =
    selectedCharacter?.connections["group-affiliation"];

  useEffect(() => {
    test();
    console.log(selectedCharacter);
  }, [fullNameIfNoName]);

  return (
    <>
      {isTabActive && (
        <div className="detailed_container animate__animated animate__bounceInLeft">
          <div className="left-items">
            <img
              src={
                selectedCharacter?.images?.lg || selectedCharacter?.image?.url
              }
              alt={selectedCharacter?.name}
            />
          </div>

          <div className="right-items">
            <h1>{selectedCharacter?.name}</h1>
            <Tabs
              activeTab={activeTab}
              handleTabClick={handleTabClick}
              tabs={[
                {
                  label: "Appearance",
                  content: (
                    <div>
                      <p>
                        <strong>Gender:</strong>{" "}
                        {selectedCharacter?.appearance.gender}
                      </p>
                      <p>
                        <strong>Race:</strong>{" "}
                        {selectedCharacter?.appearance.race}
                      </p>
                      <p className={test(selectedCharacter)}>
                        <strong>Height:</strong>{" "}
                        {selectedCharacter?.appearance.height[1]}
                      </p>
                      <p className={test(selectedCharacter)}>
                        <strong>Weight:</strong>{" "}
                        {selectedCharacter?.appearance.weight[1]}
                      </p>
                    </div>
                  ),
                },
                {
                  label: "Bio",
                  content: (
                    <div style={{ padding: "10px" }}>
                      <p>
                        <strong>Full Name: </strong>{" "}
                        {selectedCharacter?.biography.fullName ||
                          fullNameIfNoName}
                      </p>
                      <p>
                        <strong>Alter Egos:</strong>{" "}
                        {selectedCharacter?.biography.alterEgos ||
                          alterEgoIfNoAlterEgo}
                      </p>
                      <p>
                        <strong>Place of Birth:</strong>{" "}
                        {selectedCharacter?.biography.placeOfBirth ||
                          birthIfNoBirth}
                      </p>
                      <p>
                        <strong>First Appearance:</strong>{" "}
                        {selectedCharacter?.biography.firstAppearance ||
                          appearanceIfNoAppearance}
                      </p>
                      <p>
                        <strong>Publisher:</strong>{" "}
                        {selectedCharacter?.biography.publisher}
                      </p>
                      <p>
                        <strong>Alignment:</strong>{" "}
                        {selectedCharacter?.biography.alignment}
                      </p>
                    </div>
                  ),
                },
                {
                  label: "Connections",
                  content: (
                    <div style={{ textAlign: "center" }}>
                      <p>
                        <strong>Group Affiliation:</strong>{" "}
                        {selectedCharacter?.connections.groupAffiliation ||
                          groupAffiliationIfNogroupAffiliation}
                      </p>
                      <p>
                        <strong>Relatives:</strong>{" "}
                        {selectedCharacter?.connections.relatives}
                      </p>
                    </div>
                  ),
                },
                {
                  label: "Powerstats",
                  content: (
                    <div>
                      <p>
                        <strong>Intelligence:</strong>{" "}
                        {selectedCharacter?.powerstats.intelligence}
                      </p>
                      <p>
                        <strong>Strength:</strong>{" "}
                        {selectedCharacter?.powerstats.strength}
                      </p>
                      <p>
                        <strong>Speed:</strong>{" "}
                        {selectedCharacter?.powerstats.speed}
                      </p>
                      <p>
                        <strong>Durability:</strong>{" "}
                        {selectedCharacter?.powerstats.durability}
                      </p>
                      <p>
                        <strong>Power:</strong>{" "}
                        {selectedCharacter?.powerstats.power}
                      </p>
                      <p>
                        <strong>Combat:</strong>{" "}
                        {selectedCharacter?.powerstats.combat}
                      </p>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DetailedCard;
