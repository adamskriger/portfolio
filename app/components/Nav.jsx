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
              <div className="actualReference"><a href="https://github.com/adamskriger">GITHUB</a></div>
            </div>

            <div className="reference">
              <div className="actualReference"><a href="https://www.linkedin.com/in/adamkriger">LINKEDIN</a></div>
            </div>

            <div className="reference">
              <div className="actualReference"><a href="mailto:adamkriger@gmail.com">EMAIL</a></div>
            </div>
          </div>
      </div>

    )

  }

}
