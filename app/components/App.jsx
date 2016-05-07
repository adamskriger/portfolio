import AltContainer from 'alt-container';
import React from 'react';
import Website from './Website'
import Heading from './Heading'


//firebase
import Firebase from 'firebase';
import ReactFire from 'reactfire';


export default class App extends React.Component {


  render() {

    var website = {

      fontSize: '1.5rem'
    }
    return (
<div className="outer">
  <div className="inner">

            <Heading />
            
            <div style={website}><Website title={'Popstar'} url={'https://popstar-app.herokuapp.com/'} /></div>
            <div style={website}><Website title={'Prolific Capital'} url={'http://prolific-capital.com/'} /></div>
            <div style={website}><Website title={'ABC Apparel'} url={'https://vpv.herokuapp.com/'} /></div>
            <div style={website}><Website title={'Real Time YouTube'} url={'https://youtube-react-spa.herokuapp.com/'} /></div>
            <div style={website}><Website title={'Plantee App'} url={'45.55.179.238:3000'} /></div>
            <div style={website}><Website title={'The Information Station'} url={'http://adamskriger.github.io/trivia/'} /></div>
  </div>
</div>
    );
  }

}
