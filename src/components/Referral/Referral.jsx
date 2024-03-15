import React from 'react'
import './Referral.css'
import { Box, Typography, Grid} from '@mui/material'
import Players from './Players'
import RevenueHistory from './RevenueHistory'

const Referral = () => {
  return (
    <>
      <Typography component="h2" className='def-title'>Referral</Typography>
      <Box className="rfral_contentInnr">
        <Grid container spacing={[1, 2]}>
          <Grid item xs={12} md={12} xl={4}>
            <Players />
          </Grid>
          <Grid item xs={12} md={12} xl={8}>
            <RevenueHistory/>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Referral