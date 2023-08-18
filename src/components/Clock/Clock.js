import React, { useState, useEffect } from 'react';
import './Clock.css';
import moment from 'moment';
import Papa from 'papaparse';

const Clock = ({ timeTillDate, timeFormat }) => {
  const competitionDate = moment(timeTillDate, timeFormat);
  const [now, setNow] = useState(moment());
  const [dataLoaded, setDataLoaded] = useState(false);

  const [winner, setWinner] = useState(undefined);

  // Update now time every 1000 ms
  useEffect(() => {
    UpdateWinner();
    const interval = setInterval(() => {
      setNow(moment());
    }, 1000);

    const interval2 = setInterval(UpdateWinner, 5 * 1000);
    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);

  const UpdateWinner = () => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vToSNHK1ByiCZuIR_CnxS3pn29qYKQOUgNhp4DFH3SMn9EjvCMOhL1aFGlEiB9ryt2HpSpgVdA1YKgu/pub?gid=614059474&single=true&output=csv',
      {
        download: true,
        header: true,
        complete: results => findWinner(results.data)
      }
    );
  };

  const findWinner = data => {
    const matchData = data.filter(m => m.Kampnr);
    const finalMatch = matchData[matchData.length - 1];
    if (!finalMatch['Poeng 2'] == '') {
      if (parseInt(finalMatch['Poeng 1']) > parseInt(finalMatch['Poeng 2'])) {
        setWinner(finalMatch['Spiller 1']);
      } else if (
        parseInt(finalMatch['Poeng 1']) < parseInt(finalMatch['Poeng 2'])
      ) {
        setWinner(finalMatch['Spiller 2']);
      } else {
        setWinner(undefined);
      }
    }
    setDataLoaded(true);
  };

  if (competitionDate - now > 0) {
    const diffTime = competitionDate.diff(now);
    const duration = moment.duration(diffTime);
    const months = duration
      .months()
      .toString()
      .padStart(2, '0');
    const days = duration
      .days()
      .toString()
      .padStart(2, '0');
    const hours = duration
      .hours()
      .toString()
      .padStart(2, '0');
    const minutes = duration
      .minutes()
      .toString()
      .padStart(2, '0');
    const seconds = duration
      .seconds()
      .toString()
      .padStart(2, '0');
    return (
      <div>
        <div className="countdown-wrapper">
          <div className="countdown-item">
            {months}
            <span>{months !== '01' ? 'Måneder' : 'Måned'}</span>
          </div>
          <div className="countdown-item">
            {days}
            <span>{days !== '01' ? 'Dager' : 'Dag'}</span>
          </div>
          <div className="countdown-item">
            {hours}
            <span>{hours !== '01' ? 'Timer' : 'Time'}</span>
          </div>
          <div className="countdown-item">
            {minutes}
            <span>{minutes !== '01' ? 'Minutter' : 'Minutt'}</span>
          </div>
          <div className="countdown-item">
            {seconds}
            <span>{seconds !== '01' ? 'Sekunder' : 'Sekund'}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={dataLoaded ? 'finished data-loaded' : 'finished'}>
        {!winner && (
          <div className="finishedMainContent">
            <div className="finishedTitle">Monsrud Open 2023 er i gang!</div>
            <div className="liveButton">
              <a href="/Live">Følg live her!</a>
            </div>
          </div>
        )}
        {winner && (
          <div className="finishedMainContent">
            <div className="finishedTitle">
              Vinner av Monsrud Open 2023: {winner}
            </div>
            <div className="liveButton">
              <a href="/Live">Se resultatene her</a>
            </div>
          </div>
        )}
        <br></br>
        <div>
          Gi ditt bidrag til WWF. Vipps til Monsrud Open (109417) eller {''}
          <a
            href="https://qr.vipps.no/28/2/05/031/-PlVzDcjp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>trykk her</u>
          </a>
        </div>
      </div>
    );
  }
};

export default Clock;
