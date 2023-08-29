import React, {useState, useEffect} from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Home = () => {
 

  return (
    <Container  style={{ paddingTop: '100px' }}>
      <Typography variant="h6" style={{marginBottom: '20px'}}>
        Hi, my name is
      </Typography>
      <Typography variant="h1">
        William Mori.
      </Typography>
      <Typography variant="h1">
        I build things for the web.
      </Typography>
      <Typography variant="h6" style={{marginTop: '20px'}}>
        I'm a software engineer who specializes in full-stack development.<br></br>
        I enjoy building and designing exceptional digital experiences and working<br></br>alongside those who share the same passion.
        Currently, I'm focusing on<br></br>contributing to a new revolutionary translation management system at a<br></br>tech startup called Metalinguist.
      </Typography>
      <Button variant="contained" color="primary" style={{marginTop: '30px'}}>
        Resume
      </Button>
    </Container>
  );
}

export default Home;
