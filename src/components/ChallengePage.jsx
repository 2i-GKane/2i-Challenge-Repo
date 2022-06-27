import React from "react";
import submissions from "../submissions.json";
import challenges from "../challenges.json";
import Card from "./SubmissionCard";

const ChallengePage = ({ revertPage, challengeID }) => {
    const getMatchingSubmissions = () => {
        const matchingSubmissions = [];

        for(const submissionID in submissions){
            const submission = submissions[submissionID];

            if(submission.title === `id:${challengeID}`) matchingSubmissions.push(submission);
        }

        return matchingSubmissions;
    }

    const getSubmissionCards = () => {
        let cards = [];
        const matchingSubmissions = getMatchingSubmissions();
  
        for(const submissionID in matchingSubmissions){
          const submission = matchingSubmissions[submissionID];

          let submissionTitle = challenges[challengeID].title,
          mainTechnology = submission["main-technology"],
          creator = submission["creator"],
          thumbnail = submission["thumbnail"],
          projectLink = submission["project-link"],
          projectGH = submission["project-gh"];

          let cardElem = <Card
          title={submissionTitle}
          mainTechnology={mainTechnology}
          creator={creator}
          thumbnail={thumbnail}
          projectLink={projectLink}
          projectGH={projectGH}/>
  
          cards.push(cardElem);
      }
  
      if(cards.length <= 0) return <h1 className="no-result">No submissions found for {challenges[challengeID].title}!</h1>
  
        return cards;
      }

    

    return (
        <div>
          <div className="page-title">
            <h1>2i Coding Challenge Repository</h1>
            <h2>Submissions For {challenges[challengeID].title}</h2>
          </div>

          <div className="homepage-links">
              <a className="homepage-links"><button onClick={revertPage}>Challenges</button></a>
          </div>
          
          <div className="container">
          {getSubmissionCards()}
        </div>
      </div>
    )
}

export default ChallengePage;