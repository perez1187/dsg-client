import React, {useState} from 'react'
import './Reports.css'
import { Box, Typography } from '@mui/material'
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AffiliatesPerformance from './AffiliatesPerformance';
import SelectGroup from './SelectGroup';
import InfoBoxes from './InfoBoxes';
import UplinePerformance from './UplinePerformance';
import ClubsPerformance from './ClubsPerformance';

const AdminReports = () => {

  ///datepicker
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const range = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    "Last 7 Days": [moment().subtract(6, "days"), moment()],
    "Last 30 Days": [moment().subtract(29, "days"), moment()],
    "This Month": [moment().startOf("month"), moment().endOf("month")],
    "Last Month": [
      moment()
        .subtract(1, "month")
        .startOf("month"),
      moment()
        .subtract(1, "month")
        .endOf("month")
    ],
    "Last Year": [
      moment()
        .subtract(1, "year")
        .startOf("year"),
      moment()
        .subtract(1, "year")
        .endOf("year")
    ]
  };

  const handleEvent = (event, picker) => {
    console.log("start: ", picker.startDate._d);
    console.log("end: ", picker.endDate._d);
    setFromDate(picker.startDate._d.toISOString());
    setToDate(picker.endDate._d.toISOString());
  };

  return (
    <>
      <Typography component="h2" className='def-title'>App Report</Typography>
      <Box className="dat_pic_box m-b-24">
        <DateRangePicker
              // startDate={new Date()}
              // endDate={new Date()}
              ranges={range}
              alwaysShowCalendars={true}
              onEvent={handleEvent}
            >
              <button className='def_date_pickr'>
                {moment(fromDate).format("LL")} 
                &nbsp; - &nbsp; 
                {moment(toDate).format("LL")}
                <KeyboardArrowDownIcon />
              </button>
          </DateRangePicker>
      </Box>
      <SelectGroup />
      <InfoBoxes />
      <AffiliatesPerformance />
      <UplinePerformance />
      <ClubsPerformance />

    </>
  )
}

export default AdminReports