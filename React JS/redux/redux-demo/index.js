// console.log("Hello Redux")
const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// An action creator is a function that returns an action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First Redux action"
    }
}

function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: "Second Redux action"
    }
}

// (previousState, action)=>newState

// const initialState = {
//     numOfCakes: 10,
//     numOfIcecream: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIcecreamState = {
    numOfIcecream: 20
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1
//             }
//         case BUY_ICECREAM:
//             return {
//                 ...state,
//                 numOfIcecream: state.numOfIcecream - 1
//             }
//         default:
//             return state
//     }
// }


const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}

const icecreamReducer = (state = initialIcecreamState, action) => {
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

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial State", store.getState())
    // const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIcecream())
    // unsubscribe()