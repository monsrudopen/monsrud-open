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
                  Arrangementsdato for årets turnering
                </div>
                <div className="NewsHeadlineDate">13. april 2020</div>
                <div className="NewsIndex">
                  Arrangementsdato for Monsrud Open 2020 er 15. august. Styret
                  ønsker å presisere at det tas høyde for at årets arrangement
                  kan bli berørt av regjeringens tiltak mot koronaviruset.
                  Dersom det skulle skje vil vi komme tilbake angående hva som
                  skjer med arrangementet.
                </div>
                <div className="NewsHeadline">Lansering av ny nettside</div>
                <div className="NewsHeadlineDate">13. april 2020</div>
                <div className="NewsIndex">
                  Vi har gleden av å lansere en ny nettside, med mange nye
                  funksjoner. Den vil fortsette å få tilført komponenter frem
                  mot årets turnering. Vi vil samtidig igjen beklage for at
                  nettsiden ikke var fungerende under fjorårets turnering, men
                  håper at den nye turneringen vil gjøre opp for det.
                </div>
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
                <div className="NewsHeadline">Dato for Monsurd Open 2019</div>
                <div className="NewsHeadlineDate">6. mai 2019</div>
                <div className="NewsIndex">
                  Monsrud Open 2019 vil bli avholdt 3. august. Vi anbefaler at
                  du setter av datoen.
                </div>
                <div className="NewsHeadline">Endelig innsamlingssum</div>
                <div className="NewsHeadlineDate">1. september 2018</div>
                <div className="NewsIndex">
                  Sammen klarte vi å samle inn kr 12 669 til Redd Barna. Vi er
                  henrykt over at så mange vil være med og bidra.
                </div>
                <div className="NewsHeadline">Vinner av Monsrud Open 2018</div>
                <div className="NewsHeadlineDate">11. august 2018</div>
                <div className="NewsIndex">
                  Marius Monsrud gikk seirende ut av finalen i Monsrud Open 2018
                  mot Ferdinand Eide Rode. Han fikk sin revansje fra 2016 og tok
                  dermed sin første seier i turneringen.
                </div>
                <div className="NewsHeadline">Mottakerorganisasjon 2018</div>
                <div className="NewsHeadlineDate">8. august 2018</div>
                <div className="NewsIndex">
                  Redd Barna er valgt ut til å motta midlene fra årets
                  turnering.
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
