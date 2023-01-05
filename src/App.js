import './App.css';
import { NavBar } from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from './components/Banner'
import {Skills} from './components/Skills'
import {Projects} from './components/Projects'
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, Link} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Design from "./pages/Design";
import { Navbar } from 'react-bootstrap';
import { Footer} from './components/Footer'

function App() {
  return (
    <div className="App ">
  
   
     <NavBar />
     <Banner />
     <Projects />
     <Footer />
   
  
    
<Routes>
  <Route path="/" element={<Navbar />}/>
  <Route path="/Design" element ={<Design />}/>
  <Route path="/Projects" element ={<Projects />}/>
</Routes>
</div>
  );
}

export default App;
