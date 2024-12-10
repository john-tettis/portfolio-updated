import React from 'react';
import '../../styles/Hamburger.css'

const Hamburger= ({id})=>{

    return(
        <>
            <input type="checkbox" id="hamburger"/>
            <label htmlFor="hamburger" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
            </label>
        </>
    )
}

export default Hamburger