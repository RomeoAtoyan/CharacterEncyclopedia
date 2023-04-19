import React from "react";
import "./Tabs.css";

const Tabs = ({ activeTab, handleTabClick, tabs }) => {
  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            // "active" classname geven indien erop geklikt wordt
            className={`tab ${activeTab === tab.label ? "active" : ""}`}
            onClick={() => handleTabClick(tab.label)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      {/* vind overeenkomende actieve tab */}
      <div className="tab-content">
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
