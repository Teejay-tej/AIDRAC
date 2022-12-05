import React from 'react'
import './home.css'
import {Link} from "react-router-dom"

const Tryit=()=>{
return(
<div className='tryit'>

<button id = 'Herobtn'><Link id = "Herobtn" to='/upload'>TRY IT OUT HERE</Link></button>
</div>
)

}
export default Tryit;