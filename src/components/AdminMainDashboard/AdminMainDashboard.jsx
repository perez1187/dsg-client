import React from 'react'
import './MainDashboard.css'
import { Typography } from '@mui/material'
import AdminRevenueHistory from '../Charts/AdminRevenueHistory/AdminRevenueHistory'
import AdminDashActiveClubs from '../Charts/AdminDashActiveClubs/AdminDashActiveClubs'
import TotalRevenue from './TotalRevenue'
// import StickyFooter from '../Footer/StickyFooter';


const AdminMainDashboard = () => {
  return (
    <>
    <Typography component="h2" className='def-title'>Dashboard</Typography>
      
      {/* Revenue numbers */}
      <TotalRevenue />

      {/* revene history chart */}


      <AdminRevenueHistory/>
      
      <AdminDashActiveClubs/>
      {/* <StickyFooter/> */}
      
    </>
    
  )
}

export default AdminMainDashboard