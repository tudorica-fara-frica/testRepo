import PropTypes from 'prop-types'
import InputForm from './input-form'
import InputList from './input-list'
import { useState } from 'react'

export default function Input({items, setItems}) {
    const [isFormVisible, setIsFormVisible] = useState(false);

    return (
        <div className='main'>
            <h1>To-Do List</h1>
            <button onClick={() => setIsFormVisible(!isFormVisible)} className='formButton'>
                {isFormVisible ? 'Hide Input Form' : 'Show Input Form'}
            </button>
            {isFormVisible && <InputForm setItems={setItems} />}
            <InputList items={items} setItems={setItems}/>
        </div>
    )
}
Input.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            check: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    setItems: PropTypes.func.isRequired
}