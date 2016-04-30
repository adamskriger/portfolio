import AltContainer from 'alt-container';
import React from 'react';
import { Link } from 'react-router';
import Blogger from './Blogger'
import BlogStore from '../stores/BlogStore'
import BlogActions from '../actions/BlogActions';


const rootURL = 'https://incandescent-fire-6143.firebaseio.com/';

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      key: ''

    };
  }

  handleClick = () => {

    this.setState({
      key: this.state.blog[key]
  })
}
  render() {
    return (
            <div>
                   <li>{this.props.blog.title}</li>


             </div>

    )


  }

}
