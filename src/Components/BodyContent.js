import React, { useEffect, useRef } from 'react';
import Bio from './Sections/Bio';
import Column from './Utils/Column';
import '../styles/BodyContent.css'
import Nav from './Nav';
import ScrollSection from './ScrollSection';

const BodyContent= ({scrollRef,navRefs, loading})=>{
    
    return(
    <div className='body-content'>
        <Column left={true}>
            <Bio loading={loading} />
            <Nav
            navRefs={navRefs}
            scrollRef={scrollRef}
            />
        </Column>
        <Column><ScrollSection loading={loading} navRefs={navRefs} ref={scrollRef}/></Column>

        
    </div>
    )

}

export default BodyContent