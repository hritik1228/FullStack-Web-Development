import React from 'react'

const Button=(props)=>{
    return <React.Fragment>

        <button>{props.children}</button>

    </React.Fragment>
}

export default Button;