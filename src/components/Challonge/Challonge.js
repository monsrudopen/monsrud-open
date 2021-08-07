import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';

import './Challonge.css';
const Challonge = () => {
  const [allMatches, setAllMatches] = useState([]);
  const [groupA, setGroupA] = useState([]);
  const [groupB, setGroupB] = useState([]);
  const [groupC, setGroupC] = useState([]);
  const [groupD, setGroupD] = useState([]);
  const [groupE, setGroupE] = useState([]);
  const [groupF, setGroupF] = useState([]);
  const [name1, setName1] = useState();
  const [name2, setName2] = useState();
  const [nextName1, setNextName1] = useState();
  const [nextName2, setNextName2] = useState();

  useEffect(() => {
    UpdateMatchInfo();
    setInterval(UpdateMatchInfo, 15 * 1000);
  }, []);

  const UpdateMatchInfo = () => {
    var tabletop = Tabletop.init({
      key: '1N9dhf99oMKfSRBOxc9uY2foMYB5SgZjRn3iUiWX2Lwk',
      callback: showInfo
    });
  };

  const showInfo = (data, tabletop) => {
    console.log('Running update!');
    setAllMatches(data.Kampoppsett.elements);
    setGroupA(data.GruppeA.elements);
    setGroupB(data.GruppeB.elements);
    setGroupC(data.GruppeC.elements);
    setGroupD(data.GruppeD.elements);
    setGroupE(data.GruppeE.elements);
    setGroupF(data.GruppeF.elements);
    GetCurrentAndNextMatch(data.Kampoppsett.elements);
  };

  const GetCurrentAndNextMatch = matchData => {
    console.log(matchData.length);
    for (var i = 0; i < matchData.length; i++) {
      if (matchData[i]['Poeng 2'] == '') {
        setName1(matchData[i]['Spiller 1']);
        setName2(matchData[i]['Spiller 2']);
        setNextName1(matchData[i + 1]['Spiller 1']);
        setNextName2(matchData[i + 1]['Spiller 2']);
        return;
      }
    }
  };

  return (
    <div className="ChallongeContainer">
      <div className="tableWrapper">
        <div className="currentMatch">
          <div className="ChallongeTitle">Aktiv Kamp</div>
          <div className="currentWrapper">
            <div className="currentContent front">{name1}</div>
            <div className="divider">-</div>
            <div className="currentContent back">{name2}</div>
          </div>
        </div>
        <div className="currentMatch">
          <div className="nextMatchTitle">Neste Kamp</div>
          <div className="nextWrapper">
            <div className="nextContent front">{nextName1}</div>
            <div className="divider">-</div>
            <div className="nextContent back">{nextName2}</div>
          </div>
        </div>
        <div className="ChallongeTitle">Gruppeoversikt</div>

        <div className="groupWrapper">
          <div className="singleTableWrap">
            <table>
              <thead>
                <tr>
                  <th>A</th>
                  <th>Spiller</th>
                  <th>Spilt</th>
                  <th>Seier</th>
                  <th>Tap</th>
                  <th>For</th>
                  <th>Mot</th>
                  <th>Diff</th>
                  <th>Poeng</th>
                </tr>
              </thead>
              <tbody>
                {groupA.length !== 0 ? (
                  groupA.map((listValue, index) => {
                    return (
                      <tr key={index}>
                        <td>{listValue.A}</td>
                        <td>{listValue.Spiller}</td>
                        <td>{listValue.Spilt}</td>
                        <td>{listValue.Seier}</td>
                        <td>{listValue.Tap}</td>
                        <td>{listValue.For}</td>
                        <td>{listValue.Mot}</td>
                        <td>{listValue.Differanse}</td>
                        <td>{listValue.Poeng}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="singleTableWrap">
            <table>
              <thead>
                <tr>
                  <th>B</th>
                  <th>Spiller</th>
                  <th>Spilt</th>
                  <th>Seier</th>
                  <th>Tap</th>
                  <th>For</th>
                  <th>Mot</th>
                  <th>Diff</th>
                  <th>Poeng</th>
                </tr>
              </thead>
              <tbody>
                {groupB.length !== 0 ? (
                  groupB.map((listValue, index) => {
                    return (
                      <tr key={index}>
                        <td>{listValue.B}</td>
                        <td>{listValue.Spiller}</td>
                        <td>{listValue.Spilt}</td>
                        <td>{listValue.Seier}</td>
                        <td>{listValue.Tap}</td>
                        <td>{listValue.For}</td>
                        <td>{listValue.Mot}</td>
                        <td>{listValue.Differanse}</td>
                        <td>{listValue.Poeng}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="singleTableWrap">
            <table>
              <thead>
                <tr>
                  <th>C</th>
                  <th>Spiller</th>
                  <th>Spilt</th>
                  <th>Seier</th>
                  <th>Tap</th>
                  <th>For</th>
                  <th>Mot</th>
                  <th>Diff</th>
                  <th>Poeng</th>
                </tr>
              </thead>
              <tbody>
                {groupC.length !== 0 ? (
                  groupC.map((listValue, index) => {
                    return (
                      <tr key={index}>
                        <td>{listValue.C}</td>
                        <td>{listValue.Spiller}</td>
                        <td>{listValue.Spilt}</td>
                        <td>{listValue.Seier}</td>
                        <td>{listValue.Tap}</td>
                        <td>{listValue.For}</td>
                        <td>{listValue.Mot}</td>
                        <td>{listValue.Differanse}</td>
                        <td>{listValue.Poeng}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="singleTableWrap">
            <table>
              <thead>
                <tr>
                  <th>D</th>
                  <th>Spiller</th>
                  <th>Spilt</th>
                  <th>Seier</th>
                  <th>Tap</th>
                  <th>For</th>
                  <th>Mot</th>
                  <th>Diff</th>
                  <th>Poeng</th>
                </tr>
              </thead>
              <tbody>
                {groupD.length !== 0 ? (
                  groupD.map((listValue, index) => {
                    return (
                      <tr key={index}>
                        <td>{listValue.D}</td>
                        <td>{listValue.Spiller}</td>
                        <td>{listValue.Spilt}</td>
                        <td>{listValue.Seier}</td>
                        <td>{listValue.Tap}</td>
                        <td>{listValue.For}</td>
                        <td>{listValue.Mot}</td>
                        <td>{listValue.Differanse}</td>
                        <td>{listValue.Poeng}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="singleTableWrap">
            <table>
              <thead>
                <tr>
                  <th>E</th>
                  <th>Spiller</th>
                  <th>Spilt</th>
                  <th>Seier</th>
                  <th>Tap</th>
                  <th>For</th>
                  <th>Mot</th>
                  <th>Diff</th>
                  <th>Poeng</th>
                </tr>
              </thead>
              <tbody>
                {groupE.length !== 0 ? (
                  groupE.map((listValue, index) => {
                    return (
                      <tr key={index}>
                        <td>{listValue.E}</td>
                        <td>{listValue.Spiller}</td>
                        <td>{listValue.Spilt}</td>
                        <td>{listValue.Seier}</td>
                        <td>{listValue.Tap}</td>
                        <td>{listValue.For}</td>
                        <td>{listValue.Mot}</td>
                        <td>{listValue.Differanse}</td>
                        <td>{listValue.Poeng}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="singleTableWrap">
            <table>
              <thead>
                <tr>
                  <th>F</th>
                  <th>Spiller</th>
                  <th>Spilt</th>
                  <th>Seier</th>
                  <th>Tap</th>
                  <th>For</th>
                  <th>Mot</th>
                  <th>Diff</th>
                  <th>Poeng</th>
                </tr>
              </thead>
              <tbody>
                {groupF.length !== 0 ? (
                  groupF.map((listValue, index) => {
                    return (
                      <tr key={index}>
                        <td>{listValue.F}</td>
                        <td>{listValue.Spiller}</td>
                        <td>{listValue.Spilt}</td>
                        <td>{listValue.Seier}</td>
                        <td>{listValue.Tap}</td>
                        <td>{listValue.For}</td>
                        <td>{listValue.Mot}</td>
                        <td>{listValue.Differanse}</td>
                        <td>{listValue.Poeng}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td>Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="ChallongeTitle">Kampoversikt</div>

        <div className="allMatchesWrapper">
          <table>
            <thead>
              <tr>
                <th>KampNr</th>
                <th>Gruppe</th>
                <th>Spiller 1</th>
                <th></th>
                <th></th>
                <th>Spiller 2</th>
              </tr>
            </thead>
            <tbody>
              {allMatches.length !== 0 ? (
                allMatches.map((listValue, index) => {
                  return (
                    <tr key={index}>
                      <td>{listValue.Kampnr}</td>
                      <td>{listValue.Gruppe}</td>
                      <td>{listValue['Spiller 1']}</td>
                      <td>{listValue['Poeng 1']}</td>
                      <td>{listValue['Poeng 2']}</td>
                      <td>{listValue['Spiller 2']}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Challonge;
