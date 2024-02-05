import React from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import MenuIcon from '@mui/icons-material/Menu';

const columns = [
  { field: 'id', headerName: 'Upline', width: 200 },
  { field: 'profitLoss', headerName: 'Profit/Loss in USD', width: 180 },
  { field: 'rakeUsd', headerName: 'Rake in USD', width: 130 },
  { field: 'deal', headerName: 'Deal', width: 120, },
  { field: 'agentSettlement', headerName: 'Agent settlement in...', width: 200, },
  { field: 'clubSettlement', headerName: 'Club Settlement in USD', width: 200, },
  { field: 'profitUsd', headerName: 'Profit in USD', width: 160, },
  { field: 'action', headerName: <button className='menuBtn admin_menuBtn'><MenuIcon /></button>, width: 120, },
  
];

const rows = [
  { id: 'PokerBros Brazil', profitLoss: '27,061,25', rakeUsd: '940', deal: '40%', agentSettlement: "24,667.13", clubSettlement: "27,632,81", profitUsd: "75%", action: "" },
  
];

export default function UplinePerformance(props) {
 
  return (
    <>
      <Box className="cmmn-box ">
        <Typography component="h4" className='cmmn-box-title'>Upline Performance</Typography>
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
