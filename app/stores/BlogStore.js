import alt from '../libs/alt';
import Blog from '../actions/BlogActions';

class NoteStore {
  constructor() {
    this.bindActions(BlogActions);

    this.blogs = [];

    this.exportPublicMethods({
      getBlogsByIds: this.getBlogsByIds.bind(this)
    });
  }



  getBlogsByIds(ids) {
    return (ids || []).map(
      id => this.notes.filter(note => note.id === id)
    ).filter(a => a.length).map(a => a[0]);
  }
}

export default alt.createStore(BlogStore, 'BlogStore');
