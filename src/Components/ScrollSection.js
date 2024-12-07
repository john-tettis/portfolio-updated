import React, { forwardRef, useEffect, useRef } from 'react';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import '../styles/ScrollSection.css'
 
const ScrollSection= forwardRef(({navRefs},ref)=>{
    const {about,experience,projects} = navRefs
    return(
    <div ref={ref}className='scroll-section fade-in'>
        <About ref ={about}/>
        <Experience ref={experience}/>
        <Projects ref={projects}/>
        
    </div>
        

    )

});

export default ScrollSection