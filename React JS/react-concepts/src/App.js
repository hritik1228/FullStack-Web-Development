import React from "react";
import { Provider } from "react-redux";
import storeIcecream from "./redux/storeIcecream";
import IcecreamContainer from './components/IcecreamContainer'
function App() {
  return (
    <Provider store={storeIcecream}>
      <div className="App">
          <IcecreamContainer></IcecreamContainer>
      </div>
    </Provider>
  );
}

export default App;
