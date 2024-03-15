import React, {useState} from 'react'
import './Payments.css'
import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Transactions from './Transactions';
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const Payments = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
      <Typography component="h2" className='def-title'>Payments</Typography>
        <Box className="dat_pic_boxv2">
          <DateRangePicker
            // startDate={new Date()}
            // endDate={new Date()}
            ranges={range}
            alwaysShowCalendars={true}
            onEvent={handleEvent}
          >
            <button>
              {moment(fromDate).format("LL")}<CalendarTodayIcon className='dtpckr' /> 
              <Box className="mdd_arrow">
                <ArrowForwardIcon />
              </Box>
              {moment(toDate).format("LL")} <CalendarTodayIcon className='dtpckr' />
            </button>
          </DateRangePicker>
        </Box>
      <Box className="tab_and_detpckr">
        <Box sx={{ width: '100%' }}>
          <Box className="tabs_main">
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab className='tabsPernt' label="Transactions" {...a11yProps(0)} />
              <Tab className='tabsPernt' label="Statemants" icon={<div className='sevenBox'>7</div>} iconPosition="end" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0} className="tabsPenal">
            <Transactions />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1} className="tabsPenal">
            Statemants
          </CustomTabPanel>
        </Box>
        
      </Box>
    </>
  )
}

export default Payments