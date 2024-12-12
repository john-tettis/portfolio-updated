import { useState, useEffect, useCallback } from 'react';

const useSectionObserver = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = () => {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.pageYOffset + window.innerHeight;
    
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      console.log({section:section.id,
        rect,
        scrollPosition,
        window:window.innerHeight
      })
      console.log()
      console.log()
      console.log()
      // If the top of the section is within 20% of the viewport height
      if (rect.bottom <= scrollPosition && rect.top >= 0 && rect.bottom <=window.innerHeight ) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [activeSection,setActiveSection];
};

export default useSectionObserver