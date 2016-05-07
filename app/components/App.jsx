import AltContainer from 'alt-container';
import React from 'react';
import Website from './Website'

//firebase
import Firebase from 'firebase';
import ReactFire from 'reactfire';


export default class App extends React.Component {


  render() {

    return (
<div className="outer">
  <div className="inner"> 
            <div><Website title={'Popstar'} url={'https://popstar-app.herokuapp.com/'} /></div>
            <div><Website title={'Prolific Capital'} url={'http://prolific-capital.com/'} /></div>
            <div><Website title={'ABC Apparel'} url={'https://vpv.herokuapp.com/'} /></div>
            <div><Website title={'Real Time YouTube'} url={'https://youtube-react-spa.herokuapp.com/'} /></div>
            <div><Website title={'Plantee App'} url={'45.55.179.238:3000'} /></div>
            <div><Website title={'The Information Station'} url={'http://adamskriger.github.io/trivia/'} /></div>
  </div>
</div>
    );
  }

}
