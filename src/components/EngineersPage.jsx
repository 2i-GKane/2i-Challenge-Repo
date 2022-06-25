import React from "react";
import engineers from "../engineers.json";
import items from "../config.json";

import { useState } from "react";

import SearchBar from "./SearchBar";
import "../styling.css";
import EngineerCard from "./EngineerCard";
import EngineerProfilePage from "./EngineerProfilePage";

const baseURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname.split('/')[1];
const EngineersPage = ({ engineerSetter }) => {
    const[searchStr, setSearchStr] = useState("");
    const[selectedEngineer, setSelectedEngineer] = useState("");
    const[displayingProfile, setDisplayingProfile] = useState(false);
    const projectMap = {};

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

    const mapProjects = (engineerID) => {
      let count = 0;
      if(engineers[engineerID] !== undefined){
        projectMap[engineerID] = {};

        for(const itemIndex in items){
          const submission = items[itemIndex];
          const mapID = engineerID + "-" + submission.title.replaceAll(" ", "");
          
          if(submission.creator.replace('id:','') === engineerID){
            projectMap[engineerID][mapID] = submission;
            count++;
          }
        }
      }

      return count;
    }

    const enableProfileView = (engineer) => {
      if(engineers[engineer] !== undefined){
        setSelectedEngineer(engineer);
        setDisplayingProfile(true);
      }
    }

    const disableProfileView = () => {
      setSelectedEngineer("");
        setDisplayingProfile(false);
    }

    const getEngineerCards = () => {
      let cards = [];

      for(const engineer in matchingEngineers){
        let engineerName = engineers[engineer].name;
        let role = engineers[engineer].role;
        let profilePicture = engineers[engineer]['profile-picture'];
        let github = engineers[engineer].github;
        let linkedin = engineers[engineer].linkedin;

        let cardElem = <EngineerCard
        onClick={() => {enableProfileView(engineer)}}
        key={engineer} 
        name={engineerName} 
        role={role}
        projectCount={mapProjects(engineer)} 
        profilePicture={profilePicture} 
        github={github} 
        linkedin={linkedin}/>

        cards.push(cardElem);
    }

    if(cards.length <= 0) return <h1 className="no-result">No engineers found!</h1>

      return cards;
    }

    if(!displayingProfile){
      return (
        <div>
          <div className="page-title">
            <h1>2i Coding Challenge Submissions</h1>
            <h2>Active Engineers</h2>
          </div>

          <SearchBar updateSearch={setSearchStr}/>
          <div className="homepage-links">
              <a href={`${baseURL}/`} className="homepage-links"><button>Submissions</button></a>
          </div>

          <div className="container">
            {getEngineerCards()}
        </div>
      </div>
    )

    } else {
      mapProjects(selectedEngineer);
      return <EngineerProfilePage engineerID={selectedEngineer} engineerProjects={projectMap[selectedEngineer]} revertPage={() => disableProfileView()}/>
    }
    
}

export default EngineersPage;