import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Competitions from './components/Competitions/Competitions';
import About from './components/About/About';
import Donations from './components/Donations/Donations';
import Footer from './components/Footer/Footer';
import Clock from './components/Clock/Clock';
import HomePage from './screens/HomePage';

import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Competitions" component={Competitions} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Donations" component={Donations} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
