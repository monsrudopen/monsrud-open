import React, { Component } from 'react';
import challonge from 'challonge';

import './Challonge.css';

class Challonge extends Component {
  state = {
    nextMatch: undefined,
    prevMatches: []
  };
  componentDidMount() {
    console.log('API_KEY: ' + process.env.REACT_APP_CHALLONGE_API_KEY);
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
        this.setState({ prevMatches: data });
        this.UpdateMatchInfo(data);
      }
    });
  }

  UpdateMatchInfo = data => {
    const arr = [];
    console.log(this.prevMatches);
    Object.keys(data).forEach(function(key) {
      arr.push(data[key]);
      if (data[key].match.state == 'complete') {
        this.SetState({ prevMatches: data[key] });
      }
    });
  };

  render() {
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
  }
}

export default Challonge;
