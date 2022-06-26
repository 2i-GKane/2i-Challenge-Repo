import React from "react";
import { useState } from "react";
import HomePage from "./components/HomePage";
import EngineersPage from "./components/EngineersPage";
import ChallengesPage from "./components/ChallengesPage";

function App() {
  const[selectedPage, setSelectedPage] = useState("home");

  if(selectedPage === "home"){
    return <HomePage pageSetter={setSelectedPage}/>
  } else if(selectedPage === "engineers"){
    return <EngineersPage pageSetter={setSelectedPage}/>
  } else if(selectedPage === "challenges"){
    return <ChallengesPage pageSetter={setSelectedPage}/>
  }
}

export default App;
