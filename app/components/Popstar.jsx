import AltContainer from 'alt-container';
import React from 'react';
import ReactBoostrap from 'react-bootstrap'
import { Link } from 'react-router';
import Exhibit from './Exhibit'


//firebase
import Firebase from 'firebase';
import ReactFire from 'reactfire';


export default class Popstar extends React.Component {


  render() {


    const typeButtons = <button>WEB APP</button>
    const roleButtons = <button>Full Stack Development</button>
    const techButtons = <div><button>Ruby-on-Rails</button> <button>Amazon Web Services</button> <button>Secure User Authorization</button></div>
    const exhibitImage = <img className="twelve columns u-max-full-width" src="https://s3.amazonaws.com/akportfolioimages/Exhibit/popstar.png" alt=""/>
    const projectHeadline = <div className= "row">Introducing Popstar</div>

    const projectDetails = <div className= "row">Project Details</div>
    return (

      <div>
      <Exhibit title={'Popstar'} type={'TYPE'} typeButtons={typeButtons} roleButtons={roleButtons} techButtons={techButtons} exhibitImage={exhibitImage} projectHeadline={projectHeadline} projectDetails={projectDetails} />
      </div>

    )

  }

}
