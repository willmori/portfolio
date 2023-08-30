import React, {useState, useEffect} from 'react';
import { Grid, Container, Typography, Button, Avatar, Box, IconButton, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import Resume from '../assets/Resume.png'
import { useTheme } from '@mui/material';
import Photo from '../assets/suit_photo.jpg';
import Fade from '@mui/material/Fade';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';



const Home = () => {
    const theme = useTheme();

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1300)
    }, []);

    return (
        <Grid id="home" style={{ height: '90vh', backgroundColor: theme.palette.primary.main, overflow: 'hidden'}}>
            <Fade in timeout={2000} style={{transitionDelay: '300ms'}}>
                <Container style={{ paddingTop: '35px'}}>
                    <Container style={{display: 'flex', alignItems: 'end', paddingLeft: '0px', marginBottom: '20px'}}>
                        <Avatar style={{ marginRight: '10px'}} src={Photo}></Avatar>
                        <Typography variant="h6" style={{ color: theme.palette.primary.textPrimary}}>
                            Hi, my name is
                        </Typography>
                    </Container>
                    <Typography variant="h1" style={{color: theme.palette.primary.textPrimary}}>
                        William Mori.
                    </Typography>
                    <Typography variant="h1" style={{color: theme.palette.type === 'light' ? theme.palette.primary.textContrast : theme.palette.primary.textSecondary}}>
                        I build things for the web.
                    </Typography>
                    <Typography variant="h6" style={{marginTop: '20px', color: theme.palette.type === 'dark' ? theme.palette.primary.textSecondary : theme.palette.primary.textContrast}}>
                        I'm a software engineer who specializes in full-stack development.<br></br>
                        I enjoy building and designing exceptional digital experiences and working<br></br>alongside those who share the same passion.
                        Currently, I'm focusing on<br></br>contributing to a new revolutionary translation management system at a<br></br>tech startup called&nbsp;<a style={{color: theme.palette.primary.textPrimary}} href={'http://metalinguist.com/'} target="_blank">Metalinguist</a>.
                    </Typography>
                    <Button variant="contained" backgroundColor='transparent' style={{marginTop: '45px'}} href={Resume} target="_blank">
                        Resume
                    </Button>
                    <Container style={{display: 'flex', justifyContent: 'end', position: 'absolute'}}>
                        <Fade in timeout={1500} style={{transitionDelay: '500ms'}}>
                            <Box m={1}>
                                <IconButton href='https://github.com/willmori' target={"_blank"} sx={{
                                                    "&:hover": {
                                                    backgroundColor: "transparent",
                                                    }
                                                }}>
                                    <GitHubIcon sx={{
                                                        height: '30px',
                                                        width: '30px', 
                                                        color: theme.palette.primary.contrastText,
                                                        transition: 'transform 0.4s',
                                                        "&:hover": {color: theme.palette.primary.textPrimary, transform: 'translateY(-4px)'}
                                                    }}>
                                    </GitHubIcon>
                                </IconButton>  
                            </Box>
                        </Fade>
                        <Fade in timeout={1500} style={{transitionDelay: '700ms'}}>
                            <Box m={1}>
                                <IconButton href='https://www.linkedin.com/in/william-mori-01b891251' target={"_blank"} sx={{
                                                    "&:hover": {
                                                    backgroundColor: "transparent",
                                                    }
                                                }}>
                                    <LinkedInIcon sx={{
                                                        height: '30px',
                                                        width: '30px', 
                                                        color: theme.palette.primary.contrastText,
                                                        transition: 'transform 0.4s',
                                                        "&:hover": {color: theme.palette.primary.textPrimary, transform: 'translateY(-4px)'}
                                                    }}>
                                    </LinkedInIcon>
                                </IconButton>
                            </Box>
                        </Fade>
                        <Fade in timeout={1500} style={{transitionDelay: '900ms'}}>
                            <Box m={1}>
                                <IconButton href='https://www.instagram.com/will_mori' target={"_blank"} sx={{
                                                    "&:hover": {
                                                    backgroundColor: "transparent",
                                                    }
                                                }}>
                                    <InstagramIcon sx={{
                                                        height: '30px',
                                                        width: '30px', 
                                                        color: theme.palette.primary.contrastText,
                                                        transition: 'transform 0.4s',
                                                        "&:hover": {color: theme.palette.primary.textPrimary, transform: 'translateY(-4px)' }
                                                    }}>
                                    </InstagramIcon>
                                </IconButton>
                            </Box>
                        </Fade>
                        
                    </Container>
                    <div style={{borderBottom: `2px solid ${theme.palette.primary.textContrast}`, width: '300px', position: 'relative', left: '1380px', 
                                top: '30px', transform: isLoaded ? 'translateX(-60%)' : '', transition: isLoaded ? 'transform 0.7s ease-in-out' : '' }}></div>
                </Container>
            </Fade>
        </Grid>
        
    );
}

export default Home;
