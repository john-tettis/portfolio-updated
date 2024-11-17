import React, { useEffect, useRef } from 'react';
import SkillBubble from './SkillBubble'
import '../../styles/WorkCard.css'

const WorkCard= ({title, company, description, duration,skills})=>{


    return(
    <div className='card'>
        <div className="card-row-top">
            <h4 className="duration column-left">{duration}</h4>
            <div className='card-right column-right'>
                <h4 className='card-title'>{title}</h4>
                <p className="card-company">{company}</p>
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

export default WorkCard