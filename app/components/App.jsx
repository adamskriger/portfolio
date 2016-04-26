import AltContainer from 'alt-container';
import React from 'react';
import BButton from './BButton.jsx';
import Navigation from './Navigation.jsx';
import Splash from './Splash.jsx'



export default class App extends React.Component {


  render() {

    return (
      <div>

        <Navigation />
        <Splash />

      </div>

    );
  }

}
