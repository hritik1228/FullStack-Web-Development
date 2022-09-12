import React from "react";
import { FirstName, LastName } from "./Parent";

const Child3 = () => {
  return (
    <FirstName.Consumer>
      {(fname) => {
        return (
          <LastName.Consumer>
            {(lname) => {
              return (
                <h1>
                  My Full Name is {fname} {lname}
                </h1>
              );
            }}
          </LastName.Consumer>
        );
      }}
    </FirstName.Consumer>
  );
};

export default Child3;
