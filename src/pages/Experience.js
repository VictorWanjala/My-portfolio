import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { School } from '@mui/icons-material'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='June 2023 - December 2023'
        iconStyle={{background:'#161e36', color:'#fff'}}
        icon={<School/>}
        >
          <h3 className='vertical-timeline-element-title'>
          Moringa School</h3>
            <p>Fullstack Software Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
        className='vertical-timeline-element--education'
        date='September 2022 - April 2023'
        iconStyle={{background:'#161e36', color:'#fff'}}
        icon={<School/>}
        >
          <h3 className='vertical-timeline-element-title'>
          Emobilis Technology Institute</h3>
            <p>Android Software Development</p>
        </VerticalTimelineElement>


      
      </VerticalTimeline>
    </div>
  )
}

export default Experience