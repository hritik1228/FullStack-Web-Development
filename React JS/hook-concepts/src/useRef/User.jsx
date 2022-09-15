import React from "react";
import { useRef } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

const User = () => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        {/* <input type="text" ref={inputRef} /> */}
        <Input ref={inputRef}></Input>
        <br />
        <Button>Click Me</Button>        
      </form>
    </React.Fragment>
  );
};

export default User;
