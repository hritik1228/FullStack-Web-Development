import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCakes } from '../redux/cake/cakeActions'

function HooksCakeContainer() {
   const numOfCakes= useSelector(state=>state.numOfCakes)

   const dispatch=useDispatch()
  return (
    <div>
        <h2>Number of Cakes - {numOfCakes} </h2>
        <button onClick={()=>dispatch(buyCakes())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
