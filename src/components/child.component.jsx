// Class 5: context API to change state from child to parent components 

import React, { useContext } from "react";
import NewContext from "./newContext";

const Child = () => {
    let contextValue = useContext(NewContext)
  return (
    <div>
        <h2>This child is using context API hook</h2>
        <h3>Context value is: {contextValue}</h3>
        <button onClick={() => {contextValue[1](++contextValue[0])}}>
            Increament Context
        </button>
    </div>
  );
};
export default Child;
