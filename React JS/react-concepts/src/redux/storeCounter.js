import { createStore } from "redux";
import counterReducer from "./counter/counterReducer";

const storeCounter = createStore(counterReducer)

export default storeCounter