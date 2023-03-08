import React from 'react'
import { useContext } from 'react'



const UseContext = ({children}) => {

    //To Avoid Prop drilling We Use Usecontext
    
const Appcontext=useContext()

  return (
    <div>UseContext</div>
  )
}

export default UseContext


//Steps

