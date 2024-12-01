import React, { useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useContext } from 'react'

// import Alert from './Alert'

const AddNote = (props) => {
    const context = useContext(NoteContext)
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    
    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" })
        props.showAlert("Note added successfully","success")
        props.hanClick()
    }

    const handleOnChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })

    }
    return (
        <div> 
            <div style={{caretColor:"transparent",cursor:"default", marginTop:"5rem",padding:"1rem",borderRadius:"1rem"}}>            
           <h2 className=''>Add Note 📝</h2>
           <form style={{caretColor:"black"}}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" placeholder='Enter atleast 5 characters' onChange={handleOnChange} name='title' id="title" value={note.title} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea type="text" onChange={handleOnChange} className="form-control" placeholder='Enter atleast 5 characters' name='description' id="description"value={note.description} ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" placeholder='(Optional)' onChange={handleOnChange} className="form-control" name='tag' id="tag" value={note.tag}/>
                </div>

                <button disabled={note.title.length<5||note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
            </div>
        </div>
    )
}

export default AddNote
