import React from "react";
import { BottomNavigation, Typography } from "@mui/material";

const Footer = () => {
  return (
    <BottomNavigation 
      sx={{
        color:"#392946",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "2%",
      }}
    >
      <Typography  variant="caption" component="div" >
        Feature
      </Typography>
      <Typography variant="caption" component="div" >
        Pricing
      </Typography>
      <Typography variant="caption" component="div" >
        Help
      </Typography>
      <Typography variant="caption" component="div" >
        Terms
      </Typography>
      <Typography variant="caption" component="div" >
        Privacy
      </Typography>
    </BottomNavigation>
  );
};

export default Footer;
