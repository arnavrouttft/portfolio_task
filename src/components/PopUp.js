
import React from 'react'
import "./PopUp.css";

function PopUp(props) {
  return (props.trigger) ? (
    <div className="popUp">
        <div className="popupInner">
            <button className="closeButton" onClick={() => props.setTrigger(false)}>Close</button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default PopUp