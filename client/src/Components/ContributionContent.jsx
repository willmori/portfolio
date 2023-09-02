import React, {useState, useEffect} from 'react';
import { Button, Grid, Container, Avatar, Typography, Box, Paper, ListItem, List, ListItemText, Link, IconButton } from '@mui/material';
import { useTheme } from '@mui/material';
import ContributionText from '../Content/ContributionText';
import GitHubIcon from '@mui/icons-material/GitHub';
import './ContributionContent.css'
import { useMediaQuery } from '@mui/material';

const ContributionContent = ({ name, placement }) => {

    const theme = useTheme();
    const isCutOffScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

    function getHeader() {
        switch(name) {
            case "Companies": return ContributionText.Companies.header;
            case "Playwright": return ContributionText.Playwright.header;
            case "CookBook_Social": return ContributionText.CookBook_Social.header;
            case "Tide_Together": return ContributionText.Tide_Together.header;
            default: return "NOT FOUND";
        }
    }

    function getSubHeader() {
        switch(name) {
            case "Companies": return ContributionText.Companies.subHeader;
            case "Playwright": return ContributionText.Playwright.subHeader;
            case "CookBook_Social": return ContributionText.CookBook_Social.subHeader;
            case "Tide_Together": return ContributionText.Tide_Together.subHeader;
            default: return "NOT FOUND";
        }
    }

    function getDetails() {
        switch(name) {
            case "Companies": return ContributionText.Companies.details;
            case "Playwright": return ContributionText.Playwright.details;
            case "CookBook_Social": return ContributionText.CookBook_Social.details;
            case "Tide_Together": return ContributionText.Tide_Together.details;
            default: return "NOT FOUND";
        }
    }

    function getTechStack() {
        switch(name) {
            case "Companies": return ContributionText.Companies.tech_stack;
            case "Playwright": return ContributionText.Playwright.tech_stack;
            case "CookBook_Social": return ContributionText.CookBook_Social.tech_stack;
            case "Tide_Together": return ContributionText.Tide_Together.tech_stack;
            default: return "NOT FOUND";
        }
    }

    function getHeaderLink() {
        switch(name) {
            case "Companies": return ContributionText.Companies.headerLink;
            case "Playwright": return ContributionText.Playwright.headerLink;
            case "CookBook_Social": return ContributionText.CookBook_Social.headerLink;
            case "Tide_Together": return ContributionText.Tide_Together.headerLink;
            default: return "NOT FOUND";
        }
    }

 
    return (
        <React.Fragment>
            {!isCutOffScreen ?
             <Container style={{display: 'flex', flexDirection: 'column', minWidth: '545px', alignItems: placement === 'odd' ? 'flex-end' : ''}}>
                <Typography><a className='underline-on-hover' style={{color: theme.palette.primary.textPrimary}} href={getHeaderLink()} target="_blank">{getHeader()}</a></Typography>
                <Typography style={{color: theme.palette.primary.textContrast, fontSize: '22px', fontWeight: 'bold', marginBottom: '15px'}}>{getSubHeader()}</Typography>
                <Paper style={{padding: '20px', backgroundColor: 'rgba(20, 35, 60, 0.95)', borderRadius: '10px'}}>
                    <Typography align={placement === 'odd' ? 'right' : ''} style={{color: theme.palette.primary.textSecondary}}>{getDetails()}</Typography>
                </Paper>
                <Container style={{display: 'flex', justifyContent: placement === 'odd' ? 'end' : '', marginTop: '10px', position: 'relative', left: placement === 'odd' ? '30px' : '', right: placement === 'even' ? '32px' : '' }}>
                    {getTechStack().map((tech) => (
                            <Typography variant="body1" style={{ fontSize: '14px', padding: '10px', color: theme.palette.primary.textSecondary}}>
                                {tech}
                            </Typography>))}
                </Container>
                {name === "CookBook_Social" ? <IconButton href='https://github.com/ucsb-cs148-w23/project-t01-cookbooksocial' target={"_blank"} sx={{
                                                        "&:hover": {
                                                        backgroundColor: "transparent",
                                                        }
                                                    }}><GitHubIcon sx={{
                                                        height: '30px',
                                                        width: '30px', 
                                                        color: theme.palette.primary.contrastText,
                                                        transition: 'transform 0.4s',
                                                        "&:hover": {color: theme.palette.primary.textPrimary, transform: 'translateY(-4px)'}
                                                    }}/></IconButton> : ''}
            </Container>
            :
            <Container style={{display: 'flex', flexDirection: 'column', minWidth: '545px', alignItems: 'flex-end', position: 'relative', left: '160px', bottom: '50px'}}>
                <Typography><a className='underline-on-hover' style={{color: theme.palette.primary.textPrimary}} href={getHeaderLink()} target="_blank">{getHeader()}</a></Typography>
                <Typography style={{color: theme.palette.primary.textContrast, fontSize: '22px', fontWeight: 'bold', marginBottom: '15px'}}>{getSubHeader()}</Typography>
                <Paper style={{padding: '20px', backgroundColor: 'rgba(20, 35, 60, 0.95)', borderRadius: '10px'}}>
                    <Typography align='right' style={{color: theme.palette.primary.textSecondary}}>{getDetails()}</Typography>
                </Paper>
                <Container style={{display: 'flex', justifyContent: 'end', marginTop: '10px', position: 'relative', left: '30px', right: '32px' }}>
                    {getTechStack().map((tech) => (
                            <Typography variant="body1" style={{ fontSize: '14px', padding: '10px', color: theme.palette.primary.textSecondary}}>
                                {tech}
                            </Typography>))}
                </Container>
                {name === "CookBook_Social" ? <IconButton href='https://github.com/ucsb-cs148-w23/project-t01-cookbooksocial' target={"_blank"} sx={{
                                                        "&:hover": {
                                                        backgroundColor: "transparent",
                                                        }
                                                    }}><GitHubIcon sx={{
                                                        height: '30px',
                                                        width: '30px', 
                                                        color: theme.palette.primary.contrastText,
                                                        transition: 'transform 0.4s',
                                                        "&:hover": {color: theme.palette.primary.textPrimary, transform: 'translateY(-4px)'}
                                                    }}/></IconButton> : ''}
        </Container>                                    
        }
        </React.Fragment>
       
        

    );
}

export default ContributionContent;
