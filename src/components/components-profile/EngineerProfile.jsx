import React from "react";
import "../../styling.css";
import engineers from "../../engineers.json";
import challenges from "../../challenges.json";
import ProfileImage from "./ProfileImage";

import Card from "../SubmissionCard";

const EngineerProfile = ({ engineerID, favouriteTech, projects }) => {
    const engineer = engineers[engineerID];
    const engineerName = engineer.name;

    const projectCount = Object.keys(projects).length;

    const getProjTitleFromID = (projectTitle) => {
        let title = projectTitle;
  
        if(projectTitle.startsWith("id:")){
          let challengeID = projectTitle.replace('id:','');
          
          if(challenges[challengeID] !== undefined) title = challenges[challengeID].title;
        }
  
        return title;
      }

    let cardID = 0;
    const getProjectCards = () => {
        const projectCards = [];

        for(const projectID in projects){
            cardID++;
            const project = projects[projectID];
            const title = getProjTitleFromID[project.title],
            mainTechnology = project['main-technology'],
            thumbnail = project.thumbnail,
            projectLink = project['project-link'],
            projectGH = project['project-gh'];

           const card = <Card 
           key={cardID}
           title={title}
           mainTechnology={mainTechnology}
           creator={engineerName}
           thumbnail={thumbnail}
           projectLink={projectLink}
           projectGH={projectGH} />

           projectCards.push(card);
        }

        return projectCards;
    }

    return(
        <div className="profile">
            <ProfileImage image={engineer['profile-picture']}/>
            <h1>{engineerName}</h1>
            <h2>{engineer.role}</h2>
            <div className="project-stats">
                <h2>Project Stats</h2>
                <h3>Project Count: {projectCount}</h3>
                <h3>Favourite Tech: {favouriteTech}</h3>
            </div>

            <h1 id="submissions">Submissions</h1>
            <div className="container">
                {getProjectCards()}
            </div>
        </div>
    )
}

export default EngineerProfile;