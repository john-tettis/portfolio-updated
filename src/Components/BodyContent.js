import Bio from './Bio';
import Column from './Utils/Column';
import React, { useEffect, useRef } from 'react';
import '../styles/BodyContent.css'
import ScrollSection from './ScrollSection';

const BodyContent= ()=>{


    return(
    <div className='body-content'>
        <Column><Bio/></Column>
        <Column><ScrollSection/></Column>

        
    </div>
        

    )

}

export default BodyContent