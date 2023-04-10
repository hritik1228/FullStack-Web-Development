import React from 'react';
import Logo from '../layout/logo';
import Link from 'next/link';
import classes from './main-navigation.module.css';

// Link will not render a anchor tag for you if we pass any component or html tag between it. It works when we pass plain text between it.

const MainNavigation = () => {
  return (
    <header className={classes.header}> 
        <Link href='/'>
            
                <Logo/>
            
        </Link>
        <nav>
            <ul>
                <li>
                    <Link href='/posts'>Posts</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation
