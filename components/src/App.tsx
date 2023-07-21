// import { useState } from 'react';
import './App.scss';
import {
  Route,
  Routes
} from "react-router-dom";
import {AboutUs} from './pages/AboutUs';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/HomePage';
// import { Header } from './components/header/Header';

function App() {
  // const [count, setCount] = useState(0); 

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
