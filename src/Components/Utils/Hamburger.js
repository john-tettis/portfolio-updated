import React, {useState} from 'react';
import '../../styles/Hamburger.css'

const Hamburger= ({toggleMenu, menu})=>{
    

    return(
        <>
            <input type="checkbox" checked ={menu}onClick={toggleMenu} id="hamburger"/>
            <label htmlFor="hamburger" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
            </label>
        </>
    )
}

export default Hamburger