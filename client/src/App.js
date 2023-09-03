import React, {useState, useEffect} from 'react';
import { Button } from '@mui/material';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import Experience from './Pages/Experience';
import Gallery from './Pages/Gallery';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import lightTheme from './LightTheme'; 
import darkTheme from './DarkTheme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import StarryNight from './StarryNight';


function App(props) {
  
  const [isDarkMode, setIsDarkMode] = useState(true)

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Router>
          {isDarkMode ? <StarryNight /> : ''}
          <div id="top" style={{background: darkTheme.palette.primary.main}}>
            <Navbar />
            <Home />
            <AboutMe />
            <Experience />
            <Gallery />
            <Contact />
          </div>
            
        </Router>
    </ThemeProvider>
  );
}

export default App;
