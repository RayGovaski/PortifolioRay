import { useState, useEffect } from 'react'; // Add useEffect for logging location changes
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsFileEarmarkText, BsLaptop } from 'react-icons/bs';
import { MdWork, MdClose } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri'; // Assuming you might add this later
import { HiMenuAlt3 } from 'react-icons/hi';
import LogoSvg from '../../assets/Logo.svg';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Log when path changes to see re-render trigger
  useEffect(() => {
    console.log('Navbar: Path changed to:', currentPath);
    // Optionally, if menu should always close on path change regardless of how it changed:
    // setIsMenuOpen(false); // This might be too aggressive, closeMenu on links is usually enough
  }, [currentPath]);

  const navItems = [
    { id: 'home', path: '/', label: 'Home', icon: <AiFillHome size={18} /> },
    { id: 'sobre', path: '/sobre', label: 'Sobre', icon: <BsFileEarmarkText size={18} /> },
    { id: 'carreira', path: '/carreira', label: 'Carreira', icon: <MdWork size={18} /> },
    { id: 'projetos', path: '/projetos', label: 'Projetos', icon: <BsLaptop size={18} /> },
  ];

  const toggleMenu = () => {
    console.log('Navbar: Toggling menu. Previous state:', isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    console.log('Navbar: Closing menu.');
    setIsMenuOpen(false);
  };

  console.log('Navbar: Rendering. isMenuOpen:', isMenuOpen, 'Current path:', currentPath);

  return (
    <>
      <div className="navbar-bg-animation"></div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={LogoSvg} alt="Logo" className="logo-image" />
          </Link>

          <div className="navbar-menu">
            {navItems.map((item) => (
              <Link
                to={item.path}
                key={item.id}
                className={`navbar-item ${currentPath === item.path ? 'active' : ''}`}
                onClick={closeMenu} // Close menu on desktop item click too, if desired
              >
                <div className="navbar-icon">{item.icon}</div>
                <span className="navbar-label">{item.label}</span>
              </Link>
            ))}
          </div>

          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {console.log('Navbar: Rendering mobile button icon. isMenuOpen:', isMenuOpen)}
            {isMenuOpen ? <MdClose size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

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