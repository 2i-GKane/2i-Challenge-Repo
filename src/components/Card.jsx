import React from "react";
import "../styling.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Card = ({title, mainTechnology, creator, thumbnail, projectLink, projectGH}) => {
    return (
        <div className="card">
            <div className="card--thumbnail">
                <img src={thumbnail} />
            </div>
            <div className="card--body">
                <h1>{title}</h1>
                <h2>Created By: {creator}</h2>
                <h2>Implemented With: {mainTechnology}</h2>
            </div>
            <div className="card--links">
                <a href={projectGH} target="_blank"><FontAwesomeIcon className="link--item" icon={faGithub} /></a>
                <a href={projectLink} target="_blank"><FontAwesomeIcon className="link--item" icon={faGlobe} /></a>
            </div>
        </div>
    )
}

export default Card;