import AltContainer from 'alt-container';
import React from 'react';
import { Link } from 'react-router';
import Blogger from './Blogger'

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
