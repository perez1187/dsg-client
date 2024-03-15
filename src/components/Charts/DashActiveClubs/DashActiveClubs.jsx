import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
// css
import './DashActiveClubs.css';

import { dashActiveXlubsRows } from '../../../data/data';

const columns = [
  {
    field: 'app',
    headerName: 'App',
    headerClassName: 'super-app-theme--header',
    width: 200,
  },
  {
    field: 'union',
    headerName: 'Union',
    headerClassName: 'super-app-theme--header',
    width: 200,
  },
  {
    field: 'club',
    headerName: 'Club',
    headerClassName: 'super-app-theme--header',
    width: 200,
  },
  {
    field: 'clubId',
    headerName: 'Club ID',
    headerClassName: 'super-app-theme--header',
    width: 200,
  },
  {
    field: 'refId',
    headerName: 'Ref ID',
    headerClassName: 'super-app-theme--header',
    width: 200,
  },
  {
    field: 'totalRev',
    headerName: 'Total Revenue',
    headerClassName: 'super-app-theme--header',
    width: 200,
  },
];

export default function DataTable() {
  // const [dashActiveXlubsRows, setDashActiveXlubsRows] = useState([]);

  return (
    <Box className='cmmn-box'>
      <Typography component='h4' className='cmmn-box-title'>
        Active Clubs
      </Typography>
      {/* <span>Active Clubs</span> */}
      <DataGrid
        rows={dashActiveXlubsRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </Box>
  );
}
