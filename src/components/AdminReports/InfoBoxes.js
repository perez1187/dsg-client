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
              <Typography>Users</Typography>
              <Box className="innrFlx">
                <Typography component="h1">3,149</Typography>
                <span>-11%</span>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} xl={2} >
            <Box className="whiteBox">
              <Typography>Agents</Typography>
              <Box className="innrFlx">
                <Typography component="h1">789</Typography>
                <span>-5,2%</span>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} xl={2} >
            <Box className="whiteBox">
              <Typography>Club</Typography>
              <Box className="innrFlx">
                <Typography component="h1">45</Typography>
                <span>-5,2%</span>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} xl={2} >
            <Box className="whiteBox">
              <Typography>Unions</Typography>
              <Box className="innrFlx">
                <Typography component="h1">19</Typography>
                <span>-5,2%</span>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} xl={2} >
            <Box className="whiteBox">
              <Typography>Club Settl. In USD</Typography>
              <Box className="innrFlx">
                <Typography component="h1">$ 18K</Typography>
                <span>+5,2%</span>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} xl={2} >
            <Box className="whiteBox">
              <Typography>Aggent Sttlement</Typography>
              <Box className="innrFlx">
                <Typography component="h1">$ 18K</Typography>
                <span>+5,2%</span>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4} xl={2} >
            <Box className="whiteBox">
              <Typography>Eco Ratio</Typography>
              <Box className="innrFlx">
                <Typography component="h1">0,6</Typography>
                <span>+5,2%</span>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
