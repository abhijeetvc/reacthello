import React from 'react'
import {Link} from 'react-router-dom'

function Home(){

    return(
        <div>
            <h1>Home Component!!!</h1>
            <p>This is Home Component!!!</p>
            <Link to='/about'>
               <button type='button'>Go to About</button>
            </Link>
        </div>
    )
}

export default Home

// Data transfer from one component to another component
// - Props, - Callback Event handling, - Routing, - Context API, - Redux

// localhost:3000/home  --> Home component
// localhost:3000/about --> About component
//