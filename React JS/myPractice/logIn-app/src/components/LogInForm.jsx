import React from 'react'
import FormInput from './FormInput';


function LogInForm(){
    return <form className="form">
        <FormInput type="text" placeholder="Username"></FormInput>
        <FormInput type="password" placeholder="Password"></FormInput>
    <button type="submit">Login</button>
  </form>
}

export default LogInForm;