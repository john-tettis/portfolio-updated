import logo from './logo.svg';
import { useEffect, useRef } from 'react';
import './styles/App.css';
import DynamicBackground from './Components/DynamicBackground';
import BodyContent from './Components/BodyContent'

function App() {
  const scrollableSectionRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (scrollableSectionRef.current) {
        scrollableSectionRef.current.scrollTop += event.deltaY; // Adjust scroll based on mouse wheel movement
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
      <DynamicBackground/>
      <BodyContent
      scrollRef = {scrollableSectionRef}
      />
    </div>
  );
}


export default App;
