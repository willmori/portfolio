import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, List, ListItem, ListItemText, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';
import ThemeToggle from './ThemeToggle';
import Fade from '@mui/material/Fade';
import { HashLink } from 'react-router-hash-link';
import { useMediaQuery } from '@mui/material';


const Navbar = ({ toggleDarkMode, isDarkMode }) => {

    const theme = useTheme();
    
    const isCutOffScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));

    const [isNavVisible, setIsNavVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isScrollingUp = prevScrollPos > currentScrollPos;

            setIsNavVisible(isScrollingUp || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);
        
    return (
        <React.Fragment>
            {!isMobileScreen ?
            <AppBar position="sticky" style={{ backgroundColor: theme.palette.type === 'dark' ? 'rgba(14, 25, 45, 0.9)' : '', padding: '10px', boxShadow: window.pageYOffset == 0 ? 'none' : '', transition: 'transform 0.3s', transform: isNavVisible ? 'translateY(0)' : 'translateY(-100%)'}}>
                <Toolbar style={{  display: 'flex', justifyContent: 'end' }}>
                    <List component="nav" aria-labelledby="main navigation" style={{ display: 'flex', justifyContent: 'end' }}>
                        <Fade in timeout={1500} style={{transitionDelay: '0ms'}}>
                            <ListItem component={HashLink} to="#top" smooth button disableRipple sx={{
                                                        borderBottom: `1px solid transparent`,
                                                        "&:hover": {
                                                        backgroundColor: "transparent",
                                                        borderBottom: `1px solid ${theme.palette.primary.textPrimary}`
                                                        }
                                                    }}>
                                <Typography style={{color: theme.palette.primary.textPrimary}}>00.&nbsp;&nbsp;</Typography>
                                <ListItemText primary="Home" style={{ textDecoration: 'none', color: theme.palette.type === 'dark' ? theme.palette.primary.textSecondary : theme.palette.primary.textContrast }} />
                            </ListItem>
                        </Fade>
                        <Fade in timeout={1500} style={{transitionDelay: '200ms'}}>
                            <ListItem component={HashLink} to="#aboutme" smooth button disableRipple sx={{
                                                        borderBottom: `1px solid transparent`,
                                                        "&:hover": {
                                                        backgroundColor: "transparent",
                                                        borderBottom: `1px solid ${theme.palette.primary.textPrimary}`
                                                        }
                                                    }}>
                                <Typography style={{color: theme.palette.primary.textPrimary}}>01.&nbsp;&nbsp;</Typography>
                                <ListItemText primary="About" style={{ textDecoration: 'none', color: theme.palette.type === 'dark' ? theme.palette.primary.textSecondary : theme.palette.primary.textContrast }} />
                            </ListItem>
                        </Fade>
                        <Fade in timeout={1500} style={{transitionDelay: '400ms'}}>
                            <ListItem component={HashLink} to="#experience" smooth button disableRipple sx={{
                                                        borderBottom: `1px solid transparent`,
                                                        "&:hover": {
                                                        backgroundColor: "transparent",
                                                        borderBottom: `1px solid ${theme.palette.primary.textPrimary}`
                                                        }
                                                    }}>
                                <Typography style={{color: theme.palette.primary.textPrimary}}>02.&nbsp;&nbsp;</Typography>
                                <ListItemText primary="Experience" style={{ textDecoration: 'none', color: theme.palette.type === 'dark' ? theme.palette.primary.textSecondary : theme.palette.primary.textContrast }} />
                            </ListItem>
                        </Fade>
                        <Fade in timeout={1500} style={{transitionDelay: '600ms'}}>
                            <ListItem component={HashLink} to="#gallery" smooth button disableRipple sx={{
                                                        borderBottom: `1px solid transparent`,
                                                        "&:hover": {
                                                        backgroundColor: "transparent",
                                                        borderBottom: `1px solid ${theme.palette.primary.textPrimary}`
                                                        }
                                                    }}>
                                <Typography style={{color: theme.palette.primary.textPrimary}}>03.&nbsp;&nbsp;</Typography>
                                <ListItemText primary="Gallery" style={{ textDecoration: 'none', color: theme.palette.type === 'dark' ? theme.palette.primary.textSecondary : theme.palette.primary.textContrast }} />
                            </ListItem>
                        </Fade>
                        <Fade in timeout={1500} style={{transitionDelay: '800ms'}}>
                            <ListItem component={HashLink} to="#contact" smooth button disableRipple sx={{
                                                        borderBottom: `1px solid transparent`,
                                                        "&:hover": {
                                                        backgroundColor: "transparent",
                                                        borderBottom: `1px solid ${theme.palette.primary.textPrimary}`
                                                        }
                                                    }}>
                                <Typography style={{color: theme.palette.primary.textPrimary}}>04.&nbsp;&nbsp;</Typography>
                                <ListItemText primary="Contact" style={{ textDecoration: 'none', color: theme.palette.type === 'dark' ? theme.palette.primary.textSecondary : theme.palette.primary.textContrast }} />
                            </ListItem>
                        </Fade>
                        
                    </List>
                    
                </Toolbar>
            </AppBar> : ''}
        </React.Fragment>
        
    );
};

export default Navbar;