import React from 'react'
import { Box, Grid } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function SelectGroup() {

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
        <Box className="select_boxMain m-b-24">
            <Grid container spacing={[1, 2]}>
                <Grid item xs={6} md={2} sm={6}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} className='def_form_cotrl'>
                        <Select
                            value={app}
                            onChange={handleAPPChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className='def_select'
                        >
                            <MenuItem value="">APP</MenuItem>
                            <MenuItem value={10}>APP 1</MenuItem>
                            <MenuItem value={20}>APP 2</MenuItem>
                            <MenuItem value={30}>APP 3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={2} sm={6}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} className='def_form_cotrl'>
                        <Select
                            value={union}
                            onChange={handleUnionChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className='def_select'
                        >
                            <MenuItem value="">Union</MenuItem>
                            <MenuItem value={10}>Union 1</MenuItem>
                            <MenuItem value={20}>Union 2</MenuItem>
                            <MenuItem value={30}>Union 3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={2} sm={6}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} className='def_form_cotrl'>
                        <Select
                            value={club}
                            onChange={handleClubChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className='def_select'
                        >
                            <MenuItem value="">Club</MenuItem>
                            <MenuItem value={10}>Club 1</MenuItem>
                            <MenuItem value={20}>Club 2</MenuItem>
                            <MenuItem value={30}>Club 3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={2} sm={6}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} className='def_form_cotrl'>
                        <Select
                            value={agent}
                            onChange={handleAgentChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className='def_select'
                        >
                            <MenuItem value="">Agent</MenuItem>
                            <MenuItem value={10}>Agent 1</MenuItem>
                            <MenuItem value={20}>Agent 2</MenuItem>
                            <MenuItem value={30}>Agent 3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={2} sm={6}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} className='def_form_cotrl'>
                        <Select
                            value={nickname}
                            onChange={handleNicknameChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className='def_select'
                        >
                            <MenuItem value="">Nickname</MenuItem>
                            <MenuItem value={10}>Nickname 1</MenuItem>
                            <MenuItem value={20}>Nickname 2</MenuItem>
                            <MenuItem value={30}>Nickname 3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={2} sm={6}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} className='def_form_cotrl'>
                        <Select
                            value={id}
                            onChange={handleIdChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            className='def_select'
                        >
                            <MenuItem value="">ID</MenuItem>
                            <MenuItem value={10}>ID 1</MenuItem>
                            <MenuItem value={20}>ID 2</MenuItem>
                            <MenuItem value={30}>ID 3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
      </Box>
    </>
  )
}
