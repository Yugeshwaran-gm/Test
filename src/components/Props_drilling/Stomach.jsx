
import React, { useState } from 'react'

const Stomach = ({ name }) => {
    const [bgColor, setBgColor] = useState('black')

    const toggleBackground = () => {
        setBgColor(prevColor => (prevColor === 'black' ? 'white' : 'black'))
    }

    return (
        <div style={{ backgroundColor: bgColor, color: bgColor === 'black' ? 'white' : 'black' }}>
            <h1>Stomach: {name}</h1>
            <button onClick={toggleBackground}>Submit</button>
        </div>
    )
}
export default Stomach
