import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, useMediaQuery, useTheme, IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = ({ trendingRef, contactRef }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [logoutAcknowledged, setLogoutAcknowledged] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const storedUsername = localStorage.getItem('username');
      setUsername(storedUsername || '');
    } else {
      setIsLoggedIn(false);
      setUsername('');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setLogoutAcknowledged(true);
    setTimeout(() => {
      setLogoutAcknowledged(false);
      navigate('/');
    }, 3000);
  };

  const handleTrendingClick = () => {
    if (trendingRef && trendingRef.current) {
      window.scrollTo({
        top: trendingRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleContactClick = () => {
    if (contactRef && contactRef.current) {
      window.scrollTo({
        top: contactRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleCollectionClick = () => {
    if (isLoggedIn) {
      navigate('/product');
    } else {
      const message = 'To view the collection, please login first.';
      alert(message);
      navigate('/login');
    }
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleMobileMenuItemClick = (route) => {
    handleMobileMenuClose();
    navigate(route);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderMobileMenu = () => {
    return (
      <Box display="flex" alignItems="center">
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleMobileMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={mobileMenuAnchor}
          open={Boolean(mobileMenuAnchor)}
          onClose={handleMobileMenuClose}
        >
          <MenuItem onClick={() => handleMobileMenuItemClick('/')}>Home</MenuItem>
          {trendingRef && (
            <MenuItem onClick={handleTrendingClick}>Trending</MenuItem>
          )}
          <MenuItem onClick={handleCollectionClick}>Collection</MenuItem>
          {contactRef && (
            <MenuItem onClick={handleContactClick}>Contact Us</MenuItem>
          )}
          {isLoggedIn ? (
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          ) : (
            <>
              <MenuItem onClick={() => navigate('/login')}>Login</MenuItem>
              <MenuItem onClick={() => navigate('/signup')}>Register</MenuItem>
            </>
          )}
        </Menu>
      </Box>
    );
  };

  const renderDesktopMenu = () => {
    return (
      <Box display="flex" alignItems="center" width="100%">
        <Box sx={{ flex: '1 0 50%' }}>
          <Typography variant="h5" color="#FFD700" sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
            Kazana Jewellers
          </Typography>
        </Box>
        <Box sx={{ flex: '1 0 50%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', pr: 2 }}>
          <Typography
            variant="h6"
            sx={{ mr: '1.5rem', color: '#c7c6c10', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Home
          </Typography>
          {trendingRef && (
            <Typography
              variant="h6"
              sx={{ mr: '1.5rem', color: '#c7c6c10', cursor: 'pointer' }}
              onClick={handleTrendingClick}
            >
              Trending
            </Typography>
          )}
          <Typography
            variant="h6"
            sx={{ mr: '1.5rem', color: '#c7c6c10', cursor: 'pointer' }}
            onClick={handleCollectionClick}
          >
            Collection
          </Typography>
          {contactRef && (
            <Typography
              variant="h6"
              sx={{ mr: '1.5rem', color: '#c7c6c10', cursor: 'pointer' }}
              onClick={handleContactClick}
            >
              Contact Us
            </Typography>
          )}
          {isLoggedIn ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ mr: '1rem', color: '#FFF' }}>
                Welcome {username}
              </Typography>
              <Button
                sx={{ color: '#000', bgcolor: '#FFD700', '&:hover': { bgcolor: '#FFC800' } }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Box>
          ) : (
            <Box>
              <Button
                sx={{ color: '#000', bgcolor: '#FFD700', marginRight: '1rem', '&:hover': { bgcolor: '#FFC800' } }}
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
              <Button
                sx={{ color: '#000', bgcolor: '#FFD700', '&:hover': { bgcolor: '#FFC800' } }}
                onClick={() => navigate('/signup')}
              >
                Register
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    );
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        {isMobile ? renderMobileMenu() : renderDesktopMenu()}
        {logoutAcknowledged && (
          <Typography variant="body1" sx={{ color: 'green' }}>
            Logout successful.
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
