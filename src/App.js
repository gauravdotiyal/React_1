import './App.css';   
import { useState} from 'react';
import Title from  './components/title'
import Modal from  './components/Modal' 
import EventList from './components/EventList'
import Clock_func from './components/clock_func';
import NewEventForm from './components/NewEventForm';

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
    

  //my answer
  // const handleclick =(className)=>{
  //    setEvents((prevEvents)=>{
  //     return prevEvents.filter((event)=>{
  //     return className!==event.className;
  //     })
  //    })
  //    console.log(id);
  // }
  



  const handleClose=()=>{
     setModals(false);
  }

  const name1="Gaurav"
  
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

      {showEvents && <EventList events ={events} handleclick={handleclick} /> }


       <div>
        <button onClick={()=>setModals(true)}>Add new Event</button>
       </div>
      {/* <Modal> 
        <h2>10% off on buying branded shoe</h2>
        <p>Use my coupon GAURAV07 at this checkout</p>  
      </Modal> */}

      {/* {showModal && <Modal handleClose={handleClose} isSalesModal={true} > 
          <h2>Terms and Coditions</h2>
          <p>LThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p> 
      </Modal>} */}


      {showModal && <Modal handleClose={handleClose} isSalesModal={true} > 
           <NewEventForm/>
      </Modal>}
 
       <Clock_func name = {name1}/>  
    </div> 
  );
}

export default App;


// https://github.com/gauravdotiyal/React_Learning
