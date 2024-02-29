import React, { useEffect } from 'react';
import { Box, Button, Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import moment from 'moment';

export default function SelectGroup({ data, valueChange }) {
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
  const [agent, setAgent] = React.useState('');
  const handleAgentChange = (event) => {
    setAgent(event.target.value);
  };
  const [nickname, setNickname] = React.useState('');
  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };
  const [id, setId] = React.useState('');
  const handleIdChange = (event) => {
    setId(event.target.value);
  };

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
    setFromDate(picker.startDate._d.toISOString());
    setToDate(picker.endDate._d.toISOString());
  };

  useEffect(() => {
    valueChange({
      app: app,
      union: union,
      club: club,
      agent: agent,
      nickname: nickname,
      nickname_id: id,
      startDate: moment(new Date(fromDate)).format('YYYY-MM-DD'),
      endDate: moment(new Date(toDate)).format('YYYY-MM-DD'),
    });
  }, [app, union, club, agent, nickname, id, fromDate, toDate]);

  return (
    <>
      <Box className='select_boxMain m-b-24'>
        <Grid container spacing={[1, 2]}>
          <Box className='dat_pic_box m-b-24 cllm-grd'>
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
            <Button className='resetButton'>Reset</Button>
          </Box>
          <Grid item xs={6} md={2} sm={6}>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              className='def_form_cotrl'
            >
              <label>App</label>
              <Select
                value={app}
                onChange={handleAPPChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className='def_select'
              >
                {data?.app_list.map((app) => (
                  <MenuItem value={app}>{app}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={2} sm={6}>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              className='def_form_cotrl'
            >
              <label>Union</label>
              <Select
                value={union}
                onChange={handleUnionChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className='def_select'
              >
                {data?.union_list.map((app) => (
                  <MenuItem value={app}>{app}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={2} sm={6}>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              className='def_form_cotrl'
            >
              <label>Club</label>
              <Select
                value={club}
                onChange={handleClubChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className='def_select'
              >
                {data?.club_list.map((app) => (
                  <MenuItem value={app}>{app}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={2} sm={6}>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              className='def_form_cotrl'
            >
              <label>Agent</label>
              <Select
                value={agent}
                onChange={handleAgentChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className='def_select'
              >
                {data?.agent_list.map((app) => (
                  <MenuItem value={app}>{app}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={2} sm={6}>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              className='def_form_cotrl'
            >
              <label>Nickname</label>
              <Select
                value={nickname}
                onChange={handleNicknameChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className='def_select'
              >
                {data?.nickname_list.map((app) => (
                  <MenuItem value={app}>{app}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md={2} sm={6}>
            <FormControl
              sx={{ m: 1, minWidth: 120 }}
              className='def_form_cotrl'
            >
              <label>ID</label>
              <Select
                value={id}
                onChange={handleIdChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                className='def_select'
                placeholder='ID List'
              >
                {data?.nickname_id_list.map((app) => (
                  <MenuItem value={app}>{app}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
