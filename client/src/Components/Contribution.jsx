import React, {useState, useEffect} from 'react';
import { Button, Grid, Container, Avatar, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import MetalinguistCompanies from '../assets/MetalinguistCompanies.mp4';
import ContributionContent from './ContributionContent';
import './Contribution.css'


const Contribution = ({ name, placement }) => {

    const theme = useTheme();

    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger only once
        threshold: 0.1, // Percentage of component visibility to trigger
      });
 
    return (
    
        <Container ref={ref} className={`fade-in-up ${inView ? 'is-visible' : ''}`}
                    style={{width: '1045px', position: 'relative', right: '7px', padding: '0px', paddingBottom: '120px',
                            display: 'flex'}} >
            {placement === 'odd' 
                ?
                    <>
                    <div className="tinted-video-wrapper">
                        <div style={{borderRadius: '15px', overflow: 'hidden', zIndex: 1, height: '342px', width: '600px', position: 'relative', top: '29px'}}>
                            <video autoPlay loop muted style={{ width: '600px', height: '400px', position: 'relative', bottom: '29px'}} src={MetalinguistCompanies}></video>
                        </div>
                        
                    </div>
                    <Container style={{marginTop: '50px'}}>
                        <ContributionContent name={name} placement={placement} />
                    </Container>
                    </>
                :
                    <>
                    <Container style={{marginTop: '50px'}}>
                        <ContributionContent name={name} placement={placement} />
                    </Container>
                    <div className="tinted-video-wrapper">
                        <div style={{borderRadius: '10px', overflow: 'hidden', zIndex: 1, height: '342px', width: '600px', position: 'relative', top: '29px'}}>
                            <video autoPlay loop muted style={{ width: '600px', height: '400px', position: 'relative', bottom: '29px'}} src={MetalinguistCompanies}></video>
                        </div>
                    </div>
                    </>
            }
                
        </Container>
            
      
        

    );
}

export default Contribution;
