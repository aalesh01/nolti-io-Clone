import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CreatenoltboardBT from '../Buttons/createnoltboard'
import { useState,useEffect } from 'react'
import { shadows } from '@mui/system';


const FloatingBar = () => {
  
  const [Scroll, setScroll] = useState(window.scrollY);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <Box
    sx={{
        borderRadius:"8px",
        backgroundColor: 'rgb(24,117,210)',
        border: "2px solid #000000",
        width: "50%",
        padding:"0% 1%",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        position: 400 <= Scroll && Scroll <= 2175.5  ? "fixed" : null,
        zIndex: 4,
        left: "25%",
        bottom: Scroll <= 2175.5 ? "2%" : "40%",
        ['@media screen and(max-width: 1080px)']: {
        justifyContent: "center",
  }
    }
  }
    >
      <Typography color={'white'} variant="body1" gutterBottom>
              <b>Try it free for 10 days</b> without a credit card
        </Typography>
        <CreatenoltboardBT/>
    </Box>
  )
}

export default FloatingBar
