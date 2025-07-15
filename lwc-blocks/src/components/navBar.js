import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import brand from '../assets/brandLogo.png';
import Home from './home';
import About from './about';
import Components from './components';

const NAV_ITEMS = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'components', label: 'Components', path: '/components' },
  { key: 'about', label: 'About', path: '/about' }
];

const NavLinks = () => {
  const location = useLocation();
  return (
    <>
      {NAV_ITEMS.map(item => (
        <Link
          key={item.key}
          to={item.path}
          className="nav-btn"
          style={{
            textDecoration: location.pathname === item.path ? 'underline' : 'none'
          }}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
};

const NavBar = () => {
  return (
    <Router>
      <nav className="navbar">
        <div className="nav-title">
        <img src={brand} alt="Logo" id='brand'  />

        </div>
        <NavLinks />
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};



export default NavBar;
