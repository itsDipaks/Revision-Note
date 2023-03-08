import React, { useRef, useState } from 'react'

const UseRefHook = () => {
  let [val,setval]=useState("")



  let inputref=useRef()
// ---inside inputref variable we can access the all the property of input tag here----

let makeredcolor=()=>{
  inputref.current.backgroundColor="red"
}

//  console.log(inputref.current.value)

 console.log("Page Rendered");
 console.log(val)
  return (
    <div>
     <h1>UseRef Hook</h1>
     <h2>Using Useref Hook</h2>
     <input type="text" ref={inputref}/>
     <button onClick={makeredcolor}>Make Color Red</button>


     <h2>Normal Input Tag </h2>
     <input type="text" onChange={(e)=>setval(e.target.value)}/>
<p>
  1.bydefault useref takes current value 0
  2. bydefault input tag onchange it will rerender the component to prevent this we use useref ,
  3.it will avoid re-render of input element
  4.we can directly acces the dom element and make some changes inside them
</p>
    </div>
  )
}

export default UseRefHook