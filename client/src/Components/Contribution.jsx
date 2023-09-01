import React, {useState, useEffect} from 'react';
import { Button, Grid, Container, Avatar, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import MetalinguistCompanies from '../assets/MetalinguistCompanies.mp4';
import Playwright from '../assets/Playwright.mp4';
import CookBookSocial from '../assets/CookBookSocial.mp4';
import TideTogether from '../assets/TideTogether.png';
import ContributionContent from './ContributionContent';
import './Contribution.css'


const Contribution = ({ name, placement }) => {

    const theme = useTheme();

    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger only once
        threshold: 0.1, // Percentage of component visibility to trigger
      });

    function getVideoSource() {
        switch(name) {
            case "Companies": return MetalinguistCompanies;
            case "Playwright": return Playwright;
            case "CookBook_Social": return CookBookSocial;
            case "Tide_Together": return TideTogether;
        }
    }
 
    return (
    
        <Container ref={ref} className={`fade-in-up ${inView ? 'is-visible' : ''}`}
                    style={{width: '1045px', position: 'relative', right: '7px', padding: '0px', paddingBottom: '120px',
                            display: 'flex'}} >
            {placement === 'odd' 
                ?
                    <div style={{display: 'flex'}}>
                        <div className="tinted-video-wrapper">
                            <div style={{borderRadius: '10px', overflow: 'hidden', zIndex: 1, height: '342px', width: '600px', position: 'relative', top: '29px'}}>
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
                            <div style={{borderRadius: '10px', overflow: 'hidden', zIndex: 1, height: '342px', width: '600px', position: 'relative', top: '29px'}}>
                                {name === "TideTogether" 
                                    ?   <img src={getVideoSource()} style={{ width: '600px', height: '400px', position: 'relative', bottom: '29px'}} />
                                    :   <video autoPlay loop muted style={{ width: '600px', height: '400px', position: 'relative', bottom: '29px'}} src={getVideoSource()}></video>
                                }
                            </div>
                        </div>
                    </div>
            }
                
        </Container>
            
      
        

    );
}

export default Contribution;
