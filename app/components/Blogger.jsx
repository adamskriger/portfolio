import AltContainer from 'alt-container';
import React from 'react';
import { Link } from 'react-router';
import List from './List.jsx'
import Firebase from 'firebase'
import BlogStore from '../stores/BlogStore'
import BlogActions from '../actions/BlogActions';


const rootURL = 'https://incandescent-fire-6143.firebaseio.com/';



export default class Blogger extends React.Component {
  constructor(props) {
    super(props);
    BlogStore.getState();
    BlogStore.mountFirebase();
    {console.log(this.props.location.query)}

    };


  componentDidMount() {
    BlogStore.listen((state) => {
      this.setState(state)
    })
    this.firebaseRef = new Firebase(rootURL + 'items/');
  }

  componentWillMount() {
    BlogStore.unlisten((state) => {
      this.setState(state)
    })
  }




  renderList = (key) => {
      return (
      <Link to={`blogshow/${key}`}> <List key={key} blog={this.state.blog[key]} /> </Link>
      )
    }


  handleInputChange = () => {

    BlogStore.setState({
      title: this.refs.title.value,
      text: this.refs.text.value});
  }


  handleClick = () => {

    BlogStore.handleClick();
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
          value={BlogStore.state.title}
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
          value={BlogStore.state.text}
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

        {/*<List blog={this.state.blog} />*/}

        {Object.keys(BlogStore.state.blog)
       .map(this.renderList)}



    </div>



    );
  }

}
