import { DECREMENT, INCREMENT } from "./counterTypes"

export const counterIncrement = () => {
    return {
        type: INCREMENT
    }
}

export const counterDecrement = () => {
    return {
        type: DECREMENT
    }
}