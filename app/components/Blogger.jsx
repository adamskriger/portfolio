import AltContainer from 'alt-container';
import React from 'react';
import { Link } from 'react-router';

const rootURL = 'https://incandescent-fire-6143.firebaseio.com/';

export default class Blogger extends React.Component {
  constructor(props) {
    super(props);

    this.firebaseRef = new Firebase(rootURL + 'items/');

    this.state = {text: ''};

  }

  handleInputChange = () => {

    this.setState({text: this.refs.input.value});
  }


  handleClick = () => {

    this.firebaseRef.push({
      text: this.state.text,
      done: false
    })
    //send value of input field to Firebase
    this.setState({text: ''});
  }


  render() {
    return (
      <div>
        <div className="row panel panel-default">
          <div className="col-md-8 col-md-offset-2">
            <h2>
                Blog List
            </h2>
          </div>
        </div>

        <div className="input-group">
          <input
          ref="input"
          value={this.state.text}
          onChange = {this.handleInputChange}
          type="text"
          className="form-control"/>
          <span className="input-group-btn">
            <button onClick={this.handleClick}
            className="btn btn-default" type="button">
              Add
            </button>
          </span>
          {this.state.text}
        </div>
    </div>
    );
  }

}
