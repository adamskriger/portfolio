import AltContainer from 'alt-container';
import React from 'react';
import Navigation from './Navigation.jsx';
import Splash from './Splash.jsx'
import About from './About.jsx'
import BlogShow from './BlogShow.jsx'

//firebase
import Firebase from 'firebase';
import ReactFire from 'reactfire';


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
