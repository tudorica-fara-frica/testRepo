import PropTypes from 'prop-types'
import NotesList from './notes-list'
import NotesForm from './notes-form'
import { useState } from 'react'

export default function Notes({ notes, setNotes }) {
    const [isFormVisible, setIsFormVisible] = useState(false);

    return (
        <div className='main'>
            <h1>Notes</h1>
            <button onClick={() => setIsFormVisible(!isFormVisible)} className='formButton'>
                {isFormVisible ? "Hide Input Form" : "Show Input Form"}
            </button>
            {isFormVisible && <NotesForm setNotes={setNotes}/>}
            <NotesList notes={notes} setNotes={setNotes}/>
        </div>
    )
}
Notes.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            detail: PropTypes.string
        })
    ).isRequired,
    setNotes: PropTypes.func.isRequired
}