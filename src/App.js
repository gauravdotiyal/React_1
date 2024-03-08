import './App.css';   
import { useState} from 'react';
 
 
function App() {
    const [showEvents,setshowevents]=useState(true)
    const [events,setEvents]=useState([
    {title:"mario birthday bash",id:1},
    {title:"browser's live stream",id:2},
    {title:"race on moo moo farm", id:3} 
  ])
   
  // console.log(showEvents)

  const handleclick =(id)=>{
     setEvents((prevEvents)=>{
      return prevEvents.filter((event)=>{
      return id!==event.id;
      })
     })
     console.log(id);
  }
  return (
    <div className='App'>  
      {showEvents && (<div>
      <button onClick={()=>setshowevents(false)}>Hide events</button>
      </div>)}

      {!showEvents && (<div>
      <button onClick={()=>setshowevents(true)}>Show events</button>
      </div>)}

      {showEvents && events.map((event,index)=> (
         <div key={event.id}>
         <h2>{index} - {event.title}</h2>
         <button onClick={()=> handleclick(event.id)}>Delete events</button>
       </div>
      ))}
    </div> 
  );
}

export default App;


// https://github.com/gauravdotiyal/React_Learning
