import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4 as DarkModeIcon, Brightness7 as LightModeIcon } from '@mui/icons-material';


const ThemeToggle = ({ toggleDarkMode, isDarkMode }) => {

  return (
    <IconButton onClick={toggleDarkMode} color="inherit">
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ThemeToggle;