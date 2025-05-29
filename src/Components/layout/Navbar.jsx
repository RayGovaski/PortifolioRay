import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsFileEarmarkText, BsLaptop } from 'react-icons/bs';
import { MdWork, MdClose } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import { HiMenuAlt3 } from 'react-icons/hi';
import LogoSvg from '../../assets/Logo.svg'; // Importa o SVG
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  
  const navItems = [
    { id: 'home', path: '/', label: 'Home', icon: <AiFillHome size={18} /> },
    { id: 'sobre', path: '/sobre', label: 'Sobre', icon: <BsFileEarmarkText size={18} /> },
    { id: 'carreira', path: '/carreira', label: 'Carreira', icon: <MdWork size={18} /> },
    { id: 'projetos', path: '/projetos', label: 'Projetos', icon: <BsLaptop size={18} /> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Animated Background */}
      <div className="navbar-bg-animation"></div>
      
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={LogoSvg} alt="Logo" className="logo-image" />
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-menu">
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

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <MdClose size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu">
            {navItems.map((item) => (
              <Link 
                to={item.path}
                key={item.id}
                className={`mobile-menu-item ${currentPath === item.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <div className="mobile-menu-icon">{item.icon}</div>
                <span className="mobile-menu-label">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;