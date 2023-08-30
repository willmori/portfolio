import React, {useState, useEffect} from 'react';
import { Button, Grid, Container, Typography, List, ListItem, ListItemText} from '@mui/material';
import { useTheme } from '@mui/material';
import rolesDetailsContent from '../Content/RolesDetailsContent';
import './RolesDetails.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const RolesDetails = ({ role }) => {

  const theme = useTheme();

  function getHeaderContent() {
    switch(role) {
        case "Metalinguist": return rolesDetailsContent.metalinguist.header;
        case "UCSB GOLD": return rolesDetailsContent.UCSB_GOLD.header;
        case "CookBook Social": return rolesDetailsContent.CookBook_Social.header;
        default: return rolesDetailsContent.metalinguist.header;
    }
  }

  function getDate() {
    switch(role) {
        case "Metalinguist": return rolesDetailsContent.metalinguist.date;
        case "UCSB GOLD": return rolesDetailsContent.UCSB_GOLD.date;
        case "CookBook Social": return rolesDetailsContent.CookBook_Social.date;
        default: return rolesDetailsContent.metalinguist.date;
    }
  }

  function getBodyText() {
    switch(role) {
        case "Metalinguist": return rolesDetailsContent.metalinguist.details;
        case "UCSB GOLD": return rolesDetailsContent.UCSB_GOLD.details;
        case "CookBook Social": return rolesDetailsContent.CookBook_Social.details;
        default: return rolesDetailsContent.metalinguist.details;
    }
  }
  

    return (
        <Grid style={{display: 'flex', flexDirection: 'column', marginLeft: '25px', marginTop: '15px'}}>
            <Typography variant='h6' style={{color: theme.palette.primary.textContrast}}>{getHeaderContent()} 
                <span style={{color: theme.palette.primary.textPrimary}}> @ </span> 
                {role === "Metalinguist" 
                    ? <a href={'https://metalinguist.com/'} target='_blank' className='underline-on-hover' 
                        style={{color: theme.palette.primary.textPrimary, fontWeight: 'bold'}}>Metalinguist</a>
                    : role === "CookBook Social"
                        ? <a href={'https://github.com/ucsb-cs148-w23/project-t01-cookbooksocial'} target='_blank' className='underline-on-hover' 
                            style={{color: theme.palette.primary.textPrimary, fontWeight: 'bold'}}>CookBook Social</a>
                        : <a href={'https://www.it.ucsb.edu/student-services/gold-blue'} target='_blank' className='underline-on-hover' 
                            style={{color: theme.palette.primary.textPrimary, fontWeight: 'bold'}}>UCSB GOLD</a>}
            </Typography>
            <Typography style={{ marginTop: '2px', color: theme.palette.primary.textSecondary}}>{getDate()}</Typography>
            
            
            <List style={{paddingLeft: '0px'}}>
                {getBodyText().map((details, index) => 
                    <ListItem style={{paddingLeft: '0px'}}>
                        <ArrowRightIcon style={{color: theme.palette.primary.textPrimary, position: 'relative', right: '8px'}}/>
                        <ListItemText primary={details} style={{color: theme.palette.primary.textSecondary}}></ListItemText>
                    </ListItem>
                    
                )}
            </List>
            
                
                
            
        </Grid>
        
    );
}

export default RolesDetails;