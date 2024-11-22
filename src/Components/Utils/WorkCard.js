import React, { useEffect, useRef } from 'react';
import SkillBubble from './SkillBubble'
import '../../styles/Card.css'

const WorkCard= ({title, company, description, start,end,skills})=>{


    return(
    <div className='card'>
        <div className="card-row-top">
            <h4 className="duration card-column-left">{start} {'\u2014'} {end}</h4>
            <div className=' card-column-right'>
                <h4 className='card-title'>{title}</h4>
                <p className="card-company">{company}</p>
            </div>
        </div>
         <div className="card-row-bottom">
         <div className="card-skills card-column-left">
                {skills.map((skill, index) => (
                    <SkillBubble 
                        key={index} 
                        skill={skill}
                    />
                ))}
            </div>
            <p className="card-description card-column-right">{description}</p>
            

        </div>
    </div>
        

    )

}

export default WorkCard