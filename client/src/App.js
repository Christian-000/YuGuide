import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import Home from "./components/Home/Home";
import CreateDeck from "./components/CreateDeck/CreateDeck";
import CardDetail from "./components/CardDetail/CardDetail";

function App() {
  const landing = new LandingPage();
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={landing} />
      <Route path="/home/*" element={<Home />} />
      <Route path="/home/createDeck" element={<CreateDeck />} />
      <Route path="/cardDetail/:id" element={<CardDetail />} />
      <Route path="*" element={<h1> 404 NOT FOUND</h1>}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
