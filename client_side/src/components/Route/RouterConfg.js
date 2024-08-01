import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import Bookingpop from '../../Pages/Bookingpop';

function RouterConfg() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bookingpop" element={<Bookingpop />} />
      
    </Routes>
  );
}

export default RouterConfg;