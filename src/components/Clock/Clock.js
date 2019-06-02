import React, { Component } from 'react';
import './Clock.css';
import moment from 'moment';

class Clock extends React.Component {
  state = {
    months: undefined,
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const Clock = moment(then - now);
      const months = Clock.format('MM');
      const days = Clock.format('DD');
      const hours = Clock.format('HH');
      const minutes = Clock.format('mm');
      const seconds = Clock.format('ss');

      this.setState({ months, days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { months, days, hours, minutes, seconds } = this.state;
    const { timeTillDate, timeFormat } = this.props;
    const then = moment(timeTillDate, timeFormat);
    const now = moment();

    if (now < then) {
      return (
        <div>
          <h1>Årets Monsrud Open er i gang om:</h1>
          <div className="countdown-wrapper">
            <div className="countdown-item">
              {months}
              <span>Måned</span>
            </div>
            <div className="countdown-item">
              {days}
              <span>Dag(er)</span>
            </div>
            <div className="countdown-item">
              {hours}
              <span>Time(r)</span>
            </div>
            <div className="countdown-item">
              {minutes}
              <span>Minutt(er)</span>
            </div>
            <div className="countdown-item">
              {seconds}
              <span>Sekund(er)</span>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="finished">Monsurd Open er i gang!</div>;
    }
  }
}

export default Clock;
