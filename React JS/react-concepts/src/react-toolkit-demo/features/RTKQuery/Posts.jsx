import React from 'react'
import { useGetAllPostsQuery } from './apiSlice'

const Posts = () => {

    const {data,error,isError,isLoading}=useGetAllPostsQuery();
    console.log(data)
    if(isLoading){
        return <h2>Loading...</h2>
    }
    return (
        <div>
            {
                data.map((post)=>{
                    return <h6 key={post.id}>{post.title}</h6>
                })
            }
        </div>
    )
}

export default Posts
