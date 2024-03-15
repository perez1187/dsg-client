import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import LayoutOne from '../components/Layouts/LayoutOne'
// logo
import Logo from "../imgs/LogoDark.svg"

export default function ForgotPassword() {
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
                            <Typography component="h5" className='headV2'>Forgot password</Typography>
                            <Typography>Enter your email for the verification proccess,we will send 4 digits code to your email.</Typography>
                            <Box component="form">
                                <Box className="input-box">
                                    <input
                                        type="text"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        name="username"
                                        autoComplete="username"
                                        placeholder="Email"
                                        autoFocus
                                        className="user-input"
                                    />
                                </Box>
                                <Button type="submit" className="def-button">Continue</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </LayoutOne>
        </>
    )
}
