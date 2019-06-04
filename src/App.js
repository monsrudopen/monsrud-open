import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Rank from './components/Rank/Rank';
import About from './components/About/About';
import Donations from './components/Donations/Donations';
import Clock from './components/Clock/Clock';

import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/Rank" component={Rank} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Donations" component={Donations} />
        <Clock
          timeTillDate="03 07 2019, 13:00"
          timeFormat="DD MM YYYY, HH:mm"
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
