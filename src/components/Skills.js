import React from 'react';
import '../styles/Skills.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Skills() {
  return (
    <div className="container skills-container">
      <div className="card skills-card">
        <div className="card-body">
          <h2 className="card-title">Programming Languages</h2>
          <ul className="list-group">
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">Python</li>
            <li className="list-group-item">Kotlin</li>
            <li className="list-group-item">PHP</li>
          </ul>

          <h2 className="card-title mt-4">Frameworks</h2>
          <ul className="list-group">
            <li className="list-group-item">ReactJS</li>
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item">Flask</li>
          </ul>

          <h2 className="card-title mt-4">Web Technologies</h2>
          <ul className="list-group">
            <li className="list-group-item">AJAX</li>
            <li className="list-group-item">REST API</li>
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
