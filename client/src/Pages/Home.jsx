import React, {useState, useEffect} from 'react';
import { Grid, Container, Typography, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import Resume from '../assets/Resume.png'
import { useTheme } from '@mui/material';
import Photo from '../assets/suit_photo.jpg';
import Fade from '@mui/material/Fade';

const Home = () => {

    const theme = useTheme();
    console.log(theme)

    return (
        <Grid style={{ height: 'calc(100vh - 84px)', backgroundColor: theme.palette.primary.main, overflow: 'hidden'}}>
            <Fade in timeout={1500}>
                <Container style={{ paddingTop: '35px'}}>
                    <Container style={{display: 'flex', alignItems: 'end', paddingLeft: '0px', marginBottom: '20px'}}>
                        <Avatar style={{ marginRight: '10px'}} src={Photo}></Avatar>
                        <Typography variant="h6" style={{ color: theme.palette.primary.textPrimary}}>
                            Hi, my name is
                        </Typography>
                    </Container>
                    
                    <Typography variant="h1" style={{color: theme.palette.primary.textContrast}}>
                        William Mori.
                    </Typography>
                    <Typography variant="h1" style={{color: theme.palette.primary.textSecondary}}>
                        I build things for the web.
                    </Typography>
                    <Typography variant="h6" style={{marginTop: '20px', color: theme.palette.primary.textSecondary}}>
                        I'm a software engineer who specializes in full-stack development.<br></br>
                        I enjoy building and designing exceptional digital experiences and working<br></br>alongside those who share the same passion.
                        Currently, I'm focusing on<br></br>contributing to a new revolutionary translation management system at a<br></br>tech startup called&nbsp;<Link style={{color: theme.palette.primary.textPrimary}} to={'https://metalinguist.com'} target="_blank">Metalinguist</Link>.
                    </Typography>
                    <Button variant="contained" backgroundColor='transparent' style={{marginTop: '45px'}} href={Resume} target="_blank">
                        Resume
                    </Button>
                </Container>
            </Fade>
            
        </Grid>
        
    );
}

export default Home;
