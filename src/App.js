import './App.css';   
import { useState} from 'react';
 
 
function App() {
  const [name,setName]=useState('mario')
  const [events,setEvents]=useState([
    {title:"mario birthday bash",id:1},
    {title:"browser's live stream",id:2},
    {title:"race on moo moo farm", id:3}
  ])
  const handleclick =()=>{
    setName('luigi')
    console.log(name);
  }
  return (
    <div className='App'> 
      <h1> My name is {name} </h1>
    <button onClick={handleclick}>Change Name</button>
      {events.map((event,index)=> (
         <div key={event.id}>
         <h2>{index} - {event.title}</h2>
       </div>
      ))}
    </div> 
  );
}

export default App;


