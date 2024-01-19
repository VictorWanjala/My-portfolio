import React from 'react';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

function Home() {
  return (
    <div className='container-fluid home'>
      <div className='row about'>
        <div className='col-md-8'>
          <h2>Hello, I'm Victor Wanjala</h2>
          <p className='lead'>
          I'm a passionate software developer dedicated to crafting innovative solutions through code. 
  With a strong foundation in problem-solving and a love for clean, efficient design, 
  I bring creative solutions to life in the digital world. 
  My commitment to continuous learning and staying updated with the latest technologies 
  empowers me to tackle challenges and deliver high-quality software products.
          </p>
        </div>
        <div className='col-md-4'>
          <div className='social-icons'>
            <a href='https://www.linkedin.com/in/wanjala-victor-3aa620129/' target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
              <LinkedIn /> LinkedIn
            </a>
            <a href='mailto:wanjala94vic@gmail.com' className='btn btn-secondary'>
              <Email /> Email
            </a>
            <a href='https://github.com/VictorWanjala' target='_blank' rel='noopener noreferrer' className='btn btn-dark'>
              <GitHub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
