//shortcut rfc or __rfc for default values in react  
import './Modal.css'
  export default function Modal({children,handleClose}) {
  return (
    <div className="modal-backdrop">
        <div className="modal">
             {children}
             <button onClick={handleClose}>Close</button>
             
        </div>
    </div>
  )
}

