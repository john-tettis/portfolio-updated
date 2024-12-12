
import React, {forwardRef} from 'react';
import ProjectCard from '../Utils/ProjectCard'
import raspberryPI from '../../Assets/Images/raspberry-pi.png'
import dat from '../../Assets/Images/DAT.jpg'
import SectionHeader from '../Utils/SectionHeader';


const projects = [
    {
        title:"Data Annotation Chrome Extension",
        link:"https://chromewebstore.google.com/detail/dat-extension/olnfeojadebhopefbogmjdpekifcdmkp",
        repo:"",
        description:`
        Chrome extension myself and two others developed for general use on our company's website. 
        The goal and acheivement of this extension was and is to streamline company procedure and increase productivity across the board.
        Currently has 60 active users.
        `,
        imgUrl:dat,
        skills:["JavaScript", "HTML","Chrome API"]
    },
    {
        title:"Raspberry PI Video Server",
        link:"https://github.com/john-tettis/RaspberryPi-remote-video-server",
        description:`Remote video server run on a Raspberry PI. 
        Receives Youtube video link from user's device, runs selenium, starts projector, and displays said 
        video over the projector. Features include favorited youtube videos, audio control, and more!
        `,
        imgUrl:raspberryPI,
        skills:["Flask", "Selenium","Static Web Serving","SQL", "Data Analytics"]
    }
    
]
const Projects =  forwardRef((props,ref)=>{


    return(
    <section ref={ref} id='projects' className='section'>
        <SectionHeader>Projects</SectionHeader>
        {projects.map((p, index) => (
          <ProjectCard 
            key={index} 
            link={p.link}
            title={p.title} 
            description={p.description} 
            imgUrl={p.imgUrl}
            skills={p.skills}
          />
        ))}
    </section>
        

    )

})

export default Projects