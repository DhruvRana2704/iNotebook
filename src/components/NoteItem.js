import { React, useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
const NoteItem = (props) => {
  const { note, updateNote } = props;
  const formattedDate = new Date(note.date).toLocaleDateString();
  const context = useContext(NoteContext)
  const { deleteNote } = context;

  const [isExpanded, setIsExpanded] = useState(false); // State to track if the full content is visible
  const maxLength = 50; // Maximum length before truncation

  // Function to limit text and add '...'
  const limitText = (text) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "";
    }
    return text;
  };

  // Toggle the expanded state when '...' is clicked
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <>
      <div className="col-md-3 my-3 no-caret" style={{caretColor:"transparent"}}>
        <div className="card" style={{marginBottom:"1rem"}} >
          <div className="card-body">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1", left: "50%" }}>
              {note.tag}
            </span>
            <h5 className="card-title sour-gummy-normal">{note.title}</h5>
            <p className="card-text sour-gummy-normal">
              {isExpanded ? note.description : limitText(note.description)}
              {note.description.length > maxLength && (
                <span onClick={handleExpandClick} style={{ color: "blue", cursor: "pointer" }}>
                  {isExpanded ?" Show less":"..."}
                </span>
              )}
            </p>
            <p className="card-text sour-gummy-normal" style={{ color: 'grey' }}>{formattedDate}</p>
            <i className="fas fa-trash mx-2" onClick={() => {
              deleteNote(note._id);
              props.showAlert('Note Deleted Successfully', 'success')
            }}></i>
            <i className="fas fa-edit mx-2" onClick={() => { updateNote(note) }}></i>

          </div>
        </div>
      </div>
    </>
  )
}

export default NoteItem
