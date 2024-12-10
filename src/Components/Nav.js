import React, { useEffect, useState, useRef } from 'react';
import '../styles/Nav.css'
import useSectionObserver from './hooks/useSectionObserver';
import Hamburger from './Utils/Hamburger';




const Nav = ({navRefs, scrollRef})=>{
    const [menu, setMenu] = useState(false)

    const toggleMenu = ()=>{
        console.log(!menu)
        setMenu(!menu)
    }
    const {about,experience,projects} = navRefs
    const activeSection = useSectionObserver();
//simple scroll function to compute where to send scrollRef to
   const scrollTo = (ref, offset = 80) => {
    if (ref?.current) {
        //basically, if we are at mobile _> scroll the document
        const scrollElement = window.matchMedia('(min-width: 1200px)').matches ? scrollRef.current: window;
        const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
        scrollElement.scrollTo({
            top: elementTop - offset,
            behavior: "smooth",
        });
    } else {
        console.log("NO CURRENT REF");
    }
};

    //for mobile, need to close menu and then navigate.
    const handleNavigation =(ref, offset)=>{
        setMenu(false)
        scrollTo(ref, offset)
    }

    

    return(
    <div className='nav-container'>
        <div className={`nav desktop fade-in ${menu ? 'active':''}`}>
            <li> <a className={activeSection == "about" ? "active" : ""}onClick={()=>handleNavigation(about, 80)}>About</a></li>
            <li> <a className={activeSection == "experience" ? "active" : ""}onClick={()=>handleNavigation(experience,80)}>Experience</a></li>
            <li> <a className={activeSection == "projects" ? "active" : ""}onClick={()=>handleNavigation(projects,0)}>Projects</a></li>
        </div>
        <Hamburger toggleMenu={toggleMenu}/>

    </div>
        
    )

}

export default Nav