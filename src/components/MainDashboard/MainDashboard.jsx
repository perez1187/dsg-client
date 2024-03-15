import React from 'react';
import './MainDashboard.css';
import { Typography } from '@mui/material';
import RevenueHistory from '../Charts/RevenueHistory/RevenueHistory';
import DashActiveClubs from '../Charts/DashActiveClubs/DashActiveClubs';
import TotalRevenue from '../dashboard/TotalRevenue';
// import StickyFooter from '../Footer/StickyFooter';

const MainDashboard = () => {
  return (
    <>
      <Typography component='h2' className='def-title'>
        Dashboard
      </Typography>

      {/* Revenue numbers */}
      <TotalRevenue />

      {/* revene history chart */}

      <RevenueHistory />

      <DashActiveClubs />
      {/* <StickyFooter/> */}
    </>
  );
};

export default MainDashboard;
