import React, { useState } from 'react'

const KeyBoardOnChange = () => {
    const [name,setName] = useState("");
  return (
    <div>
        <p>Name: {name}</p>
      <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default KeyBoardOnChange
