import React, { useEffect, useRef } from 'react';
import SkillBubble from './SkillBubble'
import '../../styles/ProjectCard.css'

const ProjectCard= ({title, link, description, imgUrl})=>{
    const handleClick = () => {
        window.open(link);
    };

    return(
    <div onClick ={handleClick}className='project-card'>    
         <div className="project-card-column-left"> 
            <img className='project-card-image' src={imgUrl}></img>
        </div>
        <div className="project-card-column-right">
            <h4 className='project-card-title card-link'>{title}</h4>
            <p className="project-card-description column-right">{description}</p>
        </div>
    </div>
        

    )

}

export default ProjectCard