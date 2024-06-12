import React, { useContext, useState } from 'react';
import LanguageContext from '../LanguageContext';
import ThemeContext from '../ThemeContext';
import logo from '../assets/logo.svg';
import sunIcon from '../assets/sun.svg';
import moonIcon from '../assets/moon.svg';
import globeIcon from '../assets/globe.svg';
import './header.css';

const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => setIsDropdownVisible(true);
  const handleMouseLeave = () => setIsDropdownVisible(false);

  const handleLanguageChange = (lang) => {
    toggleLanguage(lang);
    setIsDropdownVisible(false);
  };

  return (
    <header className={`header ${theme}`}>
      <img src={logo} alt="React Logo" className="logo" />
      <nav>
        <ul className='header_nav-ul'>
          <li><a href="#">{language === "ru" ? "О нас" : "About Us"}</a></li>
          <li><a href="#">{language === "ru" ? "Контакты" : "Contacts"}</a></li>
          <li><a href="#">{language === "ru" ? "Категории" : "Categories"}</a></li>
        </ul>
      </nav>
      <div className="buttons">
        <button className="button" onClick={toggleTheme}>
          <img src={theme === 'light' ? sunIcon : moonIcon} alt="Toggle Theme" />
        </button>
        <div 
          className="dropdown-wrapper" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <button className="button">
            <img src={globeIcon} alt="Toggle Language" />
          </button>
          {isDropdownVisible && (
            <ul className="dropdown">
              <li onClick={() => handleLanguageChange('ru')}>ru</li>
              <li onClick={() => handleLanguageChange('en')}>en</li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
