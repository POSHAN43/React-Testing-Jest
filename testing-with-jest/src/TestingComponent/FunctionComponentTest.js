import React, { useState } from 'react'
export const handleOtherMethod=()=>{
    console.log("Hello")
    return "Hi poshu"
}

const FunctionComponentTest = () => {
    const [data,setData] = useState("");
    const handleChange=(value)=>{
        setData(value)
    }
    
  return (
    <div>
      <button data-testid="btn1" onClick={()=>handleChange("Poshan bhaiya")}>Click</button>
      <button onClick={()=>handleOtherMethod()}>Show</button>
      <h2>{data}</h2>
    </div>
  )
}

export default FunctionComponentTest
