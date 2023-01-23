import React from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import {Headbar} from './components/navbar';
import {Base} from './components/base';
import { Home } from './components/Home';
import { About } from './components/About';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import { Rough2 } from "./components/rough2";


function App() {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
