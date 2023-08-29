import React from 'react';
import { AppBar, Toolbar, Typography, Button, List, ListItem, ListItemText, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';
import Photo from '../assets/suit_photo.jpg';

const Navbar = () => {

    const theme = useTheme();
        
    return (
        <AppBar position="static" style={{ background: theme.palette.primary.main, boxShadow: 'none', padding: '10px'}}>
            <Toolbar style={{ display: 'flex', justifyContent: 'end' }}>
                
                <List component="nav" aria-labelledby="main navigation" style={{ display: 'flex', justifyContent: 'end' }}>
                    <ListItem component={Link} to="/" button>
                        <Typography style={{color: theme.palette.primary.textPrimary}}>01.&nbsp;&nbsp;</Typography>
                        <ListItemText primary="Home" style={{ textDecoration: 'none', color: theme.palette.primary.textSecondary }} />
                    </ListItem>
                    <ListItem component={Link} to="/AboutMe" button>
                        <Typography style={{color: theme.palette.primary.textPrimary}}>02.&nbsp;&nbsp;</Typography>
                        <ListItemText primary="About" style={{ textDecoration: 'none', color: theme.palette.primary.textSecondary }} />
                    </ListItem>
                    <ListItem component={Link} to="/Experience" button>
                        <Typography style={{color: theme.palette.primary.textPrimary}}>03.&nbsp;&nbsp;</Typography>
                        <ListItemText primary="Experience" style={{ textDecoration: 'none', color: theme.palette.primary.textSecondary }} />
                    </ListItem>
                    <ListItem component={Link} to="/Projects" button>
                        <Typography style={{color: theme.palette.primary.textPrimary}}>04.&nbsp;&nbsp;</Typography>
                        <ListItemText primary="Projects" style={{ textDecoration: 'none', color: theme.palette.primary.textSecondary }} />
                    </ListItem>
                    <ListItem component={Link} to="/Contact" button>
                        <Typography style={{color: theme.palette.primary.textPrimary}}>05.&nbsp;&nbsp;</Typography>
                        <ListItemText primary="Contact" style={{ textDecoration: 'none', color: theme.palette.primary.textSecondary }} />
                    </ListItem>
                </List>
                {/* Add more navigation links here */}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;