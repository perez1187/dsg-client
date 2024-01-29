import React from 'react'
import './MainDashboard.css'

import RevenueHistory from '../Charts/RevenueHistory/RevenueHistory'
import DashActiveClubs from '../Charts/DashActiveClubs/DashActiveClubs'
// import StickyFooter from '../Footer/StickyFooter';


const MainDashboard = () => {
  return (
    <div className="MainDashboard">
    
      
      {/* title */}
      <div className="dashTitle" >
        Dashboard
      </div>

      {/* Revenue numbers */}
      <div className="dashRev">
        <span>Total Revenue</span>
        <span>11M</span>
      </div>

      {/* revene history chart */}


      <RevenueHistory/>
      
      <DashActiveClubs/>
      {/* <StickyFooter/> */}
      
    </div>
    
  )
}

export default MainDashboard