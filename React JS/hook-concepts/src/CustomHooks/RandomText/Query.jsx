import React from 'react'
import useQuery from './useQuery'
import axios from 'axios';

const Query = () => {

    const {response}=useQuery(axios.get("https://jsonplaceholder.typicode.com/posts"));
    console.log(response)
    return (
    <div> 
    
    </div>
  )
}

export default Query
