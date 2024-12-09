import React, { useEffect, useRef } from 'react';
import '../../styles/Column.css'

const Column= ({children, left})=>{

    const classname= left ? 'column column-left':'column'
    return(
    <div className={classname}>
        {children}
    </div>
        

    )

}

export default Column