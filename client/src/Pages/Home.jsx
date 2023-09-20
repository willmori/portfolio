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
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { HashLink } from 'react-router-hash-link';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from '@mui/material';
import TypedOut from '../Components/TypedOut';
import './Home.css';


const Home = () => {
    const theme = useTheme();

    const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));
    const isTabletScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const isSmallTablet = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isCutOffScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'));

    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const [ refArrow, inViewArrow ] = useInView({
        triggerOnce: false, // Trigger only once
        threshold: 0.9, // Element is considered in view when 50% is visible
      });

    useEffect(() => {
        if (inViewArrow) {
          setIsVisible(true); // Element is in view
        } else {
          setIsVisible(false); // Element is out of view
        }
    }, [inViewArrow]);

    const arrowStyle = {
        opacity: isVisible ? 1 : 0, // Fade in when isVisible is true, otherwise fade out
        transition: 'opacity 0.5s', // Add a smooth transition effect
        display: 'flex',
        justifyContent: 'end', 
        alignItems: 'end',
        position: 'absolute',
        bottom: '20px',
        height: '300px'
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1300)
    }, []);

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
                    flexDirection: 'column'}}>
            <Typography variant={isMobileScreen ? "" : "h6"} style={{color: theme.palette.primary.textPrimary, marginBottom: '10px'}}>Hi, my name is William Mori</Typography>
            <TypedOut />
            <div style={{display: 'flex', marginTop: '20px'}}>
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
                                                            color: theme.palette.primary.textSecondary,
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
                                                            color: theme.palette.primary.textSecondary,
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
                                                            color: theme.palette.primary.textSecondary,
                                                            transition: 'transform 0.4s',
                                                            "&:hover": {color: theme.palette.primary.textPrimary, transform: 'translateY(-4px)' }
                                                        }}>
                                        </InstagramIcon>
                                    </IconButton>
                                </Box>
                        </Fade>
            </div>
            <Button variant="contained" backgroundColor='transparent' style={{marginTop: '45px', maxWidth: '100px'}} href={Resume} target="_blank">
                                Resume
                    </Button>
            <div ref={refArrow} style={arrowStyle}>
                        <Fade in timeout={5000} style={{transitionDelay: '1000ms'}}>
                            <IconButton component={HashLink} to="#aboutme" smooth sx={{backgroundColor: 'rgba(128,128,128,0.2)',transition: 'background-color 0.3s',
                                                                                        '&:hover': {
                                                                                            backgroundColor: 'rgb(125, 220, 195, 0.5)',
                                                                                        },
                            }}>
                                <ArrowDownwardIcon sx={{height: '35px', width: '35px', color: theme.palette.primary.textContrast}} />
                            </IconButton>
                        </Fade>
            </div>
        </div>
    );
}

export default Home;














/*
<React.Fragment>
            <Fade in timeout={2000} style={{transitionDelay: '300ms'}}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: isMobileScreen ? '20px' : '10%',
                                marginRight: isMobileScreen ? '15px' : '7%', marginTop: isMobileScreen ? '' : '20px', paddingTop: isMobileScreen ? '10vh': '0vh',
                                backgroundSize: 'cover'}}>
                    <div style={{display: 'flex', alignItems: 'end', paddingLeft: '0px', marginBottom: '20px'}}>
                        <Avatar style={{ marginRight: '10px'}} src={Photo}></Avatar>
                        <Typography variant="h6" style={{ fontSize: isMobileScreen ? '12px' : '', color: theme.palette.primary.textPrimary}}>
                            Hi, my name is
                        </Typography>
                    </div>
                    <Typography variant="h1" style={{fontSize: isMobileScreen ? '45px': '', color: theme.palette.primary.textPrimary}}>
                        William Mori.
                    </Typography>
                    <Typography variant="h1" style={{fontSize: isMobileScreen ? '30px' : '', color: theme.palette.type === 'light' ? theme.palette.primary.textContrast : theme.palette.primary.textSecondary}}>
                        I build things for the web.
                    </Typography>
                    <Typography variant="h6" style={{fontSize: isMobileScreen ? '14px' : '', marginTop: '20px', color: theme.palette.type === 'dark' ? theme.palette.primary.textSecondary : theme.palette.primary.textContrast, maxWidth: '900px'}}>
                                I'm a software engineer who specializes in full-stack development. 
                                I enjoy building and designing exceptional digital experiences and working alongside those who share the same passion.
                                Currently, I'm focusing on contributing to a new revolutionary translation management system at a tech startup called
                                <IconButton target='_blank' className='underline-on-hover' style={{color: theme.palette.primary.textPrimary, fontSize: isMobileScreen ? '12px' : '18px', position: 'relative', top: '3px', 
                                                paddingRight: '0px', paddingTop: '0px'}} href='https://metalinguist.com/'>Metalinguist</IconButton>.
                    </Typography>
                    <Button variant="contained" backgroundColor='transparent' style={{marginTop: '45px', maxWidth: '100px'}} href={Resume} target="_blank">
                                Resume
                    </Button>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
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
                    </div>
                    <div ref={refArrow} style={arrowStyle}>
                        <Fade in timeout={5000} style={{transitionDelay: '1300ms'}}>
                            <IconButton component={HashLink} to="#aboutme" smooth sx={{backgroundColor: 'rgba(128,128,128,0.2)',transition: 'background-color 0.3s',
                                                                                        '&:hover': {
                                                                                            backgroundColor: 'rgb(125, 220, 195, 0.5)',
                                                                                        },
                            }}>
                                <ArrowDownwardIcon sx={{height: '35px', width: '35px', color: theme.palette.primary.textContrast}} />
                            </IconButton>
                        </Fade>
                    </div>
                </div>
            </Fade>
            
        </React.Fragment>
*/