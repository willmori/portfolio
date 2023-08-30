import React, {useState, useEffect} from 'react';
import { Button, Grid, Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@mui/material';
import './RolesSelector.css';

const RolesSelector = ({ role, changeRole }) => {

  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Percentage of component visibility to trigger
  });

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item, index) => {
    setSelectedItem(index);
    changeRole(item);
  };

  const items = ['Metalinguist', 'UCSB GOLD', 'CookBook Social'];

    return (
        <Paper elevation={3} style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
            <List component="nav">
                {items.map((item, index) => (
                    <ListItem
                        disableRipple
                        key={index}
                        button
                        selected={selectedItem === index}
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
        
    );
}

export default RolesSelector;