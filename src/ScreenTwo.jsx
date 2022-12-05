import React from 'react'

export default function ScreenTwo({pageSwitch,descriptions,descriptionSwitch,currDescription}) {
    return (
        <div className='screen-two'>
            <div className="header">
                <img src="/images/logo.png" alt="" />
                <h1>Whatsapp Connector</h1>
                <button className='prev-btn' onClick={()=>pageSwitch("prev")}>Prev</button>
            </div>
            <div className="description-container">
                <div className="description">
                 {descriptions[currDescription]}
                </div>
                <div className="buttons">
                {descriptions.map((ele, i) =>
                    <button onClick={()=>descriptionSwitch(i)} className='screenTwo-btn'>Description {i}</button>
                )}
                </div>
            </div>
            <button>Connect</button>
        </div>
    )
}
