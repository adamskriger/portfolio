import AltContainer from 'alt-container';
import React from 'react';
import { Link } from 'react-router';
import Blogger from './Blogger'

this.fb = new Firebase(rootURL + 'items/' + this.props.blog.key);

export default class List extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
            <div>
                     <li>{this.props.blog.title}</li>


             </div>

    )


  }

}
