import React from 'react'
import { Box, Typography } from '@mui/material'
import { Chart } from "react-google-charts";


export const data = [
    ["", "Weekly", "Monthly"],
    ["9 Oct", 9000, 8500,],
    ["10 Oct", 7000, 6500],
    ["11 Oct", 9000, 8500],
    ["12 Oct", 9900, 9500],
    ["13 Oct", 9000, 8500],
    ["14 Oct", 8000, 7500],
    ["15 Oct", 7500, 6500],
    ["16 Oct", 8500, 7500],
  ];
  
  export const options = {
    colors: ['#878D96', '#C1C7CD'],
    bar: { groupWidth: "5%" },  // width of bars here
  };

export default function RevenueHistory() {
  return (
    <>
        <Box className="cmmn-box">
            <Typography component="h4" className='cmmn-box-title'>Revenue History</Typography>
            <Box className="chart-box">
                <Chart
                    chartType="Bar"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                />
            </Box>
        </Box>
    </>
  )
}
