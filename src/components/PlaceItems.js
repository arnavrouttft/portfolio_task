
import React from "react";
import "./PlaceItems.css";

const PlaceItems = (props) => {
    const onClickHandler=()=>{
        props.delHandler(props.id)
    }

    if (props.name === "") {
      return;
    }
    
    let image; 
    try 
    {const img_name = props.url.split('.');
     image = require(`../images/${img_name[1]}.png`)}

    catch {
      image = require ("../images/buffer.png")
    }

  return (
    <div className="wrappp">
      <a  target="_blank" href={props.url}>
        <img className="imgbtn" src={image} alt="icons" height="25px" width="25px"/>
        {props.name}
      </a>
      <button className="btn2" onClick={onClickHandler}>-</button>
    </div>
  );
};
export default PlaceItems;