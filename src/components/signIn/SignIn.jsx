import * as React from 'react';
import {useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap:"2rem"
          }}
        >
            <img src ={Logo} alt="logo"
                style={{
                    width:"27.875rem",
                    height:"11.625rem",
                    justifyContent:"center",
                    alignItems:"center",
                    // paddingBottom:"2rem"
                }}
            />
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
            
          </Avatar> */}
          <Typography component="h1" variant="h5"
            style={{
                fontFamily:"Poppins",
                fontSize:"2rem",
                fontStyle:"normal",
                fontWeight:"bolder",
                color:"white"
            }}
          >
          AFFILIATES AREA
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              InputLabelProps={{
                style: { color: 'white' },
              }}
              sx={{ input: { color: 'white' ,background:"#161A23 !important"} }}
              style={{ 
                borderRadius: "0.5rem",
                background:"#161A23",
                color:"white"
              }}    
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputLabelProps={{
                style: { color: 'white' },
              }}
              sx={{ input: { color: 'white' } }}
              style={{ 
                borderRadius: "0.5rem",
                background:"#161A23",
                color:"white"
              }}                
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2"
                    style={{
                        color:"white",
                        fontFamily: "Poppins",
                        fontSize: "0.875rem",
                        fontStyle: "italic",
                        fontWeight: "400",
                        lineHeight: "normal",
                        textDecorationLine: "underline"
                    }}
                >
                  Forgot password?
                </Link>
              </Grid>
              {/* <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                background:"#D50000",
                borderRadius:"0.9375rem",
                fontFamily:"Poppins",
                fontSize: "1.25rem",
                fontStyle: "normal",
                fontWeight: "bolder",
                lineHeight: "normal",
                letterSpacing: "0.05rem"
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}