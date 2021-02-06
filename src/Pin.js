import React from 'react'
import "./Pin.css"

function Pin(props) {
    let sizePin = "medium";

   
    return (
        <div className="pin">
     <div className="pin_container">
         <div className={`pin_container ${sizePin}`}>
         <img src="https://images.unsplash.com/photo-1610703910685-982430605e4b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" 
         alt="pin" />

     </div>
        </div>
        </div>
    )
}

export default Pin
