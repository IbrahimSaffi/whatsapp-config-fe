import React from 'react'

export default function ScreenOne({pageSwitch}) {
  return (
    <div className='screen-one'>   
    <div className="lines">
      <div className="dot-container">
        <div className="dot"></div>
        <h1>Step 1</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="line"></div>
      <div className="dot-container">
        <div className="dot"></div>
        <h1>Step 2</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="line"></div>
      <div className="dot-container">
      <div className="dot"></div>
        <h1>Step 3</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="line"></div>
    </div>
    <button onClick={()=>pageSwitch("next")}>Next</button>
    </div>
  )
}
