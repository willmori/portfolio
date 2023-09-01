import React, {useState, useEffect} from 'react';
import { Button, Grid, Container, Avatar, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Contribution from '../Components/Contribution';


const Gallery = () => {

    const theme = useTheme();

    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger only once
        threshold: 0.1, // Percentage of component visibility to trigger
      });
 
    return (
        <Grid style={{height: '250vh', paddingTop: '150px'}} id="gallery">
            <Container ref={ref} style={{width: '1300px', display: 'flex'}} className={`fade-in-up ${inView ? 'is-visible' : ''}`}>
                <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Container style={{display: 'flex', alignItems: 'center', marginBottom: '15px'}}>
                        <Typography variant="h5" style={{color: theme.palette.primary.textPrimary}}>03.&nbsp;&nbsp;</Typography>
                        <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }} style={{color: 'rgb(210, 215, 240)'}}>Some Contribution Highlights</Typography>
                        <div style={{borderBottom: `1px solid rgb(140, 145, 175, 0.3)`, width: '260px', marginLeft: '20px'}}></div>
                    </Container>
                    <Container style={{ display: 'flex', flexDirection: 'column'}}>
                        <Contribution name="Companies" placement='odd' />
                        <Contribution name="Playwright" placement='even' />
                        <Contribution name="CookBook_Social" placement='odd' />
                        <Contribution name="Tide_Together" placement='even' />
                    </Container>     
                </Container>
            </Container>
        </Grid>
    );
}

export default Gallery;
