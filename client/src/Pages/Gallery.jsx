import React, {useState, useEffect} from 'react';
import { Button, Grid, Container, Avatar, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';


const Gallery = () => {

    const theme = useTheme();

    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger only once
        threshold: 0.1, // Percentage of component visibility to trigger
      });
 
    return (
        <Grid style={{height: '90vh', paddingTop: '150px'}} id="gallery">
            <Container ref={ref} style={{width: '1000px', display: 'flex'}} className={`fade-in-up ${inView ? 'is-visible' : ''}`}>
                <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Container style={{display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
                        <Typography variant="h5" style={{color: theme.palette.primary.textPrimary}}>03.&nbsp;&nbsp;</Typography>
                        <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }} style={{color: 'rgb(210, 215, 240)'}}>Some Things I've Built</Typography>
                        <div style={{borderBottom: `1px solid rgb(140, 145, 175, 0.3)`, width: '260px', marginLeft: '20px'}}></div>
                    </Container>
                   
                </Container>
                
            </Container>
            
        </Grid>
        

    );
}

export default Gallery;
