import { BUY_ICECREAM } from "./icecreamTypes"

const icecreamAction = () => {
    // console.log('I received icecream action ');
    return {
        type: BUY_ICECREAM
    }
}

export default icecreamAction;