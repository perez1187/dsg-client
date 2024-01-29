import React from 'react'

//css
import './Dashboard.css'

// using context
import {useAuth} from '../hooks/useAuth'

// components
import SignIn from '../components/signIn/SignIn'
import Sidebar from '../components/Sidebar/Sidebar'
import SelectDashboard from '../components/SelectDashboard/SelectDashboard'


const Dashboard = () => {

  const {authData} =useAuth()

  return (
    <div className="dashApp">
      {authData ?
        <div className="dashAppGlass">
          <Sidebar/>
          <SelectDashboard/>
        </div>
  
      :
        <SignIn/>
    }
      
    
    </div>
    
  )
}

export default Dashboard