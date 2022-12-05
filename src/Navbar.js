import React from 'react'


import {Link} from "react-router-dom"
import './Navbar.css'
const Navbar=()=>  {
  
    return(
      
            <div className='navbar'>
               <Link id="nvlogo" to='/'><p className="logo">AIDRAC</p></Link> 
             <nav className='navcontainer'>
             
                <Link id="nv" to='/components/Home'>HOME</Link>
                <Link id="nv" to='/about'>ABOUT</Link>
                <Link id="nv" to='/contact'>CONTACT US</Link>

             </nav>
              





            </div>
    )
          }



export default Navbar;