import { AppBar, Box, Button, IconButton, Toolbar, Typography, Stack, Divider, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { authService } from "@app/features/auth/services/authService";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ width: '100%', zIndex: 1400 }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                Olx Clone
              </Link>
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box
                onMouseEnter={handleMenuOpen}
                onMouseLeave={handleMenuClose}
                sx={{ display: 'inline-block' }}
              >
                <Button
                  color="inherit"
                  startIcon={<ShoppingCartIcon />}
                  aria-controls={open ? 'category-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  sx={{ minWidth: 120 }}
                >
                  Buy / Sell
                </Button>
                <Menu
                  id="category-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleMenuClose}
                  slotProps={{ list: { onMouseLeave: handleMenuClose } }}
                  sx={{ '& .MuiPaper-root': { minWidth: 180 } }}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                  disableAutoFocusItem
                >
                  <MenuItem 
                    onClick={handleMenuClose} 
                    sx={{ minWidth: 180, '&:hover': { backgroundColor: '#e3f2fd' } }}
                  >
                    <ShoppingCartIcon fontSize="small" sx={{ mr: 1 }} /> Buy
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/sell-category"
                    onClick={handleMenuClose}
                    sx={{ minWidth: 180, '&:hover': { backgroundColor: '#e3f2fd' } }}
                  >
                    <AddCircleOutlineIcon fontSize="small" sx={{ mr: 1 }} /> Sell
                  </MenuItem>
                </Menu>
              </Box>
                <Button
                color="inherit"
                startIcon={<ListAltIcon />}
                component={Link}
                to="/my-ads"
                >
                My Ads
                </Button>
              <Button color="inherit"  component={Link}
                to="/my-chats" startIcon={<ChatBubbleOutlineIcon />}>Chats</Button>
              <Button color="inherit"  component={Link}
                to="/my-profile" startIcon={<AccountCircleIcon />}>Profile</Button>
            </Stack>
            <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: 'rgba(255,255,255,0.2)' }} />
            <Stack direction="row" spacing={1} sx={{ ml: 1 }}>
              {!authService.isAuthenticated() && (
              <Button 
                color="inherit" 
                variant="outlined" 
                component={Link}
                to="/login"
                sx={{ 
                  borderColor: 'white', 
                  color: 'white', 
                  '&:hover': { 
                    borderColor: '#fff', 
                    background: 'rgba(255,255,255,0.08)' 
                  } 
                }}
              >
                Login
              </Button>
            )}
             {!authService.isAuthenticated() && (
                <Button 
                color="inherit" 
                variant="contained" 
                component={Link}
                to="/auth/signup"
                sx={{ 
                  bgcolor: 'white', 
                  color: 'primary.main',
                  '&:hover': { 
                    bgcolor: 'rgba(255,255,255,0.9)' 
                  } 
                }}
              >
                Sign Up
              </Button>
            )}
             {authService.isAuthenticated() && (
                <Button 
                color="inherit" 
                variant="contained" 
                onClick={() => {
                  authService.clearAuthData();
                 navigate('/login');
                }}
                sx={{ 
                  bgcolor: 'white', 
                  color: 'primary.main',
                  '&:hover': { 
                    bgcolor: 'rgba(255,255,255,0.9)' 
                  } 
                }}
              >
                Logout
              </Button>
            )}
            
            </Stack>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
    </>
  );
};

export default Header;
