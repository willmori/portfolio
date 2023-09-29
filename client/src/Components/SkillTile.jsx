import React from "react";
import { Typography, useTheme } from '@mui/material';

function SkillTile({ logo, width, height, type }) { 

    const theme = useTheme();

    console.log(width)
    console.log(height)

    return (
        <div>
            <div style={{ width: '220px', height: '220px', display: 'flex', flexDirection: 'column', 
                        justifyContent: 'center', alignItems: 'center', borderRadius: '15px', position: 'relative',}}>
                <div style={{
                        position: 'absolute',
                        top: '50%', 
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '110%',
                        height: '110%',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.4) 10%, rgba(255,255,255,0) 65%)',
                        zIndex: 5, // Place it behind the logo
                    }}></div>
                <div style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                
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