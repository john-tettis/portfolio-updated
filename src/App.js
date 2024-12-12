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
//loading screen delay:)
  useEffect(() => {

    setTimeout(() => {
      
      setLoading(false);
    }, 3000); 
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
