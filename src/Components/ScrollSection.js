import About from './About';
import Experience from './Experience';
import React, { forwardRef, useEffect, useRef } from 'react';
import '../styles/scrollSection.css'
 
const ScrollSection= forwardRef(({navRefs},ref)=>{
    const {about,experience,projects} = navRefs
    return(
    <div ref={ref}className='scroll-section fade-in'>
        <About ref ={about}/>
        <Experience ref={experience}/>
        
    </div>
        

    )

});

export default ScrollSection