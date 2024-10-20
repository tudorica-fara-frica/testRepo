import PropTypes from 'prop-types'
import { useState } from 'react'

export default function NotesForm({ setNotes }) {
    const [newNote, setNewNote] = useState({title: '', detail: ''})

    function handleSubmit(e) {
        e.preventDefault();
        if (newNote.title.trim()) {
            setNotes(t => [...t, {
                id: new Date().getTime(),
                title: newNote.title,
                detail: newNote.detail
            }]);
            setNewNote({title: '', detail: ''})
        }
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}className='addForm'>
                <input value={newNote.title} onChange={(e) => setNewNote({...newNote, title: e.target.value})} placeholder='Note Title' type='text' required/>
                <textarea value={newNote.detail} onChange={(e) => setNewNote({...newNote, detail: e.target.value})} placeholder='Note Content'/>
                <button type='submit'>Add</button>
            </form>
        </>
    )
}
NotesForm.propTypes = {
    setNotes: PropTypes.func.isRequired
}