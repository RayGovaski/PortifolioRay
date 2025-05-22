import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import Navbar from './Components/layout/Navbar'

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <AppRoutes />
    </Router>
    </>
   
  );
}

export default App;