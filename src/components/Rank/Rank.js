import React, {Component} from 'react';
import {database} from '../../firebase';


class Rank extends Component {
  constructor(props) {
      super(props);
      this.state = {
        participants: []
      };
    }

  componentDidMount(){
    this.getParticipantData();
  }


  getParticipantData = () => {
  let ref = database.ref("participants");
  ref.on('value', snapshot => {
    const values = snapshot.val();
    let newState = [];
    for (let value in values) {
      newState.push({
        id: value,
        name: values[value].name,
        won: values[value].won,
        lost: values[value].lost
      });
    }
    this.setState({participants: newState});
  });
}

  render(){
    const { participants } = this.state;
    return (
      <div className="Main">
        <p>Ranking</p>
        <div>Deltakere: </div>
        <ul>
        {participants.map((item) => {
          return (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>Kamper vunnet: {item.won}</p>
              <p>Kamper tapt: {item.lost}</p>
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
}

export default Rank;
