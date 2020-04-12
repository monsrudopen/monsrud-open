import React, { Component } from 'react';
import Clock from '../components/Clock/Clock';
import FrontPagePosts from '../components/Posts/FrontPagePosts';
import MO2020promov2 from '../img/vid/MO2020promov2.mp4';

import './homePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="main">
          <div className="fronPageBannerContainer">
            <h4>15. august 2020</h4>
            <Clock
              timeTillDate="15 07 2020, 13:00"
              timeFormat="DD MM YYYY, HH:mm"
            />
            <div className="HomePageBox">
              <div className="videobox">
                <video width="70%" height="600px" controls>
                  <source src={MO2020promov2} type="video/mp4"></source>
                </video>
              </div>
              <div className="News">
                <div className="NewsHeadline">
                  Endringer i styrets sammensetting
                </div>
                <div className="NewsHeadlineDate">7. april 2020</div>
                <div className="NewsIndex">
                  Under styremøtet 7/4 fikk styremedlem Øystein Hammersland
                  støtte i sitt forslag om å trekke seg fra styret. Styret
                  består nå av styreleder Marius Monsrud, Erlend Solbakk Harbitz
                  og Ferdinand Eide Rode
                </div>
                <div className="NewsHeadline">Endelig opptelling</div>
                <div className="NewsHeadlineDate">1. oktober 2019</div>
                <div className="NewsIndex">
                  Det er gledelig å kunne annonsere at det ble samlet inn kr 17
                  701,08. Dette er ny rekord og styret vil rette en takk til
                  alle deltakere, tilskuere, givere og andre personer som har
                  engasjert seg på ulike måter.
                </div>
                <div className="NewsHeadline">Vinner av Monsrud Open 2019</div>
                <div className="NewsHeadlineDate">3. august 2019</div>
                <div className="NewsIndex">
                  Ferdinand Eide Rode gikk av med seieren i år etter seier over
                  Marius Monsrud i finalen. Han blir da den andre personen som
                  har vunnet turneringen 2 ganger, etter Jakob Hardersen Prydz.
                </div>
                <div className="NewsHeadline">Annonsering av sponsor</div>
                <div className="NewsHeadlineDate">30. juli 2019</div>
                <div className="NewsIndex">
                  Vi er strålende fornøyde over å kunne annonsere at Kiwi er
                  sponsor av årets turnering. Vi takker for bidraget.
                </div>
                <div className="NewsHeadline">
                  Annonsering av årets mottakerorganisasjon
                </div>
                <div className="NewsHeadlineDate">29. juli 2019</div>
                <div className="NewsIndex">
                  Plan Norge's Jentefond er valgt ut som organisasjon for 2019.
                  Vi gleder oss til å samle inn penger med dere.
                </div>
                <div className="NewsHeadline">Grasrotandel</div>
                <div className="NewsHeadlineDate">29. juli 2019</div>
                <div className="NewsIndex">
                  Det er nå mulig å velge Monsrud Open som grasrotmottaker hos
                  Norsk Tipping. SØk opp "Monsrud Open" eller vårt
                  organisasjonsnummer: 918 707 611
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="componentElements">
          <FrontPagePosts />
        </div>
      </div>
    );
  }
}

export default HomePage;
