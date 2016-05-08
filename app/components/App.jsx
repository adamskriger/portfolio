import AltContainer from 'alt-container';
import React from 'react';
import Website from './Website'
import Heading from './Heading'
import { Link } from 'react-router';
import Exhibit from './Exhibit'



//firebase
import Firebase from 'firebase';
import ReactFire from 'reactfire';


export default class App extends React.Component {


  render() {
    const typeButtons = <button>WEB APP</button>
    const roleButtons = <button>Full Stack Development</button>
    const techButtons = <div><button>Ruby-on-Rails</button> <button>Amazon Web Services</button> <button>Secure User Authorization</button></div>
    const exhibitImage = <img className="twelve columns u-max-full-width" src="https://s3.amazonaws.com/akportfolioimages/Exhibit/popstar.png" alt=""/>
    const projectHeadline = <div className= "row"><a href="https://popstar-app.herokuapp.com/">Visit Site</a></div>
    const projectDetails = <div className= "row">Project Details</div>


    var website = {

      fontSize: '1.5rem'
    }
    return (
<div className="container">
    <div className="outer">
      <div className="inner">

                <Heading />

                <div>

                <Link to='popstar'><Exhibit exhibitImage={exhibitImage} /></Link>
                </div>

                <Link to='popstar'><div style={website}><Website title={'Popstar'} url={'https://popstar-app.herokuapp.com/'} /></div></Link>

                <div style={website}><Website title={'Prolific Capital'} url={'http://prolific-capital.com/'} /></div>
                <div style={website}><Website title={'ABC Apparel'} url={'https://vpv.herokuapp.com/'} /></div>
                <div style={website}><Website title={'Real Time YouTube'} url={'https://youtube-react-spa.herokuapp.com/'} /></div>
                <div style={website}><Website title={'Plantee App'} url={'45.55.179.238:3000'} /></div>
                <div style={website}><Website title={'The Information Station'} url={'http://adamskriger.github.io/trivia/'} /></div>
      </div>
    </div>
</div>
    );
  }

}
