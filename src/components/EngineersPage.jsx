import React from "react";
import engineers from "../engineers.json"

import { useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import "../styling.css";
import EngineerCard from "./EngineerCard";

const EngineersPage = () => {
    const[searchStr, setSearchStr] = useState("");

    let matchingEngineers = engineers;
    const fetchEngineers = () => {
      if(searchStr !== "") {
        matchingEngineers = [];
        for(const engineer in engineers){
            let engineerName = engineers[engineer].name.toLowerCase();
            let search = searchStr.toLowerCase();

            if(engineerName.includes(search)){
                matchingEngineers[engineer] = engineer;
            }
        }
      }
    }

    fetchEngineers();

    const getProjectCount = () => {
      
    }

    let cardID = 0;
    const getEngineerCards = () => {
      let cards = [];

      for(const engineer in matchingEngineers){
        cardID++;

        let engineerName = engineers[engineer].name;
        let role = engineers[engineer].role;
        let profilePicture = engineers[engineer]['profile-picture'];
        let github = engineers[engineer].github;
        let linkedin = engineers[engineer].linkedin;

        let cardElem = <EngineerCard
        key={cardID} 
        name={engineerName} 
        role={role} 
        profilePicture={profilePicture} 
        github={github} 
        linkedin={linkedin}/>

        cards.push(cardElem);
    }

    if(cards.length <= 0) return <h1 className="no-result">No engineers found!</h1>

      return cards;
    }

    return (
        <div>
          <div className="page-title">
            <h1>2i Coding Challenge Submissions</h1>
            <h2>Active Engineers</h2>
          </div>

          <SearchBar updateSearch={setSearchStr}/>
          <div className="homepage-links">
              <a href="./" className="homepage-links"><button>Submissions</button></a>
          </div>

          <div className="container">
            {getEngineerCards()}
        </div>
      </div>
    )
}

export default EngineersPage;