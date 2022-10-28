import React from 'react'
import { Button,Typography } from '@mui/material'
const CreatenoltboardBT = () => {
  return (
    <Button sx={{ bgcolor: "white", color:"rgb(57,41,70)", margin: "2%", textTransform: 'none',
    [':hover']: {
      backgroundColor: "rgba(57,41,70,0.2)",
      color: "white",
      boxShadow: "none",
    },
    }} variant="contained">
        Create a Nolt Board
      </Button>

  )
}

export default CreatenoltboardBT