import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { buyCakes } from '../redux/cake/cakeActions'

function NewCakeContainer(props) {

    const [number,setNumber]=useState(1)

    const handleOnChange=(e)=>{
        setNumber(e.target.value)
    }

  return (
    <div>
        <h2>Number of cakes- {props.numOfCakes}</h2>
        <input type="text" value={number} onChange={handleOnChange} />
        <button onClick={()=>props.buyCake(number)}>Buy {number} Cakes</button>
    </div>
  )
}

const mapStateToProps=state=>{
    return {
        numOfCakes:state.numOfCakes
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        buyCake:number=>dispatch(buyCakes(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)