import React, { useEffect, useRef } from 'react';
import SkillBubble from './SkillBubble'
import '../../styles/Card.css'

const ProjectCard= ({title, link, description, imgUrl})=>{
    const handleClick = () => {
        window.open(link);
    };

    return(
    <div onClick ={handleClick}className='card project-card'>    
         <div className="card-column-left"> 
            <img className='card-image' src={imgUrl}></img>
        </div>
        <div className="card-column-right">
            <h4 className='card-title card-link'>{title}</h4>
            <p className="card-description column-right">{description}</p>
        </div>
    </div>
        

    )

}

export default ProjectCard