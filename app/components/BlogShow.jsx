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
    this.filterList = this.filterList.bind(this);

}



filterList(key) {
  return this.props.routeParams.key === key;
}

mapList(key) {
  return (<List key={key} blog={BlogStore.state.blog[key]} />);
}

render() {
  return <div> {Object.keys(BlogStore.state.blog).filter(this.filterList).map(this.mapList)} </div>
}

}
