import React, { useState } from 'react'

const InputBox = () => {
    const [data,setData] = useState("")
  return (
    <div>
      <input type="text" placeholder='Enter name' name="username" id="userId" value={data} onChange={(e)=>setData(e.target.value)}/>
      <br/>
      <br/>
      {/* <input type="text" /> */}

    </div>
  )
}

export default InputBox
