import React from 'react'
import { connect } from 'react-redux'
import { buyCakes } from '../redux/cake/cakeActions'
import icecreamAction from '../redux/icecream/icecreamAction'

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item- {props.item} </h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  )
}

const mapStateToProps=(state,ownProps)=>{
    const itemState=ownProps.cake?state.cake.numOfCakes:state.iceCream.numOfIcecreams

    return {
        item:itemState
    }
}


const mapDispatchToProps=(dispatch,ownProps)=>{
    const dispatchFunction=ownProps.cake?()=>dispatch(buyCakes()):()=>dispatch(icecreamAction())

    return {
        buyItem:dispatchFunction
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
