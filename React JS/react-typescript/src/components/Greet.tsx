import React from 'react';

type GreetProps={
    name:string,
    // '?' it says that the mobile prop is an optional --> Known as optional props
    mobile?:number,
    isLoggedIn:boolean
}

const Greet = (props:GreetProps) => {
  return (
    <div>
        <h2>
        {
            props.isLoggedIn?`Welcome ${props.name}! You look very awesome today. Call Me on ${props.mobile}`:'User is not logged in'
        }
       </h2>
    </div>
  )
}

export default Greet
