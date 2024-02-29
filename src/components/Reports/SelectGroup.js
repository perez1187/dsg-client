import React from 'react';
import { Box, Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectGroup({ data }) {
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
  return (
    <>
      <Box className='select_boxMain m-b-24'>
        <Grid container spacing={[1, 2]}>
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
