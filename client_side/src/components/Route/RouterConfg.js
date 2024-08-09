import { Routes, Route, Navigate, Router } from 'react-router-dom';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import Bookingpop from '../../Pages/Bookingpop';
import Services from '../../Pages/Services';

function RouterConfg() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bookingpop" element={<Bookingpop />} />
      <Route path='/service' element={<Services/>}/>
      
    </Routes>
  );
}

export default RouterConfg;