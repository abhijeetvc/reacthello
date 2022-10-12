import React from 'react'
import { useNavigate } from 'react-router-dom'

function About(){

    const navigate=useNavigate()

    const message="React Routing!!!"

    const person={
        id:1,
        name:'John',
        city:'Pune'
    }

    const gotoServices=()=>{
        navigate(`/services/${message}`)
    }

    const passObject=()=>{
        navigate(`/services`,{state:person})
    }

    return(
        <div>
            <h1>About Component!!!</h1>
            <p>This is About Component!!!</p>
            <button type='button' onClick={gotoServices}>Go To Services</button>
            <button type='button' onClick={passObject}>Pass Object</button>

        </div>
    )
}

export default About