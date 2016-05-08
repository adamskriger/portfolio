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
      <div className="container">

        <div>

          <div className="containsTitle row">
            <div className="twelve columns">{this.props.title}</div>
          </div>

          <div className="containsSnapshots">

              <div className="snapshot">
                <div className="snapshotTitle">{this.props.type}</div>
                <div className="snapshotButtons">{this.props.typeButtons}</div>
              </div>

              <div className="snapshot">
                <div className="snapshotTitle">Role</div>
                <div className="snapshotButtons">{this.props.roleButtons}</div>
              </div>

              <div className="snapshot">
                <div className="snapshotTitle">Tech</div>
                <div className="snapshotButtons">{this.props.techButtons}</div>
              </div>

              </div>

          <div className="projectContents">

          <div className="projectImage row">
              <div className="twelve columns u-max-full-width">{this.props.exhibitImage}</div>
          </div>

            <div className="projectStructure">
               {this.props.projectHeadline}
            </div>
            <div className="projectDescription">
              {this.props.projectDetails}
            </div>

          </div>


        </div>
      </div>
    );
  }

}
