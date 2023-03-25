import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

// fetcher function
const fetchSuperHeroes=()=>{
    return axios.get('http://localhost:4000/superheroes') 
}

const RQSuperHeroesPage = () => {

    // perform side effetcs when query completes ex toast success message
    const onSuccess=(data)=>{
        console.log('Perform side effects after data fetching',data)
    }
    // when query encounters an error while fetching the data
    const onError=(error)=>{
        console.log('Perform side effects after encountering error',error)
    }

    // super-heroes is the key
    // const {isLoading,data,isError,error,isFetching}=useQuery('super-heroes',fetchSuperHeroes,{cacheTime:10000})
    // const {isLoading,data,isError,error,isFetching}=useQuery('super-heroes',fetchSuperHeroes,{staleTime:10000})

    // const {isLoading,data,isError,error,isFetching}=useQuery('super-heroes',fetchSuperHeroes,{
    //     refetchInterval:2000,
    //     refetchIntervalInBackground:true
    // })

    // const {isLoading,data,isError,error,isFetching}=useQuery('super-heroes',fetchSuperHeroes,{
    //     refetchOnMount:true,
    //     refetchOnWindowFocus:true
    // })

    // useQuery on click
    // const {isLoading,data,isError,error,isFetching,refetch}=useQuery('super-heroes',fetchSuperHeroes,{
    //     enabled:false
    // })

    // onSuccess and onError callback
    const {isLoading,data,isError,error,isFetching}=useQuery('super-heroes',fetchSuperHeroes,{
        onSuccess,
        onError,
        
        // Data Transformation in react query
        select:(data)=>{
            const superHeroName=data.data.map(hero=>hero.name)
            return superHeroName
        }
    })

    console.log('isFetching',isFetching,'isLoading',isLoading);

    if(isLoading){
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>RQ Super Heroes Page</h2>
            {/* useQuery on click */}
            {/* <button onClick={refetch}>Fetch Heroes</button> */}
            {/* {
                    data?.data.map((hero)=>{
                        return <div key={hero.name}>{hero.name}</div>
                    })
            }  */}

            {
                // Data Tranformation ---->Here data refers to the superHeroName array returned from select function
                data.map((heroName)=>{
                    return <div key={heroName}>{heroName}</div>
                })
            }
        </>
    )
}

export default RQSuperHeroesPage
