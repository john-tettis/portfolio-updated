import Bio from '../Bio';
import React, { useEffect, useRef } from 'react';
import '../../styles/Column.css'

const Column= ({children})=>{


    return(
    <div className='column'>
        {children}
    </div>
        

    )

}

export default Column