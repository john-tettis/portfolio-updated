import React, { useState } from 'react';
import '../styles/Nav.css';
import useSectionObserver from './hooks/useSectionObserver';
import Hamburger from './Utils/Hamburger';
import useScrollTo from './hooks/useScrollTo';
import SocialLinks from './Utils/SocialLinks';

const Nav = ({ navRefs }) => {
  const [menu, setMenu] = useState(false);
  const { about, experience, projects } = navRefs;

  // Custom hook for smooth scrolling
  const scrollTo = useScrollTo();

  // Active section management
  const [activeSection, manualUpdateActive] = useSectionObserver();

  // Handle navigation for mobile and desktop
  const handleNavigation = (ref, offset) => {
    setMenu(false); // Close the menu (for mobile)
    scrollTo(ref, offset, manualUpdateActive);
  };

  // Menu toggle
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="nav-container">
      <div className={`nav desktop fade-in ${menu ? 'active' : ''}`}>
        <li>
          <a
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => handleNavigation(about, 80)}
          >
            About
          </a>
        </li>
        <li>
          <a
            className={activeSection === 'experience' ? 'active' : ''}
            onClick={() => handleNavigation(experience, 80)}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => handleNavigation(projects, 0)}
          >
            Projects
          </a>
        </li>
      </div>
      <Hamburger menu={menu} toggleMenu={toggleMenu} />
      <SocialLinks className="nav-mobile-social" />
    </div>
  );
};

export default Nav;
