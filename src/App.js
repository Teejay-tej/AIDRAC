import Navbar from './Navbar';
import Home from './Home';


import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AboutUs from './AboutUs';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Routes>


    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<AboutUs/>}/>

    <Route path="/*" element={<Home/>} />

    </Routes>
    </div>
    </Router>
  );
}

export default App;