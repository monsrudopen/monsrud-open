import React, { useState, useEffect } from 'react';
import challonge from 'challonge';

import './Challonge.css';

// Gikk over til å bare bruke sånn arrowfunksjon istedenfor klasse. Mye enklere.
const Challonge = () => {
  // Her setter jeg opp state. To forskjellige variabler. nextMatch og prevMatches holder verdiene. Det kan du
  // bruke når du vil. setNextMatch og setPrevMatches er funksjoner du bruker for å oppdatere verdiene.
  // Det som sendes inn til useState er initiell verdi på state.
  const [nextMatch, setNextMatch] = useState(undefined);
  const [players, setPlayers] = useState(undefined);
  const [prevMathces, setPrevMatches] = useState([]);
  const [previousMatch, setPreviousMatch] = React.useState([]);

  const client = challonge.createClient({
    apiKey: process.env.REACT_APP_CHALLONGE_API_KEY
  });

  useEffect(() => {
    client.participants.index({
      id: '8305339',
      callback: (err, data) => {
        setPlayers(data);
        console.log(data);
      }
    });
    client.matches.index({
      id: '8305339',
      callback: (err, data) => {
        UpdateMatchInfo(data);
        console.log(data);
      }
    });
  });

  const GetPlayerName = name => {
    console.log('State players: ' + players);
    Object.keys(players).forEach(function(key) {
      if (players[key].participant.groupPlayerIds) {
      }
    });
  };

  const UpdateMatchInfo = data => {
    Object.keys(data).forEach(function(key) {
      if (data[key].match.state === 'complete') {
        //setPrevMatches(prevMathces);
        //const player1 = GetPlayerName(data[key].match.player1Id);
        const player2 = data[key].match.player2Id;

        // {
        //   player1: '',
        //   player2: '',
        //   matchId: undefined,
        //   score: ''
        // }
      }
    });
  };

  return (
    <div className="ChallongeContainer">
      <div className="MatchTitle">KOMMENDE KAMPER</div>
      <div class="NextMatchWrapper">
        <div className="NextMatch">
          <div className="Player">Name Here</div>
          <div className="PlayerScore">VS</div>
          <div className="Player">Name Here</div>
        </div>
        <div className="MatchLine" />
      </div>
      <div className="MatchTitle">TIDLIGERE KAMPER</div>
      <div className="PreviousMatches">
        <div className="prevMatch">
          <div className="Player">Ole petter</div>
          <div className="PlayerScore">2-2</div>
          <div className="Player">Knut hamsun</div>
        </div>
        <div className="MatchLine" />

        <div className="prevMatch">
          <div className="Player">Geir roger</div>
          <div className="PlayerScore">3-2</div>
          <div className="Player">Nils freim</div>
        </div>
        <div className="MatchLine" />

        <div className="prevMatch">
          <div className="Player">Ine sotre</div>
          <div className="PlayerScore">5-2</div>
          <div className="Player">Mari bjerke</div>
        </div>
        <div className="MatchLine" />
      </div>
    </div>
  );
};

export default Challonge;
