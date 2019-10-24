import React, { Component } from 'react';
import './monsrudInfo.css';

class MonsrudInfo extends Component {
  render() {
    return (
      <div className="infoMain">
        <div className="infoContainer">
          <div className="infoImgContainer">
            <img
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
                Marius Monsrud i Ruglandveien. Akkurat når første turnering ble
                avholdt er det ingen som vet. Den første offisielle turneringen
                i dagens format ble holdt i 2014. Det var også det første året
                turneringen samlet inn penger til et veldedig formål.
                Kombinasjonen badminton, samhold og veldedighet har vært viktig
                siden starten. I løpet av den fem første årene har vi samlet inn
                penger til UNICEF, Amnesty, Flyktninghjelpen, Røde Kors og Redd
                Barna. De kan lese mer om hver enkelt innsamling under
                organisasjoner.
                <br />
                <br />
                Styret består av styreleder Marius Monsrud, Erlend Solbakk
                Harbitz, Ferdinand Eide Rode og Øystein Hammersland. I 2017
                samlet vi oss på Gløshaugen i Trondheim. På denne marsdagen ble
                vedtektene skrevet og Monsrud Open ble registrert som en
                frivillig organisasjon i Brønnøysundregisteret. Dette gjorde at
                vi kunne sette opp vår egen Vipps butikk og det ga oss
                muligheten til å samle inn penger gjennom Vipps. Det at vi fikk
                egen bedriftskonto bidro til større åpenhet. Regnskap blir hvert
                år presentert for alle som bidrar.
                <br />
                <br />
                Styret består av flere medlemmer med stor teknisk kompetanse.
                Dette har gjort at vi har kunne laget denne nettsiden. I tillegg
                er vi opptatt av å være synlige i sosiale medier. Vi ønsker å
                være proaktive og dermed bidra til å samle inn så mye penger som
                mulig til et godt veldedig formål. Årets organisasjon blir valgt
                av styret i forkant av turneringen. Når folk blir spurt hvorfor
                de ikke engasjerer seg mer svarer mer enn halvparten at det er
                fordi ingen har spurt dem. Vi ønsker å være de som spør. Våre
                bidrag kommer derfor i all hovedsak fra deltagere, familie og
                venner.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MonsrudInfo;
