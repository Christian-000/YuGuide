import React from "react";
import { Switch, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import Home from "./components/Home/Home";
import CreateDeck from "./components/CreateDeck/CreateDeck";
import CardDetail from "./components/CardDetail/CardDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home/*" element={<Home />} />
      <Route path="/home/createDeck" element={<CreateDeck />} />
      <Route path="/cardDetail/*" element={<CardDetail />} />
      <Route path="*" element={<h1> 404 NOT FOUND</h1>}></Route>
    </Routes>
  );
}

export default App;
