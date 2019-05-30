import React from 'react';
import './App.css';
import Rank from './components/Rank/Rank';
import About from './components/About/About';
import Header from './components/Header/Header';

import {
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
      <Route exact path="/Rank" component={Rank}/>
      <Route exact path="/About" component={About}/> 
    </BrowserRouter>
    </div>
  );
}

export default App;
