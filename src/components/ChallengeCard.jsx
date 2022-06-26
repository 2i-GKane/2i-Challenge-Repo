import React from "react";

const ChallengeCard = ({ startDate, endDate, title, challenger }) => {
    return(
        <div className="ch-card">
            <div className="card--body">
                <h1>{title}</h1>
                <h2>Start: {startDate}</h2>
                <h2>End: {endDate}</h2>
                <h2>Challenger: {challenger} </h2>
            </div>
        </div>
    )
}

export default ChallengeCard;