import React, { useState } from 'react';
import challonge from 'challonge';

import './Challonge.css';

// Gikk over til å bare bruke sånn arrowfunksjon istedenfor klasse. Mye enklere.
const Challonge = () => {
  // Her setter jeg opp state. To forskjellige variabler. nextMatch og prevMatches holder verdiene. Det kan du
  // bruke når du vil. setNextMatch og setPrevMatches er funksjoner du bruker for å oppdatere verdiene.
  // Det som sendes inn til useState er initiell verdi på state.
  const [nextMatch, setNextMatch] = useState(undefined);
  const [prevMathces, setPrevMatches] = useState([]);

  const client = challonge.createClient({
    apiKey: process.env.REACT_APP_CHALLONGE_API_KEY
  });

  client.participants.index({
    id: '8305339',
    callback: (err, data) => {
      console.log(data);
    }
  });

  client.matches.index({
    id: '8305339',
    callback: (err, data) => {
      setPrevMatches(data);
      // this.UpdateMatchInfo(data);
    }
  });

  const UpdateMatchInfo = data => {
    const arr = [];
    console.log(this.prevMatches);
    Object.keys(data).forEach(function(key) {
      arr.push(data[key]);
      if (data[key].match.state === 'complete') {
        this.SetState({ prevMatches: data[key] });
      }
    });
  };

  return (
    <div className="ChallongeContainer">
      <div className="MatchTitle">Kommende kamper</div>
      <div className="NextMatch">
        <div className="Player">Name Here</div>
        <div className="Player">VS</div>
        <div className="Player">Name Here</div>
      </div>
      <div className="MatchTitle">Tidligere kamper</div>
      <div className="PreviousMatches">
        <div className="prevMatch">
          <div className="Player">Name Here</div>
          <div className="Player">VS</div>
          <div className="Player">Name Here</div>
        </div>
        <div className="prevMatch">
          <div className="Player">Name Here</div>
          <div className="Player">VS</div>
          <div className="Player">Name Here</div>
        </div>
        <div className="prevMatch">
          <div className="Player">Name Here</div>
          <div className="Player">VS</div>
          <div className="Player">Name Here</div>
        </div>
      </div>
    </div>
  );
};

export default Challonge;
