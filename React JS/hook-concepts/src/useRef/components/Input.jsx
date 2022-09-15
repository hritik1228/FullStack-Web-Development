import React,{forwardRef} from 'react'

const Input=forwardRef((props,ref)=>{
    return <React.Fragment>
        <input type="text" ref={ref}/>
    </React.Fragment>
});

export default Input;