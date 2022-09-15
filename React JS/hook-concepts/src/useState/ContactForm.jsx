import React from "react";
import Button from "./components/Button";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    myName:'',
    myAddress:'',
    myNumber:''
  });

  const handleNameOnChange = (event) => {
    setFormData((prevState) => {
      return { ...prevState, myName: event.target.value };
    });
  };

  const handleAddressOnChange = (event) => {
    setFormData((prevState) => {
      return { ...prevState, myAddress: event.target.value };
    });
  };

  const handleNumberOnChange = (event) => {
    setFormData((prevState) => {
      return { ...prevState, myNumber: event.target.value };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();   
    console.log(formData)

  };

  return (
    <React.Fragment>
      <form onSubmit={handleFormSubmit}>
        <h1>My Contact Form</h1>

        <label htmlFor="name">Enter Your Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.myName}
          onChange={handleNameOnChange}
        />

        <label htmlFor="address">Enter Your Address: </label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.myAddress}
          onChange={handleAddressOnChange}
        />

        <label htmlFor="mobile">Enter Your Mobile Number: </label>
        <input
          type="number"
          name="mobile"
          id="mobile"
          value={formData.myNumber}
          onChange={handleNumberOnChange}
        />

        <Button>Submit Contact Form</Button>
      </form>
    </React.Fragment>
  );
};

export default ContactForm;
