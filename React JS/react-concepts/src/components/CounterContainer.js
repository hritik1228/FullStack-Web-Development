import React from 'react'
import { connect } from 'react-redux'
import { counterIncrement,counterDecrement } from '../redux/counter/counterActions'

function CounterContainer(props) {
  return (
    <div>
        <h1>Counter App-{props.count}</h1>
        <button onClick={props.counterIncrement}>Increment Counter</button>
        <button onClick={props.counterDecrement}>Decrement Counter</button>
    </div>
  )
}

const mapStateToProps=state=>{
    return {
        count:state.count
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        counterIncrement:()=>dispatch(counterIncrement()),
        counterDecrement:()=>dispatch(counterDecrement())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterContainer)