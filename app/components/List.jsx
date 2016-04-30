import AltContainer from 'alt-container';
import React from 'react';
import { Link } from 'react-router';
import Blogger from './Blogger'

export default class List extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.title);
  }


  render() {
    return (
            <div>
                 Object.keys(this.props.title[key]).map(key) =>
                     <li>{this.props.title}</li>
                     )

             </div>

    )


  }

}
