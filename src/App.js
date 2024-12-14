import { useEffect, useState,useRef } from 'react';
import './styles/App.css';
import DynamicBackground from './Components/DynamicBackground';
import LoadingScreen from './Components/Utils/LoadingScreen';
import Bio from './Components/Sections/Bio';
import Column from './Components/Utils/Column';
import Nav from './Components/Nav';
import ScrollSection from './Components/ScrollSection';

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
        <Column left={true}>
            <Bio loading={loading} />
            <Nav
            loading={loading}
            navRefs={navRefs}
            scrollRef={scrollableSectionRef}
            />
        </Column>
        <Column><ScrollSection loading={loading} navRefs={navRefs} ref={scrollableSectionRef}/></Column>
        {/* <BodyContent
        scrollRef = {scrollableSectionRef}
        loading={loading}
        navRefs={navRefs}
        /> */}
    </div>
  );
}


export default App;
