import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder'

function Navbar() {
    const [expandNavbar, setexpandNavbar] =useState(false)
    const location = useLocation();

    useEffect(()=>{
        setexpandNavbar(false);
    },[location]);
  return (
    <div className='navbar' id={expandNavbar ? 'open': 'closed'}>
        <div className='toggleButton'>
            <button onClick={()=>{setexpandNavbar((previ)=>!previ)}}>
                <ReorderIcon/>
                </button>
        </div>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/experience'>Experience</Link>
            <Link to='/skills'>Skills</Link>

        </div>

    </div>
  )
}

export default Navbar