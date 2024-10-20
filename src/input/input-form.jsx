import { useState } from 'react'
import PropTypes from 'prop-types'

export default function InputForm({ setItems }) {
    const [newItem, setNewItem] = useState({check: false, title: ''});

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem.title.trim()) {
            setItems(t => [...t, {
                id: new Date().getTime(),
                title: newItem.title,
                check: false
            }]);
            setNewItem({title: ''});
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='addForm'>
                <input value={newItem.title} onChange={(e) => setNewItem({...newItem, title: e.target.value})} placeholder='Write Task' type='text' required/>
                <button type='submit'>Add</button>
            </form>
        </>
    );
}
InputForm.propTypes = {
    setItems: PropTypes.func.isRequired
}