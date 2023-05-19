import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from './contact.module.css'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
    <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard/>

        <section className={styles.contact_section}>
          <h2>We'd love to hear <span>from you</span> </h2>
          <ContactForm/>
        
        </section>
    
    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29217.263980814554!2d86.7650839089741!3d23.74174456926384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6dd834a66b9e9%3A0xd4e0c38020aa3342!2sChirkunda%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1684384072275!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default Contact




