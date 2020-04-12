import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Competitions from './components/Competitions/Competitions';
import About from './components/About/About';
import Donations from './components/Donations/Donations';
import Footer from './components/Footer/Footer';
import HomePage from './screens/HomePage';
import LivePage from './screens/LivePage';

import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header />
        <div className={styles.AppContent}>
          <Route exact path="/" component={LivePage} />
          <Route exact path="/Competitions" component={Competitions} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Donations" component={Donations} />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
