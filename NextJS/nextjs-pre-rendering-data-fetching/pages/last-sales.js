import React, { useEffect,useState } from 'react'
import useSWR from 'swr'

const LastSalesPage = (props) => {

    const [sales,setSales]=useState(props.sales);
    // const [isLoading,setIsLoading]=useState(false);

    const { data, error } = useSWR('https://nextjs-course-client-side-default-rtdb.firebaseio.com/sales.json',(url)=>fetch(url).then(res=>res.json()))
    console.log(data)

    // Transforming the data into an array received from useSWR Hook 
    useEffect(()=>{
        if(data){
            const transformedSales=[];
            for(const key in data){
                transformedSales.push({id:key,username:data[key].username,volume:data[key].volume});
            }
            // console.log(transformedSales)

            setSales(transformedSales);
        }
    },[data])


    // Same can be done by useSWR Hook
    // useEffect(()=>{
    //     setIsLoading(true)
    //     fetch('https://nextjs-course-client-side-default-rtdb.firebaseio.com/sales.json')
    //     .then((response)=>response.json())
    //     .then(data=>{
    //         const transformedSales=[];
    //         for(const key in data){
    //               transformedSales.push({id:key,username:data[key].username,volume:data[key].volume});
    //         }
    //         setSales(transformedSales)
    //         setIsLoading(false)
    //     })
    // },[])

    // if(isLoading){
    //     return <p>Loading...</p>
    // }

    // if(!sales){
    //     return <p>No Data Yet!!</p>
    // }

    if(error){
        return <p>Failed to load data</p>
    }

    if(!sales && !data){
        return <p>Loading...</p>
    }

    return (
        <ul>
            {sales.map(sale=> <li key={sale.id}>{sale.username} - ${sale.volume}</li> )}
        </ul>
    )
}


export async function getStaticProps(){
    const response=await fetch('https://nextjs-course-client-side-default-rtdb.firebaseio.com/sales.json')
    const data=await response.json();
        const transformedSales=[];
        for(const key in data){
            transformedSales.push({id:key,username:data[key].username,volume:data[key].volume});
        };

        return {
            props:{sales:transformedSales},revalidate:10
        }
}

export default LastSalesPage
