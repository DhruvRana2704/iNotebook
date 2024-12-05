import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://inotebook-backend-9w7i.onrender.com"
  const notesInit = []
  const [notes, setNotes] = useState(notesInit)

  // fetching all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
      method: 'GET',
      headers: {
        "content-type": 'application/json',
        "auth-token":localStorage.getItem('token')
      },

    })
    const json = await response.json()
    setNotes(json)
  }

  //Adding a new Note:
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        "content-type": 'application/json',
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    })
    const note = await response.json()
    setNotes(notes.concat(note));
  }

  //Delete a note
    //Delete a note on server
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        "content-type": 'application/json',
        "auth-token":localStorage.getItem('token')
      },
      // body:JSON.stringify({title,description,tag})
    })
    const json = await response.json()
    console.log(json)

      //Logic to delete in client side
    const newNotes = notes.filter((notes) => { return notes._id !== id })
    setNotes(newNotes)
  }


  //Edit Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        "content-type": 'application/json',
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    })
    const json = await response.json()
    console.log(json)
    
    //Logic to edit in client side
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, getNotes, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState