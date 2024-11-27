
import React, {forwardRef} from 'react';
import ProjectCard from './Utils/ProjectCard'
import '../styles/WorkHistory.css'
import raspberryPI from '../Assets/Images/raspberry-pi.png'


const projects = [
    {
        title:"Raspberry PI Video Server",
        link:"https://github.com/john-tettis/RaspberryPi-remote-video-server",
        description:`Remote video server for a raspberry pi to stream youtube videos to a projector blah blah blah blah blah blah blah blah
        `,
        imgUrl:raspberryPI,
        skills:["Flask","Node.js", "Express","React","SQL", "Data Analytics"]
    },
    {
        title:"Raspberry PI Video Server",
        link:"https://github.com/john-tettis/RaspberryPi-remote-video-server",
        description:`Remote video server for a raspberry pi to stream youtube videos to a projector blah blah blah blah blah blah blah blah
        `,
        imgUrl:raspberryPI,
        skills:["Flask","Node.js", "Express","React","SQL", "Data Analytics"]
    },
    {
        title:"Raspberry PI Video Server",
        link:"https://github.com/john-tettis/RaspberryPi-remote-video-server",
        description:`Remote video server for a raspberry pi to stream youtube videos to a projector blah blah blah blah blah blah blah blah
        `,
        imgUrl:raspberryPI,
        skills:["Flask","Node.js", "Express","React","SQL", "Data Analytics"]
    },
    {
      title:"Raspberry PI Video Server",
      link:"https://github.com/john-tettis/RaspberryPi-remote-video-server",
      description:`Remote video server for a raspberry pi to stream youtube videos to a projector blah blah blah blah blah blah blah blah
      `,
      imgUrl:raspberryPI,
      skills:["Flask","Node.js", "Express","React","SQL", "Data Analytics"]
    }
]
const Projects =  forwardRef((props,ref)=>{


    return(
    <section ref={ref} id='projects'>
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