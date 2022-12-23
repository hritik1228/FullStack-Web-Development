import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";

const storeCake = createStore(cakeReducer)

export default storeCake