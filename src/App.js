import MobileNav from './Components/MobileNav';
import { useEffect, useRef } from 'react';
import './styles/App.css';
import DynamicBackground from './Components/DynamicBackground';
import BodyContent from './Components/BodyContent'

function App() {
  const scrollableSectionRef = useRef(null);
  const navRefs ={
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null)
}

  useEffect(() => {
    const handleWheel = (event) => {
      if (scrollableSectionRef.current && window.matchMedia('(min-width: 1200px)')) {
        scrollableSectionRef.current.scrollTop += event.deltaY * 1.7; // Adjust scroll based on mouse wheel movement
      }
    };

    // Listen for mouse wheel events on the body
    document.body.addEventListener('wheel', handleWheel);

    // Clean up event listener on component unmount
    return () => {
      document.body.removeEventListener('wheel', handleWheel);
    };
  }, []);
  return (
    <div className="App">
      <MobileNav navRefs={navRefs}/>
      <DynamicBackground/>
      <BodyContent
      scrollRef = {scrollableSectionRef}
      navRefs={navRefs}
      />
    </div>
  );
}


export default App;
