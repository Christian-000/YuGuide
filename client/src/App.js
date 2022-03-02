import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import Home from "./components/Home/Home";
import CreateDeck from "./components/CreateDeck/CreateDeck";
import CardDetail from "./components/CardDetail/CardDetail";

function App() {
  const landing = new LandingPage();
  const home = new Home();
  const deck = new CreateDeck();
  const cardDetail = new CardDetail();
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={landing} />
      <Route path="/home/*" element={home} />
      <Route path="/home/createDeck" element={deck} />
      <Route path="/cardDetail/:id" element={cardDetail} />
      <Route path="*" element={<h1> 404 NOT FOUND</h1>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
