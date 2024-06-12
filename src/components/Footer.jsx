import React, { useContext } from 'react';
import LanguageContext from '../LanguageContext';
import ThemeContext from '../ThemeContext';
import './Footer.css';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
      <nav className='footer__nav'>
        <ul className='footer__nav-ul'>
          <li>{language === 'ru' ? 'Условия использования' : 'Terms of Use'}</li>
          <li>{language === 'ru' ? 'Политика конфиденциальности' : 'Privacy Policy'}</li>
          <li>{language === 'ru' ? 'Политика возврата' : 'Return Policy'}</li>
          <li>{language === 'ru' ? 'Авторские права' : 'Copyright'}</li>
        </ul>
      </nav>
      <p>© 2024 Art Gallery</p>
    </footer>
  );
};

export default Footer;
