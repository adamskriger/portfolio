import AltContainer from 'alt-container';
import React from 'react';
import ReactBoostrap from 'react-bootstrap'

//firebase
import Firebase from 'firebase';
import ReactFire from 'reactfire';


export default class App extends React.Component {


  render() {

    var headline = {

      fontSize: '2rem',
      fontWeight: '18.7rem',
      lineHeight: '3.3rem',
      marginTop: '15rem',
      marginBottom: '7.5rem'
    }

    return (
      <div>

      <div className="" style={headline}><strong>Adam Kriger</strong> is a full stack web developer with a passion for launching, rejuvenating and propelling brands. His goal is to create <strong>lasting and meaningful relationships</strong> between your brand and your audience <strong>through smart thinking and thoughtful design</strong>.</div>



      </div>

    );
  }

}
