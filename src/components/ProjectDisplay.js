import React from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';
import { GitHub } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];

  const largeImageStyle = {
    width: '100%', 
    height: 'auto'
  };

  return (
    <div className="container project">
      <h1 className="display-4 text-center mb-4">{project.name}</h1>
      <img src={project.image} alt={project.name} style={largeImageStyle} className="img-fluid rounded mb-3" />
      <p className="lead mb-4"><b>Technologies:</b> {project.technologies}</p>

      <div className="d-flex justify-content-center mb-4">
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">
            Live Demo
          </a>
        )}

        {project.liveDemo && (
          <div style={{ width: '10px' }}></div> // Adjust the width to set the gap
        )}

        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
          <GitHub /> GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;






