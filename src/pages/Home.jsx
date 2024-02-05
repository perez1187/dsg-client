import React from 'react'
import { auth } from '../services/userServices'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// using context
import { useAuth } from '../hooks/useAuth'
import LayoutOne from '../components/Layouts/LayoutOne'
import { Box, Typography, Grid, Rating } from '@mui/material'
import PersonalizedSolution from '../components/home/PersonalizedSolution';
import InstantDeposits from '../components/home/InstantDeposits';
import Testimonials from '../components/home/Testimonials';


const Home = () => {


  const username = "admin"
  const password = "DSGDSGDSG"
  // useStates for context
  const { authData, setAuth } = useAuth()

  const handleSubmit = async e => {
    e.preventDefault() // we are not going to refresh the page

    // we can use shortcur if key and value is the same{username,  password}
    const data = await auth({ 'username': username, 'password': password })
    console.log(data)
    await setAuth(data)
  }

  function showMe() {
    console.log(authData)
  }




  return (
    <LayoutOne>
      <Box className="def_p"></Box>
      {/* <div className='tempBox'>
        <button onClick={handleSubmit}>
          Activate Lasers
        </button>
        <button onClick={showMe}>
          Ad
        </button>
      </div> */}
      <Box className="homeSectionOne">
        <Box className="costomContainer">
          <Typography>Playing Online Poker has never been so easy!</Typography>
          <Typography className='m-pernt'>We are affiliation company <span>since 2016!</span></Typography>
          <Box className="redBtn_pernt">
            <a href='' className='def-button'>Start Play now!</a>
          </Box>
        </Box>
      </Box>
      {/* Section Two */}
      <Box className="homeSectionTwo">
        <Box className="costomContainer">
          <Grid container spacing={[1, 2]}>
            <Grid item xs={12} md={6} sm={6} alignItems="center">
              <Box className="imgCenter">
                <img src='/img/se_two_img.png' alt='' />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sm={6} className='centerContent'>
              <Box className="ourPlrs">
                <Typography className='def_peragraph'>Our Players genered more <br />than 50,000,00+ in fees!</Typography>
                <Box className="redBtn_pernt">
                  <a href='' className='def-button'>Start Play now!</a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Section Three */}
      <Box className="homeSectionThree">
        <Box className="costomContainer">
          <Box className="se_threInnr">
            <Typography className='def_peragraph'>
              More than <span className='redText'>2000</span> <span className='whitText'>+</span> players currently active weekly playing poker tagged to us accross poker apps and sites.
            </Typography>
            <Box className="redBtn_pernt">
              <a href='' className='def-button'>Start Play now!</a>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Section Four */}
      <PersonalizedSolution />
      {/* Section Five */}
      <Box className="homeSectionFive">
        <Box className="costomContainer">
          <Grid container spacing={[1, 2]}>
            <Grid item xs={12} md={6} sm={6} className='box_cont_cetr'>
              <Box className="mobile_imgPernt">
                <img src='/img/mobile_img.png' alt='' />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sm={6} className='box_cont_cetr'>
              <Box className="risposw_pernt">
                <Typography className='def_peragraph'>We are <br /><span className='f-w-500'>available 24/7!</span></Typography>
                <Box className="redBtn_pernt">
                  <a href='' className='def-button'>Start Play now!</a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Section Six */}
      <InstantDeposits />
      {/* Section Seven */}
      <Testimonials />
       {/* Section Last */}
      <Box className="homeSectionLsta">
        <Box className="costomContainer">
          <Box className="se_threInnr">
            <Typography className='def_peragraph'>
              Talk to one of our poker consultants now and check how we can help you!
            </Typography>
            <Box className="redBtn_pernt">
              <a href='' className='def-button'>Start Play now!</a>
            </Box>
          </Box>
        </Box>
      </Box>
    </LayoutOne>
  )
}

export default Home