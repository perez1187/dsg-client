import React, { useState } from 'react';
import './Reports.css';
import { Box, Button, Typography } from '@mui/material';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';

import ClubPlayersAgentsInUsd from './ClubPlayersAgentsInUsd';
import SelectGroup from './SelectGroup';
import InfoBoxes from './InfoBoxes';
import ClubAgentsInUsd from './ClubAgentsInUsd';
import ClubInUsd from './ClubInUsd';
import { useEffect } from 'react';
import { getAgentResultDetilsSummary } from './helper';

const Reports = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async (value) => {
    const dataRes = await getAgentResultDetilsSummary(value);
    setData(dataRes);
  };

  const refetchData = async (data) => {
    getData(data);
  };

  return (
    <>
      <Typography component='h2' className='def-title'>
        App Report
      </Typography>

      <SelectGroup data={data?.agentResultsSummary} valueChange={refetchData} />
      <InfoBoxes />
      <ClubPlayersAgentsInUsd />
      <ClubAgentsInUsd data={data} />
      <ClubInUsd data={data} />
    </>
  );
};

export default Reports;
