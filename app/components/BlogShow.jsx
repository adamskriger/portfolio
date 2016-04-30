import AltContainer from 'alt-container';
import React from 'react';
import { Link } from 'react-router';
import Blogger from './Blogger'
import List from './List'
const rootURL = 'https://incandescent-fire-6143.firebaseio.com/';




export default class BlogShow extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    this.firebaseRef = new Firebase(rootURL + 'items/');
    this.firebaseRef.on('value', (snapshot) => {
      this.setState({
        blog: snapshot.val()
      })
  });
  }




  render() {
    return (
            <div>
            {Object.keys(this.state.blog)}



             </div>

    )


  }

}
