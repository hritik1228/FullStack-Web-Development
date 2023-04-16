import { useEffect, useState } from 'react';
import ProfileForm from './profile-form';
import classes from './user-profile.module.css';
import { useSession,getSession } from 'next-auth/client';

// getSession-> it sends the request and get the latest session data

function UserProfile() {
  // Redirect away if NOT auth
  // const [session,loading]=useSession();
  // const [isLoading,setIsLoading]=useState(true);

  // useEffect(()=>{
  //   getSession().then(session=>{
     
  //     if(!session){
  //       window.location.href='/auth'
  //     }
  //     else{
  //       setIsLoading(false)
  //     }
  //   })
  // },[])

  // if(isLoading){
  //   return <p className={classes.profile}>Loading...</p>
  // }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
