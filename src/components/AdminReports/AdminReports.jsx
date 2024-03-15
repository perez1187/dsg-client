import React, { useState } from 'react';
import './Reports.css';
import { Box, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import AffiliatesPerformance from './AffiliatesPerformance';
import SelectGroup from './SelectGroup';
import InfoBoxes from './InfoBoxes';
import UplinePerformance from './UplinePerformance';
import ClubsPerformance from './ClubsPerformance';

const AdminReports = () => {
  return (
    <>
      <Typography component='h2' className='def-title'>
        App Report
      </Typography>

      <SelectGroup />
      <InfoBoxes />
      <AffiliatesPerformance />
      <UplinePerformance />
      <ClubsPerformance />
    </>
  );
};

export default AdminReports;
