import React from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', 
    renderCell: (params) => {
    return (
      <div
        className="userBox"
        style={{ cursor: "pointer" }}
      >
        <img src='/img/user_thumb.svg' alt='' />
        <Typography>-</Typography>
      </div>
    );
    }, headerName: 'Ttle', width: 230 },
  { field: 'ttle', headerName: 'Ttle', width: 230, },
  { field: 'ttle01', headerName: 'Ttle', width: 230, },
  { field: 'ttle02', headerName: 'Ttle', width: 230, },
  { field: 'ttle03', headerName: 'Ttle', width: 230, },
  { field: 'ttle04', headerName: 'Ttle', width: 230, },
  
];

const rows = [
  { id: "aas", 
  ttle: "-", ttle01: "-", ttle02: "-", ttle03: "-", ttle04: "-"},
  { id: 'MiamiBallers', ttle: "-", ttle01: "-", ttle02: "-", ttle03: "-", ttle04: "-"},
];

export default function Transactions(props) {
 
  return (
    <>
      <Box className="cmmn-box ">
        <Typography component="h4" className='cmmn-box-title'>Transactions</Typography>
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
