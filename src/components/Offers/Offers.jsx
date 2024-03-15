import React from 'react'
import './Offers.css'
import { Box, Typography, Grid} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Offers = () => {
  return (
    <>
      <Typography component="h2" className='def-title'>Offers</Typography>
      <Box className="inpt_pernt m-b-24">
        <SearchIcon />
        <input type='text' placeholder='Search for...' />
      </Box>
      <Box className="poker_bros">
        <Grid container spacing={[2, 3]}>
          <Grid item xs={6} md={3} xl={4} className='costomGrid'>
            <Link to="/" className='pokerLinkBx'>
              <Box className="pokerBox">
                <img src='/img/offer.jpeg' alt='' />
              </Box>
              <Typography>Rev. Share 30%</Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3} xl={4} className='costomGrid'>
            <Link to="/" className='pokerLinkBx'>
              <Box className="pokerBox">
                <img src='/img/offer.jpeg' alt='' />
              </Box>
              <Typography>Rev. Share 30%</Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3} xl={4} className='costomGrid'>
            <Link to="/" className='pokerLinkBx'>
              <Box className="pokerBox">
                <img src='/img/offer.jpeg' alt='' />
              </Box>
              <Typography>Rev. Share 30%</Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3} xl={4} className='costomGrid'>
            <Link to="/" className='pokerLinkBx'>
              <Box className="pokerBox">
                <img src='/img/offer.jpeg' alt='' />
              </Box>
              <Typography>Rev. Share 30%</Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3} xl={4} className='costomGrid'>
            <Link to="/" className='pokerLinkBx'>
              <Box className="pokerBox">
                <img src='/img/offer.jpeg' alt='' />
              </Box>
              <Typography>Rev. Share 30%</Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3} xl={4} className='costomGrid'>
            <Link to="/" className='pokerLinkBx'>
              <Box className="pokerBox">
                <img src='/img/offer.jpeg' alt='' />
              </Box>
              <Typography>Rev. Share 30%</Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3} xl={4} className='costomGrid'>
            <Link to="/" className='pokerLinkBx'>
              <Box className="pokerBox">
                <img src='/img/offer.jpeg' alt='' />
              </Box>
              <Typography>Rev. Share 30%</Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3} xl={4} className='costomGrid'>
            <Link to="/" className='pokerLinkBx'>
              <Box className="pokerBox">
                <img src='/img/offer.jpeg' alt='' />
              </Box>
              <Typography>Rev. Share 30%</Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3} xl={4} className='costomGrid'>
            <Link to="/" className='pokerLinkBx'>
              <Box className="pokerBox">
                <img src='/img/offer.jpeg' alt='' />
              </Box>
              <Typography>Rev. Share 30%</Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3} xl={4} className='costomGrid'>
            <Link to="/" className='pokerLinkBx'>
              <Box className="pokerBox">
                <img src='/img/offer.jpeg' alt='' />
              </Box>
              <Typography>Rev. Share 30%</Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3} xl={4} className='costomGrid'>
            <Link to="/" className='pokerLinkBx'>
              <Box className="pokerBox">
                <img src='/img/offer.jpeg' alt='' />
              </Box>
              <Typography>Rev. Share 30%</Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3} xl={4} className='costomGrid'>
            <Link to="/" className='pokerLinkBx'>
              <Box className="pokerBox">
                <img src='/img/offer.jpeg' alt='' />
              </Box>
              <Typography>Rev. Share 30%</Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3} xl={4} className='costomGrid'>
            <Link to="/" className='pokerLinkBx'>
              <Box className="pokerBox">
                <img src='/img/offer.jpeg' alt='' />
              </Box>
              <Typography>Rev. Share 30%</Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3} xl={4} className='costomGrid'>
            <Link to="/" className='pokerLinkBx'>
              <Box className="pokerBox">
                <img src='/img/offer.jpeg' alt='' />
              </Box>
              <Typography>Rev. Share 30%</Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3} xl={4} className='costomGrid'>
            <Link to="/" className='pokerLinkBx'>
              <Box className="pokerBox">
                <img src='/img/offer.jpeg' alt='' />
              </Box>
              <Typography>Rev. Share 30%</Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Offers