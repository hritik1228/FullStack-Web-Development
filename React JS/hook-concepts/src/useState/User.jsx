import React from "react";
import { useState } from "react";

import Button from "./components/Button";
import Input from "./components/Input";

const User = () => {

  const [name,setName]=useState("Tom")
  const [age,setAge]=useState(20);

  const handleForm=(event)=>{
    event.preventDefault();
    console.log("Entered Name:", name);
    console.log("Entered Age:",age);
  }

  const handleNameChange=(event)=>{
    setName(event.target.value);
  }

  const handleAgeChange=(event)=>{
    setAge(event.target.value)
  }

  return (
    <React.Fragment>
      <form onSubmit={handleForm}>
        {/* <input type="text" onChange={handleNameChange}/> */}
        <Input type="text" onChange={handleNameChange} />
        {/* <input type="number" onChange={handleAgeChange} /> */}
        <Input type="number" onChange={handleAgeChange}/>
        <Button>Submit Form</Button>
        {`My Name is ${name} and my age is ${age}`}
      </form>
    </React.Fragment>
  );
};

export default User;
