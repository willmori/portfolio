import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    type: 'light', // Set the palette type to 'light'
    primary: {
      main: '#3f51b5',
    },
    // Customize other colors for light mode
  },
});

export default lightTheme;