import React, {useState, useEffect} from 'react';
import { Button, Container, Grid, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { HashLink } from 'react-router-hash-link';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
 
  const theme = useTheme();

  const handleEmailClick = () => {
    window.location.href = `mailto:willrmori@gmail.com`;
  }

  const [isVisible, setIsVisible] = useState(false);

  const [ refArrow, inViewArrow ] = useInView({
    triggerOnce: false, // Trigger only once
    threshold: 0.9, 
  });

  useEffect(() => {
    if (inViewArrow) {
      setIsVisible(true); // Element is in view
    } else {
      setIsVisible(false); // Element is out of view
    }
  }, [inViewArrow]);

  const arrowStyle = {
    opacity: isVisible ? 1 : 0, // Fade in when isVisible is true, otherwise fade out
    transition: 'opacity 0.5s', // Add a smooth transition effect
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'relative',
    bottom: '170px'
    
};

  return (
     <Grid style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} id="contact">
         <div ref={refArrow} style={arrowStyle}>
                
                    <IconButton component={HashLink} to="#top" smooth sx={{backgroundColor: 'rgba(128,128,128,0.2)',transition: 'background-color 0.3s',
                                                                                '&:hover': {
                                                                                    backgroundColor: 'rgb(125, 220, 195, 0.5)',
                                                                                },
                     }}>
                        <ArrowUpwardIcon sx={{height: '35px', width: '35px', color: theme.palette.primary.textContrast}} />
                    </IconButton>
                
            </div>
        <Container style={{display: 'flex', flexDirection: 'column', textAlign: 'center', maxWidth: '650px'}}>
          <Typography style={{color: theme.palette.primary.textPrimary}}>04. What's Next?</Typography>
          <Typography variant="h3" style={{color: theme.palette.primary.textContrast, fontWeight: 'bold', paddingTop: '20px', paddingBottom: '20px'}}>Get In Touch</Typography>
          <Typography style={{color: theme.palette.primary.textSecondary}}>
            While I am primarily looking for a full-stack, frontend, or backend software developer position, I am also open to freelance work! 
            I embrace the opportunity to learn from any problem solving challenges I encounter along my software engineering journey and love working in a collaborative agile environment.
            For any inquiries or if you'd like to just say hi, please feel free to reach out!
          </Typography>
          <div style={{paddingTop: '100x'}}>
            <Button variant="contained" backgroundColor='transparent' onClick={handleEmailClick}
                    style={{ marginTop: '50px', paddingLeft: '25px', paddingRight: '25px', paddingTop: '15px', paddingBottom: '15px'}}>Send me a message :)</Button>
          </div>
          <div style={{position: 'relative', top: '190px'}}>
            <IconButton href='https://github.com/willmori/portfolio.git' target={"_blank"} sx={{
                                                    "&:hover": {
                                                    backgroundColor: "transparent",
                                                    }
                                                }}>
                                    <GitHubIcon sx={{
                                                        height: '30px',
                                                        width: '30px', 
                                                        color: theme.palette.primary.contrastText,
                                                        transition: 'transform 0.4s',
                                                        "&:hover": {color: theme.palette.primary.textPrimary, transform: 'translateY(-4px)'}
                                                    }}>
                                    </GitHubIcon>
            </IconButton>  
            <Typography style={{color: theme.palette.primary.textPrimary}}>Built by William Mori (JavaScript / React)</Typography>
          </div>
        </Container>
        
    </Grid>
      
  );
}

export default Contact;