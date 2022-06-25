import React from "react";
import EngineerProfile from "./components-profile/EngineerProfile";

const EngineerProfilePage = ({ engineerID, engineerProjects, revertPage }) => {

    const getFavouriteTech = () => {
        const usage = {};
        for(const projectID in engineerProjects){
            const project = engineerProjects[projectID];
            const projectTech = project['main-technology'];

            if(!(projectTech in usage)){
                usage[projectTech] = 1;
            } else {
                let currentVal = usage[projectTech];
                usage[projectTech] = currentVal + 1;
            }
        }

        let highestUsage = 0;
        let mostUsed = "";
        for(const tech in usage){
            let techUsage = usage[tech];

            if(techUsage > highestUsage){
                highestUsage++;
                mostUsed = tech;
            }
        }

        return mostUsed;
    }


    return (
        <div>
          <div className="page-title">
            <h1>2i Coding Challenge Submissions</h1>
            <h2>Engineer Profile</h2>
          </div>
          <div className="homepage-links">
            <button id="revert-eng" onClick={revertPage}>Engineers</button>
          </div>
            <EngineerProfile engineerID={engineerID} favouriteTech={getFavouriteTech()} projects={engineerProjects}/>
        </div>
    )
    
}

export default EngineerProfilePage;