
import { useState } from "react";
import PopUp from "./PopUp";

function ShowEvent() {

    const [error, setError] = useState(false);

    const [buttonPopup, setButtonPopup] = useState(false);

    const [details, setDetails] = useState({
        dName: '',
        dateT: '',
        contact: '',
       
    })

    const PostData =async(e)=>{
        e.preventDefault()

        //setOpenform(false);
        setButtonPopup(true);
        

        

        const{dName,dateT,contact}=details;
        
        

        if (dName === "" || dateT === "" || contact === "") {
            
            setError(true);
        }

        else {

           

            fetch("https://portfolio-task-24818-default-rtdb.firebaseio.com/event.json",
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

             setError(false);

        }

    }
  return (
    <div>

        <form className='form1' >
        <input value={details.dName} type='text' placeholder='Enter Destination' onChange={(e)=>
            setDetails({...details,dName:e.target.value})} /> <br />
        <input value={details.dateT} type='date' placeholder='Enter Date' onChange={(e)=>
            setDetails({...details,dateT:e.target.value})}  /> <br />
        <input value={details.contact} type='number' placeholder='Enter Contact Number' onChange={(e)=>
            setDetails({...details, contact:e.target.value})} /> <br />
        <button  id="submit" onClick={PostData}>Submit Here</button>

        </form>

        {!error && <PopUp className="popup" trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h4>Thank You!</h4>
            <p>Your travel information submitted successfully &#128516;</p>
        </PopUp>}

        {error && <PopUp className="popupErrorM" trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h4>Error!!!!!!!!!!!!!!!</h4>
            <p>Columns can't be empty &#128683;</p>
        </PopUp>}

    </div>
  )
}

export default ShowEvent;