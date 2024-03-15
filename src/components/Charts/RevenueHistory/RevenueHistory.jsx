import React, { PureComponent, useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';
import { Box, Typography } from '@mui/material';
// css
import './RevenueHistory.css';

// data
// import { revHistory } from '../../../data/data';
import { getAgentResultSummary, transformData } from './helper';

const Example = () => {
  const [revHistory, setRevHistory] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getAgentResultSummary();
      const tranData = transformData(data.agentResults.by_date);
      setRevHistory(tranData);
    };
    getData();
  }, []);
  return (
    <Box className='cmmn-box'>
      <Typography component='h4' className='cmmn-box-title'>
        Revenue History
      </Typography>
      <Box className='chart-box'>
        <ResponsiveContainer width='100%' height='100%' className={'rev'}>
          <BarChart
            width={500}
            height={300}
            data={revHistory}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke='#000' />
            <Bar dataKey='revenue' fill='#C1C7CD' />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Example;
