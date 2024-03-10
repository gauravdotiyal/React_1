//shortcut rfc or __rfc for default values in react 
import ReactDOM from 'react-dom' 
import './Modal.css'
  export default function Modal({children,handleClose}) {
  return ReactDOM.createPortal((<div className="modal-backdrop">
        <div className="modal">
             {children}
             <button onClick={handleClose}>Close</button>
        </div>
    </div>),document.body)
}

