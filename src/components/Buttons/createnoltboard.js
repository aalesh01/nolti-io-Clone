import React from 'react'
import { Button,Typography } from '@mui/material'
const CreatenoltboardBT = ({parent}) => {
  return (
    <Button sx={{
      bgcolor: parent != "floatingbar" ? "white" : "black", color: parent != "floatingbar" ? "rgb(57,41,70)": "white", margin: "2%", textTransform: 'none',
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