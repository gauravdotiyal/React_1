import React from 'react'
import styles from './EventList.module.css'
export default function EventList({events,handleclick}) {
  return (
    <div>
        { events.map((event,index)=> (
         <div className={styles.card} key={event.id}>
         <h2>{index} - {event.title}</h2>
         <button onClick={()=> handleclick(event.id)}>Delete events</button>
       </div>
      ))}
    </div>
  )
}
