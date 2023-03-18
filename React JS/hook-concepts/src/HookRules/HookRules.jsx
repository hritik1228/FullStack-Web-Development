import React, { useEffect, useState } from 'react'

function HookRules() {
    const [todos,setTodos]=useState([]); // 1
    const [input,setInput]=useState(""); // 2
    const [randomNo,setRandomNo]=useState(Math.floor(Math.random()*101)); // <-- Random Number between 0 and 100 (3)

    // Rules of Hooks
    // 1. Only call hooks (useState & useEffect) at the TOP Level
    // --This means don't call hooks inside loops, conditions or nested functions
    // --Always use hooks at the top level of your react function
    // --By following this rule, you ensure hooks are called in the same order each time a component renders
    // --This allows react to correctly preserve the state of hooks between useState / useEffect calls

    // 2. Don't calls hooks from regular JS functions
    // --Call hooks from React FC's
    // --Call hooks from custom hooks

    // BAD- breaks the call order
    // The CALL ORDER must remain consistent and predictable HENCE need to follow the Rules
    if(randomNo>50){
        const [test,setTest]=useState("Whoops"); // 4
    }

    // BAD- conditional must go inside the useEffect
    if(randomNo<50){
        useEffect(()=>{ // 5
            console.log("render")
        })
    }

    // BAD - No nested functions
    const testing=()=>{
        useEffect(()=>{ // 6
            console.log("render")
        })
    }

    // React hook "useEffect" is called in function "badFunction" which is neither a React function component or a custom React hook function
    function badFunction(){
        useEffect(()=>{
            console.log("Test")
        })
    }

    // if(true){
    //     const [name,setName]=useState('Hritik')
    // }

    // const [student,setStudent]=useState(name);

  return (
    <div>HookRules</div>
  )
}

export default HookRules
