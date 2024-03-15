import React from 'react'
import LayoutTwo from '../components/Layouts/LayoutTwo'
import { Box, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function NewReferrals() {

  const [app, setApp] = React.useState('');
  const handleAPPChange = (event) => {
    setApp(event.target.value);
  };

  return (
    <>
    <LayoutTwo>
        <Box className="new_refrl_pgMain">
          <Box className="upTextBox">
            <Typography component="h2" className='def-title'>Referral</Typography>
            <ArrowForwardIosIcon />
            <Typography component="h2" className='def-title'>New Referral</Typography>
          </Box>
          <Box className="newRfr_whitBox">
            <Box className="fomCtrol m-b-24">
              <Typography className='leble_text'>Name</Typography>
              <input type='text' placeholder='1' />
            </Box>
            <Box className="fomCtrol m-b-24">
              <Typography className='leble_text'>Club</Typography>
              <Box className="set_inSearch">
                <input type='text' placeholder='Placeholder' />
                <SearchIcon />
              </Box>
            </Box>
            <Box className="newFlex m-b-24">
              <Box className="fomCtrol">
                <Typography className='leble_text'>Club</Typography>
                <Box className="set_inSearch">
                  <input type='text' placeholder='Placeholder' />
                  <SearchIcon />
                </Box>
              </Box>
              <Box className="fomCtrol fomCtrolV2">
                <Typography className='leble_text'>%</Typography>
                <input type='text' placeholder='2%' />
              </Box>
            </Box>
            <Box className="fomCtrol fomCtrolV2">
                <Typography className='leble_text'>Chip Rate</Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }} className='def_form_cotrl'>
                  <Select
                      value={app}
                      onChange={handleAPPChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      className='def_select'
                  >
                      <MenuItem value="">USD</MenuItem>
                      <MenuItem value={10}>USD 1</MenuItem>
                      <MenuItem value={20}>USD 2</MenuItem>
                      <MenuItem value={30}>USD 3</MenuItem>
                  </Select>
              </FormControl>
              </Box>
          </Box>
        </Box>
    </LayoutTwo>
    </>
  )
}
