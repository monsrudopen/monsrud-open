import React, { useState, useEffect } from 'react';
import challonge from 'challonge';

import './Challonge.css';
// Gikk over til å bare bruke sånn arrowfunksjon istedenfor klasse. Mye enklere.
const Challonge = () => {
  // Her setter jeg opp state. To forskjellige variabler. nextMatch og prevMatches holder verdiene. Det kan du
  // bruke når du vil. setNextMatch og setPrevMatches er funksjoner du bruker for å oppdatere verdiene.
  // Det som sendes inn til useState er initiell verdi på state.
  const [allMatches, setAllMatches] = useState(undefined);
  const [players, setPlayers] = useState([]);
  const [prevMathces, setPrevMatches] = useState([]);
  const [nextMatch, setNextMatch] = React.useState(undefined);

  const client = challonge.createClient({
    apiKey: process.env.REACT_APP_CHALLONGE_API_KEY
  });

  useEffect(() => {
    client.participants.index({
      id: '8305339',
      callback: (err, playerData) => {
        //setPlayers(data);
        client.matches.index({
          id: '8305339',
          callback: (err, data) => {
            UpdateMatchInfo(data, playerData);
          }
        });
      }
    });
  }, []);

  const GetPlayerName = (id, playerData) => {
    let name = undefined;
    Object.keys(playerData).forEach(function(key) {
      if (playerData[key].participant.groupPlayerIds['0'] == id) {
        name = playerData[key].participant.name;
      }
    });
    return name;
  };

  const UpdateMatchInfo = (data, playerData) => {
    let arr = [];
    let match = [];
    Object.keys(data).forEach(function(key) {
      if (data[key].match.state === 'complete') {
        if (prevMathces.length == 3) {
          arr.shift();
        }
        arr.push({
          player1: GetPlayerName(data[key].match.player1Id, playerData),
          player2: GetPlayerName(data[key].match.player2Id, playerData),
          score: data[key].match.scoresCsv
        });
      } else if (data[key].match.state == 'open' && !nextMatch) {
        setNextMatch({
          player1: GetPlayerName(data[key].match.player1Id, playerData),
          player2: GetPlayerName(data[key].match.player2Id, playerData)
        });
      }
    });
    setPrevMatches(arr);
  };

  return (
    <div className="ChallongeContainer">
      <div className="MatchTitle">KOMMENDE KAMP</div>
      <div className="NextMatchWrapper">
        {nextMatch && (
          <div className="NextMatch">
            <div className="Player">{nextMatch.player1}</div>
            <div className="PlayerScore">VS</div>
            <div className="Player">{nextMatch.player2}</div>
          </div>
        )}
        <div className="MatchLine" />
      </div>
      <div className="MatchTitle">TIDLIGERE KAMPER</div>
      <div className="PreviousMatches">
        {prevMathces.length !== 0 ? (
          prevMathces.map((match, index) => {
            return (
              <div key={index}>
                <div className="prevMatch">
                  <div className="Player">{match.player1}</div>
                  <div className="PlayerScore">{match.score}</div>
                  <div className="Player">{match.player2}</div>
                </div>
                <div className="MatchLine" />
              </div>
            );
          })
        ) : (
          <div>No previous matches</div>
        )}
      </div>
    </div>
  );
};

export default Challonge;
