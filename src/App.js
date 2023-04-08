import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import WhyChooseUs from './components/WhyChooseUs';


function App() {
  return (
    <div className="App">
      <Navbar/>
    <Home/>
    <WhyChooseUs/>
    </div>
  );
}

export default App;
