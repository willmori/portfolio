import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        type: 'dark', // Set the palette type to 'dark'
        primary: {
            main: 'rgb(14, 25, 45)', // You can customize primary color for dark mode
            textPrimary: 'rgb(125, 220, 195)',
            textSecondary: 'rgb(140, 145, 175)',
            textContrast: 'rgb(205, 215, 245)'
        },
        // Customize other colors for dark mode
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    border: '2px solid rgb(125, 220, 195)',
                    color: 'rgb(125, 220, 195)'
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    height: '85px',
                    width: '85px'
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
              root: {
                '&:hover': {
                  backgroundColor: 'transparent', // Remove the background color change on hover
                },
              },
            },
        },
    },
    breakpoints: {
        values: {
          xs: 0,       // Extra small devices (phones)
          sm: 700,     // small tablet
          md: 1000,     // tablet 
          lg: 1330,    // screen cut off(large desktops)
          xl: 1920,    // Extra large devices
        },
    },
});

export default darkTheme;
