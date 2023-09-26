import React, { useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import Typed from 'typed.js';
import './TypedOut.css'

function TypedOut() {
    const theme = useTheme();
    const typedTargetRef = useRef(null);

    const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));
    const isTabletScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

    const currentVariant = isTabletScreen ? (isMobileScreen ? 'h4' : 'h3') : 'h2';

    useEffect(() => {
        const options = {
            strings: ["Software Engineer", "UI / UX Designer", "React / JavaScript"],
            typeSpeed: 40,
            backSpeed: 25,
            backDelay: 2500,
            loop: true,
            showCursor: false
        };

        // Initialize typed.js on the target element
        const typed = new Typed(typedTargetRef.current, options);

        // Clean up when the component is unmounted
        return () => {
            typed.destroy();
        };
    }, [currentVariant]);

    return <div style={{height: isTabletScreen ? (isMobileScreen ? '30px': '50px') : '75px'}}><Typography className="typed-text" variant={currentVariant} style={{color: theme.palette.primary.textContrast, fontWeight: 'normal'}} ref={typedTargetRef}></Typography></div>;
}

export default TypedOut;
