import React, {useState, useEffect} from 'react';
import { Button, Grid, Container, Avatar, Typography, Box, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Contribution from '../Components/Contribution';
import { useMediaQuery } from '@mui/material';


const Gallery = () => {

    const theme = useTheme();

    const isCutOffScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const isTabletScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const isSmallTablet = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));

    const [ref, inView] = useInView({
        triggerOnce: false, // Trigger only once
        threshold: 0.3, // Percentage of component visibility to trigger
    });
 
    return (
        <React.Fragment>
            {!isCutOffScreen ?
            <Grid style={{ marginTop: '250px'}} id="gallery">
                <Container style={{width: '1300px', display: 'flex'}} >
                    <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Container ref={ref} style={{display: 'flex', alignItems: 'center', marginBottom: '15px'}} className={`fade-in-up ${inView ? 'is-visible' : ''}`}>
                            <Typography variant="h5" style={{color: theme.palette.primary.textPrimary}}>03.&nbsp;&nbsp;</Typography>
                            <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }} style={{color: 'rgb(210, 215, 240)'}}>Contribution Highlights</Typography>
                            <div style={{borderBottom: `1px solid rgb(140, 145, 175, 0.3)`, width: '260px', marginLeft: '20px'}}></div>
                        </Container>
                        <Container style={{ display: 'flex', flexDirection: 'column'}}>
                            <Contribution name="WebsiteBuilder" placement='odd'/>
                            <Contribution name="Companies" placement='even'/>
                            <Contribution name="Playwright" placement='odd' />
                            <Contribution name="Provisioning" placement='even' />
                            <Contribution name="CookBook_Social" placement='odd' />
                            
                        </Container>     
                    </Container>
                </Container>
            </Grid> :
            <Grid style={{ marginTop: '250px' }} id="gallery">
                <Container style={{maxWidth: '1300px', display: 'flex'}} >
                    <Container style={{display: 'flex', flexDirection: 'column', paddingLeft: '0px', paddingRight: '0px'}}>
                        <Container ref={ref} style={{display: 'flex', alignItems: 'center', marginBottom: '15px'}} className={`fade-in-up ${inView ? 'is-visible' : ''}`}>
                            <Typography variant="h5" style={{color: theme.palette.primary.textPrimary}}>03.&nbsp;&nbsp;</Typography>
                            {isTabletScreen ? <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }} style={{color: 'rgb(210, 215, 240)'}}>Contributions</Typography>
                            : <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }} style={{color: 'rgb(210, 215, 240)'}}>Contribution Highlights</Typography>}
                            <div style={{borderBottom: `1px solid rgb(140, 145, 175, 0.3)`, width: '260px', marginLeft: '20px'}}></div>
                        </Container>
                        <Container style={{ display: 'flex', flexDirection: 'column'}}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: isTabletScreen ? '50px' : '', paddingBottom: isTabletScreen ? '50px' : ''}}>
                                <Contribution name="WebsiteBuilder" placement='odd'/>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: isTabletScreen ? '50px' : '', paddingBottom: isTabletScreen ? '50px' : ''}}>
                                <Contribution name="Companies" placement='even'/>
                            </div>
                            
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: isTabletScreen ? '50px' : '', paddingBottom: isTabletScreen ? '50px' : ''}}>
                                <Contribution name="Playwright" placement='odd' />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: isTabletScreen ? '50px' : '', paddingBottom: isTabletScreen ? '50px' : ''}}>
                                <Contribution name="Provisioning" placement='even' />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: isTabletScreen ? '50px' : '', paddingBottom: isTabletScreen ? '50px' : ''}}>
                                <Contribution name="CookBook_Social" placement='odd' />
                            </div>
                            
                        </Container>     
                    </Container>
                </Container>
            </Grid>}
        </React.Fragment>
       
    );
}

export default Gallery;
