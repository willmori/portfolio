import React, {useState, useEffect} from 'react';
import { Button } from '@mui/material';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import lightTheme from './LightTheme'; 
import darkTheme from './DarkTheme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { HashLink } from 'react-router-hash-link';

function App(props) {
  
  const [isDarkMode, setIsDarkMode] = useState(true)

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
        <Router>
          <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          <Home />
          <AboutMe />
          <Experience />
          <Contact />
        </Router>
    </ThemeProvider>
  );
}

export default App;
