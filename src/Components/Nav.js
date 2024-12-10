import React, { useEffect, useState, useRef } from 'react';
import '../styles/Nav.css'
import useSectionObserver from './hooks/useSectionObserver';
import Hamburger from './Utils/Hamburger';
const Nav = ({navRefs})=>{
    const [menu, setMenu] = useState(false)

    const toggleMenu = ()=>{
        console.log(!menu)
        setMenu(!menu)
    }
    const {about,experience,projects} = navRefs
    const activeSection = useSectionObserver();

    const scrollTo =(ref)=>{
        if(ref.current){
            ref.current.scrollIntoView({
                behavior:"smooth"
            })
        }
        else{
            console.log('NO CURRENT REF')
        }
    }
    //for mobile, need to close menu and then navigate.
    const handleNavigation =(ref)=>{
        setMenu(false)
        scrollTo(ref)
    }

    

    return(
    <div className='nav-container'>
        <div className={`nav desktop fade-in ${menu ? 'active':''}`}>
            <li> <a className={activeSection == "about" ? "active" : ""}onClick={()=>handleNavigation(about)}>About</a></li>
            <li> <a className={activeSection == "experience" ? "active" : ""}onClick={()=>handleNavigation(experience)}>Experience</a></li>
            <li> <a className={activeSection == "projects" ? "active" : ""}onClick={()=>handleNavigation(projects)}>Projects</a></li>
        </div>
        <Hamburger toggleMenu={toggleMenu}/>

    </div>
        
    )

}

export default Nav