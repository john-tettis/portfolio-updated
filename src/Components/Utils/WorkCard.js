import React, { useEffect, useRef } from 'react';
// import SkillBubble from './SkillBubble'
import '../../styles/Card.css'

const WorkCard= ({title, company, description, skills})=>{


    return(
    <div className='card'>
        <h4 className='card-title'>{title} - {company}</h4>
        <p className="card-description">{description}</p>
        <div className="card-skills"></div>
        
    </div>
        

    )

}

export default WorkCard