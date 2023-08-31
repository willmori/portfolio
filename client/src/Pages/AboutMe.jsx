import React, {useState, useEffect} from 'react';
import { Button, Grid, Container, Avatar, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Casual from '../assets/Casual.JPG';
import { aboutMeContent } from '../Content/AboutMeContent';
import { useInView } from 'react-intersection-observer';
import path1 from '../assets/path1.png';
import './AboutMe.css';

const AboutMe = () => {

    const theme = useTheme();

    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger only once
        threshold: 0.1, // Percentage of component visibility to trigger
      });

    const technologies = ["JavaScript (ES6+)", "React.js", "Node.js", "Material-UI", "Express.js", "Firebase"]
 
    return (
        <Grid style={{height: '90vh', paddingTop: '100px'}} id="aboutme">
            <Container ref={ref} style={{width: '1000px', display: 'flex'}} className={`fade-in-up ${inView ? 'is-visible' : ''}`}>
                <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Container style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                        <Typography variant="h5" style={{color: theme.palette.primary.textPrimary}}>01.&nbsp;&nbsp;</Typography>
                        <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }} style={{color: 'rgb(210, 215, 240)'}}>About Me</Typography>
                        <div style={{borderBottom: `1px solid rgb(140, 145, 175, 0.3)`, width: '260px', marginLeft: '20px'}}></div>
                    </Container>
                    <Typography style={{maxWidth: '520px', color: theme.palette.primary.textSecondary, marginBottom: '15px'}}>
                        {aboutMeContent.paragraph1}
                    </Typography>
                    <Typography style={{maxWidth: '520px', color: theme.palette.primary.textSecondary, marginBottom: '15px'}}>
                        {aboutMeContent.paragraph2}
                    </Typography>
                    <Typography style={{maxWidth: '520px', color: theme.palette.primary.textSecondary, marginBottom: '15px'}}>
                        {aboutMeContent.paragraph3}
                    </Typography>
                    <Typography style={{maxWidth: '520px', color: theme.palette.primary.textSecondary, marginBottom: '17px'}}>
                        {aboutMeContent.paragraph4}
                    </Typography>
                    <Grid container style={{width: '450px', position: 'relative', right: '32px'}} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {technologies.map((technology) => (
                            <Grid xs={6} style={{display: 'flex', alignItems: 'center', padding: '5px'}}>
                                <ArrowRightIcon style={{color: theme.palette.primary.textPrimary}}/>
                                <Typography style={{marginLeft: '6px', color: theme.palette.primary.textSecondary}}>{technology}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Container style={{width: '500px'}}>
                    <Avatar elevation={5} src={Casual} sx={{
                                    width: '250px',
                                    height: '250px',
                                    borderRadius: '10px', 
                                    marginTop: '78px',
                                    zIndex: '1',
                                    border: `1px solid ${theme.palette.primary.textPrimary}`
                                }}>
                    </Avatar>
                    <Box elevation={3} style={{border: `2px solid ${theme.palette.primary.textPrimary}`, 
                                    height: '250px', width: '250px', borderRadius: '10px', position: 'relative', bottom: '235px', left: '15px'}}>
                    </Box>
                </Container>
            </Container>
            <img src={path1} style={{position: 'relative', left: '650px', top: '40px', pointerEvents: 'none'}} alt="" />
        </Grid>
        

    );
}

export default AboutMe;
