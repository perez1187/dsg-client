import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import LayoutOne from '../components/Layouts/LayoutOne'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// logo
import Logo from "../imgs/LogoDark.svg"

export default function Verification() {
    React.useEffect(() => {
        document.body.classList.add("black-body");
        return () => {
            document.body.classList.remove("black-body");
        };
    }, []);
    return (
        <>
            <LayoutOne>
                <Box className="userPageBox">
                    <Box className="userContainer">
                        <Box className="authBox">
                            <img src={Logo} alt="logo" className="auth-logo" />
                            <Typography component="h5">AFFILIATES AREA</Typography>
                            <Typography component="h5" className='headV2'>Verification</Typography>
                            <Typography>Enter your 4 digits code that you received on your email.</Typography>
                            <Box component="form">
                                <Box className="vrfctn-box">
                                    <input type='text' />
                                    <input type='text' />
                                    <input type='text' />
                                    <input type='text' />
                                </Box>
                               
                                <Button type="submit" className="def-button">Continue</Button>
                            </Box>
                            <Typography className='rsnd-text'>If you didn’t receive a code! <span>Resend</span></Typography>
                        </Box>
                    </Box>
                </Box>
            </LayoutOne>
        </>
    )
}
