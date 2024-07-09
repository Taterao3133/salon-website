import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../Pages/Home';
import About from '../../Pages/About';

function RouterConfg() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default RouterConfg;