import React from "react";
import { useState } from "react";
import challenges from "../challenges.json";
import engineers from '../engineers.json';
import ChallengeCard from "./ChallengeCard";

import SearchBar from "./SearchBar";

const ChallengesPage = ({ pageSetter }) => {
    const[searchStr, setSearchStr] = useState("");

    let matchingChallenges = challenges;
    const fetchChallenges = () => {
        if(searchStr !== "") {
            matchingChallenges = [];
            for(const challenge in challenges){
                let challengeTitle = challenges[challenge].title.toLowerCase();
                let challengeStart = challenges[challenge]['start-date'];
                let search = searchStr.toLowerCase();
    
                if(challengeTitle.includes(search) || challengeStart.includes(search)){
                    matchingChallenges[challenge] = challenge;
                }
            }
        }
      }

     fetchChallenges();

    const getChallengerFromID = (projectChallenger) => {
        let challenger = projectChallenger;
        if(projectChallenger.startsWith("id:")){
          let challengerID = projectChallenger.replace('id:','');
  
          if(engineers[challengerID] !== undefined) challenger = engineers[challengerID]['name'];
        }
  
        return challenger;
      }

    const getChallengeCards = () => {
        const cards = [];

        for(const challengeID in matchingChallenges){
            const challenge = challenges[challengeID];

            const startDate = challenge['start-date'],
            endDate = challenge['end-date'],
            title = challenge['title'],
            challenger = getChallengerFromID(challenge['challenger']);

            let cardElement = <ChallengeCard
            startDate={startDate}
            endDate={endDate}
            title={title}
            challenger={challenger} />

            cards.push(cardElement);
        }

        if(cards.length <= 0) return <h1 className="no-result">No engineers found!</h1>

        return cards;
    }

    return (
        <div>
            <div className="page-title">
            <h1>2i Coding Challenge Repository</h1>
            <h2>Challenges History</h2>
          </div>

          <SearchBar updateSearch={setSearchStr}/>
          <div className="homepage-links">
              <a className="homepage-links"><button onClick={() => pageSetter("home")}>Submissions</button></a>
              <a className="homepage-links"><button onClick={() => pageSetter("engineers")}>Engineers</button></a>
          </div>

          <div className="container">
          {getChallengeCards()}
        </div>
        </div>
    )
}

export default ChallengesPage;