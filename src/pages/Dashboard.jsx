import React from 'react'

//css
import './Dashboard.css'

// using context
import {useAuth} from '../hooks/useAuth'

// components
import SignIn from '../components/signIn/SignIn'
import Sidebar from '../components/Sidebar/Sidebar'
import SelectDashboard from '../components/SelectDashboard/SelectDashboard'
import AdminDashboard from '../components/AdminDashboard/AdminDashboard'
import LayoutTwo from '../components/Layouts/LayoutTwo'
import LayoutOne from '../components/Layouts/LayoutOne'


const Dashboard = () => {

  const {authData} =useAuth()

  return (
    
    <>      
      {authData ?
          <LayoutTwo>
            <SelectDashboard/>
          </LayoutTwo>
        :
          // <LayoutTwo>
          //   <SelectDashboard/>
          // </LayoutTwo>
          <LayoutOne>
            <SignIn/>
          </LayoutOne>
      }
    </>

  )
}

export default Dashboard