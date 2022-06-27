import React from "react";
import items from "../submissions.json"
import engineers from "../engineers.json"
import challenges from "../challenges.json"

import { useState } from "react";

import SearchBar from "./SearchBar";
import Card from "./SubmissionCard";
import "../styling.css";

const HomePage = ({ pageSetter }) => {
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

    const getTitleFromID = (projectTitle) => {
      let title = projectTitle;

      if(projectTitle.startsWith("id:")){
        let challengeID = projectTitle.replace('id:','');
        
        if(challenges[challengeID] !== undefined) title = challenges[challengeID].title;
      }

      return title;
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

          let title = getTitleFromID(item.title),
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
            <h1>2i Coding Challenge Repository</h1>
            <h2>Submissions</h2>
          </div>

          <SearchBar updateSearch={setSearchStr}/>
          <div className="homepage-links">
              <a className="homepage-links"><button onClick={() => pageSetter("engineers")}>Engineers</button></a>
              <a className="homepage-links"><button onClick={() => pageSetter("challenges")}>Challenges</button></a>
          </div>
          
          <div className="container">
          {getCardMethod()}
        </div>
      </div>
    )
}

export default HomePage;