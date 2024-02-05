import React from 'react'
import './AdminReferral.css'
import { Box, Typography, Grid, Link} from '@mui/material'
import Players from './Players'

const AdminReferral = () => {
  return (
    <>
      <Typography component="h2" className='def-title'>Referral</Typography>
      <Box className="aPernt">
        <a href="/new-referrals" className='newRfrls_link'>New Referrals</a>
      </Box>
      <Box className="rfral_contentInnr">
        <Grid container spacing={[1, 2]}>
          <Grid item xs={12} md={12} xl={12}>
            <Players />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default AdminReferral