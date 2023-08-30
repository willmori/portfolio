import React, {useState, useEffect} from 'react';
import { Button, Grid, Container, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@mui/material';
import RolesSelector from '../Components/RolesSelector';

const Experience = () => {

  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Percentage of component visibility to trigger
  });

  const [role, setRole] = useState('Metalinguist');
  console.log(role)

  function changeRole(newRole) {
    setRole(newRole);
  };

    return (
        <Grid style={{height: '90vh', paddingTop: '100px'}} id="experience">
          <Container ref={ref} style={{width: '700px', paddingLeft: '0px'}} className={`fade-in-up ${inView ? 'is-visible' : ''}`}>
            <Container style={{display: 'flex', alignItems: 'center', marginBottom: '30px', paddingLeft: '0px'}}>
              <Typography variant="h5" style={{color: theme.palette.primary.textPrimary}}>02.&nbsp;&nbsp;</Typography>
              <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }} style={{color: 'rgb(210, 215, 240)'}}>Roles I've Worked</Typography>
              <div style={{borderBottom: `1px solid rgb(140, 145, 175, 0.3)`, width: '260px', marginLeft: '20px'}}></div>
            </Container>
          </Container>
          <Container ref={ref} style={{paddingLeft: '0px', width: '700px', display: 'flex'}} className={`fade-in-up ${inView ? 'is-visible' : ''}`}>
            <RolesSelector role={role} changeRole={changeRole} />
          </Container>

        </Grid>
        
    );
}

export default Experience;