import uuid from 'node-uuid'
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [

      {
        id: uuid.v4(),
        task: 'Learn Webpack'
      },
      {
        id: uuid.v4(),
        task: 'Learn React'
      },
      {
        id: uuid.v4(),
        task: 'Create App'
      }
    ]
  }
}

  render() {
    const notes = this.state.notes;

    return (

      <div>
      <button onClick={this.addNote}>+</button>
      <Notes notes={notes} />
      </div>
    )
  }
// We are using an experimental feature known as propery initializer here.
//It allows us to bind the method 'this' to the point at our App instance.
//Alternatively we could bind at constructor using a line such as
//this.addNote = this.addNote.bind(this);
  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    })
  }
}
