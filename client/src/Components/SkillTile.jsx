import React from "react";
import { Typography, useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';

function SkillTile({ logo, width, height, type }) { 

    const theme = useTheme();

    const [ref, inView] = useInView({
        triggerOnce: false, // Trigger only once
        threshold: 0.2, // Percentage of component visibility to trigger
    });

    return (
        <div>
            <div ref={ref} className={`fade-in-up ${inView ? 'is-visible' : ''}`} style={{ width: '230px', height: '230px', display: 'flex', flexDirection: 'column', 
                        justifyContent: 'center', alignItems: 'center', borderRadius: '15px', position: 'relative',}}>
                <div style={{
                        position: 'absolute',
                        top: '50%', 
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '110%',
                        height: '110%',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.5) 10%, rgba(255,255,255,0) 65%)',
                        zIndex: 5, // Place it behind the logo
                    }}></div>
                <div style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', right: type === 'mui' ? '5px' : ''}}>
                    {type === 'express' ? <Typography style={{display: 'inline', fontSize: '35px', color: '#878787', position: 'relative', 
                                                                top: '5px', right: '3px', fontWeight: 100, letterSpacing: '-2px'}}>Express</Typography> : ''}
                    <img src={logo} style={{width: width, height: height, position: 'relative',
                            zIndex: 6,}} alt="" />
                    {type === 'mui' ? <Typography style={{display: 'inline', fontSize: '35px', color: 'rgb(80,175,250)'}}>MUI</Typography> : ''}
                    {type === 'javascript' ? <Typography style={{display: 'inline', fontSize: '35px', color: 'rgb(215,185,75)', position: 'relative', right: '25px'}}>ES6+</Typography> : ''}
                </div>
                
            </div>

        </div>
    )
}

export default SkillTile;