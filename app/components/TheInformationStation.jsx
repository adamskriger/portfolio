import AltContainer from 'alt-container';
import React from 'react';
import ReactBoostrap from 'react-bootstrap'
import { Link } from 'react-router';
import Exhibit from './Exhibit'


//firebase
import Firebase from 'firebase';
import ReactFire from 'reactfire';


export default class TheInformationStation extends React.Component {


  render() {


    const typeButtons = <button>WEB APP</button>
    const roleButtons = <button>Full Stack Development</button>
    const techButtons = <div><button>JAVASCRIPT</button> <button>HTML5</button> <button>CSS3</button></div>
    const exhibitImage = <img className="twelve columns u-max-full-width" src="https://s3.amazonaws.com/akportfolioimages/Exhibit/informationstation.png" alt=""/>
    const projectHeadline = <div className= "row"><a href="http://adamskriger.github.io/trivia/" target="_blank">Visit Site</a></div>
    const projectDetails = <div className= "row">Project Details</div>

    return (

      <div>
      <Exhibit title={'Prolific Capital'} type={'TYPE'} typeButtons={typeButtons} role={'ROLE'} roleButtons={roleButtons} tech={'TECH'} techButtons={techButtons} exhibitImage={exhibitImage} projectHeadline={projectHeadline} projectDetails={projectDetails} />
      </div>

    )

  }

}
