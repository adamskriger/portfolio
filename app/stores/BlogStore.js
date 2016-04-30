import alt from '../libs/alt';
import Blog from '../actions/BlogActions';
import BlogActions from '../actions/BlogActions';
import Firebase from 'firebase'
const rootURL = 'https://incandescent-fire-6143.firebaseio.com/';


class BlogStore {
  constructor() {

    this.exportPublicMethods({
      handleClick: this.handleClick,
      setState: this.setState,
      mountFirebase: this.mountFirebase

    });

    this.bindActions(BlogActions);

    this.state = {
      blog: {},
      title: '',
      text: ''
  };

  }


mountFirebase() {
  this.firebaseRef = new Firebase(rootURL + 'items/');
  this.firebaseRef.on('value', (snapshot) => {
    this.setState({
      blog: snapshot.val()
    })
});

}

handleClick () {
  this.firebaseRef = new Firebase(rootURL + 'items/');

  this.firebaseRef.push({
    title: this.state.title,
    text: this.state.text,
    done: false
  })

  this.setState({title: '',
                 text: ''
                })
}



}
export default alt.createStore(BlogStore, 'BlogStore');
