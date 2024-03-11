import './NewEventForm.css'
import React from 'react'

export default function NewEventForm() {
  return (
    <div>
      <form className="new-event-form">
        <label> 
        <span>Event Title:</span>
        <input type='text'  ></input>
        </label>
      </form>
    </div>
  )
}
