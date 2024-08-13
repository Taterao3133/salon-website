import { Routes, Route, Navigate  } from 'react-router-dom';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import Bookingpop from '../../Pages/Bookingpop';
import Services from '../../Pages/Services';
import ScrollTop from '../../utils/ScrollTop';
import Privacyterms from '../../Pages/Privacyterms';

function RouterConfg() {
  <ScrollTop /> 
  return( 
   <>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bookingpop" element={<Bookingpop />} />
      <Route path='/service' element={<Services/>}/>
      <Route path='/privacy' element={<Privacyterms/>}/>
    </Routes>
    
    </>
  )
}

export default RouterConfg;