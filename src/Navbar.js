import React from 'react'


import {Link} from "react-router-dom"
import './Navbar.css'
const Navbar=()=>  {
    return(
            <div className='navbar'>

             <nav className='navcontainer'>

                <Link id="nv" to='/'>Home</Link>
                <Link id="nv" to='/about'>About</Link>

             </nav>
                <div className='buttons'>
                <button className='sign-in'>Sign in</button>
                <button className='sign-up'>Sign up</button>
                </div>





            </div>
    )
          }



export default Navbar;