import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        type: 'light', // Set the palette type to 'dark'
        primary: {
            main: '#F5F5F5', // You can customize primary color for dark mode
            textPrimary: 'rgb(85,145,140)',
            textSecondary: 'rgb(140, 145, 175)',
            textContrast: '#000'
        },
        // Customize other colors for dark mode
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    border: '2px solid rgb(85,145,140)',
                    color: 'rgb(85,145,140)'
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
    },
});

export default lightTheme;