import Bio from './Bio';
import Column from './Utils/Column';
import React, { useEffect, useRef } from 'react';
import '../styles/BodyContent.css'
import Nav from './Nav';
import ScrollSection from './ScrollSection';

const BodyContent= ({scrollRef})=>{
    const navRefs ={
        about: useRef(null),
        experience: useRef(null),
        rojects: useRef(null)
    }
    return(
    <div className='body-content'>
        <Column>
            <Bio />
            <Nav
            navRefs={navRefs}
            />
        </Column>
        <Column><ScrollSection navRefs={navRefs} ref={scrollRef}/></Column>

        
    </div>
    )

}

export default BodyContent