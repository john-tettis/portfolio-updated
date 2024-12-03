import MobileNav from './Components/MobileNav';
import { useEffect, useRef } from 'react';
import './styles/App.css';
import DynamicBackground from './Components/DynamicBackground';
import BodyContent from './Components/BodyContent'
import debounce from 'lodash/debounce';

function App() {
  const scrollableSectionRef = useRef(null);
  const navRefs ={
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null)
}



useEffect(() => {
  const handleWheel = debounce((event) => {
    if (scrollableSectionRef.current && window.matchMedia('(min-width: 1200px)').matches) {
      scrollableSectionRef.current.scrollTop += event.deltaY; 
    }
  }, 16); // Throttle to ~60fps

  document.body.addEventListener('wheel', handleWheel);

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
