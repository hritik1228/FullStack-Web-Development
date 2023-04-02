import React from 'react'

const UserProfilePage = (props) => {
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  )
}

export default UserProfilePage

// It will not be called advance when we build the project, it will be served for every incoming request
export async function getServerSideProps(context){

    const { params,req,res }=context;
    // Node JS Objects for incoming messages and responses
    // console.log(req);
    // console.log(res);

    return { 
        props:{
            username:'Max'
        }
     }
}