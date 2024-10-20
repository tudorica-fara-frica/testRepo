import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

export default function InputList({ items, setItems }) {
    const [newItems, setNewItems] = useState([...items]);

    useEffect(() => {
        setNewItems([...items]);
    }, [items]);

    function handleDelete(id) {
        const updatedItems = newItems.filter((item) => item.id !== id);
        setNewItems(updatedItems);
        setItems(updatedItems);
    }

    function handleCheckboxChange(id) {
        const updatedItems = newItems.map(item =>
            item.id === id ? { ...item, check: !item.check } : item
        );
        setNewItems(updatedItems);
        setItems(updatedItems);
    }

    return (
        <>
            {items.map((item) => (
                <div key={item.id} className='task'>
                    <div className='itemDiv' >
                        <label>
                            <input type='checkbox' checked={item.check} onChange={() => handleCheckboxChange(item.id)} className='checkbox' onClick={() => handleCheckboxChange(item.id)}/>
                            <span className='custom-checkbox'></span>
                        </label>
                        <h3 className={item.check ? 'strike-through' : ''} onClick={() => handleCheckboxChange(item.id)}>
                            {item.title}
                        </h3>
                    </div>
                    
                    <button onClick={() => handleDelete(item.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </>
    );
}
InputList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            check: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired, 
            title: PropTypes.string.isRequired, 
        })
    ).isRequired,
    setItems: PropTypes.func.isRequired
}