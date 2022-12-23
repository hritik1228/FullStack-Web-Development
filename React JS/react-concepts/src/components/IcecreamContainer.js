import React from 'react'
import { connect } from 'react-redux'
import icecreamAction from '../redux/icecream/icecreamAction'

function IcecreamContainer(props) {
  return (
    <div>
        <h2>Number of Icecream {props.numOfIcecream}</h2>
        <button onClick={props.buyIcecream}>Buy Icecream</button>

    </div>
  )
}

const mapStateToProps=(state)=>{
    return{
        numOfIcecream:state.numOfIcecream
    }
}

const mapDispatchToProps=(dispatch)=>{
    // console.log("Action Dispatch")
    return {
        buyIcecream:()=>dispatch(icecreamAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(IcecreamContainer)