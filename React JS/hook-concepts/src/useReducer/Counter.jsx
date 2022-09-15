import React from 'react'
import { useReducer } from 'react';

const Counter=()=>{

    const reducer=(state,action)=>{
        console.log(state,action);
        if(action.type==="INCREMENT"){
            return state+1;
        }
        if(action.type==="DECREMENT"){
            return state-1;
        }
        return state;
    }

    const [state,dispatch]=useReducer(reducer,0)
    const handleOnClickInc=()=>{
        dispatch({type:'INCREMENT'})
    }

    const handleOnClickDec=()=>{
        dispatch({type:'DECREMENT'})
    }

    return <React.Fragment>
        <p>{state}</p>
        <button onClick={handleOnClickInc}>Increment</button>
        <button onClick={handleOnClickDec}>Decrement</button>
    </React.Fragment>
}
export default Counter;