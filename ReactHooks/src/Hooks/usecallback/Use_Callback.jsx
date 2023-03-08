import React, {useCallback, useEffect, useState} from "react";
import ChildCompo from "./ChildCompo";

const Use_Callback = () => {
  let [count, setcount] = useState(0);

  //usecallback hook is used when we don't want to rerender the child components we use there
  let learning = useCallback(() => {
    console.log("run learning function ");
  }, []);

  //it will avoid the functional rerender when every time the coponent gets rerender
  return (
    <>
      <h1>UseCallback Hook </h1>
      <ChildCompo learning={learning} />

      <button onClick={() => setcount(count + 1)}>inc ++</button>
      <h1>{count}</h1>
      <button onClick={() => setcount(count - 1)}>dec --</button>

      <p>
        1.Use Callback Hook is Used when we dont want to rerender the whole
        child component which is imported inside parent components
      </p>
    </>
  );
};

export default Use_Callback;
