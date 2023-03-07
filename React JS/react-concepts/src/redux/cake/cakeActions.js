import { BUY_CAKE } from '../cake/cakeTypes'

export const buyCakes = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}