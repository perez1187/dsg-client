import * as React from 'react';
import {useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme} from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// using context
import {useAuth} from '../../hooks/useAuth'

//services
import { auth } from '../../services/userServices'

// logo
import Logo from "../../imgs/LogoDark.svg"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
    const navigate = useNavigate();

    const {authData, setAuth} =useAuth()
    const navigateHome = async () => {           
        navigate('/');          
                };
        

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    const dataAuth = await auth( {'username':data.get('username'), 'password': data.get('password')}) 
    console.log(data)
    console.log(dataAuth)
    // await setAuth(dataAuth) 
    try {
        if (dataAuth.refresh) {
            if (dataAuth.username == 'This field may not be blank.') {
                // console.log("chujjjj nie pusty")
            } else if (dataAuth.password == 'This field may not be blank.'){
                
            }

            else {
                await setAuth(dataAuth)
                await navigateHome() 
            }

        }

        } catch (e) {
        console.log('Error')
        
        // tutaj dac use state
        }   
  };

  React.useEffect(() => {
    document.body.classList.add("black-body");
    return () => {
      document.body.classList.remove("black-body");
    };
  }, []);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
    <Box className="userPageBox">
      <Box className="userContainer">
        <Box className="authBox">
          <img src ={Logo} alt="logo" className="auth-logo" />
          <Typography component="h5">
            AFFILIATES AREA
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
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
                placeholder="Password"           
              />
              <Box className="toggleButtonv2" onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </Box>
            </Box>
            <Link href="/forgot-password" className="frgt-link">
              Forgot password?
            </Link>
            <Button type="submit" className="def-button">Login</Button>
          </Box>
        </Box>
      </Box>
    </Box>
    
    </>
  );
}