import React, { useEffect, useRef } from 'react';
import SkillBubble from './SkillBubble'
import '../../styles/Card.css'

const WorkCard= ({title, company, description, duration,skills})=>{


    return(
    <div className='card'>
        <div className="card-column-left">
            <h4>{duration}</h4>
            <div className="card-skills">
                {skills.map((skill, index) => (
                    <SkillBubble 
                        key={index} 
                        skill={skill}
                    />
                ))}
            </div>
        </div>
         <div className="card-column-right">
            <h4 className='card-title'>{title}</h4>
            <p className="card-company">{company}</p>
            <p className="card-description">{description}</p>
            

        </div>
    </div>
        

    )

}

export default WorkCard