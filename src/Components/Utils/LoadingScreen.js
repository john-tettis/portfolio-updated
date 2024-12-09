import Logo from './Logo';
import React, { useEffect, useRef } from 'react';
import '../../styles/LoadingScreen.css'
import '../../styles/Utils/Animations.css'

const LoadingScreen= ({loading})=>{

   const loadClass = 'loading-screen' + (loading ? '':' move-up');
    return(
    <div className={loadClass}>
        <Logo/>
    </div>
        

    )

}

export default LoadingScreen