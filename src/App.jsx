import Editor from './components/editor';
import Sidebar from './components/sidebar';
import Split from 'react-split';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';


export default function App(){

  const [notes, setNotes] = useState([]);

  function deleteNote() {
    // Assuming you want to remove the last note from the array
    setNotes(prevNotes => prevNotes.slice(0, -1));
  }
  

  function createNewNote(){
    const newNote = {
      id: nanoid() ,
      body: "# Type your markdown note's title here"
    }
    setNotes(prevNotes => [newNote, ...prevNotes])

  }1

  return(
    <main>
      {
      notes.length > 0 ? 
      <Split
      sizes={[30, 70]}
      direction="horizontal"
      className="split"
      >
        <Sidebar
        deleteNote={deleteNote}
        createNewNote={createNewNote}
        notes = {notes} />
        <Editor />
      </Split> :

      <div>
      <h1>Hello notes hehehe. </h1>
      <button onClick={createNewNote}>Create new note</button>
    </div>
    }

    </main>
    
  ) 
  
}