
import React from 'react'

function Demo1(){

  const message="Welcome"

   const[display,setDisplay]=React.useState(false)
  // let display=false

  const showMessage=()=>{
     setDisplay(!display)
    //display=!display
  }

    return(
      <div>
        {display ?  <h1>Message : {message}</h1> : ""}
       
        <button type="button" onClick={showMessage}>Show</button>
      </div>
    )
  }

export default Demo1  