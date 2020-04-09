import React, { Component } from 'react';
import './monsrudInfo.css';

class MonsrudInfo extends Component {
  render() {
    return (
      <div className="infoMain">
        <div className="infoContainer">
          <div className="infoImgContainer">
            <img
              alt="gruppebilde"
              className="image"
              src={require('./../../img/images/group2018.jpg')}
            />
          </div>
          <div className="infoTextContainer">
            <div className="textAlignBox">
              <div className="infoTitle">
                <h2>Vår historie</h2>
              </div>
              <div className="infoTextBlock">
                Monsrud Open startet som en badmintonturnering i hagen til
                Marius Monsrud i Ruglandveien, hvor det opp gjennom årene har
                blirr arrangert mange uformelle turneringer. Den første
                offisielle turneringen i dagens format, med innsamling til et
                veldeig formål, ble holdt i 2014. Kombinasjonen badminton,
                samhold og veldedighet har vært viktig siden starten. I løpet av
                den fem første årene samlet inn penger til UNICEF, Amnesty,
                Flyktninghjelpen, Røde Kors og Redd Barna. Interesserte kan lese
                mer om hver enkelt innsamling under tidligere turneringer.
                <br />
                <br />
                Organisasjonen ble formelt stiftet som en frivillig organisasjon
                på Gløshaugen i Trondheim 4. mars 2017 og består i dag av
                styreleder Marius Monsrud, Erlend Solbakk Harbitz og Ferdinand
                Eide Rode. Styret er opptatt av utvikling og de har derfor fått
                opprettet egen bedriftskonto og vipps butikk for organisasjonen.
                Dette gir større handlingsrom til å samle inn penger, og større
                åpenhet vedrørende presentering av årsregnskap til interesserte.
                <br />
                <br />
                Monsrud Open ønsker å være proaktive i vår innsamling av penger
                til et veldedig formål og baseres oss på en undersøkelse som
                viser at når folk blir spurt hvorfor de ikke engasjerer seg mer
                svarer mer enn halvparten at det er fordi ingen har spurt dem.
                Vi ønsker å være de som spør. Våre bidrag kommer derfor i all
                hovedsak fra deltagere, familie og venner.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MonsrudInfo;
