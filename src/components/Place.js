import React, { useEffect, useState } from "react";
import PlaceItems from "./PlaceItems";
import "./PlaceItems.css";


function Place() {
  const [places, setPlaces] = useState([{ name: "", url: ""}]);

  const [showbtn, setShowbtn] = useState(false);
  
  const [add,setAdd]=useState(false);
  const[name,setName]=useState();
  const[url,setUrl]=useState();
  const[toggle,setToggle]=useState(false);
  console.log(places)

  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchData = async () => {
        const response = await fetch(
          "https://portfolio-task-24818-default-rtdb.firebaseio.com/icons.json"
        );
        

        const responseData = await response.json();
        let place = [];
        for (const key in responseData) {
          place.push({
            id: key,
            name: responseData[key].name,
            url: responseData[key].url,
          });
        }

        setPlaces(place);
      };
      fetchData();
    }, 1000);

    return () => clearTimeout(timer);
  }, [toggle]);

  const onClickHandler = () => {
    setAdd(true);
    setShowbtn(true);
  };

  const showBtnHandler = () => {
    setAdd(false);
    setShowbtn(false);
  }

  const submitHandler=()=>{
    setAdd(false);
    setShowbtn(false);
    
    const newPlace={name:name,url:url}
    places.push(newPlace)
    fetch('https://portfolio-task-24818-default-rtdb.firebaseio.com/icons.json',{
                method : 'PUT',
                body : JSON.stringify(places)
            });
            setToggle((prevState )=>!prevState)
  }
  const nameHandler=(event)=>{
setName(event.target.value);
  }
  const urlHandler=(event)=>{
setUrl(event.target.value);
  }
  const deleteHandler=(id)=>{
    
    const filterPlace=places.filter((place)=>place.id !== id)
    fetch('https://portfolio-task-24818-default-rtdb.firebaseio.com/icons.json',{
            method : 'PUT',
            body : JSON.stringify(filterPlace)

        });
        setToggle((prevState )=>!prevState)
        
}

  const placeList = places.map((place) => (
    <PlaceItems key={place.id} name={place.name} url={place.url} id={place.id} delHandler={deleteHandler} />

  ));
  console.log(places);

  return (
    <div className="dynamicIcon" >
      <div className="urlBtn">
        <h5 className="place">
          Places
        </h5>
        <br></br>
        <ul>{placeList}</ul>
        { add && <card-4>
          <label htmlFor="">Url</label> 
          <input className="inputU" onChange={urlHandler} placeholder="url" />
          <label  htmlFor="">Name</label>
          <input className="inputU" onChange={nameHandler} type="text" placeholder="name" />
          <button className="btnbtn" onClick={submitHandler}>submit</button>
        </card-4>}
       {!showbtn && <button className="addbtn" onClick={onClickHandler} >
          +
        </button>}
        {showbtn && <button className="addbtn" onClick={showBtnHandler} >
          -
        </button>}
      </div>
    </div>
  );
}

export default Place;