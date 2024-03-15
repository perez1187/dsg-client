import React from 'react'
import "./SelectDashboard.css"

// using context
import {useAuth} from '../../hooks/useAuth'

// components
import MainDashboard from '../MainDashboard/MainDashboard'
import Reports from '../Reports/Reports'
import Referral from '../Referral/Referral'
import Offers from '../Offers/Offers'
import Payments from '../Payments/Payments'

const SelectDashboard = () => {

    const {selected} =useAuth()

    if (selected === 0)  {
        return (
            <MainDashboard/>
          )
    } else if (selected === 1)  {
        return (
            <Reports/>
          )
    } else if (selected === 2)  {
        return (
            <Referral/>
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

export default SelectDashboard