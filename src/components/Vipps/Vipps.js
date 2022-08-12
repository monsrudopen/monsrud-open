import React, { useState, useEffect } from 'react';
import './Vipps.css';
import Papa from 'papaparse';

const Vipps = () => {
  const [sum, setSum] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    UpdateVipps();
    setInterval(UpdateVipps, 20 * 1000);
  }, []);

  const UpdateVipps = () => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSGNG5fMJkDLSQzE0MLFYhJO4LATHBj6WOLRxjqFPNzHiQ1IOZOy43xmJEB8zhx3VFvKD-ItUzJpb3-/pub?gid=1279119526&single=true&output=csv',
      {
        download: true,
        header: true,
        complete: results => setVippsInfo(results.data)
      }
    );
  };

  const setVippsInfo = data => {
    setSum(data[0].Sum);
    setTime(data[0].Klokkeslett);
    setDate(data[0].Dato);
  };
  return (
    <div className="vippsContent">
      <div className="vippsWrapper">
        <div className="vippsIcon">
          <img
            width="150"
            alt="Vipps logo"
            src={require('./../../img/icons/vipps_logo_rgb.png')}
          />{' '}
          <div className="vippsNumber">
            til <b>109417</b>
          </div>
        </div>

        <div className="vippsSum">
          <div className="sumText">Innsamlet til nå </div>
          <div className="sum">{sum} Kr</div>
        </div>
        <div className="update">
          (Sist oppdatert: {time}, {date})
        </div>
      </div>
    </div>
  );
};

export default Vipps;
