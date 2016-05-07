import AltContainer from 'alt-container';
import React from 'react';
import ReactBoostrap from 'react-bootstrap'
import { Link } from 'react-router';


//firebase
import Firebase from 'firebase';
import ReactFire from 'reactfire';


export default class Exhibit extends React.Component {


  render() {



    return (
      <div>

        <div className="containsTitle"><div>Title</div> </div>

        <div className="containsSnapshots"><div>Title</div>

            <div className="snapshot">
              <div className="snapshotTitle">Type</div>
              <div className="snapshotButtons">Buttons</div>
            </div>

            <div className="snapshot">
              <div className="snapshotTitle">Role</div>
              <div className="snapshotButtons">Buttons</div>
            </div>

            <div className="snapshot">
              <div className="snapshotTitle">Tech</div>
              <div className="snapshotButtons">Buttons</div>
            </div>

            </div>

        <div className="projectContents">

        <div className="ProjectImage">

        </div>

          <div className="ProjectStructure">

          </div>


        </div>


      </div>

    );
  }

}
