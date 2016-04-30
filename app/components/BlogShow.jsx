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
}



  render() {

            <div>

            <div >
              </div>
              <AltContainer
                stores={[BlogStore]}
                inject={{
                  blog: () => BlogStore.getBlogByIds(BlogShow)
                }}
              >
                <Blogger
                   />
              </AltContainer>



             {Object.keys(this.context.blog)
             .filter((key)=>{
                     return key===this.props.params[key];
                   })
                   .map((key)=> this.context.blog[key])}




             </div>




  }

}
