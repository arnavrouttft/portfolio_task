import React, { useEffect, useState } from "react";
import EventList from "./EventList";

function Events(props) {


  const [printData, setPrintData] = useState([{dName: "", dateT: "", contact: ""}]);

  const {toggle} = props

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
  }, [toggle]);

  const tourData = printData.map((event) => (
    <EventList
      id={event.id}
      key={event.id}
      dName={event.dName}
      dateT={event.dateT}
      contact={event.contact}
    ></EventList>
  ));
   
  console.log("gjhkhkjk");
 

  return (
    <ul>
        {tourData}
    </ul>
  )
}

export default Events;
