// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Game } from "./pages/Download";
import { NotFound } from "./pages/NotFound";
import { Characters } from "./pages/Characters";
import { CharactersPages } from "./pages/characters/CharactersPage";
import { AIPolicy } from "./pages/AIPolicy";
import { PersonalityTest } from "./pages/PersonalityTest";
import { Zones } from "./pages/Zones";
import logo from "./icon.png";


function App (){
  return (
    <>
    <div>
      <img src={logo} alt="Sonic Shift Logo" id="logo" />
      <h1 class="title is-3 sonic-title glitch">Sonic Shift</h1>
    </div>
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        {/* <li><NavLink to="/download">Download</NavLink></li> */}
        <li><NavLink to="/game">Game</NavLink></li>
        <li><NavLink to="/plot">Story</NavLink></li>
        <li><NavLink to="/characters">Characters</NavLink></li>
        <li><NavLink to="/ai">AI Policy</NavLink></li>
      </ul>
    </nav>
    <hr />
  <Routes>
    <Route path="/" element={<Home /> }/>
    <Route path="/download" element={<Game />} />
    <Route path="/characters" index element={<Characters />} />
    <Route path="/characters/:name" index element={<CharactersPages />} />
    <Route path="/ai" index element={<AIPolicy />} />
    <Route path="/plot" index element={<PersonalityTest />} />
    <Route path="/game" index element={<Zones />} />
    
    <Route path="*" element={<NotFound />} />
  </Routes>
  </>
  )
}

export default App;
