import logo from './logo.svg';
import './styles/App.css';
import DynamicBackground from './Components/DynamicBackground';
import BodyContent from './Components/BodyContent'

function App() {
  return (
    <div className="App">
      <DynamicBackground/>
      <BodyContent/>
    </div>
  );
}

export default App;
