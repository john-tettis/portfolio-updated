import { useEffect, useState,useRef } from 'react';
import './styles/App.css';
import DynamicBackground from './Components/DynamicBackground';
import BodyContent from './Components/BodyContent'
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
 //for smooth scrollbar hiding/ showing
  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }
//loading screen delay:)
  useEffect(() => {
    const scrollbarWidth = getScrollbarWidth();
    document.documentElement.classList.add("no-scroll");
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    //loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    // add in scrollbar shortly after loading screen slides up
    setTimeout(() => {
      document.documentElement.classList.remove("no-scroll");
      document.body.style.paddingRight = ""; // Remove padding
      
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
        <LoadingScreen
        loading={loading}
        />
        <DynamicBackground/>
        <BodyContent
        scrollRef = {scrollableSectionRef}
        loading={loading}
        navRefs={navRefs}
        />
    </div>
  );
}


export default App;
