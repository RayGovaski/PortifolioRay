import { Link, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsFileEarmarkText, BsLaptop } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const navItems = [
    { id: 'home', path: '/', label: 'Home', icon: <AiFillHome size={18} /> },
    { id: 'sobre', path: '/sobre', label: 'Sobre', icon: <BsFileEarmarkText size={18} /> },
    { id: 'carreira', path: '/carreira', label: 'Carreira', icon: <MdWork size={18} /> },
    { id: 'projetos', path: '/projetos', label: 'Projetos', icon: <BsLaptop size={18} /> },
    { id: 'contato', path: '/contato', label: 'Contato', icon: <RiContactsLine size={18} /> },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {navItems.map((item) => (
          <Link 
            to={item.path}
            key={item.id}
            className={`navbar-item ${currentPath === item.path ? 'active' : ''}`}
          >
            <div className="navbar-icon">{item.icon}</div>
            <span className="navbar-label">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;