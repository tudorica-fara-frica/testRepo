import PropTypes from 'prop-types'
import { useState } from 'react'

export default function NotesList({ notes, setNotes }) {
    const [newNote, setNewNote] = useState([...notes]);

    function handleDelete(id) {
        const updatedNotes = newNote.filter((note) => note.id !== id);
        setNewNote(updatedNotes);
        setNotes(updatedNotes);
    }
    
    return (
        <>
            {notes.map((note, index) => (
                <div key={note.id} className='note'>
                    <div className='noteText'>
                        <h3>{index + 1}. {note.title}</h3>
                        {note.detail && note.detail.trim() !== "" && <p style={{whiteSpace: 'pre-wrap'}}>{note.detail}</p>}
                    </div>
                    <button onClick={() => handleDelete(note.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </>
    )
}
NotesList.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            detail: PropTypes.string
        })
    ).isRequired,
    setNotes: PropTypes.func.isRequired
}