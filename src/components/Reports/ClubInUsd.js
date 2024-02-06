import React from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import MenuIcon from '@mui/icons-material/Menu';

const columns = [
  { field: 'id', headerName: 'Club', width: 230 },
  { field: 'profitLoss', headerName: 'Profit/Loss', width: 230, },
  { field: 'rake', headerName: 'Rake', width: 230, },
  { field: 'deal', headerName: 'Deal', width: 230, },
  { field: 'rakeback', headerName: 'Rakeback', width: 230, },
  { field: 'agentSettlement', headerName: 'Agent Settlement', width: 230, },
  { field: 'action', headerName: <button className='menuBtn admin_menuBtn'><MenuIcon /></button>, width: 120, },
  
];

const rows = [
  { id: 'MiamiBallers', profitLoss: "$9,906,4", rake: "$5,882,49", deal: "75%", rakeback: "$970,79", agentSettlement: "$ 12,739,38", action: "" },
  
];

export default function ClubInUsd(props) {
 
  return (
    <>
      <Box className="cmmn-box ">
        <Typography component="h4" className='cmmn-box-title'>Club in USD</Typography>
        <Box sx={{ width: '100%' }} className="cmmn-table">
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
  )
}
