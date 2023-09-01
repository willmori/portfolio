import React, {useState, useEffect} from 'react';
import { Button, Grid, Container, Avatar, Typography, Box, Paper, ListItem, List } from '@mui/material';
import { useTheme } from '@mui/material';
import ContributionText from '../Content/ContributionText';

const ContributionContent = ({ name, placement }) => {

    const theme = useTheme();

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

 
    return (
        <Container style={{display: 'flex', flexDirection: 'column', alignItems: placement === 'odd' ? 'flex-end' : ''}}>
            <Typography>{getHeader()}</Typography>
            <Typography>{getSubHeader()}</Typography>
            <Paper>
                <Typography>{getDetails()}</Typography>
            </Paper>
            <List style={{display: 'flex'}}>
                {getTechStack().map((tech) => (<ListItem>{tech}</ListItem>))}
            </List>
        </Container>
        

    );
}

export default ContributionContent;
