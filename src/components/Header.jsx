import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// css
import "./Header.css"

// logo
import Logo from "../imgs/LogoDark.svg"

// using context
import {useAuth} from '../hooks/useAuth'

// data
import { pages } from '../data/settings';


  
  // 'About Us', 'Contact Us', 'FAQ', 'Dashboard'];
// const settings = ['Logout'];

function ResponsiveAppBar() {
  const {authData, setAuth} =useAuth()
  // const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

   // logout function
   const logout = () => {
    setAuth(null)
}
  // // 👇️ navigate to /
  // const navigateTo = async (href) => {           
  // navigate(href);          
  //         };
  
  const [language, setLanguage] = React.useState('');
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
    <AppBar className='headerv2'>
      <Container className='costomContainer'>
        <Toolbar disableGutters className="AAAAAAAA">
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src ={Logo} alt="logo" className='HeaderLogo' />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} className="risiwClass">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="toggel_btn"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.name} 
                  onClose={handleCloseNavMenu}
                  // onClick={navigateTo(page.href)}
                  href={page.href}
                >
                  {/* <Typography 
                    textAlign="center"
                    href={page.href}
                  >
                    {page.name}
                  </Typography> */}
                  <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    href={page.href}
                    sx={{ my: 1, color: 'black', display: 'block',textTransform: 'none' }}               
                  >
                    {page.name}
                  </Button>
                </MenuItem>
              ))}
              {authData  ? 
                <MenuItem 
                  onClose={handleCloseNavMenu}
                 >
                  <Button
                    onClick={logout}
                    href='/'
                    sx={{ my: 1, color: 'black', display: 'block',textTransform: 'none' }}               
                  >
                    Logout
                  </Button>
                </MenuItem>
              :
                <MenuItem 
                 onClose={handleCloseNavMenu}
                >
                <Button
                  href='/login'
                  sx={{ my: 1, color: 'black', display: 'block',textTransform: 'none' }}               
                >
                  Login
                </Button>
              </MenuItem>                
            
            }
            </Menu>
          </Box>
          
          <Typography
            className="logoPernt"
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src ={Logo} alt="logo" className='HeaderLogo' />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="all_link_hedr">
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                href={page.href}
                sx={{ my: 2, color: 'white', display: 'block',textTransform: 'none' }}
                className='HeaderButton'
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box className="hedrSelct_pernt">
            <FormControl sx={{ m: 1, minWidth: 120 }} className='def_form_cotrl'>
              <Select
                  value={language}
                  onChange={handleLanguageChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  className='def_select'
              >
                  <MenuItem value="">EN</MenuItem>
                  <MenuItem value={10}>CH</MenuItem>
              </Select>
          </FormControl>  
          </Box>
          {authData ? 
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                  <Avatar>A</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))} */}
                  <MenuItem 
                    key='logout' 
                    onClose={handleCloseUserMenu}
                    onClick={logout}
                    >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>

              </Menu>
            </Box>
            :               
              <Button
                onClick={handleCloseNavMenu}
                href="/login"
                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}
                className='sign_btn'
              >
                Sign in
              </Button>
          }
        </Toolbar>
      </Container>
    </AppBar>
    
    {/* <AppBar
        style={{
          background:"black",
          height:"8.125rem",
          flexShrink: "0",
          position:"relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        className='hm-header'
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            
          >
            <img src ={Logo} alt="logo" className='HeaderLogo' />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.name} 
                  onClose={handleCloseNavMenu}
                  href={page.href}
                >
                 
                  <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    href={page.href}
                    sx={{ my: 1, color: 'black', display: 'block',textTransform: 'none' }}               
                  >
                    {page.name}
                  </Button>
                </MenuItem>
              ))}
              {authData  ? 
                <MenuItem 
                  onClose={handleCloseNavMenu}
                 >
                  <Button
                    onClick={logout}
                    href='/'
                    sx={{ my: 1, color: 'black', display: 'block',textTransform: 'none' }}               
                  >
                    Logout
                  </Button>
                </MenuItem>
              :
                <MenuItem 
                 onClose={handleCloseNavMenu}
                >
                <Button
                  href='/login'
                  sx={{ my: 1, color: 'black', display: 'block',textTransform: 'none' }}               
                >
                  Login
                </Button>
              </MenuItem>                
            
            }
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             <img src ={Logo} alt="logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none' , md: 'flex' } }}
            style={{
              position:"relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap:"2.5rem"

            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                href={page.href}
                sx={{ my: 2, color: 'white', display: 'block',textTransform: 'none' }}
                className='HeaderButton'
              >
                {page.name}
              </Button>
            ))}

              Dashboard only shows for login users
              {authData ?
                <Button
                  onClick={handleCloseNavMenu}
                  href="/dashboard"
                  sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}
                  className='HeaderButton'
                >
                  Dashboard
                </Button>
                : <></>
             
              }                
                                                               
          </Box>
          
          
          
        </Toolbar>
      </Container>
    </AppBar> */}
    </>
  );
}
export default ResponsiveAppBar;