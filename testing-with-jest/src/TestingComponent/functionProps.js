import React from 'react'

const FunctionProps = (props) => {
  return (
    <div>
      <h2>Function props</h2>
      <button onClick={props.testFunction}>Click</button>
    </div>
  )
}

export default FunctionProps
