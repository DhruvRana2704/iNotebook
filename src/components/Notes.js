import { React, useContext, useEffect, useRef ,useState} from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';
const Notes = (props) => {
  const context = useContext(NoteContext)
  const { notes, getNotes,editNote } = context;
  let Navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      getNotes()
    }
    else{
      Navigate('/login')
    }
    // eslint-disable-next-line
  }, [])

  const ref = useRef(null)
  const refClose = useRef(null)

  const [note, setNote] = useState({ id:"", etitle: "", edescription: "", etag: "" })
  
  const handleClick = (e) => {
    console.log(note)
      e.preventDefault()
      editNote(note.id,note.etitle,note.edescription,note.etag)
      refClose.current.click();
      props.showAlert("Note updated Successfully",'success')
  }

  const handleOnChange = (e) => {
      setNote({ ...note, [e.target.name]: e.target.value })

  }
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id ,etitle:currentNote.title ,edescription:currentNote.description ,etag:currentNote.tag})
    
  }
  return (
    <>
      <AddNote showAlert={props.showAlert}/>

      <button type="button" ref={ref} className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Note</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"  >&times;</span>
              </button>
            </div>
            <div className="container">
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" onChange={handleOnChange} value={note.etitle} name='etitle' id="etitle" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" onChange={handleOnChange} className="form-control" value={note.edescription} name='edescription' id="edescription" />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" onChange={handleOnChange} className="form-control" value={note.etag} name='etag' id="etag" />
                </div>

               
            </form>
            </div>
            <div className="modal-footer">
              <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" disabled={note.etitle.length<5||note.edescription.length<5} onClick={handleClick} className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <h1 className='my-4'>Your Notes</h1><div className="container mx-2">
        {notes.length===0 && 'No notes to display'}</div>
        {
          notes.map((note) => {
            return <NoteItem key={note._id} showAlert={props.showAlert} updateNote={updateNote} note={note}></NoteItem>
          })
        }

      </div>
    </>
  )
}

export default Notes