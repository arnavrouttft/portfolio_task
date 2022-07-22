
import React from "react";
import "./PlaceItems.css";

const PlaceItems = (props) => {
    const onClickHandler=()=>{
        props.delHandler(props.id)
    }

    if (props.name === "") {
      return;
    }

   const image = require('../images/'+props.name+'.png')

  return (
    <div className="wrappp">
    <div className="">
      <a target="_blank" href={props.url}>
        <img className="imgbtn" src={image} alt="" height="25px" width="25px" />
        {props.name}
      </a>
      <button className="btn2" onClick={onClickHandler}>-</button>
    </div>
    </div>
  );
};
export default PlaceItems;