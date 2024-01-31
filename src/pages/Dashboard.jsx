import React from 'react'

//css
import './Dashboard.css'

// using context
import {useAuth} from '../hooks/useAuth'

// components
import SignIn from '../components/signIn/SignIn'
import Sidebar from '../components/Sidebar/Sidebar'
import SelectDashboard from '../components/SelectDashboard/SelectDashboard'
import LayoutTwo from '../components/Layouts/LayoutTwo'


const Dashboard = () => {

  const {authData} =useAuth()

  return (
    <LayoutTwo>
    
      {authData ?
        <>
          <SelectDashboard/>
        </>
  
      :
        <SignIn/>
    }
      
    
    </LayoutTwo>
    
  )
}

export default Dashboard