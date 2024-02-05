import React from 'react'
import LayoutOne from '../components/Layouts/LayoutOne'
import { Box, Typography, Grid } from '@mui/material'

const Contact = () => {
  return (
    <>
      <LayoutOne>
        <Box class="def_p MuiBox-root css-0"></Box>
        <Box className="conten_us_page">
          <Box className="costomContainer">
            <Box className="contInnr">
              <Typography component="h2" className='contHedr'>Contact Us</Typography>
              <Typography className='contPera'>Contact us and get your personal rakeback offer!</Typography>
              <Box className="innrBg_box">
                <Grid container spacing={[1, 2]}>
                  <Grid item xs={12} md={6} sm={6} className='order_pernt'>
                    <Box className="Our_msgrs">
                      <Typography component='h2'>Our messegers</Typography>
                      <Typography>Say something to start a live chat!</Typography>
                      <Box className="sosl_mida">
                        <a href='#'><img src='/img/telegram_ic.svg' alt='' /></a>
                        <a href='#'><img src='/img/s_mida_ic.svg' alt='' /></a>
                        <a href='#'><img src='/img/call_ic.svg' alt='' /></a>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6} sm={6} className=''>
                    <Grid container spacing={[3, 4, 4, 6]}>
                      <Grid item xs={12} md={6} sm={12} className=''>
                        <Box className="cont_formContrl">
                          <Typography className='cont_lable'>First Name</Typography>
                          <input className='cont_def_inpt' type='text' placeholder='' />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6} sm={12} className=''>
                        <Box className="cont_formContrl">
                          <Typography className='cont_lable'>Last Name</Typography>
                          <input className='cont_def_inpt' type='text' placeholder='Doe' />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6} sm={12} className=''>
                        <Box className="cont_formContrl">
                          <Typography className='cont_lable'>Email</Typography>
                          <input className='cont_def_inpt' type='text' placeholder='Doe' />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6} sm={12} className=''>
                        <Box className="cont_formContrl">
                          <Typography className='cont_lable'>Phone Number</Typography>
                          <input className='cont_def_inpt' type='text' placeholder='+1 012 3456 789' />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={12} sm={12} className=''>
                        <Box className="cont_formContrl">
                          <Typography className='cont_lable'>Message</Typography>
                          <input className='cont_def_inpt' type='text' placeholder='Write your message..' />
                        </Box>
                      </Grid>
                    </Grid>
                    <Box className="redBtn_pernt">
                      <button className='def-button'>Send Message</button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </LayoutOne>
    </>
  )
}

export default Contact