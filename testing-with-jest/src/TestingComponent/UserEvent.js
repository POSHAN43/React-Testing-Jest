import React, { useState } from 'react'

const UserEvent = () => {
    const [data,setData] = useState("");
  return (
    <div>
        <h2>{data}</h2>
      <button onClick={()=>setData("Poshan Paikra")}>Click</button>
    </div>
  )
}

export default UserEvent
