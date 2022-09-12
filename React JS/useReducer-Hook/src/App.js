import React, { useReducer, useState } from "react";

const reducer=(state,action)=>{
  console.log(state,action);
  
  if(action.type==='INCREMENT'){
    return state+1
  }
  if(action.type==='DECREMENT'){
    return state-1;
  }
  return state;
}

const App=()=>{

  // const [count,setCount]=useState(0);

  const [state,dispatch]=useReducer(reducer,0);
  

  const handler_add=()=>{
    dispatch({type:'INCREMENT'});
  }

  const handler_minus=()=>{
    dispatch({type:'DECREMENT'});
  }

  return <div>
    <h1>{state}</h1>
    <button onClick={handler_add}>Increment</button>
    <button onClick={handler_minus}>Decrement</button>
  </div>
}

export default App;