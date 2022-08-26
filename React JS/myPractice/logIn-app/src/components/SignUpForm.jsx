import React from 'react'

import FormInput from './FormInput';

function SignUpForm(){
    return <form className='form'>
        <FormInput type="text" placeholder="Enter Your Name" ></FormInput>

        <FormInput type="email" placeholder="Enter Your Email ID" ></FormInput>

        <FormInput type="password" placeholder="Create Password" ></FormInput>

        <FormInput type="password" placeholder="Confirm Password" ></FormInput>

        <button type='submit'>Register</button>
    </form>
}

export default SignUpForm;