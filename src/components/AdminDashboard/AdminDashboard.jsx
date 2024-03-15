import React from 'react'
import "./SelectDashboard.css"

// using context
import {useAuth} from '../../hooks/useAuth'

// components
import AdminMainDashboard from '../AdminMainDashboard/AdminMainDashboard'
import AdminReports from '../AdminReports/AdminReports'
import AdminReferral from '../AdminReferral/AdminReferral'
import Offers from '../Offers/Offers'
import Payments from '../Payments/Payments'

const AdminDashboard = () => {

    const {selected} =useAuth()

    if (selected === 0)  {
        return (
            <AdminMainDashboard/>
          )
    } else if (selected === 1)  {
        return (
            <AdminReports/>
          )
    } else if (selected === 2)  {
        return (
            <AdminReferral/>
          )
    } else if (selected === 3)  {
        return (
            <Offers/>
          )
    } else if (selected === 4)  {
        return (
            <Payments/>
          )
    }

}

export default AdminDashboard