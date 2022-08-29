import React, { useState } from "react";

function App() {
  // const [fName, setFname] = useState("");
  // const [lName, setLname] = useState("");

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    
    setFullName(event.target.value);
    setFullName(event.target.value);
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

export default App;
