import React from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Services(){

   // const {message}=useParams()

   const location=useLocation()

   console.log(location);

    return(
        <div>
            <h1>Services Component!!!</h1>
            <p>This is Services Component!!!</p>
            {/* <p>Message : {message}</p> */}
            <p>Name : {location.state.name}</p>
            <p>City : {location.state.city}</p>
        </div>
    )
}

export default Services