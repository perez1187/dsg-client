import React from 'react'
import { Box, Typography } from '@mui/material'

export default function TotalRevenue() {
  return (
    <>
        <Box className="cmmn-box">
          <Box className="revenue-info">
            <Box>
                <Typography component="h6">Total Revenue</Typography>
                <Typography component="h4">11.8M</Typography>
            </Box>
            <Box className="bedge">+2,5%</Box>
          </Box>
        </Box>
    </>
  )
}
