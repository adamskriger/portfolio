import AltContainer from 'alt-container';
import React from 'react';
import { Link } from 'react-router';
import Blogger from './Blogger'
import List from './List'
const rootURL = 'https://incandescent-fire-6143.firebaseio.com/';

import BlogStore from '../stores/BlogStore'
import BlogActions from '../actions/BlogActions';



export default class BlogShow extends React.Component {
  constructor(props) {
    super(props);
    {console.log(this.props.routeParams.key)}

}




filterList(key) {
  if (this.props.routeParams.key===key){
    return Blogstore.state.blog
  }

}

  render() {








             {Object.keys(BlogStore.state.blog).map(this.filterList)}









  }

}
