
import React, { useState } from 'react'
import deleteIcon from "../images/deleteIcon.png";
import DeleteMsg from './DeleteMsg';


function EventList(props) {

  const [isValid, setIsValid] = useState(false);


  const binHandler = () => {
      setIsValid(true)
    }

    if (props.dName === "") {
      return
    }

    //delete buttons functions
     const noDeleteHandler = () => {
      setIsValid(false)
     }

     const yesDeleteHandler = () => {
      const newNewData = props.printData.filter((element) => element.id !== props.id)
      props.dataHandler(newNewData);
      setIsValid(false)
     }

  return (
    <div>
      

       <div className="boxAnimation">
        <img className="kashmir" src={`https://picsum.photos/200/200?random=${props.id}`} alt="places" />
        <p className="k">Destination: {props.dName}</p>
        <p className="date">Date:</p>
          <p className="month">{props.dateT}</p>
         <div className="bookNow">Contact: {props.contact}</div>

        
      </div>

      <img onClick={binHandler} className="bin" src={deleteIcon} alt="#" height="35px" width="35px" />
      {isValid && <DeleteMsg noHandler={noDeleteHandler} yesHandler={yesDeleteHandler} />}
      </div>
  )
}

export default EventList