import React from 'react';
import { useObserver } from 'mobx-react';
import { useRootStore } from './stores';
import Counter from './components/Counter';
import NotesForm from './components/NotesForm';

import './App.css';

const App = () => {
  const { noteStore } = useRootStore();

  return useObserver(() => (
    <div className="App">
      <Counter />
      <hr />
      <ul>
        {noteStore.notes.map(note => 
          <li onClick={() => noteStore.removeNote(note.id) } key={note.id}>{note.text}</li>
        )}
      </ul>
      <NotesForm />
    </div>
  ));
}

export default App;
