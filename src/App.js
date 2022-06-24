import React from "react";
import items from "./config.json"

import Card from "./components/Card";
import "./styling.css";

function App() {

  let cardID = 0;
  return (
    <div>
      <h1 className="page-title">2i Coding Challenge Submissions</h1>

      <div className="container">
      {items.map((item) => {
        cardID++;

        let title = item.title,
        creator = item.creator,
        mainTechnology = item["main-technology"],
        thumnail = item.thumbnail,
        projectLink = item['project-link'],
        projectGH = item['project-gh'];

        return <Card key={cardID} title={title} mainTechnology={mainTechnology} creator={creator} thumbnail={thumnail} projectLink={projectLink} projectGH={projectGH}/>
      })}
    </div>
    </div>

    
  );
}

export default App;
