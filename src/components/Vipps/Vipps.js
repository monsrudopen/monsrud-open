import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';
import './Vipps.css';

const Vipps = () => {
  const [sum, setSum] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    UpdateVipps();
    setInterval(UpdateVipps, 20 * 1000);
  }, []);

  const UpdateVipps = () => {
    console.log('This is running');
    var tabletop = Tabletop.init({
      key: '1N9dhf99oMKfSRBOxc9uY2foMYB5SgZjRn3iUiWX2Lwk',
      callback: setVippsInfo
    });
  };
  const setVippsInfo = (data, tabletop) => {
    setSum(data.Vipps.elements[0].Sum);
    setTime(data.Vipps.elements[0].Klokkeslett);
    setDate(data.Vipps.elements[0].Dato);
  };
  return (
    <div className="vippsContent">
      <div className="vippsWrapper">
        <div className="vippsIcon">
          <img
            width="150"
            alt="Kiwi logo"
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
