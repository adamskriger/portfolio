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

                <div className="frontImage"><Link to='popstar'><img className="twelve columns u-max-full-width" src="https://s3.amazonaws.com/akportfolioimages/Exhibit/popstar.png" alt=""/></Link></div>



                <div className="frontImage"><Link to='prolificcapital'><img className="twelve columns u-max-full-width" src="https://s3.amazonaws.com/akportfolioimages/Exhibit/prolificcapital.png" alt=""/></Link></div>

                <div className="frontImage"><Link to='abcapparel'><img className="twelve columns u-max-full-width" src="https://s3.amazonaws.com/akportfolioimages/Exhibit/abcapparel.png" alt=""/></Link></div>

              <div className="frontImage"><Link to='youtube'><img className="twelve columns u-max-full-width" src="https://s3.amazonaws.com/akportfolioimages/Exhibit/youtube.png" alt=""/></Link></div>

                <div className="frontImage"><Link to='plantee'><img className="twelve columns u-max-full-width" src="https://s3.amazonaws.com/akportfolioimages/Exhibit/plantee.png" alt=""/></Link></div>

                <div className="frontImage"><Link to='theinformationstation'><img className="twelve columns u-max-full-width" src="https://s3.amazonaws.com/akportfolioimages/Exhibit/informationstation.png" alt=""/></Link></div>

                </div>

      </div>
    </div>
</div>
    );
  }

}
