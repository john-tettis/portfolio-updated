import React, { useEffect, useRef } from 'react';
import SkillBubble from './SkillBubble'
import '../../styles/WorkCard.css'

const ProjectCard= ({title, link, description, img})=>{


    return(
    <div className='card'>
        <div className="card-row-top">
           
            <div className='card-right column-right'>
                <h4 className='card-title'><a href={link}>{title}</a></h4>
            </div>
        </div>
         <div className="card-row-bottom">
         <div className="card-skills column-left">
                {skills.map((skill, index) => (
                    <SkillBubble 
                        key={index} 
                        skill={skill}
                    />
                ))}
            </div>
            <p className="card-description column-right">{description}</p>
            

        </div>
    </div>
        

    )

}

export default ProjectCard