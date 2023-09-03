import React, {useState, useEffect} from 'react';
import { Button, Grid, Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import { useTheme } from '@mui/material';

const RolesSelector = ({ vertical, role, changeRole }) => {

  const theme = useTheme();

  const handleItemClick = (item, index) => {
    changeRole(item);
  };

  const items = ['Metalinguist', 'CookBook Social', 'UC Santa Barbara'];

    return (
        vertical === true ?
        <Paper elevation={3} style={{backgroundColor: 'transparent', boxShadow: 'none', minWidth: '170px'}}>
            <List component="nav">
                {items.map((item, index) => (
                    <ListItem
                        disableRipple
                        key={index}
                        button
                        onClick={() => handleItemClick(item, index)}
                        style={{color: item === role ? theme.palette.primary.textPrimary : theme.palette.primary.textSecondary,
                                borderLeft: item === role ? `2px solid ${theme.palette.primary.textPrimary}` : `2px solid rgba(140, 145, 175, 0.2)`,
                                background: item === role ? 'rgba(125, 220, 195, 0.05)' : '',
                                transition: 'border 0.3s ease-out'}}
                    >
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </Paper>
        : 
        <Paper elevation={3} style={{backgroundColor: 'transparent', boxShadow: 'none', minWidth: '170px'}}>
            <List component="nav" style={{display: 'flex'}}>
                {items.map((item, index) => (
                    <ListItem
                        disableRipple
                        key={index}
                        button
                        onClick={() => handleItemClick(item, index)}
                        style={{color: item === role ? theme.palette.primary.textPrimary : theme.palette.primary.textSecondary,
                                borderBottom: item === role ? `2px solid ${theme.palette.primary.textPrimary}` : `2px solid rgba(140, 145, 175, 0.2)`,
                                background: item === role ? 'rgba(125, 220, 195, 0.05)' : '',
                                transition: 'border 0.3s ease-out'}}
                    >
                        <ListItemText sx={{fontSize: '6px'}} primary={item} />
                    </ListItem>
                ))}
            </List>
        </Paper>
        
    );
}

export default RolesSelector;