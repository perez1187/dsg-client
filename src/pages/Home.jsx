import React from 'react'
import { auth } from '../services/userServices'

// using context
import { useAuth } from '../hooks/useAuth'
import LayoutOne from '../components/Layouts/LayoutOne'
import { Box, Typography, Grid, Rating } from '@mui/material'

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
            <a href='' className='startPly_link'>Start Play now!</a>
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
                  <a href='' className='startPly_link'>Start Play now!</a>
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
              <a href='' className='startPly_link'>Start Play now!</a>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Section Four */}
      <Box className="homeSectionFour">
        <Box className="costomContainer">
          <Box className="txtFlexBox">
            <Typography component="h1">A Personalized Solution</Typography>
            <Typography className='def_peragraph'>Our team will hear your needs and we will point you better spots to play according to <span className='f-w-600'>your poker goals!</span></Typography>
          </Box>
          <Grid container spacing={[1, 2]}>
            <Grid item xs={6} md={2} sm={6} className='box_cont_cetr'>
              <a href='#' className='logo_allImg'>
                <img src='/img/logo_ic01.svg' alt='' />
              </a>
            </Grid>
            <Grid item xs={6} md={2} sm={6} className='box_cont_cetr'>
              <a href='#' className='logo_allImg'>
                <img src='/img/logo_ic02.svg' alt='' />
              </a>
            </Grid>
            <Grid item xs={6} md={2} sm={6} className='box_cont_cetr'>
              <a href='#' className='logo_allImg'>
                <img src='/img/logo_ic03.svg' alt='' />
              </a>
            </Grid>
            <Grid item xs={6} md={2} sm={6} className='box_cont_cetr'>
              <a href='#' className='logo_allImg'>
                <img src='/img/logo_ic04.svg' alt='' />
              </a>
            </Grid>
            <Grid item xs={6} md={2} sm={6} className='box_cont_cetr'>
              <a href='#' className='logo_allImg'>
                <img src='/img/logo_ic05.svg' alt='' />
              </a>
            </Grid>
            <Grid item xs={6} md={2} sm={6} className='box_cont_cetr'>
              <a href='#' className='logo_allImg'>
                <img src='/img/logo_ic05.svg' alt='' />
              </a>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Section Five */}
      <Box className="homeSectionFive">
        <Box className="costomContainer">
          <Grid container spacing={[1, 2]}>
            <Grid item xs={6} md={6} sm={6} className='box_cont_cetr'>
              <Box className="">
                <img src='/img/mobile_img.png' alt='' />
              </Box>
            </Grid>
            <Grid item xs={6} md={6} sm={6} className='box_cont_cetr'>
              <Box className="">
                <Typography className='def_peragraph'>We are <br /><span className='f-w-500'>available 24/7!</span></Typography>
                <Box className="redBtn_pernt">
                  <a href='' className='startPly_link'>Start Play now!</a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Section Six */}
      <Box className="homeSectionFour homeSectionSix">
        <Box className="costomContainer">
          <Box className="txtFlexBox">
            <Typography component="h1">Instant Deposits and <br />Withdrawals</Typography>
            <Typography className='def_peragraph'>We are able to handle most of the <br />wallets and make super easy to play <br />in all partner clubs!</Typography>
          </Box>
          <Grid container spacing={[1, 2, 4, 8]}>
            <Grid item xs={6} md={2} sm={6} className='box_cont_cetr basisStyl'>
              <a href='#' className='logo_allImg'>
                <img src='/img/logo_ic06.svg' alt='' />
              </a>
            </Grid>
            <Grid item xs={6} md={2} sm={6} className='box_cont_cetr basisStyl'>
              <a href='#' className='logo_allImg'>
                <img src='/img/logo_ic07.svg' alt='' />
              </a>
            </Grid>
            <Grid item xs={6} md={2} sm={6} className='box_cont_cetr basisStyl'>
              <a href='#' className='logo_allImg'>
                <img src='/img/logo_ic08.svg' alt='' />
              </a>
            </Grid>
            <Grid item xs={6} md={2} sm={6} className='box_cont_cetr basisStyl'>
              <a href='#' className='logo_allImg'>
                <img src='/img/logo_ic09.svg' alt='' />
              </a>
            </Grid>
            <Grid item xs={6} md={2} sm={6} className='box_cont_cetr basisStyl'>
              <a href='#' className='logo_allImg'>
                <img src='/img/logo_ic09.svg' alt='' />
              </a>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Section Seven */}
      <Box className="homeSectionSeven">
        <Box className="costomContainer costomContainerV2">
          <Typography component="h1">Testimonials</Typography>
          <Grid container spacing={[1, 2, 4]}>
            <Grid item xs={6} md={6} sm={6} className=''>
              <Box className="tstmols_bg_box">
                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                <Typography className='contntText'>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum 
                  tristique. Duis cursus, mi quis viverra ornare duis cursus, mi quis viverra."
                </Typography>
                <Box className="userBxx">
                  <img src='/img/dommy_avatar_ic.svg' alt='' />
                  <Box>
                    <Typography component="h6">Jerome Bell</Typography>
                    <Typography>Position, Company name</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={6} sm={6} className=''>
              <Box className="tstmols_bg_box">
                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                <Typography className='contntText'>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum 
                  tristique. Duis cursus, mi quis viverra ornare duis cursus, mi quis viverra."
                </Typography>
                <Box className="userBxx">
                  <img src='/img/dommy_avatar_ic.svg' alt='' />
                  <Box>
                    <Typography component="h6">Jerome Bell</Typography>
                    <Typography>Position, Company name</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={6} sm={6} className=''>
              <Box className="tstmols_bg_box">
                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                <Typography className='contntText'>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum 
                  tristique. Duis cursus, mi quis viverra ornare duis cursus, mi quis viverra."
                </Typography>
                <Box className="userBxx">
                  <img src='/img/dommy_avatar_ic.svg' alt='' />
                  <Box>
                    <Typography component="h6">Jerome Bell</Typography>
                    <Typography>Position, Company name</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={6} sm={6} className=''>
              <Box className="tstmols_bg_box">
                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                <Typography className='contntText'>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum 
                  tristique. Duis cursus, mi quis viverra ornare duis cursus, mi quis viverra."
                </Typography>
                <Box className="userBxx">
                  <img src='/img/dommy_avatar_ic.svg' alt='' />
                  <Box>
                    <Typography component="h6">Jerome Bell</Typography>
                    <Typography>Position, Company name</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
       {/* Section Last */}
      <Box className="homeSectionLsta">
        <Box className="costomContainer">
          <Box className="se_threInnr">
            <Typography className='def_peragraph'>
              Talk to one of our poker consultants now and check how we can help you!
            </Typography>
            <Box className="redBtn_pernt">
              <a href='' className='startPly_link'>Start Play now!</a>
            </Box>
          </Box>
        </Box>
      </Box>
    </LayoutOne>
  )
}

export default Home