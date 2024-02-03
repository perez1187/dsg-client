import React from 'react'
import { Box, Typography } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function createData(name, showdown, referee, chipRate, dotBtn) {
  return { name, showdown, referee, chipRate, dotBtn };
}
const rows = [
  createData('Ralfs', 'Miami Ballers', 'Verners 2% ', 'BRL'), 
  createData('Juliano', 'Miami Ballers', 'Verners 2% ', 'BRL'), 
];

export default function Players(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box className="cmmn-box ">
        {/* <Typography component="h4" className='cmmn-box-title'>Players</Typography> */}
        <Box sx={{ width: '100%' }} className="cmmn-table">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="start">Name</TableCell>
                  <TableCell align="start">Showdown</TableCell>
                  <TableCell align="start">Referee %</TableCell>
                  <TableCell align="start">
                    Chip Rate
                    <ArrowDownwardIcon className='downArrow' />
                  </TableCell>
                  <TableCell align="end"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="start" component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="start">{row.showdown}</TableCell>
                    <TableCell align="start">{row.referee}</TableCell>
                    <TableCell align="start">{row.chipRate}</TableCell>
                    <TableCell align="end">
                      <div className='menuPernt' align="end">
                        <button 
                          className='threedotBtn'
                          aria-controls={open ? 'basic-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          onClick={handleClick}
                        >
                          <MoreVertIcon />
                        </button> 
                        <Menu
                          className='openMenu'
                          id="basic-menu"
                          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                          <MenuItem onClick={handleClose} className='menuLink'><EditIcon /> <Typography>Edit</Typography></MenuItem>
                          <MenuItem onClick={handleClose} className='menuLink'><DeleteIcon /> Delete</MenuItem>
                        </Menu>
                      </div>
                    </TableCell>
                    
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
