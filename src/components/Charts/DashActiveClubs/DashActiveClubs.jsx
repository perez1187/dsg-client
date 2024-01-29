import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

// css
import './DashActiveClubs.css'

import { dashActiveXlubsRows } from '../../../data/data';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70, headerClassName: 'super-app-theme--header', },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

const columns = [
  {field:'app', headerName:'App', headerClassName: 'super-app-theme--header',width: 200, },
  {field:'union', headerName:'Union', headerClassName: 'super-app-theme--header', width: 200,},
  {field:'club', headerName:'Club', headerClassName: 'super-app-theme--header', width: 200,},
  {field:'clubId', headerName:'Club ID', headerClassName: 'super-app-theme--header', width: 200,},
  {field:'refId', headerName:'Ref ID', headerClassName: 'super-app-theme--header', width: 200,},
  {field:'totalRev', headerName:'Total Revenue', headerClassName: 'super-app-theme--header', width: 200,},
]  

export default function DataTable() {
  return (
    <div className='dashActiveClubs' >
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
    </div>
  );
}