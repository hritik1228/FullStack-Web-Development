import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
        
        <div className={classes.image}>
            <Image src="/images/site/hritik.jpg" alt="An Image showing Hritik" width={300} height={300} />
        </div>

        <h1>Hi, I'm Hritik</h1>
        
        <p>
            I blog about Web Development - especially frontend frameworks like Next.JS & React.JS. 
        </p>

    </section>
  )
}

export default Hero
