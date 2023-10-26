import React, {useState, useEffect} from 'react';
import { Button, Grid, Container, Avatar, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import MetalinguistCompanies from '../assets/MetalinguistCompanies.mp4';
import Playwright from '../assets/Playwright.mp4';
import CookBookSocial from '../assets/CookBookSocial.mp4';
import Provisioning from '../assets/Provisioning.mp4';
import ContributionContent from './ContributionContent';
import { useMediaQuery } from '@mui/material';
import './Contribution.css'


const Contribution = ({ name, placement }) => {

    const theme = useTheme();

    const isTabletScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const isCutOffScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'));

    const [contentOnTop, setContentOnTop] = useState(true)

    function toggle() {
        setContentOnTop(!contentOnTop);
    }

    const [ref, inView] = useInView({
        triggerOnce: false, // Trigger only once
        threshold: 0.2, // Percentage of component visibility to trigger
    });

    function getVideoSource() {
        switch(name) {
            case "Companies": return MetalinguistCompanies;
            case "Playwright": return Playwright;
            case "Provisioning": return Provisioning;
            case "CookBook_Social": return CookBookSocial;
        }
    }
 
    return (
        <React.Fragment>
            {!isCutOffScreen ? 
            <Container ref={ref} className={`fade-in-up ${inView ? 'is-visible' : ''}`}
                        style={{maxWidth: '1045px', position: 'relative', right: '7px', padding: '0px', paddingBottom: '120px',
                                display: 'flex'}} >
                {placement === 'odd' 
                    ?
                        <div style={{display: 'flex'}}>
                            <div className="tinted-video-wrapper">
                                <div style={{borderRadius: '10px', overflow: 'hidden', zIndex: 1, height: '342px', width: '600px', position: 'relative', top: '29px', border: `1px solid ${theme.palette.primary.textContrast}`}}>
                                    <video autoPlay loop muted style={{ width: '600px', height: '400px', position: 'relative', bottom: '29px'}} src={getVideoSource()}></video>
                                </div>
                                
                            </div>
                            <Container style={{marginTop: '55px', position: 'relative', right: '100px', zIndex: 3}}>
                                <ContributionContent name={name} placement={placement} />
                            </Container>
                        </div>
                    :
                        <div style={{display: 'flex', position: 'relative', right: '53px'}}>
                            <Container style={{marginTop: '70px', zIndex: 3}}>
                                <ContributionContent name={name} placement={placement} />
                            </Container>
                            <div className="tinted-video-wrapper" style={{position: 'relative', right: '97px'}}>
                                <div style={{borderRadius: '10px', overflow: 'hidden', zIndex: 1, height: '342px', width: '600px', position: 'relative', top: '29px', border: `1px solid ${theme.palette.primary.textContrast}`}}>
                                    
                                    <video autoPlay loop muted style={{ width: '600px', height: '400px', position: 'relative', bottom: '29px'}} src={getVideoSource()}></video>
                                    
                                </div>
                            </div>
                        </div>
                }
                    
            </Container>
            : !isTabletScreen ?
                <Container ref={ref} className={`fade-in-up ${inView ? 'is-visible' : ''}`}
                            style={{maxWidth: '1045px', position: 'relative', right: '7px', padding: '0px', paddingBottom: '25px',
                                    display: 'flex'}} >
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <div className="tinted-video-wrapper">
                                    <div style={{borderRadius: '10px', overflow: 'hidden', zIndex: 1, height: '342px', width: '600px', position: 'relative', top: '29px', border: `1px solid ${theme.palette.primary.textContrast}`}}>
                                        <video autoPlay loop muted style={{ width: '600px', height: '400px', position: 'relative', bottom: '29px'}} src={getVideoSource()}></video>
                                    </div>
                                    
                                </div>
                                <Container style={{marginTop: '55px', position: 'relative', right: '100px', zIndex: 3}}>
                                    <ContributionContent name={name} placement={placement} />
                                </Container>
                            </div>
                </Container>
                :
                <>
                    <div ref={ref} className={`fade-in-up ${inView ? 'is-visible' : ''}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', overflow: 'hidden', zIndex: 5, maxHeight: '460px', maxWidth: '700px', boxShadow: '10px 10px 20px #2c3e50'}}>
                        <ContributionContent name={name} placement={placement} />
                    </div>      
                </>
            }
        </React.Fragment>

    );
}

export default Contribution;
