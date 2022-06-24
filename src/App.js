import React from "react";
import { Routes, Route } from 'react-router-dom';

import HomePage from "./components/HomePage";
import EngineersPage from "./components/EngineersPage";

function App() {
  return (
    <Routes>
      <Route path="2i-Challenge-Repo/" element={<HomePage />}/>
      <Route path="2i-Challenge-Repo/engineers/" element={<EngineersPage />}/>
    </Routes>    
  );
}

export default App;
