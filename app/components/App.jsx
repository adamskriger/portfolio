import uuid from 'node-uuid'
import React from 'react';
import Note from './Note.jsx';

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
        <ul>{notes.map(note =>
          <li key={note.id}> {note.task} </li>
        )} </ul>
      </div>
    )
  }
}