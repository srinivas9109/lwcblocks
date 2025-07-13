import React, { useState } from 'react';
import '../app.css'; // Make sure this import exists
import { STATIC_TEXT } from '../utils/staticText';
import About from './about';

const NAV_ITEMS = [
  { key: 'home', label: 'Home' },
  { key: 'components', label: 'Components' },
  { key: 'about', label: 'About' }
];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <h1>{STATIC_TEXT.home}</h1>;
      case 'components':
        return <h1>{STATIC_TEXT.components}</h1>;
      case 'about':
        return <About />;
      default:
        return null;
    }
  };

  return (
    <div>
      <nav className="navbar">
        {NAV_ITEMS.map(item => (
          <button
            key={item.key}
            onClick={() => setActiveTab(item.key)}
            className={`nav-btn${activeTab === item.key ? ' active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};


export default HomePage;
