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
          xs: 440,       // Extra small devices (phones)
          sm: 1000,     // Small devices (tablets)
          md: 1330,     // Medium devices (desktops)
          lg: 1280,    // Large devices (large desktops)
          xl: 1920,    // Extra large devices
        },
    },
});

export default darkTheme;
