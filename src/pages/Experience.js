import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { School } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Experience.css';


function Experience() {
  return (
    <div className='container-fluid experience'>
      <h2 className='text-center mb-4'>Experience Timeline</h2>
      <VerticalTimeline lineColor='#3e497a'>
        
        <VerticalTimelineElement 
          className='vertical-timeline-element--education bg-light p-4'
          date='June 2023 - December 2023'
          iconStyle={{ background: '#161e36', color: '#fff' }}
          icon={<School />}
        >
          <h3 className='vertical-timeline-element-title'>Moringa School</h3>
          <p className='mb-0'>Fullstack Software Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education bg-light p-4'
          date='September 2022 - April 2023'
          iconStyle={{ background: '#161e36', color: '#fff' }}
          icon={<School />}
        >
          <h3 className='vertical-timeline-element-title'>Emobilis Technology Institute</h3>
          <p className='mb-0'>Android Software Development</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education bg-light p-4'
          date='January 2013 - November 2017'
          iconStyle={{ background: '#161e36', color: '#fff' }}
          icon={<School />}
        >
          <h3 className='vertical-timeline-element-title'>University of Eldoret</h3>
          <p className='mb-0'>Environmental Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education bg-light p-4'
          date=''
          iconStyle={{ background: '#161e36', color: '#fff' }}
          icon={<School />}
        >
          <h3 className='vertical-timeline-element-title'></h3>
          <p className='mb-0'></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education bg-light p-4'
          date=''
          iconStyle={{ background: '#161e36', color: '#fff' }}
          icon={<School />}
        >
          <h3 className='vertical-timeline-element-title'></h3>
          <p className='mb-0'></p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
