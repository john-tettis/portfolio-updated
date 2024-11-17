import React, { useEffect, useRef } from 'react';
import {Link} from 'react-scroll'
import '../styles/Nav.css'
import useSectionObserver from './hooks/useSectionObserver';
const Nav = ({navRefs})=>{
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

    

    return(
        <div className="nav desktop">
            <li> <a className={activeSection == "about" ? "active" : ""}onClick={()=>scrollTo(about)}>About</a></li>
            <li> <a className={activeSection == "experience" ? "active" : ""}onClick={()=>scrollTo(experience)}>Experience</a></li>
            <li> <a className={activeSection == "" ? "projects" : ""}onClick={()=>scrollTo(projects)}>Projects</a></li>
        </div>
    )

}

export default Nav