import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import {
  CompetitionPage,
  CompetitionView
} from './components/Competitions/Competitions';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import HomePage from './HomePage/HomePage';

import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter forceRefresh={true}>
        <Header />
        <div className={styles.AppContent}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Competitions" component={CompetitionPage} />
          <Route exact path="/Competitions/:year" component={CompetitionView} />
          <Route exact path="/About" component={About} />
          <Route exact path="/News" component={News} />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
