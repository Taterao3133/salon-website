import { Routes, Route, Navigate  } from 'react-router-dom';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import Services from '../../Pages/Services';
import ScrollTop from '../../utils/ScrollTop';
import Privacyterms from '../../Pages/Privacyterms';
import Courses from '../../Pages/Courses';

import AdminPanel from '../admin/admin';
import AdminLogin from '../admin/login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
// import PrivateRoute from '../Privateroute/PrivateRoute';

function RouterConfg() {
  return( 
    <>
    <ScrollTop /> 
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/courses" element={<Courses />} />
      
      <Route path='/service' element={<Services/>}/>
      <Route path='/privacy' element={<Privacyterms/>}/>

      <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />

        <Route path="admin/login" element={<AdminLogin />} />
    </Routes>
    
    </>
  )
}

export default RouterConfg;