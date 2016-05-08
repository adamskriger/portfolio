import AltContainer from 'alt-container';
import React from 'react';
import ReactBoostrap from 'react-bootstrap'
import { Link } from 'react-router';


//firebase
import Firebase from 'firebase';
import ReactFire from 'reactfire';


export default class Nav extends React.Component {


  render() {



    return (

      <div className="containsReferences">
          <div className="row">

            <div className="reference">
              <div className="actualReference">GITHUB</div>
            </div>

            <div className="reference">
              <div className="actualReference">LINKEDIN</div>
            </div>

            <div className="reference">
              <div className="actualReference">EMAIL</div>
            </div>
          </div>
      </div>

    )

  }

}
