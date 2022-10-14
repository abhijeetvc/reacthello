import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ContactInfo(){

    const location=useLocation()
    const {message1}=useParams()

    return(
        <div>
            <h1>Contact Information!!!</h1>
            <p> Name : {location.state.fullName}</p>
            <p> Email : {location.state.email}</p>
            <p> Message: {location.state.message}</p>
            <p> Message1 : {message1}</p>
        </div>
    )
}

export default ContactInfo
