import React, {useState, useEffect} from 'react';
import { Button, Grid, Container, Avatar, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Casual from '../assets/Casual.JPG';
import { aboutMeContent } from '../Content/AboutMeContent';
import { useInView } from 'react-intersection-observer';
import path1 from '../assets/path1.png';
import { useMediaQuery } from '@mui/material';
import './AboutMe.css';

const AboutMe = () => {

    const theme = useTheme();
    const isCutOffScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const isTabletScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));

    const [ref, inView] = useInView({
        triggerOnce: false, // Trigger only once
        threshold: 0.1, // Percentage of component visibility to trigger
      });

    const technologies = ["DS & Algorithms I, II", "Database Systems", "Machine Learning & AI", "Operating Systems", "Obj Oriented Design", "Adv App Programming"];
 
    return (
        <React.Fragment>
            {!isTabletScreen ?
            <Grid style={{ marginTop: '200px'}} id="aboutme">
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
                        <Typography style={{maxWidth: '520px', color: theme.palette.primary.textSecondary, marginBottom: '35px'}}>
                            Throughout my undergrad in computer science, these are some of the notable courses I took utilizing 
                            <Typography style={{display: 'inline', color: theme.palette.primary.textPrimary}}> C++, Python, Java, SQL, and React</Typography>
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
            </Grid>
            : 
            <Grid style={{ marginTop: '200px'}} id="aboutme">
                <Container ref={ref} style={{maxWidth: '1000px', display: 'flex', flexDirection: 'column'}} className={`fade-in-up ${inView ? 'is-visible' : ''}`}>
                    <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Container style={{display: 'flex', alignItems: 'center', marginBottom: '30px', justifyContent: 'center', position: 'relative', right: '30px'}}>
                            <Typography variant="h5" style={{color: theme.palette.primary.textPrimary}}>01.&nbsp;&nbsp;</Typography>
                            {isMobileScreen ? <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }} style={{color: 'rgb(210, 215, 240)'}}>About</Typography>
                            : <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }} style={{color: 'rgb(210, 215, 240)'}}>About Me</Typography>}
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
                        <Typography style={{maxWidth: '520px', color: theme.palette.primary.textSecondary, marginBottom: '35px'}}>
                            Throughout my undergrad in computer science, these are some of the notable courses I took utilizing 
                            <Typography style={{display: 'inline', color: theme.palette.primary.textPrimary}}> C++, Python, Java, SQL, and React</Typography>
                        </Typography>
                        <Grid container style={{maxWidth: '450px', position: 'relative', }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {technologies.map((technology) => (
                                <Grid xs={6} style={{display: 'flex', alignItems: 'center', padding: '5px'}}>
                                    <ArrowRightIcon style={{color: theme.palette.primary.textPrimary}}/>
                                    <Typography style={{marginLeft: '6px', color: theme.palette.primary.textSecondary}}>{technology}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                    <Container style={{maxWidth: '500px'}}>
                        <Avatar elevation={5} src={Casual} sx={{
                                        width: '250px',
                                        height: '250px',
                                        borderRadius: '10px', 
                                        marginTop: !isTabletScreen ? '78px': '45px',
                                        zIndex: '1',
                                        border: `1px solid ${theme.palette.primary.textPrimary}`
                                    }}>
                        </Avatar>
                        <Box elevation={3} style={{border: `2px solid ${theme.palette.primary.textPrimary}`, 
                                        height: '250px', width: '250px', borderRadius: '10px', position: 'relative', bottom: '235px', left: '15px'}}>
                        </Box>
                    </Container>
                </Container>
               
            </Grid>
            }
        </React.Fragment>
        
    );
}

export default AboutMe;







/*

{!isTabletScreen ?
            <Grid style={{ marginTop: '200px'}} id="aboutme">
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
            </Grid>
            : 
            <Grid style={{ marginTop: '200px'}} id="aboutme">
                <Container ref={ref} style={{maxWidth: '1000px', display: 'flex', flexDirection: 'column'}} className={`fade-in-up ${inView ? 'is-visible' : ''}`}>
                    <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Container style={{display: 'flex', alignItems: 'center', marginBottom: '30px', justifyContent: 'center', position: 'relative', right: '30px'}}>
                            <Typography variant="h5" style={{color: theme.palette.primary.textPrimary}}>01.&nbsp;&nbsp;</Typography>
                            {isMobileScreen ? <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }} style={{color: 'rgb(210, 215, 240)'}}>About</Typography>
                            : <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }} style={{color: 'rgb(210, 215, 240)'}}>About Me</Typography>}
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
                        <Grid container style={{maxWidth: '450px', position: 'relative', right: '32px'}} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
               
            </Grid>
            }
            */