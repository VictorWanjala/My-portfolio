import React from 'react'
import { Twitter } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import '../styles/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href="https://twitter.com/wanjalavictor3" target="_blank" rel="noopener noreferrer">
          <Twitter />
        </a>
        <a href="https://www.linkedin.com/in/wanjala-victor-3aa620129/" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </a>
        <a href="mailto:wanjala94vic@gmail.com">
          <Email />
        </a>
        </div>
        <p>&copy; 2023 victorwanjala</p>

    </div>
  )
}

export default Footer