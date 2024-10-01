import Welcome from './Welcome';
import WelcomeBack from './WelcomeBack';
import {Login} from "./components/login"
import {  Route, Routes } from "react-router-dom"
import './style.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Signup from './components/signup';
import Fertilizer from './components/Fertilizer';
import Crop from './components/CropRecommendation';

function App() {
  return (
    <div className="App">
       <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/fertilizer' element={<Fertilizer />} />
        <Route path='/crop' element={<Crop />} />
        

      {/* <Login /> */}

      </Routes>
    </div>
  );
};


export default App;
