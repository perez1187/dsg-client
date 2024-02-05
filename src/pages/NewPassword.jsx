import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import LayoutOne from '../components/Layouts/LayoutOne'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// logo
import Logo from "../imgs/LogoDark.svg"

export default function NewPassword() {
    React.useEffect(() => {
        document.body.classList.add("black-body");
        return () => {
            document.body.classList.remove("black-body");
        };
    }, []);

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [showPasswordconf, setShowPasswordconf] = React.useState(false);
    const handleClickShowPasswordconf = () => setShowPasswordconf((showconf) => !showconf);
    return (
        <>
            <LayoutOne>
                <Box className="userPageBox">
                    <Box className="userContainer">
                        <Box className="authBox">
                            <img src={Logo} alt="logo" className="auth-logo" />
                            <Typography component="h5">AFFILIATES AREA</Typography>
                            <Typography component="h5" className='headV2'>New Password</Typography>
                            <Typography>Set the new password for your account so you can login and access all featuress.</Typography>
                            <Box component="form">
                                <Box className="input-box">
                                    <input
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        className="user-input"
                                        autoComplete="current-password"
                                        placeholder="Enter new password"
                                    />
                                    <Box className="toggleButtonv2" onClick={handleClickShowPassword}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </Box>
                                </Box>
                                <Box className="input-box">
                                    <input
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type={showPasswordconf ? 'text' : 'password'}
                                        id="password"
                                        className="user-input"
                                        autoComplete="current-password"
                                        placeholder="Confirm password"
                                    />
                                    <Box className="toggleButtonv2" onClick={handleClickShowPasswordconf}>
                                        {showPasswordconf ? <VisibilityOff /> : <Visibility />}
                                    </Box>
                                </Box>
                                <Button type="submit" className="def-button">Update Password</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </LayoutOne>
        </>
    )
}
