import React, { forwardRef, useEffect, useRef } from 'react';
import About from './Sections/About';
import Experience from './Sections/Experience';
import Projects from './Sections/Projects';
import '../styles/ScrollSection.css'
import '../styles/Utils/Animations.css'
 
const ScrollSection= forwardRef(({navRefs},ref)=>{
    const {about,experience,projects} = navRefs
    return(
    <div ref={ref}className={'scroll-section fade-in'}>
        <About projectRef={projects} ref ={about}/>
        <Experience ref={experience}/>
        <Projects ref={projects}/>
        
    </div>
        

    )

});

export default ScrollSection