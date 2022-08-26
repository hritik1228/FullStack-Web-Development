import React from "react";
import LogInForm from "./LogInForm";

import SignUpForm from "./SignUpForm";

let userIsRegistered=true;

let currentTime=new Date().getHours();


function App() {
  return (
    <div className="container">
      <h1>Happy Learning</h1>
      {/* {loggedIn==true?<h1>Hello user</h1>:<LogInForm/>} */}

      {/* {(currentTime>12)?<h1>Service Not Available. LogIn after 12pm</h1>:<LogInForm></LogInForm>} */}

      {/* {(currentTime>12 && loggedIn==false)?<h1>Service Not Available. LogIn after 12pm</h1>:<LogInForm></LogInForm>} */}

      {(userIsRegistered==true)?<LogInForm />:
      <SignUpForm></SignUpForm>}

    </div>
  );
}

export default App;
