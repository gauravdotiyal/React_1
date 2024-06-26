import './NewEventForm.css'
import React, { useState  } from 'react' 

export default function NewEventForm({addEvent}) {
   
    const [title,setTitle]=useState('')
    const [date,setDate]=useState('')
    const [location,setLocation]=useState('manchester')

    const resetform=()=>{
        setDate('') 
        setTitle('') 
        setLocation('manchester')
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault()
         
        const event={
            title:title,
            date:date, 
            location:location,
            id:Math.floor(Math.random()*1000)
        }
        console.log(event)
        addEvent(event)
        resetform()
    }

  return ( 
      <form className="new-event-form" onSubmit={handleSubmit}>
        <label> 
        <span>Event Title:</span>
        <input 
          type='text' 
          onChange={(e)=>setTitle(e.target.value)} 
          value={title} 
        /> 
        </label>

        <label> 
        <span>Event date:</span>
        <input 
          type='date' 
          onChange={(e)=>setDate(e.target.value)} 
          value={date} 
        />
        </label>

        <label> 
        <span>Event Location:</span>
         <select onChange={(e)=>setLocation(e.target.value)}> 
          <option value="manchester">Manchester</option>
          <option value="london">London</option>
          <option value="cardiff">Cardiff</option>
         </select>
        </label>

        <button>Submit</button>
        {/* <p>title -{title}, date-{date}</p>
        <p onClick={resetform}>Reset the Form</p> */}

      </form>
   
  )
}
