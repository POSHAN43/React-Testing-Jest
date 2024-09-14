import React, { useState,useEffect } from 'react'

const FindBy = () => {
    const [data,setData] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setData(true);
        },1000)
    },[])
  return (
    <div>
        {
            data?<h1>Data found</h1>:<h1>Data not found</h1>
        }
    </div>
  )
}

export default FindBy
