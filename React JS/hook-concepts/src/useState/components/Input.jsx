import React from 'react'

const Input=(props)=>{
    return <React.Fragment>
        <input type={props.type} value={props.value} onChange={props.onChange}/>
    </React.Fragment>
}

export default Input;