import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Sobre from '../pages/Sobre/Sobre';
import Carreira from '../pages/Carreira/Carreira';

const AppRoutes = () => {
 return (
   <div style={{ maxHeight: 'calc(100vh - 100px)' }}>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/sobre" element={<Sobre />} />
       <Route path="/carreira" element={<Carreira />} />

     </Routes>
   </div>
 );
};

export default AppRoutes;