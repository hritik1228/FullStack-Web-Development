import React from "react";
import CounterContainer from "./components/CounterContainer";
import store from "./redux/storeCounter";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterContainer></CounterContainer>
      </div>
    </Provider>
  );
}

export default App;
