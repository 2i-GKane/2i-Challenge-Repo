import React from "react";
import items from "../config.json"

import { useState } from "react";

import SearchBar from "./SearchBar";
import Card from "./Card";
import "../styling.css";

const HomePage = () => {
    const[searchStr, setSearchStr] = useState("");
    let matchingSubmissions = items;
  
    const fetchCards = () => {
      if(searchStr !== "") {
        matchingSubmissions = [];
        items.map((item) => {
          let projectName = item.title.toLowerCase();
          let projectCreator = item.creator.toLowerCase();
    
          let search = searchStr.toLowerCase();
    
          if(projectName.includes(search) || projectCreator.includes(search)) matchingSubmissions.push(item);
        })
      }
    }

    fetchCards();

  
    let cardID = 0;
    return (
        <div>
          <div className="page-title">
            <h1>2i Coding Challenge Submissions</h1>
            <h2>Maintained by: Gabriel & Craig</h2>
          </div>

          <SearchBar updateSearch={setSearchStr}/>
          <div className="homepage-links">
              <a href="./engineers" className="homepage-links"><button>Engineers</button></a>
          </div>
          
          <div className="container">
          {matchingSubmissions.map((item) => {
            cardID++;

            let title = item.title,
            creator = item.creator,
            mainTechnology = item["main-technology"],
            thumnail = item.thumbnail,
            projectLink = item['project-link'],
            projectGH = item['project-gh'];

            return <Card key={cardID} title={title} mainTechnology={mainTechnology} creator={creator} thumbnail={thumnail} projectLink={projectLink} projectGH={projectGH}/>
          })}
        </div>
      </div>
    )
}

export default HomePage;