import React, { useState, useEffect } from 'react';
import './Clock.css';
import moment from 'moment';

const Clock = ({ timeTillDate, timeFormat }) => {
  const competitionDate = moment(timeTillDate, timeFormat);
  const [now, setNow] = useState(moment());

  // Update now time every 1000 ms
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(moment());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

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
    return <div className="finished">Monsrud Open 2020 er i gang!</div>;
  }
};

export default Clock;
