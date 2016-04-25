import AltContainer from 'alt-container';
import React from 'react';
import BButton from './BButton.jsx';




export default class App extends React.Component {


  render() {

    return (
      <div>
        <button className="add-lane" onClick={this.addLane}>+</button>

        <AltContainer>
        <BButton />
        </AltContainer>

      </div>

    );
  }

}
