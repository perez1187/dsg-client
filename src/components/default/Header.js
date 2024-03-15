import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

export default function Header() {
    return (
        <>
            <Link to="/" className='responsive-logo'>
                <img src='/img/logo.svg' alt='' />
            </Link>
            <Box className="right-header">
                <ul>
                    <li className='d-none-mob'>
                        <Box className="blnc-box">
                            <img src='/img/wallet.svg' alt='' />
                            $0, 000
                        </Box>
                    </li>
                    <li>
                        <Button className="ntfctn-box">
                            <NotificationsNoneIcon />
                            <Box className="ntfctn-nmbr">9</Box>
                        </Button>
                    </li>
                    <li>
                        <Button className="settings-box">
                            <SettingsOutlinedIcon />
                        </Button>
                    </li>
                    <li>
                        <Link to="/" className='user-block'>
                            <Person2OutlinedIcon />
                        </Link>
                    </li>
                </ul>
            </Box>
        </>
    )
}
