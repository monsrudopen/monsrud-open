import React, { useState, useEffect } from 'react';
import './Clock.css';
import moment from 'moment';
import Tabletop from 'tabletop';

const Clock = ({ timeTillDate, timeFormat }) => {
  const competitionDate = moment(timeTillDate, timeFormat);
  const [now, setNow] = useState(moment());

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
    var tabletop = Tabletop.init({
      key: '1Gc9dCbF_QOC5WdEQ_ZtcnVm_drP3tJ2BR6Di3bCQpss',
      callback: findWinner
    });
  };

  const findWinner = (data, tabletop) => {
    const matchData = data.Kampoppsett.elements;
    const finalMatch = matchData[matchData.length - 1];
    if (!finalMatch['Poeng 2'] == '') {
      if (parseInt(finalMatch['Poeng 1']) > parseInt(finalMatch['Poeng 2'])) {
        setWinner(finalMatch['Spiller 1']);
      } else {
        setWinner(finalMatch['Spiller 2']);
      }
    }
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
      <div className="finished">
        {!winner && (
          <div>
            <div>Følg Monsrud Open 2020 er i gang!</div>
            <div>
              <a href="/Live">Følg live her</a>
            </div>
          </div>
        )}
        {winner && (
          <div>
            <div>Vinner av Monsrud Open 2020: {winner}</div>
            <div>
              <a href="/Live">Se resultatene her</a>
            </div>
          </div>
        )}
        <br></br>
        <div>
          Gi ditt bidrag til Leger Uten Grenser. Vipps til Monsrud Open (109417)
        </div>
      </div>
    );
  }
};

export default Clock;
