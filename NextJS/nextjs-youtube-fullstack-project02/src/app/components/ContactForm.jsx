'use client'

import React, { useState } from 'react'
import styles from '../../app/contact/contact.module.css'
import { Mulish } from 'next/font/google';

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
  })

const ContactForm = () => {

    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        message:""
    });

    const [status,setStatus]=useState(null);

    function handleChange(e){
        const name=e.target.name;
        const value=e.target.value;
        setUser((prevUser)=>({
            ...prevUser,
            [name]:value
        }))
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await fetch('/api/contact',{
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                    username:user.username,
                    email:user.email,
                    phone:user.phone,
                    message:user.message
                })
            })
            if(response.status===200){
                setUser({
                    username:'',
                    email:'',
                    phone:'',
                    message:''
                })
                setStatus('success');
            }else{
                setStatus('error');
            }
        }
        catch(e){
            console.log(e)
        }
    }


  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
            <label htmlFor='username' className={styles.label}>
                Enter Your Name: 
                <input type="text" name="username" id='username' placeholder='Enter Your Name' className={mulish.className} value={user.username} onChange={handleChange} required/>
            </label>
        </div>

        <div className={styles.input_field}>
            <label htmlFor='email' className={styles.label}>
                Email: 
                <input type="email" name="email" id='email' placeholder='Enter Your Email' className={mulish.className} value={user.email} onChange={handleChange} required/>
            </label>
        </div>

        <div className={styles.input_field}>
            <label htmlFor='phone' className={styles.label}>
                Phone Number: 
                <input type="number" name="phone" id='phone' placeholder='Enter Your Phone' className={mulish.className} value={user.phone} onChange={handleChange} required/>
            </label>
        </div>

        <div className={styles.input_field}>
            <label htmlFor='message' className={styles.label}>
                Message:
                <textarea name="message" id='message' placeholder='Enter Your Message' rows={5} className={mulish.className} value={user.message} onChange={handleChange} required/>
            </label>
        </div>

        <div>

            {status==='success' && <p className={styles.success_msg}>Thank You for your message</p> }
            {status==='error' && <p className={styles.error_msg}>There was an error submitting your message</p> }
            <button type='submit' className={mulish.className}>Send Message</button>
        </div>

    </form>
  )
}

export default ContactForm
