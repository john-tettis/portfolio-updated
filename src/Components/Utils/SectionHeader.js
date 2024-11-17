import Bio from '../Bio';
import React, { useEffect, useRef } from 'react';
import '../../styles/Column.css'

const SectionHeader= ({children})=>{


    return(
    <h2 className='section-header'>
        {children}
    </h2>
        

    )

}

export default SectionHeader