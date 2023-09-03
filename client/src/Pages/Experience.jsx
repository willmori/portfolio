import React, {useState, useEffect} from 'react';
import { Button, Grid, Container, Typography, Fade } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@mui/material';
import RolesSelector from '../Components/RolesSelector';
import RolesDetails from '../Components/RolesDetails';
import path2 from '../assets/path2.png';
import { useMediaQuery } from '@mui/material';
import './Experience.css';

const Experience = () => {

  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger only once
    threshold: 0.3, // Percentage of component visibility to trigger
  });

  const [role, setRole] = useState('Metalinguist');

  const isCutOffScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  const isTabletScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const isSmallTablet = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  function changeRole(newRole) {
    setRole(newRole);
  };

    return (
      <React.Fragment>
        {!isTabletScreen ?
        <Grid style={{height: '100vh', paddingLeft: '200px', paddingTop: '200px'}} id="experience">
          <Container ref={ref} style={{width: '700px', paddingLeft: '0px'}} className={`fade-in-up ${inView ? 'is-visible' : ''}`}>
            <Container style={{display: 'flex', alignItems: 'center', marginBottom: '30px', paddingLeft: '0px'}}>
              <Typography variant="h5" style={{color: theme.palette.primary.textPrimary}}>02.&nbsp;&nbsp;</Typography>
              <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }} style={{color: 'rgb(210, 215, 240)'}}>Roles I've Worked</Typography>
              <div style={{borderBottom: `1px solid rgb(140, 145, 175, 0.3)`, width: '260px', marginLeft: '20px'}}></div>
            </Container>
          </Container>
          <Container ref={ref} style={{paddingLeft: '0px', width: '700px', display: 'flex'}} className={`fade-in-up ${inView ? 'is-visible' : ''}`}>
            <RolesSelector vertical={true} role={role} changeRole={changeRole} />
            <div className={`fade-in-out visible`}>
              <RolesDetails role={role} />
            </div>
          </Container>
        </Grid>
        :
        !isSmallTablet ?
        <Grid style={{height: '80vh', paddingLeft: '0px', paddingTop: '200px'}} id="experience">
            <Container ref={ref} style={{maxWidth: '1000px', display: 'flex', flexDirection: 'column'}} className={`fade-in-up ${inView ? 'is-visible' : ''}`}>
                    <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Container style={{display: 'flex', alignItems: 'center', marginBottom: '30px', justifyContent: 'center', position: 'relative', right: '30px'}}>
                            <Typography variant="h5" style={{color: theme.palette.primary.textPrimary}}>02.&nbsp;&nbsp;</Typography>
                            <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }} style={{color: 'rgb(210, 215, 240)'}}>Roles I've Worked</Typography>
                            <div style={{borderBottom: `1px solid rgb(140, 145, 175, 0.3)`, width: '260px', marginLeft: '20px'}}></div>
                        </Container>
                        <RolesSelector vertical={false} role={role} changeRole={changeRole} />
                        <div style={{maxWidth: '500px'}} className={`fade-in-out visible`}>
                          <RolesDetails role={role} />
                        </div>
                    </Container>
                    
            </Container>
          
        </Grid> 
        :
        <Grid style={{height: '80vh', paddingLeft: '0px', paddingTop: '200px'}} id="experience">
            <Container ref={ref} style={{maxWidth: '1000px', display: 'flex', flexDirection: 'column'}} className={`fade-in-up ${inView ? 'is-visible' : ''}`}>
                    <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Container style={{display: 'flex', alignItems: 'center', marginBottom: '30px', justifyContent: 'center', position: 'relative', right: '30px'}}>
                            <Typography variant="h5" style={{color: theme.palette.primary.textPrimary}}>02.&nbsp;&nbsp;</Typography>
                            <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }} style={{color: 'rgb(210, 215, 240)'}}>Roles I've Worked</Typography>
                            <div style={{borderBottom: `1px solid rgb(140, 145, 175, 0.3)`, width: '260px', marginLeft: '20px'}}></div>
                        </Container>
                        <RolesSelector vertical={false} role={role} changeRole={changeRole} />
                        <div style={{maxWidth: '500px'}} className={`fade-in-out visible`}>
                          <RolesDetails role={role} />
                        </div>
                    </Container>
                    
            </Container>
          
        </Grid> 
        }
      </React.Fragment>
        
        
    );
}

export default Experience;