import React, { memo } from 'react'

const ChildCompo = (props) => {
    let {learning}=props
    learning()
  return (
    <div>
        {console.log("child components")}
    </div>
  )
}

export default memo(ChildCompo)
// if wrap a child component under memo it will restrict rerender but in parent component if any function we call in child 
// component so if in parent component any value change it will rerender all the function inside that to avoid that we use
//  Usecallback 