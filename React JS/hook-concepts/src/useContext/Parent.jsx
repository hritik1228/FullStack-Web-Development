import React, { createContext } from "react";
import Child1 from "./Child1";

const FirstName = createContext();
const LastName = createContext();

const Parent = () => {
  return (
    <FirstName.Provider value={"Hritik "}>
      <LastName.Provider value={"Kumar"}>
        <Child1 />
      </LastName.Provider>
    </FirstName.Provider>
  );
};

export default Parent;
export { FirstName,LastName };