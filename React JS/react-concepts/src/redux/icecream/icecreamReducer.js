import { BUY_ICECREAM } from "./icecreamTypes"

const initialState = {
    numOfIcecream: 5
}

const icecreamReducer = (state = initialState, action) => {
    // console.log('I will decrement the count by 1 - Icecream reducer')
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIcecream: state.numOfIcecream - 1
            }
        default:
            return state
    }

}

export default icecreamReducer