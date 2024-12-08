import MobileNav from './Components/MobileNav';
import { useEffect, useState,useRef } from 'react';
import './styles/App.css';
import DynamicBackground from './Components/DynamicBackground';
import BodyContent from './Components/BodyContent'
import debounce from 'lodash/debounce';
import LoadingScreen from './Components/Utils/LoadingScreen';

function App() {
  //scrollbar reference for scrolling only the column adn not the body
  const scrollableSectionRef = useRef(null);
  //navbar references to allow navbar to function across app
  const navRefs ={
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null)
  }

  //loading functionality
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      
      setLoading(false);
    }, 3000); 
  }, []);



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
        <LoadingScreen
        loading={loading}
        />
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
