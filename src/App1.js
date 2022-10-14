import React from 'react'
import About from './reactrouter/About'
import Home from './reactrouter/Home'
import Services from './reactrouter/Services'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Contact from './reactrouter/Contact'
import ContactInfo from './reactrouter/ContactInfo'

function App1(){

    return(
        <div>
          <BrowserRouter>  
          <ul>
            {/* <li><a href='/home'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/services'>Services</a></li> */}

            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>

            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/displayInfo/:message1' element={<ContactInfo/>}/>
            </Routes>
          </BrowserRouter>  
        </div>
    )
}

export default App1