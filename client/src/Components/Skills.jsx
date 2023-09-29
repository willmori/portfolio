import React, {useState, useEffect} from 'react';
import { Button, Grid, Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import { useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import SkillTile from './SkillTile';
import ReactLogo from '../assets/React.png';
import MUILogo from '../assets/MUI.png';
import NodeLogo from '../assets/Node.png';
import ExpressLogo from '../assets/Express.webp';
import JavaScriptLogo from '../assets/JavaScript.png';
import PythonLogo from '../assets/Python.png';
import CLogo from '../assets/C++.png';
import SQLLogo from '../assets/SQL.png';

const Skills = () => {

    const theme = useTheme();
    const isSmallTablet = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isTabletScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
 

    return (
        <div id="skills" style={{marginTop: !isTabletScreen ? '280px' : '50px'}}>
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '30px'}}>
                <Typography variant="h5" style={{color: theme.palette.primary.textPrimary}}>02.&nbsp;&nbsp;</Typography>
                {isSmallTablet ? <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }} style={{color: 'rgb(210, 215, 240)'}}>Skills</Typography>
                : <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }} style={{color: 'rgb(210, 215, 240)'}}>Technical Skills</Typography>}
                
                <div style={{borderBottom: `1px solid rgb(140, 145, 175, 0.3)`, width: '260px', marginLeft: '20px'}}></div>
            </Container>
            <Container style={{maxWidth: '1100px'}}>
                <Grid container align="center" style={{}}>
                    <Grid style={{marginBottom: '40px'}} item xs={12} sm={6} md={3} lg={3} xl={3}>{<SkillTile logo={ReactLogo} width={'180px'} height={'auto'} />}</Grid>
                    <Grid style={{marginBottom: '40px'}} item xs={12} sm={6} md={3} lg={3} xl={3}>{<SkillTile logo={MUILogo} width={'auto'} height={'70px'} type={'mui'} />}</Grid>
                    <Grid style={{marginBottom: '40px'}} item xs={12} sm={6} md={3} lg={3} xl={3}>{<SkillTile logo={NodeLogo} width={'215px'} height={'auto'} />}</Grid>
                    <Grid style={{marginBottom: '40px'}} item xs={12} sm={6} md={3} lg={3} xl={3}>{<SkillTile logo={ExpressLogo} width={'180px'} height={'auto'} />}</Grid>
                    <Grid style={{marginBottom: '40px'}} item xs={12} sm={6} md={3} lg={3} xl={3}>{<SkillTile logo={JavaScriptLogo} width={'auto'} height={'70px'} type={'javascript'} />}</Grid>
                    <Grid style={{marginBottom: '40px'}} item xs={12} sm={6} md={3} lg={3} xl={3}>{<SkillTile logo={PythonLogo} width={'180px'} height={'auto'} />}</Grid>
                    <Grid style={{marginBottom: '40px'}} item xs={12} sm={6} md={3} lg={3} xl={3}>{<SkillTile logo={CLogo} width={'120px'} height={'auto'} />}</Grid>
                    <Grid style={{marginBottom: '40px'}} item xs={12} sm={6} md={3} lg={3} xl={3}>{<SkillTile logo={SQLLogo} width={'120px'} height={'auto'} />}</Grid>
                </Grid>
            </Container>
        </div>
        
    );
}

export default Skills;