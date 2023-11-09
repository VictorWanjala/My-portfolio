import React from 'react'
import { Email } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, My Name is Victor</h2>
        <div className='prompt'>
          <p>I'm a passionate software developer dedicated to crafting innovative solutions through code. 
            With a strong foundation in problem-solving and a love for clean, efficient design, 
            I bring creative solutions to life in the digital world.
          </p>
          <a href="https://www.linkedin.com/in/wanjala-victor-3aa620129/" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
          </a>
          <a href="mailto:wanjala94vic@gmail.com">
          <Email />
          </a>
          <a href="https://github.com/VictorWanjala" target="_blank" rel="noopener noreferrer">
            <GitHub/>
            </a>
          
        </div>

      </div>

      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, MaterialUI, Npm, Bootstrap, TailwindCSS</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS, MySQL, Flask,SQLite, laravel</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Python, Javascript,PHP,Kotlin</span>
          </li>

        </ol>
      </div>

    </div>
  )
}

export default Home