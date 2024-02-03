import React from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import MenuIcon from '@mui/icons-material/Menu';

const columns = [
  { field: 'id', headerName: 'Union', width: 130 },
  { field: 'club', headerName: 'Club', width: 130 },
  { field: 'profitLossUsd', headerName: 'Profit/Loss in USD', width: 180 },
  { field: 'rake', headerName: 'Rake in USD', width: 130, },
  { field: 'clubSettlement', headerName: 'Club Settlement in ch... ', width: 200, },
  { field: 'clubSettlementUsd', headerName: 'Club Settlement in USD', width: 200, },
  { field: 'agentSettlement', headerName: 'Agent Settlement', width: 230, },
  { field: 'profitUsd', headerName: 'Profit in USD', width: 230, },
  { field: 'action', headerName: <button className='menuBtn admin_menuBtn'><MenuIcon /></button>, width: 120, },
  
];

const rows = [
  { id: 'Diamond', club: "Lucy", profitLossUsd: "940", rake: "40%", clubSettlement: "24,667.13", clubSettlementUsd: "$ 27,632,81", agentSettlement: "75%", profitUsd: "$0", action: "" },
  
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
