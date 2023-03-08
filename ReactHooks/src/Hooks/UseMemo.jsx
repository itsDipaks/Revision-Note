import React, {useMemo, useState} from "react";

const Use_Memo = () => {
  let [count, setcount] = useState(0);
  let [item, setitem] = useState(0);
  let [memoexp2, setmemoexp2] = useState(0);

  // -----With the help of usememo hook the function only run when the function  gets call on additional rerender happence-----
  let myfunc = () => {
    console.log("myfunc");
  };




  let data = useMemo(() => {
    console.log("data rerender count");
    return (
      <div>
        <button onClick={() => setmemoexp2(memoexp2 + 1)}>memoexp2 ++</button>
        {count}
        <button onClick={() => setmemoexp2(memoexp2 - 1)}>memoexp2 -- </button>
      </div>
    );
  }, [memoexp2]);



  // ------Syntax for usememo pass a callback funtion and add a funcion whose we want to avoid rerendering on every other value changed------
  // ----Dependance decides the when the function has to call or rerender------
  let callfunc = useMemo(() => myfunc(), [item]);
// callfunc
  return (
    <div>
      <h1>UseMemo Hook </h1>
      {data}
      <button onClick={() => setcount(count + 1)}> + </button>
      <h3>Count : {count}</h3>
      <h3>Item : {item}</h3>
      {callfunc}
      {/* ----in usememo it will call the function as variable--------- */}
      {/* {myfunc()} */}
      <button onClick={() => setcount(count - 1)}> - </button>
      <br />
      <button onClick={() => setitem(item + 1)}>Item count</button>

      <p>
        Onclickiing on counter function the other item function does not
        rerender to prevent that we use Usememo hook
        <br />
        it will take a callback function where we write our conditional function
        and in dependency we provide a when we have to call function
      </p>

      <br />
     
    </div>
  );
};

export default Use_Memo;
