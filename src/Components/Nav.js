import React, { useEffect, useState, useRef } from 'react';
import '../styles/Nav.css'
import useSectionObserver from './hooks/useSectionObserver';
import Hamburger from './Utils/Hamburger';




const Nav = ({navRefs,})=>{
    const [menu, setMenu] = useState(false)

    const toggleMenu = ()=>{
        setMenu(!menu)
    }
    const {about,experience,projects} = navRefs
    // [id for active section, manually update active]
    const [activeSection, manualUpdateActive] = useSectionObserver();
//simple scroll function to compute where to send scrollRef to
   const scrollTo = (ref, offset = 80) => {
    //check to  make sure the ref is assigned
    if (ref?.current) {
        //element top is the top of the rectangle plus the current scroll position
        const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
        //scroll to element. fine tune offset as needed
        window.scrollTo({
            top: elementTop - offset,
            behavior: "smooth",
        });
        manualUpdateActive(ref.current.id)
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
        <Hamburger menu={menu} toggleMenu={toggleMenu}/>

    </div>
        
    )

}

export default Nav