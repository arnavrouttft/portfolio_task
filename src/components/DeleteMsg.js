
import React from 'react'
import "./DeleteMsg.css"

function DeleteMsg(props) {
  return (
    <div className='deletePop'>
        <h5>Are you sure?</h5>
        <div className="buttonss">
        <button className='noBtn' onClick={props.noHandler}>No</button>
        <button className='yesBtn' onClick={props.yesHandler}>Yes</button>
        </div>
    </div>
  )
}

export default DeleteMsg;