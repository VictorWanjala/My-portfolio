import React from 'react'
import { Instagram } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram/>
            <Twitter/>
            <LinkedIn/>
            <Email/>
        </div>
        <p>&copy; 2023 victorwanjala</p>

    </div>
  )
}

export default Footer