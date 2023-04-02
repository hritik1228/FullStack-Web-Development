import React from 'react'


const UserIdPage = (props) => {
  return (
    <div>
      <h1>{props.id}</h1>
    </div>
  )
}

export default UserIdPage

// Next JS does not pre-generates any page it does not know which page needs to pre-generates
// Here we run getServerSideProps for every request so don't need to define dynmaic paths
export async function getServerSideProps(context){

    const {params}=context;
    const userId=params.uid;

    return {
        props:{
            id:'userid-'+userId
        }
    }
}