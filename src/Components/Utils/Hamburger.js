import React from 'react';
import '../../styles/Hamburger.css'

const Hamburger= ({id})=>{

    return(
        <>
            <input type="checkbox" id="hamburger"/>
            <label for="checkbox" class="toggle">
                <div class="bars" id="bar1"></div>
                <div class="bars" id="bar2"></div>
                <div class="bars" id="bar3"></div>
            </label>
        </>
    )
}

export default Hamburger