import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

import './Challonge.css';
const Challonge = () => {
  const [allMatches, setAllMatches] = useState([]);
  const [groupA, setGroupA] = useState([]);
  const [groupB, setGroupB] = useState([]);
  const [groupC, setGroupC] = useState([]);
  const [groupD, setGroupD] = useState([]);
  const [groupE, setGroupE] = useState([]);
  const [name1, setName1] = useState();
  const [name2, setName2] = useState();
  const [nextName1, setNextName1] = useState();
  const [nextName2, setNextName2] = useState();

  useEffect(() => {
    updateEverything();
    setInterval(updateEverything, 5 * 1000);
  }, []);

  const updateEverything = () => {
    console.log('Updating...');
    UpdateMatchInfo();
    UpdateGroupA();
    UpdateGroupB();
    UpdateGroupC();
    UpdateGroupD();
    UpdateGroupE();
  };

  const UpdateMatchInfo = () => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vToSNHK1ByiCZuIR_CnxS3pn29qYKQOUgNhp4DFH3SMn9EjvCMOhL1aFGlEiB9ryt2HpSpgVdA1YKgu/pub?gid=1279119526&single=true&output=csv',
      {
        download: true,
        header: true,
        complete: results => {
          GetCurrentAndNextMatch(results.data);
          setAllMatches(results.data);
        }
      }
    );
  };

  const cleanGroup = data => {
    const cutOff = data.findIndex(e => e.Spiller === '');
    return data.slice(0, cutOff);
  };

  const UpdateGroupA = () => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vToSNHK1ByiCZuIR_CnxS3pn29qYKQOUgNhp4DFH3SMn9EjvCMOhL1aFGlEiB9ryt2HpSpgVdA1YKgu/pub?gid=1279119526&single=true&output=csv',
      {
        download: true,
        header: true,
        complete: results => setGroupA(cleanGroup(results.data))
      }
    );
  };

  const UpdateGroupB = () => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSGNG5fMJkDLSQzE0MLFYhJO4LATHBj6WOLRxjqFPNzHiQ1IOZOy43xmJEB8zhx3VFvKD-ItUzJpb3-/pub?gid=286070142&single=true&output=csv',
      {
        download: true,
        header: true,
        complete: results => setGroupB(cleanGroup(results.data))
      }
    );
  };

  const UpdateGroupC = () => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSGNG5fMJkDLSQzE0MLFYhJO4LATHBj6WOLRxjqFPNzHiQ1IOZOy43xmJEB8zhx3VFvKD-ItUzJpb3-/pub?gid=904760152&single=true&output=csv',
      {
        download: true,
        header: true,
        complete: results => setGroupC(cleanGroup(results.data))
      }
    );
  };

  const UpdateGroupD = () => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSGNG5fMJkDLSQzE0MLFYhJO4LATHBj6WOLRxjqFPNzHiQ1IOZOy43xmJEB8zhx3VFvKD-ItUzJpb3-/pub?gid=464459248&single=true&output=csv',
      {
        download: true,
        header: true,
        complete: results => setGroupD(cleanGroup(results.data))
      }
    );
  };

  const UpdateGroupE = () => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vSGNG5fMJkDLSQzE0MLFYhJO4LATHBj6WOLRxjqFPNzHiQ1IOZOy43xmJEB8zhx3VFvKD-ItUzJpb3-/pub?gid=1391285964&single=true&output=csv',
      {
        download: true,
        header: true,
        complete: results => setGroupE(cleanGroup(results.data))
      }
    );
  };

  const GetCurrentAndNextMatch = matchData => {
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
                allMatches
                  .filter(m => m.Kampnr)
                  .map((listValue, index) => {
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
