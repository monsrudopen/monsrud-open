import React from 'react';
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

    console.log(typeof seconds);
    if (now <= then) {
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
      return <div className="finished">Monsurd Open er i gang!</div>;
    }
  }
}

export default Clock;
