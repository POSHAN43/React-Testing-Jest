import React, {useState} from 'react'

const ButtonBox = () => {
    const [text,setText] = useState("")
  return (
    <div>
      <button onClick={()=>setText("Poshu")}>Click</button>
      <h2>{text}</h2>
    </div>
  )
}

export default ButtonBox
