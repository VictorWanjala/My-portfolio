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
        <div className='project'>
            <h1>{project.name}</h1>
            <img src={project.image} alt={project.name} />
            <p><b>Technologies:</b> {project.technologies}</p>

            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="demo-link">
                  Live Demo
              </a>
            )}

            <a href={project.github} target="_blank" rel="noopener noreferrer">
                <GitHub />
            </a>
        </div>
    );
}

export default ProjectDisplay;
