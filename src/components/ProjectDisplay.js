import React from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';
import { GitHub } from '@mui/icons-material';
import '../styles/ProjectDisplay.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];

  return (
    <div className="container project">
      <h1 className="display-4">{project.name}</h1>
      <img src={project.image} alt={project.name} className="img-fluid rounded" />
      <p className="lead"><b>Technologies:</b> {project.technologies}</p>

      {project.liveDemo && (
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">
          Live Demo
        </a>
      )}

      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
        <GitHub /> GitHub
      </a>
    </div>
  );
}

export default ProjectDisplay;

