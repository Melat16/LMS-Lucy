import './App.css';
import Landing from './pages/Landing';
import Courses from './pages/Courses';
import SingleCourse from './pages/SingleCourse';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App" >

    
      <Routes>
          <Route exact path='/'  element={<Landing/>}> </Route>
          <Route path='/courses' element={<Courses/>}> </Route>
          <Route path="/courses/:id" element={<SingleCourse />} />
           
     </Routes>
  
       </div>
       </Router>
   
  );
}

export default App;
