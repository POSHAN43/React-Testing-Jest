import React from 'react'

const RTLmultipleElement = () => {
  return (
    <div>
      <button>Click</button>
      <button>Show</button>
      <label htmlFor="input1">full name</label>
      <input type="text" id="input1"/>
      <label htmlFor="input2">Email</label>
      <input type="text" id="input2"/>
      <div role="custom-role">Hello welcome</div>
    </div>
  )
}

export default RTLmultipleElement
