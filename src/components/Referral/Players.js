import React from 'react'
import { Box, Typography } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Player', 'Total Revenue'),
  createData('Player', 'Total Revenue'),
  createData('Player', 'Total Revenue'),
  createData('Player', 'Total Revenue'),
  createData('Player', 'Total Revenue'),
];

export default function Players(props) {
  return (
    <>
      <Box className="cmmn-box ">
        <Typography component="h4" className='cmmn-box-title'>Players</Typography>
        <Box sx={{ width: '100%' }} className="cmmn-table">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Player</TableCell>
                  <TableCell align="center">Total Revenue</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  )
}
