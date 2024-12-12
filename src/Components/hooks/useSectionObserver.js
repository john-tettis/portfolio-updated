import { useState, useEffect, useRef } from 'react';

const useSectionObserver = () => {
  const [activeSection, setActiveSection] = useState(null);
  //pause state for when nav is click - otherwise if you go from last to first or vice versa it kinda of flickers and spasses
  //this way, we can pause the active highlighting for a fraction of a second while the scrollTO functino is called.
  const [pause, setPause] = useState(false);
  //however in order for our event listener to access this pause value, we need to pass a reference, otherwise the stat updates will not be reflected inside the listener.
  const pauseRef = useRef(pause); // Create a ref to hold the pause state

 //when pause changes, update the reference to reflect it
  useEffect(() => {
    pauseRef.current = pause;
  }, [pause]);

  const handleScroll = () => {
     //if we are paused we can just abort
     if (pauseRef.current) {
      return;
    }

    //select all scrollable sections
    const sections = document.querySelectorAll('.section');
    //find scroll position
    const scrollPosition = window.scrollY + window.innerHeight;
   

    sections.forEach((section) => {
      //get boundaries of the rect
      const rect = section.getBoundingClientRect();

       //if the distance from the top of the window to the top of the section is >= 0.
       // and the distance from top of window to bottom of section (rect.bottom)  <= the distance from the top of window to bottom of window
      if (
        rect.top >= 0 &&
        rect.bottom <= window.innerHeight
      ) {
        //activate this section!
        setActiveSection(section.id);
      }
    });
  };
 //manually update the actve section -> this is for nav.js to call when a nav item  is clicked
  const manuallyUpdateActive = (id) => {
    setActiveSection(id);
    setPause(true); 
  };
//when pause is activated, lets set a timeout to turn it off after half a second.
  useEffect(() => {
    if (pause) {
      const timeoutId = setTimeout(() => {
        setPause(false);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [pause]);
//setup scroll listeners!
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [activeSection, manuallyUpdateActive];
};

export default useSectionObserver;
