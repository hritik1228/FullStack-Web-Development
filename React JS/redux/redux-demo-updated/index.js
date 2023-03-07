const redux = require('redux');
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

// To apply middleware
// const reduxLogger = require('redux-logger')
// const applyMiddleware = redux.applyMiddleware
// const logger = reduxLogger.createLogger()

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'


function orederCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restokeCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

// const initialState = {
//     numOfCakes: 10
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CAKE_ORDERED:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1
//       }
//     case CAKE_RESTOCKED:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes + action.payload
//       }
//     case ICECREAM_ORDERED:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1
//       }
//     case ICECREAM_RESTOCKED:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams + action.payload
//       }
//     default:
//       return state
//   }
// }


const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
            // Customer who buys an cake give them icecream free
        case CAKE_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// if the initialState has more than one property then first create copy of the state object using spread operator then change the required property
// (previousState,action) =>newState

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case CAKE_ORDERED:
//             return {
//                 numOfCakes: state.numOfCakes - 1
//             }
//         case CAKE_RESTOCKED:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes + action.payload
//             }
//         default:
//             return state
//     }
// }

// const store = createStore(reducer)
const store = createStore(rootReducer)
    // const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State', store.getState())
    // Anytime the state changes it logs the updated state on console
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

// store.dispatch(orederCake())
// store.dispatch(orederCake())
// store.dispatch(orederCake())

// store.dispatch(restokeCake(3))

const actions = bindActionCreators({ orederCake, restokeCake, orderIceCream, restockIceCream }, store.dispatch)
actions.orederCake()
actions.orederCake()
actions.orederCake()
actions.restokeCake(3)
actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(2)

unsubscribe()