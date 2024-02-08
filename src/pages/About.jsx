import React from 'react'
import LayoutOne from '../components/Layouts/LayoutOne'
import { Box, Typography, Grid } from '@mui/material'
import Testimonials from '../components/home/Testimonials'

const About = () => {
  return (
    <>
      <LayoutOne>
        <Box class="def_p MuiBox-root css-0"></Box>
        <Box className="abotScOne">
          <Box className="costomContainer">
          </Box>
        </Box>
        <Box className="abotUsSc">
          <Box className="costomContainer">
            <Box className="abtUsInnr">
              <Typography component="h3" className='about_def_hed'>About us</Typography>
              <Typography className='about_def_pera'>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.</Typography>
              <Typography className='about_def_pera'>Proin cursus, dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum. Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="howWeDoItSc">
          <Box className="costomContainer1300">
            <Grid container spacing={[2, 2, 4]}>
              <Grid item xs={12} md={6} sm={6} className='how_contentCenter'>
                <Box className="how_content">
                  <Typography component="h3" className='about_def_hed'>How we do it</Typography>
                  <Typography className='about_def_pera'>
                    Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem. Proin cursus,
                    dolor a mollis consectetur, risus dolor fermentum massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a tortor ultrices bibendum.
                    Nulla fermentum, metus quis sodales tristique, augue mauris molestie augue non feugiat ligula neque nec felis.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} sm={6} className=''>
                <Box className="unsplash_img">
                  <img src='/img/unsplash_img.png' alt='' />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box className="howWeDoItSc howWeDoItScV2">
          <Box className="costomContainer1300">
            <Box className="how_content">
              <Typography component="h3" className='about_def_hed ourValues'>Our Values</Typography>
            </Box>
            <Box className="ourContFlx">
              <Box className="ourVluInnr">
                <img src='/img/data_img.svg' alt='' />
                <Typography component="h6">Title</Typography>
                <Typography>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.</Typography>
              </Box>
              <Box className="ourVluInnr margn_left">
                <img src='/img/data_img.svg' alt='' />
                <Typography component="h6">Title</Typography>
                <Typography>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.</Typography>
              </Box>
              <Box className="ourVluInnr margn_left">
                <img src='/img/data_img.svg' alt='' />
                <Typography component="h6">Title</Typography>
                <Typography>Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus erat, consectetur eu sapien eget rhoncus consectetur sem.</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Testimonials />
      </LayoutOne>
    </>
  )
}

export default About