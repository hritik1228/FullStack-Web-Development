import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ordered,restocked } from './iceCreamSlice'

const Icecreamview = () => {
    const numOfIcecream=useSelector((state)=>state.icecream.numOfIcecreams)
    const dispatch=useDispatch()

    return (
        <div>
        <h2>Number of Icecream- {numOfIcecream}</h2>
        <button onClick={()=>dispatch(ordered())}>Order Icecreams</button>
        <button onClick={()=>dispatch(restocked(2))}>Restock Icecreams</button>
        </div>
    )
}

export default Icecreamview 
