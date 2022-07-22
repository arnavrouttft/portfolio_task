
import React from 'react'
import { useState } from 'react'
import "./FirebaseDemo.css";
import PopUp from './PopUp';

function FirebaseDemo() {

    const [buttonPopup, setButtonPopup] = useState(false);

    const [details, setDetails] = useState({
        dName: '',
        dateT: '',
        contact: '',
       
    })

    const PostData =async(e)=>{
        e.preventDefault()
        setButtonPopup(true)

        const{dName,dateT,contact}=details;

       await fetch("https://portfolio-task-24818-default-rtdb.firebaseio.com/event.json",
       {
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({
            dName,
            dateT,
            contact,
           
           })
        })

        setDetails({dName: "", dateT: "", contact: ""})

    }


  return (
    <div>
        <h2 className="travelPlan">Add New Tour Plan</h2>
        <form className='form' >
        <input value={details.dName} type='text' placeholder='Enter Destination' onChange={(e)=>
            setDetails({...details,dName:e.target.value})} /> <br />
        <input value={details.dateT} type='date' placeholder='Enter Date' onChange={(e)=>
            setDetails({...details,dateT:e.target.value})}  /> <br />
        <input value={details.contact} type='number' placeholder='Enter Contact Number' onChange={(e)=>
            setDetails({...details,contact:e.target.value})} /> <br />
        <button  id="submit" onClick={PostData}>Submit Here</button>



        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h4>Thank You!</h4>
            <p>Your travel information submitted successfully &#128516;</p>
        </PopUp>
        
        </form>
        </div>
  )
}

export default FirebaseDemo