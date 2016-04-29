import AltContainer from 'alt-container';
import React from 'react';
import { Link } from 'react-router';

const rootURL = 'https://incandescent-fire-6143.firebaseio.com/';

export default class Blogger extends React.Component {
  constructor(props) {
    super(props);

    this.firebaseRef = new Firebase(rootURL + 'items/');

    this.state = {
      title: '',
      text: ''
  };
  }

  handleInputChange = () => {

    this.setState({
      title: this.refs.title.value,
      text: this.refs.text.value});
  }


  handleClick = () => {

    this.firebaseRef.push({
      title: this.state.title,
      text: this.state.text,
      done: false
    })
    this.setState({title: '',
                   text: ''
                  });
  }


  render() {
    return (
      <div>
        <div className="row panel panel-default">
          <div className="col-md-8 col-md-offset-2">
            <h2>
                Create a New Blog Post
            </h2>
          </div>
        </div>

<h2>Blog Title</h2>
        <div className="input-group">
          <input
          ref="title"
          value={this.state.title}
          onChange = {this.handleInputChange}
          type="text"
          className="form-control"/>
          <span className="input-group-btn">

          </span>
        </div>

<h2>Blog Entry</h2>
        <div className="input-group">
          <textarea
          ref="text"
          value={this.state.text}
          onChange = {this.handleInputChange}
          type="text"
          className="form-control"/>

        </div>

        <div className="blog-submit input-group-btn">
          <button onClick={this.handleClick}
          className="btn btn-default" type="button">
            Publish Blog Post
          </button>
        </div>
    </div>
    );
  }

}
