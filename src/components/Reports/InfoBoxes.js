import React from 'react'
import { Box, Typography, Grid } from '@mui/material'

export default function InfoBoxes() {
  return (
    <>
        <Box className="mony_box">
        <Grid container spacing={[1, 2, 3]}>
          <Grid item xs={6} md={4} xl={2} >
            <Box className="whiteBox">
              <Typography>Profit/Loss in USD</Typography>
              <Box className="innrFlx">
                <Typography component="h1">$ 60,319,23</Typography>
                <span>+2,5%</span>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} xl={2} >
            <Box className="whiteBox">
              <Typography>Rackeback in USD</Typography>
              <Box className="innrFlx">
                <Typography component="h1">$ 9,705.77</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} xl={2} >
            <Box className="whiteBox">
              <Typography>Rebate In USD</Typography>
              <Box className="innrFlx">
                <Typography component="h1">$ -1.000,00</Typography>
                <span>-11%</span>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} xl={2} >
            <Box className="whiteBox">
              <Typography>Agent Settlement In USD</Typography>
              <Box className="innrFlx">
                <Typography component="h1">$ 56,829.90</Typography>
                <span>-5,2%</span>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} xl={2} >
            <Box className="whiteBox">
              <Typography>Eco Ratio</Typography>
              <Box className="innrFlx">
                <Typography component="h1">$ -3.99</Typography>
                <span>-5,2%</span>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
