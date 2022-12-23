import { createStore, applyMiddleware } from 'redux'
import icecreamReducer from './icecream/icecreamReducer'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const storeIcecream = createStore(icecreamReducer, composeWithDevTools(applyMiddleware(logger)))


export default storeIcecream