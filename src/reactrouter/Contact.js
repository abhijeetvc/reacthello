import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact(){

    const contactObj={
        fullName:'',
        email:'',
        message:''
    }

    const navigate=useNavigate()

    const[contact,setContact]=React.useState(contactObj)

    const handleInput=(event)=>{
        setContact({...contact,[event.target.name]:event.target.value})
    }

    const message1="React Router Demo!!!"

    const sendContactInfo=()=>{
        navigate(`/displayInfo/${message1}`,{state:contact})
    }

    return(
        <div>
            <h1>Contact Info.</h1>
            <form>
                <label>Name : </label>
                <input type='text' name='fullName' onChange={handleInput}/>

                <label>Email : </label>
                <input type='email' name='email' onChange={handleInput}/>

                <label>Message : </label>
                <input type='text' name='message' onChange={handleInput}/>

                <button type='button' onClick={sendContactInfo}>Send</button>

            </form>
        </div>
    )
}

export default Contact