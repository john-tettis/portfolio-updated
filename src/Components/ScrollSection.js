import Description from './Description';
import WorkHistory from './WorkHistory';
import React, { forwardRef, useEffect, useRef } from 'react';
import '../styles/scrollSection.css'
 
const ScrollSection= forwardRef((props,ref)=>{


    return(
    <div ref={ref}className='scroll-section fade-in'>
        <Description/>
        <WorkHistory/>
        
    </div>
        

    )

});

export default ScrollSection