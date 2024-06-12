import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { ThemeProvider } from './ThemeContext';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="App">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;










// import React from 'react';
// import { LanguageProvider } from './HW_7/LanguageContext';
// import LanguageSwitcher from './HW_7/LanguageSwitcher';
// import DisplayText from './HW_7/DisplayText';
// import './App.css';

// const App = () => {
//   return (
//     <LanguageProvider>
//       <div className="App">
//         <DisplayText />
//         <LanguageSwitcher />
//       </div>
//     </LanguageProvider>
//   );
// };

// export default App;
