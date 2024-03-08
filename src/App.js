import './App.css';   
import { useState} from 'react';
import Title from  './components/title'
import Modal from  './components/Modal' 


function App() {
    const [showModal,setModals]=useState(false)
    const [showEvents,setshowevents]=useState(true)
    const [events,setEvents]=useState([
    {title:"mario birthday bash",id:1},
    {title:"browser's live stream",id:2},
    {title:"race on moo moo farm", id:3} 
  ])
   
  // console.log(showEvents)
    //  console.log(showModal)

  const handleclick =(id)=>{
     setEvents((prevEvents)=>{
      return prevEvents.filter((event)=>{
      return id!==event.id;
      })
     })
     console.log(id);
  }
  

  const handleClose=()=>{
     setModals(false);
  }
  
  const abc="All the events in mario kingdom"
  return (
    <div className='App'>  
      <Title title="Events in Your Area" subtitle={abc}/>
     
      {/* <Title title ="another title" subtitle="another subtitle" />  */}
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
       <div>
        <button onClick={()=>setModals(true)}>Need discount</button>
       </div>
      {/* <Modal> 
        <h2>10% off on buying branded shoe</h2>
        <p>Use my coupon GAURAV07 at this checkout</p>  
      </Modal> */}

      {showModal && <Modal handleClose={handleClose}> 
          <h2>Terms and Coditions</h2>
          <p>LThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p> 
      </Modal>}
    </div> 
  );
}

export default App;


// https://github.com/gauravdotiyal/React_Learning
