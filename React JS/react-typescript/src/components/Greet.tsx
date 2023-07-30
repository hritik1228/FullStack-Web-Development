import React from 'react';

type GreetProps={
    name:string,
    mobile:number,
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
