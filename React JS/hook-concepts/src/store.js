import configureStore from "redux";
import rootReducer from "./react-Redux/reducers";

const store = configureStore(rootReducer);

export default store;