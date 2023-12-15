import React from 'react'
import '../styles/Skills.css'

function Skills() {
  return (
    <div className="skills-container">
        <div className="skills-card">
            <h2>Programming Languages</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Kotlin</li>
                    <li>PHP</li>
                </ul>
            <h2>Frameworks</h2>
                    <ul>
                        <li>ReactJS</li>
                        <li>Node.js</li>
                        <li>Flask</li>
                    </ul>
                <h2>Web Technologies</h2>
                    <ul>
                        <li>AJAX</li>
                        <li>REST API</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
        </div>

    </div>
  )
}

export default Skills