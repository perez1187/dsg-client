import React from 'react';
import { Box, Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import moment from 'moment';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function SelectGroup() {
  ///datepicker
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const range = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [
      moment().subtract(1, 'month').startOf('month'),
      moment().subtract(1, 'month').endOf('month'),
    ],
    'Last Year': [
      moment().subtract(1, 'year').startOf('year'),
      moment().subtract(1, 'year').endOf('year'),
    ],
  };

  const handleEvent = (event, picker) => {
    console.log('start: ', picker.startDate);
    console.log('end: ', picker.endDate._d);
    setFromDate(picker.startDate._d.toISOString());
    setToDate(picker.endDate._d.toISOString());
  };

  const [app, setApp] = React.useState('');
  const handleAPPChange = (event) => {
    setApp(event.target.value);
  };
  const [union, setUnion] = React.useState('');
  const handleUnionChange = (event) => {
    setUnion(event.target.value);
  };
  const [club, setClub] = React.useState('');
  const handleClubChange = (event) => {
    setClub(event.target.value);
  };
  const [ref, setRef] = React.useState('');
  const handleRefChange = (event) => {
    setRef(event.target.value);
  };
  const [agentId, setAgentId] = React.useState('');
  const handleAgentIdChange = (event) => {
    setAgentId(event.target.value);
  };
  const [superAge, setSuperAge] = React.useState('');
  const handleSuperAgeChange = (event) => {
    setSuperAge(event.target.value);
  };
  const [id, setId] = React.useState('');
  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const [upline, setUpline] = React.useState('');
  const handleUplineChange = (event) => {
    setUpline(event.target.value);
  };
  return (
    <>
      <Box className='select_boxMain m-b-24'>
        <Box className='dat_pic_box m-b-24'>
          <DateRangePicker
            // startDate={new Date()}
            // endDate={new Date()}
            ranges={range}
            alwaysShowCalendars={true}
            onEvent={handleEvent}
          >
            <button className='def_date_pickr'>
              {moment(fromDate).format('LL')}
              &nbsp; - &nbsp;
              {moment(toDate).format('LL')}
              <KeyboardArrowDownIcon />
            </button>
          </DateRangePicker>
        </Box>
        <Grid container spacing={[1, 2]}>
          <Grid item xs={6} md={2} sm={6}>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              className='def_form_cotrl'
            >
              <Select
                value={app}
                onChange={handleAPPChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className='def_select'
              >
                <MenuItem value=''>APP</MenuItem>
                <MenuItem value={10}>APP 1</MenuItem>
                <MenuItem value={20}>APP 2</MenuItem>
                <MenuItem value={30}>APP 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={2} sm={6}>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              className='def_form_cotrl'
            >
              <Select
                value={union}
                onChange={handleUnionChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className='def_select'
              >
                <MenuItem value=''>Union</MenuItem>
                <MenuItem value={10}>Union 1</MenuItem>
                <MenuItem value={20}>Union 2</MenuItem>
                <MenuItem value={30}>Union 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={2} sm={6}>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              className='def_form_cotrl'
            >
              <Select
                value={club}
                onChange={handleClubChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className='def_select'
              >
                <MenuItem value=''>Club</MenuItem>
                <MenuItem value={10}>Club 1</MenuItem>
                <MenuItem value={20}>Club 2</MenuItem>
                <MenuItem value={30}>Club 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={2} sm={6}>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              className='def_form_cotrl'
            >
              <Select
                value={ref}
                onChange={handleRefChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className='def_select'
              >
                <MenuItem value=''>Ref</MenuItem>
                <MenuItem value={10}>Ref 1</MenuItem>
                <MenuItem value={20}>Ref 2</MenuItem>
                <MenuItem value={30}>Ref 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={2} sm={6}>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              className='def_form_cotrl'
            >
              <Select
                value={agentId}
                onChange={handleAgentIdChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className='def_select'
              >
                <MenuItem value=''>Agent ID</MenuItem>
                <MenuItem value={10}>Agent ID 1</MenuItem>
                <MenuItem value={20}>Agent ID 2</MenuItem>
                <MenuItem value={30}>Agent ID 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={2} sm={6}>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              className='def_form_cotrl'
            >
              <Select
                value={superAge}
                onChange={handleSuperAgeChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className='def_select'
              >
                <MenuItem value=''>Super Age..</MenuItem>
                <MenuItem value={10}>Super Age.. 1</MenuItem>
                <MenuItem value={20}>Super Age.. 2</MenuItem>
                <MenuItem value={30}>Super Age.. 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={2} sm={6}>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              className='def_form_cotrl'
            >
              <Select
                value={id}
                onChange={handleIdChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className='def_select'
              >
                <MenuItem value=''>ID</MenuItem>
                <MenuItem value={10}>ID 1</MenuItem>
                <MenuItem value={20}>ID 2</MenuItem>
                <MenuItem value={30}>ID 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={2} sm={6}>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              className='def_form_cotrl'
            >
              <Select
                value={upline}
                onChange={handleUplineChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className='def_select'
              >
                <MenuItem value=''>Upline</MenuItem>
                <MenuItem value={10}>Upline 1</MenuItem>
                <MenuItem value={20}>Upline 2</MenuItem>
                <MenuItem value={30}>Upline 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
