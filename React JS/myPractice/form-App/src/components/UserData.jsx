import React, { useState } from "react";

function UserData() {
  // const [fName, setFname] = useState("");
  // const [lName, setLname] = useState("");

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {

    const newValue=event.target.value;
    const inputName=event.target.name;
   
   
    setFullName((prevValue)=>{
      if(inputName==="fName"){
        return {
          fName:newValue,
          lName:prevValue.lName
        }
      }
      else if(inputName==="lName"){
        return {
          fName:prevValue.fName,
          lName:newValue
        }
      }
    })
    
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          value={fullName.fName}
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          name="lName"
          value={fullName.lName}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserData;
