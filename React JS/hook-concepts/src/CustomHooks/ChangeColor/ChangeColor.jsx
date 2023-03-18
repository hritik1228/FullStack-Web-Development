import React from 'react'
import useRandomColor from './useRandomColor'

const ChangeColor = () => {

    const {color,changeColor}=useRandomColor()

    return (
        <div style={{width:"100vw",height:"100vh",backgroundColor:"#"+color}}>
        <button onClick={changeColor}>
            Change Color
        </button>
        </div>
    )
}

export default ChangeColor
