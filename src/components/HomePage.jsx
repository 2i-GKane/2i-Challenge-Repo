import React from "react";
import items from "../config.json"
import engineers from "../engineers.json"

import { useState } from "react";

import SearchBar from "./SearchBar";
import Card from "./Card";
import "../styling.css";

const HomePage = () => {
    const[searchStr, setSearchStr] = useState("");
    let matchingSubmissions = items;

    const getCreatorFromID = (projectCreator) => {
      let creator = projectCreator;
      if(projectCreator.startsWith("id:")){
        let creatorID = projectCreator.replace('id:','');

        if(engineers[creatorID] !== undefined) creator = engineers[creatorID]['name'];
      }

      return creator;
    }
  
    const fetchSubmissions = () => {
      if(searchStr !== "") {
        matchingSubmissions = [];
        items.map((item) => {
          let projectName = item.title.toLowerCase();
          let projectCreator = getCreatorFromID(item.creator).toLowerCase();
    
          let search = searchStr.toLowerCase();
    
          if(projectName.includes(search) || projectCreator.includes(search)) matchingSubmissions.push(item);
        })
      }
    }

    fetchSubmissions();

    const getCardMethod = () => {
      if(matchingSubmissions.length <= 0){
        return <h1 className="no-result">No submissions found!</h1>
      } else {
        return matchingSubmissions.map((item) => {
          cardID++;

          let title = item.title,
          creator = getCreatorFromID(item.creator),
          mainTechnology = item["main-technology"],
          thumnail = item.thumbnail,
          projectLink = item['project-link'],
          projectGH = item['project-gh'];

          return <Card key={cardID} title={title} mainTechnology={mainTechnology} creator={creator} thumbnail={thumnail} projectLink={projectLink} projectGH={projectGH}/>
        });
      }
    }

  
    let cardID = 0;
    return (
        <div>
          <div className="page-title">
            <h1>2i Coding Challenge Submissions</h1>
            <h2>Maintained by: Gabriel & Craig</h2>
          </div>

          <SearchBar updateSearch={setSearchStr}/>
          <div className="homepage-links">
              <a href="./engineers/" className="homepage-links"><button>Engineers</button></a>
          </div>
          
          <div className="container">
          {getCardMethod()}
        </div>
      </div>
    )
}

export default HomePage;