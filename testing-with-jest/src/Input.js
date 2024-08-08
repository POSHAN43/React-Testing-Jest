import { useState } from "react"

const Input=()=>{
    const [data,setData] = useState("");
    const [name,setName] = useState("kuch v");
    return(
        <>
        <p>Input  testing for </p>
        <p>{name}</p>
        <input type='text' value={data} onChange={(e)=>setData(e.target.value)}/><br></br>
        <button onClick={()=>setName("Poshan Love Sudha")}>Update name</button>
        </>
    )
}
export default Input