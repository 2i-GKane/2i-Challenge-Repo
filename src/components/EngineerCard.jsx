import React from "react";
import "../styling.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const EngineerCard = ({ name, role, projectCount, profilePicture, github, linkedin, onClick}) => {
    return (
        <div>
            <div className="eng-card">
                <div className="eng-card--thumbnail" onClick={onClick}>
                    <img src={require(`./images/engineers/${profilePicture}`)} />
                </div>
                <div className="eng-card--body" onClick={onClick}>
                  <h1>{name}</h1>
                  <h2>{role}</h2>
                  <h3>Submissions: {projectCount}</h3>
                </div>
                <div className="eng-card--links">
                    <a href={github} target="_blank"><FontAwesomeIcon className="eng-link--item" icon={faGithubSquare} /></a>
                    <a href={linkedin} target="_blank"><FontAwesomeIcon className="eng-link--item" icon={faLinkedin} /></a>
                </div>
            </div>
        </div>
        
    )
}

export default EngineerCard;