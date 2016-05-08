import AltContainer from 'alt-container';
import React from 'react';
import ReactBoostrap from 'react-bootstrap'
import { Link } from 'react-router';
import Exhibit from './Exhibit'


//firebase
import Firebase from 'firebase';
import ReactFire from 'reactfire';


export default class Abcapparel extends React.Component {


  render() {


    const typeButtons = <button>TYPE</button>
    const roleButtons = <div><button>DESIGN</button><button>FRONT END DEVELOPMENT </button></div>
    const techButtons = <div><button>HTML5</button> <button>CSS3</button> <button>JQUERY</button><button>NODE.JS</button></div>
    const exhibitImage = <img className="twelve columns u-max-full-width" src="https://s3.amazonaws.com/akportfolioimages/Exhibit/abcapparel.png" alt=""/>
    const projectHeadline = <div className= "row"><a href="https://vpv.herokuapp.com/">Visit Site</a></div>
    const projectDetails = <div className= "row">Project Details</div>

    return (

      <div>
      <Exhibit title={'ABC Apparel'} type={'TYPE'} typeButtons={typeButtons} role={'ROLE'} roleButtons={roleButtons} tech={'TECH'} techButtons={techButtons} exhibitImage={exhibitImage} projectHeadline={projectHeadline} projectDetails={projectDetails} />
      </div>

    )

  }

}
