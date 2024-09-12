import React from 'react'

const RTLgetLabelByText = () => {
  return (
    <div>
      <label htmlFor='user-name'>Username</label>
      <input type="text" id="user-name" defaultValue={"Poshu"}/>
      
      <label htmlFor="skills">Skills</label>
      <input type="checkbox" id="skills" defaultChecked={true}/>
    </div>
  )
}

export default RTLgetLabelByText
