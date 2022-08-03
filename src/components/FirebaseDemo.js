
import React from 'react'
import { useState, useEffect } from 'react'
import "./FirebaseDemo.css";
import PopUp from './PopUp';
import addImage from "../images/addImage.png"
import EventList from './EventList';
import { useHistory } from 'react-router-dom';



function FirebaseDemo() {

     const history = useHistory()

    const [printData, setPrintData] = useState([{dName: "", dateT: "", contact: ""}]);

    const[openform, setOpenform] = useState(false)

    const [buttonPopup, setButtonPopup] = useState(false);

    // const [error, setError] = useState(false);

    const [details, setDetails] = useState({
        dName: '',
        dateT: '',
        contact: '',
       
    })

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(
            "https://portfolio-task-24818-default-rtdb.firebaseio.com/event.json"
          );
          const responseData = await response.json();
    
          let events = [];
          for (const key in responseData) {
            events.push({
              id: key,
              dName: responseData[key].dName,
              dateT: responseData[key].dateT,
              contact: responseData[key].contact,
            });
          }


          setPrintData(events);
        };
        fetchData();
      }, [printData]);

     

      

      const deleteHandler = (newNewData) => {
          

          fetch("https://portfolio-task-24818-default-rtdb.firebaseio.com/event.json",
       {
           method:'PUT',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify(newNewData)
        })

          
        

      }

      const tourData = printData.map((event) => (
        <EventList
          id={event.id}
          key={event.id}
          dName={event.dName}
          dateT={event.dateT}
          contact={event.contact}

          dataHandler = {deleteHandler}

          printData = {printData}
        ></EventList>
      ));

    const addImageHandler = () => {
        history.push("/showevent")
        //setOpenform((prevState) => !prevState);
    }

    // const PostData =async(e)=>{
    //     e.preventDefault()

    //     setOpenform(false);
    //     setButtonPopup(true);
        

        

    //     const{dName,dateT,contact}=details;
        
        

    //     if (dName === "" || dateT === "" || contact === "") {
            
    //         setError(true);
    //     }

    //     else {

           

    //         fetch("https://portfolio-task-24818-default-rtdb.firebaseio.com/event.json",
    //         {
    //             method:'POST',
    //             headers:{
    //                 'Content-Type':'application/json'
    //             },
    //             body:JSON.stringify({
    //              dName,
    //              dateT,
    //              contact,
                
    //             })
    //          })
     
    //          setDetails({dName: "", dateT: "", contact: ""})

    //          setError(false);

    //     }

    // }

     console.log(tourData.length);
    if (tourData.length === 0) {
      return (
        <div className='emptyMsg'>
        <h3>Nothing scheduled yet!</h3>
        
        
        <h2 className="travelPlan1">Add New Tour Plan</h2>
        <img className='addImage' src={addImage} onClick={addImageHandler} alt="" height="85px" width="85px" />

       

       
        {/* {openform && <form className='form1' >
        <input value={details.dName} type='text' placeholder='Enter Destination' onChange={(e)=>
            setDetails({...details,dName:e.target.value})} /> <br />
        <input value={details.dateT} type='date' placeholder='Enter Date' onChange={(e)=>
            setDetails({...details,dateT:e.target.value})}  /> <br />
        <input value={details.contact} type='number' placeholder='Enter Contact Number' onChange={(e)=>
            setDetails({...details, contact:e.target.value})} /> <br />
        <button  id="submit" onClick={PostData}>Submit Here</button>

        
        </form>} */}

        {/* {!error && <PopUp className="popup" trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h4>Thank You!</h4>
            <p>Your travel information submitted successfully &#128516;</p>
        </PopUp>}

        {error && <PopUp className="popupErrorM" trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h4>Error!!!!!!!!!!!!!!!</h4>
            <p>Information not sufficient &#128683;</p>
        </PopUp>} */}
        
      </div>
      )

    }

    


  return (
    <div>

       <ul>
        {tourData }
       </ul>

        <h2 className="travelPlan">Add New Tour Plan</h2>
        <img className='addImage' src={addImage} onClick={addImageHandler} alt="" height="85px" width="85px" />

       

{/*        
        {openform && <form className='form' >
        <input value={details.dName} type='text' placeholder='Enter Destination' onChange={(e)=>
            setDetails({...details,dName:e.target.value})} /> <br />
        <input value={details.dateT} type='date' placeholder='Enter Date' onChange={(e)=>
            setDetails({...details,dateT:e.target.value})}  /> <br />
        <input value={details.contact} type='number' placeholder='Enter Contact Number' onChange={(e)=>
            setDetails({...details, contact:e.target.value})} /> <br />
        <button  id="submit" onClick={PostData}>Submit Here</button>

        
        </form>} */}

        {/* {!error && <PopUp className="popup" trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h4>Thank You!</h4>
            <p>Your travel information submitted successfully &#128516;</p>
        </PopUp>}

        {error && <PopUp className="popupErrorM" trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h4>Error!!!!!!!!!!!!!!!</h4>
            <p>Information not sufficient &#128683;</p>
        </PopUp>} */}
        </div>
  )
}

export default FirebaseDemo