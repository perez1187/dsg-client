import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect } from 'react';
import { getAgentResultDetils, transformDataDetails } from './helper';
import { useState } from 'react';

const columns = [
  { field: 'id', headerName: 'Club', width: 150 },
  { field: 'players', headerName: 'Players', width: 180 },
  { field: 'nickname', headerName: 'Nickname', width: 130 },
  { field: 'agents', headerName: 'Agents', width: 120 },
  { field: 'profitLoss', headerName: 'Profit/Loss', width: 150 },
  { field: 'rake', headerName: 'Rake', width: 160 },
  { field: 'deal', headerName: 'Deal', width: 160 },
  { field: 'rakeback', headerName: 'Rakeback', width: 160 },
  { field: 'agentSettlement', headerName: 'Agent Settlement', width: 160 },
  {
    field: 'action',
    headerName: (
      <button className='menuBtn admin_menuBtn'>
        <MenuIcon />
      </button>
    ),
    width: 120,
  },
];

// const rows = [
//   {
//     id: 'MiamiBallers',
//     players: '957072',
//     nickname: 'Verners1',
//     agents: 'Verners1',
//     profitLoss: '$9,906,4',
//     rake: '$5,882,49',
//     deal: '75%',
//     rakeback: '$970,79',
//     agentSettlement: '$ 12,739,38',
//     action: '',
//   },
// ];

export default function ClubPlayersAgentsInUsd(props) {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getAgentResultDetils();
      const tranData = transformDataDetails(data.results);
      setRows(tranData);
    };
    getData();
  }, []);

  return (
    <>
      <Box className='cmmn-box m-t-24'>
        <Typography component='h4' className='cmmn-box-title'>
          Club l Players l Agents in USD
        </Typography>
        <Box sx={{ width: '100%' }} className='cmmn-table'>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </Box>
      </Box>
    </>
  );
}
