import { ADD_TO_CART } from "../constants"


export const addToCart = (data) => {
    console.log("Action:",data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}

// export const removeToCart = (data) => {
//     return {
//         type: 'REMOVE_TO_CART',
//         data: data
//     }
// }

// 1. Change current state in application
// 2. Packet of information which is passed to store
// 3. Action are plain JS Objects
// Payload is the information or data for action. Payload is not necessary Ex:
// {
//     type: "INCREMENT_COUNTER",
//     payload:{
//          name: "Hritik",
//          email: "hritik@gmail.com"
//     }
// }

// Action ---> Dispatch ---> Store