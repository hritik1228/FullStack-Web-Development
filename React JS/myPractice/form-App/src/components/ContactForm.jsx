import React, { useState } from "react";

function ContactForm() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event){
    const newValue=event.target.value;
    const inputName=event.target.name;

    setContact((prevValue)=>{
        if(inputName==="fName"){
            return {
                fName:newValue,
                lName:prevValue.lName,
                email:prevValue.email
            }
        }
        else if(inputName==="lName"){
            return{
                fName:prevValue.fName,
                lName:newValue,
                email:prevValue.email
            }
        }

        else{
            return {
                fName:prevValue.fName,
                lName:prevValue.lName,
                email:newValue
            }
        }
    })



  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChange} value={contact.fName} />
        <input name="lName" placeholder="Last Name" onChange={handleChange} value={contact.lName} />
        <input name="email" placeholder="Email" onChange={handleChange} value={contact.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
